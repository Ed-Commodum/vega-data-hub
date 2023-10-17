package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

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
	pool, err := pgxpool.Connect(context.Background(), client.dbUrl)
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
	FormatEvent(*eventspb.BusEvent) *formattedEvent

	// Workflow for event persistence
	//	- Get events from channel
	//	- Format events
	//	- Persist events either by block or by large batch (determined by replay)
	//	- If persisting by block, emit event to block_persistence topic on kafka (or use gRPC)
}

type persistenceManager struct {
	broker                *Broker
	pgClient              *pgClient
	recvChs               map[string]chan *eventspb.BusEvent
	eventBatches          map[string][]*formattedEvent
	blockBatches          map[string]map[int64]*blockBatch
	blockPersistenceReady map[string]bool
	batchPersisters       map[string]*batchPersister
	blockPersisters       map[string]*blockPersister
}

type blockBatch struct {
	height int64
	events []*formattedEvent
}

type BatchPersister interface {
	Start()
	Pause()
	Unpause()
	Persist([]*formattedEvent)
}

type BlockPersister interface {
	Start()
	Pause()
	Unpause()
	Persist(*blockBatch)
}

type batchPersister struct {
	pm        *persistenceManager
	status    string
	controlCh chan string
	persistCh chan []*formattedEvent
}

type blockPersister struct {
	pm        *persistenceManager
	status    string
	controlCh chan string
	persistCh chan *blockBatch
}

func newPersistenceManager(b *Broker) PersistenceManager {
	pm := &persistenceManager{
		broker:                b,
		pgClient:              newPostgresClient().(*pgClient),
		recvChs:               make(map[string]chan *eventspb.BusEvent),
		eventBatches:          make(map[string][]*formattedEvent),
		blockBatches:          make(map[string]map[int64]*blockBatch),
		blockPersistenceReady: make(map[string]bool),
		batchPersisters:       make(map[string]*batchPersister),
		blockPersisters:       make(map[string]*blockPersister),
	}

	for topic := range b.topicSet {
		pm.batchPersisters[topic] = newBatchPersister(pm).(*batchPersister)
		pm.blockPersisters[topic] = newBlockPersister(pm).(*blockPersister)
	}

}

func newBatchPersister(pm *persistenceManager) BatchPersister {
	return &batchPersister{
		pm:        pm,
		controlCh: make(chan string),
		persistCh: make(chan []*formattedEvent),
	}
}

func newBlockPersister(pm *persistenceManager) BlockPersister {
	return &blockPersister{
		pm:        pm,
		controlCh: make(chan string),
		persistCh: make(chan *blockBatch),
	}
}

func (bp *batchPersister) Start() {
	bp.status = "running"
	for {
		select {
		case cmd := <-bp.controlCh:
			switch cmd {
			case "pause":
				bp.status = "paused"
			case "unpause":
				bp.status = "running"
			default:
				bp.status = "running"
			}
		default:
			if bp.status == "running" {
				// Do work here
				bp.Persist(<-bp.persistCh)
			}
		}
	}
}

func (bp *blockPersister) Start() {
	bp.status = "running"
	for {
		select {
		case cmd := <-bp.controlCh:
			switch cmd {
			case "pause":
				bp.status = "paused"
			case "unpause":
				bp.status = "running"
			default:
				bp.status = "running"
			}
		default:
			if bp.status == "running" {
				// Do work here
				bp.Persist(<-bp.persistCh)
			}
		}
	}
}

func (bp *batchPersister) Pause() {
	bp.controlCh <- "pause"
}

func (bp *blockPersister) Pause() {
	bp.controlCh <- "pause"
}

func (bp *batchPersister) Unpause() {
	bp.controlCh <- "unpause"
}

func (bp *blockPersister) Unpause() {
	bp.controlCh <- "unpause"
}

func (bp *batchPersister) IsRunning() bool {
	if bp.status == "running" {
		return true
	}
	return false
}

func (bp *blockPersister) IsRunning() bool {
	if bp.status == "running" {
		return true
	}
	return false
}

func (bp *batchPersister) Persist(batch []*formattedEvent) {

}

func (bp *blockPersister) Persist(batch *blockBatch) {

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

func (t *formattedTrade) isFormattedEvent() {}

func (f *formattedEvent) GetFormattedTrade() *formattedTrade {
	if evt, ok := f.GetEvent().(*formattedTrade); ok {
		return evt
	}
	return nil
}

func (m *persistenceManager) start() {

	for topic, _ := range m.broker.topicSet {

		batchPersistTicker := time.NewTicker(time.Millisecond * 500)

		// Spawn a goroutine to fetch events for that topic.
		go func() {
			for {
				evt := <-m.recvChs[topic]
				fmt.Printf("Recieved event: %+v\n", evt)
				fmt.Printf("evt.Type: %v\n", evt.Type)
				idParts := strings.Split(evt.Id, "-")
				height, err := strconv.ParseInt(idParts[0], 10, 64)
				if err != nil {
					log.Printf("Could not convert height to int64: %v", err)
				}
				fmt.Printf("evt Height: %v\n", height)
				fmt.Printf("evt Index: %v\n", idParts[1])

				if m.broker.isReplaying {
					m.eventBatches[topic] = append(m.eventBatches[topic], m.FormatEvent(evt))
					if len(m.eventBatches[topic]) >= 1000 {
						m.batchPersisters[topic].persistCh <- m.eventBatches[topic]
						m.eventBatches[topic] = nil
					}
				} else {
					m.blockBatches[topic][height].events = append(m.blockBatches[topic][height].events, m.FormatEvent(evt))
				}

				if !m.broker.isReplaying && evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_BEGIN_BLOCK {
					m.blockBatches[topic][height] = &blockBatch{
						height: height,
						events: []*formattedEvent{},
					}
				}

				if !m.broker.isReplaying && evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_END_BLOCK {
					// Queue for block inserts
					m.blockPersisters[topic].persistCh <- m.blockBatches[topic][height]
					delete(m.blockBatches, topic)
				}

			}
		}()

		// Spawn a goroutine for batch persistence
		go func() {
			for {
				select {
				case <-batchPersistTicker.C:
					// Flush the batch, if no batch, set block persistence ready for that topic.
					if len(m.batchPersisters[topic].persistCh) == 0 && !m.broker.isReplaying && len(m.eventBatches[topic]) == 0 {
						m.blockPersistenceReady[topic] = true
					}
					if len(m.eventBatches[topic]) == 0 {
						continue
					}
					m.batchPersisters[topic].persistCh <- m.eventBatches[topic]
					m.eventBatches[topic] = nil
				case batch := <-m.batchPersisters[topic].persistCh:
					if m.blockPersisters[topic].IsRunning() {
						m.blockPersisters[topic].Pause()
					}
					commandTag, err := m.BatchPersist(batch)
					if err != nil {
						log.Printf("failed to persist batch for %v topic: %v\n", topic, err)
					}
					fmt.Printf("Batch persisted for %v topic. %v batches waiting for persistence.\n", topic, len(m.batchPersistChs[topic]))
					fmt.Printf("Postgres command tag: %v\n", commandTag)
					if len(m.batchPersistChs[topic]) == 0 && !m.broker.isReplaying && len(m.eventBatches[topic]) == 0 {
						// Finished inserting all batch events, start block by block inserts.
						m.blockPersistenceReady[topic] = true
						ready := true
						for _, v := range m.blockPersistenceReady {
							if v == false {
								ready = false
							}
						}
						if ready {
							m.blockPersistStartChan <- struct{}{}
						}
					}
				}
			}
		}()

		// Spawn a goroutine for block persistence
		go func() {
			for {
				select {
				case <-m.blockPersistStartChan:

				case <-m.blockPersistStopChan:

				}
			}

		}()

		go func() {

		}()

	}

}

func (m *persistenceManager) BatchPersist(batch []*formattedEvent) (pgconn.CommandTag, error) {

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
