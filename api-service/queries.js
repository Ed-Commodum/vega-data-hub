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

const assetQueries = {
    getAssets() {
        const query = `
        SELECT 
            id,
            name,
            symbol,
            decimals
        FROM assets
        WHERE status = 'STATUS_ENABLED';
        `;

        return [ query, [] ]
    },
    getDecimals(assetId) {
        const query = `
        SELECT
            symbol AS code,
            decimals AS asset_decimals
        FROM assets
        WHERE id = $1 AND
        WHERE status = 'STATUS_ENABLED';
        `;

        return [ query, [ assetId ] ];
    },
    getAllDecimals() {
        const query = `
        SELECT
            id,
            symbol as code,
            decimals
        FROM assets
        WHERE status = 'STATUS_ENABLED';
        `;

        return [ query, [] ];
    },
    getBridgeBalance(assetId) {
        const query = `
        SELECT
            asset,
            max(timestamp) AS timestamp,
            sum(diff) AS balance
        FROM bridge_diffs_5m
        WHERE asset = $1;
        `;

        return [ query, [ assetId ] ];
    },
    getAllBridgeBalances() {
        const query = `
        SELECT
            asset,
            max(timestamp) AS timestamp,
            sum(diff) AS balance
        FROM bridge_diffs_5m
        GROUP BY asset;
        `;

        return [ query, [] ];
    },
    twentyFourHourBridgeNetFlows(assetId) {
        const query = `
        SELECT
            asset,
            max(timestamp) AS timestamp,
            sum(diff) AS net_flow
        FROM bridge_diffs_5m
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
            AND asset = $1;
        GROUP BY asset;
        `;

        return [ query, [ assetId ] ];
    },
    allTwentyFourHourBridgeNetFlows() {
        const query = `
        SELECT
            asset,
            max(timestamp) AS timestamp,
            sum(diff) AS net_flow
        FROM bridge_diffs_5m
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
        GROUP BY asset;
        `;

        return [ query, [] ];
    },
    historicalBridgeNetFlows(assetId, limit, table) {
        const fQuery = `
        SELECT
            asset,
            bucket,
            timestamp,
            diff AS net_flow
        FROM %I
        WHERE asset = $1
        ORDER BY bucket DESC
        LIMIT $2;
        `;

        const query = format(fQuery, table);

        return [ query, [ assetId, limit ] ]
    },
    allHistoricalBridgeNetFlows(limit, table) {
        const fQuery = `
        SELECT
            asset,
            bucket,
            timestamp,
            diff AS net_flow
        FROM %I
        ORDER BY bucket DESC
        LIMIT $1
        `;

        const query = format(fQuery, table);

        return [ query, [ limit ] ]
    },
    historicalBridgeDeposits(assetId, limit, table) {
        const fQuery = `
        SELECT
            bucket,
            timestamp AS timestamp,
            deposits AS amount
        FROM %I
        WHERE asset = $1
            AND diff > 0
        ORDER BY bucket DESC
        LIMIT $2;
        `;

        const query = format(fQuery, table);

        return [ query, [ assetId, limit ] ];
    },
    allHistoricalBridgeDeposits(limit, table) {
        const fQuery = `
        SELECT
            asset AS asset_id,
            bucket,
            timestamp,
            deposits AS amount
        FROM %I
        WHERE diff > 0
        ORDER BY bucket DESC
        LIMIT $1;
        `;

        const query = format(fQuery, table);

        return [ query, [ limit ] ];
    },
    historicalBridgeWithdrawals(assetId, limit, table) {
        const fQuery = `
        SELECT
            bucket,
            timestamp AS timestamp,
            withdrawals AS amount
        FROM %I
        WHERE asset = $1
            AND diff < 0
        ORDER BY bucket DESC
        LIMIT $2;
        `;

        const query = format(fQuery, table);

        return [ query, [ assetId, limit ] ];
    },
    allHistoricalBridgeWithdrawals(limit, table) {
        const fQuery = `
        SELECT
            asset AS asset_id,
            bucket,
            timestamp,
            withdrawals AS amount
        FROM %I
        WHERE diff < 0
        ORDER BY bucket DESC
        LIMIT $1;
        `;

        const query = format(fQuery, table);

        return [ query, [ limit ] ];
    },
    feesTopEarners(assetId, n) {
        const query = `
        SELECT
            party_id,
            asset AS asset_id,
            max(bucket) AS bucket,
            max(timestamp) AS timestamp,
            sum(maker_fee_earned) AS maker_fee_earned,
            sum(liquidity_fee_earned) AS liquidity_fee_earned,
            sum(infrastructure_fee_earned) AS infrastructure_fee_earned,
            sum(maker_fee_earned + liquidity_fee_earned + infrastructure_fee_earned) AS total_fee_earned
        FROM fees_earned_5m
        WHERE asset = $1
        GROUP BY party_id, asset_id
        ORDER BY total_fee_earned DESC
        LIMIT $2;
        `;

        /*
        SELECT
            party_id,
            asset AS asset_id,
            max(bucket) as bucket,
            max(timestamp) as timestamp,
            sum(maker_fee_earned) AS maker_fee_earned,
            sum(liquidity_fee_earned) AS liquidity_fee_earned,
            sum(infrastructure_fee_earned) AS infrastructure_fee_earned,
            sum(maker_fee_earned + liquidity_fee_earned + infrastructure_fee_earned) AS total_fee_earned
        FROM fees_earned_5m
        WHERE asset = 'bf1e88d19db4b3ca0d1d5bdb73718a01686b18cf731ca26adedf3c8b83802bba'
        GROUP BY party_id, asset_id
        ORDER BY total_fee_earned DESC
        LIMIT 5;
        */

        return [ query, [ assetId, n ] ];
    },
    allFeesTopEarners(n) {
        const query = `
        SELECT
            party_id,
            asset as asset_id,
            max(bucket) as bucket,
            max(timestamp) as timestamp,
            sum(maker_fee_earned) AS maker_fee_earned,
            sum(liquidity_fee_earned) AS liquidity_fee_earned,
            sum(infrastructure_fee_earned) AS infrastructure_fee_earned,
            sum(maker_fee_earned + liquidity_fee_earned + infrastructure_fee_earned) AS total_fee_earned
        FROM fees_earned_5m
        GROUP BY party_id, asset_id
        ORDER BY total_fee_earned DESC
        LIMIT $1;
        `;

        return [ query, [ n ] ]
    }
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
        FROM markets
        WHERE state = 'STATE_ACTIVE'
            OR state = 'STATE_SUSPENDED'
            OR state = 'STATE_CLOSED'
            OR state = 'STATE_TRADING_TERMINATED'
            OR state = 'STATE_SETTLED';
        `;

        return [ query, [ ] ];
    },
    activeMarkets() {
        const query = `
        SELECT
            id,
            instrument_code,
            instrument_name,
            future_settlement_asset,
            decimal_places,
            position_decimal_places
        FROM markets
        WHERE state = 'STATE_ACTIVE'
            OR state = 'STATE_SUSPENDED';
        `;

        return [ query, [] ];
    },
    getDecimals(marketId) {
        const query = `
        SELECT
            id AS market_id,
            decimal_places,
            position_decimal_places,
            future_settlement_asset,
            future_quote_name,
            instrument_code,
            instrument_name
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
            future_quote_name,
            instrument_code,
            instrument_name
        FROM markets
        WHERE
            state != 'STATE_PROPOSED' AND
            state != 'STATE_REJECTED' AND
            state != 'STATE_CANCELLED';
        `;

        return [ query, [] ];
    },
    numTrades(marketId) {
        const query = `
        SELECT sum(num_trades) AS num_trades, max(timestamp) AS timestamp FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    allNumTrades() {
        const query = `
        SELECT
            market_id,
            sum(num_trades) AS num_trades,
            max(timestamp) AS timestamp
        FROM market_data_5m
        GROUP BY market_id;
        `;

        return [ query, [] ];
    },
    totalNumTrades() {
        const query = `
        SELECT sum(num_trades) AS num_trades, max(timestamp) AS timestamp FROM market_data_5m;
        `;

        return [ query, [] ];
    },
    historicalNumTrades(marketId, limit, table) {
        const fQuery = `
        SELECT
            market_id,
            bucket,
            num_trades,
            timestamp
        FROM %I
        WHERE market_id = $1
        ORDER BY bucket DESC
        LIMIT $2;
        `;

        const query = format(fQuery, table);

        return [ query, [ marketId, limit] ]
    },
    allHistoricalNumTrades(limit, table) {
        const fQuery = `
        SELECT
            bucket,
            market_id,
            num_trades,
            timestamp
        FROM %I
        ORDER BY bucket DESC
        LIMIT $1;
        `;
        
        const query = format(fQuery, table);

        return [ query, [ limit ] ]
    },
    twentyFourHourAverageTradeSize(marketId) {
        const query = `
        WITH x AS (
            SELECT
                sum(num_trades)
            FROM market_data_5m
            WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
            AND market_id = $1
        )
        SELECT
            market_id,
            last(timestamp, timestamp),
            sum(
                (volume/num_trades) * (num_trades/x.sum)
            ) as avg_trade_size
        FROM market_data_5m CROSS JOIN x
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
        AND market_id = $1
        GROUP BY market_id;
        `;
        
        /* `
        WITH x AS (
            SELECT sum(num_trades)
            FROM market_data_5m
            WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
            AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
        )
        SELECT
            market_id,
            last(timestamp, timestamp),
            sum(
                (volume/num_trades) * (num_trades/x.sum)
            ) as avg_trade_size
        FROM market_data_5m CROSS JOIN x
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
        AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
        GROUP BY market_id;
        ` */ 

        return [ query, [ marketId ] ];
    },
    allTwentyFourHourAverageTradeSize() {
        const query = `
        WITH x AS (
            SELECT
                market_id,
                sum(num_trades)
            FROM market_data_5m
            WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
            GROUP BY market_id
        )
        SELECT
            y.market_id,
            last(timestamp, timestamp) as timestamp,
            sum(
                (volume/num_trades) * (num_trades/x.sum)
            ) as avg_trade_size
        FROM market_data_5m y INNER JOIN x ON y.market_id = x.market_id
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
        GROUP BY y.market_id;
        `;

        return [ query, [] ];
    },
    rollingAverageTradeSize(marketId, timeWindow, table) {
        const fQuery = `
        WITH x AS (
            SELECT
                sum(num_trades)
            FROM %I
            WHERE timestamp::bigint > (current_time_ns() - $2::bigint)
                AND market_id = $1
        )
        SELECT
            market_id,
            last(timestamp, timestamp) as timestamp,
            sum(
                (volume/num_trades) * (num_trades/x.sum)
            ) as avg_trade_size
        FROM %I CROSS JOIN x
        WHERE timestamp::bigint > (current_time_ns() - $2::bigint)
            AND market_id = $1
        GROUP BY market_id;
        `;

        /*`
        WITH x AS (
            SELECT
                sum(num_trades)
            FROM market_data_5m
            WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
                AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
        )
        SELECT
            market_id,
            last(timestamp, timestamp) as timestamp,
            sum(
                (volume/num_trades) * (num_trades/x.sum)
            ) as avg_trade_size
        FROM market_data_5m CROSS JOIN x
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
            AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
        GROUP BY market_id;
        ` */

        const query = format(fQuery, table, table);

        return [ query, [ marketId, timeWindow ] ];
    },
    allRollingAverageTradeSize(timeWindow, table) {
        const fQuery = `
        WITH x AS (
            SELECT
                market_id,
                sum(num_trades)
            FROM %I
            WHERE timestamp::bigint > (current_time_ns() - $1::bigint)
            GROUP BY market_id
        )
        SELECT
            y.market_id,
            last(timestamp, timestamp) as timestamp,
            sum(
                (volume/num_trades) * (num_trades/x.sum)
            ) as avg_trade_size
        FROM %I y INNER JOIN x ON y.market_id = x.market_id
        WHERE timestamp::bigint > (current_time_ns() - $1::bigint)
        GROUP BY y.market_id;
        `;

        const query = format(fQuery, table, table);
        
        return [ query, [ timeWindow ] ];
    },
    volume(marketId) {
        const query = `
        SELECT
            sum(volume) AS volume,
            max(timestamp) AS timestamp
        FROM market_data_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    historicalVolume(marketId, limit, table) {
        const fQuery = `
        SELECT
            bucket,
            timestamp,
            volume
        FROM %I
        WHERE market_id = $1
        ORDER BY bucket DESC
        LIMIT $2;
        `;

        const query = format(fQuery, table);

        return [ query, [ marketId, limit ] ];
    },
    historicalVolumeGF(marketId, limit, bucketSize, table) {
        const fQuery = `
        SELECT
            time_bucket_gapfill($2::bigint, bucket) as bucket_gf,
            CASE WHEN timestamp IS NULL THEN '0' ELSE timestamp END AS timestamp_gf,
            CASE WHEN volume IS NULL THEN 0 ELSE volume END AS volume_gf
        FROM %I
        WHERE market_id = $1
            AND bucket > (first_trade_time($1) - $2::bigint)
            AND bucket < most_recent_trade_time($1)
        ORDER BY bucket_gf DESC
        LIMIT $3;
        `;

        const query = format(fQuery, table);

        return [ query, [ marketId, bucketSize, limit ] ];
    },
    allHistoricalVolumes(limit, bucketSize, table) {
        const fQuery = `
        SELECT
            market_id,
            bucket,
            timestamp,
            volume
        FROM %I
        GROUP BY market_id
        ORDER BY bucket_gf DESC
        LIMIT $2;
        `;

        const query = format(fQuery, table);

        return [ query, [ bucketSize, limit ] ];
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
    twentyFourHourVolume(marketId) {
        const query = `
        SELECT
            market_id,
            max(timestamp) AS timestamp,
            sum(volume) AS volume
        FROM market_data_5m
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
        AND market_id = $1
        GROUP BY market_id;
        `;

        return [ query, [ marketId ] ]
    },
    allTwentyFourHourVolumes() {
        const query = `
        SELECT
            market_id,
            max(timestamp) AS timestamp,
            sum(volume) AS volume
        FROM market_data_5m
        WHERE timestamp::bigint > (current_time_ns() - 86400000000000::bigint)
        GROUP BY market_id;
        `;

        return [ query, [] ]
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
            last AS open_interest,
            last_traded_price AS last_traded_price
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
            last(last, bucket) AS open_interest,
            last(last_traded_price, bucket) AS last_traded_price
        FROM open_interest_5m
        GROUP BY market_id;
        `;

        return [ query, [] ];
    },
    historicalOpenInterest(marketId, limit, table) {
        const fQuery = `
        SELECT
            market_id,
            bucket,
            last AS last_open_interest,
            last_ts,
            last_traded_price
        FROM %I
        WHERE market_id = $1
        ORDER BY bucket DESC
        LIMIT $2
        `;

        const query = format(fQuery, table);

        return [ query, [ marketId, limit ] ]
    },
    allHistoricalOpenInterest(limit, table) {
        const fQuery = `
        SELECT
            market_id,
            bucket,
            last AS last_open_interest,
            last_ts,
            last_traded_price
        FROM %I
        ORDER BY bucket DESC
        LIMIT $1
        `;

        const query = format(fQuery, table);

        return [ query, [ limit ] ]
    },
    makerLiquidityFeesGenerated(marketId) {
        const query = `
        SELECT
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_paid) AS maker_fees_generated,
            sum(liquidity_fee_paid) AS liquidity_fees_generated
        FROM fees_paid_5m
        WHERE market_id = $1;
        `;

        // sum(infrastructure_fee_paid) AS infrastructure_fees_generated

        return [ query, [ marketId ] ];
    },
    infraFeesGenerated(marketId) {
        const query = `
        SELECT
            last(timestamp, bucket) AS timestamp,
            sum(infrastructure_fee_paid) AS infrastructure_fees_generated
        FROM infra_fees_by_market_5m
        WHERE market_id = $1;
        `;

        return [ query, [ marketId ] ];
    },
    allMakerLiquidityFeesGenerated() {
        const query = `
        SELECT
            market_id,
            last(timestamp, bucket) AS timestamp,
            sum(maker_fee_paid) AS maker_fees_generated,
            sum(liquidity_fee_paid) AS liquidity_fees_generated
        FROM fees_paid_5m
        WHERE market_id != 'N/A'
        GROUP BY market_id;
        `;

        return [ query, [] ]
    },
    allInfraFeesGenerated() {
        const query = `
        SELECT
            market_id,
            last(timestamp, bucket) AS timestamp,
            sum(infrastructure_fee_paid) AS infrastructure_fees_generated
        FROM infra_fees_by_market_5m
        GROUP BY market_id;
        `;

        return [ query, [] ];
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
    volatility(marketId) {
        const query = `
        WITH gf AS (
            SELECT
                time_bucket_gapfill('86400000000000'::bigint, bucket) AS bucket_gf,
                close AS close,
                locf(close, bucket) AS close_gf,
                last_timestamp AS timestamp
            FROM candles_1d
            WHERE bucket > first_trade_time($1)
                AND bucket < most_recent_trade_time($1)
                AND market_id = $1
            ORDER BY bucket_gf DESC
            LIMIT 200
        ), returns AS (
            SELECT bucket_gf,
                (close_gf::decimal / lag(close_gf) OVER (ORDER BY bucket_gf)) - 1 AS return,
                timestamp AS timestamp
            FROM gf
            ORDER BY bucket_gf DESC
        ) SELECT 
            max(timestamp) AS timestamp,
            stddev(stats_agg(return)) AS volatilty,
            stddev(stats_agg(return)) * sqrt(365) AS annualized_volatility
        FROM returns;
        `;

        return [ query, [ marketId ] ];
    },
    historicalVolatility() {
        const query = `
        `;

        return [ query, [] ];
    },
    sharpeRatio(marketId) {
        const query = `
        WITH gf AS (
            SELECT
                time_bucket_gapfill('86400000000000'::bigint, bucket) AS bucket_gf,
                close AS close,
                locf(close, bucket) AS close_gf,
                last_timestamp as timestamp
            FROM candles_1d
            WHERE bucket > first_trade_time($1)
                AND bucket < most_recent_trade_time($1)
                AND market_id = $1
            ORDER BY bucket_gf DESC
            LIMIT 30
        ), returns AS (
            SELECT bucket_gf,
                (close_gf::decimal / lag(close_gf) OVER (ORDER BY bucket_gf)) - 1 AS return,
                timestamp AS timestamp
            FROM gf
            ORDER BY bucket_gf DESC
        ) SELECT
            sum(return) AS sum_return,
            count(return) AS num_return,
            avg(return) AS average_return,
            max(timestamp) AS timestamp,
            stddev(stats_agg(return)) AS stddev_returns,
            (avg(return) / stddev(stats_agg(return))) * sqrt(365) AS sharpe_ratio
        FROM returns;
        `;

        /*
        `
        WITH gf AS (
            SELECT
                time_bucket_gapfill('86400000000000'::bigint, bucket) AS bucket_gf,
                close AS close,
                locf(close, bucket) AS close_gf,
                last_timestamp as timestamp
            FROM candles_1d
            WHERE bucket > first_trade_time('2dca7baa5f7269b08d053668bca03f97f72e9a162327eebd941c54f1f9fb8f80')
                AND bucket < most_recent_trade_time('2dca7baa5f7269b08d053668bca03f97f72e9a162327eebd941c54f1f9fb8f80')
                AND market_id = '2dca7baa5f7269b08d053668bca03f97f72e9a162327eebd941c54f1f9fb8f80'
            ORDER BY bucket_gf DESC
            LIMIT 30
        ), returns AS (
            SELECT bucket_gf,
                (close_gf::decimal / lag(close_gf) OVER (ORDER BY bucket_gf)) - 1 AS return,
                timestamp AS timestamp
            FROM gf
            ORDER BY bucket_gf DESC
        ) SELECT
            sum(return) AS sum_return,
            count(return) AS num_return,
            avg(return) AS average_return,
            max(timestamp) AS timestamp,
            stddev(stats_agg(return)) AS stddev_returns,
            (avg(return) / stddev(stats_agg(return))) * sqrt(365) AS sharpe_ratio
        FROM returns;
        ` 
        */

        return [ query, [ marketId ] ]
    },
    sortinoRatio(marketId) {
        const query = `
        WITH gf AS (
            SELECT
                time_bucket_gapfill('86400000000000'::bigint, bucket) AS bucket_gf,
                close AS close,
                locf(close, bucket) AS close_gf,
                last_timestamp as timestamp
            FROM candles_1d
            WHERE bucket > first_trade_time($1)
                AND bucket < most_recent_trade_time($1)
                AND market_id = $1
            ORDER BY bucket_gf DESC
            LIMIT 30
        ), returns AS (
            SELECT bucket_gf,
                (close_gf::decimal / lag(close_gf) OVER (ORDER BY bucket_gf)) - 1 AS return,
                timestamp AS timestamp
            FROM gf
            ORDER BY bucket_gf DESC
        ) SELECT
            sum(return) AS sum_return,
            count(return) AS num_return,
            avg(return) AS average_return,
            max(timestamp) AS timestamp,
            stddev(stats_agg(return)) AS stddev_returns,
            sqrt(sum(
                CASE WHEN return < 0 THEN return^2 ELSE 0 END
            ) / count(return)) AS downside_deviation,
            (avg(return)/sqrt(sum(CASE WHEN return < 0 THEN return^2 ELSE 0 END)/count(return)))*sqrt(365) AS sortino_ratio
        FROM returns;
        `;

        return [ query, [ marketId ] ]
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
    numTrades(partyId, marketId) {
        const query = `
        SELECT
            market_id,
            sum(num_trades) AS num_trades,
            sum(num_self_trades) AS num_self_trades,
            max(timestamp) AS timestamp
        FROM party_data_5m
        WHERE buyer = $1 OR seller = $1 AND market_id = $2
        GROUP BY market_id;
        `;

        return [ query, [ partyId, marketId ] ];
    },
    allNumTrades(partyId) {
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
    historicalNumTrades(partyId, marketId, limit, table) {
        const fQuery = `
        SELECT
            market_id,
            bucket,
            sum(num_trades) AS num_trades,
            sum(num_self_trades) AS num_self_trades,
            sum(num_trades + num_self_trades) AS num_trades_combined
            max(timestamp) AS timestamp
        FROM %I
        WHERE (buyer = $1 or seller = $1)
            AND market_id = $2
        GROUP BY bucket
        ORDER BY bucket DESC
        LIMIT $3;
        `;

        const query = format(fQuery, table)

        return [ query, [ partyId, marketId, limit] ]
    },
    allHistoricalNumTrades(partyId, limit, table) {
        const fQuery = `
        SELECT
            market_id,
            bucket,
            sum(num_trades) AS num_trades,
            sum(num_self_trades) AS num_self_trades,
            sum(num_trades + num_self_trades) AS num_trades_combined
            max(timestamp) AS timestamp
        FROM %I
        WHERE buyer = $1 or seller = $1
        GROUP BY market_id
        ORDER BY bucket DESC
        LIMIT $3;
        `;

        const query = format(fQuery, table)

        return [ query, [ partyId, marketId, limit] ]
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
            bucket,
            max(timestamp) AS timestamp,
            sum(volume) AS volume,
            sum(self_volume) AS self_volume
        FROM %I
        WHERE (buyer = $1 OR seller = $1)
            AND market_id = $2
        GROUP BY bucket
        ORDER BY bucket DESC
        LIMIT $3;
        `;
        
        // const fQuery = `
        // SELECT
        //     time_bucket_gapfill($3::bigint, bucket) AS bucket_gf,
        //     locf(max(timestamp)) as timestamp_gf,
        //     sum(CASE WHEN volume IS NULL THEN 0 ELSE volume END) AS volume_gf,
        //     sum(CASE WHEN self_volume IS NULL THEN 0 ELSE self_volume END) AS self_volume_gf
        // FROM %I
        // WHERE (buyer = $1 OR seller = $1)
        //     AND market_id = $2
        //     AND bucket >= first_party_data_bucket($2, $5, $1)
        //     AND bucket < (most_recent_party_data_bucket($2, $5, $1) + $3::bigint)
        // GROUP BY bucket_gf
        // ORDER BY bucket_gf DESC
        // LIMIT $4;
        // `;

        // CASE WHEN timestamp IS NULL THEN '0' ELSE timestamp END AS timestamp_gf,

        // AND bucket > (first_trade_time($2) - $3::bigint)
        // AND bucket < most_recent_trade_time($2)

        const query = format(fQuery, table);

        // return [ query, [ partyId, marketId, bucketSize, limit, table ] ];
        return [ query, [ partyId, marketId, limit ] ];
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
    feesPaidFromPartyData(partyId, marketId) {
        const query = `
        SELECT
            y.market_id,
            y.party,
            sum(y.fee) AS fee_combined,
            sum(fee_infrastructure) as fee_infrastructure,
            sum(fee_maker) as fee_maker,
            sum(fee_liquidity) as fee_liquidity,
            max(y.timestamp) as timestamp
        FROM party_data_5m x
        CROSS JOIN LATERAL ( VALUES (x.market_id, x.buyer, x.buyer_fee, x.buyer_fee_infrastructure, x.buyer_fee_maker, x.buyer_fee_liquidity, x.timestamp)
                                , (x.market_id, x.seller, x.seller_fee, x.seller_fee_infrastructure, x.seller_fee_maker, x.seller_fee_liquidity, x.timestamp)) as y(market_id, party, fee, fee_infrastructure, fee_maker, fee_liquidity, timestamp)
        WHERE party = $1 AND y.market_id = $2
        GROUP BY y.market_id, party;
        `;

        return [ query, [ partyId, marketId ] ];
    },
    allFeesPaidFromPartyData(partyId) {
        const query = `
        SELECT
            y.market_id,
            y.party,
            sum(y.fee) AS fee_combined,
            sum(fee_infrastructure) as fee_infrastructure,
            sum(fee_maker) as fee_maker,
            sum(fee_liquidity) as fee_liquidity,
            max(y.timestamp) as timestamp
        FROM party_data_5m x
        CROSS JOIN LATERAL ( VALUES (x.market_id, x.buyer, x.buyer_fee, x.buyer_fee_infrastructure, x.buyer_fee_maker, x.buyer_fee_liquidity, x.timestamp)
                                , (x.market_id, x.seller, x.seller_fee, x.seller_fee_infrastructure, x.seller_fee_maker, x.seller_fee_liquidity, x.timestamp)) as y(market_id, party, fee, fee_infrastructure, fee_maker, fee_liquidity, timestamp)
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
    historicalPnl() {},
    uniqueDepositors() {
        const query = `
        SELECT 
            count(distinct party_id) as unique_depositors,
            max(timestamp) as timestamp
        FROM bridge_diffs_5m
        WHERE diff > 0;
        `;

        return [ query, [] ]
    },
    historicalUniqueDepositors(limit, table) {
        const fQuery = `
        SELECT
            party_id,
            min(bucket) as first_bucket,
            min(timestamp) as first_timestamp
        FROM %I
        GROUP BY party_id
        ORDER BY first_bucket DESC
        LIMIT $1;
        `;

        const query = format(fQuery, table)

        return [ query, [ limit ] ]
    },
    uniqueTraders() {
        const query = `
        SELECT
            count(distinct y.party_id) as unique_traders,
            max(timestamp) as timestamp
        FROM party_data_1d x
        CROSS JOIN LATERAL ( VALUES (x.buyer), (x.seller)) AS y(party_id);
        `;
        
        return [ query, [] ]
    },
    historicalUniqueTraders(limit, table) {
        const fQuery = `
        SELECT
            y.party_id as party_id,
            min(bucket) as first_bucket,
            min(timestamp) as first_timestamp
        FROM %I x
        CROSS JOIN LATERAL ( VALUES (x.buyer), (x.seller)) AS y(party_id)
        GROUP BY y.party_id
        ORDER BY first_bucket DESC
        LIMIT $1;
        `;
        
        const query = format(fQuery, table);

        return [ query, [ limit ] ]
    },
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

module.exports = { asyncQuery, assetQueries, marketQueries, partyQueries };