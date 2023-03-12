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
    totalNumTrades(marketId) {
        return `
        SELECT sum(num_trades) AS num_trades FROM market_data_5m
        WHERE market_id = '${marketId}';
        `;
    },
    totalVolume(marketId) {
        return `
        SELECT sum(volume) AS volume FROM market_data_5m
        WHERE market_id = '${marketId}';
        `;
    },
    totalFees(marketId) {
        return `
        SELECT sum(fees_paid) AS total_fees,
            sum(fees_paid_infrastructure) AS infrastructure_fees
        FROM market_data_5m
        WHERE market_id = '${marketId}';
        `;
    },
    openInterest(marketId) {
        return `
        SELECT bucket, first AS first_open_interest FROM open_interest_5m
        WHERE market_id = '${marketId}' ORDER BY bucket DESC LIMIT 1;
        `;
    },
    returns(marketId, interval) {

    },
    variance(marketId, interval) {

    },
    valueAtRisk(marketId, interval, bucketSize, confidenceInterval) {
        return `
        WITH gf AS (
            SELECT time_bucket_gapfill('${bucketSize}'::bigint, bucket) AS bucket_gf,
                last(close, bucket) AS close,
                locf(last(close, bucket)) AS close_gf
            FROM candles_${interval}
            WHERE bucket > first_trade_time('${marketId}') 
                AND bucket < most_recent_trade_time('${marketId}')
                AND market_id = '${marketId}'
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
            percentile_cont(${1-confidenceInterval}) WITHIN GROUP (ORDER BY return) AS p_cont, 
            percentile_disc(${1-confidenceInterval}) WITHIN GROUP (ORDER BY return) AS p_disc
        FROM returns;
        `;

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
        return `
        SELECT time_bucket_gapfill('3600000000000'::bigint, bucket) AS bucket_gf,
            last(close, bucket) AS close,
            locf(last(close, bucket)) AS close_gf
        FROM candles_1h
        WHERE bucket >= most_recent_trade_time('${marketId}') - '2592000000000000'::bigint
            AND bucket < most_recent_trade_time('${marketId}')
            AND market_id = '${marketId}'
        GROUP BY bucket_gf
        ORDER BY bucket_gf DESC
        LIMIT 1;
        `;
    },
    simpleMovingAverages(marketId, interval, limit, bucketSize, safeWindow) {
        return `
        WITH q1 AS (
        SELECT time_bucket_gapfill('${bucketSize}'::bigint, bucket) AS bucket_gf,
            last(close, bucket) AS close,
            locf(last(close, bucket)) AS close_gf
        FROM candles_${interval}
        WHERE bucket > first_trade_time('${marketId}') 
            AND bucket < most_recent_trade_time('${marketId}')
            AND market_id = '${marketId}'
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
        LIMIT ${limit};
        `;

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
    count(partyId, table) {
        return `
        SELECT count(*) from '${table}'
        WHERE buyer = '${partyId}' OR seller = '${partyId}';
        `;
    },
    totalNumTrades(partyId) {
        return `
        SELECT sum(num_trades) AS num_trades, sum(num_self_trades) AS num_self_trades FROM party_data_5m
        WHERE buyer = '${partyId}' OR seller = '${partyId}';
        `;

    },
    totalVolume(partyId) {
        return `
        SELECT sum(volume) AS volume, sum(self_volume) AS self_volume FROM party_data_5m
        WHERE buyer = '${partyId}' OR seller = '${partyId}';
        `;
    }
    ,
    totalFeesPaid(partyId) {
        return `
        SELECT y.party, SUM(y.fee) AS total_fees
        FROM fees_paid_5m x
        CROSS JOIN LATERAL ( VALUES (x.buyer, x.buyer_fee)
                                , (x.seller, x.seller_fee)) as y(party, fee)
        WHERE party = '${partyId}'
        GROUP BY party;
        `;
    },
    openPositions(partyId) {
        return `
        SELECT * FROM positions AS positions WHERE open_volume > 0 AND party_id = '${partyId}';
        `;
    },
    historicalPnls: ``
}

const asyncQuery = (type, query, pgPool) => {
    return new Promise((resolve, reject) => {
        
        console.log(query);

        pgPool.query(query, (err, result) => {
            if (!err) {
                console.log(type);
                console.log(result.rows);
                resolve([type, result.rows]);
            } else {
                console.log(err);
            };
        });      
    });
};

module.exports = { asyncQuery, marketQueries, partyQueries };