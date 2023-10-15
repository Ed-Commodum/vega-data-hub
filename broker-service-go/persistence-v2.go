package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"

	vegapb "code.vegaprotocol.io/vega/protos/vega"
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

// Potential architectures for bus event processing and persistence
//	- One persistence manager for each "topic" of bus event we are processing, each one of these
//	  will run in it's own goroutine.
//
//	- One persistance manager for processing all events, but will have separate loops and goroutines
//	  for each "topic".
//
//

type PersistenceManager interface {
	BlockPersist()
	BatchPersist()
	FormatEvent()

	// Workflow for event persistence
	//	- Get events from channel
	//	- Format events
	//	- Persist events either by block or by large batch (determined by replay)
	//	- If persisting by block, emit event to block_persistence topic on kafka (or use gRPC)
}

type persistenceManager struct {
	broker      *Broker
	recvChs     map[string]chan *eventspb.BusEvent
	eventBatchs map[string][]*formattedEvent
	blockBatchs map[string]blockBatch
}

type blockBatch struct {
	height int64
	events []*formattedEvent
}

type FormattedEventType uint8

const (
	FormattedEventType_Unspecified FormattedEventType = iota
	FormattedEventType_Trade
	FormattedEventType_Order
	FormattedEventType_LedgerMovement
	FormattedEventType_Asset
	FormattedEventType_Market
	FormattedEventType_MarketData
	FormattedEventType_StakeLinking
)

type FormattedEvent interface {
	isFormattedEvent()
}

type formattedEvent struct {
	Type  FormattedEventType
	Event FormattedEvent
}

func (f *formattedEvent) GetEvent() FormattedEvent {
	if f != nil {
		return f.Event
	}
	return nil
}

type formattedTrade struct {
	Id                string
	MarketId          string
	Price             string
	Size              uint64
	Buyer             string
	Seller            string
	Aggressor         string
	BuyOrder          string
	SellOrder         string
	Timestamp         int64
	SynthTimestamp    int64
	Type              string
	BuyerFeeMaker     string
	BuyerFeeInfra     string
	BuyerFeeLiqudity  string
	SellerFeeMaker    string
	SellerFeeInfra    string
	SellerFeeLiqudity string
}

type fTrade struct {
	Id                string
	MarketId          string
	Price             string
	Size              uint64
	Buyer             string
	Seller            string
	Aggressor         string
	BuyOrder          string
	SellOrder         string
	Timestamp         int64
	SynthTimestamp    int64
	Type              string
	BuyerFeeMaker     string
	BuyerFeeInfra     string
	BuyerFeeLiqudity  string
	SellerFeeMaker    string
	SellerFeeInfra    string
	SellerFeeLiqudity string
}

func (t *formattedTrade) isFormattedEvent() {}

func (f *formattedEvent) GetFormattedTrade() *formattedTrade {
	if evt, ok := f.GetEvent().(*formattedTrade); ok {
		return evt
	}
	return nil
}

func (m *persistenceManager) start() {

	persistCh := make(chan []*formattedEvent)

	for topic, _ := range m.broker.topicSet {
		// For each topic

		// Spawn a goroutine to fetch events for that topic.
		go func() {
			for {
				evt := <-m.recvChs[topic]
				fmt.Printf("Recieved event: %+v", evt)

				fmt.Printf("evt.Type: %v", evt.Type)

				if !m.broker.isReplaying && evt.Type == m.busEventType {
					m.blockBatch.events = append(m.blockBatch.events, m.FormatEvent(evt))
				} else if evt.Type == m.busEventType {
					m.eventBatch = append(m.eventBatch, m.FormatEvent(evt))
				}

				if !m.broker.isReplaying && evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_END_BLOCK {
					// Perform block inserts

				}

			}
		}()

		// Spawn a goroutine with a loop for persistance
		go func() {
			for batch := range persistCh {

			}
		}()

	}

}

func (m *persistenceManager) FormatEvent(evt *eventspb.BusEvent) (f *formattedEvent) {

	// Will call a different formatting func depending on the type of BusEvent that is passed.
	switch true {
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_TRADE):
		return formatTrade(evt.GetTrade())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ORDER):
		return formatOrderUpdate(evt.GetOrder())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_EXPIRED_ORDERS):
		return formatOrderUpdate(evt.GetExpiredOrders())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_LEDGER_MOVEMENTS):
		return formatLedgerMovements(evt.GetLedgerMovements())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ASSET):
		return formatAsset(evt.GetAsset())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_CREATED):
		return formatMarketUpdate(evt.GetMarketCreated())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_UPDATED):
		return formatMarketUpdate(evt.GetMarketUpdated())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_DATA):
		return formatMarketData(evt.GetMarketData())
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_STAKE_LINKING):
		return formatStakeLinking(evt.GetStakeLinking())
	}

	return f
}

func formatTrade(t *vegapb.Trade) (f *formattedEvent) {
	return &formattedEvent{
		Type: FormattedEventType_Trade,
		Event: &formattedTrade{
			Id:                t.Id,
			MarketId:          t.MarketId,
			Price:             t.Price,
			Size:              t.Size,
			Buyer:             t.Buyer,
			Seller:            t.Seller,
			Aggressor:         t.Aggressor.String(),
			BuyOrder:          t.BuyOrder,
			SellOrder:         t.SellOrder,
			Timestamp:         t.Timestamp,
			SynthTimestamp:    int64,
			Type:              t.Type.String(),
			BuyerFeeMaker:     t.BuyerFee.MakerFee,
			BuyerFeeInfra:     t.BuyerFee.InfrastructureFee,
			BuyerFeeLiqudity:  t.BuyerFee.LiquidityFee,
			SellerFeeMaker:    t.SellerFee.MakerFee,
			SellerFeeInfra:    t.SellerFee.InfrastructureFee,
			SellerFeeLiqudity: t.SellerFee.LiquidityFee,
		},
	}
}
