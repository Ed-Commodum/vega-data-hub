// const { enums, typeMappings } = require('../../types/enums.js');
const { enums, typeMappings } = require('./enums.js');
const format = require('pg-format');

const payloadMetadataNames = {
    volume: {
        total: ['market_id', 'party_id'],
        historical: ['market_id', 'party_id', 'interval'],
        rolling: ['market_id', 'interval']
    },
    assetVolume: {
        total: ['asset_id'],
        historical: ['asset_id', 'interval'],
        rolling: ['asset_id', 'interval']
    },
    openInterest: {
        total: ['market_id'],
        historical: ['market_id', 'interval'],
        rolling: ['market_id', 'interval']
    },
    volatilty: {
        total: ['market_id'], // No interval required (use 1d). No windowSize required (use all price history)
        historical: ['market_id', 'interval', 'window_size'],
        rolling: ['market_id', 'interval', 'window_size']
    },
    tradeCount: {

    },
    averageTradeSize: {

    },

};

const rawDataTableMap = {
    'taker_data': 'trades',
    'market_data': 'trades',
    'party_data': 'trades',
    'candles': 'trades',
    'stake_linking_diffs': 'stake_linkings',
    'open_interest': 'market_data_updates',
    'fees_earned': 'ledger_movements',
    'fees_paid': 'ledger_movements',
    'bridge_diffs': 'ledger_movements',
    'infra_fees_by_asset': 'ledger_movements',
    'pnl_deltas': 'ledger_movements'
};

const processInterval = (interval, ...tables) => {

    // Return values: intervalSize, ...tables
    const returnTables = [];

    interval = enums.timeInterval[interval];
    let intervalSize;

    for (let tablePrefix of tables) {

        const rawDataTable = rawDataTableMap[tablePrefix];
        if (!rawDataTable) throw new Error(`No raw data table found for tablePrefix: ${tablePrefix}`);

        switch (interval) {
            case (enums.timeInterval.INTERVAL_1M):
            case (enums.timeInterval.INTERVAL_ROLLING_1M): {
                if (rawDataTable != 'orders') throw new Error(`This time interval can only be used with orders and their aggregates.`);
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]);
                break;
            }
            case (enums.timeInterval.INTERVAL_5M):
            case (enums.timeInterval.INTERVAL_ROLLING_5M): {
                console.log("Triggered 5m case");
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]);            
                break;

                // if (rawDataTable == 'orders') {
                //     returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]);    
                // } else {
                //     returnTables.push(rawDataTable;
                // };
            }
            case (enums.timeInterval.INTERVAL_15M):
            case (enums.timeInterval.INTERVAL_ROLLING_15M): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_30M):
            case (enums.timeInterval.INTERVAL_ROLLING_30M): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_1H):
            case (enums.timeInterval.INTERVAL_ROLLING_1H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_2H):
            case (enums.timeInterval.INTERVAL_ROLLING_2H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_4H):
            case (enums.timeInterval.INTERVAL_ROLLING_4H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_6H):
            case (enums.timeInterval.INTERVAL_ROLLING_6H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_12H):
            case (enums.timeInterval.INTERVAL_ROLLING_12H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_1D):
            case (enums.timeInterval.INTERVAL_ROLLING_1D): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_3D):
            case (enums.timeInterval.INTERVAL_ROLLING_3D): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_1W):
            case (enums.timeInterval.INTERVAL_ROLLING_1W): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]); 
                break;
            }
            case (enums.timeInterval.INTERVAL_1MO):
            case (enums.timeInterval.INTERVAL_ROLLING_1MO): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                returnTables.push(tablePrefix + typeMappings.timeInterval.queryTableSuffix[interval]);
                break;
            }
        }
    }

    return [ intervalSize, ...returnTables ];
};

const payloadParsers = {
    volume: {
        total: (payload) => {
            const marketId = payload.marketId; // Optional
            const partyId = payload.partyId; // Optional

            switch (true) {
                case (marketId != undefined && partyId != undefined): {

                    const query = `
                    SELECT
                        sum(volume) + sum(self_volume) AS volume,
                        max(timestamp) AS timestamp
                    FROM party_data_1d x LEFT JOIN markets y ON x.market_id = y.id
                    WHERE (y.state = 'STATE_ACTIVE' OR y.state = 'STATE_SUSPENDED')
                    AND (buyer = $1 OR seller = $1)
                    AND market_id = $2;
                    `;

                    const params = [ partyId, marketId ];

                    return [ query, params ];
                }
                case (marketId != undefined && partyId == undefined): {
                    
                    const query = `
                    SELECT
                        sum(volume) AS volume,
                        max(timestamp) AS timestamp
                    FROM market_data_1d
                    WHERE market_id = $1;
                    `;

                    const params = [ marketId ];

                    return [ query, params ];
                }
                case (marketId == undefined && partyId != undefined): {
                    const query = `
                    SELECT
                        market_id,
                        sum(volume) + sum(self_volume) AS volume,
                        max(timestamp) AS timestamp
                    FROM party_data_1d x LEFT JOIN markets y ON x.market_id = y.id
                    WHERE (y.state = 'STATE_ACTIVE' OR y.state = 'STATE_SUSPENDED')
                    AND (buyer = $1 OR seller = $1)
                    GROUP BY market_id;
                    `;

                    const params = [ partyId ];

                    return [ query, params ];
                }
                case (marketId == undefined && partyId == undefined): {
                    const query = `
                    SELECT
                        market_id,
                        sum(volume) AS volume,
                        max(timestamp) AS timestamp
                    FROM market_data_1d x LEFT JOIN markets y ON x.market_id = y.id
                    WHERE (y.state = 'STATE_ACTIVE' OR y.state = 'STATE_SUSPENDED')
                    GROUP BY market_id;
                    `;

                    const params = [];

                    return [ query, params ];
                }
            }
        },
        historical: (payload) => {
            // Historical will work in a similar manner to rolling, except that the time intervals will
            // be fixed relative to the epoch instead of on a rolling basis.
            // (eg; every daily interval starts at the start of the day)

            const marketId = payload.marketId;
            const partyId = payload.partyId;
            const interval = payload.interval;

            const validIntervals = [
                "INTERVAL_1M", "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M",
                "INTERVAL_1H", "INTERVAL_2H", "INTERVAL_4H", "INTERVAL_6H",
                "INTERVAL_12H", "INTERVAL_1D", "INTERVAL_3D", "INTERVAL_1W",
                "INTERVAL_1MO"
            ];

            if (!validIntervals.includes(interval)) throw new Error("Invalid interval provided in payload.");

            const partyTablePrefix = 'party_data';
            const marketTablePrefix = 'market_data';

            let marketTable, partyTable, intervalSize;
            [ intervalSize, marketTable, partyTable ] = processInterval(interval, marketTablePrefix, partyTablePrefix);

            switch (true) {
                case (marketId != undefined && partyId != undefined): {
                    const fQuery = `
                    WITH base AS (
                        SELECT
                            time_bucket($3::bigint, current_time_ns()) AS bucket,
                            x.market_id,
                            x.party_id
                        FROM ( VALUES ( $1, $2 ) ) AS x(market_id, party_id)
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last(timestamp, timestamp) AS timestamp,
                            sum(volume) AS volume,
                            sum(self_volume) AS self_volume
                        FROM party_data_5m
                        WHERE market_id = $1
                        AND (buyer = $2 or seller = $2)
                        AND bucket >= (select timestamp from trades where market_id = $1 order by synth_timestamp desc limit 1) - $3::bigint
                        GROUP BY bucket, market_id
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = $1
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = $1
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        base.party_id,
                        recent.timestamp as timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        CASE WHEN recent.bucket < base.bucket - $3::bigint
                            THEN 0
                            ELSE recent.volume + recent.self_volume
                        END AS volume,
                        CASE WHEN recent.bucket < base.bucket - $3::bigint
                            THEN 0
                            ELSE (recent.volume + recent.self_volume) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    `; 

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            x.market_id,
                            x.party_id
                        FROM ( VALUES ( '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5',
                                        '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' )
                            ) AS x(market_id, party_id)
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last(timestamp, timestamp) AS timestamp,
                            sum(volume) AS volume,
                            sum(self_volume) AS self_volume
                        FROM party_data_5m
                        WHERE market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        AND (buyer = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' or seller = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679')
                        AND bucket >= (select timestamp from trades where market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5' order by synth_timestamp desc limit 1) - 300000000000
                        GROUP BY bucket, market_id
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        base.party_id,
                        recent.timestamp as timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        CASE WHEN recent.bucket < base.bucket - 300000000000::bigint
                            THEN 0
                            ELSE recent.volume + recent.self_volume
                        END AS volume,
                        CASE WHEN recent.bucket < base.bucket - 300000000000::bigint
                            THEN 0
                            ELSE (recent.volume + recent.self_volume) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    */

                    const query = format(fQuery, partyTable);

                    const params = [ marketId, partyId, intervalSize ];
                    
                    return [ query, params ];
                }
                case (marketId != undefined && partyId == undefined): {
                    const fQuery = `
                    WITH base AS (
                        SELECT
                            time_bucket($2::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = $1
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last(timestamp, timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_5m
                        WHERE market_id = $1
                        AND bucket >= (select timestamp from trades where market_id = $1 order by synth_timestamp desc limit 1) - $2::bigint
                        GROUP BY bucket, market_id
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = $1
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = $1
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        recent.timestamp as timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        CASE WHEN recent.bucket < base.bucket - $2::bigint
                            THEN 0
                            ELSE recent.volume
                        END AS volume,
                        CASE WHEN recent.bucket < base.bucket - $2::bigint
                            THEN 0
                            ELSE recent.volume / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    `; 

                    // AND (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last(timestamp, timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_5m
                        WHERE market_id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                        AND bucket >= (select timestamp from trades where market_id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604' order by synth_timestamp desc limit 1) - 300000000000
                        GROUP BY bucket, market_id
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        recent.timestamp as timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        CASE WHEN recent.bucket < base.bucket - 300000000000
                            THEN 0
                            ELSE recent.volume
                        END AS volume,
                        CASE WHEN recent.bucket < base.bucket - 300000000000
                            THEN 0
                            ELSE recent.volume / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    */

                    const query = format(fQuery, marketTable);

                    const params = [ marketId, intervalSize ];
                    
                    return [ query, params ];
                }
                case (marketId == undefined && partyId != undefined): {
                    const fQuery = `
                    WITH base AS (
                        SELECT
                            time_bucket($2::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            y.party_id AS party_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets x CROSS JOIN ( VALUES ( $1 ) ) AS y( party_id )
                        WHERE (x.state = 'STATE_ACTIVE' OR x.state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(timestamp, timestamp) AS timestamp,
                                sum(volume) AS volume,
                                sum(self_volume) AS self_volume
                            FROM %I y
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - $2::bigint
                            AND y.market_id = x.market_id
                            AND (buyer = $1 OR seller = $1)
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        base.party_id,
                        CASE WHEN recent.timestamp IS NULL THEN 0 ELSE recent.timestamp END AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        CASE 
                            WHEN recent.bucket < base.bucket - $2::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE (recent.volume + recent.self_volume)
                        END AS volume,
                        CASE
                            WHEN recent.bucket < base.bucket - $2::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE (recent.volume + recent.self_volume) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN markets ON base.market_id = markets.id
                    LEFT JOIN d ON base.market_id = d.id
                    ORDER BY base.market_id ASC;
                    `;

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            y.party_id AS party_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets x CROSS JOIN ( VALUES ( '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' ) ) AS y( party_id )
                        WHERE (x.state = 'STATE_ACTIVE' OR x.state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(timestamp, timestamp) AS timestamp,
                                sum(volume) AS volume,
                                sum(self_volume) AS self_volume
                            FROM party_data_5m y
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - 300000000000::bigint
                            AND y.market_id = x.market_id
                            AND (buyer = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' OR seller = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679')
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        base.party_id,
                        CASE WHEN recent.timestamp IS NULL THEN 0 ELSE recent.timestamp END AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        CASE 
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE (recent.volume + recent.self_volume)
                        END AS volume,
                        CASE
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE (recent.volume + recent.self_volume) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN markets ON base.market_id = markets.id
                    LEFT JOIN d ON base.market_id = d.id
                    ORDER BY base.market_id ASC;
                    */

                    const query = format(fQuery, partyTable);

                    const params = [ partyId, intervalSize ];
                    
                    return [ query, params ];
                }
                case (marketId == undefined && partyId == undefined): {
                    const fQuery = `
                    WITH base AS (
                        SELECT
                            time_bucket($1::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(timestamp, timestamp) AS timestamp,
                                sum(volume) AS volume
                            FROM %I y
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - $1::bigint
                            AND y.market_id = x.market_id
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        CASE WHEN recent.timestamp IS NULL THEN 0 ELSE recent.timestamp END AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        CASE 
                            WHEN recent.bucket < base.bucket - $1::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE recent.volume
                        END AS volume,
                        CASE
                            WHEN recent.bucket < base.bucket - $1::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE recent.volume / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN markets ON base.market_id = markets.id
                    LEFT JOIN d ON base.market_id = d.id
                    ORDER BY base.market_id ASC;
                    `; 

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(timestamp, timestamp) AS timestamp,
                                sum(volume) AS volume,
                                sum(self_volume) AS self_volume
                            FROM party_data_5m y
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - 300000000000::bigint
                            AND y.market_id = x.market_id
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        CASE WHEN recent.timestamp IS NULL THEN 0 ELSE recent.timestamp END AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        CASE 
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE recent.volume
                        END AS volume,
                        CASE
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE recent.volume / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN markets ON base.market_id = markets.id
                    LEFT JOIN d ON base.market_id = d.id;
                    */

                    const query = format(fQuery, marketTable);

                    const params = [ intervalSize ];
                    
                    return [ query, params ];
                }
            }

        },
        rolling: (payload) => {

            // Consider adding rolling volume queries for parties as well. (Will anyone even use it???)

            const validIntervals = [
                "INTERVAL_ROLLING_1M", "INTERVAL_ROLLING_5M", "INTERVAL_ROLLING_15M", "INTERVAL_ROLLING_30M",
                "INTERVAL_ROLLING_1H", "INTERVAL_ROLLING_2H", "INTERVAL_ROLLING_4H", "INTERVAL_ROLLING_6H",
                "INTERVAL_ROLLING_12H", "INTERVAL_ROLLING_1D", "INTERVAL_ROLLING_3D", "INTERVAL_ROLLING_1W",
                "INTERVAL_ROLLING_1MO"
            ];

            const marketId = payload.marketId;
            const interval = payload.interval;
            if (!validIntervals.includes(interval)) throw new Error("Invalid interval prvided in payload.");

            const matViewTable = 'market_data';

            const [ intervalSize, table ] = processInterval(interval, matViewTable);

            switch (true) {
                case (marketId != undefined): {
                    const fQuery = `
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), last_bucket as (
                        SELECT 
                            bucket
                        FROM %I, ts
                        WHERE bucket > ts.now - $2::bigint
                        AND market_id = $1
                        ORDER BY bucket ASC LIMIT 1
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM %I x, ts
                        WHERE bucket::bigint > (ts.now - $2::bigint)
                        AND market_id = $1
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts, last_bucket 
                        WHERE trades.timestamp < CASE WHEN last_bucket.bucket IS NULL THEN ts.now ELSE last_bucket.bucket END
                        AND trades.timestamp >= (ts.now - $2::bigint)
                        AND market_id = $1
                        GROUP BY trades.market_id
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = $1
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = $1
                        AND (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    )
                    SELECT
                        market.id AS market_id,
                        main.timestamp,
                        CASE WHEN main.volume IS NOT NULL THEN main.volume ELSE 0 END + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END AS volume,
                        market.quote_name,
                        (CASE WHEN main.volume IS NOT NULL THEN main.volume ELSE 0 END + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places) AS volume_quote
                    FROM market LEFT JOIN main ON market.id = main.market_id
                    LEFT JOIN missed ON market.id = missed.market_id
                    LEFT JOIN d ON market.id = d.id;
                    `;

                    /*
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), last_bucket as (
                        SELECT 
                            bucket
                        FROM market_data_1h, ts
                        WHERE bucket > ts.now - 86400000000000::bigint
                        AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        ORDER BY bucket ASC LIMIT 1
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_1h x, ts
                        WHERE bucket::bigint > (ts.now - 86400000000000::bigint)
                        AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts, last_bucket 
                        WHERE trades.timestamp < CASE WHEN last_bucket.bucket IS NULL THEN current_time_ns() ELSE last_bucket.bucket END
                        AND trades.timestamp >= (ts.now - 86400000000000::bigint)
                        AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        GROUP BY trades.market_id
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        AND (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    )
                    SELECT
                        market.id,
                        main.timestamp,
                        CASE WHEN main.volume IS NOT NULL THEN main.volume ELSE 0 END + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END AS volume,
                        market.quote_name AS quote_name,
                        (CASE WHEN main.volume IS NOT NULL THEN main.volume ELSE 0 END + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places) AS volume_quote
                    FROM market LEFT JOIN main ON market.id = main.market_id
                    LEFT JOIN missed ON market.id = missed.market_id
                    LEFT JOIN d ON market.id = d.id;
                    */

                    const query = format(fQuery, table, table);

                    const params = [ marketId, intervalSize ];

                    return [ query, params ];
                }
                case (marketId == undefined): {
                    const fQuery = `
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), last_buckets as (
                        SELECT
                            market_id,
                            first(bucket, bucket) AS bucket
                        FROM %I, ts
                        WHERE bucket > ts.now - $1::bigint
                        GROUP BY market_id
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM %I x, ts
                        WHERE bucket::bigint > (ts.now - $1::bigint)
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            y.market_id,
                            sum(size * price) AS volume
                        FROM last_buckets x LEFT JOIN trades y on x.market_id = y.market_id, ts 
                        WHERE y.timestamp < CASE WHEN x.bucket IS NULL THEN ts.now ELSE x.bucket END
                        AND y.timestamp >= (ts.now - $1::bigint)
                        GROUP BY y.market_id
                    )
                    SELECT
                        markets.id AS market_id,
                        max(main.timestamp),
                        sum(CASE WHEN main.volume IS NOT NULL THEN main.volume ELSE 0 END + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) AS volume,
                        markets.quote_name,
                        sum((CASE WHEN main.volume IS NOT NULL THEN main.volume ELSE 0 END + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places)) AS volume_quote
                    FROM markets LEFT JOIN main ON markets.id = main.market_id
                    LEFT JOIN missed ON markets.id = missed.market_id
                    LEFT JOIN d ON markets.id = d.id
                    GROUP BY markets.id, markets.quote_name;
                    `;

                    /* `
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_1h x, ts
                        WHERE bucket::bigint > (ts.now - 86400000000000::bigint)
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts 
                        WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.now - 86400000000000::bigint ORDER BY bucket ASC LIMIT 1)
                        AND trades.timestamp >= (ts.now - 86400000000000::bigint)
                        GROUP BY trades.market_id
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        GROUP BY id
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        GROUP BY id
                    )
                    SELECT
                        main.market_id,
                        max(main.timestamp) AS timestamp,
                        sum(main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) AS volume,
                        markets.quote_name,
                        sum((main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places)) AS volume_quote
                    FROM main LEFT JOIN missed on main.market_id = missed.market_id 
                    LEFT JOIN markets ON main.market_id = markets.id
                    LEFT JOIN d ON main.market_id = d.id
                    GROUP BY main.market_id, markets.quote_name;
                    ` */

                    console.log(table);

                    const query = format(fQuery, table, table);

                    const params = [ intervalSize ];

                    return [ query, params ];
                }
            }
        },
        replay: (payload) => {

            const marketId = payload.marketId;
            const partyId = payload.partyId;
            const interval = payload.interval;
            const startTimestamp = payload.startTimestamp;
            const endTimestamp = payload.endTimestamp;

            const validIntervals = [
                "INTERVAL_1M", "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M",
                "INTERVAL_1H", "INTERVAL_2H", "INTERVAL_4H", "INTERVAL_6H",
                "INTERVAL_12H", "INTERVAL_1D", "INTERVAL_3D", "INTERVAL_1W",
                "INTERVAL_1MO"
            ];

            if (!validIntervals.includes(interval)) throw new Error("Invalid interval provided in payload.");

            const partyTablePrefix = 'party_data';
            const marketTablePrefix = 'market_data';

            let marketTable, partyTable, intervalSize;
            [ intervalSize, marketTable, partyTable ] = processInterval(interval, marketTablePrefix, partyTablePrefix);

            // Queries will be for chunks/batches of data and will be run multiple times until the entire requested
            // time window has been retrieved.
            switch (true) {
                case (marketId != undefined && partyId != undefined): {
                    const fQuery = `
                    
                    `; 

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            x.market_id,
                            x.party_id
                        FROM ( VALUES ( '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5',
                                        '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' )
                            ) AS x(market_id, party_id)
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last(timestamp, timestamp) AS timestamp,
                            sum(volume) AS volume,
                            sum(self_volume) AS self_volume
                        FROM party_data_5m
                        WHERE market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        AND (buyer = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' or seller = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679')
                        AND bucket >= (select timestamp from trades where market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5' order by synth_timestamp desc limit 1) - 300000000000
                        GROUP BY bucket, market_id
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        base.party_id,
                        recent.timestamp as timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        CASE WHEN recent.bucket < base.bucket - 300000000000::bigint
                            THEN 0
                            ELSE recent.volume + recent.self_volume
                        END AS volume,
                        CASE WHEN recent.bucket < base.bucket - 300000000000::bigint
                            THEN 0
                            ELSE (recent.volume + recent.self_volume) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    */

                    const query = format(fQuery, partyTable);

                    const params = [ marketId, partyId, intervalSize ];
                    
                    return [ query, params ];
                }
                case (marketId != undefined && partyId == undefined): {
                    const fQuery = `
                    
                    `; 

                    // AND (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last(timestamp, timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_5m
                        WHERE market_id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                        AND bucket >= (select timestamp from trades where market_id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604' order by synth_timestamp desc limit 1) - 300000000000
                        GROUP BY bucket, market_id
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '5b05109662e7434fea498c4a1c91d3179b80e9b8950d6106cec60e1f342fc604'
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        recent.timestamp as timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        CASE WHEN recent.bucket < base.bucket - 300000000000
                            THEN 0
                            ELSE recent.volume
                        END AS volume,
                        CASE WHEN recent.bucket < base.bucket - 300000000000
                            THEN 0
                            ELSE recent.volume / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    */

                    const query = format(fQuery, marketTable);

                    const params = [ marketId, intervalSize ];
                    
                    return [ query, params ];
                }
                case (marketId == undefined && partyId != undefined): {
                    const fQuery = `

                    `;

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            y.party_id AS party_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets x CROSS JOIN ( VALUES ( '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' ) ) AS y( party_id )
                        WHERE (x.state = 'STATE_ACTIVE' OR x.state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(timestamp, timestamp) AS timestamp,
                                sum(volume) AS volume,
                                sum(self_volume) AS self_volume
                            FROM party_data_5m y
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - 300000000000::bigint
                            AND y.market_id = x.market_id
                            AND (buyer = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679' OR seller = '947a700141e3d175304ee176d0beecf9ee9f462e09330e33c386952caf21f679')
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        base.party_id,
                        CASE WHEN recent.timestamp IS NULL THEN 0 ELSE recent.timestamp END AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        CASE 
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE (recent.volume + recent.self_volume)
                        END AS volume,
                        CASE
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE (recent.volume + recent.self_volume) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN markets ON base.market_id = markets.id
                    LEFT JOIN d ON base.market_id = d.id
                    ORDER BY base.market_id ASC;
                    */

                    const query = format(fQuery, partyTable);

                    const params = [ partyId, intervalSize ];
                    
                    return [ query, params ];
                }
                case (marketId == undefined && partyId == undefined): {
                    const fQuery = `

                    `; 

                    /*
                    WITH base AS (
                        SELECT
                            time_bucket(300000000000::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(timestamp, timestamp) AS timestamp,
                                sum(volume) AS volume,
                                sum(self_volume) AS self_volume
                            FROM party_data_5m y
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - 300000000000::bigint
                            AND y.market_id = x.market_id
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                    )
                    SELECT
                        base.bucket AS bucket,
                        base.market_id,
                        CASE WHEN recent.timestamp IS NULL THEN 0 ELSE recent.timestamp END AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        CASE 
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE recent.volume
                        END AS volume,
                        CASE
                            WHEN recent.bucket < base.bucket - 300000000000::bigint
                                THEN 0
                            WHEN recent.bucket IS NULL
                                THEN 0
                            ELSE recent.volume / 10^(d.decimal_places + d.position_decimal_places)
                        END AS volume_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN markets ON base.market_id = markets.id
                    LEFT JOIN d ON base.market_id = d.id;
                    */

                    const query = format(fQuery, marketTable);

                    const params = [ intervalSize ];
                    
                    return [ query, params ];
                }
            }

        }
    },
    assetVolume: {
        total: (payload) => {
            const assetId = payload.assetId;
    
            switch (true) {
                case (assetId != undefined): {
                    const query = `
                    WITH vols AS (
                        SELECT
                            market_id AS market_id,
                            sum(x.volume) AS volume,
                            max(x.timestamp) AS timestamp,
                            y.future_quote_name AS quote_name
                        FROM market_data_1d x LEFT JOIN markets y ON x.market_id = y.id
                        WHERE y.future_settlement_asset = $1
                        GROUP BY market_id, y.future_quote_name
                    ), d as (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        GROUP BY id
                    ) SELECT
                        max(timestamp) as timestamp,
                        sum(volume) AS volume,
                        quote_name,
                        sum(volume / 10^(d.decimal_places + d.position_decimal_places)) AS volume_quote
                    FROM vols LEFT JOIN d on vols.market_id = d.id
                    GROUP BY quote_name;
                    `;
    
                    // USDT assetId: bf1e88d19db4b3ca0d1d5bdb73718a01686b18cf731ca26adedf3c8b83802bba

                    const params = [ assetId ];
    
                    return [ query, params ]
                }
                case (assetId = undefined): {
                    const query = `
                    WITH vols AS (
                        SELECT
                            market_id AS market_id,
                            y.future_settlement_asset AS settlement_asset,
                            y.future_quote_name AS quote_name,
                            sum(x.volume) AS volume,
                            max(x.timestamp) AS timestamp
                        FROM market_data_1d x LEFT JOIN markets y ON x.market_id = y.id
                        GROUP BY market_id, y.future_settlement_asset, y.future_quote_name
                    ), d as (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        GROUP BY id
                    ) SELECT
                        max(timestamp) AS timestamp,
                        sum(volume) AS volume,
                        vols.quote_name AS quote_name,
                        sum(volume / 10^(d.decimal_places + d.position_decimal_places)) AS volume_quote
                    FROM vols LEFT JOIN d on vols.market_id = d.id
                    GROUP BY vols.settlement_asset, vols.quote_name;
                    `;
    
                    const params = [];

                    return [ query, params ]
                }
            }
    
        },
        historical: (payload) => {

        },
        rolling: (payload) => {

        }
    },
    openInterest: {
        historical: (payload) => {        
            // Should we build it to determine OI per market or per asset or to support both?
            // const assetId = payload.assetId;
            const marketId = payload.marketId;
            const interval = payload.interval;

            const validIntervals = [
                "INTERVAL_1M", "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M",
                "INTERVAL_1H", "INTERVAL_2H", "INTERVAL_4H", "INTERVAL_6H",
                "INTERVAL_12H", "INTERVAL_1D", "INTERVAL_3D", "INTERVAL_1W",
                "INTERVAL_1MO"
            ];

            if (!validIntervals.includes(interval)) throw new Error("Invalid interval provided in payload.");
            
            const tablePrefix = 'open_interest';

            // Historical API for open_interest does not require and interval, defaults to 5
            let intervalSize, table;
            if (interval == undefined) {
                intervalSize = '300000000000';
                table = 'open_interest_5m';
            } else {
                [ intervalSize, table ] = processInterval(interval, tablePrefix);
            }

            switch (true) {
                case (marketId != undefined): {
                    const fQuery = `
                    WITH base AS (
                        SELECT
                            time_bucket($2::bigint, current_time_ns()) AS bucket,
                            x.market_id
                        FROM ( VALUES ( $1 ) ) AS x(market_id)
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last AS open_interest,
                            last_ts,
                            last_traded_price
                        FROM %I
                        WHERE market_id = $1
                        AND bucket >= (select timestamp from trades where market_id = $1 order by synth_timestamp desc limit 1) - $2::bigint
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = $1
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = $1
                    )
                    SELECT
                        base.bucket,
                        base.market_id,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        recent.last_ts AS timestamp,
                        recent.open_interest AS open_interest,
                        (recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places) AS open_interest_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    `;

                    /*
                    `
                    WITH base AS (
                        SELECT
                            time_bucket('300000000000'::bigint, current_time_ns()) AS bucket,
                            x.market_id
                        FROM ( VALUES ( '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5' ) ) AS x(market_id)
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last AS open_interest,
                            last_ts,
                            last_traded_price
                        FROM open_interest_5m
                        WHERE market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        AND bucket >= (select timestamp from trades where market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5' order by synth_timestamp desc limit 1) -'300000000000'::bigint
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    )
                    SELECT
                        base.bucket,
                        base.market_id,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        recent.last_ts AS timestamp,
                        recent.open_interest AS open_interest,
                        (recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places) AS open_interest_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN market ON base.market_id = market.id
                    LEFT JOIN d ON base.market_id = d.id;
                    `
                    */

                    const query = format(fQuery, table);

                    const params = [ marketId, intervalSize ];

                    return [ query, params ]
                }
                case (marketId == undefined): {
                    const fQuery = `
                    WITH base AS (
                        SELECT
                            time_bucket($1::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT id
                            FROM markets
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(last, bucket) AS open_interest,
                                last(last_ts, bucket) AS last_ts,
                                last(last_traded_price, bucket) AS last_traded_price
                            FROM %I y 
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - $1::bigint 
                            AND y.market_id = x.id
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    )
                    SELECT
                        base.bucket,
                        base.market_id,
                        base.settlement_asset AS settlement_asset,
                        base.quote_name AS quote_name,
                        recent.last_ts AS timestamp,
                        CASE WHEN recent.open_interest IS NULL
                            THEN 0
                            ELSE recent.open_interest
                        END AS open_interest,
                        CASE WHEN recent.open_interest IS NULL
                            THEN 0
                            ELSE (recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS open_interest_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN d ON base.market_id = d.id;
                    `;

                    /*
                    `
                    WITH base AS (
                        SELECT
                            time_bucket('300000000000'::bigint, current_time_ns()) AS bucket,
                            id AS market_id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE (state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED')
                    ), recent AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT id
                            FROM markets
                        ) x JOIN LATERAL (
                            SELECT
                                bucket,
                                market_id,
                                last(last, bucket) AS open_interest,
                                last(last_ts, bucket) AS last_ts,
                                last(last_traded_price, bucket) AS last_traded_price
                            FROM open_interest_5m y 
                            WHERE bucket >= (select timestamp from trades order by synth_timestamp desc limit 1) - '300000000000'::bigint 
                            AND y.market_id = x.id
                            GROUP BY market_id, bucket
                            ORDER BY bucket DESC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    )
                    SELECT
                        base.bucket,
                        base.market_id,
                        base.settlement_asset AS settlement_asset,
                        base.quote_name AS quote_name,
                        recent.last_ts AS timestamp,
                        CASE WHEN recent.open_interest IS NULL
                            THEN 0
                            ELSE recent.open_interest
                        END AS open_interest,
                        CASE WHEN recent.open_interest IS NULL
                            THEN 0
                            ELSE (recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)
                        END AS open_interest_quote
                    FROM base LEFT JOIN recent ON base.market_id = recent.market_id
                    LEFT JOIN d ON base.market_id = d.id;
                    `
                    */

                    const query = format(fQuery, table);

                    const params = [ intervalSize ];

                    return [ query, params ]
                }
            }
        },
        rolling: (payload) => {
            // Rolling should return the CHANGE in open interest for the market over the specified
            // time interval.

            const marketId = payload.marketId;
            const interval = payload.interval;

            const validIntervals = [
                "INTERVAL_ROLLING_1M", "INTERVAL_ROLLING_5M", "INTERVAL_ROLLING_15M", "INTERVAL_ROLLING_30M",
                "INTERVAL_ROLLING_1H", "INTERVAL_ROLLING_2H", "INTERVAL_ROLLING_4H", "INTERVAL_ROLLING_6H",
                "INTERVAL_ROLLING_12H", "INTERVAL_ROLLING_1D", "INTERVAL_ROLLING_3D", "INTERVAL_ROLLING_1W",
                "INTERVAL_ROLLING_1MO"
            ];

            if (!validIntervals.includes(interval)) throw new Error("Invalid interval prvided in payload.");

            const tablePrefix = 'open_interest';
            const [ intervalSize, table ] = processInterval(interval, tablePrefix);

            switch (true) {
                case (marketId != undefined): {
                    const fQuery = `
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last AS open_interest,
                            last_ts AS timestamp,
                            last_traded_price
                        FROM %I
                        WHERE market_id = $1
                        AND last_ts > (select timestamp from trades order by synth_timestamp desc limit 1) - $2::bigint
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), previous AS (
                        SELECT
                            market_id,
                            timestamp,
                            open_interest,
                            last_traded_price
                        FROM market_data_updates, ts
                        WHERE timestamp >= ts.now - $2::bigint
                        AND market_id = $1
                        ORDER BY timestamp ASC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = $1
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = $1
                    )
                    SELECT
                        market.id,
                        recent.timestamp AS timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        recent.open_interest - previous.open_interest AS diff,
                        ((recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)) - ((previous.open_interest * previous.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)) AS diff_quote
                    FROM market LEFT JOIN recent ON market.id = recent.market_id
                    LEFT JOIN previous ON market.id = previous.market_id
                    LEFT JOIN d ON market.id = d.id;
                    `;

                    /*
                    `
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), recent AS (
                        SELECT
                            bucket,
                            market_id,
                            last AS open_interest,
                            last_ts AS timestamp,
                            last_traded_price
                        FROM open_interest_5m
                        WHERE market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        AND last_ts > (select timestamp from trades order by synth_timestamp desc limit 1) - '86400000000000'::bigint
                        ORDER BY bucket DESC
                        LIMIT 1
                    ), previous AS (
                        SELECT
                            market_id,
                            timestamp,
                            open_interest,
                            last_traded_price
                        FROM market_data_updates, ts
                        WHERE timestamp >= ts.now - '86400000000000'::bigint
                        AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        ORDER BY timestamp ASC
                        LIMIT 1
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    ), market AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    )
                    SELECT
                        market.id,
                        recent.timestamp AS timestamp,
                        market.settlement_asset AS settlement_asset,
                        market.quote_name AS quote_name,
                        recent.open_interest - previous.open_interest AS diff,
                        ((recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)) - ((previous.open_interest * previous.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)) AS diff_quote
                    FROM market LEFT JOIN recent ON market.id = recent.market_id
                    LEFT JOIN previous ON market.id = previous.market_id
                    LEFT JOIN d ON market.id = d.id;
                    `
                    */

                    const query = format(fQuery, table);

                    const params = [ marketId, intervalSize ];

                    return [ query, params ]
                }
                case (marketId == undefined): {
                    const fQuery = `

                    `;

                    /*
                    `
                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    ), recent AS (
                        SELECT
                            last(bucket, bucket) AS bucket,
                            market_id,
                            last(last, bucket) AS open_interest,
                            last(last_ts, bucket) AS timestamp,
                            last(last_traded_price, bucket) AS last_traded_price
                        FROM open_interest_5m
                        WHERE last_ts > (select timestamp from trades order by synth_timestamp desc limit 1) - '86400000000000'::bigint
                        GROUP BY market_id
                        ORDER BY bucket DESC
                    ), previous AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM trades
                        ) x JOIN LATERAL (
                            SELECT
                                market_id,
                                timestamp,
                                open_interest,
                                last_traded_price
                            FROM market_data_updates y, ts
                            WHERE timestamp >= ts.now - '86400000000000'::bigint
                            AND y.market_id = x.market_id
                            ORDER BY timestamp ASC
                            LIMIT 1
                        ) z ON true
                    ), d AS (
                        SELECT
                            id,
                            decimal_places,
                            position_decimal_places
                        FROM markets
                    ), markets AS (
                        SELECT
                            id,
                            future_settlement_asset AS settlement_asset,
                            future_quote_name AS quote_name
                        FROM markets
                        WHERE state = 'STATE_ACTIVE' OR state = 'STATE_SUSPENDED'
                    )
                    SELECT
                        markets.id,
                        recent.timestamp AS timestamp,
                        markets.settlement_asset AS settlement_asset,
                        markets.quote_name AS quote_name,
                        recent.open_interest - previous.open_interest AS diff,
                        ((recent.open_interest * recent.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)) - ((previous.open_interest * previous.last_traded_price) / 10^(d.decimal_places + d.position_decimal_places)) AS diff_quote
                    FROM markets LEFT JOIN recent ON markets.id = recent.market_id
                    LEFT JOIN previous ON markets.id = previous.market_id
                    LEFT JOIN d ON markets.id = d.id;
                    `

                    previous AS (
                        SELECT
                            market_id,
                            first(timestamp, timestamp) AS timestamp,
                            first(open_interest, timestamp) AS open_interest,
                            first(last_traded_price, timestamp) AS last_traded_price
                        FROM market_data_updates, ts
                        WHERE timestamp >= ts.now - '86400000000000'::bigint
                        GROUP BY market_id
                        ORDER BY timestamp ASC
                    ),

                    previous AS (
                        SELECT z.*
                        FROM (
                            SELECT DISTINCT market_id
                            FROM market_data_updates
                        ) x JOIN LATERAL (
                            SELECT
                                market_id,
                                first(timestamp, timestamp) AS timestamp,
                                first(open_interest, timestamp) AS open_interest,
                                first(last_traded_price, timestamp) AS last_traded_price
                            FROM market_data_updates y, ts
                            WHERE timestamp >= ts.now - '86400000000000'::bigint
                            AND y.market_id = x.market_id
                            GROUP BY market_id
                            ORDER BY timestamp ASC
                            LIMIT 1
                        ) z ON true
                    ),


                    WITH ts AS (
                        SELECT current_time_ns() AS now
                    )
                    SELECT z.*
                    FROM (
                        SELECT DISTINCT market_id
                        FROM trades
                    ) x JOIN LATERAL (
                        SELECT
                            market_id,
                            timestamp,
                            open_interest,
                            last_traded_price
                        FROM market_data_updates y, ts
                        WHERE timestamp >= ts.now - '86400000000000'::bigint
                        AND y.market_id = x.market_id
                        ORDER BY timestamp ASC
                        LIMIT 1
                    ) z ON x.market_id = z.market_id
                    
                    
                    SELECT
                        market_id,
                        timestamp,
                        open_interest,
                        last_traded_price
                    FROM market_data_updates y, ts
                    WHERE timestamp >= ts.now - '86400000000000'::bigint
                    AND y.market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    ORDER BY timestamp ASC
                    LIMIT 1


                    */

                    const query = format(fQuery, table);

                    const params = [ intervalSize ];

                    return [ query, params ]
                }
            }
        }
    },

    volatilty: null,
    historicalVolatility: null,

    tradeCount: null,
    historicalTradeCount: null,

    averageTradeSize: null,
    historicalAverageTradeSize: null,
    rollingAverageTradeSize: null,

    feesPaid: null,
    feesEarned: null,

    takerData: null,

    liquidity: null,
    bookDepth: null,
    bookDiffs: null,

    movingAverages: null,

    vwap: null,

    twap: null,

}

const parsePayload = (payload) => {
    parsers[payload.type](payload);
};

const asyncQuery = (query, values, pgPool) => {
    return new Promise((resolve, reject) => {
        
        // console.log(query);

        if (values.length == 0) {
            
            pgPool.query(query, (err, result) => {
                if (!err) {
                    // console.log(result);
                    // console.log(result.rows);
                    resolve(result.rows);
                } else {
                    console.log(err);
                    resolve(null);
                };
            });

        } else {

            pgPool.query(query, values, (err, result) => {
                if (!err) {
                    console.log(result);
                    console.log(result.rows);
                    resolve(result.rows);
                } else {
                    console.log(err);
                    resolve(null);
                };
            });

        }

    });
};

module.exports = { asyncQuery, payloadParsers, payloadMetadataNames };