package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/jackc/pgconn"
	// "github.com/jackc/pgproto3/v2"
	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/segmentio/kafka-go"

	vegapb "code.vegaprotocol.io/vega/protos/vega"
	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
)

func (client *pgClient) GetQueries() {
	client.topicQueries, client.generalQueries = GetPgQueries()
}

type PgClient interface {
	Connect()
	Close()
	Query(string, ...interface{}) (pgx.Rows, error)
	Exec(string, ...interface{}) (pgconn.CommandTag, error)
}

type pgClient struct {
	b              *Broker
	dbUrl          string
	topicQueries   map[pgQueryType]map[string]pgTopicQuery
	generalQueries map[pgQueryType]pgGeneralQuery
	pool           *pgxpool.Pool
}

func newPostgresClient(b *Broker) PgClient {
	pgClient := &pgClient{
		b:     b,
		dbUrl: os.Getenv("DB_URL"),
	}
	pgClient.GetQueries()
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
	return client.pool.Query(context.Background(), queryStr, args...)
}

func (client *pgClient) Exec(queryStr string, args ...interface{}) (pgconn.CommandTag, error) {
	return client.pool.Exec(context.Background(), queryStr, args...)
}

func (client *pgClient) InitDb() {

	tableNameTopicMap := map[string]string{
		"trades":              "trades",
		"order_updates":       "orders",
		"assets":              "assets",
		"markets":             "markets",
		"market_data_updates": "market_data",
		"ledger_movements":    "ledger_movements",
		"stake_linkings":      "stake_linkings",
	}

	tx, _ := client.pool.Begin(context.Background())
	defer tx.Commit(context.Background())

	// List existing tables
	listTablesQuery := "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE';"

	rows, err := tx.Query(context.Background(), listTablesQuery)
	if err != nil {
		log.Fatalf("Failed to get tables from DB: %v\n", err)
	}
	defer rows.Close()

	// fieldDescriptions := rows.FieldDescriptions()

	// fmt.Printf("Field Descriptions: %v\n", fieldDescriptions)

	// for _, column := range fieldDescriptions {
	// 	fmt.Printf("Column name: %v\n", string( column.Name))
	// 	bytes, _ := column.MarshalJSON()
	// 	fmt.Printf("column json: %v\n", string(bytes))
	// }

	var foundNames []interface{}
	foundNamesTopicMap := map[string]string{}
	for rows.Next() {
		foundNames, err = rows.Values()
		if err != nil {
			log.Printf("Failed to get row values: %v\n", err)
		}
		fmt.Printf("listTablesQuery result row values: %v\n", foundNames)
		for _, table := range foundNames {
			tableName := table.(string)
			foundNamesTopicMap[tableName] = tableNameTopicMap[tableName]
		}
	}

	if rows.Err() != nil {
		log.Printf("Error reading rows: %v\n", rows.Err())
	}

	fmt.Printf("foundNamesTopicMap: %v\n", foundNamesTopicMap)

	// Create current_time_ns func
	query := client.generalQueries[pgQueryType_CreateCurrentTimeNsFunc]
	_, err = tx.Exec(context.Background(), query.String)
	if err != nil {
		log.Fatalf("Failed to create current_time_ns func: %v", err)
	}

	for name, topic := range tableNameTopicMap {
		fmt.Printf("name: %v\n", name)
		fmt.Printf("foundNamesTopicMap[name]: %v\n", foundNamesTopicMap[name])
		if _, ok := foundNamesTopicMap[name]; ok {
			continue
		}

		// Create all required hypertables and temp tables, skipping tables that are already present.
		query := client.topicQueries[pgQueryType_CreateTables][topic]
		_, err := tx.Exec(context.Background(), query.String)
		if err != nil {
			log.Fatalf("Failed to create tables for topic: %v: %v", topic, err)
		}

		// Create continuous aggregates for new hypertables
		query = client.topicQueries[pgQueryType_CreateContinuousAggregates][topic]
		_, err = tx.Exec(context.Background(), query.String)
		if err != nil {
			log.Fatalf("Failed to create continuous aggregates for topic: %v : %v\n", topic, err)
		}
	}

	// Create helper functions
	query = client.generalQueries[pgQueryType_CreateGeneralFuncs]
	_, err = tx.Exec(context.Background(), query.String)
	if err != nil {
		log.Fatalf("Failed to create database helper funcs: %v", err)
	}

	fmt.Printf("Database initialized.\n\n")
}

type PersistenceManager interface {
	FormatBusEvent(*eventspb.BusEvent) []FormattedEvent
	// PrepareForBlockPeristence() // Waits for batch persistence to be complete then starts block persistence.
	AllTopicsReadyForBlockInserts() bool

	// Workflow for event persistence
	//	- Get events from channel
	//	- Format events
	//	- Persist events either by block or by large batch (determined by replay)
	//	- If persisting by block, emit event to block_persistence topic on kafka (or use gRPC)
}

type persistenceManager struct {
	broker          *Broker
	pgClient        *pgClient
	recvChs         map[string]chan *eventspb.BusEvent
	eventBatches    syncMap[string, []FormattedEvent]
	blockBatches    syncMap[string, syncMap[int64, *blockBatch]]
	batchPersisters syncMap[string, *batchPersister]
	blockPersisters syncMap[string, *blockPersister]
	recentBlocks    blockMap
	// recvChs         map[string]chan *eventspb.BusEvent
	// eventBatches    map[string][]FormattedEvent
	// blockBatches    map[string]map[int64]*blockBatch
	// batchPersisters map[string]*batchPersister
	// blockPersisters map[string]*blockPersister
	// recentBlocks    map[string]*recentBlock
}

// type syncMap[T eventspb.BusEvent | []FormattedEvent | blockBatch | syncMap] struct {
// 	mu   sync.RWMutex
// 	Type T
// 	Map  map[string]T
// }

type syncMap[K comparable, V any] struct { // Only accepts strings as keys
	mu sync.RWMutex
	m  map[K]V
}

func (sm *syncMap[K, V]) Len() int {
	sm.mu.RLock()
	len := len(sm.m)
	sm.mu.RUnlock()
	return len
}

func (sm *syncMap[K, V]) Store(key K, value V) {
	sm.mu.Lock()
	sm.m[key] = value
	sm.mu.Unlock()
}

func (sm *syncMap[K, V]) Get(key K) (value V, ok bool) {
	sm.mu.RLock()
	value, ok = sm.m[key]
	sm.mu.RUnlock()
	return value, ok
}

func (sm *syncMap[K, V]) Delete(key K) {
	sm.mu.Lock()
	delete(sm.m, key)
	sm.mu.Unlock()
}

type blockMap struct {
	mu sync.RWMutex
	m  map[string]*recentBlock
}

func (b *blockMap) Store(key string, value *recentBlock) {
	b.mu.Lock()
	b.m[key] = value
	b.mu.Unlock()
}

func (b *blockMap) Get(key string) (value *recentBlock, ok bool) {
	b.mu.RLock()
	value, ok = b.m[key]
	b.mu.RUnlock()
	return value, ok
}

func (b *blockMap) Delete(key string) {
	b.mu.Lock()
	delete(b.m, key)
	b.mu.Unlock()
}

type recentBlock struct {
	height              string
	timestamp           int64
	ledgerMovementCount int64
}

type formattedEventBatch struct {
	batch []*formattedEvent
}

type blockBatch struct {
	height int64
	events []FormattedEvent
}

type BatchPersister interface {
	Start()
	Pause()
	Unpause()
	// Persist([]FormattedEvent) (pgconn.CommandTag, int64, error)
}

type BlockPersister interface {
	Start()
	Pause()
	Unpause()
	// Persist(*blockBatch) (pgconn.CommandTag, int64, error)
}

type persister struct {
	topic string
	pm    *persistenceManager
}

type batchPersister struct {
	pm        *persistenceManager
	topic     string
	status    string
	controlCh chan string
	persistCh chan []FormattedEvent
	p         *persister
}

type blockPersister struct {
	pm        *persistenceManager
	topic     string
	status    string
	controlCh chan string
	persistCh chan *blockBatch
	p         *persister
}

func newPersistenceManager(b *Broker) PersistenceManager {
	pm := &persistenceManager{
		broker:   b,
		pgClient: newPostgresClient(b).(*pgClient),
		recvChs:  b.topicChans,
		// recvChs:               make(map[string]chan *eventspb.BusEvent),
		eventBatches: syncMap[string, []FormattedEvent]{
			mu: sync.RWMutex{},
			m:  map[string][]FormattedEvent{},
		},
		// eventBatches:    make(map[string][]FormattedEvent),
		blockBatches: syncMap[string, syncMap[int64, *blockBatch]]{
			mu: sync.RWMutex{},
			m:  map[string]syncMap[int64, *blockBatch]{},
		},
		// blockBatches:    make(map[string]map[int64]*blockBatch),
		batchPersisters: syncMap[string, *batchPersister]{
			mu: sync.RWMutex{},
			m:  map[string]*batchPersister{},
		},
		// batchPersisters: make(map[string]*batchPersister),
		blockPersisters: syncMap[string, *blockPersister]{
			mu: sync.RWMutex{},
			m:  map[string]*blockPersister{},
		},
		// blockPersisters: make(map[string]*blockPersister),
		recentBlocks: blockMap{
			mu: sync.RWMutex{},
			m:  map[string]*recentBlock{},
		},
		// recentBlocks:    make(map[string]*recentBlock),
	}

	// Create persisters
	for topic := range b.topicSet {
		pm.batchPersisters.Store(topic, newBatchPersister(pm, topic).(*batchPersister))
		pm.blockPersisters.Store(topic, newBlockPersister(pm, topic).(*blockPersister))
	}

	return pm
}

func newBatchPersister(pm *persistenceManager, topic string) BatchPersister {
	return &batchPersister{
		pm:        pm,
		topic:     topic,
		controlCh: make(chan string),
		persistCh: make(chan []FormattedEvent, 1000),
		p:         &persister{pm: pm, topic: topic},
	}
}

func newBlockPersister(pm *persistenceManager, topic string) BlockPersister {
	return &blockPersister{
		pm:        pm,
		topic:     topic,
		controlCh: make(chan string),
		persistCh: make(chan *blockBatch, 10000),
		p:         &persister{pm: pm, topic: topic},
	}
}

func (bp *batchPersister) Start() {
	bp.status = "running"
	go func() {
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

					block := <-bp.persistCh

					// if bp.pm.blockPersisters[bp.topic].IsRunning() {
					// 	bp.pm.blockPersisters[bp.topic].Pause()
					// }

					commandTag, rowCount, err := bp.p.Persist(block)
					if err != nil {
						// Let's make it a log.Fatal because if we miss events all the data will be wrong
						log.Fatalf("Error persisting batch for %v topic: %v\n", bp.topic, err)
					}

					// if len(bp.persistCh) == 0 && !bp.pm.broker.isReplaying && len(bp.pm.eventBatches[bp.topic]) == 0 {
					// 	// Topic is cleared, unpause blockPersister for topic.
					// 	bp.pm.blockPersisters[bp.topic].Unpause()
					// }

					fmt.Printf("Count of rows inserted: %v", rowCount)
					fmt.Printf("Count of rows affected: %v", commandTag.RowsAffected()) // Only works for certain topics
				}
			}
		}
	}()
}

// Note: Consider the idea that we don't need to pause the block persisters as long as we can block persistence
//
//	notificaitons to the streaming API
func (bp *blockPersister) Start() {
	bp.status = "running"
	go func() {
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
					block := <-bp.persistCh
					commandTag, rowCount, err := bp.p.Persist(block.events)
					// Notify streaming API through kafka of block insertion success/failure for topic.
					allTopicsReady := bp.pm.AllTopicsReadyForBlockInserts()
					if err != nil {
						log.Fatalf("Error persisting block batch for %v topic: %v\n", bp.topic, err)
						if allTopicsReady && !bp.pm.broker.isReplaying { // Only notify API on inserts once all topics are ready
							msg := kafka.Message{
								Topic: "persistence_status",
								Value: []byte(fmt.Sprintf(`{ "topic": "%v", "height": "%v", "status": "failure" }`, bp.topic, block.height)),
							}
							bp.pm.broker.kc.kafkaMsgCh <- msg
						}
					} else if allTopicsReady && !bp.pm.broker.isReplaying {
						msg := kafka.Message{
							Topic: "persistence_status",
							Value: []byte(fmt.Sprintf(`{ "topic": "%v", "height": "%v", "status": "success" }`, bp.topic, block.height)),
						}
						bp.pm.broker.kc.kafkaMsgCh <- msg
					}
					fmt.Printf("Count of rows copied: %v", rowCount)
					fmt.Printf("Count of rows affected: %v", commandTag.RowsAffected()) // Only works for certain topics

				}
			}
		}
	}()
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
	return bp.status == "running"
}

func (bp *blockPersister) IsRunning() bool {
	return bp.status == "running"
}

func (p *persister) Persist(batch []FormattedEvent) (pgconn.CommandTag, int64, error) {

	evtType := batch[0].GetType()

	switch evtType {
	case FormattedEventType_Trade:
		formattedTrades := []*formattedTrade{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			// batch[i] = batch[i].(*formattedEvent).GetFormattedTrade()
			formattedTrades = append(formattedTrades, batch[i].(*formattedEvent).Event.(*formattedTrade))
		}
		commandTag, copyCount, err := p.InsertTrades(formattedTrades)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for trades: %v", err)
		}
		return commandTag, copyCount, err
	case FormattedEventType_OrderUpdate:
		formattedOrderUpdates := []*formattedOrderUpdate{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			formattedOrderUpdates = append(formattedOrderUpdates, batch[i].(*formattedEvent).Event.(*formattedOrderUpdate))
		}
		commandTag, copyCount, err := p.InsertOrderUpdates(formattedOrderUpdates)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for order updates: %v", err)
		}
		return commandTag, copyCount, err
	case FormattedEventType_LedgerMovement:
		formattedLedgerMovements := []*formattedLedgerMovement{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			formattedLedgerMovements = append(formattedLedgerMovements, batch[i].(*formattedEvent).Event.(*formattedLedgerMovement))
		}
		commandTag, copyCount, err := p.InsertLedgerMovements(formattedLedgerMovements)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for ledger movements: %v", err)
		}
		return commandTag, copyCount, err
	case FormattedEventType_AssetUpdate:
		formattedAssetUpdates := []*formattedAssetUpdate{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			formattedAssetUpdates = append(formattedAssetUpdates, batch[i].(*formattedEvent).Event.(*formattedAssetUpdate))
		}
		commandTag, rowCount, err := p.InsertAssetUpdates(formattedAssetUpdates)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for asset updates: %v", err)
		}
		return commandTag, rowCount, err
	case FormattedEventType_MarketUpdate:
		formattedMarketUpdates := []*formattedMarketUpdate{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			formattedMarketUpdates = append(formattedMarketUpdates, batch[i].(*formattedEvent).Event.(*formattedMarketUpdate))
		}
		commandTag, rowCount, err := p.InsertMarketUpdates(formattedMarketUpdates)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for market updates: %v", err)
		}
		return commandTag, rowCount, err
	case FormattedEventType_MarketData:
		fmd := []*formattedMarketData{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			fmd = append(fmd, batch[i].(*formattedEvent).Event.(*formattedMarketData))
		}
		commandTag, copyCount, err := p.InsertMarketData(fmd)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for market data: %v", err)
		}
		return commandTag, copyCount, err
	case FormattedEventType_StakeLinking:
		fsl := []*formattedStakeLinking{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			fsl = append(fsl, batch[i].(*formattedEvent).Event.(*formattedStakeLinking))
		}
		commandTag, rowCount, err := p.InsertStakeLinkings(fsl)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for stake linkings: %v", err)
		}
		return commandTag, rowCount, err
	}

	// queryStr := bp.GetInsertQuery(batch)
	// commandTag, err := bp.pm.pgClient.Exec(queryStr)
	// if err != nil {
	// 	log.Printf("failed to persist batch for %v topic: %v\n", bp.topic, err)
	// }
	// fmt.Printf("Batch persisted for %v topic. %v batches waiting for persistence.\n", bp.topic, len(bp.persistCh))
	// fmt.Printf("Postgres command tag: %v\n", commandTag)

	return pgconn.CommandTag{}, 0, nil

}

// func (bp *blockPersister) Persist(block *blockBatch) (pgconn.CommandTag, int64, error) {

// 	evtType := block.events[0].GetType()

// 	switch evtType {
// 	case FormattedEventType_Trade:
// 		formattedTrades := []*formattedTrade{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			// batch[i] = batch[i].(*formattedEvent).GetFormattedTrade()
// 			formattedTrades = append(formattedTrades, block.events[i].(*formattedEvent).Event.(*formattedTrade))
// 		}
// 		commandTag, copyCount, err := bp.InsertTrades(formattedTrades)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for trades: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	case FormattedEventType_OrderUpdate:
// 		formattedOrderUpdates := []*formattedOrderUpdate{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			formattedOrderUpdates = append(formattedOrderUpdates, block.events[i].(*formattedEvent).Event.(*formattedOrderUpdate))
// 		}
// 		commandTag, copyCount, err := bp.InsertOrderUpdates(formattedOrderUpdates)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for order updates: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	case FormattedEventType_LedgerMovement:
// 		formattedLedgerMovements := []*formattedLedgerMovement{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event block: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			formattedLedgerMovements = append(formattedLedgerMovements, block.events[i].(*formattedEvent).Event.(*formattedLedgerMovement))
// 		}
// 		commandTag, copyCount, err := bp.InsertLedgerMovements(formattedLedgerMovements)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for ledger movements: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	case FormattedEventType_AssetUpdate:
// 		formattedAssetUpdates := []*formattedAssetUpdate{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event block: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			formattedAssetUpdates = append(formattedAssetUpdates, block.events[i].(*formattedEvent).Event.(*formattedAssetUpdate))
// 		}
// 		commandTag, copyCount, err := bp.InsertAssetUpdates(formattedAssetUpdates)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for asset updates: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	case FormattedEventType_MarketUpdate:
// 		formattedMarketUpdates := []*formattedMarketUpdate{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event block: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			formattedMarketUpdates = append(formattedMarketUpdates, block.events[i].(*formattedEvent).Event.(*formattedMarketUpdate))
// 		}
// 		commandTag, copyCount, err := bp.InsertMarketUpdates(formattedMarketUpdates)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for market updates: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	case FormattedEventType_MarketData:
// 		fmd := []*formattedMarketData{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event block: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			fmd = append(fmd, block.events[i].(*formattedEvent).Event.(*formattedMarketData))
// 		}
// 		commandTag, copyCount, err := bp.InsertMarketData(fmd)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for market data: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	case FormattedEventType_StakeLinking:
// 		fsl := []*formattedStakeLinking{}
// 		for i, evt := range block.events {
// 			if evt.GetType() != evtType {
// 				log.Fatalf("Event type mismatch in formatted event block: %v and %v\n", evtType.String(), evt.GetType().String())
// 			}
// 			fsl = append(fsl, block.events[i].(*formattedEvent).Event.(*formattedStakeLinking))
// 		}
// 		commandTag, copyCount, err := bp.InsertStakeLinkings(fsl)
// 		if err != nil {
// 			err = fmt.Errorf("error during CopyFrom operation for stake linkings: %v", err)
// 		}
// 		return commandTag, copyCount, err
// 	}

// 	// queryStr := bp.GetInsertQuery(batch)
// 	// commandTag, err := bp.pm.pgClient.Exec(queryStr)
// 	// if err != nil {
// 	// 	log.Printf("failed to persist batch for %v topic: %v\n", bp.topic, err)
// 	// }
// 	// fmt.Printf("Batch persisted for %v topic. %v batches waiting for persistence.\n", bp.topic, len(bp.persistCh))
// 	// fmt.Printf("Postgres command tag: %v\n", commandTag)

// 	return pgconn.CommandTag{}, 0, nil

// 	return nil, 0, nil
// }

func (p *persister) InsertTrades(batch []*formattedTrade) (pgconn.CommandTag, int64, error) {
	// Using copy protocol

	ctx := context.Background()

	// Copy to temp table (create temp tables in initdb)
	copyCount, err := p.pm.pgClient.pool.CopyFrom(
		ctx,
		pgx.Identifier{"trades_temp"},
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
	if err != nil {
		log.Fatalf("error: pool.CopyFrom failed: failed to copy trades: %v", err)
	}

	// Begin transaction
	tx, err := p.pm.pgClient.pool.Begin(ctx)
	if err != nil {
		log.Fatalf("failed to start transaction: %v", err)
	}

	// Insert to main table
	commandTag, err := tx.Exec(ctx, p.pm.pgClient.topicQueries[pgQueryType_Insert][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to insert trades: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(ctx, p.pm.pgClient.topicQueries[pgQueryType_Truncate][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to truncate temp trades table: %v", err)
	}

	// Commit transaction
	err = tx.Commit(ctx)
	if err != nil {
		log.Fatalf("error: tx.Commit failed: failed to commit tx for trades persistence: %v", err)
	}

	return commandTag, copyCount, err
}

func (p *persister) InsertOrderUpdates(batch []*formattedOrderUpdate) (pgconn.CommandTag, int64, error) {

	ctx := context.Background()

	copyCount, err := p.pm.pgClient.pool.CopyFrom(
		context.Background(),
		pgx.Identifier{"order_updates_temp"},
		[]string{
			"id", "market_id", "party_id", "side", "price", "size", "remaining", "type",
			"created_at", "block_ts", "synth_timestamp", "status", "version",
		},
		pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
			o := batch[i]
			return []interface{}{
				o.Id, o.MarketId, o.PartyId, o.Side, o.Price, o.Size, o.Remaining, o.Type,
				o.CreatedAt, o.BlockTs, o.SynthTimestamp, o.Status, o.Version,
			}, nil
		}),
	)
	if err != nil {
		log.Fatalf("error: pool.CopyFrom failed: failed to copy order updates: %v", err)
	}

	// Begin transaction
	tx, err := p.pm.pgClient.pool.Begin(ctx)
	if err != nil {
		log.Fatalf("failed to start transaction: %v", err)
	}

	// Insert to main table
	commandTag, err := tx.Exec(ctx, p.pm.pgClient.topicQueries[pgQueryType_Insert][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to insert order updates: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(ctx, p.pm.pgClient.topicQueries[pgQueryType_Truncate][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to truncate temp order updates table: %v", err)
	}

	// Commit transaction
	err = tx.Commit(ctx)
	if err != nil {
		log.Fatalf("error: tx.Commit failed: failed to commit tx for order updates persistence: %v", err)
	}

	return commandTag, copyCount, err

}

func (p *persister) InsertLedgerMovements(batch []*formattedLedgerMovement) (pgconn.CommandTag, int64, error) {

	copyCount, err := p.pm.pgClient.pool.CopyFrom(
		context.Background(),
		pgx.Identifier{"ledger_movements_temp"},
		[]string{
			"from_account_asset", "from_account_owner", "from_account_type", "from_account_market", "to_account_asset",
			"to_account_owner", "to_account_type", "to_account_market", "amount", "type", "timestamp",
			"synth_timestamp", "from_balance", "to_balance",
		},
		pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
			l := batch[i]
			return []interface{}{
				l.FromAccountAsset, l.FromAccountOwner, l.FromAccountType, l.FromAccountMarket, l.ToAccountAsset,
				l.ToAccountOwner, l.ToAccountType, l.ToAccountMarket, l.Amount, l.Type, l.Timestamp,
				l.SynthTimestamp, l.FromAccountBalance, l.ToAccountBalance,
			}, nil
		}),
	)
	if err != nil {
		for _, item := range batch {
			log.Printf("Ledger movement: %+v\n", *item)
		}
		log.Fatalf("error: pool.CopyFrom failed: failed to copy ledger movements: %v", err)
	} else {
		fmt.Printf("Copied rows!\n")
		fmt.Printf("Row Count: %v\n", copyCount)
	}

	// Begin transaction
	tx, err := p.pm.pgClient.pool.Begin(context.Background())
	if err != nil {
		log.Fatalf("failed to start transaction: %v", err)
	}

	// Insert to main table
	commandTag, err := tx.Exec(context.Background(), p.pm.pgClient.topicQueries[pgQueryType_Insert][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to insert ledger movements: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(context.Background(), p.pm.pgClient.topicQueries[pgQueryType_Truncate][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to truncate temp ledger movements table: %v", err)
	}

	// Commit transaction
	err = tx.Commit(context.Background())
	if err != nil {
		log.Fatalf("error: tx.Commit failed: failed to commit tx for ledger movements persistence: %v", err)
	}

	return commandTag, copyCount, err
}

func (p *persister) InsertAssetUpdates(batch []*formattedAssetUpdate) (pgconn.CommandTag, int64, error) {

	// We actually probably don't need to use the copy protocol for assets because there will be very few
	// and infrequent asset updates.

	var count int64
	for _, a := range batch {
		// Upsert to main table
		commandTag, err := p.pm.pgClient.pool.Exec(
			context.Background(),
			p.pm.pgClient.topicQueries[pgQueryType_Upsert][p.topic].String,
			a.Id, a.Status, a.Name, a.Symbol, a.Decimals, a.Quantum,
			a.Erc20ContractAddr, a.Erc20LifetimeLimit, a.Erc20WithdrawThreshold,
		)
		count += commandTag.RowsAffected()
		if err != nil {
			log.Fatalf("error: pool.Exec failed: failed to upsert asset updates: %v", err)
		}
	}

	return pgconn.CommandTag{}, count, nil

	// copyCount, err := bp.pm.pgClient.pool.CopyFrom(
	// 	context.Background(),
	// 	pgx.Identifier{"assets_temp"},
	// 	[]string{
	// 		"id", "status", "name", "symbol", "decimals", "quantum",
	// 		"erc20_contract_addr", "erc20_lifetime_limit", "erc20_withdraw_threshold",
	// 	},
	// 	pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
	// 		a := batch[i]
	// 		return []interface{}{
	// 			a.Id, a.Status, a.Name, a.Symbol, a.Decimals, a.Quantum,
	// 			a.Erc20ContractAddr, a.Erc20LifetimeLimit, a.Erc20WithdrawThreshold,
	// 		}, nil
	// 	}),
	// )

}

func (p *persister) InsertMarketUpdates(batch []*formattedMarketUpdate) (pgconn.CommandTag, int64, error) {

	// We are unlikely to need to use the copy protocol for market updates because these will be infrequent.

	var count int64
	for _, m := range batch {
		// Upsert to main table
		commandTag, err := p.pm.pgClient.pool.Exec(
			context.Background(),
			p.pm.pgClient.topicQueries[pgQueryType_Upsert][p.topic].String,
			m.Id, m.InstrumentCode, m.InstrumentName, m.InstrumentMetadataTags, m.FutureSettlementAsset,
			m.FutureQuoteName, m.MarginSearchLevel, m.MarginInitialMargin, m.MarginCollateralRelease,
			m.DecimalPlaces, m.TradingMode, m.State, m.PositionDecimalPlaces,
		)
		count += commandTag.RowsAffected()
		if err != nil {
			log.Fatalf("error: pool.Exec failed: failed to upsert market update: %v", err)
		}
	}

	return pgconn.CommandTag{}, count, nil

	// copyCount, err := bp.pm.pgClient.pool.CopyFrom(
	// 	context.Background(),
	// 	pgx.Identifier{"market_data_updates_temp"},
	// 	[]string{
	// 		"id", "instrument_code", "instrument_name", "instrument_metadata_tags", "future_settlement_asset",
	// 		"future_quote_name", "margin_search_level", "margin_initial_margin", "margin_collateral_release",
	// 		"decimal_places", "trading_mode", "state", "position_decimal_places",
	// 	},
	// 	pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
	// 		m := batch[i]
	// 		return []interface{}{
	// 			m.Id, m.InstrumentCode, m.InstrumentName, m.InstrumentMetadataTags, m.FutureSettlementAsset,
	// 			m.FutureQuoteName, m.MarginSearchLevel, m.MarginInitialMargin, m.MarginCollateralRelease,
	// 			m.DecimalPlaces, m.TradingMode, m.State, m.PositionDecimalPlaces,
	// 		}, nil
	// 	}),
	// )
}

func (p *persister) InsertMarketData(batch []*formattedMarketData) (pgconn.CommandTag, int64, error) {

	copyCount, err := p.pm.pgClient.pool.CopyFrom(
		context.Background(),
		pgx.Identifier{"market_data_temp"},
		[]string{
			"market_id", "mark_price", "best_bid_price", "best_bid_volume", "best_ask_price",
			"best_ask_volume", "mid_price", "timestamp", "open_interest", "last_traded_price",
		},
		pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
			md := batch[i]
			return []interface{}{
				md.MarketId, md.MarkPrice, md.BestBidPrice, md.BestBidVolume, md.BestAskPrice,
				md.BestAskVolume, md.MidPrice, md.Timestamp, md.OpenInterest, md.LastTradedPrice,
			}, nil
		}),
	)
	if err != nil {
		log.Fatalf("error: pool.CopyFrom failed: failed to copy market data: %v", err)
	}

	// Begin transaction
	tx, err := p.pm.pgClient.pool.Begin(context.Background())
	if err != nil {
		log.Fatalf("failed to start transaction: %v", err)
	}

	// Insert to main table
	commandTag, err := tx.Exec(context.Background(), p.pm.pgClient.topicQueries[pgQueryType_Insert][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to insert market data: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(context.Background(), p.pm.pgClient.topicQueries[pgQueryType_Truncate][p.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to truncate temp market_data table: %v", err)
	}

	// Commit transaction transaction
	err = tx.Commit(context.Background())
	if err != nil {
		log.Fatalf("error: tx.Commit failed: failed to commit tx for market data persistence: %v", err)
	}

	return commandTag, copyCount, err
}

func (p *persister) InsertStakeLinkings(batch []*formattedStakeLinking) (pgconn.CommandTag, int64, error) {

	// We probably don't need to use the copy protocol for stake linkings because they will be infrequent.

	var count int64
	for _, sl := range batch {
		// Upsert to main table
		commandTag, err := p.pm.pgClient.pool.Exec(
			context.Background(),
			p.pm.pgClient.topicQueries[pgQueryType_Upsert][p.topic].String,
			sl.Id, sl.Type, sl.Timestamp, sl.FinalizedTimestamp, sl.PartyId, sl.Amount, sl.Status, sl.EthAddr,
		)
		count += commandTag.RowsAffected()
		if err != nil {
			log.Fatalf("error: pool.Exec failed: failed to upsert market update: %v", err)
		}
	}

	return pgconn.CommandTag{}, count, nil

	// copyCount, err := bp.pm.pgClient.pool.CopyFrom(
	// 	context.Background(),
	// 	pgx.Identifier{"market_data"},
	// 	[]string{
	// 		"id", "type", "ts", "finalized_timestamp", "party_id", "amount", "status", "eth_adr",
	// 	},
	// 	pgx.CopyFromSlice(len(batch), func(i int) ([]interface{}, error) {
	// 		sl := batch[i]
	// 		return []interface{}{
	// 			sl.Id, sl.Type, sl.Timestamp, sl.FinalizedTimestamp, sl.PartyId, sl.Amount, sl.Status, sl.EthAddr,
	// 		}, nil
	// 	}),
	// )
}

type FormattedEventType uint8

const (
	FormattedEventType_Unspecified FormattedEventType = iota
	FormattedEventType_Trade
	FormattedEventType_OrderUpdate
	FormattedEventType_LedgerMovement
	FormattedEventType_AssetUpdate
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
	case FormattedEventType_LedgerMovement:
		return "FormattedEventType_LedgerMovement"
	case FormattedEventType_AssetUpdate:
		return "FormattedEventType_AssetUpdate"
	case FormattedEventType_MarketUpdate:
		return "FormattedEventType_MarketUpdate"
	case FormattedEventType_MarketData:
		return "FormattedEventType_MarketData"
	case FormattedEventType_StakeLinking:
		return "FormattedEventType_StakeLinking"
	}
	return "FormattedEventType_Unspecified"
}

type FormattedEvt interface {
	formattedTrade | formattedOrderUpdate | formattedLedgerMovement | formattedAssetUpdate |
		formattedMarketUpdate | formattedMarketData | formattedStakeLinking
}

type formattedEvt[T FormattedEventType, E formattedTrade | formattedOrderUpdate] struct {
	Type  T
	Event *E
}

func (fe *formattedEvt[T, E]) GetEvent() *E {
	return fe.Event
}

func (fe *formattedEvt[T, E]) GetType() T {
	return fe.Type
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

type formattedLedgerMovement struct {
	FromAccountAsset   string
	FromAccountOwner   string
	FromAccountType    string
	FromAccountMarket  string
	ToAccountAsset     string
	ToAccountOwner     string
	ToAccountType      string
	ToAccountMarket    string
	Amount             pgtype.Numeric
	Type               string
	Timestamp          int64
	SynthTimestamp     int64
	FromAccountBalance pgtype.Numeric
	ToAccountBalance   pgtype.Numeric
}

type formattedAssetUpdate struct {
	Id                     string
	Status                 string
	Name                   string
	Symbol                 string
	Decimals               int32
	Quantum                string
	Erc20ContractAddr      string
	Erc20LifetimeLimit     string
	Erc20WithdrawThreshold string
}

type formattedMarketUpdate struct {
	// We're going to have to refactor this later to support multiple products because right now the
	// schema only includes futures. Maybe have a product code column and a separate products table.
	Id                      string
	InstrumentCode          string
	InstrumentName          string
	InstrumentMetadataTags  string
	FutureSettlementAsset   string
	FutureQuoteName         string
	MarginSearchLevel       string
	MarginInitialMargin     string
	MarginCollateralRelease string
	DecimalPlaces           int32
	TradingMode             string
	State                   string
	PositionDecimalPlaces   int32
}

type formattedMarketData struct {
	MarketId        string
	MarkPrice       string
	BestBidPrice    string
	BestBidVolume   uint64
	BestAskPrice    string
	BestAskVolume   uint64
	MidPrice        string
	Timestamp       int64
	OpenInterest    uint64
	LastTradedPrice string
}

type formattedStakeLinking struct {
	Id                 string
	Type               string
	Timestamp          int64
	FinalizedTimestamp int64
	PartyId            string
	Amount             string
	Status             string
	EthAddr            string
}

func (t *formattedTrade) isFormattedEvent()          {}
func (t *formattedOrderUpdate) isFormattedEvent()    {}
func (t *formattedLedgerMovement) isFormattedEvent() {}
func (t *formattedAssetUpdate) isFormattedEvent()    {}
func (t *formattedMarketUpdate) isFormattedEvent()   {}
func (t *formattedMarketData) isFormattedEvent()     {}
func (t *formattedStakeLinking) isFormattedEvent()   {}

func (t *formattedTrade) GetType() FormattedEventType {
	return FormattedEventType_Trade
}
func (o *formattedOrderUpdate) GetType() FormattedEventType {
	return FormattedEventType_OrderUpdate
}
func (lm *formattedLedgerMovement) GetType() FormattedEventType {
	return FormattedEventType_LedgerMovement
}
func (a *formattedAssetUpdate) GetType() FormattedEventType {
	return FormattedEventType_AssetUpdate
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

func (m *persistenceManager) Start() {

	go func() {
		for topic, _ := range m.broker.topicSet {

			batchPersister, _ := m.batchPersisters.Get(topic)
			batchPersister.Start()
			blockPersister, _ := m.blockPersisters.Get(topic)
			blockPersister.Start()
			// blockPersister.Pause() // Pause until Vega node is done replaying and previous batches are inserted.

			batchPersistTicker := time.NewTicker(time.Millisecond * 500)

			// Spawn a goroutine to fetch events for that topic.
			go func(topic string) {
				fmt.Printf("Starting routine to fetch events for %v topic\n ", topic)
				for {
					evt := <-m.recvChs[topic]
					fmt.Printf("Recieved event with type %v on topic: %v\n", evt.Type, topic)
					idParts := strings.Split(evt.Id, "-")
					height, err := strconv.ParseInt(idParts[0], 10, 64)
					if err != nil {
						log.Printf("Could not convert height to int64: %v", err)
					}
					fmt.Printf("evt Height: %v evt Index: %v\n", height, idParts[1])

					if m.broker.isReplaying {
						batch, _ := m.eventBatches.Get(topic)
						batch = append(batch, m.FormatBusEvent(evt)...)
						if len(batch) >= 1000 {
							batchPersister.persistCh <- batch
							m.eventBatches.Store(topic, nil)
						} else {
							m.eventBatches.Store(topic, batch)
						}

						// Add beginBlock to recent blocks
						if _, ok := m.recentBlocks.Get(idParts[0]); !ok {
							bb := evt.GetBeginBlock()
							rb := &recentBlock{height: idParts[0], timestamp: bb.Timestamp, ledgerMovementCount: 0}
							m.recentBlocks.Store(idParts[0], rb)
							m.recentBlocks.Delete(strconv.Itoa(int(height - 50000)))
						}

					} else {

						if evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_BEGIN_BLOCK {
							heightMap, _ := m.blockBatches.Get(topic)
							heightMap.Store(height, &blockBatch{
								height: height,
								events: []FormattedEvent{},
							})
							if _, ok := m.recentBlocks.Get(idParts[0]); !ok {
								bb := evt.GetBeginBlock()
								rb := &recentBlock{height: idParts[0], timestamp: bb.Timestamp, ledgerMovementCount: 0}
								m.recentBlocks.Store(idParts[0], rb)
								m.recentBlocks.Delete(strconv.Itoa(int(height - 50000)))
							}
						}
						if evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_END_BLOCK {
							// Queue for block inserts
							heightMap, _ := m.blockBatches.Get(topic)
							blockBatch, _ := heightMap.Get(height)
							blockPersister.persistCh <- blockBatch
							heightMap.Delete(height)
						}

						heightMap, _ := m.blockBatches.Get(topic)
						blockBatch, _ := heightMap.Get(height)
						blockBatch.events = append(blockBatch.events, m.FormatBusEvent(evt)...)
					}

				}
			}(topic)

			// Spawn a goroutine to flush batches for persistence
			go func(topic string) {
				for range batchPersistTicker.C {
					// Flush the batch
					batch, _ := m.eventBatches.Get(topic)
					if len(batch) == 0 {
						continue
					}
					batchPersister.persistCh <- batch
					m.eventBatches.Store(topic, nil)
				}
			}(topic)

		}
	}()

}

func (m *persistenceManager) AllTopicsReadyForBlockInserts() (ready bool) {

	// How are we going to determine that this is the case?
	//	- There are no events/batches left in any persistence channels or slices.
	//	&&
	//	- The most recent set of block inserts have all completed

	for topic := range m.broker.topicSet {
		batch, _ := m.eventBatches.Get(topic)
		if len(batch) != 0 {
			return false
		}
		batchPersister, _ := m.batchPersisters.Get(topic)
		if len(batchPersister.persistCh) != 0 {
			return false
		}
		blockBatch, _ := m.blockBatches.Get(topic)
		if blockBatch.Len() != 0 {
			return false
		}
		blockPersister, _ := m.blockPersisters.Get(topic)
		if len(blockPersister.persistCh) != 0 {
			return false
		}
	}

	return true
}

func (m *persistenceManager) FormatBusEvent(evt *eventspb.BusEvent) (f []FormattedEvent) {

	// Will call a different formatting func depending on the type of BusEvent that is passed.
	switch true {
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_TRADE):
		return []FormattedEvent{m.formatTrade(evt)}
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ORDER):
		return []FormattedEvent{m.formatOrderUpdate(evt)}
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_EXPIRED_ORDERS):
		// Returns formattedExpiredOrders type
		// Handle the individual updates at persist time.
		return m.formatExpiredOrders(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_LEDGER_MOVEMENTS):
		// Returns a formattedLedgerMovements type.
		// Handle the individual ledger movements at persist time.
		return m.formatLedgerMovements(evt)
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ASSET):
		return []FormattedEvent{m.formatAssetUpdate(evt)}
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_CREATED):
		return []FormattedEvent{m.formatMarketUpdate(evt)}
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_UPDATED):
		return []FormattedEvent{m.formatMarketUpdate(evt)}
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_DATA):
		return []FormattedEvent{m.formatMarketData(evt)}
	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_STAKE_LINKING):
		return []FormattedEvent{m.formatStakeLinking(evt)}
	}

	return f
}

// func (m *persistenceManager) FormatEvent(evt *eventspb.BusEvent) (f *formattedEvent) {

// 	// Will call a different formatting func depending on the type of BusEvent that is passed.
// 	switch true {
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_TRADE):
// 		return m.formatTrade(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ORDER):
// 		return m.formatOrderUpdate(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_EXPIRED_ORDERS):
// 		// Returns formattedExpiredOrders type
// 		// Handle the individual updates at persist time.
// 		return m.formatExpiredOrders(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_LEDGER_MOVEMENTS):
// 		// Returns a formattedLedgerMovements type.
// 		// Handle the individual ledger movements at persist time.
// 		return m.formatLedgerMovements(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_ASSET):
// 		return m.formatAsset(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_CREATED):
// 		return m.formatMarketUpdate(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_UPDATED):
// 		return m.formatMarketUpdate(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_DATA):
// 		return m.formatMarketData(evt)
// 	case (evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_STAKE_LINKING):
// 		return m.formatStakeLinking(evt)
// 	}

// 	return f
// }

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
	block, ok := m.recentBlocks.Get(idParts[0])
	if !ok {
		log.Fatalf("Failed to get recent block of height: %v when formatting order update", idParts[0])
	}
	blockTs := block.timestamp
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

func (m *persistenceManager) formatExpiredOrders(evt *eventspb.BusEvent) (formattedEvents []FormattedEvent) {

	eo := evt.GetExpiredOrders()

	// Get synth_timestamp
	idParts := strings.Split(evt.Id, "-")
	evtIndex, err := strconv.ParseInt(idParts[1], 10, 64)
	if err != nil {
		log.Printf("Could not convert evtIndex to int64: %v", err)
	}
	block, ok := m.recentBlocks.Get(idParts[0])
	if !ok {
		log.Fatalf("Failed to get recent block of height: %v when formatting expired orders", idParts[0])
	}
	blockTs := block.timestamp
	synthTimestamp := blockTs + evtIndex

	for _, id := range eo.OrderIds {
		formattedEvents = append(formattedEvents, &formattedEvent{
			Type: FormattedEventType_OrderUpdate,
			Event: &formattedOrderUpdate{
				Id:             id,
				MarketId:       eo.MarketId,
				PartyId:        "UNSPECIFIED",
				Side:           "SIDE_UNSPECIFIED",
				Price:          "0",
				Size:           0,
				Remaining:      0,
				Type:           "TYPE_UNSPECIFIED",
				CreatedAt:      0,
				BlockTs:        blockTs,
				SynthTimestamp: synthTimestamp,
				Status:         "STATUS_EXPIRED",
				Version:        0,
			},
		})
	}

	return formattedEvents
}

func (m *persistenceManager) formatLedgerMovements(evt *eventspb.BusEvent) (formattedEvents []FormattedEvent) {

	lm := evt.GetLedgerMovements().LedgerMovements
	height := strings.Split(evt.Id, "-")[0]

	for _, elem := range lm {
		for _, e := range elem.Entries {
			fmt.Printf("Evt: %+v", e)
			block, ok := m.recentBlocks.Get(height)
			if !ok {
				log.Fatalf("Failed to get recent block of height: %v when formatting ledger movements", height)
			}
			synthTimestamp := e.Timestamp + block.ledgerMovementCount
			block.ledgerMovementCount++

			var fao, fam, tao, tam string
			if e.FromAccount.Owner == nil {
				fao = ""
			} else {
				fao = *e.FromAccount.Owner
			}
			if e.FromAccount.MarketId == nil {
				fam = ""
			} else {
				fam = *e.FromAccount.MarketId
			}
			if e.ToAccount.Owner == nil {
				tao = ""
			} else {
				tao = *e.ToAccount.Owner
			}
			if e.ToAccount.MarketId == nil {
				tam = ""
			} else {
				tam = *e.ToAccount.MarketId
			}

			// Convert strings to numerics
			amountNum := pgtype.Numeric{}
			fromAccBalNum := pgtype.Numeric{}
			toAccBalNum := pgtype.Numeric{}

			amountNum.Set(e.Amount)
			fromAccBalNum.Set(e.FromAccountBalance)
			toAccBalNum.Set(e.ToAccountBalance)

			formattedEvents = append(formattedEvents, &formattedEvent{
				Type: FormattedEventType_LedgerMovement,
				Event: &formattedLedgerMovement{
					FromAccountAsset:   e.FromAccount.AssetId,
					FromAccountOwner:   fao,
					FromAccountType:    e.FromAccount.Type.String(),
					FromAccountMarket:  fam,
					ToAccountAsset:     e.ToAccount.AssetId,
					ToAccountOwner:     tao,
					ToAccountType:      e.ToAccount.Type.String(),
					ToAccountMarket:    tam,
					Amount:             amountNum,
					Type:               e.Type.String(),
					Timestamp:          e.Timestamp,
					SynthTimestamp:     synthTimestamp,
					FromAccountBalance: fromAccBalNum,
					ToAccountBalance:   toAccBalNum,
				},
			})
		}
	}

	return formattedEvents
}

func (m *persistenceManager) formatAssetUpdate(evt *eventspb.BusEvent) (f *formattedEvent) {

	a := evt.GetAsset()

	return &formattedEvent{
		Type: FormattedEventType_AssetUpdate,
		Event: &formattedAssetUpdate{
			Id:                     a.Id,
			Status:                 a.Status.String(),
			Name:                   a.Details.Name,
			Symbol:                 a.Details.Symbol,
			Decimals:               int32(a.Details.Decimals),
			Quantum:                a.Details.Quantum,
			Erc20ContractAddr:      a.Details.GetErc20().ContractAddress,
			Erc20LifetimeLimit:     a.Details.GetErc20().LifetimeLimit,
			Erc20WithdrawThreshold: a.Details.GetErc20().WithdrawThreshold,
		},
	}
}

func (m *persistenceManager) formatMarketUpdate(evt *eventspb.BusEvent) (f *formattedEvent) {

	var market *vegapb.Market
	if evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_MARKET_CREATED {
		market = evt.GetMarketCreated()
	} else {
		market = evt.GetMarketUpdated()
	}

	i := market.GetTradableInstrument().Instrument
	fut := i.GetFuture()
	sf := market.GetTradableInstrument().MarginCalculator.ScalingFactors

	return &formattedEvent{
		Type: FormattedEventType_MarketUpdate,
		Event: &formattedMarketUpdate{
			Id:                      market.Id,
			InstrumentCode:          i.Code,
			InstrumentName:          i.Name,
			InstrumentMetadataTags:  i.Metadata.String(),
			FutureSettlementAsset:   fut.SettlementAsset,
			FutureQuoteName:         fut.QuoteName,
			MarginSearchLevel:       strconv.FormatFloat(sf.SearchLevel, 'f', -1, 64),
			MarginInitialMargin:     strconv.FormatFloat(sf.InitialMargin, 'f', -1, 64),
			MarginCollateralRelease: strconv.FormatFloat(sf.CollateralRelease, 'f', -1, 64),
			DecimalPlaces:           int32(market.DecimalPlaces),
			TradingMode:             market.TradingMode.String(),
			State:                   market.State.String(),
			PositionDecimalPlaces:   int32(market.PositionDecimalPlaces),
		},
	}

	// evt.id,
	// evt.tradable_instrument.instrument.code,
	// evt.tradable_instrument.instrument.name,
	// JSON.stringify(evt.tradable_instrument.instrument.metadata.tags),
	// evt.tradable_instrument.instrument.Product.Future.settlement_asset,
	// evt.tradable_instrument.instrument.Product.Future.quote_name,
	// evt.tradable_instrument.margin_calculator.scaling_factors.search_level,
	// evt.tradable_instrument.margin_calculator.scaling_factors.initial_margin,
	// evt.tradable_instrument.margin_calculator.scaling_factors.collateral_release,
	// parseInt(evt.decimal_places),
	// evt.trading_mode,
	// evt.state,
	// parseInt(evt.position_decimal_places)
}

func (m *persistenceManager) formatMarketData(evt *eventspb.BusEvent) (f *formattedEvent) {

	md := evt.GetMarketData()

	return &formattedEvent{
		Type: FormattedEventType_MarketData,
		Event: &formattedMarketData{
			MarketId:        md.Market,
			MarkPrice:       md.MarkPrice,
			BestBidPrice:    md.BestBidPrice,
			BestBidVolume:   md.BestBidVolume,
			BestAskPrice:    md.BestOfferPrice,
			BestAskVolume:   md.BestOfferVolume,
			MidPrice:        md.MidPrice,
			Timestamp:       md.Timestamp,
			OpenInterest:    md.OpenInterest,
			LastTradedPrice: md.LastTradedPrice,
		},
	}
}

func (m *persistenceManager) formatStakeLinking(evt *eventspb.BusEvent) (f *formattedEvent) {

	sl := evt.GetStakeLinking()

	return &formattedEvent{
		Type: FormattedEventType_StakeLinking,
		Event: &formattedStakeLinking{
			Id:                 sl.Id,
			Type:               sl.Type.String(),
			Timestamp:          sl.Ts,
			FinalizedTimestamp: sl.FinalizedAt,
			PartyId:            sl.Party,
			Amount:             sl.Amount,
			Status:             sl.Status.String(),
			EthAddr:            sl.EthereumAddress,
		},
	}
}
