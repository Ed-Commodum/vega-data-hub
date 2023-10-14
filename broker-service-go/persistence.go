package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"

	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
)

type PgClient interface {
	Connect()
	Close()
	Query(string, ...interface{}) (pgx.Rows, error)
	Exec(string, ...interface{}) (pgconn.CommandTag, error)
}

type pgClient struct {
	dbUrl string
	pool  *pgxpool.Pool
}

type PersistenceManager interface {
	BlockPersist()
	BatchPersist()
	FormatEvent()

	// Workflow for event persistence
	//	- Get events from channel
	//	- Format events
	//	- Persist events either by block or by large batch (determined by replay)
	//	- If persisting by block, emit event to block_persistence topic on kafka (or use gRPC)
	//	-
}

type tradeManager struct {
	broker *Broker
	ch     chan *eventspb.BusEvent
}

type orderManager struct {
}

type ledgerMovementManager struct {
}

type assetManager struct {
}

type marketManager struct {
}

type marketDataManager struct {
}

type stakeManager struct {
}

func (tm *tradeManager) start() {

	// Get events from channel
	go func() {
		for {
			evt := <-tm.ch
			fmt.Printf("Recieved event: %+v", evt)

			fmt.Printf("evt.Type: %v", evt.Type)

			// If event is trade
			// if evt.Type ==

			// If event is endBlock

		}
	}()

}

func newPostgresClient() PgClient {
	pgClient := &pgClient{dbUrl: os.Getenv("DB_URL")}
	pgClient.Connect()
	return pgClient
}

func (client *pgClient) Connect() {
	pool, err := pgxpool.Connect(context.Background(), os.Getenv("PG_URL"))
	if err != nil {
		log.Fatalf("Failed to connect to database: %v\n", err)
	}
	client.pool = pool
}

func (client *pgClient) Close() {
	client.pool.Close()
}

func (client *pgClient) Query(queryStr string, args ...interface{}) (pgx.Rows, error) {
	return client.pool.Query(context.Background(), queryStr, args)
}

func (client *pgClient) Exec(queryStr string, args ...interface{}) (pgconn.CommandTag, error) {
	return client.pool.Exec(context.Background(), queryStr, args)
}
