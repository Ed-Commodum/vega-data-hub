package main

import (
	"fmt"
	// "errors"
	"math/rand"
	"runtime"
)

func main() {

	// Create a channel
	ch := make(chan string, 2);

	// Send messages to a channel
	messages := []string{ "a message", "another message", "yet another message", "a message again", "yup, you guessed it, another message" }
	go func () {
		for i:=0; i<5; i++ {
			fmt.Println("Sending to channel...")
			ch <-messages[rand.Intn(len(messages))]
		}
	}()

	// Read messages from the channel
	go func() {
		for i:=0; i<5; i++ {
			fmt.Println("Reading from channel...")
			msg := <-ch
			fmt.Println(msg)
		}
	}()

	runtime.Gosched()

}