// const { enums, typeMappings } = require('../../types/enums.js');
const { enums, typeMappings } = require('./enums.js');

const payloadMetadataNames = {
    volume: {
        total: ['market_id', 'party_id'],
        historical: ['market_id', 'interval'],
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
        historical: {

        },
        rolling: (payload) => {
            const marketId = payload.marketId;
            const interval = payload.interval;

            const rawDataTable = 'trades';
            const matViewTable = 'market_data';


            // Package this switch statement into it's own function:
            //
            //  - Accepts the raw data table, the matViewTable prefix, and the time interval.
            //      -- Alternatively this could take the queryType and the interval.
            //  - Returns the intervalSize and the string with the table name for the query.
            //      -- In the case of using queryType as an argument, the return values will be
            //         specific to the queryType that is provided.
            //
            //  - Alternatively, the function accepts a list of values that you want it to return
            //    along with the input parameters. Returns the requested values.
            //
            let intervalSize, table;
            switch (interval) {
                case (enums.timeInterval.INTERVAL_ROLLING_5M): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = rawDataTable; // 'trades';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_15M): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_30M): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_1H): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_2H): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_4H): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_6H): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_12H): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_1D): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_3D): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_1W): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                    break;
                }
                case (enums.timeInterval.INTERVAL_ROLLING_1MO): {
                    intervalSize = typeMappings.timeInterval.nanos[interval];
                    table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1d';
                    break;
                }

            }

            switch (true) {
                case (marketId != undefined): {
                    const fQuery = `
                    WITH ts AS (
                        SELECT
                            timestamp
                        FROM trades
                        ORDER BY synth_timestamp DESC
                        LIMIT 1
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_1h x, ts
                        WHERE bucket::bigint > (ts.timestamp - $2::bigint)
                        AND market_id = $1
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts 
                        WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.timestamp - $2::bigint ORDER BY bucket ASC LIMIT 1)
                        AND trades.timestamp >= (ts.timestamp - $2::bigint)
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
                    )
                    SELECT
                        main.market_id,main.timestamp,
                        main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END AS volume,
                        market.quote_name,
                        (main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places) AS volume_quote
                    FROM main LEFT JOIN missed ON main.market_id = missed.market_id
                    LEFT JOIN market ON main.market_id = market.id
                    LEFT JOIN d ON main.market_id = d.id, ts;
                    `;

                    /* `
                    WITH ts AS (
                        SELECT
                            timestamp
                        FROM trades
                        ORDER BY synth_timestamp DESC
                        LIMIT 1
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_1h x, ts
                        WHERE bucket::bigint > (ts.timestamp - 86400000000000::bigint)
                        AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts 
                        WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.timestamp - 86400000000000::bigint ORDER BY bucket ASC LIMIT 1)
                        AND trades.timestamp >= (ts.timestamp - 86400000000000::bigint)
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
                    )
                    SELECT
                        main.market_id,main.timestamp,
                        main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END AS volume,
                        market.quote_name,
                        (main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places) AS volume_quote
                    FROM main LEFT JOIN missed ON main.market_id = missed.market_id
                    LEFT JOIN market ON main.market_id = market.id
                    LEFT JOIN d ON main.market_id = d.id, ts;
                    ` */

                    const query = format(fQuery, table);

                    const params = [ marketId, intervalSize ];

                    return [ query, params ];
                }
                case (marketId == undefined): {
                    const fQuery = `
                    WITH ts AS (
                        SELECT
                            timestamp
                        FROM trades
                        ORDER BY synth_timestamp DESC
                        LIMIT 1
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM %I x, ts
                        WHERE bucket::bigint > (ts.timestamp - $1::bigint)
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts 
                        WHERE trades.timestamp < (select bucket from %I where bucket > ts.timestamp - $1::bigint ORDER BY bucket ASC LIMIT 1)
                        AND trades.timestamp >= (ts.timestamp - $1::bigint)
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
                    LEFT JOIN d ON main.market_id = d.id, ts
                    GROUP BY main.market_id, markets.quote_name;
                    `;

                    /* `
                    WITH ts AS (
                        SELECT
                            timestamp
                        FROM trades
                        ORDER BY synth_timestamp DESC
                        LIMIT 1
                    ), main AS (
                        SELECT
                            x.market_id,
                            max(x.timestamp) AS timestamp,
                            sum(volume) AS volume
                        FROM market_data_1h x, ts
                        WHERE bucket::bigint > (ts.timestamp - 86400000000000::bigint)
                        GROUP BY market_id
                    ), missed AS (
                        SELECT 
                            trades.market_id,
                            sum(size * price) AS volume
                        FROM trades, ts 
                        WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.timestamp - 86400000000000::bigint ORDER BY bucket ASC LIMIT 1)
                        AND trades.timestamp >= (ts.timestamp - 86400000000000::bigint)
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
                    LEFT JOIN d ON main.market_id = d.id, ts
                    GROUP BY main.market_id, markets.quote_name;
                    ` */

                    const query = format(fQuery, table);

                    const params = [ intervalSize ];

                    return [ query, params];
                }
            }
        }
    },
    volume: (payload) => {
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
    assetVolume: (payload) => {
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
                    FROM market_data_5m x LEFT JOIN markets y ON x.market_id = y.id
                    WHERE y.future_settlement_asset = 'bf1e88d19db4b3ca0d1d5bdb73718a01686b18cf731ca26adedf3c8b83802bba'
                    GROUP BY market_id
                ), d as (
                    SELECT
                        id,
                        decimal_places,
                        position_decimal_places
                    FROM markets
                    GROUP BY id
                ) SELECT
                    max(timestamp) as timestamp
                    sum(volume) AS volume,
                    quote_name,
                    sum(volume / 10^(d.decimal_places + d.position_decimal_places)) AS volume_quote
                FROM vols LEFT JOIN d on vols.market_id = d.id;
                `;

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
                    FROM market_data_5m x LEFT JOIN markets y ON x.market_id = y.id
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

                return [ query, params ]
            }
        }

    },
    rollingVolume: (payload) => {
        const marketId = payload.marketId;
        const interval = payload.interval;

        const rawDataTable = 'trades';
        const matViewTable = 'market_data';


        // Package this switch statement into it's own function:
        //
        //  - Accepts the raw data table, the matViewTable prefix, and the time interval.
        //      -- Alternatively this could take the queryType and the interval.
        //  - Returns the intervalSize and the string with the table name for the query.
        //      -- In the case of using queryType as an argument, the return values will be
        //         specific to the queryType that is provided.
        //
        //  - Alternatively, the function accepts a list of values that you want it to return
        //    along with the input parameters. Returns the requested values.
        //
        let intervalSize, table;
        switch (interval) {
            case (enums.timeInterval.INTERVAL_ROLLING_5M): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = rawDataTable; // 'trades';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_15M): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_30M): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_1H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_2H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_4H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_6H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_5m';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_12H): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_1D): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_3D): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_1W): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1h';
                break;
            }
            case (enums.timeInterval.INTERVAL_ROLLING_1MO): {
                intervalSize = typeMappings.timeInterval.nanos[interval];
                table = matViewTable + typeMappings.timeInterval.queryTableSuffix[interval]; // table = 'market_data_1d';
                break;
            }

        }

        switch (true) {
            case (marketId != undefined): {
                const fQuery = `
                WITH ts AS (
                    SELECT
                        timestamp
                    FROM trades
                    ORDER BY synth_timestamp DESC
                    LIMIT 1
                ), main AS (
                    SELECT
                        x.market_id,
                        max(x.timestamp) AS timestamp,
                        sum(volume) AS volume
                    FROM market_data_1h x, ts
                    WHERE bucket::bigint > (ts.timestamp - $2::bigint)
                    AND market_id = $1
                    GROUP BY market_id
                ), missed AS (
                    SELECT 
                        trades.market_id,
                        sum(size * price) AS volume
                    FROM trades, ts 
                    WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.timestamp - $2::bigint ORDER BY bucket ASC LIMIT 1)
                    AND trades.timestamp >= (ts.timestamp - $2::bigint)
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
                )
                SELECT
                    main.market_id,main.timestamp,
                    main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END AS volume,
                    market.quote_name,
                    (main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places) AS volume_quote
                FROM main LEFT JOIN missed ON main.market_id = missed.market_id
                LEFT JOIN market ON main.market_id = market.id
                LEFT JOIN d ON main.market_id = d.id, ts;
                `;

                /* `
                WITH ts AS (
                    SELECT
                        timestamp
                    FROM trades
                    ORDER BY synth_timestamp DESC
                    LIMIT 1
                ), main AS (
                    SELECT
                        x.market_id,
                        max(x.timestamp) AS timestamp,
                        sum(volume) AS volume
                    FROM market_data_1h x, ts
                    WHERE bucket::bigint > (ts.timestamp - 86400000000000::bigint)
                    AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    GROUP BY market_id
                ), missed AS (
                    SELECT 
                        trades.market_id,
                        sum(size * price) AS volume
                    FROM trades, ts 
                    WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.timestamp - 86400000000000::bigint ORDER BY bucket ASC LIMIT 1)
                    AND trades.timestamp >= (ts.timestamp - 86400000000000::bigint)
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
                )
                SELECT
                    main.market_id,main.timestamp,
                    main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END AS volume,
                    market.quote_name,
                    (main.volume + CASE WHEN missed.volume IS NOT NULL THEN missed.volume ELSE 0 END) / 10^(d.decimal_places + d.position_decimal_places) AS volume_quote
                FROM main LEFT JOIN missed ON main.market_id = missed.market_id
                LEFT JOIN market ON main.market_id = market.id
                LEFT JOIN d ON main.market_id = d.id, ts;
                ` */

                const query = format(fQuery, table);

                const params = [ marketId, intervalSize ];

                return [ query, params ];
            }
            case (marketId == undefined): {
                const fQuery = `
                WITH ts AS (
                    SELECT
                        timestamp
                    FROM trades
                    ORDER BY synth_timestamp DESC
                    LIMIT 1
                ), main AS (
                    SELECT
                        x.market_id,
                        max(x.timestamp) AS timestamp,
                        sum(volume) AS volume
                    FROM %I x, ts
                    WHERE bucket::bigint > (ts.timestamp - $1::bigint)
                    GROUP BY market_id
                ), missed AS (
                    SELECT 
                        trades.market_id,
                        sum(size * price) AS volume
                    FROM trades, ts 
                    WHERE trades.timestamp < (select bucket from %I where bucket > ts.timestamp - $1::bigint ORDER BY bucket ASC LIMIT 1)
                    AND trades.timestamp >= (ts.timestamp - $1::bigint)
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
                LEFT JOIN d ON main.market_id = d.id, ts
                GROUP BY main.market_id, markets.quote_name;
                `;

                /* `
                WITH ts AS (
                    SELECT
                        timestamp
                    FROM trades
                    ORDER BY synth_timestamp DESC
                    LIMIT 1
                ), main AS (
                    SELECT
                        x.market_id,
                        max(x.timestamp) AS timestamp,
                        sum(volume) AS volume
                    FROM market_data_1h x, ts
                    WHERE bucket::bigint > (ts.timestamp - 86400000000000::bigint)
                    GROUP BY market_id
                ), missed AS (
                    SELECT 
                        trades.market_id,
                        sum(size * price) AS volume
                    FROM trades, ts 
                    WHERE trades.timestamp < (select bucket from market_data_1h where bucket > ts.timestamp - 86400000000000::bigint ORDER BY bucket ASC LIMIT 1)
                    AND trades.timestamp >= (ts.timestamp - 86400000000000::bigint)
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
                LEFT JOIN d ON main.market_id = d.id, ts
                GROUP BY main.market_id, markets.quote_name;
                ` */

                const query = format(fQuery, table);

                const params = [ intervalSize ];

                return [ query, params];
            }
        }

    },
    historicalVolume: null,
    
    openInterest: null,
    historicalOpenInterest: null,

    volatilty: null,
    historicalVolatility: null,

    tradeCount: null,
    historicalTradeCount: null,

    averageTradeSize: null,
    historicalAverageTradeSize: null,
    rollingAverageTradeSize: null,

    feesPaid: null,
    feesEarned: null,
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