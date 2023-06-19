const format = require('pg-format');

const marketData = {
    totalTrades: 0,
    totalVolume: 0,
    totalFeesPaid: 0,
    totalInfrastructureFees: 0,
    openInterest: 0,
    return: 0, // Compute at query time
    lnReturn: 0, // Compute at query time
    variance: 0, // Compute at query time
    volatiltiy: 0, // Compute at query time
    valueAtRisk: 0, // Compute at query time
    expectedShortfall: 0, // Compute at query time
    sharpeRatio: 0, // Compute at query time
    sortinoRatio: 0, // Compute at query time
    simpleMAs: { // Compute at query time
        interval_5m: [],
        interval_1h: [],
        interval_1d: []
    },
    exponentialMAs: { // Compute at query time
        interval_5m: [],
        interval_1h: [],
        interval_1d: []
    },
};

const marketQueries = {
    checkForMarket(marketId) {
        const query = `
        SELECT count(*) FROM markets
        WHERE id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    getMarkets() {
        const query = `
        SELECT
            DISTINCT id
        FROM markets;
        `;

        return [ query, [ ] ];
    },
    getDecimals(marketId) {
        const query = `
        SELECT
            id AS market_id,
            decimal_places,
            position_decimal_places,
            future_settlement_asset,
            future_quote_name
        FROM markets
        WHERE
            id = $1 AND
            state != 'STATE_PROPOSED' AND
            state != 'STATE_REJECTED' AND
            state != 'STATE_CANCELLED';
        `;

        return [ query, [ marketId ] ];
    },
    getAllDecimals() {
        const query = `
        SELECT
            id AS market_id,
            decimal_places,
            position_decimal_places,
            future_settlement_asset,
            future_quote_name
        FROM markets
        WHERE
            state != 'STATE_PROPOSED' AND
            state != 'STATE_REJECTED' AND
            state != 'STATE_CANCELLED';
        `;

        retun [ query, [ ] ];
    },
    numTrades(marketId) {
        const query = `
        SELECT sum(num_trades) AS num_trades, max(timestamp) AS timestamp FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    totalNumTrades() {
        const query = `
        SELECT sum(num_trades) AS num_trades, max(timestamp) AS timestamp FROM market_data_5m;
        `;

        return [ query, [] ];
    },
    volume(marketId) {
        const query = `
        SELECT sum(volume) AS volume, max(timestamp) AS timestamp FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    historicalVolume(marketId, limit, bucketSize, table) {
        const fQuery = `
        SELECT
            time_bucket_gapfill($2::bigint, bucket) as bucket_gf,
            CASE WHEN timestamp IS NULL THEN '0' ELSE timestamp END AS timestamp_gf,
            CASE WHEN volume IS NULL THEN 0 ELSE volume END AS volume_gf
        FROM %I
        WHERE market_id = $1
            AND bucket > first_trade_time($1)
            AND bucket < most_recent_trade_time($1)
        ORDER BY bucket_gf
        LIMIT $3;
        `;

        const query = format(fQuery, table);

        return [ query, [ marketId, bucketSize, limit ] ];
    },
    totalVolume() {
        const query = `
        SELECT
            market_id AS market_id,
            sum(volume) AS volume,
            max(timestamp) AS timestamp
        FROM market_data_5m
        GROUP BY market_id;
        `;

        return [ query, [] ];
    },
    totalFees(marketId) {
        const query = `
        SELECT sum(fees_paid) AS total_fees,
            sum(fees_paid_infrastructure) AS infrastructure_fees
        FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    openInterest(marketId) {
        const query = `
        SELECT
            market_id,
            bucket,
            last_ts AS timestamp,
            last AS open_interest
        FROM open_interest_5m
        WHERE market_id = $1
        ORDER BY bucket DESC
        LIMIT 1;
        `;

        return [ query, [ marketId ] ];
    },
    totalOpenInterest() {
        const query = `
        SELECT
            market_id,
            last(bucket, bucket) AS bucket,
            last(last_ts, bucket) AS timestamp,
            last(last, bucket) AS open_interest
        FROM open_interest_5m
        GROUP BY market_id;
        `;

        return [ query, [] ];
    },
    feesGenerated(marketId) {
        const query = `
        SELECT
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_paid) AS maker_fees_generated,
            sum(liquidity_fee_paid) AS liquidity_fees_generated,
            sum(infrastructure_fee_paid) AS infrastructure_fees_generated
        FROM fees_paid_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ]
    },
    totalFeesGenerated() {
        const query = `
        SELECT
            market_id,
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_paid) AS maker_fees_generated,
            sum(liquidity_fee_paid) AS liquidity_fees_generated,
            sum(infrastructure_fee_paid) AS infrastructure_fees_generated
        FROM fees_paid_5m
        GROUP BY market_id;
        `;

        return [ query, [] ]
    },
    returns(marketId, interval) {

    },
    variance(marketId, interval) {

    },
    valueAtRisk(marketId, interval, confidenceInterval) {
        
        let table;
        let bucketSize;
        switch (interval) {
            case 'INTERVAL_5M':
                table = 'candles_5m';
                bucketSize = '300000000000';
                break;
            case 'INTERVAL_1H':
                table = 'candles_1h';
                bucketSize = '3600000000000';
                break;
            case 'INTERVAL_1D':
                table = 'candles_1d';
                bucketSize = '86400000000000';
                break;
        };

        const fQuery = `
        WITH gf AS (
            SELECT time_bucket_gapfill($2::bigint, bucket) AS bucket_gf,
                last(close, bucket) AS close,
                locf(last(close, bucket)) AS close_gf
            FROM %I
            WHERE bucket > first_trade_time($1) 
                AND bucket < most_recent_trade_time($1)
                AND market_id = $1
            GROUP BY bucket_gf
            ORDER BY bucket_gf DESC
        ), returns AS (
            SELECT bucket_gf,
                close,
                close_gf,
                lag(close_gf) OVER (ORDER BY bucket_gf) AS prev_close,
                (close_gf::decimal / lag(close_gf) OVER (ORDER BY bucket_gf)) - 1 AS return
            FROM gf
            ORDER BY bucket_gf DESC
        ) SELECT
            percentile_cont($3) WITHIN GROUP (ORDER BY return) AS p_cont, 
            percentile_disc($3) WITHIN GROUP (ORDER BY return) AS p_disc
        FROM returns;
        `;

        const query = format(fQuery, table);

        console.log("Args: ", [ marketId, bucketSize, (1-confidenceInterval).toFixed(2) ]);

        return [ query, [ marketId, bucketSize, (1-confidenceInterval).toFixed(2) ] ];

        `
        WITH gf AS (
            SELECT time_bucket_gapfill('3600000000000'::bigint, bucket) AS bucket_gf,
                last(close, bucket) AS close,
                locf(last(close, bucket)) AS close_gf
            FROM candles_1h
            WHERE bucket > first_trade_time('a445647e31d778777dd4e093b01210927dd951bb4f4d29d05606ca6db12a807b') 
                AND bucket < most_recent_trade_time('a445647e31d778777dd4e093b01210927dd951bb4f4d29d05606ca6db12a807b')
                AND market_id = 'a445647e31d778777dd4e093b01210927dd951bb4f4d29d05606ca6db12a807b'
            GROUP BY bucket_gf
            ORDER BY bucket_gf DESC
        ), returns AS (
            SELECT bucket_gf,
                close,
                close_gf,
                lag(close_gf) OVER (ORDER BY bucket_gf) AS prev_close,
                (close_gf::decimal / lag(close_gf) OVER (ORDER BY bucket_gf)) - 1 AS return
            FROM gf
            ORDER BY bucket_gf DESC
        ) SELECT
            percentile_cont(0.01) WITHIN GROUP (ORDER BY return) AS p01, 
            percentile_disc(0.01) WITHIN GROUP (ORDER BY return) AS p01_disc, 
            percentile_cont(0.05) WITHIN GROUP (ORDER BY return) AS p05,
            percentile_disc(0.05) WITHIN GROUP (ORDER BY return) AS p05_disc
        FROM returns;
        `

        // To calculate VaR for a position using historical simulation:
        //  - Calculate the ccReturn for each candle ( close/prevClose - 1 ) using a window function.
        //  - Select all these historical returns over the simulation period.
        //  - Sort these returns and select the correct one using percentile.
        //  - Multiply this return by (size * price) of the position to get the position VaR.

    },
    expectedShortfall(marketId, interval) {

    },
    mostRecentPrice(marketId) {
        const query = `
        SELECT
            time_bucket_gapfill('3600000000000'::bigint, bucket) AS bucket_gf,
            last(close, bucket) AS price,
            locf(last(close, bucket)) AS close_gf,
            last(last_timestamp, last_timestamp) AS timestamp,
            locf(last(last_timestamp, bucket))
        FROM candles_1h
        WHERE bucket >= most_recent_trade_time($1) - '2592000000000000'::bigint
            AND bucket < most_recent_trade_time($1)
            AND market_id = $1
        GROUP BY bucket_gf
        ORDER BY bucket_gf DESC
        LIMIT 1;
        `;

        return [ query, [ marketId ] ];
    },
    simpleMovingAverage(marketId, table, bucketSize, windowLength, limit) {
        const fQuery = `
        WITH x AS (
            SELECT
                time_bucket_gapfill( $2::bigint, bucket) as bucket_gf,
                last(close, bucket) as close,
                locf(last(close, bucket)) as close_gf
            FROM %I
            WHERE bucket > first_trade_time($1)
                AND bucket < most_recent_trade_time($1)
                AND market_id = $1
            GROUP BY bucket_gf
            ORDER BY bucket_gf DESC
        )
        SELECT
            bucket_gf,
            close_gf,
            avg(close_gf) OVER (
                ORDER BY bucket_gf ROWS BETWEEN $3 PRECEDING AND CURRENT ROW
            ) AS sma
        FROM x
        WHERE close_gf IS NOT NULL
        ORDER BY bucket_gf DESC
        LIMIT $4;
        `;

        const query = format(fQuery, table);

        return [ query, [ marketId, bucketSize, windowLength-1, limit ] ];
    },
    simpleMovingAveragesOld(marketId, interval, limit, bucketSize) {
        
        let table;
        switch (interval) {
            case '5m':
                table = 'candles_5m';
                bucketSize = "300000000000";
                break;
            case '1h':
                table = 'candles_1h';
                bucketSize = "3600000000000";
                break;
            case '1d':
                table = 'candles_1d';
                bucketSize = "86400000000000";
                break;
            default:
                table = 'candles_1h';
                bucketSize = "3600000000000";
        };
        
        const query = `
        WITH q1 AS (
        SELECT time_bucket_gapfill($3::bigint, bucket) AS bucket_gf,
            last(close, bucket) AS close,
            locf(last(close, bucket)) AS close_gf
        FROM ${table}
        WHERE bucket > first_trade_time($1) 
            AND bucket < most_recent_trade_time($1)
            AND market_id = $1
        GROUP BY bucket_gf
        ORDER BY bucket_gf DESC
        )
        SELECT bucket_gf, close_gf,
            avg(close_gf) OVER (
                ORDER BY bucket_gf ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
            ) AS sma_50,
            avg(close_gf) OVER (
                ORDER BY bucket_gf ROWS BETWEEN 99 PRECEDING AND CURRENT ROW
            ) AS sma_100,
            avg(close_gf) OVER (
                ORDER BY bucket_gf ROWS BETWEEN 199 PRECEDING AND CURRENT ROW
            ) AS sma_200
        FROM q1
        ORDER BY bucket_gf DESC
        LIMIT $2;
        `;

        return [ query, [ marketId, limit, bucketSize ] ];

        `
        WITH q1 AS (
            SELECT time_bucket_gapfill('300000000000'::bigint, bucket) AS bucket_gf,
                last(close, bucket) AS close,
                locf(last(close, bucket)) AS close_gf
            FROM candles_5m
            WHERE bucket > current_time_ns() - '72000000000000'::bigint AND bucket < current_time_ns() AND market_id = '10c7d40afd910eeac0c2cad186d79cb194090d5d5f13bd31e14c49fd1bded7e2'
            GROUP BY bucket_gf
            ORDER BY bucket_gf DESC
            )
            SELECT bucket_gf, close_gf,
                avg(close_gf) OVER (
                    ORDER BY bucket_gf ROWS BETWEEN 49 PRECEDING AND CURRENT ROW
                ) AS sma_50,
                avg(close_gf) OVER (
                    ORDER BY bucket_gf ROWS BETWEEN 99 PRECEDING AND CURRENT ROW
                ) AS sma_100,
                avg(close_gf) OVER (
                    ORDER BY bucket_gf ROWS BETWEEN 199 PRECEDING AND CURRENT ROW
                ) AS sma_200
            FROM q1
            ORDER BY bucket_gf DESC
            LIMIT 20;
        `
    }

};

const partyData = {
    totalTrades: 0,
    totalVolume: 0,
    totalFeesPaid:  0,
    openPositions: [],
    historicalPnls: {
        realisedPnl: [],
        unrealisedPnl: [],
    }
}

const partyQueries = {
    countPartyData(partyId) {
        
        const query = `
        SELECT count(*) from party_data_5m
        WHERE buyer = $1 OR seller = $1;
        `;

        return [ query, [ partyId ] ] ;
    },
    numTrades(partyId) {
        const query = `
        SELECT
            market_id,
            sum(num_trades) AS num_trades,
            sum(num_self_trades) AS num_self_trades,
            max(timestamp) AS timestamp
        FROM party_data_5m
        WHERE buyer = $1 OR seller = $1
        GROUP BY market_id;
        `;

        return [ query, [ partyId ] ];
    },
    totalNumTrades(partyId) {
        const query = `
        SELECT
            sum(num_trades) AS num_trades,
            sum(num_self_trades) AS num_self_trades,
            max(timestamp) AS timestamp
        FROM party_data_5m
        WHERE buyer = $1 OR seller = $1;
        `;

        return [ query, [ partyId ] ];
    },
    volume(partyId, marketId) {
        const query = `
        SELECT
            sum(volume) AS volume,
            sum(self_volume) AS self_volume,
            max(timestamp) AS timestamp
        FROM party_data_5m
        WHERE buyer = $1 OR seller = $1 AND market_id = $2;
        `;

        return [ query, [ partyId, marketId ] ];
    },
    totalVolume(partyId) {
        const query = `
        SELECT
            market_id,
            sum(volume) AS volume,
            sum(self_volume) AS self_volume,
            max(timestamp) AS timestamp
        FROM party_data_5m
        WHERE buyer = $1 OR seller = $1 GROUP BY market_id;
        `;

        return [ query, [ partyId ] ];
    },
    historicalVolume(partyId, marketId, bucketSize, limit, table) {
        const fQuery = `
        SELECT
            time_bucket_gapfill($3::bigint, bucket) AS bucket_gf,
            CASE WHEN timestamp IS NULL THEN '0' ELSE locf(timestamp) AS timestamp_gf,
            CASE WHEN volume IS NULL THEN 0 ELSE volume AS volume_gf,
            CASE WHEN self_volume IS NULL THEN 0 ELSE self_volume AS self_volume_gf
        FROM %I
        WHERE buyer = $1 OR seller = $1
            AND market_id = $2
            AND bucket > first_trade_time($2) 
            AND bucket < most_recent_trade_time($2)
        GROUP BY bucket_gf
        ORDER BY bucket_gf
        LIMIT $3;
        `;

        const query = format(fQuery, table);

        return [ query, [ partyId, marketId, bucketSize, limit ] ];
    },
    allHistoricalVolumes(partyId, bucketSize, limit, table) {
        const fQuery = `
        SELECT
            time_bucket_gapfill($2::bigint, bucket) as bucket_gf,
            CASE WHEN market_id IS NULL THEN locf(market_id) ELSE market_id AS market_id,
            CASE WHEN timestamp IS NULL THEN locf(timestamp) ELSE timestamp AS timestamp,
            CASE WHEN volume IS NULL THEN 0 ELSE volume AS volume_gf,
            CASE WHEN self_volume IS NULL THEN 0 ELSE self_volume AS self_volume_gf
            
        FROM %I
        WHERE buyer = $1 OR seller = $1
            AND bucket > first_trade_time($1)
            AND bucket < most_recent_trade_time($1)
        GROUP BY market_id
        ORDER BY bucket_gf
        LIMIT $3;
        `;

        const query = format(fQuery, table);

        return [ query, [ partyId, bucketSize, limit ] ];
    },
    feesPaid(partyId, marketId) {
        const query = `
        SELECT
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_paid) AS maker_fee_paid,
            sum(liquidity_fee_paid) AS liquidity_fee_paid,
            sum(infrastructure_fee_paid) AS infrastructure_fee_paid
        FROM fees_paid_5m
        WHERE party_id = $1 AND market_id = $2;
        `;

        return [ query, [ partyId, marketId ] ];
    },
    totalFeesPaid(partyId) {
        const query = `
        SELECT
            market_id,
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_paid) AS maker_fee_paid,
            sum(liquidity_fee_paid) AS liquidity_fee_paid,
            sum(infrastructure_fee_paid) AS infrastructure_fee_paid
        FROM fees_paid_5m
        WHERE party_id = $1
        GROUP BY market_id;
        `;

        return [ query, [ partyId ]]; 
    },
    feesPaidOld(partyId) {
        const query = `
        SELECT
            y.market_id,
            y.party,
            sum(y.fee) AS fee_combined,
            sum(fee_infrastructure) as fee_infrastructure,
            sum(fee_maker) as fee_maker,
            sum(fee_liquidity) as fee_liquidity
        FROM party_data_5m x
        CROSS JOIN LATERAL ( VALUES (x.market_id, x.buyer, x.buyer_fee, x.buyer_fee_infrastructure, x.buyer_fee_maker, x.buyer_fee_liquidity)
                                , (x.market_id, x.seller, x.seller_fee, x.seller_fee_infrastructure, x.seller_fee_maker, x.seller_fee_liquidity)) as y(market_id, party, fee, fee_infrastructure, fee_maker, fee_liquidity)
        WHERE party = $1
        GROUP BY y.market_id, party;
        `;

        return [ query, [ partyId ] ];
    },
    totalFeesPaidOld(partyId) {
        const query = `
        SELECT y.party, SUM(y.fee) AS total_fees
        FROM fees_paid_5m x
        CROSS JOIN LATERAL ( VALUES (x.buyer, x.buyer_fee)
                                , (x.seller, x.seller_fee)) as y(party, fee)
        WHERE party = $1
        GROUP BY party;
        `;

        return [ query, [ partyId ] ];
    },
    feesEarned(partyId, marketId) {
        const query = `
        SELECT
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_earned) AS maker_fee_earned,
            sum(liquidity_fee_earned) AS liquidity_fee_earned,
            sum(infrastructure_fee_earned) AS infrastructure_fee_earned
        FROM fees_earned_5m
        WHERE party_id = $1 AND market_id = $2;
        `;

        return [ query, [ partyId, marketId ] ];
    },
    totalFeesEarned(partyId) {
        const query = `
        SELECT
            market_id,
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_earned) AS maker_fee_earned,
            sum(liquidity_fee_earned) AS liquidity_fee_earned,
            sum(infrastructure_fee_earned) AS infrastructure_fee_earned
        FROM fees_earned_5m
        WHERE party_id = $1
        GROUP BY market_id;
        `;

        return [ query, [ partyId ] ];
    },
    openPositions(partyId) {
        const query = `
        SELECT * FROM positions AS positions WHERE open_volume > 0 AND party_id = $1;
        `;

        return [ query, [ partyId ] ];
    },
    pnls(partyId, marketId) {
        const query = `
        SELECT 
            market_id,
            last(last_timestamp, last_timestamp), as timestamp
            sum(unrealized_delta) AS unrealized_pnl,
            sum(realized_delta) AS realized_pnl
        FROM pnl_deltas_5m
        WHERE party_id = $1 AND market_id = $2
        GROUP BY market_id;
        `;

        return [ query, [ partyId, marketId ]]
    },
    allPnls(partyId) {
        const query = `
        SELECT 
            market_id,
            last(last_timestamp, last_timestamp), as timestamp
            sum(unrealized_delta) AS unrealized_pnl,
            sum(realized_delta) AS realized_pnl
        FROM pnl_deltas_5m
        WHERE party_id = $1
        GROUP BY market_id;
        `;

        return [ query, [ partyId ]]
    },
    historicalPnl() {}
}

const asyncQuery = (type, query, values, pgPool) => {
    return new Promise((resolve, reject) => {
        
        console.log(query);

        if (values.length == 0) {
            
            pgPool.query(query, (err, result) => {
                if (!err) {
                    console.log(type);
                    console.log(result.rows);
                    resolve([type, result.rows]);
                } else {
                    console.log(err);
                };
            });

        } else {

            pgPool.query(query, values, (err, result) => {
                if (!err) {
                    console.log(type);
                    console.log(result.rows);
                    resolve([type, result.rows]);
                } else {
                    console.log(err);
                };
            });

        }

    });
};

module.exports = { asyncQuery, marketQueries, partyQueries };