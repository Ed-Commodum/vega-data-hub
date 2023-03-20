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
        const query = `
        SELECT sum(num_trades) AS num_trades FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    totalVolume(marketId) {
        const query = `
        SELECT sum(volume) AS volume FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
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
        SELECT bucket, first AS first_open_interest FROM open_interest_5m
        WHERE market_id = $1 ORDER BY bucket DESC LIMIT 1;
        `;

        return [ query, [ marketId ] ];
    },
    returns(marketId, interval) {

    },
    variance(marketId, interval) {

    },
    valueAtRisk(marketId, interval, bucketSize, confidenceInterval) {
        
        let table;
        switch (interval) {
            case '5m':
                table = 'candles_5m';
                break;
            case '1h':
                table = 'candles_1h';
                break;
            case '1d':
                table = 'candles_1d';
                break;
            default:
                table = 'candles_1h';
        };

        const query = `
        WITH gf AS (
            SELECT time_bucket_gapfill($2::bigint, bucket) AS bucket_gf,
                last(close, bucket) AS close,
                locf(last(close, bucket)) AS close_gf
            FROM ${table}
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

        return [ query, [ marketId, bucketSize, (1-confidenceInterval) ] ];

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
        SELECT time_bucket_gapfill('3600000000000'::bigint, bucket) AS bucket_gf,
            last(close, bucket) AS close,
            locf(last(close, bucket)) AS close_gf
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
    simpleMovingAverages(marketId, interval, limit, bucketSize) {
        
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
        SELECT market_id, sum(num_trades) AS num_trades, sum(num_self_trades) AS num_self_trades FROM party_data_5m
        WHERE buyer = $1 OR seller = $1 GROUP BY market_id;
        `;

        return [ query, [ partyId ] ];
    },
    totalNumTrades(partyId) {
        const query = `
        SELECT sum(num_trades) AS num_trades, sum(num_self_trades) AS num_self_trades FROM party_data_5m
        WHERE buyer = $1 OR seller = $1;
        `;

        return [ query, [ partyId ] ];
    },
    volume(partyId) {
        const query = `
        SELECT market_id, sum(volume) AS volume, sum(self_volume) AS self_volume FROM party_data_5m
        WHERE buyer = $1 OR seller = $1 GROUP BY market_id;
        `;

        return [ query, [ partyId ] ];
    },
    totalVolume(partyId) {
        const query = `
        SELECT sum(volume) AS volume, sum(self_volume) AS self_volume FROM party_data_5m
        WHERE buyer = $1 OR seller = $1;
        `;

        return [ query, [ partyId ] ];
    }
    ,
    feesPaid(partyId) {
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
    totalFeesPaid(partyId) {
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
    openPositions(partyId) {
        const query = `
        SELECT * FROM positions AS positions WHERE open_volume > 0 AND party_id = $1;
        `;

        return [ query, [ partyId ] ];
    },
    historicalPnls: ``
}

const asyncQuery = (type, query, values, pgPool) => {
    return new Promise((resolve, reject) => {
        
        console.log(query);

        // pgPool.query(query, (err, result) => {
        //     if (!err) {
        //         console.log(type);
        //         console.log(result.rows);
        //         resolve([type, result.rows]);
        //     } else {
        //         console.log(err);
        //     };
        // });
        
        pgPool.query(query, values, (err, result) => {
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