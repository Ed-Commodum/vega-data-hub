package main

// import "log"

type pgQueryType uint8

const (
	// Each query will be a set of multiple queries to be executed in a transaction
	pgQueryType_Unspecified  pgQueryType = iota
	pgQueryType_CreateTables             // Creates hypertables and indexes
	pgQueryType_CreateContinuousAggregates
	pgQueryType_Insert   // Inserts from temp table to main table
	pgQueryType_Upsert   // Upserts to main table
	pgQueryType_Truncate // Truncates temp table
	pgQueryType_CreateCurrentTimeNsFunc
	pgQueryType_CreateGeneralFuncs // Creates nanosecond time now func and other useful funcs
)

type pgTopicQuery struct {
	Type   pgQueryType
	Topic  string
	String string
}

type pgGeneralQuery struct {
	Type   pgQueryType
	String string
}

type pgQueryString string

func (s pgQueryString) Str() string {
	return string(s)
}

func getQueryTypeTopicMaps() map[pgQueryType]map[string]pgQueryString {

	m := make(map[pgQueryType]map[string]pgQueryString)

	m[pgQueryType_CreateTables] = map[string]pgQueryString{
		"trades":           pgQueryString_CreateTables_Trades,
		"orders":           pgQueryString_CreateTables_Orders,
		"assets":           pgQueryString_CreateTables_Assets,
		"markets":          pgQueryString_CreateTables_Markets,
		"market_data":      pgQueryString_CreateTables_MarketData,
		"ledger_movements": pgQueryString_CreateTables_LedgerMovements,
		"stake_linkings":   pgQueryString_CreateTables_StakeLinkings,
	}

	m[pgQueryType_CreateContinuousAggregates] = map[string]pgQueryString{
		"trades":           pgQueryString_CreateContinuousAggregates_Trades,
		"orders":           pgQueryString_CreateContinuousAggregates_Orders,
		"assets":           pgQueryString_CreateContinuousAggregates_Assets,
		"markets":          pgQueryString_CreateContinuousAggregates_Markets,
		"market_data":      pgQueryString_CreateContinuousAggregates_MarketData,
		"ledger_movements": pgQueryString_CreateContinuousAggregates_LedgerMovements,
		"stake_linkings":   pgQueryString_CreateContinuousAggregates_StakeLinkings,
	}

	m[pgQueryType_Insert] = map[string]pgQueryString{
		"trades":           pgQueryString_Insert_Trades,
		"orders":           pgQueryString_Insert_Orders,
		"market_data":      pgQueryString_Insert_MarketData,
		"ledger_movements": pgQueryString_Insert_LedgerMovements,
	}

	m[pgQueryType_Upsert] = map[string]pgQueryString{
		"assets":         pgQueryString_Upsert_Assets,
		"markets":        pgQueryString_Upsert_Markets,
		"stake_linkings": pgQueryString_Upsert_StakeLinkings,
	}

	m[pgQueryType_Truncate] = map[string]pgQueryString{
		"trades":           pgQueryString_TruncateTemp_Trades,
		"orders":           pgQueryString_TruncateTemp_Orders,
		"market_data":      pgQueryString_TruncateTemp_MarketData,
		"ledger_movements": pgQueryString_TruncateTemp_LedgerMovements,
	}

	return m
}

func GetPgQueries() (topicQueries map[pgQueryType]map[string]pgTopicQuery, generalQueries map[pgQueryType]pgGeneralQuery) {

	topicQueries = make(map[pgQueryType]map[string]pgTopicQuery)
	generalQueries = make(map[pgQueryType]pgGeneralQuery)

	for queryType, m := range getQueryTypeTopicMaps() {
		topicQueries[queryType] = make(map[string]pgTopicQuery)
		for topic, queryStr := range m {
			// log.Printf("topic: %v, queryStr: %v", topic, queryStr)
			topicQueries[queryType][topic] = pgTopicQuery{
				Type:   queryType,
				Topic:  topic,
				String: queryStr.Str(),
			}
		}
	}

	generalQueries[pgQueryType_CreateGeneralFuncs] = pgGeneralQuery{
		Type:   pgQueryType_CreateGeneralFuncs,
		String: pgQueryString_CreateGeneralFuncs,
	}

	generalQueries[pgQueryType_CreateCurrentTimeNsFunc] = pgGeneralQuery{
		Type:   pgQueryType_CreateCurrentTimeNsFunc,
		String: pgQueryString_CreateCurrentTimeNsFunc,
	}

	return topicQueries, generalQueries
}

// Create funcs
const pgQueryString_CreateGeneralFuncs = `
CREATE OR REPLACE FUNCTION most_recent_trade_time(in market_id TEXT) RETURNS BIGINT
AS $$
    SELECT synth_timestamp
    FROM trades 
    WHERE market_id = $1
    ORDER BY synth_timestamp DESC 
    LIMIT 1
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION first_trade_time(in market_id TEXT) RETURNS BIGINT
AS $$
    SELECT synth_timestamp
    FROM trades
    WHERE market_id = $1
    ORDER BY synth_timestamp
    LIMIT 1
$$ LANGUAGE SQL;

`

// Create current_time_ns func
const pgQueryString_CreateCurrentTimeNsFunc = `
CREATE OR REPLACE FUNCTION current_time_ns() RETURNS BIGINT
LANGUAGE SQL STABLE AS $$
SELECT (EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000000000)::bigint
$$;
`

// Create Tables
const (
	pgQueryString_CreateTables_Trades = `
	CREATE TABLE IF NOT EXISTS trades (
		id TEXT NOT NULL,
		market_id TEXT NOT NULL,
		price NUMERIC,
		size NUMERIC,
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
	ALTER TABLE trades_temp DROP CONSTRAINT trades_temp_pkey;

	SELECT create_hypertable('trades', 'synth_timestamp', chunk_time_interval => 604800000000000, if_not_exists => TRUE);
	SELECT set_integer_now_func('trades', 'current_time_ns');

	CREATE INDEX trades_timestamp_idx 					 	 ON trades(timestamp);
	CREATE INDEX trades_synth_ts_idx  					 	 ON trades(synth_timestamp);
	CREATE INDEX trades_buyer_seller_idx  				 	 ON trades(buyer, seller, synth_timestamp);
	CREATE INDEX trades_market_id_buyer_seller_idx 		 	 ON trades(market_id, buyer, seller, synth_timestamp);
	CREATE INDEX trades_market_id_buyer_seller_aggressor_idx ON trades(market_id, buyer, seller, aggressor, synth_timestamp);

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
	ALTER TABLE order_updates_temp DROP CONSTRAINT order_updates_temp_pkey;

	SELECT create_hypertable('order_updates', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
	SELECT set_integer_now_func('order_updates', 'current_time_ns');

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
		margin_search_level NUMERIC,
		margin_initial_margin NUMERIC,
		margin_collateral_release NUMERIC,
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
	ALTER TABLE market_data_updates_temp DROP CONSTRAINT market_data_updates_temp_pkey;

	SELECT create_hypertable('market_data_updates', 'timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
	SELECT set_integer_now_func('market_data_updates', 'current_time_ns');

	CREATE INDEX market_data_updates_market_id_timestamp_idx ON market_data_updates(market_id, timestamp);

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
	ALTER TABLE ledger_movements_temp DROP CONSTRAINT ledger_movements_temp_pkey;

	SELECT create_hypertable('ledger_movements', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
	SELECT set_integer_now_func('ledger_movements', 'current_time_ns');

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
		amount NUMERIC,
		status TEXT NOT NULL,
		eth_addr TEXT NOT NULL,
		PRIMARY KEY (id, ts)
	);
	
	SELECT create_hypertable('stake_linkings', 'ts', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
	SELECT set_integer_now_func('stake_linkings', 'current_time_ns');

	CREATE INDEX stake_linkings_type_ts_idx ON stake_linkings(type, status, ts);

	`
)

// Create continuous aggregates
const (
	// "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_2H", "INTERVAL_4H", "INTERVAL_6H",
	// "INTERVAL_12H", "INTERVAL_1D", "INTERVAL_3D", "INTERVAL_1W", "INTERVAL_1MO"
	pgQueryString_CreateContinuousAggregates_Trades = `

	CREATE MATERIALIZED VIEW candles_5m
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		max(price) AS high,
		min(price) AS low,
		first(price, synth_timestamp) AS open,
		last(price, synth_timestamp) AS close,
		last(timestamp, timestamp) AS last_timestamp,
		sum(size) AS volume_contracts,
		sum(size * price) AS volume
	FROM trades
	GROUP BY market_id, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('candles_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	

	CREATE MATERIALIZED VIEW candles_1h
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(3600000000000, synth_timestamp) AS bucket,
		max(price) AS high,
		min(price) AS low,
		first(price, synth_timestamp) AS open,
		last(price, synth_timestamp) AS close,
		last(timestamp, timestamp) AS last_timestamp,
		sum(size) AS volume_contracts,
		sum(size * price) AS volume
	FROM trades
	GROUP BY market_id, time_bucket(3600000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('candles_1h',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');


	CREATE MATERIALIZED VIEW candles_1d
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(86400000000000, synth_timestamp) AS bucket,
		max(price) AS high,
		min(price) AS low,
		first(price, synth_timestamp) AS open,
		last(price, synth_timestamp) AS close,
		last(timestamp, timestamp) AS last_timestamp,
		sum(size) AS volume_contracts,
		sum(size * price) AS volume
	FROM trades
	GROUP BY market_id, time_bucket(86400000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('candles_1d',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');



	CREATE MATERIALIZED VIEW taker_data_5m
	WITH (timescaledb.continuous) AS
	SELECT
		market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		last(timestamp, timestamp) AS timestamp,
		sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
		sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size * price ELSE 0 END) AS volume_long,
		sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
		sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size * price ELSE 0 END) AS volume_short,
		count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
		count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
		count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
		count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
		avg(size * price) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buy_size,
		avg(size * price) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_sell_size
	FROM trades
	GROUP BY market_id, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('taker_data_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW taker_data_1h
	WITH (timescaledb.continuous) AS
	SELECT
		market_id,
		time_bucket(3600000000000, synth_timestamp) AS bucket,
		last(timestamp, timestamp) AS timestamp,
		sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
		sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size * price ELSE 0 END) AS volume_long,
		sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
		sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size * price ELSE 0 END) AS volume_short,
		count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
		count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
		count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
		count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
		avg(size * price) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buy_size,
		avg(size * price) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_sell_size
	FROM trades
	GROUP BY market_id, time_bucket(3600000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('taker_data_1h',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');

	
	CREATE MATERIALIZED VIEW taker_data_1d
	WITH (timescaledb.continuous) AS
	SELECT
		market_id,
		time_bucket(86400000000000, synth_timestamp) AS bucket,
		last(timestamp, timestamp) AS timestamp,
		sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size ELSE 0 END) AS volume_long_contracts,
		sum(CASE WHEN aggressor = 'SIDE_BUY' THEN size * price ELSE 0 END) AS volume_long,
		sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size ELSE 0 END) AS volume_short_contracts,
		sum(CASE WHEN aggressor = 'SIDE_SELL' THEN size * price ELSE 0 END) AS volume_short,
		count(DISTINCT buyer) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buyers,
		count(DISTINCT seller) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sellers,
		count(*) FILTER (WHERE aggressor = 'SIDE_BUY') AS num_buys,
		count(*) FILTER (WHERE aggressor = 'SIDE_SELL') AS num_sells,
		avg(size * price) FILTER (WHERE aggressor = 'SIDE_BUY') AS avg_buy_size,
		avg(size * price) FILTER (WHERE aggressor = 'SIDE_SELL') AS avg_sell_size
	FROM trades
	GROUP BY market_id, time_bucket(86400000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('taker_data_1d',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	


	CREATE MATERIALIZED VIEW infra_fees_by_market_5m
	WITH (timescaledb.continuous) AS 
	SELECT market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		max(timestamp) AS timestamp,
		sum(buyer_fee_infrastructure + seller_fee_infrastructure) as infrastructure_fee_paid
	FROM trades
	GROUP BY market_id, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('infra_fees_by_market_5m',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW infra_fees_by_party_5m
	WITH (timescaledb.continuous) AS 
	SELECT market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		max(timestamp) AS timestamp,
		buyer AS buyer,
		seller AS seller,
		sum(buyer_fee_infrastructure) AS buyer_fee_infrastructure,
		sum(seller_fee_infrastructure) AS seller_fee_infrastructure
	FROM trades
	GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('infra_fees_by_party_5m',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW fees_paid_5m
	WITH (timescaledb.continuous) AS 
	SELECT market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		buyer AS buyer,
		seller AS seller,
		sum(buyer_fee_maker) AS buyer_fee_maker,
		sum(buyer_fee_liquidity) AS buyer_fee_liquidity,
		sum(buyer_fee_infrastructure) AS buyer_fee_infrastructure,
		sum(seller_fee_maker) AS seller_fee_maker,
		sum(seller_fee_liquidity) AS seller_fee_liquidity,
		sum(seller_fee_infrastructure) AS seller_fee_infrastructure,
		sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
		sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee
	FROM trades
	GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('fees_paid_5m',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW market_data_5m
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		count(market_id) AS num_trades,
		sum(size) AS volume_contracts,
		sum(size * price) AS volume,
		sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
		sum(buyer_fee_infrastructure + buyer_fee_maker +
			buyer_fee_liquidity + seller_fee_infrastructure +
			seller_fee_maker + seller_fee_liquidity) AS fees_paid,
		max(timestamp) as timestamp
	FROM trades
	GROUP BY market_id, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('market_data_5m',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW market_data_1h
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(3600000000000, synth_timestamp) AS bucket,
		count(market_id) AS num_trades,
		sum(size) AS volume_contracts,
		sum(size * price) AS volume,
		sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
		sum(buyer_fee_infrastructure + buyer_fee_maker +
			buyer_fee_liquidity + seller_fee_infrastructure +
			seller_fee_maker + seller_fee_liquidity) AS fees_paid,
		max(timestamp) as timestamp
	FROM trades
	GROUP BY market_id, time_bucket(3600000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('market_data_1h',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW market_data_1d
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(86400000000000, synth_timestamp) AS bucket,
		count(market_id) AS num_trades,
		sum(size) AS volume_contracts,
		sum(size * price) AS volume,
		sum(buyer_fee_infrastructure + seller_fee_infrastructure) AS fees_paid_infrastructure,
		sum(buyer_fee_infrastructure + buyer_fee_maker +
			buyer_fee_liquidity + seller_fee_infrastructure +
			seller_fee_maker + seller_fee_liquidity) AS fees_paid,
		max(timestamp) as timestamp
	FROM trades
	GROUP BY market_id, time_bucket(86400000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('market_data_1d',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW party_data_5m
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(300000000000, synth_timestamp) AS bucket,
		buyer AS buyer,
		seller AS seller,
		count(buyer) FILTER (WHERE buyer != seller) AS num_trades,
		count(buyer) FILTER (WHERE buyer = seller) AS num_self_trades,
		sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume_contracts,
		sum(CASE WHEN buyer != seller THEN size ELSE 0 END * price) AS volume,
		sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume_contracts,
		sum(CASE WHEN buyer = seller THEN size ELSE 0 END * price) AS self_volume,
		sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
		sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
		sum(buyer_fee_maker) as buyer_fee_maker,
		sum(buyer_fee_liquidity) as buyer_fee_liquidity,
		sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
		sum(seller_fee_infrastructure) as seller_fee_infrastructure,
		sum(seller_fee_maker) as seller_fee_maker,
		sum(seller_fee_liquidity) as seller_fee_liquidity,
		max(timestamp) as timestamp
	FROM trades
	GROUP BY market_id, buyer, seller, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('party_data_5m',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW party_data_1h
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(3600000000000, synth_timestamp) AS bucket,
		buyer AS buyer,
		seller AS seller,
		count(buyer) FILTER (WHERE buyer != seller) AS num_trades,
		count(buyer) FILTER (WHERE buyer = seller) AS num_self_trades,
		sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume_contracts,
		sum(CASE WHEN buyer != seller THEN size ELSE 0 END * price) AS volume,
		sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume_contracts,
		sum(CASE WHEN buyer = seller THEN size ELSE 0 END * price) AS self_volume,
		sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
		sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
		sum(buyer_fee_maker) as buyer_fee_maker,
		sum(buyer_fee_liquidity) as buyer_fee_liquidity,
		sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
		sum(seller_fee_infrastructure) as seller_fee_infrastructure,
		sum(seller_fee_maker) as seller_fee_maker,
		sum(seller_fee_liquidity) as seller_fee_liquidity,
		max(timestamp) as timestamp
	FROM trades
	GROUP BY market_id, buyer, seller, time_bucket(3600000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('party_data_1h',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW party_data_1d
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(86400000000000, synth_timestamp) AS bucket,
		buyer AS buyer,
		seller AS seller,
		count(buyer) FILTER (WHERE buyer != seller) AS num_trades,
		count(buyer) FILTER (WHERE buyer = seller) AS num_self_trades,
		sum(CASE WHEN buyer != seller THEN size ELSE 0 END) AS volume_contracts,
		sum(CASE WHEN buyer != seller THEN size ELSE 0 END * price) AS volume,
		sum(CASE WHEN buyer = seller THEN size ELSE 0 END) AS self_volume_contracts,
		sum(CASE WHEN buyer = seller THEN size ELSE 0 END * price) AS self_volume,
		sum(buyer_fee_infrastructure + buyer_fee_maker + buyer_fee_liquidity) AS buyer_fee,
		sum(buyer_fee_infrastructure) as buyer_fee_infrastructure,
		sum(buyer_fee_maker) as buyer_fee_maker,
		sum(buyer_fee_liquidity) as buyer_fee_liquidity,
		sum(seller_fee_infrastructure + seller_fee_maker + seller_fee_liquidity) AS seller_fee,
		sum(seller_fee_infrastructure) as seller_fee_infrastructure,
		sum(seller_fee_maker) as seller_fee_maker,
		sum(seller_fee_liquidity) as seller_fee_liquidity,
		max(timestamp) as timestamp
	FROM trades
	GROUP BY market_id, buyer, seller, time_bucket(86400000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('party_data_1d',
	start_offset => 2592000000000000,
	end_offset => 60000000000,
	schedule_interval => INTERVAL '1 minute');


	`
	pgQueryString_CreateContinuousAggregates_Orders = `

	`
	pgQueryString_CreateContinuousAggregates_Assets = `

	`
	pgQueryString_CreateContinuousAggregates_Markets = `
	
	`
	pgQueryString_CreateContinuousAggregates_MarketData = `
	
	CREATE MATERIALIZED VIEW open_interest_5m
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(300000000000, timestamp) AS bucket,
		first(open_interest, timestamp) AS first,
		first(timestamp, timestamp) AS first_ts,
		last(open_interest, timestamp) AS last,
		last(last_traded_price, timestamp) AS last_traded_price,
		last(timestamp, timestamp) AS last_ts,
		max(open_interest) AS high,
		min(open_interest) AS low,
		last(open_interest, timestamp) - first(open_interest, timestamp) AS diff
	FROM market_data_updates
	GROUP BY market_id, time_bucket(300000000000, timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('open_interest_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW open_interest_1h
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(3600000000000, timestamp) AS bucket,
		first(open_interest, timestamp) AS first,
		first(timestamp, timestamp) AS first_ts,
		last(open_interest, timestamp) AS last,
		last(last_traded_price, timestamp) AS last_traded_price,
		last(timestamp, timestamp) AS last_ts,
		max(open_interest) AS high,
		min(open_interest) AS low,
		last(open_interest, timestamp) - first(open_interest, timestamp) AS diff
	FROM market_data_updates
	GROUP BY market_id, time_bucket(3600000000000, timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('open_interest_1h',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW open_interest_1d
	WITH (timescaledb.continuous) AS
	SELECT market_id,
		time_bucket(86400000000000, timestamp) AS bucket,
		first(open_interest, timestamp) AS first,
		first(timestamp, timestamp) AS first_ts,
		last(open_interest, timestamp) AS last,
		last(last_traded_price, timestamp) AS last_traded_price,
		last(timestamp, timestamp) AS last_ts,
		max(open_interest) AS high,
		min(open_interest) AS low,
		last(open_interest, timestamp) - first(open_interest, timestamp) AS diff
	FROM market_data_updates
	GROUP BY market_id, time_bucket(86400000000000, timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('open_interest_1d',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');

		
	`
	pgQueryString_CreateContinuousAggregates_LedgerMovements = `

	CREATE MATERIALIZED VIEW pnl_deltas_5m
	WITH (timescaledb.continuous) AS
	SELECT
		to_account_market as market_id,
		time_bucket(300000000000, synth_timestamp) as bucket,
		CASE
			WHEN type = 'TRANSFER_TYPE_MTM_LOSS' THEN from_account_owner
			WHEN type = 'TRANSFER_TYPE_MTM_WIN' THEN to_account_owner
			WHEN type = 'TRANSFER_TYPE_LOSS' THEN from_account_owner
			WHEN type = 'TRANSFER_TYPE_WIN' THEN to_account_owner
		END as party_id,
		(sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_LOSS')) as unrealized_delta,
		(sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_LOSS')) as realized_delta,
		last(timestamp, timestamp) as last_timestamp
	FROM ledger_movements
	GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('pnl_deltas_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');


	CREATE MATERIALIZED VIEW pnl_deltas_1h
	WITH (timescaledb.continuous) AS
	SELECT
		to_account_market as market_id,
		time_bucket(3600000000000, synth_timestamp) as bucket,
		CASE
			WHEN type = 'TRANSFER_TYPE_MTM_LOSS' THEN from_account_owner
			WHEN type = 'TRANSFER_TYPE_MTM_WIN' THEN to_account_owner
			WHEN type = 'TRANSFER_TYPE_LOSS' THEN from_account_owner
			WHEN type = 'TRANSFER_TYPE_WIN' THEN to_account_owner
		END as party_id,
		(sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_LOSS')) as unrealized_delta,
		(sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_LOSS')) as realized_delta,
		last(timestamp, timestamp) as last_timestamp
	FROM ledger_movements
	GROUP BY market_id, party_id, time_bucket(3600000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('pnl_deltas_1h',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW deposits_withdrawals_5m
	with (timescaledb.continuous) AS
	SELECT
		time_bucket(300000000000, synth_timestamp) as bucket,
		max(timestamp) AS timestamp,
		type,
		to_account_owner AS to_account,
		to_account_asset AS asset,
		from_account_owner AS from_account,
		amount
	FROM ledger_movements
	WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW'
	GROUP BY asset, to_account, from_account, type, amount, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('deposits_withdrawals_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW bridge_diffs_5m
	with (timescaledb.continuous) AS
	SELECT
		time_bucket(300000000000, synth_timestamp) as bucket,
		max(timestamp) AS timestamp,
		CASE
			WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_owner
			WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_owner
		END AS party_id,
		CASE
			WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_asset
			WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_asset
			WHEN type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' THEN to_account_asset
		END AS asset,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
				ELSE 0
			END) AS deposits,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN amount
				ELSE 0
			END) AS withdrawals,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
				WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN -amount
				ELSE 0
			END) AS diff,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' THEN amount
				ELSE 0
			END) AS restored
	FROM ledger_movements
	WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW' OR type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE'
	GROUP BY asset, party_id, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('bridge_diffs_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	CREATE MATERIALIZED VIEW bridge_diffs_1h
	with (timescaledb.continuous) AS
	SELECT
		time_bucket(3600000000000, synth_timestamp) as bucket,
		max(timestamp) AS timestamp,
		CASE
			WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_owner
			WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_owner
		END AS party_id,
		CASE
			WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_asset
			WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_asset
			WHEN type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' THEN to_account_asset
		END AS asset,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
				ELSE 0
			END) AS deposits,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN amount
				ELSE 0
			END) AS withdrawals,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
				WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN -amount
				ELSE 0
			END) AS diff,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' THEN amount
				ELSE 0
			END) AS restored
	FROM ledger_movements
	WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW' OR type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE'
	GROUP BY asset, party_id, time_bucket(3600000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('bridge_diffs_1h',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW bridge_diffs_1d
	with (timescaledb.continuous) AS
	SELECT
		time_bucket(86400000000000, synth_timestamp) as bucket,
		max(timestamp) AS timestamp,
		CASE
			WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_owner
			WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_owner
		END AS party_id,
		CASE
			WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_asset
			WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_asset
			WHEN type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' THEN to_account_asset
		END AS asset,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
				ELSE 0
			END) AS deposits,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN amount
				ELSE 0
			END) AS withdrawals,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
				WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN -amount
				ELSE 0
			END) AS diff,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE' THEN amount
				ELSE 0
			END) AS restored
	FROM ledger_movements
	WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW' OR type = 'TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE'
	GROUP BY asset, party_id, time_bucket(86400000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('bridge_diffs_1d',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	CREATE MATERIALIZED VIEW infra_fees_by_asset_5m
	WITH (timescaledb.continuous) AS
	SELECT
		time_bucket(300000000000, synth_timestamp) as bucket,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY' THEN amount ELSE 0
			END) as amount_paid,
		from_account_asset as asset
	FROM ledger_movements
	GROUP BY asset, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('infra_fees_by_asset_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');
	
	
	
	CREATE MATERIALIZED VIEW fees_earned_5m
	WITH (timescaledb.continuous) AS
	SELECT
		time_bucket(300000000000, synth_timestamp) AS bucket,
		to_account_owner AS party_id,
		last(timestamp, synth_timestamp) AS timestamp,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_MAKER_FEE_RECEIVE' THEN amount ELSE 0
			END) AS maker_fee_earned,
		sum(CASE
				WHEN type = 'TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE' THEN amount ELSE 0
			END) AS liquidity_fee_earned,
		sum(CASE
				WHEN from_account_type = 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' THEN amount ELSE 0
			END) AS infrastructure_fee_earned,
		from_account_asset AS asset
	FROM ledger_movements
	GROUP BY party_id, asset, time_bucket(300000000000, synth_timestamp)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('fees_earned_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');


	
	`

	// ---------- Unused for now, might be useful later ---------- \\

	// CREATE MATERIALIZED VIEW margin_additions_5m
	// with (timescaledb.continuous) AS
	// SELECT
	// 	to_account_market as market_id,
	// 	time_bucket(300000000000, synth_timestamp) as bucket,
	// 	sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MARGIN_LOW') as margin_added,
	// 	to_account_owner as party
	// FROM ledger_movements
	// GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp)
	// WITH NO DATA;

	// SELECT add_continuous_aggregate_policy('margin_additions_5m',
	// start_offset => '2592000000000000'::bigint,
	// end_offset => '60000000000'::bigint,
	// schedule_interval => INTERVAL '1 minute');

	// CREATE MATERIALIZED VIEW margin_deductions_5m
	// with (timescaledb.continuous) AS
	// SELECT
	// 	from_account_market as market_id,
	// 	time_bucket(300000000000, synth_timestamp) as bucket,
	// 	sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MARGIN_HIGH') as margin_deducted,
	// 	from_account_owner as party
	// FROM ledger_movements
	// GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp)
	// WITH NO DATA;

	// SELECT add_continuous_aggregate_policy('margin_deductions_5m',
	// start_offset => '2592000000000000'::bigint,
	// end_offset => '60000000000'::bigint,
	// schedule_interval => INTERVAL '1 minute');

	pgQueryString_CreateContinuousAggregates_StakeLinkings = `
	
	CREATE MATERIALIZED VIEW stake_linking_diffs_5m
	with (timescaledb.continuous) AS
	SELECT
		time_bucket('300000000000'::bigint, ts) AS bucket,
		max(ts) AS ts,
		party_id,
		eth_addr,
		sum(CASE WHEN type = 'TYPE_LINK' THEN amount END) AS staked,
		sum(CASE WHEN type = 'TYPE_UNLINK' THEN amount END) AS unstaked,
		sum(CASE
				WHEN type = 'TYPE_LINK' THEN amount
				WHEN type = 'TYPE_UNLINK' THEN -amount
			END) AS diff
	FROM stake_linkings
	WHERE status = 'STATUS_ACCEPTED'
	GROUP BY party_id, eth_addr, time_bucket('300000000000'::bigint, ts)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('stake_linking_diffs_5m',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');


	CREATE MATERIALIZED VIEW stake_linking_diffs_1h
	with (timescaledb.continuous) AS
	SELECT
		time_bucket('3600000000000'::bigint, ts) AS bucket,
		max(ts) AS ts,
		party_id,
		eth_addr,
		sum(CASE WHEN type = 'TYPE_LINK' THEN amount END) AS staked,
		sum(CASE WHEN type = 'TYPE_UNLINK' THEN amount END) AS unstaked,
		sum(CASE
				WHEN type = 'TYPE_LINK' THEN amount
				WHEN type = 'TYPE_UNLINK' THEN -amount
			END) AS diff
	FROM stake_linkings
	WHERE status = 'STATUS_ACCEPTED'
	GROUP BY party_id, eth_addr, time_bucket('3600000000000'::bigint, ts)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('stake_linking_diffs_1h',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');


	CREATE MATERIALIZED VIEW stake_linking_diffs_1d
	with (timescaledb.continuous) AS
	SELECT
		time_bucket('86400000000000'::bigint, ts) AS bucket,
		max(ts) AS ts,
		party_id,
		eth_addr,
		sum(CASE WHEN type = 'TYPE_LINK' THEN amount END) AS staked,
		sum(CASE WHEN type = 'TYPE_UNLINK' THEN amount END) AS unstaked,
		sum(CASE
				WHEN type = 'TYPE_LINK' THEN amount
				WHEN type = 'TYPE_UNLINK' THEN -amount
			END) AS diff
	FROM stake_linkings
	WHERE status = 'STATUS_ACCEPTED'
	GROUP BY party_id, eth_addr, time_bucket('86400000000000'::bigint, ts)
	WITH NO DATA;
	
	SELECT add_continuous_aggregate_policy('stake_linking_diffs_1d',
	start_offset => '2592000000000000'::bigint,
	end_offset => '60000000000'::bigint,
	schedule_interval => INTERVAL '1 minute');

	`
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
