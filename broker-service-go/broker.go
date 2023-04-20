package main

import (
	"fmt"
	// "context"
	"log"
	// "runtime"
	"sync"
	"os"
	// "strings"

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
	d Decoder
	mf MessageFormatter
	kc KafkaClient
}

type SocketServer struct {
	sock protocol.Socket
	addr string
	inCh chan []byte
}

type Decoder struct {
	inCh chan []byte
	deCh chan *eventspb.BusEvent
}

type MessageFormatter struct {
	deCh chan *eventspb.BusEvent
	msgCh chan []kafka.Message
}

type KafkaClient struct {
	writer kafka.Writer
	msgCh chan []kafka.Message
}

func newSocketServer(addr string) (*SocketServer, error) {

	sock, err := pair.NewSocket()
	if err != nil {
		return nil, fmt.Errorf("Unable to create new socket %w", err)
	}

	inCh := make(chan []byte, 100000)

	return &SocketServer{
		addr: addr,
		sock: sock,
		inCh: inCh,
	}, nil

}

func newDecoder(inCh chan []byte) (*Decoder, error) {

	deCh := make(chan *eventspb.BusEvent)

	return &Decoder{
		inCh: inCh,
		deCh: deCh,
	}, nil

}

func newMessageFormatter(deCh chan *eventspb.BusEvent) (*MessageFormatter, error) {

	msgCh := make(chan []kafka.Message)

	return &MessageFormatter{
		deCh: deCh,
		msgCh: msgCh,
	}, nil

}

func newKafkaClient(msgCh chan []kafka.Message) (*KafkaClient, error) {

	kafkaBrokers := os.Getenv("KAFKA_BROKERS")

	w := &kafka.Writer{
		Addr: kafka.TCP(kafkaBrokers),
		Balancer: &kafka.LeastBytes{},
		RequiredAcks: kafka.RequireAll,
	}

	return &KafkaClient{
		writer: *w,
		msgCh: msgCh,
	}, nil

}

func newBroker() *Broker {

	listenAddr := "tcp://0.0.0.0:3005"

	socketServer, err := newSocketServer(listenAddr)
	if err != nil {
		log.Fatal("Failed to create socket server: %w", err)
	}

	decoder, err := newDecoder(socketServer.inCh)
	if err != nil {
		log.Fatal("Failed to create new decoder: %w", err)
	}

	messageFormatter, err := newMessageFormatter(decoder.deCh)
	if err != nil {
		log.Fatal("Failed to create new message formatter: %w", err)
	}

	kafkaClient, err := newKafkaClient(messageFormatter.msgCh)
	if err != nil {
		log.Fatal("Failed to create new kafka client: %w", err)
	}

	return &Broker{
		ss: *socketServer,
		d: *decoder,
		mf: *messageFormatter,
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

func (s SocketServer) recieve(wg *sync.WaitGroup) {

	go func() {
		defer close(s.inCh)
		defer wg.Done()
		for {
			msg, err := s.sock.Recv()
			if err != nil {
				log.Fatal(fmt.Errorf("Failed to receive event from socket, err: %w", err))
			}
			s.inCh <- msg
		}
	}()

}

func (d Decoder) decode(wg *sync.WaitGroup) {

	go func() {
		defer close(d.deCh)
		for buf := range d.inCh {
			busEvent := &eventspb.BusEvent{}
			err := proto.Unmarshal(buf, busEvent)
			if err != nil {
				log.Fatal("Failed to unmarshal bus event %w", err)
			}
			d.deCh <- busEvent
		}
	}()

}

func (mf MessageFormatter) format(wg *sync.WaitGroup) {

	//

	go func() {
		defer close(mf.msgCh)
		for msg := range mf.deCh {
			// fmt.Println(msg)
			fmt.Printf("%+v\n", msg)
		}
	}()

}

func (b Broker) start() {

	wg := &sync.WaitGroup{}
	wg.Add(3)

	err := b.ss.listen()
	if err != nil {
		log.Fatal(fmt.Errorf("Failed to listen: ", err))
	}

	b.ss.recieve(wg)
	
	b.d.decode(wg)

	b.mf.format(wg)

	// b.kc.send()


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