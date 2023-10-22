package main

type pgQuery_CreateTables_Trades string
type pgQuery_CreateTables_Orders string

type pgQuery struct {
	Type   pgQueryType
	Topic  string
	String string
}

func BuildPgQueries() (queries map[pgQueryType]map[string]pgQuery) {

	queries[pgQueryType_CreateTables]["trades"] = pgQuery{
		Type:   pgQueryType_CreateTables,
		Topic:  "trades",
		String: pgQueryString_CreateTables_Trades,
	}

	return queries
}

// Create Tables
const (
	pgQueryString_CreateTables_Trades = `
	CREATE TABLE IF NOT EXISTS trades (
		id TEXT NOT NULL,
		market_id TEXT NOT NULL,
		price BIGINT,
		size BIGINT,
		buyer TEXT NOT NULL,
		seller TEXT NOT NULL,
		aggressor TEXT NOT NULL,
		buy_order TEXT NOT NULL,
		sell_order TEXT NOT NULL,
		timestamp BIGINT NOT NULL,
		synth_timestamp BIGINT NOT NULL,
		type TEXT NOT NULL,
		buyer_fee_maker NUMERIC,
		buyer_fee_infrastructure NUMERIC,
		buyer_fee_liquidity NUMERIC,
		seller_fee_maker NUMERIC,
		seller_fee_infrastructure NUMERIC,
		seller_fee_liquidity NUMERIC,
		is_first_in_bucket INTEGER,
		PRIMARY KEY (market_id, synth_timestamp)
	);
	
	CREATE TABLE IF NOT EXISTS trades_temp (LIKE trades INCLUDING ALL);

	SELECT create_hypertable('trades', 'synth_timestamp', chunk_time_interval => 604800000000000, if_not_exists => TRUE);

	CREATE INDEX trades_timestamp_idx 					 ON trades(timestamp);
	CREATE INDEX trades_synth_ts_idx  					 ON trades(synth_timestamp);
	CREATE INDEX trades_party_id_idx  					 ON trades(party_id, synth_timestamp);
	CREATE INDEX trades_market_id_party_id_idx 			 ON trades(market_id, party_id, synth_timestamp);
	CREATE INDEX trades_market_id_party_id_aggressor_idx ON trades(market_id, party_id, aggressor, synth_timestamp);

	`
	pgQueryString_CreateTables_Orders = `
	CREATE TABLE IF NOT EXISTS order_updates (
		id TEXT NOT NULL,
		market_id TEXT NOT NULL,
		party_id TEXT NOT NULL,
		side TEXT NOT NULL,
		price NUMERIC,
		size NUMERIC,
		remaining NUMERIC,
		type TEXT NOT NULL,
		created_at BIGINT,
		block_ts BIGINT,
		synth_timestamp BIGINT,
		status TEXT NOT NULL,
		version INTEGER,
		PRIMARY KEY (id, synth_timestamp, version)
	);

	CREATE TABLE IF NOT EXISTS order_updates_temp (LIKE order_updates INCLUDING ALL);
	
	SELECT create_hypertable('order_updates', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);

	CREATE INDEX order_updates_block_ts_idx  		  		   ON order_updates(block_ts);
	CREATE INDEX order_updates_synth_ts_idx  		  		   ON order_updates(synth_timestamp);
	CREATE INDEX order_updates_market_id_party_id_block_ts_idx ON order_updates(market_id, party_id, block_ts);
	CREATE INDEX order_updates_market_id_status_block_ts_idx   ON order_updates(market_id, status, block_ts);

	`
	// We don't really need a hypertable or indexes for assets because it will be a small table
	pgQueryString_CreateTables_Assets = `
	CREATE TABLE IF NOT EXISTS assets (
		id TEXT NOT NULL,
		status TEXT NOT NULL,
		name TEXT NOT NULL,
		symbol TEXT NOT NULL,
		decimals INTEGER,
		quantum NUMERIC,
		erc20_contract_addr TEXT,
		erc20_lifetime_limit TEXT,
		erc20_withdraw_threshold TEXT,
		PRIMARY KEY (id)
	);

	`
	// We don't really need a hypertable or indexes for markets because it will be a small table
	pgQueryString_CreateTables_Markets = `
	CREATE TABLE IF NOT EXISTS markets (
		id TEXT NOT NULL,
		instrument_code TEXT NOT NULL,
		instrument_name TEXT NOT NULL,
		instrument_metadata_tags TEXT NOT NULL,
		future_settlement_asset TEXT NOT NULL,
		future_quote_name TEXT NOT NULL,
		margin_search_level TEXT NOT NULL,
		margin_initial_margin TEXT NOT NULL,
		margin_collateral_release TEXT NOT NULL,
		decimal_places INTEGER,
		trading_mode TEXT NOT NULL,
		state TEXT NOT NULL,
		position_decimal_places INTEGER,
		PRIMARY KEY (id)
	);
	
	`
	pgQueryString_CreateTables_MarketData = `
	CREATE TABLE IF NOT EXISTS market_data_updates (
		market_id TEXT NOT NULL,
		mark_price NUMERIC,
		best_bid_price NUMERIC,
		best_bid_volume NUMERIC,
		best_ask_price NUMERIC,
		best_ask_volume NUMERIC,
		mid_price NUMERIC,
		timestamp BIGINT,
		open_interest NUMERIC,
		last_traded_price NUMERIC,
		PRIMARY KEY (market_id, timestamp)
	);
	
	CREATE TABLE IF NOT EXISTS market_data_updates_temp (LIKE market_data_updates INCLUDING ALL);

	SELECT create_hypertable('market_data_updates', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);

	CREATE INDEX market_data_updates_market_id_timestamp_idx ON market_data(market_id, timestamp);

	`
	pgQueryString_CreateTables_LedgerMovements = `
	CREATE TABLE IF NOT EXISTS ledger_movements (
		from_account_asset TEXT NOT NULL,
		from_account_owner TEXT NOT NULL,
		from_account_type TEXT NOT NULL,
		from_account_market TEXT NOT NULL,
		to_account_asset TEXT NOT NULL,
		to_account_owner TEXT NOT NULL,
		to_account_type TEXT NOT NULL,
		to_account_market TEXT NOT NULL,
		amount NUMERIC,
		type TEXT NOT NULL,
		timestamp BIGINT,
		synth_timestamp BIGINT,
		from_balance NUMERIC,
		to_balance NUMERIC,
		PRIMARY KEY (synth_timestamp)
	);
	
	CREATE TABLE IF NOT EXISTS ledger_movements_temp (LIKE ledger_movements INCLUDING ALL);

	SELECT create_hypertable('ledger_movements', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
	
	CREATE INDEX ledger_movements_type_synth_timestamp_idx 									 ON ledger_movements(type, synth_timestamp);
	CREATE INDEX ledger_movements_type_from_asset_from_market_from_owner_synth_timestamp_idx ON ledger_movements(type, from_account_asset, from_account_market, from_account_owner, synth_timestamp);

	`
	pgQueryString_CreateTables_StakeLinkings = `
	CREATE TABLE IF NOT EXISTS stake_linkings (
		id TEXT NOT NULL,
		type TEXT NOT NULL,
		ts BIGINT NOT NULL,
		finalized_timestamp BIGINT,
		party_id TEXT NOT NULL,
		amount NUMERIC(40),
		status TEXT NOT NULL,
		eth_addr TEXT NOT NULL,
		PRIMARY KEY (id, ts)
	);
	
	SELECT create_hypertable('stake_linkings', 'ts', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);

	CREATE INDEX stake_linkings_type_ts_idx ON stake_linkings(type, status, ts);

	`
)

// Create continuous aggregates
const (
	pgQueryString_CreateContinuousAggregates_Trades          = ``
	pgQueryString_CreateContinuousAggregates_Orders          = ``
	pgQueryString_CreateContinuousAggregates_Assets          = ``
	pgQueryString_CreateContinuousAggregates_Markets         = ``
	pgQueryString_CreateContinuousAggregates_MarketData      = ``
	pgQueryString_CreateContinuousAggregates_LedgerMovements = ``
	pgQueryString_CreateContinuousAggregates_StakeLinkings   = ``
)

// Insert
const (
	pgQueryString_Insert_Trades = `
	INSERT INTO trades
	SELECT *
	FROM trades_temp
	ON CONFLICT DO NOTHING;
	`
	pgQueryString_Insert_Orders = `
	INSERT INTO order_updates
	SELECT *
	FROM order_updates_temp
	ON CONFLICT DO NOTHING;
	`
	pgQueryString_Insert_MarketData = `
	INSERT INTO market_data_updates
	SELECT *
	FROM market_data_updates_temp
	ON CONFLICT DO NOTHING;
	`
	pgQueryString_Insert_LedgerMovements = `
	INSERT INTO ledger_movements
	SELECT *
	FROM ledger_movements_temp
	ON CONFLICT DO NOTHING;
	`
)

// Upsert
const (
	pgQueryString_Upsert_Assets = `
	INSERT INTO assets (
		id,
		status,
		name,
		symbol,
		decimals,
		quantum,
		erc20_contract_addr,
		erc20_lifetime_limit,
		erc20_withdraw_threshold
	) values (
		$1, $2, $3, $4, $5, $6, $7, $8, $9
	) ON CONFLICT (id) DO UPDATE SET (
		id,
		status,
		name,
		symbol,
		decimals,
		quantum,
		erc20_contract_addr,
		erc20_lifetime_limit,
		erc20_withdraw_threshold
	) = ( $1, $2, $3, $4, $5, $6, $7, $8, $9 );
	`
	pgQueryString_Upsert_Markets = `
	INSERT INTO markets (
		id,
		instrument_code,
		instrument_name,
		instrument_metadata_tags,
		future_settlement_asset,
		future_quote_name,
		margin_search_level,
		margin_initial_margin,
		margin_collateral_release,
		decimal_places,
		trading_mode,
		state,
		position_decimal_places
	) values (
		$1, $2, $3, $4,$5, $6,  $7, $8, $9, $10, $11, $12, $13
	) ON CONFLICT (id) DO UPDATE SET (
		id,
		instrument_code,
		instrument_name,
		instrument_metadata_tags,
		future_settlement_asset,
		future_quote_name,
		margin_search_level,
		margin_initial_margin,
		margin_collateral_release,
		decimal_places,
		trading_mode,
		state,
		position_decimal_places
	) = ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 );
	`
	pgQueryString_Upsert_StakeLinkings = `
	INSERT INTO stake_linkings (
		id,
		type,
		ts,
		finalized_timestamp,
		party_id,
		amount,
		status,
		eth_addr
	) values (
		$1, $2, $3, $4, $5, $6, $7, $8
	) ON CONFLICT (ts, id) DO UPDATE SET (
		id,
		type,
		ts,
		finalized_timestamp,
		party_id,
		amount,
		status,
		eth_addr
	) = ( $1, $2, $3, $4, $5, $6, $7, $8 );
	`
)

// Truncate temp tables
const (
	pgQueryString_TruncateTemp_Trades = `
	TRUNCATE TABLE trades_temp;
	`
	pgQueryString_TruncateTemp_Orders = `
	TRUNCATE TABLE order_updates_temp;
	`
	pgQueryString_TruncateTemp_MarketData = `
	TRUNCATE TABLE market_data_updates_temp;
	`
	pgQueryString_TruncateTemp_LedgerMovements = `
	TRUNCATE TABLE ledger_movements_temp;
	`
)

// -------------------- Old stuff below, might be useful later -------------------- //

// func (bp *batchPersister) GetInsertQuery(batch []*formattedEvent) string {

// 	evtType := batch[0].Type
// 	for _, evt := range batch {
// 		if evt.Type != evtType {
// 			log.Fatalf("Event type mismatch in formatted event batch.\n")
// 		}
// 	}

// 	switch evtType {
// 	case FormattedEventType_Trade:
// 		return ""
// 	case FormattedEventType_OrderUpdate:
// 		return ""
// 	case FormattedEventType_LedgerMovement:
// 		return ""
// 	case FormattedEventType_AssetUpdate:
// 		return ""
// 	case FormattedEventType_MarketUpdate:
// 		return ""
// 	case FormattedEventType_MarketData:
// 		return ""
// 	case FormattedEventType_StakeLinking:
// 		return ""
// 	}

// 	return ""
// }

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
