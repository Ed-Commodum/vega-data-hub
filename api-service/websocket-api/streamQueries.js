const streamQueries = {
    volume() {
        const query = ``;

        return [ query, [] ]
    },
    rollingVolume() {

    },
    volatility() {

    },

}

const parsers = {
    volume: (payload) => {
        const marketId = payload.marketId;
        const partyId = payload.partyId;

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

                12815327n + 162283620337n + 10000422903325n + 2449575184160n + 6567321912453n + 2896950482534n + 515794935811n

                return [ query, params ]
            }
            case (assetId = undefined): {

                const query = `
                `;

                return [ query, params ]
            }
        }

    },
    rollingVolume: null,
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

module.exports = { asyncQuery, streamQueries };