package main

import (
	"fmt"
	// "context"
	"log"
	// "runtime"
	"sync"

	// "go.nanomsg.org/mangos/v3"
	// mangosErr "go.nanomsg.org/mangos/v3/errors"
	// "go.nanomsg.org/mangos/v3/protocol"
	"go.nanomsg.org/mangos/v3/protocol/pair"
	_ "go.nanomsg.org/mangos/v3/transport/all"

	// "code.vegaprotocol.io/vega/core/events"
	// "code.vegaprotocol.io/vega/libs/proto"
	"github.com/golang/protobuf/proto"
	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
)

// Create a socket server and listen at the broker port and IP
func createSocketServer(ch chan []byte) {

	sock, err := pair.NewSocket()
	if err != nil {
		fmt.Println(err)
		log.Fatal(fmt.Errorf("Unable to create new socket %w", err))
	}

	addr := "tcp://0.0.0.0:3005"

	// listenOptions := map[string]interface{}{mangos.OptionMaxRecvSize: 0}

	// listener, err := sock.NewListener(addr, listenOptions)
	// if err != nil {
	// 	log.Fatal(fmt.Errorf("Unable to create new listener %w", err))
	// 	return
	// }

	// if err := listener.Listen(); err != nil {
	// 	log.Fatal(fmt.Errorf("Failed to listen on %v: %w", addr, err))
	// 	return
	// }

	if err := sock.Listen(addr); err != nil {
		log.Fatal(fmt.Errorf("Failed to listen on %v: %w", addr, err))
	}

	go func() {
		for {
			msg, err := sock.Recv()
			fmt.Println("Recieved message")
			if err != nil {
				log.Fatal(err)
				return
			}
			ch <- msg
		}
	}()

}


// Unmarshal raw events into bus events
func decode(msg []byte) (*eventspb.BusEvent, error) {
	BusEvent := &eventspb.BusEvent{}

	if err := proto.Unmarshal(msg, BusEvent); err != nil {
		return nil, fmt.Errorf(`Failed to unmarshal Bus Event %w`, err)
	}

	return BusEvent, nil
}


func main() {

	// Waitgroup
	wg := &sync.WaitGroup{}
	wg.Add(1)

	// Make channel
	ch := make(chan []byte, 1000000)

	createSocketServer(ch)

	// Decode events from channel
	go func() {
		defer wg.Done()
		for {
			msg := <- ch
			busEvent, err := decode(msg)
			if err != nil {
				log.Fatal(fmt.Errorf("Failed to decode event: Error: %w", err))
			}
			fmt.Println(busEvent)
		}
	}()

	wg.Wait()

	fmt.Println("End")
}