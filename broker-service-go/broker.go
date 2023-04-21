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
		RequiredAcks: kafka.RequireAll,
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

func (b Broker) format(wg *sync.WaitGroup, busEventTopicMap map[string]string, deCh chan *eventspb.BusEvent) chan []kafka.Message {

	msgCh := make(chan []kafka.Message)
	batch := []kafka.Message{}

	go func() {
		defer close(msgCh)
		defer wg.Done()
		for evt := range deCh {
			// fmt.Printf("%+v\n", evt)
			// fmt.Printf("%v\n", evt.Id)
			evtType := evt.Type // Get type of evt
			jsonEvt, err := json.Marshal(evt) // Convert each event into JSON
			if err != nil {
				log.Fatal("Failed to marshal bus event to JSON: %w", err)
			}
			batch = append(batch, kafka.Message{ // Batch messages
				Topic: busEventTopicMap[evtType.String()], // Get the topic based on the evtType
				Value: jsonEvt, // Add JSON bytes to value field of kafka.Message.
			})
			if len(batch) >= 100 { // When batch is a certain size, send it
				msgCh <- batch
				batch = nil
				fmt.Println(string(jsonEvt))
				fmt.Println(evt.Id)
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
				log.Fatal("Error writing messages: %w", err)
			}

			count += len(batch)
			fmt.Println(count)
		}
	}()

}

func (b Broker) start() {

	busEventTopicMap := GetBusEventTopicMap()

	wg := &sync.WaitGroup{}
	wg.Add(3)

	err := b.ss.listen()
	if err != nil {
		log.Fatal(fmt.Errorf("Failed to listen: ", err))
	}

	inCh := b.ss.recieve(wg)
	
	deCh := b.decode(wg, inCh)

	// msgCh := b.format(wg, deCh)
	msgCh := b.format(wg, busEventTopicMap, deCh)

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