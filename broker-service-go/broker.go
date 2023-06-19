package main

import (
	"fmt"
	// "context"
	"log"
	// "runtime"
	"sync"
	"os"
	// "strings"
	"context"
	"encoding/json"
	"time"
	"strconv"

	"github.com/tidwall/sjson"

	// "go.nanomsg.org/mangos/v3"
	// mangosErr "go.nanomsg.org/mangos/v3/errors"
	"go.nanomsg.org/mangos/v3/protocol"
	"go.nanomsg.org/mangos/v3/protocol/pair"
	_ "go.nanomsg.org/mangos/v3/transport/all"

	// "code.vegaprotocol.io/vega/core/events"
	// "code.vegaprotocol.io/vega/libs/proto"
	"github.com/golang/protobuf/proto"
	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"

	"github.com/segmentio/kafka-go"
)

type Broker struct {
	ss SocketServer
	kc KafkaClient
}

type SocketServer struct {
	sock protocol.Socket
	addr string
}

type KafkaClient struct {
	writer kafka.Writer
}

type void struct{}
var member void

func newSocketServer(addr string) (*SocketServer, error) {

	sock, err := pair.NewSocket()
	if err != nil {
		return nil, fmt.Errorf("Unable to create new socket %w", err)
	}

	return &SocketServer{
		addr: addr,
		sock: sock,
	}, nil

}

func newKafkaClient() (*KafkaClient, error) {

	kafkaBrokers := os.Getenv("KAFKA_BROKERS")

	w := &kafka.Writer{
		Addr: kafka.TCP(kafkaBrokers),
		Balancer: &kafka.LeastBytes{},
		RequiredAcks: kafka.RequireOne,
		BatchSize: 1000,
		BatchTimeout: time.Millisecond * 10,
		BatchBytes: 2097152,
	}

	return &KafkaClient{
		writer: *w,
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

	return &Broker{
		ss: *socketServer,
		kc: *kafkaClient,
	}

}

func (s SocketServer) listen() (error) {

	err := s.sock.Listen(s.addr)
	if err != nil {
		return fmt.Errorf("Unable to listen on %v: %w", s.addr, err)
	}

	return nil

}

func (s SocketServer) recieve(wg *sync.WaitGroup) chan []byte {

	inCh := make(chan []byte, 100000)

	go func() {
		defer close(inCh)
		defer wg.Done()
		for {
			msg, err := s.sock.Recv()
			if err != nil {
				log.Fatal(fmt.Errorf("Failed to receive event from socket, err: %w", err))
			}
			inCh <- msg
		}
	}()

	return inCh


}

func (b Broker) decode(wg *sync.WaitGroup, inCh chan[]byte) chan *eventspb.BusEvent {

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

func (b Broker) format(wg *sync.WaitGroup, busEventTopicMap map[string]string, topicSet map[string]void, deCh chan *eventspb.BusEvent) chan []kafka.Message {

	msgCh := make(chan []kafka.Message)
	batch := []kafka.Message{}
	blockCount := -1
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

	go func() {
		defer close(msgCh)
		defer wg.Done()
		for evt := range deCh {
			// fmt.Printf("%+v\n", evt)
			// fmt.Printf("%v\n", evt.Id)
			evtType := evt.Type // Get type of evt
			jsonEvtBytes, err := json.Marshal(evt) // Convert each event into JSON
			if err != nil {
				log.Fatal("Failed to marshal bus event to JSON: %w", err)
			}
			if evtType.String() == "BUS_EVENT_TYPE_TRADE" {
				tradeCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Trade.timestamp`, strconv.FormatInt(evt.GetTrade().Timestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_ORDER" {
				continue
				orderCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Order.created_at`, strconv.FormatInt(evt.GetOrder().CreatedAt, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.Order.updated_at`, strconv.FormatInt(evt.GetOrder().UpdatedAt, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_POSITION_STATE" {
				continue
				posStateCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_MARKET_DATA" {
				continue
				marketDataCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.MarketData.timestamp`, strconv.FormatInt(evt.GetMarketData().Timestamp, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.MarketData.next_mark_to_market`, strconv.FormatInt(evt.GetMarketData().NextMarkToMarket, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_ASSET" {
				assetCount += 1
			}
			if ( evtType.String() == "BUS_EVENT_TYPE_MARKET_CREATED" || evtType.String() == "BUS_EVENT_TYPE_MARKET_UPDATED" ) {
				marketCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_LEDGER_MOVEMENTS" {
				continue
				ledgerMovementsCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_DEPOSIT" {
				continue
				depositWithdrawalCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Deposit.created_timestamp`, strconv.FormatInt(evt.GetDeposit().CreatedTimestamp, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.Deposit.credited_timestamp`, strconv.FormatInt(evt.GetDeposit().CreditedTimestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_WITHDRAWAL" {
				continue
				depositWithdrawalCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.Withdrawal.created_timestamp`, strconv.FormatInt(evt.GetWithdrawal().CreatedTimestamp, 10))
				jsonEvt, _ = sjson.Set(jsonEvt, `Event.Withdrawal.withdrawn_timestamp`, strconv.FormatInt(evt.GetWithdrawal().WithdrawnTimestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
			}
			if evtType.String() == "BUS_EVENT_TYPE_ACCOUNT" {
				continue
				accountCount += 1
			}
			if evtType.String() == "BUS_EVENT_TYPE_BEGIN_BLOCK" {
				blockCount += 1
				jsonEvt, _ := sjson.Set(string(jsonEvtBytes), `Event.BeginBlock.timestamp`, strconv.FormatInt(evt.GetBeginBlock().Timestamp, 10))
				jsonEvtBytes = []byte(jsonEvt)
				for topic := range topicSet {
					batch = append(batch, kafka.Message{
						Topic: topic,
						Value: jsonEvtBytes,
					})
					batchBytesCount += len(jsonEvtBytes)
				}
			} else {
				if topic, ok := busEventTopicMap[evtType.String()]; ok {
					batch = append(batch, kafka.Message{ // Batch messages
						Topic: topic, // Get the topic based on the evtType
						Value: jsonEvtBytes, // Add JSON bytes to value field of kafka.Message.
					})
					batchBytesCount += len(jsonEvtBytes)
					if len(jsonEvtBytes) >= 5000 {
						fmt.Println(string(jsonEvtBytes))
					}
				} else {
					// Topic not found for event
				}
			}

			if len(batch) >= 50 { // When batch is a certain size, send it
				msgCh <- batch
				batch = nil
				// fmt.Println(string(jsonEvt))
				fmt.Println(evt.Id)
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

	busEventTopicMap := GetBusEventTopicMap()
	topicSet := make(map[string]void)
	for _, v := range busEventTopicMap {
		if v == "blocks" { continue }
		topicSet[v] = member
	}

	fmt.Println(topicSet)

	wg := &sync.WaitGroup{}
	wg.Add(3)

	err := b.ss.listen()
	if err != nil {
		log.Fatal(fmt.Errorf("Failed to listen: ", err))
	}

	inCh := b.ss.recieve(wg)
	
	deCh := b.decode(wg, inCh)

	// msgCh := b.format(wg, deCh)
	msgCh := b.format(wg, busEventTopicMap, topicSet, deCh)

	b.kc.send(wg, msgCh)


	wg.Wait()

	// Pipeline:
	// Get msg from inCh
	// Decode(msg)
	// Push msg to deCh
	// Get msg from deCh
	// Build kafka.Message
	// Collect batch
	// Push batch to msgBatchCh
	// Get batch and send using kafka.Writer


}

func main() {

	time.Sleep(time.Second * 35)

	broker := newBroker()
	broker.start()

}


// // Create a socket server and listen at the broker port and IP
// func createSocketServer(ch chan []byte) {

// 	sock, err := pair.NewSocket()
// 	if err != nil {
// 		fmt.Println(err)
// 		log.Fatal(fmt.Errorf("Unable to create new socket %w", err))
// 	}

// 	addr := "tcp://0.0.0.0:3005"

// 	// listenOptions := map[string]interface{}{mangos.OptionMaxRecvSize: 0}

// 	// listener, err := sock.NewListener(addr, listenOptions)
// 	// if err != nil {
// 	// 	log.Fatal(fmt.Errorf("Unable to create new listener %w", err))
// 	// 	return
// 	// }

// 	// if err := listener.Listen(); err != nil {
// 	// 	log.Fatal(fmt.Errorf("Failed to listen on %v: %w", addr, err))
// 	// 	return
// 	// }

// 	if err := sock.Listen(addr); err != nil {
// 		log.Fatal(fmt.Errorf("Failed to listen on %v: %w", addr, err))
// 	}

// 	go func() {
// 		for {
// 			msg, err := sock.Recv()
// 			fmt.Println("Recieved message")
// 			if err != nil {
// 				log.Fatal(err)
// 				return
// 			}
// 			ch <- msg
// 		}
// 	}()

// }


// // Unmarshal raw events into bus events
// func decode(msg []byte) (*eventspb.BusEvent, error) {
// 	busEvent := &eventspb.BusEvent{}

// 	if err := proto.Unmarshal(msg, busEvent); err != nil {
// 		return nil, fmt.Errorf(`Failed to unmarshal Bus Event %w`, err)
// 	}

// 	return busEvent, nil
// }


// func main() {

// 	// Event counter
// 	count := 0;

// 	// Waitgroup
// 	wg := &sync.WaitGroup{}
// 	wg.Add(1)

// 	// Make channel
// 	ch := make(chan []byte, 1000000)

// 	createSocketServer(ch)

// 	// Decode events from channel
// 	go func() {
// 		defer wg.Done()
// 		for {
// 			msg := <- ch
// 			count++
// 			busEvent, err := decode(msg)
// 			if err != nil {
// 				log.Fatal(fmt.Errorf("Failed to decode event: Error: %w", err))
// 			}
// 			fmt.Println(busEvent.Id)
// 			parts := strings.Split(busEvent.Id, "-")
// 			fmt.Println(parts)
// 			fmt.Println(count)
// 			// fmt.Println(busEvent)
// 		}
// 	}()

// 	wg.Wait()

// 	fmt.Println("End")
// }