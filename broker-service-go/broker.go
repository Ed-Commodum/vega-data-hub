package main

import (
	"context"
	"fmt"
	"log"
	// "runtime"
	"os"
	"sync"
	// "strings"
	"encoding/json"
	"strconv"
	"time"

	"github.com/tidwall/sjson"

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
}

type SocketServer struct {
	sock protocol.Socket
	addr string
}

type KafkaClient struct {
	writer *kafka.Writer
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
		writer: w,
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
		if v == "blocks" {
			continue
		}
		topicSet[v] = member
	}

	topicChans := make(map[string]chan *eventspb.BusEvent)
	for k, _ := range topicSet {
		topicChans[k] = make(chan *eventspb.BusEvent)
	}

	return &Broker{
		ss:               *socketServer,
		kc:               *kafkaClient,
		topicSet:         topicSet,
		busEventTopicMap: busEventTopicMap,
		topicChans:       topicChans,
	}

}

func (s SocketServer) listen() error {

	err := s.sock.Listen(s.addr)
	if err != nil {
		return fmt.Errorf("Unable to listen on %v: %w", s.addr, err)
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
		height, blockCount, batchBytesCount, tradeCount, orderCount, posStateCount int
		marketDataCount, assetCount, marketCount, ledgerMovementsCount             int
		depositWithdrawalCount, accountCount, stakeLinkingCount                    int
	)

	go func() {
		defer wg.Done()
		for evt := range deChan {
			// fmt.Printf("%v\n", evt.Id)
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
				for _, channel := range b.topicChans {
					// It's fine to pass a pointer to multiple channels right? As long as we're not mutating the event.
					channel <- evt
				}
			}

			if len(batch) >= 1000 { // When batch is a certain size, send it
				msgCh <- batch
				batch = nil
				// fmt.Println(string(jsonEvt))
				fmt.Println(evt.Id)
				fmt.Println("Height: ", height)
				fmt.Println("Blocks count: ", blockCount)
				fmt.Println("Bytes count: ", batchBytesCount)
				fmt.Println("Trade count: ", tradeCount)
				fmt.Println("Order count: ", orderCount)
				fmt.Println("Position state count: ", posStateCount)
				fmt.Println("Market data count: ", marketDataCount)
				fmt.Println("Asset count: ", assetCount)
				fmt.Println("Market count: ", marketCount)
				fmt.Println("Legder movements count: ", ledgerMovementsCount)
				fmt.Println("Deposit withdrawal count: ", depositWithdrawalCount)
				fmt.Println("Account count: ", accountCount)
				fmt.Println("Stake Linking count: ", stakeLinkingCount)
				batchBytesCount = 0
			}
		}
	}()

}

func (b Broker) format(wg *sync.WaitGroup, busEventTopicMap map[string]string, topicSet map[string]void, deCh chan *eventspb.BusEvent) chan []kafka.Message {

	msgCh := make(chan []kafka.Message)
	batch := []kafka.Message{}
	height := 0
	blockCount := 0
	batchBytesCount := 0
	tradeCount := 0
	orderCount := 0
	posStateCount := 0
	marketDataCount := 0
	assetCount := 0
	marketCount := 0
	ledgerMovementsCount := 0
	depositWithdrawalCount := 0
	accountCount := 0
	stakeLinkingCount := 0

	// printEventCounts := func(evt *eventspb.BusEvent) {
	// 	fmt.Println(evt.Id)
	// 	fmt.Println("Height: ", height)
	// 	fmt.Println("Blocks count: ", blockCount)
	// 	fmt.Println("Bytes count: ", batchBytesCount)
	// 	fmt.Println("Trade count: ", tradeCount)
	// 	fmt.Println("Order count: ", orderCount)
	// 	fmt.Println("Position state count: ", posStateCount)
	// 	fmt.Println("Market data count: ", marketDataCount)
	// 	fmt.Println("Asset count: ", assetCount)
	// 	fmt.Println("Market count: ", marketCount)
	// 	fmt.Println("Legder movements count: ", ledgerMovementsCount)
	// 	fmt.Println("Deposit withdrawal count: ", depositWithdrawalCount)
	// 	fmt.Println("Account count: ", accountCount)
	// 	fmt.Println("Stake Linking count: ", stakeLinkingCount)
	// }

	go func() {
		defer close(msgCh)
		defer wg.Done()
		for evt := range deCh {
			// fmt.Printf("%+v\n", evt)
			// fmt.Printf("%v\n", evt.Id)
			evtType := evt.Type                    // Get type of evt
			jsonEvtBytes, err := json.Marshal(evt) // Convert each event into JSON
			if err != nil {
				log.Fatal("Failed to marshal bus event to JSON: %w", err)
			}
			if evtType.String() == "BUS_EVENT_TYPE_PROTOCOL_UPGRADE_STARTED" {
				fmt.Println(evt)
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.ProtocolUpgradeStarted`, strconv.FormatInt(int64(evt.GetProtocolUpgradeStarted().LastBlockHeight), 10))
				jsonEvtBytes = []byte(jsonEvt)
				// Send msg to core to notify when ready for upgrade
				ctx := context.TODO()
				readyEvt := events.NewProtocolUpgradeDataNodeReady(ctx, int64(height))
				b.ss.send(readyEvt)

			}
			if evtType.String() == "BUS_EVENT_TYPE_TRADE" {
				tradeCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Trade.timestamp`, strconv.FormatInt(evt.GetTrade().Timestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_ORDER" {
				// continue // Ignore event for now
				orderCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Order.created_at`, strconv.FormatInt(evt.GetOrder().CreatedAt, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.Order.updated_at`, strconv.FormatInt(evt.GetOrder().UpdatedAt, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_POSITION_STATE" {
				continue // Ignore event for now
				posStateCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_MARKET_DATA" {
				marketDataCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.MarketData.timestamp`, strconv.FormatInt(evt.GetMarketData().Timestamp, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.MarketData.next_mark_to_market`, strconv.FormatInt(evt.GetMarketData().NextMarkToMarket, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_ASSET" {
				assetCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_MARKET_CREATED" || evtType.String() == "BUS_EVENT_TYPE_MARKET_UPDATED" {
				marketCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_LEDGER_MOVEMENTS" {
				ledgerMovementsCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_DEPOSIT" {
				continue // Ignore event for now
				depositWithdrawalCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Deposit.created_timestamp`, strconv.FormatInt(evt.GetDeposit().CreatedTimestamp, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.Deposit.credited_timestamp`, strconv.FormatInt(evt.GetDeposit().CreditedTimestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_WITHDRAWAL" {
				continue // Ignore event for now
				depositWithdrawalCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Withdrawal.created_timestamp`, strconv.FormatInt(evt.GetWithdrawal().CreatedTimestamp, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.Withdrawal.withdrawn_timestamp`, strconv.FormatInt(evt.GetWithdrawal().WithdrawnTimestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_ACCOUNT" {
				continue // Ignore event for now
				accountCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_STAKE_LINKING" {
				stakeLinkingCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), ``, strconv.FormatInt(evt.GetStakeLinking().Ts, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, ``, strconv.FormatInt(evt.GetStakeLinking().FinalizedAt, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_BEGIN_BLOCK" {
				blockCount += 1
				height = int(evt.GetBeginBlock().Height)
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.BeginBlock.timestamp`, strconv.FormatInt(evt.GetBeginBlock().Timestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
				// Send BeginBlock event to all topics
				for topic := range topicSet {
					batch = append(batch, kafka.Message{
						Topic: topic,
						Value: jsonEvtBytes,
					})
					batchBytesCount += len(jsonEvtBytes)
				}
			} else if evtType.String() == "BUS_EVENT_TYPE_END_BLOCK" {
				for topic := range topicSet {
					batch = append(batch, kafka.Message{
						Topic: topic,
						Value: jsonEvtBytes,
					})
					batchBytesCount += len(jsonEvtBytes)

					// Send a batch at the end of every block.
					// msgCh <- batch
					// batch = nil
					// printEventCounts(evt)
					// batchBytesCount = 0
				}
			} else {
				if topic, ok := busEventTopicMap[evtType.String()]; ok {
					batch = append(batch, kafka.Message{ // Batch messages
						Topic: topic,        // Get the topic based on the evtType
						Value: jsonEvtBytes, // Add JSON bytes to value field of kafka.Message.
					})
					batchBytesCount += len(jsonEvtBytes)
					// if len(jsonEvtBytes) >= 7500 {
					// 	fmt.Println(string(jsonEvtBytes))
					// }
				} else {
					// Topic not found for event
					if evtType.String() == "BUS_EVENT_TYPE_STAKE_LINKING" {
						fmt.Printf("%v\n", topic)
						fmt.Printf("%v\n", evtType.String())
						log.Fatalf("Topic not Found for event!")
					}

				}
			}

			if len(batch) >= 1000 { // When batch is a certain size, send it
				msgCh <- batch
				batch = nil
				// fmt.Println(string(jsonEvt))
				fmt.Println(evt.Id)
				fmt.Println("Height: ", height)
				fmt.Println("Blocks count: ", blockCount)
				fmt.Println("Bytes count: ", batchBytesCount)
				fmt.Println("Trade count: ", tradeCount)
				fmt.Println("Order count: ", orderCount)
				fmt.Println("Position state count: ", posStateCount)
				fmt.Println("Market data count: ", marketDataCount)
				fmt.Println("Asset count: ", assetCount)
				fmt.Println("Market count: ", marketCount)
				fmt.Println("Legder movements count: ", ledgerMovementsCount)
				fmt.Println("Deposit withdrawal count: ", depositWithdrawalCount)
				fmt.Println("Account count: ", accountCount)
				fmt.Println("Stake Linking count: ", stakeLinkingCount)
				batchBytesCount = 0
			}
		}
	}()

	return msgCh
}

func (kc KafkaClient) send(wg *sync.WaitGroup, msgCh chan []kafka.Message) {

	go func() {
		ctx := context.Background()
		count := 0
		for batch := range msgCh {
			err := kc.writer.WriteMessages(ctx, batch...)
			if err != nil {
				log.Fatal("Error writing messages: ", err)
			}

			count += len(batch)
			fmt.Println(count)
		}
	}()

}

func (b Broker) start() {

	wg := &sync.WaitGroup{}
	wg.Add(3)

	err := b.ss.listen()
	if err != nil {
		log.Fatal(fmt.Errorf("failed to listen: %v", err))
	}

	// Determine whether

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

	time.Sleep(time.Second * 40)

	broker := newBroker()
	broker.start()

}
