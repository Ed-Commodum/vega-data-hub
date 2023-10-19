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

func (client *pgClient) InitDb() pgconn.CommandTag {

	// List existing tables
	listTablesQuery := "SELECT * FROM information_schema.tables"

	rows, err := client.Query(listTablesQuery)
	if err != nil {
		log.Fatalf("Failed to get tables from DB: %v\n", err)
	}
	defer rows.Close()

	for rows.Next() {
		values, err := rows.Values()
		if err != nil {
			log.Printf("Failed to get row values: %v\n", err)
		}
		fmt.Printf("listTablesQuery result row values: %v\n", values)
	}

	if rows.Err() != nil {
		log.Printf("Error reading rows: %v\n", rows.Err())
	}

	// Create all required hypertables, skipping tables that are already present.

	// Create indexes

	// Set integer time for new hypertables

	// Create continuous aggregates for new hypertables

}

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
	eventBatches          map[string][]FormattedEvent
	blockBatches          map[string]map[int64]*blockBatch
	blockPersistenceReady map[string]bool
	batchPersisters       map[string]*batchPersister
	blockPersisters       map[string]*blockPersister
	recentBlocks          map[string]*recentBlock
}

type recentBlock struct {
	height    string
	timestamp int64
}

type formattedEventBatch struct {
	batch []*formattedEvent
}

type blockBatch struct {
	height int64
	events []*formattedEvent
}

type BatchPersister interface {
	Start()
	Pause()
	Unpause()
	Persist([]FormattedEvent) (int64, error)
}

type BlockPersister interface {
	Start()
	Pause()
	Unpause()
	Persist(*blockBatch) (int64, error)
}

type batchPersister struct {
	pm        *persistenceManager
	topic     string
	status    string
	controlCh chan string
	persistCh chan []FormattedEvent
}

type blockPersister struct {
	pm        *persistenceManager
	topic     string
	status    string
	controlCh chan string
	persistCh chan *blockBatch
}

func newPersistenceManager(b *Broker) PersistenceManager {
	pm := &persistenceManager{
		broker:                b,
		pgClient:              newPostgresClient().(*pgClient),
		recvChs:               make(map[string]chan *eventspb.BusEvent),
		eventBatches:          make(map[string][]FormattedEvent),
		blockBatches:          make(map[string]map[int64]*blockBatch),
		blockPersistenceReady: make(map[string]bool),
		batchPersisters:       make(map[string]*batchPersister),
		blockPersisters:       make(map[string]*blockPersister),
	}

	for topic := range b.topicSet {
		pm.batchPersisters[topic] = newBatchPersister(pm, topic).(*batchPersister)
		pm.blockPersisters[topic] = newBlockPersister(pm, topic).(*blockPersister)
	}

	return pm
}

func newBatchPersister(pm *persistenceManager, topic string) BatchPersister {
	return &batchPersister{
		pm:        pm,
		topic:     topic,
		controlCh: make(chan string),
		persistCh: make(chan []FormattedEvent),
	}
}

func newBlockPersister(pm *persistenceManager, topic string) BlockPersister {
	return &blockPersister{
		pm:        pm,
		topic:     topic,
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
				rowCount, err := bp.Persist(<-bp.persistCh)
				if err != nil {
					log.Printf("Error persisting batch for %v topic: %v\n", bp.topic, err)
				}
				fmt.Printf("Count of rows inserted: %v", rowCount)
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
				rowCount, err := bp.Persist(<-bp.persistCh)
				if err != nil {
					log.Printf("Error persisting block batch for %v topic: %v\n", bp.topic, err)
				}
				fmt.Printf("Count of rows inserted: %v", rowCount)
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

func (bp *batchPersister) Persist(batch []FormattedEvent) (int64, error) {

	evtType := batch[0].GetType()

	switch evtType {
	case FormattedEventType_Trade:
		formattedTrades := []*formattedTrade{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			// batch[i] = batch[i].(*formattedEvent).GetFormattedTrade()
			formattedTrades = append(formattedTrades, batch[i].(*formattedTrade))
		}
		copyCount, err := bp.InsertTrades(formattedTrades)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation: %v", err)
		}
		return copyCount, err
	case FormattedEventType_OrderUpdate:
		return 0, nil
	case FormattedEventType_LedgerMovements:
		return 0, nil
	case FormattedEventType_Asset:
		return 0, nil
	case FormattedEventType_MarketUpdate:
		return 0, nil
	case FormattedEventType_MarketData:
		return 0, nil
	case FormattedEventType_StakeLinking:
		return 0, nil
	}

	// queryStr := bp.GetInsertQuery(batch)
	// commandTag, err := bp.pm.pgClient.Exec(queryStr)
	// if err != nil {
	// 	log.Printf("failed to persist batch for %v topic: %v\n", bp.topic, err)
	// }
	// fmt.Printf("Batch persisted for %v topic. %v batches waiting for persistence.\n", bp.topic, len(bp.persistCh))
	// fmt.Printf("Postgres command tag: %v\n", commandTag)

	return 0, nil

}

func (bp *blockPersister) Persist(batch *blockBatch) (int64, error) {

	return 0, nil
}

func (bp *batchPersister) InsertTrades(batch []*formattedTrade) (int64, error) {
	// Using postgres copy protocol
	return bp.pm.pgClient.pool.CopyFrom(
		context.Background(),
		pgx.Identifier{"trades"},
		[]string{
			"id", "market_id", "price", "size", "buyer", "seller", "aggressor", "buy_order", "sell_order", "timestamp",
			"synth_timestamp", "type", "buyer_fee_maker", "buyer_fee_infrastructure", "buyer_fee_liquidity",
			"seller_fee_maker", "seller_fee_infrastructure", "seller_fee_liquidity",
		},
		pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
			t := batch[i]
			return []interface{}{
				t.Id, t.MarketId, t.Price, t.Size, t.Buyer, t.Seller, t.Aggressor, t.BuyOrder,
				t.SellOrder, t.Timestamp, t.SynthTimestamp, t.Type, t.BuyerFeeMaker, t.BuyerFeeInfra,
				t.BuyerFeeLiqudity, t.SellerFeeMaker, t.SellerFeeInfra, t.SellerFeeLiqudity,
			}, nil
		}),
	)
}

func (bp *batchPersister) GetInsertQuery(batch []*formattedEvent) string {

	evtType := batch[0].Type
	for _, evt := range batch {
		if evt.Type != evtType {
			log.Fatalf("Event type mismatch in formatted event batch.\n")
		}
	}

	switch evtType {
	case FormattedEventType_Trade:
		return ""
	case FormattedEventType_OrderUpdate:
		return ""
	case FormattedEventType_ExpiredOrders:
		return ""
	case FormattedEventType_LedgerMovements:
		return ""
	case FormattedEventType_Asset:
		return ""
	case FormattedEventType_MarketUpdate:
		return ""
	case FormattedEventType_MarketData:
		return ""
	case FormattedEventType_StakeLinking:
		return ""
	}

	return ""
}

// func getBatchInsertTradeQuery(batch []*formattedEvent) {
// 	baseStr := `INSERT INTO trades (
// 		id,
// 		market_id,
// 		price,
// 		size,
// 		buyer,
// 		seller,
// 		aggressor,
// 		buy_order,
// 		sell_order,
// 		timestamp,
// 		synth_timestamp,
// 		type,
// 		buyer_fee_maker,
// 		buyer_fee_infrastructure,
// 		buyer_fee_liquidity,
// 		seller_fee_maker,
// 		seller_fee_infrastructure,
// 		seller_fee_liquidity,
// 		is_first_in_bucket
// 	) SELECT DISTINCT * FROM ( VALUES %s ) t ON CONFLICT DO NOTHING;`
//
// 	typeCastings := []string{"::text", "::text", "::bigint", "::bigint", "::text", "::text", "::text", "::text",
// 		"::text", "::bigint", "::bigint", "::text", "::numeric(40)", "::numeric(40)", "::numeric(40)",
// 		"::numeric(40)", "::numeric(40)", "::numeric(40)", "::integer"}
//
// 	firstRow := `( $1::text, $2::text, $3::bigint, $4::bigint, $5::text, $6::text, $7::text, $8::text,
// 	$9::text, $10::bigint, $11::bigint, $12::text, $13::numeric(40), $14::numeric(40), $15::numeric(40),
// 	$16::numeric(40), $17::numeric(40), $18::numeric(40), $19::integer )`
//
// 	subsequentRows := "( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19 )"
//
// 	queryStr := fmt.Sprintf(baseStr, valuesStr)
//
// 	// (text 'v1', text 'v2')
// 	// , ('v3','v4')
// 	// , ('v3','v4')
//
// }

type FormattedEventType uint8

const (
	FormattedEventType_Unspecified FormattedEventType = iota
	FormattedEventType_Trade
	FormattedEventType_OrderUpdate
	FormattedEventType_ExpiredOrders
	FormattedEventType_LedgerMovements
	FormattedEventType_Asset
	FormattedEventType_MarketUpdate
	FormattedEventType_MarketData
	FormattedEventType_StakeLinking
)

func (f FormattedEventType) String() string {
	switch f {
	case FormattedEventType_Unspecified:
		return "FormattedEventType_Unspecified"
	case FormattedEventType_Trade:
		return "FormattedEventType_Trade"
	case FormattedEventType_OrderUpdate:
		return "FormattedEventType_OrderUpdate"
	case FormattedEventType_ExpiredOrders:
		return "FormattedEventType_ExpiredOrders"
	case FormattedEventType_LedgerMovements:
		return "FormattedEventType_LedgerMovements"
	case FormattedEventType_Asset:
		return "FormattedEventType_Asset"
	case FormattedEventType_MarketUpdate:
		return "FormattedEventType_MarketUpdate"
	case FormattedEventType_MarketData:
		return "FormattedEventType_MarketData"
	case FormattedEventType_StakeLinking:
		return "FormattedEventType_StakeLinking"
	}
	return "FormattedEventType_Unspecified"
}

type FormattedEvent interface {
	GetType() FormattedEventType
	isFormattedEvent()
}

type formattedEvent struct {
	Type  FormattedEventType
	Event FormattedEvent
}

func (f *formattedEvent) isFormattedEvent() {}

func (f *formattedEvent) GetType() FormattedEventType {
	return f.Type
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

type formattedOrderUpdate struct {
	Id             string
	MarketId       string
	PartyId        string
	Side           string
	Price          string
	Size           uint64
	Remaining      uint64
	Type           string
	CreatedAt      int64
	BlockTs        int64
	SynthTimestamp int64
	Status         string
	Version        uint32
}

type formattedExpiredOrders struct{}
type formattedLedgerMovements struct{}
type formattedAsset struct{}
type formattedMarketUpdate struct{}
type formattedMarketData struct{}
type formattedStakeLinking struct{}

func (t *formattedTrade) isFormattedEvent()           {}
func (t *formattedOrderUpdate) isFormattedEvent()     {}
func (t *formattedExpiredOrders) isFormattedEvent()   {}
func (t *formattedLedgerMovements) isFormattedEvent() {}
func (t *formattedAsset) isFormattedEvent()           {}
func (t *formattedMarketUpdate) isFormattedEvent()    {}
func (t *formattedMarketData) isFormattedEvent()      {}
func (t *formattedStakeLinking) isFormattedEvent()    {}

func (t *formattedTrade) GetType() FormattedEventType {
	return FormattedEventType_Trade
}
func (o *formattedOrderUpdate) GetType() FormattedEventType {
	return FormattedEventType_OrderUpdate
}
func (eo *formattedExpiredOrders) GetType() FormattedEventType {
	return FormattedEventType_ExpiredOrders
}
func (lm *formattedLedgerMovements) GetType() FormattedEventType {
	return FormattedEventType_LedgerMovements
}
func (a *formattedAsset) GetType() FormattedEventType {
	return FormattedEventType_Asset
}
func (mu *formattedMarketUpdate) GetType() FormattedEventType {
	return FormattedEventType_MarketUpdate
}
func (md *formattedMarketData) GetType() FormattedEventType {
	return FormattedEventType_MarketData
}
func (sl *formattedStakeLinking) GetType() FormattedEventType {
	return FormattedEventType_StakeLinking
}

// func (f *formattedEvent) GetFormattedTrade() *formattedTrade {
// 	if evt, ok := f.GetEvent().(*formattedTrade); ok {
// 		return evt
// 	}
// 	return nil
// }

func (m *persistenceManager) start() {

	for topic, _ := range m.broker.topicSet {

		m.batchPersisters[topic].Start()
		m.blockPersisters[topic].Start()
		m.blockPersisters[topic].Pause() // Pause until Vega node done replaying and previous batches are inserted.

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
				} else if evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_BEGIN_BLOCK {
					bb := evt.GetBeginBlock()
					m.recentBlocks[idParts[0]] = &recentBlock{height: idParts[0], timestamp: bb.Timestamp}
					delete(m.recentBlocks, strconv.Itoa(int(height-100000)))
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
					m.batchPersisters[topic].persistCh <- batch
					if len(m.batchPersisters[topic].persistCh) == 0 && !m.broker.isReplaying && len(m.eventBatches[topic]) == 0 {
						// Finished inserting all batch events, start block by block inserts.
						m.blockPersistenceReady[topic] = true
						ready := true
						for _, v := range m.blockPersistenceReady {
							if v == false {
								ready = false
							}
						}
						if ready {
							m.blockPersisters[topic].Unpause()
						}
					}
				}
			}
		}()

	}

}

func (m *persistenceManager) FormatEvent(evt *eventspb.BusEvent) (f *formattedEvent) {

	// Will call a different formatting func depending on the type of BusEvent that is passed.
	switch true {
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_TRADE):
		return m.formatTrade(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ORDER):
		return m.formatOrderUpdate(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_EXPIRED_ORDERS):
		// Handle this differently, probably will create a formattedExpiredOrders type and handle the
		// individual updates at persist time.
		return m.formatExpiredOrders(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_LEDGER_MOVEMENTS):
		// Handle this differently, probably will create a formattedLedgerMovements type and handle the
		// individual ledger movements at persist time.
		for _, lm := range evt.GetLedgerMovements().LedgerMovements {
			// formatLedgerMovement(lm)
			_ = lm
		}
		m.formatLedgerMovements(evt)
		return nil
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ASSET):
		return m.formatAsset(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_CREATED):
		return m.formatMarketUpdate(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_UPDATED):
		return m.formatMarketUpdate(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_DATA):
		return m.formatMarketData(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_STAKE_LINKING):
		return m.formatStakeLinking(evt)
	}

	return f
}

func (m *persistenceManager) formatTrade(evt *eventspb.BusEvent) (f *formattedEvent) {

	t := evt.GetTrade()

	// Get synth_timestamp
	evtIndex, err := strconv.ParseInt(strings.Split(evt.Id, "-")[1], 10, 64)
	if err != nil {
		log.Printf("Could not convert evtIndex to int64: %v", err)
	}
	synthtimestamp := t.Timestamp + evtIndex

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
			SynthTimestamp:    synthtimestamp,
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

func (m *persistenceManager) formatOrderUpdate(evt *eventspb.BusEvent) (f *formattedEvent) {

	o := evt.GetOrder()

	// Get synth_timestamp
	idParts := strings.Split(evt.Id, "-")
	evtIndex, err := strconv.ParseInt(idParts[1], 10, 64)
	if err != nil {
		log.Printf("Could not convert evtIndex to int64: %v", err)
	}
	blockTs := m.recentBlocks[idParts[0]].timestamp
	synthTimestamp := blockTs + evtIndex

	return &formattedEvent{
		Type: FormattedEventType_OrderUpdate,
		Event: &formattedOrderUpdate{
			Id:             o.Id,
			MarketId:       o.MarketId,
			PartyId:        o.PartyId,
			Side:           o.Side.String(),
			Price:          o.Price,
			Size:           o.Size,
			Remaining:      o.Remaining,
			Type:           o.Type.String(),
			CreatedAt:      o.CreatedAt,
			BlockTs:        blockTs,
			SynthTimestamp: synthTimestamp,
			Status:         o.Status.String(),
			Version:        uint32(o.Version),
		},
	}
}

func (m *persistenceManager) formatExpiredOrders(evt *eventspb.BusEvent) (f *formattedEvent) {

	eo := evt.GetExpiredOrders()

	return &formattedEvent{
		Type:  FormattedEventType_ExpiredOrders,
		Event: &formattedExpiredOrders{},
	}
}

func (m *persistenceManager) formatLedgerMovements(evt *eventspb.BusEvent) (f *formattedEvent) {

	lm := evt.GetLedgerMovements().LedgerMovements

	return &formattedEvent{
		Type:  FormattedEventType_LedgerMovements,
		Event: &formattedLedgerMovements{},
	}
}

func (m *persistenceManager) formatAsset(evt *eventspb.BusEvent) (f *formattedEvent) {

	a := evt.GetAsset()

	return &formattedEvent{
		Type:  FormattedEventType_Asset,
		Event: &formattedAsset{},
	}
}

func (m *persistenceManager) formatMarketUpdate(evt *eventspb.BusEvent) (f *formattedEvent) {

	var m *vegapb.Market
	if evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_CREATED {
		m = evt.GetMarketCreated()
	} else {
		m = evt.GetMarketUpdated()
	}

	return &formattedEvent{
		Type:  FormattedEventType_MarketUpdate,
		Event: &formattedMarketUpdate{},
	}
}

func (m *persistenceManager) formatMarketData(evt *eventspb.BusEvent) (f *formattedEvent) {

	md := evt.GetMarketData()

	return &formattedEvent{
		Type:  FormattedEventType_MarketData,
		Event: &formattedMarketData{},
	}
}

func (m *persistenceManager) formatStakeLinking(evt *eventspb.BusEvent) (f *formattedEvent) {

	sl := evt.GetStakeLinking()

	return &formattedEvent{
		Type:  FormattedEventType_StakeLinking,
		Event: &formattedStakeLinking{},
	}
}
