package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"

	// "runtime"
	"net/http"
	"os"
	"sync"

	// "strings"
	// "encoding/json"
	// "strconv"
	"time"

	// "github.com/tidwall/sjson"

	// "go.nanomsg.org/mangos/v3"
	// mangosErr "go.nanomsg.org/mangos/v3/errors"
	"go.nanomsg.org/mangos/v3/protocol"
	"go.nanomsg.org/mangos/v3/protocol/pair"
	_ "go.nanomsg.org/mangos/v3/transport/all"

	// "code.vegaprotocol.io/vega/libs/num"
	"code.vegaprotocol.io/vega/core/events"
	// "code.vegaprotocol.io/vega/libs/proto"
	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
	"github.com/golang/protobuf/proto"

	"github.com/segmentio/kafka-go"
)

// Refactor broker:
//	- Instead of the broker distributing the bus events to different kafka topics based on their type
//	  we are going to distribute the bus events to different goroutines based on their type, each of these
// 	  goroutines will persist the bus events into their corresponding tables in the db.
//
//	- Kafka will still be used but only to notify the API service of when a set of inserts for a particular
//	  block is complete, this will allow the service to query up to date data and push it to all subscribers.
//	  Realistically, kafka is probably overkill for this and we can probbaly use gRPC later on.

type Broker struct {
	ss               SocketServer
	kc               KafkaClient
	topicSet         map[string]void
	busEventTopicMap map[string]string
	topicChans       map[string]chan *eventspb.BusEvent
	isReplaying      bool
	pm               *persistenceManager
}

type SocketServer struct {
	sock protocol.Socket
	addr string
}

type KafkaClient struct {
	writer     *kafka.Writer
	kafkaMsgCh chan kafka.Message
}

type void struct{}

var member void

func newSocketServer(addr string) (*SocketServer, error) {

	sock, err := pair.NewSocket()
	if err != nil {
		return nil, fmt.Errorf("unable to create new socket %w", err)
	}

	return &SocketServer{
		addr: addr,
		sock: sock,
	}, nil

}

func newKafkaClient() (*KafkaClient, error) {

	kafkaBrokers := os.Getenv("KAFKA_BROKERS")

	w := &kafka.Writer{
		Addr:                   kafka.TCP(kafkaBrokers),
		Balancer:               &kafka.LeastBytes{},
		RequiredAcks:           kafka.RequireOne,
		BatchSize:              1000,
		BatchTimeout:           time.Millisecond * 10,
		BatchBytes:             2097152,
		AllowAutoTopicCreation: true,
	}

	return &KafkaClient{
		writer:     w,
		kafkaMsgCh: make(chan kafka.Message),
	}, nil

}

func newBroker() *Broker {

	listenAddr := "tcp://0.0.0.0:3005"

	socketServer, err := newSocketServer(listenAddr)
	if err != nil {
		log.Fatal("Failed to create socket server: %w", err)
	}

	kafkaClient, err := newKafkaClient()
	if err != nil {
		log.Fatal("Failed to create new kafka client: %w", err)
	}

	busEventTopicMap := GetBusEventTopicMap()

	topicSet := make(map[string]void)

	for _, v := range busEventTopicMap {
		// if v == "blocks" {
		// 	continue
		// }
		topicSet[v] = member
	}

	topicChans := make(map[string]chan *eventspb.BusEvent)
	for k, _ := range topicSet {
		topicChans[k] = make(chan *eventspb.BusEvent)
	}

	broker := &Broker{
		ss:               *socketServer,
		kc:               *kafkaClient,
		topicSet:         topicSet,
		busEventTopicMap: busEventTopicMap,
		topicChans:       topicChans,
		isReplaying:      true,
	}

	broker.pm = newPersistenceManager(broker).(*persistenceManager)

	return broker
}

func (kc KafkaClient) startSendLoop() {

	go func() {
		ctx := context.Background()
		for msg := range kc.kafkaMsgCh {
			err := kc.writer.WriteMessages(ctx, msg)
			if err != nil {
				log.Printf("Failed to write messages to kafka: %v", err)
			}
		}
	}()

}

func (s SocketServer) listen() error {

	err := s.sock.Listen(s.addr)
	if err != nil {
		return fmt.Errorf("unable to listen on %v: %w", s.addr, err)
	}

	return nil

}

func (s SocketServer) send(evt events.Event) {

	fmt.Println(evt.StreamMessage())

	msg, err := proto.Marshal(evt.StreamMessage())
	if err != nil {
		log.Fatal("Failed to marshal bus event, err: %w", err)
	}

	err = s.sock.Send(msg)
	if err != nil {
		log.Fatal("Failed to send event on socket, err: %w", err)
	}

}

func (s SocketServer) recieve(wg *sync.WaitGroup) chan []byte {

	inCh := make(chan []byte, 100000)

	go func() {
		defer close(inCh)
		defer wg.Done()
		for {
			msg, err := s.sock.Recv()
			if err != nil {
				log.Fatal(fmt.Errorf("failed to receive event from socket, err: %w", err))
			}
			inCh <- msg
		}
	}()

	return inCh

}

func (b Broker) monitorCoreNodeChainStatus() {

	// Maybe we should refactor this to send an event to a channel to notify every time the chain
	// status has changed. This way we can switch the persistence logic back and forth between
	// replaying/notReplaying instead of just from reaplaying -> notReplaying.

	// ---------- Needs rafactor to use vega time and current time to determine replay status ---------- \\

	ticker := time.NewTicker(time.Second * 5)

	go func() {
		for range ticker.C {
			fmt.Printf("Checking chain status at: http://%v/statistics\n", os.Getenv("VEGA_NODE_REST_API"))
			res, err := http.Get(fmt.Sprintf("http://%v/statistics", os.Getenv("VEGA_NODE_REST_API")))
			if err != nil {
				log.Printf("Could not get statistics endpoint: %v", err)
				// Set replaying to true to prevent block inserts of events once vega node comes online.
				b.isReplaying = true
				for topic := range b.topicSet {
					b.pm.blockPersisters[topic].Pause()
				}
			}

			body, err := io.ReadAll(res.Body)
			if err != nil {
				log.Printf("Failed to read response body: %v", err)
			}
			res.Body.Close()

			data := make(map[string]any)
			json.Unmarshal(body, &data)

			// Get times
			currentTime := data["statistics"].(map[string]any)["currentTime"].(string)
			vegaTime := data["statistics"].(map[string]any)["vegaTime"].(string)

			layout := "2006-01-02T15:04:05.000000000Z"
			cTime, err := time.Parse(layout, currentTime)
			if err != nil {
				log.Fatalf("Failed to parse current time from vega node statistics endpoint: %v", err)
			}
			vTime, err := time.Parse(layout, vegaTime)
			if err != nil {
				log.Fatalf("Failed to parse vega time from vega node statistics endpoint: %v", err)
			}
			currentTimeMillis := cTime.UnixMilli()
			vegaTimeMillis := vTime.UnixMilli()

			if currentTimeMillis-vegaTimeMillis >= 60000 {
				// Last block was more than 1 minute ago
				// If not replaying: pause block inserts, start batch persistance

			} else if currentTimeMillis-vegaTimeMillis >= 10000 {
				// Last block was more than 10 seconds ago

			} else {
				// If replaying: Stop replay, start block inserts.
				// Do block inserts
			}

		}
	}()

	go func() {
		// Periodically call the statistics endpoint on the Vega Core node to check for replay.
		for range ticker.C {
			fmt.Printf("Checking chain status at: http://%v/statistics\n", os.Getenv("VEGA_NODE_REST_API"))
			res, err := http.Get(fmt.Sprintf("http://%v/statistics", os.Getenv("VEGA_NODE_REST_API")))
			if err != nil {
				log.Printf("Could not get statistics endpoint: %v", err)
				// Set replaying to true to prevent block inserts of events once vega node comes online.
				b.isReplaying = true
				for topic := range b.topicSet {
					b.pm.blockPersisters[topic].Pause()
				}
			}

			body, err := io.ReadAll(res.Body)
			if err != nil {
				log.Printf("Failed to read response body: %v", err)
			}
			res.Body.Close()

			data := make(map[string]any)
			json.Unmarshal(body, &data)

			chainStatus := data["statistics"].(map[string]any)["status"].(string)
			fmt.Printf("Chain Status: %v", chainStatus)

			if chainStatus == "CHAIN_STATUS_REPLAYING" {
				fmt.Printf("Core node is replaying the chain...\n")
				b.isReplaying = true
				for topic := range b.topicSet {
					b.pm.blockPersistenceReady[topic] = false
					b.pm.blockPersisters[topic].Pause()
				}
			} else if chainStatus == "CHAIN_STATUS_CONNECTED" {
				fmt.Printf("Core node has finished replaying.\n")
				b.isReplaying = false
			} else if chainStatus == "CHAIN_STATUS_DISCONNECTED" {
				fmt.Printf("Core node is disconnected.")
				b.isReplaying = true
				for topic := range b.topicSet {
					b.pm.blockPersistenceReady[topic] = false
					b.pm.blockPersisters[topic].Pause()
				}
			}
		}

	}()

}

func (b Broker) decode(wg *sync.WaitGroup, inCh chan []byte) chan *eventspb.BusEvent {

	deCh := make(chan *eventspb.BusEvent)

	go func() {
		defer close(deCh)
		defer wg.Done()
		for buf := range inCh {
			busEvent := &eventspb.BusEvent{}
			err := proto.Unmarshal(buf, busEvent)
			if err != nil {
				log.Fatal("Failed to unmarshal bus event %w", err)
			}
			deCh <- busEvent
		}
	}()

	return deCh

}

func (b Broker) distribute(wg *sync.WaitGroup, deChan chan *eventspb.BusEvent) {

	var (
		height, blockCount, tradeCount, orderCount, posStateCount, assetCount, stakeLinkingCount int
		marketDataCount, marketCount, ledgerMovementsCount, accountCount, depositWithdrawalCount int
		expiredOrdersCount                                                                       int
	)

	ticker := time.NewTicker(time.Second * 1)

	go func() {
		for range ticker.C {
			fmt.Println("Height: ", height)
			fmt.Println("Blocks count: ", blockCount)
			fmt.Println("Trade count: ", tradeCount)
			fmt.Println("Order count: ", orderCount)
			fmt.Println("Expired orders count: ", expiredOrdersCount)
			fmt.Println("Position state count: ", posStateCount)
			fmt.Println("Market data count: ", marketDataCount)
			fmt.Println("Asset count: ", assetCount)
			fmt.Println("Market count: ", marketCount)
			fmt.Println("Legder movements count: ", ledgerMovementsCount)
			fmt.Println("Deposit withdrawal count: ", depositWithdrawalCount)
			fmt.Println("Account count: ", accountCount)
			fmt.Println("Stake Linking count: ", stakeLinkingCount)
		}
	}()

	go func() {
		defer wg.Done()
		for evt := range deChan {
			fmt.Printf("Event ID: %v\n", evt.Id)
			fmt.Printf("Event Type: %v\n", evt.Type)
			evtType := evt.Type // Get type of evt
			// jsonEvtBytes, err := json.Marshal(evt) // Convert each event into JSON
			// if err != nil {
			// 	log.Fatal("Failed to marshal bus event to JSON: %w", err)
			// }
			if evtType.String() == "BUS_EVENT_TYPE_PROTOCOL_UPGRADE_STARTED" {
				fmt.Println(evt)
				// Send msg to core to notify when ready for upgrade
				ctx := context.TODO()
				readyEvt := events.NewProtocolUpgradeDataNodeReady(ctx, int64(height))
				b.ss.send(readyEvt)

			}
			if evtType.String() == "BUS_EVENT_TYPE_TRADE" {
				tradeCount += 1
				// b.topicChans["trades"] <- evt
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_ORDER" {
				// continue // Ignore event for now
				orderCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_EXPIRED_ORDERS" {
				// continue // Ignore event for now
				expiredOrdersCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_POSITION_STATE" {
				continue // Ignore event for now
				posStateCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_MARKET_DATA" {
				marketDataCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_ASSET" {
				assetCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_MARKET_CREATED" || evtType.String() == "BUS_EVENT_TYPE_MARKET_UPDATED" {
				marketCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_LEDGER_MOVEMENTS" {
				ledgerMovementsCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_DEPOSIT" {
				continue // Ignore event for now
				depositWithdrawalCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_WITHDRAWAL" {
				continue // Ignore event for now
				depositWithdrawalCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_ACCOUNT" {
				continue // Ignore event for now
				accountCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_STAKE_LINKING" {
				stakeLinkingCount += 1
				b.topicChans[b.busEventTopicMap[evtType.String()]] <- evt
			}
			if evtType.String() == "BUS_EVENT_TYPE_BEGIN_BLOCK" {
				blockCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_BEGIN_BLOCK" || evtType.String() == "BUS_EVENT_TYPE_END_BLOCK" {
				// Send beginBlock and endBlock events to all topicChannels
				for t, channel := range b.topicChans {
					fmt.Printf("Sending event to topic: %v\n", t)
					// It's fine to pass a pointer to multiple channels right? As long as we're not mutating the event.
					channel <- evt
				}
			}
		}
	}()

}

// func (kc KafkaClient) send(wg *sync.WaitGroup, msgCh chan []kafka.Message) {

// 	go func() {
// 		ctx := context.Background()
// 		count := 0
// 		for batch := range msgCh {
// 			err := kc.writer.WriteMessages(ctx, batch...)
// 			if err != nil {
// 				log.Fatal("Error writing messages: ", err)
// 			}

// 			count += len(batch)
// 			fmt.Println(count)
// 		}
// 	}()
// }

func (b Broker) start() {

	wg := &sync.WaitGroup{}
	wg.Add(3)

	// Start kafka send loop
	b.kc.startSendLoop()

	// Monitor core node
	b.monitorCoreNodeChainStatus()

	// Start persistence
	b.pm.Start()

	err := b.ss.listen()
	if err != nil {
		log.Fatal(fmt.Errorf("failed to listen: %v", err))
	}

	// Recieve to inChan
	inChan := b.ss.recieve(wg)

	// Decode to deChan
	deChan := b.decode(wg, inChan)

	// Distribute to topic channels
	b.distribute(wg, deChan)

	// msgCh := b.format(wg, deCh)
	// msgCh := b.format(wg, busEventTopicMap, topicSet, deCh)

	// b.kc.send(wg, msgCh)

	wg.Wait()

}

func main() {

	time.Sleep(time.Second * 30)

	broker := newBroker()
	broker.start()

}
