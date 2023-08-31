const { enums, typeMappings } = reuqire('../../types/enums.js'); 

const payloadParsers = {
    volume: (payload) => {
        const marketId = payload.marketId; // Mandatory
        const partyId = payload.partyId; // Optional

        switch (true) {
            case (marketId != undefined && partyId != undefined): {

                const query = `
                SELECT
                    sum(volume) + sum(self_volume) AS volume,
                    max(timestamp) AS timestamp
                FROM party_data_1d
                WHERE buyer = $1 OR seller = $1 AND market_id = $2;
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
                        max(x.timestamp) AS timestamp
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
                    sum(volume / 10^(d.decimal_places + d.position_decimal_places)) AS volume_usd,
                    max(timestamp) as timestamp
                FROM vols LEFT JOIN d on vols.market_id = d.id;
                `;

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
                    vols.quote_name AS quote_name,
                    sum(volume / 10^(d.decimal_places + d.position_decimal_places)) AS volume_quote,
                    max(timestamp) as timestamp
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
        //  - Accepts the raw data table, the matViewTable prefix, and the time interval.
        //      -- Alternatively this could take the queryType and the interval.
        //  - Returns the interalSize and the string with the table name for the query.
        //      -- In the case of using queryType as an argument, the return values will be
        //         specific to the queryType that is provided.
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

                const query = `
                SELECT
                    market_id,
                    max(timestamp) AS timestamp,
                    sum(volume) AS volume
                FROM market_data_1h
                WHERE bucket::bigint > ((select timestamp from trades order by synth_timestamp desc limit 1) - 86400000000000::bigint)
                AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                GROUP BY market_id;

                WITH main AS (
                    SELECT
                        market_id,
                        max(timestamp) AS timestamp,
                        sum(volume) AS volume
                    FROM market_data_1h
                    WHERE bucket::bigint > ((select timestamp from trades order by synth_timestamp desc limit 1) - 86400000000000::bigint)
                    AND market_id = '2c2ea995d7366e423be7604f63ce047aa7186eb030ecc7b77395eae2fcbffcc5'
                    GROUP BY market_id
                ), missed AS (
                    
                )


                `;


                const params = [ marketId, intervalSize ];

                return [ query, params ];
            }
            case (marketId == undefined): {

                break;
            }
        }




    },
    historicalVolume: null,
    
    openInterest: null,
    historicalOpenInterest: null,

    feesPaid: null,
    feesEarned: null,

    volatilty: null,
    historicalVolatility: null,

    tradeCount: null,
    historicalTradeCount: null,

    averageTradeSize: null,
    historicalAverageTradeSize: null,
    rollingAverageTradeSize: null,
}

const parsePayload = (payload) => {

    parsers[payload.type](payload);

};

const asyncQuery = (query, values, pgPool) => {
    return new Promise((resolve, reject) => {
        
        console.log(query);

        if (values.length == 0) {
            
            pgPool.query(query, (err, result) => {
                if (!err) {
                    console.log(result.rows);
                    resolve(result.rows);
                } else {
                    console.log(err);
                };
            });

        } else {

            pgPool.query(query, values, (err, result) => {
                if (!err) {
                    console.log(result.rows);
                    resolve(result.rows);
                } else {
                    console.log(err);
                };
            });

        }

    });
};

module.exports = { asyncQuery, streamQueries, payloadParsers };