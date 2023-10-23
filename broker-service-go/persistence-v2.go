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
	return client.pool.Query(context.Background(), queryStr, args)
}

func (client *pgClient) Exec(queryStr string, args ...interface{}) (pgconn.CommandTag, error) {
	return client.pool.Exec(context.Background(), queryStr, args)
}

func (client *pgClient) InitDb() pgconn.CommandTag {

	// Create helper functions

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

	// Create all required hypertables and temp tables, skipping tables that are already present.

	// Create continuous aggregates for new hypertables

	return nil
}

type PersistenceManager interface {
	FormatBusEvent(*eventspb.BusEvent) []FormattedEvent

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
	Persist([]FormattedEvent) (pgconn.CommandTag, int64, error)
}

type BlockPersister interface {
	Start()
	Pause()
	Unpause()
	Persist(*blockBatch) (pgconn.CommandTag, int64, error)
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
		pgClient:              newPostgresClient(b).(*pgClient),
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
				commandTag, rowCount, err := bp.Persist(<-bp.persistCh)
				if err != nil {
					log.Printf("Error persisting batch for %v topic: %v\n", bp.topic, err)
				}
				fmt.Printf("Count of rows inserted: %v", rowCount)
				fmt.Printf("Count of rows affected: %v", commandTag.RowsAffected()) // Only works for certain topics
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
				commandTag, copyCount, err := bp.Persist(<-bp.persistCh)
				if err != nil {
					log.Printf("Error persisting block batch for %v topic: %v\n", bp.topic, err)
				}
				fmt.Printf("Count of rows copied: %v", copyCount)
				fmt.Printf("Count of rows affected: %v", commandTag.RowsAffected()) // Only works for certain topics

				// Send notifcation through kafka to streaming API that block insertion is complete for this topic.

				bp.pm.broker.kc.writer.WriteMessages(context.Background(), messages...)

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

func (bp *batchPersister) Persist(batch []FormattedEvent) (pgconn.CommandTag, int64, error) {

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
		commandTag, copyCount, err := bp.InsertTrades(formattedTrades)
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
		commandTag, copyCount, err := bp.InsertOrderUpdates(formattedOrderUpdates)
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
		commandTag, copyCount, err := bp.InsertLedgerMovements(formattedLedgerMovements)
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
		commandTag, copyCount, err := bp.InsertAssetUpdates(formattedAssetUpdates)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for asset updates: %v", err)
		}
		return commandTag, copyCount, err
	case FormattedEventType_MarketUpdate:
		formattedMarketUpdates := []*formattedMarketUpdate{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			formattedMarketUpdates = append(formattedMarketUpdates, batch[i].(*formattedEvent).Event.(*formattedMarketUpdate))
		}
		commandTag, copyCount, err := bp.InsertMarketUpdates(formattedMarketUpdates)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for market updates: %v", err)
		}
		return commandTag, copyCount, err
	case FormattedEventType_MarketData:
		fmd := []*formattedMarketData{}
		for i, evt := range batch {
			if evt.GetType() != evtType {
				log.Fatalf("Event type mismatch in formatted event batch: %v and %v\n", evtType.String(), evt.GetType().String())
			}
			fmd = append(fmd, batch[i].(*formattedEvent).Event.(*formattedMarketData))
		}
		commandTag, copyCount, err := bp.InsertMarketData(fmd)
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
		commandTag, copyCount, err := bp.InsertStakeLinkings(fsl)
		if err != nil {
			err = fmt.Errorf("error during CopyFrom operation for stake linkings: %v", err)
		}
		return commandTag, copyCount, err
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

func (bp *blockPersister) Persist(batch *blockBatch) (pgconn.CommandTag, int64, error) {

	return nil, 0, nil
}

func (bp *batchPersister) InsertTrades(batch []*formattedTrade) (pgconn.CommandTag, int64, error) {
	// Using copy protocol

	ctx := context.Background()

	// Copy to temp table (create temp tables in initdb)
	copyCount, err := bp.pm.pgClient.pool.CopyFrom(
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

	// Begin transaction
	tx, err := bp.pm.pgClient.pool.Begin(ctx)

	// Insert to main table
	commandTag, err := tx.Exec(ctx, bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to upsert trades: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(ctx, bp.pm.pgClient.topicQueries[pgQueryType_Truncate][bp.topic].String)
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

func (bp *batchPersister) InsertOrderUpdates(batch []*formattedOrderUpdate) (pgconn.CommandTag, int64, error) {

	ctx := context.Background()

	copyCount, err := bp.pm.pgClient.pool.CopyFrom(
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

	// Begin transaction
	tx, err := bp.pm.pgClient.pool.Begin(ctx)

	// Insert to main table
	commandTag, err := tx.Exec(ctx, bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to upsert order updates: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(ctx, bp.pm.pgClient.topicQueries[pgQueryType_Truncate][bp.topic].String)
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

func (bp *batchPersister) InsertLedgerMovements(batch []*formattedLedgerMovement) (pgconn.CommandTag, int64, error) {

	copyCount, err := bp.pm.pgClient.pool.CopyFrom(
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

	// Begin transaction
	tx, err := bp.pm.pgClient.pool.Begin(context.Background())

	// Insert to main table
	commandTag, err := tx.Exec(context.Background(), bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to upsert ledger movements: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(context.Background(), bp.pm.pgClient.topicQueries[pgQueryType_Truncate][bp.topic].String)
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

func (bp *batchPersister) InsertAssetUpdates(batch []*formattedAssetUpdate) (pgconn.CommandTag, int64, error) {

	// We actually probably don't need to use the copy protocol for assets because there will be very few
	// and infrequent asset updates.

	var count int64
	for _, a := range batch {
		// Upsert to main table
		commandTag, err := bp.pm.pgClient.pool.Exec(
			context.Background(),
			bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String,
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

func (bp *batchPersister) InsertMarketUpdates(batch []*formattedMarketUpdate) (pgconn.CommandTag, int64, error) {

	// We are unlikely to need to use the copy protocol for market updates because these will be infrequent.

	var count int64
	for _, m := range batch {
		// Upsert to main table
		commandTag, err := bp.pm.pgClient.pool.Exec(
			context.Background(),
			bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String,
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

func (bp *batchPersister) InsertMarketData(batch []*formattedMarketData) (pgconn.CommandTag, int64, error) {

	copyCount, err := bp.pm.pgClient.pool.CopyFrom(
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

	// Begin transaction
	tx, err := bp.pm.pgClient.pool.Begin(context.Background())

	// Insert to main table
	commandTag, err := tx.Exec(context.Background(), bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String)
	if err != nil {
		log.Fatalf("error: tx.Exec failed: failed to upsert market data: %v", err)
	}

	// Truncate temp table
	_, err = tx.Exec(context.Background(), bp.pm.pgClient.topicQueries[pgQueryType_Truncate][bp.topic].String)
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

func (bp *batchPersister) InsertStakeLinkings(batch []*formattedStakeLinking) (pgconn.CommandTag, int64, error) {

	// We probably don't need to use the copy protocol for stake linkings because they will be infrequent.

	var count int64
	for _, sl := range batch {
		// Upsert to main table
		commandTag, err := bp.pm.pgClient.pool.Exec(
			context.Background(),
			bp.pm.pgClient.topicQueries[pgQueryType_Upsert][bp.topic].String,
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
	Amount             string
	Type               string
	Timestamp          int64
	SynthTimestamp     int64
	FromAccountBalance string
	ToAccountBalance   string
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

func (m *persistenceManager) start() {

	for topic, _ := range m.broker.topicSet {

		m.batchPersisters[topic].Start()
		m.blockPersisters[topic].Start()
		m.blockPersisters[topic].Pause() // Pause until Vega node is done replaying and previous batches are inserted.

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
					m.eventBatches[topic] = append(m.eventBatches[topic], m.FormatBusEvent(evt)...)
					if len(m.eventBatches[topic]) >= 1000 {
						m.batchPersisters[topic].persistCh <- m.eventBatches[topic]
						m.eventBatches[topic] = nil
					}
				} else {
					m.blockBatches[topic][height].events = append(m.blockBatches[topic][height].events, m.FormatBusEvent(evt)...)
				}

				if !m.broker.isReplaying && evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_BEGIN_BLOCK {
					m.blockBatches[topic][height] = &blockBatch{
						height: height,
						events: []FormattedEvent{},
					}
				} else if evt.Type == eventspb.BusEventType_BUS_EVENT_TYPE_BEGIN_BLOCK {
					bb := evt.GetBeginBlock()
					m.recentBlocks[idParts[0]] = &recentBlock{height: idParts[0], timestamp: bb.Timestamp, ledgerMovementCount: 0}
					delete(m.recentBlocks, strconv.Itoa(int(height-50000)))
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
					// Flush the batch, if no batch and replay is done then set block persistence ready for that topic.
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
						// Finished inserting all batch events, start block by block inserts for topic.
						m.blockPersisters[topic].Unpause()

						m.blockPersistenceReady[topic] = true
						ready := true
						for _, v := range m.blockPersistenceReady {
							if v == false {
								ready = false
							}
						}
						if ready {
							// All topics caught up.
							// Notify streaming API that it can begin
						}

					}
				}
			}
		}()

	}

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

func (m *persistenceManager) formatExpiredOrders(evt *eventspb.BusEvent) (formattedEvents []FormattedEvent) {

	eo := evt.GetExpiredOrders()

	// Get synth_timestamp
	idParts := strings.Split(evt.Id, "-")
	evtIndex, err := strconv.ParseInt(idParts[1], 10, 64)
	if err != nil {
		log.Printf("Could not convert evtIndex to int64: %v", err)
	}
	blockTs := m.recentBlocks[idParts[0]].timestamp
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
			synthTimestamp := e.Timestamp + m.recentBlocks[height].ledgerMovementCount
			m.recentBlocks[height].ledgerMovementCount++
			formattedEvents = append(formattedEvents, &formattedEvent{
				Type: FormattedEventType_LedgerMovement,
				Event: &formattedLedgerMovement{
					FromAccountAsset:   e.FromAccount.AssetId,
					FromAccountOwner:   *e.FromAccount.Owner,
					FromAccountType:    e.FromAccount.Type.String(),
					FromAccountMarket:  *e.FromAccount.MarketId,
					ToAccountAsset:     e.ToAccount.AssetId,
					ToAccountOwner:     *e.ToAccount.Owner,
					ToAccountType:      e.ToAccount.Type.String(),
					ToAccountMarket:    *e.ToAccount.MarketId,
					Amount:             e.Amount,
					Type:               e.Type.String(),
					Timestamp:          e.Timestamp,
					SynthTimestamp:     synthTimestamp,
					FromAccountBalance: e.FromAccountBalance,
					ToAccountBalance:   e.ToAccountBalance,
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
