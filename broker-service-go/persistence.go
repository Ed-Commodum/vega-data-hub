// package main

// import (
// 	"context"
// 	"fmt"
// 	"log"
// 	"os"

// 	"github.com/jackc/pgconn"
// 	"github.com/jackc/pgx/v4"
// 	"github.com/jackc/pgx/v4/pgxpool"

// 	// vegapb "code.vegaprotocol.io/vega/protos/vega"
// 	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
// )

// type PgClient interface {
// 	Connect()
// 	Close()
// 	Query(string, ...interface{}) (pgx.Rows, error)
// 	Exec(string, ...interface{}) (pgconn.CommandTag, error)
// }

// type pgClient struct {
// 	dbUrl string
// 	pool  *pgxpool.Pool
// }

// // Potential architectures for bus event processing and persistence
// //	- One persistence manager for each "topic" of bus event we are processing, each one of these
// //	  will run in it's own goroutine.
// //
// //	- One persistance manager for processing all events, but will have separate loops and goroutines
// //	  for each "topic".
// //
// //

// type PersistenceManager interface {
// 	BlockPersist()
// 	BatchPersist()
// 	FormatEvent()

// 	// Workflow for event persistence
// 	//	- Get events from channel
// 	//	- Format events
// 	//	- Persist events either by block or by large batch (determined by replay)
// 	//	- If persisting by block, emit event to block_persistence topic on kafka (or use gRPC)
// }

// type persistenceManager struct {
// 	managerType  ManagerType
// 	busEventType eventspb.BusEventType
// 	broker       *Broker
// 	recvCh       chan *eventspb.BusEvent
// 	eventBatch   []*formattedEvent
// 	blockBatch   blockBatch
// }

// type blockBatch struct {
// 	height int64
// 	events []*formattedEvent
// }

// type ManagerType uint8

// const (
// 	ManagerType_Unspecified FormattedEventType = iota
// 	ManagerType_Trade
// 	ManagerType_Order
// 	ManagerType_LedgerMovement
// 	ManagerType_Asset
// 	ManagerType_Market
// 	ManagerType_MarketData
// 	ManagerType_Stake
// )

// type FormattedEventType uint8

// const (
// 	FormattedEventType_Unspecified FormattedEventType = iota
// 	FormattedEventType_Trade
// 	FormattedEventType_Order
// 	FormattedEventType_LedgerMovement
// 	FormattedEventType_Asset
// 	FormattedEventType_Market
// 	FormattedEventType_MarketData
// 	FormattedEventType_Stake
// )

// type FormattedEvent interface {
// 	isFormattedEvent()
// }

// type formattedEvent struct {
// 	Type  FormattedEventType
// 	Event FormattedEvent
// }

// func (f *formattedEvent) GetEvent() FormattedEvent {
// 	if f != nil {
// 		return f.Event
// 	}
// 	return nil
// }

// type formattedTrade struct {
// 	Trade *fTrade
// }

// type fTrade struct {
// 	Id                string
// 	MarketId          string
// 	Price             string
// 	Size              uint64
// 	Buyer             string
// 	Seller            string
// 	Aggressor         string
// 	BuyOrder          string
// 	SellOrder         string
// 	Timestamp         int64
// 	SynthTimestamp    int64
// 	Type              string
// 	BuyerFeeMaker     string
// 	BuyerFeeInfra     string
// 	BuyerFeeLiqudity  string
// 	SellerFeeMaker    string
// 	SellerFeeInfra    string
// 	SellerFeeLiqudity string
// }

// func (t *formattedTrade) isFormattedEvent() {}

// func (f *formattedEvent) GetFormattedTrade() *fTrade {
// 	if evt, ok := f.GetEvent().(*formattedTrade); ok {
// 		return evt.Trade
// 	}
// 	return nil
// }

// func (m *persistenceManager) start() {

// 	persistCh := make(chan []*formattedEvent)

// 	// Get events from channel
// 	go func() {
// 		for {
// 			evt := <-m.recvCh
// 			fmt.Printf("Recieved event: %+v", evt)

// 			fmt.Printf("evt.Type: %v", evt.Type)

// 			if !m.broker.isReplaying && evt.Type == m.busEventType {
// 				m.blockBatch.events = append(m.blockBatch.events, m.FormatEvent(evt))
// 			} else if evt.Type == m.busEventType {
// 				m.eventBatch = append(m.eventBatch, m.FormatEvent(evt))
// 			}

// 			if !m.broker.isReplaying && evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_END_BLOCK {
// 				// Perform block inserts

// 			}

// 		}
// 	}()

// 	// Persist loop
// 	go func() {
// 		for batch := range persistCh {

// 		}
// 	}()

// }

// func (m *persistenceManager) FormatEvent(evt *eventspb.BusEvent) (f *formattedEvent) {

// 	return f
// }

// func newPostgresClient() PgClient {
// 	pgClient := &pgClient{dbUrl: os.Getenv("DB_URL")}
// 	pgClient.Connect()
// 	return pgClient
// }

// func (client *pgClient) Connect() {
// 	pool, err := pgxpool.Connect(context.Background(), os.Getenv("PG_URL"))
// 	if err != nil {
// 		log.Fatalf("Failed to connect to database: %v\n", err)
// 	}
// 	client.pool = pool
// }

// func (client *pgClient) Close() {
// 	client.pool.Close()
// }

// func (client *pgClient) Query(queryStr string, args ...interface{}) (pgx.Rows, error) {
// 	return client.pool.Query(context.Background(), queryStr, args)
// }

// func (client *pgClient) Exec(queryStr string, args ...interface{}) (pgconn.CommandTag, error) {
// 	return client.pool.Exec(context.Background(), queryStr, args)
// }
