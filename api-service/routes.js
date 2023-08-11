const { asyncQuery, assetQueries, marketQueries, partyQueries } = require('./queries');

const applyHeaders = (res) => {

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    return res
} 

const routes = (app, pgPool) => {

    /**
     * @openapi
     * /party-data:
     *   get:
     *     tags:
     *       - Party
     *     description: Responds with some up to date data about a party.
     *     parameters:
     *       - in: query
     *         name: partyId
     *         required: true
     *         schema:
     *           type: string
     *         description: The partyId to query. eg; 54abda08fea350d474516914ef2ca98aae31aa8bb8f4407dc01954f6f5999040, 64c4acf58babbcf40bd5fc9393c368eb867cca50815226cc3df52d55011cd53e
     *     responses:
     *       '200':
     *         description: A JSON object containing party data
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 partyId:
     *                   type: string
     *                 numTrades:
     *                   type: object
     *                   properties:
     *                     regular:
     *                       type: integer
     *                       format: int64
     *                     self:
     *                       type: integer
     *                       format: int64
     *                     total:
     *                       type: integer
     *                       format: int64
     *                 volume:
     *                   type: object
     *                   properties:
     *                     regular:
     *                       type: integer
     *                       format: int64
     *                     self:
     *                       type: integer
     *                       format: int64
     *                     total:
     *                       type: integer
     *                       format: int64
     *                 feesPaid:
     *                   type: string
     *                 positions:
     *                   type: array
     * 
     */
    app.get('/party-data', async (req, res) => {
        // Volume, numTrades, fees paid, open positions.
    
        const partyId = req.query.partyId;
        const result = {
            partyId: partyId,
            totals: { numTrades: 0, volume: "0", feesPaid: "0" },
            markets: []
        };

        /*
        Change to this:
        {
          "partyId": "party-id-1",
          "totals": { "numTrades": 1655, "volume": 165775, "feesPaid": "518435294" },
          "markets": [
            {
              "marketId": "market-id-1",
              "numTrades": { "regular": 324, "self": 11, "combined": 335 },
              "volume": { "regular": 63452, "self": 343, "combined": 63795 },
              "feesPaid": { "liquidity": "2985728", "maker": "34234", "infrastructure": "5234266", "combined": "8254228" }
            }
          ]
        }
        */

        res = applyHeaders(res) 

        if (!partyId) {
            res.send(result);
            // res.sendStatus(404);
            return;
        };
    

        // Test to see if party is in the necessary tables: party_data
        const checkRes = await asyncQuery('checkPartyId', ...partyQueries.countPartyData(partyId), pgPool);
        const count = checkRes[1][0].count;

        if (!count || count == 0) {
            res.send(result);
            // res.sendStatus(404);
            return;
        }

        const running = [];

        for (let [type, query, values ] of [
            [ 'numTrades', ...partyQueries.numTrades(partyId) ],
            [ 'volume', ...partyQueries.volume(partyId) ],
            [ 'feesPaid', ...partyQueries.feesPaid(partyId) ] ]) {
            
            running.push(asyncQuery(type, query, values, pgPool));
        };
    
        const results = await Promise.all(running);
        console.dir(results, { depth: null });
    
        for (let i=0; i<results[0][1].length; i++) {
            const market = {
                marketId: "",
                numTrades: { regular: "", self: "", combined: "" },
                volume: { regular: "", self: "", combined: "" },
                feesPaid: { liquidity: "", maker: "", infrastructure: "", combined: "" }
            };

            market.marketId = results[0][1][i].market_id;
            
            market["numTrades"].regular = results[0][1][i].num_trades;
            market["numTrades"].self = results[0][1][i].num_self_trades;
            market["numTrades"].combined = Number(market.numTrades.regular) + Number(market.numTrades.self);

            market["volume"].regular = results[1][1][i].volume;
            market["volume"].self = results[1][1][i].self_volume;
            market["volume"].combined = (BigInt(market.volume.regular) + BigInt(market.volume.self)).toString();

            market["feesPaid"].liquidity = results[2][1][i].fee_liquidity;
            market["feesPaid"].maker = results[2][1][i].fee_maker;
            market["feesPaid"].infrastructure = results[2][1][i].fee_infrastructure;
            market["feesPaid"].combined = results[2][1][i].fee_combined;

            result.markets.push(market);
        }

        for (let market of result.markets) {
            result.totals.numTrades += Number(market.numTrades.combined);
            result.totals.volume = (BigInt(result.totals.volume) + BigInt(market.volume.combined)).toString();
            result.totals.feesPaid = (BigInt(result.totals.feesPaid) + BigInt(market.feesPaid.combined)).toString();
        }
    
        res.send(result);
    
    });
    
    /**
     *  @openapi
     *  /party-risk:
     *    get:
     *      tags:
     *        - Party
     *      description: Responds with current position risk metrics for a party
     *      parameters:
     *        - in: query
     *          name: partyId
     *          required: true
     *          schema:
     *            type: string
     *          description: The partyId to query. eg; 54abda08fea350d474516914ef2ca98aae31aa8bb8f4407dc01954f6f5999040, 64c4acf58babbcf40bd5fc9393c368eb867cca50815226cc3df52d55011cd53e
     *      responses:
     *        '200':
     *          description: A JSON object containing a party's positions and risk metrics
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  partyId:
     *                    type: string
     *                  positions:
     *                    type: array
     *                    items:
     *                      type: object
     *                      properties:
     *                        marketId:
     *                          type: string
     *                        openVolume:
     *                          type: string
     *                        varInterval:
     *                          type: string
     *                        var:
     *                          type: string
     * 
     */
    app.get('/party-risk', async (req, res) => {
    
        const partyId = req.query.partyId;

        res = applyHeaders(res) 
    
        const result = {
            partyId: partyId,
            positions: []
        }

        if (!partyId) {
            res.send(result);
            // res.sendStatus(404);
            return;
        };
    
        // Get positions
        const data = await asyncQuery('positions', ...partyQueries.openPositions(partyId), pgPool);
        const positions = data[1];
        console.log(positions);
    
        // Get VaR for each market where there is a position
        // Get most recent market price for each position
        const varsRunning = [];
        const pricesRunning = [];
    
        for (let position of positions) {
            const marketId = position.market_id;
            const interval = "1h";
            const bucketSize = "3600000000000";
            const confidenceInterval = 0.95;
    
            varsRunning.push(asyncQuery('var', ...marketQueries.valueAtRisk(marketId, interval, bucketSize, confidenceInterval), pgPool));
            pricesRunning.push(asyncQuery('price', ...marketQueries.mostRecentPrice(marketId), pgPool));
        };
    
        const vars = await Promise.all(varsRunning);
        const prices = await Promise.all(pricesRunning);
    
        for (let i=0; i<positions.length; i++ ) {
            const pos = {};
    
            pos['marketId'] = positions[i].market_id;
            pos['openVolume'] = positions[i].open_volume;
            pos['varInterval'] = "1h";
    
            console.log(vars);
            console.log(vars[i][1][0]['p_cont']);
            console.log(Number(vars[i][1][0]['p_cont']));
    
            pos['var'] = `${(Number(vars[i][1][0]['p_cont'])*100).toFixed(2)}%`;
    
            result.positions.push(pos);
        }
    
        console.log(result);
        res.send(result);
    
        // Calculate VaR in settlement asset units.
    
    
    
    
    });

    /**
     *  @openapi
     *  /market-data:
     *    get:
     *      tags:
     *        - Market
     *      description: Responds with some up to date data about a market
     *      parameters:
     *        - in: query
     *          name: marketId
     *          required: true
     *          schema:
     *            type: string
     *          description: The marketId to query. eg; 0f4d06abbf87b989f613bf3a651842b88874d70c4b8b3161c7257837447c34f9, bf48b3d7919b0ca281f39fe696365fe829f5d4b3b9ab4ea18ccade89252de4b8
     *      responses:
     *        '200':
     *          description: A JSON object containing market data
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  marketId:
     *                    type: string
     *                  numTrades:
     *                    type: integer
     *                    format: int64
     *                  fees:
     *                    type: object
     *                    properties:
     *                      total:
     *                        type: integer
     *                        format: int64
     *                      infrastructure:
     *                        type: integer
     *                        format: int64
     *                  openInterest:
     *                    type: object
     *                    properties:
     *                      timestamp:
     *                        type: string
     *                      value:
     *                        type: integer
     *                        format: int64
     * 
     * 
     */
    app.get('/market-data' , async (req, res) => {
        // Volume, numTrades, fees paid, open interest.
    
        const marketId = req.query.marketId;

        res = applyHeaders(res) 

        const result = {
            marketId: marketId,
            numTrades: 0,
            volume: 0,
            feesTotal: 0,
            feesInfrastructure: 0,
            openInterest: 0,
            timestamp: ""
        }

        /*
        Change to this:
        {
          "marketId": "market-id-1",
          "numTrades": 0,
          "feesTotal": 0,
          "feesInfrastructure": 0,
          "openInterest": 0,
          "timestamp": "string"
        }
        */

        if (!marketId) {
            res.send(result);
            // res.sendStatus(404);
            return;
        };
    
        const running = [];
    
        for (let [type, query, values] of [
            [ 'numTrades', ...marketQueries.totalNumTrades(marketId) ],
            [ 'volume', ...marketQueries.totalVolume(marketId) ],
            [ 'fees', ...marketQueries.totalFees(marketId) ],
            [ 'openInterest', ...marketQueries.openInterest(marketId) ] ]) {
            
            running.push(asyncQuery(type, query, values, pgPool));
        };
    
        const results = await Promise.all(running);
        console.log(results);
    
        if (results[0][1].length != 0) {
            result['numTrades'] = results[0][1][0].numTrades;
        };
        if (results[1][1].length != 0) {
            result['volume'] = results[1][1][0].volume;
        };
        if (results[2][1].length != 0) {
            result['feesTotal'] = results[2][1][0].total_fees;
            result['feesInfrastructure'] = results[2][1][0].infrastructure_fees;
        };
            if (results[3][1].length != 0) {
            result['openInterest'] = results[3][1][0].first_open_interest;
            result['timestamp'] = results[3][1][0].bucket;  
        };
        
        res.send(result);
    });
    
    /**
     *  @openapi
     *  /market-moving-averages:
     *    get:
     *      tags:
     *        - Market
     *      description: Responds with some moving averages in descending time order.
     *      parameters:
     *        - in: query
     *          name: marketId
     *          required: true
     *          schema:
     *            type: string
     *          description: The marketId to query. eg; 0f4d06abbf87b989f613bf3a651842b88874d70c4b8b3161c7257837447c34f9, bf48b3d7919b0ca281f39fe696365fe829f5d4b3b9ab4ea18ccade89252de4b8
     *        - in: query
     *          name: interval
     *          required: true
     *          schema:
     *            type: string
     *          description: The time interval to query.
     *        - in: query
     *          name: limit
     *          required: false
     *          schema:
     *            type: integer
     *          description: The number of records to return.
     *      responses:
     *        '200':
     *          description: A JSON object containing the moving averages
     *          content:
     *            application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  marketId:
     *                    type: string
     *                  interval:
     *                    type: string
     *                  sma50:
     *                    type: array
     *                    items:
     *                      type: number
     *                  sma100:
     *                    type: array
     *                    items:
     *                      type: number
     *                  sma200:
     *                    type: array
     *                    items:
     *                      type: number
     * 
     * 
     */
    app.get('/market-moving-averages', async (req, res) => {
    
        const marketId = req.query.marketId;
        let limit = 10;
        const interval = "5m"; 
    
        res = applyHeaders(res) 

        const result = {
          marketId: marketId,
          interval: interval,
          sma50: [],
          sma100: [],
          sma200: []
        }

        if (!marketId) {
            res.send(result);
            return;
        };
    
        let bucketSize = "300000000000";
    
        console.log(...marketQueries.simpleMovingAverages(marketId, interval, limit, bucketSize));
    
        const data = await asyncQuery('simpleMovingAverages', ...marketQueries.simpleMovingAverages(marketId, interval, limit, bucketSize), pgPool);
    
        for (let item of data[1]) {
            result.sma50.push(Number(item.sma_50));
            result.sma100.push(Number(item.sma_100));
            result.sma200.push(Number(item.sma_200));
        }
    
        console.log(result);
        res.send(result);
    });
    
    // app.get('/party-fees-total', (req, res) => {
    
    //     const partyId = req.query.partyId;
    //     const noArgumentRes = "Please provide a partyId.\n"
    
    //     if (!partyId) {
    //         res.send(noArgumentRes);
    //     };
    
    //     const query = `
    //     SELECT y.party, SUM(y.fee)
    //     FROM fees_paid_1d x
    //     CROSS JOIN LATERAL ( VALUES (x.buyer, x.buyer_fee)
    //                               , (x.seller, x.seller_fee)) as y(party, fee)
    //     WHERE party = '${partyId}'
    //     GROUP BY party;
    //     `
    
    //     pgPool.query(query, (err, result) => {
    //         if (!err) {
    //             console.log(result);
    //             res.send(result);
    
    //         } else {
    //             console.log(err);
    //         }
    //     });
    // });

    /* --------------- New APIs --------------- */

    /*

    1b-1 

    Volume 
    Transaction history ( Deposit/Withdrawal History )
    Fees paid 
    Risk metrics for open positions ( VaR and ES )
    Moving Averages 
    Open Interest 

    1b-2 

    Taker data long and short 
    Historical volatilities, eg; simple, EWMA, GARCH 
    Liquidity measures, eg; book depth, book snapshots 
    Total market leverage, eg; OI against collateral deposits 
    Estimated liquidation levels 
    Performance metrics for positions, eg: Sharpe Ratio, Sortino Ratio, alpha, beta, R-squared
    Individual position and portfolio historical PnLs ( From ledger movements )

    */

    app.get('/decimals', async (req, res) => {
        // Accepts a marketId (optional) and returns the decimal information for that market. If the marketId is
        // omitted then the decimal information for all markets is returned.

        const result = {
            decimals: [
                {
                    marketId: "",
                    settlementAsset: "",
                    quoteName: "",
                    priceDecimals: "",
                    positionDecimals: ""
                }
            ]
        };

        res = applyHeaders(res) 

        const marketId = req.query.marketId;
        
        switch (true) {
            
            case (marketId != undefined): {
                // Return data for one market
                const marketRes = await asyncQuery('market-decimals', ...marketQueries.getDecimals(marketId), pgPool);
                if (!marketRes[1][0]) break;
                const assetRes = await asyncQuery('asset-decimals', ...assetQueries.getDecimals(marketRes[1][0].settlementAsset), pgPool);
                if (!assetRes[1][0]) break;

                result.decimals[0].marketId = marketRes[1][0].market_id;
                result.decimals[0].settlementAsset = marketRes[1][0].future_settlement_asset;
                result.decimals[0].instrumentCode = marketRes[1][0].instrument_code;
                result.decimals[0].instrumentName = marketRes[1][0].instrument_name;
                result.decimals[0].assetDecimals = assetRes[1][0]
                result.decimals[0].quoteName = marketRes[1][0].future_quote_name;
                result.decimals[0].priceDecimals = marketRes[1][0].decimal_places;
                result.decimals[0].positionDecimals = marketRes[1][0].position_decimal_places;

                break;
            }

            case (marketId == undefined): {
                // Return data for all markets
                const marketRes = await asyncQuery('market-decimals', ...marketQueries.getAllDecimals(), pgPool);
                const assetRes = await asyncQuery('asset-decimals', ...assetQueries.getAllDecimals(), pgPool);
                if (!marketRes[1][0]) break;
                if (!assetRes[1][0]) break;
                const assetDecimals = {};
                assetRes[1].forEach((asset) => { assetDecimals[asset.id] = asset.decimals });

                result.decimals.length = 0
                for (let market of marketRes[1]) {
                    result.decimals.push(
                        {
                            marketId: market.market_id,
                            settlementAsset: market.future_settlement_asset,
                            instrumentCode: market.instrument_code,
                            instrumentName: market.instrument_name,
                            assetDecimals: assetDecimals[market.future_settlement_asset],
                            quoteName: market.future_quote_name,
                            priceDecimals: market.decimal_places,
                            positionDecimals: market.position_decimal_places

                        }
                    )
                }
                
                break;
            }
        }

        res.send(result);

    });

    app.get('/asset-decimals', async (req, res) => {
        // Accepts an assetId and returns the decimals for that asset. Omitting the assetId will
        // return the decimals for all registered assets.

        const result = {
            assetDecimals: [
                {
                    assetId: "",
                    code: "",
                    decimals: 0
                }
            ]
        }

        res = applyHeaders(res) 

        const assetId = req.query.assetId;

        switch (true) {
            case (assetId != undefined): {
                
                const res = await asyncQuery('asset-decimals', ...assetQueries.getDecimals(assetId), pgPool);
                if (!res[1][0]) break;

                result.assetDecimals[0].assetId = assetId;
                result.assetDecimals[0].code = res[1][0].code;
                result.assetDecimals[0].decimals = res[1][0].asset_decimals;

                break;
            }
            case (assetId == undefined): {

                const res = await asyncQuery('asset-decimals', ...assetQueries.getAllDecimals(), pgPool);
                if (!res[1][0]) break;

                result.assetDecimals.length = 0;
                for (let asset of res[1]) {
                    result.assetDecimals.push(
                        {
                            assetId: asset.id,
                            code: asset.code,
                            decimals: asset.decimals
                        }
                    )
                }
                
                break;
            }
        }

        res.send(result);
    })

    app.get('/markets', async (req, res) => {

    });

    app.get('/active-markets', async (req, res) => {
        // Accepts no parameters. Returns a list of all active markets.

        const result = {
            activeMarkets: [
                {
                    marketId: "",
                    instrumentCode: "",
                    settlementAsset: "",
                    quoteName: "",
                    priceDecimals: "",
                    positionDecimals: ""
                }
            ]
        };

        res = applyHeaders(res);

        const queryRes = await asyncQuery('activeMarkets', ...marketQueries.activeMarkets(), pgPool);

        if (!queryRes[1][0]) {
            return res.send(result);
        }

        result.activeMarkets.length = 0;
        for (let market of queryRes[1]) {
            result.activeMarkets.push(
                {
                    marketId: market.id,
                    instrumentCode: market.instrument_code,
                    settlementAsset: market.future_settlement_asset,
                    quoteName: market.future_quote_name,
                    priceDecimals: market.decimal_places,
                    positionDecimals: market.position_decimal_places
                }
            );
        }

        res.send(result);
    });

    // ---------- TEST AGAIN ---------- //
    app.get('/volume', async (req, res) => {
        // Takes a marketId (optional) and a partyId (optional) and returns the most recent cumulative volume
        // for the party/market. If no party or market is specified then the global cumulative volume is returned.

        // Empty result. To be returned if party or market not found
        // const result = {
        //     timestamp: "0", // Should be Vega time
        //     volume: "0"
        // }

        const result = {
            volumes: [
                {
                    marketId: "",
                    partyId: "",
                    timestamp: "",
                    volume: ""
                }
            ]
        }

        // Set headers
        res = applyHeaders(res) 

        const marketId = req.query.marketId;
        const partyId = req.query.partyId;

        switch (true) {
            case (marketId != undefined && partyId != undefined): {
                // Get volume for party on market
                
                const res = await asyncQuery('volume', ...partyQueries.volume(partyId, marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].volume) {
                    break;
                };

                result.volumes[0].marketId = marketId;
                result.volumes[0].partyId = partyId;
                result.volumes[0].timestamp = res[1][0].timestamp;
                result.volumes[0].volume = (BigInt(res[1][0].volume) + BigInt(res[1][0].self_volume)).toString();

                break;
            };

            case (marketId != undefined && partyId == undefined): {
                // Get volume for market

                const res = await asyncQuery('volume', ...marketQueries.volume(marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].volume) {
                    break;
                };

                result.volumes[0].marketId = marketId;
                result.volumes[0].partyId = "*";
                result.volumes[0].timestamp = res[1][0].timestamp;
                result.volumes[0].volume = res[1][0].volume;

                break;
            };

            case (marketId == undefined && partyId != undefined): {
                // Get total volume for party

                // ------------------------------ REFACTOR ------------------------------ //
                // This API needs to be refactored to receive volumes grouped by marketId
                // then account for differing settlement assets between markets. Each Market
                // will also have a differing number of price and position decimal places.
                // ---------------------------------------------------------------------- //

                // ------------------------ REFACTORING COMPLETE ------------------------ //
                // ---------------------------- TODO TESTING ---------------------------- //

                const res = await asyncQuery('volume', ...partyQueries.totalVolume(partyId), pgPool);

                if (!res[1][0]) {
                    break;
                };

                result.volumes.shift();

                for (let market of res[1]) {
                    result.volumes.push(
                        {
                            marketId: market.market_id,
                            partyId: partyId,
                            timestamp: market.timestamp,
                            volume: (BigInt(market.volume) + BigInt(market.self_volume)).toString()
                        }
                    )
                }

                break;
            };

            case (marketId == undefined && partyId == undefined): {
                // Get total volume across all markets

                // ------------------------------ REFACTOR ------------------------------ //
                // This API needs to be refactored to receive all market volumes separately
                // then account for differing settlement assets between markets. Each Market
                // will also have a differing number of price and position decimal places.
                // ---------------------------------------------------------------------- //

                // ------------------------ REFACTORING COMPLETE ------------------------ //
                // ---------------------------- TODO TESTING ---------------------------- //

                const res = await asyncQuery('volume', ...marketQueries.totalVolume(), pgPool);

                if (!res[1][0]) {
                    break
                };

                result.volumes.shift();

                for (let market of res[1]) {
                    result.volumes.push(
                        {
                            marketId: market.market_id,
                            partyId: "*",
                            timestamp: market.timestamp,
                            volume: market.volume
                        }
                    );
                }

                break;
            }

        }

        res.send(result);
    });

    // ---------- UNTESTED ---------- //
    app.get('/historical-volume', async (req, res) => {
        // Accepts a partyId (optional), a marketId (optional), and a time interval. Returns a historical time series
        // with data for the requested party and marketId. 

        const result = {
            volumes: [
                {
                    partyId: "",
                    marketId: "",
                    interval: "",
                    timestamp: "0",
                    data: [
                        { timeBucket: "0", volume:"0" }
                    ]
                    
                }
            ]
        };

        res = applyHeaders(res) 

        const args = req.query;
        const expectedArgs = ['partyId', 'marketId', 'interval'];
        const defaultArgs = { partyId: undefined, marketId: undefined, interval: "INTERVAL_1D" };

        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        const [ partyId, marketId, interval, limit ] =  [ args.partyId, args.marketId, args.interval, 1000 ]
        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];
        const validMarkets = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);
        console.log(validMarkets);
        console.log(!validMarkets.includes(marketId));
        console.log(marketId);
        if (!validIntervals.includes(interval)) return res.send(result);
        if (!validMarkets.includes(marketId) && marketId != undefined) return res.send(result);
        // if (!partyId) return res.send(result);

        let partyTable, marketTable, bucketSize; 
        switch (interval) {
            
            case ('INTERVAL_5M') : {
                partyTable = 'party_data_5m';
                marketTable = 'market_data_5m';
                bucketSize = '300000000000';
                break;
            };

            case ('INTERVAL_1H') : {
                partyTable = 'party_data_1h';
                marketTable = 'market_data_1h';
                bucketSize = '3600000000000';
                break;
            };

            case ('INTERVAL_1D') : {
                partyTable = 'party_data_1d';
                marketTable = 'market_data_1d';
                bucketSize = '86400000000000';
                break;
            };
        }

        switch (true) {
            case (marketId != undefined && partyId != undefined): {
                // Get volume for party on market
                const res = await asyncQuery('historicalVolume', ...partyQueries.historicalVolume(partyId, marketId, bucketSize, limit, partyTable), pgPool);

                console.log(res);

                if (!res[1][0]) break;

                result.volumes[0].partyId = partyId;
                result.volumes[0].marketId = marketId;
                result.volumes[0].interval = interval;
                result.volumes[0].timestamp = res[1][0].timestamp;
                result.volumes[0].data.length = 0;
                for (let datum of res[1]) {
                    result.volumes[0].data.push(
                        {
                            timeBucket: datum.bucket,
                            volume: (BigInt(datum.volume) + BigInt(datum.self_volume)).toString()
                        }
                    )
                };

                break;
            };

            case (marketId != undefined && partyId == undefined): {
                // Get volume for market
                const res = await asyncQuery('historicalVolumeGF', ...marketQueries.historicalVolumeGF(marketId, bucketSize, limit, marketTable), pgPool);

                console.log(res);

                if (!res[1][0]) break;

                result.volumes[0].marketId = marketId;
                result.volumes[0].partyId = "*";
                result.volumes[0].interval = interval;
                result.volumes[0].timestamp = res[1][0].timestamp_gf;
                result.volumes[0].data.length = 0;
                for (let datum of res[1]) {
                    result.volumes[0].data.push(
                        {
                            timeBucket: datum.bucket_gf,
                            volume: datum.volume_gf
                        }
                    )
                }

                break;
            };

            case (marketId == undefined && partyId != undefined): {
                // Get all volumes for party

                // const res = await asyncQuery('historical-volume', ...partyQueries.allHistoricalVolumes(partyId, bucketSize, limit, partyTable), pgPool);
                // The above query won't work because postgres GROUP BY treats NULL as a group, this is a problem because
                // time_bucket_gapfill creates rows that contain NULL values. To rectify this problem we can use the
                // partyQueries.historicalVolume() query instead, but we will have to call it once for each market.
                const marketIds = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);
                
                const responses = [];
                for (let marketId of marketIds) {
                    const prom = asyncQuery('historicalVolume', ...partyQueries.historicalVolume(partyId, marketId, bucketSize, limit, partyTable), pgPool);
                    responses.push({ content: prom, marketId: marketId });
                }

                for (let res of responses) {
                    console.log(res.content);
                    console.log(res.marketId);
                    const market = { marketId: res.marketId, res: await res.content };
                    if (!market.res[1][0]) continue;
                    result.volumes.push(
                        {
                            partyId: partyId,
                            marketId: market.marketId,
                            interval: interval,
                            timestamp: market.res[1][0].timestamp,
                            data: market.res[1].map((elem) => ({ timeBucket: elem.bucket, volume: (BigInt(elem.volume) + BigInt(elem.self_volume)).toString() }))
                        }
                    );
                }
                result.volumes.shift();

                break;
            };

            case (marketId == undefined && partyId == undefined): {
                // Get volumes across all markets

                const marketIds = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);
                
                const responses = [];
                for (let marketId of marketIds) {
                    const prom = asyncQuery('historicalVolume', ...marketQueries.historicalVolume(marketId, limit, marketTable), pgPool);
                    responses.push({ content: prom, marketId: marketId });
                }

                for (let res of responses) {
                    console.log(res.content);
                    console.log(res.marketId);
                    const market = { marketId: res.marketId, res: await res.content };
                    if (!market.res[1][0]) continue;
                    result.volumes.push(
                        {
                            partyId: "*",
                            marketId: market.marketId,
                            interval: interval,
                            timestamp: market.res[1][0].timestamp,
                            data: market.res[1].map((elem) => ({ timeBucket: elem.bucket, volume: elem.volume }))
                        }
                    );
                }
                result.volumes.shift();

                break;
            }

        }

        res.send(result);
    });

    // ---------- UNTESTED ---------- //
    app.get('/24h-volume', async (req, res) => {
        // Accepts a marketId (optional) and returns the amount of volume traded on that market in the
        // past 24h, omitting the marketId will return values for all markets.

        const result = {
            volumes: [
                {
                    marketId: "",
                    timestamp: "0",
                    volume: "0"
                }
            ]
        }

        res = applyHeaders(res) 

        const marketId = req.query.marketId;

        switch (true) {
            case (marketId != undefined): {

                const res = await asyncQuery('24hVolume', ...marketQueries.twentyFourHourVolume(marketId) , pgPool)
                
                console.log(res)
                if (!res[1][0]) break;
                
                result.volumes[0].marketId = marketId;
                result.volumes[0].timestamp = res[1][0].timestamp;
                result.volumes[0].volume = res[1][0].volume;

                break;
            }
            case (marketId == undefined): {

                const res = await asyncQuery('24hVolume', ...marketQueries.allTwentyFourHourVolumes() , pgPool)
                
                console.log(res)
                if (!res[1][0]) break;
                
                for (let vol of res[1]) {
                    result.volumes.push(
                        {
                            marketId: vol.marketId,
                            timestamp: vol.timestamp,
                            volume: vol.volume
                        }
                    )
                }

                break;
            }
        }

        res.send(result);

    })

    // ---------- TEST AGAIN ---------- //
    app.get('/trade-count', async (req, res) => {
        // Takes a marketId (optional) and a partyId (optional) and returns the most recent count of trades for
        // that party/market. If no party or market is specified then the global count of trades is returned.

        // const result = {
        //     timestamp: "0",
        //     tradeCount: "0"
        // };
        const result = {
            tradeCounts: [
                {
                    marketId: "",
                    partyId: "",
                    timestamp: "0",
                    tradeCount: "0"
                }
            ]
        }

        res = applyHeaders(res) 

        const marketId = req.query.marketId;
        const partyId = req.query.partyId;

        console.log(req.query);

        switch (true) {

            case (marketId != undefined && partyId != undefined): {
                // Get count of trades for party on market
                
                const res = await asyncQuery('tradeCount', ...partyQueries.numTrades(partyId, marketId), pgPool);

                console.log(res);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.tradeCounts[0].marketId = marketId;
                result.tradeCounts[0].partyId = partyId;
                result.tradeCounts[0].timestamp = res[1][0].timestamp;
                result.tradeCounts[0].tradeCount = (BigInt(res[1][0].num_trades) + BigInt(res[1][0].num_self_trades)).toString();

                break;
            };

            case (marketId != undefined && partyId == undefined): {
                // Get count of trades for market

                const res = await asyncQuery('tradeCount', ...marketQueries.numTrades(marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.tradeCounts[0].marketId = marketId;
                result.tradeCounts[0].partyId = "*";
                result.tradeCounts[0].timestamp = res[1][0].timestamp;
                result.tradeCounts[0].tradeCount = res[1][0].num_trades;

                break;
            };

            case (marketId == undefined && partyId != undefined): {
                // Get count of trades for party
                
                const res = await asyncQuery('tradeCount', ...partyQueries.allNumTrades(partyId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.tradeCounts.length = 0;
                for (let market of res[1][0]) {
                    result.tradeCounts.push({
                        marketId: market.market_id,
                        partyId: partyId,
                        timestamp: market.timestamp,
                        tradeCount: (BigInt(market.num_trades) + BigInt(market.num_self_trades)).toString()
                    });
                };

                break;
            };

            case (marketId == undefined && partyId == undefined): {
                // Get global count of trades

                const res = await asyncQuery('tradeCount', ...marketQueries.allNumTrades(), pgPool);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.tradeCounts.length = 0;
                for (let market of res[1]) {
                    result.tradeCounts.push({
                        marketId: market.market_id,
                        partyId: '*',
                        timestamp: market.timestamp,
                        tradeCount: market.num_trades
                    });
                };

                break;
            };

        }
        
        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/historical-trade-count', async (req, res) => {
        // Accept a partyId (optional) and a marketId (optional), and a time interval. Returns the historical count
        // of trades for that time interval

        const result = {
            tradeCounts: [
                {
                    marketId: "",
                    partyId: "",
                    interval: "",
                    timestamp: "0",
                    data: [
                        { timeBucket: "0", tradeCount: "0" }
                    ]
                    
                }
            ]
        };

        res = applyHeaders(res) 

        const args = req.query;
        const expectedArgs = ['partyId', 'marketId', 'interval'];
        const defaultArgs = { partyId: undefined, marketId: undefined, interval: "INTERVAL_1D" };

        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        const [ partyId, marketId, interval, limit ] =  [ args.partyId, args.marketId, args.interval, 1000 ]
        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];

        let partyTable, marketTable;
        switch (interval) {
            case ('INTERVAL_5M') : {
                partyTable = 'party_data_5m';
                marketTable = 'market_data_5m';
                bucketSize = '300000000000';
                break;
            };
            case ('INTERVAL_1H') : {
                partyTable = 'party_data_1h';
                marketTable = 'market_data_1h';
                bucketSize = '3600000000000';
                break;
            };
            case ('INTERVAL_1D') : {
                partyTable = 'party_data_1d';
                marketTable = 'market_data_1d';
                bucketSize = '86400000000000';
                break;
            };
        }

        switch (true) {
            case (marketId != undefined && partyId != undefined): {
                // Case where we query for one party on one market
                const res = await asyncQuery('historicalTradeCount', ...partyQueries.historicalNumTrades(partyId, marketId, limit, partyTable), pgPool);

                console.log(res);
                if (!res[1][0]) break;

                result.tradeCounts[0].marketId = marketId;
                result.tradeCounts[0].partyId = partyId;
                result.tradeCounts[0].interval = interval;
                result.tradeCounts[0].timestamp = res[1][0].timestamp;
                result.tradeCounts[0].data.length = 0;
                for (let datum of res[1]) {
                    result.tradeCounts[0].data.push(
                        {
                            timeBucket: datum.bucket,
                            tradeCount: datum.num_trades_combined
                        }
                    )
                }

                break;
            }

            case (marketId != undefined && partyId == undefined): {
                // Case for when we query one market and all parties

                const res = await asyncQuery('historicalTradeCount', ...marketQueries.historicalNumTrades(marketId, limit, marketTable), pgPool);

                console.log(res);
                if (!res[1][0]) break;

                result.tradeCounts[0].marketId = marketId;
                result.tradeCounts[0].partyId = "*";
                result.tradeCounts[0].interval = interval;
                result.tradeCounts[0].timestamp = res[1][0].timestamp;
                result.tradeCounts[0].data.length = 0;
                for (let datum of res[1]) {
                    result.tradeCounts[0].data.push(
                        {
                            timeBucket: datum.bucket,
                            tradeCount: datum.num_trades,
                        }
                    )
                }

                break;
            }

            case (marketId == undefined && partyId != undefined): {
                // Case for when we query one party across all markets

                const res = await asyncQuery('historicalTradeCount', ...partyQueries.allHistoricalNumTrades(partyId, limit, partyTable), pgPool)

                console.log(res);
                if (!res[1][0]) break;

                const markets = {};

                for (let row of res[1]) {
                    if (!Object.keys(markets).includes(row.market_id)) {
                        markets[row.market_id] = {
                            marketId: row.market_id,
                            partyId: partyId,
                            interval: interval,
                            timestamp: row.timestamp,
                            data: [ { timeBucket: row.bucket, tradeCount: row.num_trades_combined } ]
                        }
                    } else {
                        markets[row.marketId].data.push({
                            timeBucket: row.bucket, tradeCount: row.num_trades_combined
                        })
                    }
                }

                result.tradeCounts.length = 0;
                for (let item of Object.values(markets)) result.tradeCounts.push(item);

                break;
            }

            case (marketId == undefined && partyId == undefined): {
                // Case for when we query all parties accross all markets

                const res = await asyncQuery('allHistoricalTradeCounts', ...marketQueries.allHistoricalNumTrades(limit, marketTable), pgPool)

                console.log(res);
                if (!res[1][0]) break;

                const markets = {};

                for (let row of res[1]) {
                    if (!Object.keys(markets).includes(row.market_id)) {
                        markets[row.market_id] = {
                            marketId: row.market_id,
                            partyId: partyId,
                            interval: interval,
                            timestamp: row.timestamp,
                            data: [ { timeBucket: row.bucket, tradeCount: row.num_trades } ]
                        }
                    } else {
                        markets[row.market_id].data.push({
                            timeBucket: row.bucket, tradeCount: row.num_trades
                        })
                    }
                }
                
                result.tradeCounts.length = 0;
                for (let item of Object.values(markets)) result.tradeCounts.push(item);

                break;
            }
        }

        res.send(result);

    });

    app.get('/24h-average-trade-size', async (req, res) => {
        // Accepts a marketId (optional) and returns the average trade size for that market in the past
        // 24 hours. Omitting the marketId will return results for all active markets.

        const result = {
            averageTradeSizes: [
                {
                    marketId: "",
                    timestamp: "0",
                    averageTradeSize: ""
                }
            ]
        };

        res = applyHeaders(res);

        const marketId = req.query.marketId;

        switch (true) {
            case (marketId != undefined): {
                const res = await asyncQuery('rollingAverageTradeSize', ...marketQueries.twentyFourHourAverageTradeSize(marketId), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.averageTradeSizes[0].marketId = marketId;
                result.averageTradeSizes[0].timestamp = res[1][0].timestamp;
                result.averageTradeSizes[0].averageTradeSize = res[1][0].avg_trade_size;

                break;
            };
            case (marketId == undefined): {
                const res = await asyncQuery('rollingAverageTradeSize', ...marketQueries.allTwentyFourHourAverageTradeSize(), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.averageTradeSizes.length = 0;

                for (let market of res[1][0]) {
                    result.averageTradeSizes.push(
                        {
                            marketId: market.market_id,
                            tiemstamp: market.timestamp,
                            averageTradeSize: market.avg_trade_size
                        }
                    )
                }

                break;
            };
        }

        res.send(result);
    });

    app.get('/rolling-average-trade-size', async (req, res) => {
        // Accepts a marketId (optional) and a rolling time interval, returns the average trade size for
        // that market over the time interval. Omitting the marketId will return results for all active markets.

        const result = {
            averageTradeSizes: [
                {
                    marketId: "",
                    interval: "",
                    timestamp: "0",
                    averageTradeSize: ""
                }
            ]
        };

        res = applyHeaders(res);

        const args = req.query;
        const expectedArgs = [ 'marketId', 'interval' ];
        const defaultArgs = { marketId: undefined, interval: 'INTERVAL_ROLLING_1D' };
        
        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        let table, timeWindow;
        switch (interval) {
            case ('INTERVAL_ROLLING_1H'): {
                table = 'market_data_5m';
                timeWindow = '3600000000000';
                break;
            }
            case ('INTERVAL_ROLLING_1D'): {
                table = 'market_data_5m';
                timeWindow = '86400000000000'
                break;
            }
            case ('INTERVAL_ROLLING_1W'): {
                table = 'market_data_1h';
                timeWindow = '604800000000000';
                break;
            }
            case ('INTERVAL_ROLLING_1M'): {
                table = 'market_data_1h';
                timeWindow = '2629800000000000';
                break;
            }
            default: {
                return res.send(result);
            }
        }

        switch (true) {
            case (marketId != undefined): {
                const res = await asyncQuery('rollingAverageTradeSize', ...marketQueries.twentyFourHourAverageTradeSize(marketId, timeWindow, table), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.averageTradeSizes[0].marketId = args.marketId;
                result.averageTradeSizes[0].interval = args.interval;
                result.averageTradeSizes[0].timestamp = res[1][0].timestamp;
                result.averageTradeSizes[0].averageTradeSize = res[1][0].avg_trade_size;

                break;
            };
            case (marketId == undefined): {
                const res = await asyncQuery('rollingAverageTradeSize', ...marketQueries.allTwentyFourHourAverageTradeSize(timeWindow, table), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.averageTradeSizes.length = 0;
                for (let market of res[1][0]) {
                    result.averageTradeSizes.push(
                        {
                            marketId: market.market_id,
                            interval: args.interval,
                            timestamp: market.timestamp,
                            averageTradeSize: market.avg_trade_size
                        }
                    );
                }

                break;
            };
        }

        res.send(result);
    });

    app.get('/historical-average-trade-size', async (req, res) => {
        // Accepts a marketId (optional) and a time interval, returns the historical average trade size for that
        // time interval. Omitting the marketId will return results for all active markets.

        const result = {
            averageTradeSizes: [
                {
                    marketId: "",
                    interval: "",
                    timestamp: "0",
                    data: [
                        { timeBucket: "0", averageTradeSize: "" }
                    ]
                }
            ]
        };

        res = applyHeaders(res);

        const args = req.query;
        

    });

    // ---------- TEST AGAIN ---------- //
    app.get('/open-interest', async (req, res) => {
        // Uses market data updates to keep track of OI, accepts a marketId (optional) as input and
        // returns the most recent value of OI for that market, omitting marketId will return the OI
        // across all markets on Vega.

        const result = {
            openInterests: [
                {
                    marketId: "",
                    timestamp: "0",
                    openInterest: "0"
                }
            ]
        }

        res = applyHeaders(res) 

        const marketId = req.query.marketId;

        switch (true) {
            case (marketId != undefined): {
                // Get open interets for a specific market

                const res = await asyncQuery('openInterest', ...marketQueries.openInterest(marketId), pgPool);

                if(!res[1][0]) {
                    break;
                };

                result.openInterests[0].marketId = res[1][0].market_id;
                result.openInterests[0].timestamp = res[1][0].timestamp;
                result.openInterests[0].openInterest = res[1][0].open_interest;
                result.openInterests[0].lastTradedPrice = res[1][0].last_traded_price;

                break;
            };

            case (marketId == undefined): {
                // Get open interest for all markets

                const res = await asyncQuery('openInterest', ...marketQueries.totalOpenInterest(), pgPool);

                if(!res[1][0]) {
                    break;
                };

                result.openInterests.shift();

                for (let market of res[1]) {
                    result.openInterests.push(
                        {
                            marketId: market.market_id,
                            timestamp: market.timestamp,
                            openInterest: market.open_interest,
                            lastTradedPrice: market.last_traded_price
                        }
                    );
                }

                break;
            };
        }

        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/historical-open-interest', async (req, res) => {
        // Accepts a marketId (optional) and and interval, returns a history of the open interest
        // for that time interval on that market. If the marketId is omitted then the historical open
        // interest for all markets is returned.

        const result = {
            openInterests: [
                {
                    marketId: "",
                    interval: "",
                    timestamp: "0",
                    data: [
                        { timeBucket: "0", openInterest: "0" }
                    ]
                }
            ]
        }

        res = applyHeaders(res) 

        const args = req.query;
        const expectedArgs = ['marketId', 'interval'];
        const defaultArgs = { marketId: undefined, interval: "INTERVAL_1D" };

        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        const [ marketId, interval, limit ] =  [ args.marketId, args.interval, 1000 ]
        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];

        let table;
        switch (interval) {
            case ('INTERVAL_5M') : {
                table = 'open_interest_5m';
                break;
            };
            case ('INTERVAL_1H') : {
                table = 'open_interest_1h';
                break;
            };
            case ('INTERVAL_1D') : {
                table = 'open_interest_1d';
                break;
            };
        }

        switch (true) {
            case (marketId != undefined): {
                
                const res = await asyncQuery('historicalOpenInterest', ...marketQueries.historicalOpenInterest(marketId, limit, table), pgPool)

                console.log(res);
                if (!res[1][0]) break;

                result.openInterests[0].marketId = marketId;
                result.openInterests[0].interval = interval;
                result.openInterests[0].timestamp = res[1][0].last_ts;
                result.openInterests[0].data.length = 0;
                for (let row of res[1]) {
                    result.openInterests[0].data.push(
                        {
                            timeBucket: row.bucket, lastOpenInterest: row.last_open_iterest,
                            lastTradedPrice: row.last_traded_price, lastTimestamp: row.last_ts
                        }
                    )
                }

                break;
            }
            case (marketId == undefined): {

                const res = await asyncQuery('allHistoricalOpenInterest', ...marketQueries.allHistoricalOpenInterest(limit, table), pgPool)

                console.log(res);
                if (!res[1][0]) break;

                const markets = {};

                for (let row of res[1]) {
                    if (!Object.keys(markets).includes(row.market_id)) {
                        markets[row.market_id] = {
                            marketId: row.market_id,
                            interval: interval,
                            timestamp: row.last_ts,
                            data: [
                                {
                                    timeBucket: row.bucket, lastOpenInterest: row.last_open_interest,
                                    lastTradedPrice: row.last_traded_price, lastTimestamp: row.last_ts
                                }
                            ]
                        }
                    } else {
                        markets[row.market_id].data.push(
                            {
                                timeBucket: row.bucket, lastOpenInterest: row.last_open_interest,
                                lastTradedPrice: row.last_traded_price, lastTimestamp: row.last_ts
                            }
                        )
                    }
                }
                
                result.openInterests.length = 0;
                for (let item of Object.values(markets)) result.openInterests.push(item);

                break;
            }
        }

        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/fees-paid', async (req, res) => {
        // Accepts a partyId (mandatory) and a marketId (optional) returns a summary of trading fees paid 
        // by a party on all markets or by a party on a specific market. Omitting the partyId will return
        // an empty result.
        
        const result = {
            feesPaid: [
                {
                    marketId: "",
                    partyId: "",
                    timestamp: "0",
                    fees: {
                        total: "0",
                        maker: "0",
                        liquidity: "0",
                        infrastructure: "0"
                    }
                }
            ]
        }

        res = applyHeaders(res) 

        const partyId = req.query.partyId;
        const marketId = req.query.marketId;

        if (!partyId) return res.send(result);

        switch (true) {

            case (marketId != undefined): {
                // Fees paid by party on market

                const res = await asyncQuery('feesPaid', ...partyQueries.feesPaidFromPartyData(partyId, marketId), pgPool);

                if (!res[1][0]) {
                    break;
                };

                result.feesPaid[0].partyId = partyId;
                result.feesPaid[0].marketId = marketId;
                result.feesPaid[0].timestamp = res[1][0].timestamp;
                result.feesPaid[0].fees.total = fee_combined;
                result.feesPaid[0].fees.maker = res[1][0].fee_maker;
                result.feesPaid[0].fees.liquidity = res[1][0].fee_liquidity;
                result.feesPaid[0].fees.infrastructure = res[1][0].fee_infrastructure;

                break;

            };

            case (marketId == undefined): {
                // Fees paid by party on all markets

                const res = await asyncQuery('feesPaid', ...partyQueries.allFeesPaidFromPartyData(partyId), pgPool);

                if (!res[1][0]) {
                    break;
                };

                result.feesPaid.length = 0;

                for (let market of res[1]) {
                    result.feesPaid.push(
                        {
                            marketId: market.market_id,
                            partyId: partyId,
                            timestamp: market.timestamp,
                            fees: {
                                total: market.fee_combined,
                                maker: market.fee_maker,
                                liquidity: market.fee_liquidty,
                                infrastructure: market.fee_infrastructure
                            }
                        }
                    );
                }

                break;
            };
        };

        res.send(result);
        
    });

    // ---------- REPLACE ---------- //
    app.get('/fees-earned', async (req, res) => {
        // Accepts a partyId (mandatory) and a marketId (optional), returns a summary of all trading fees earned
        // by a party on a specific market or all trading fees earned by a party on all markets. Omitting the
        // partyId will return an empty result.

        const result = {
            partyId: "",
            feesEarned: [
                {
                    marketId: "",
                    timestamp: "0",
                    fees: {
                        total: "0",
                        maker: "0",
                        liquidity: "0",
                        infrastructure: "0"
                    }
                }
            ]
        };

        res = applyHeaders(res) 

        const partyId = req.query.partyId;
        const marketId = req.query.marketId;

        if (!partyId) return res.send(result);

        switch (true) {

            case (marketId != undefined): {

                const res = await asyncQuery('feesEarned', ...partyQueries.feesEarned(partyId, marketId), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.partyId = partyId;
                result.feesEarned[0].marketId = marketId;
                result.feesEarned[0].timestamp = res[1][0].timestamp;
                result.feesEarned[0].fees.total = (BigInt(res[1][0].maker_fee_earned) + BigInt(res[1][0].liquidity_fee_earned) + BigInt(res[1][0].infrastructure_fee_earned)).toString();
                result.feesEarned[0].fees.maker = res[1][0].maker_fee_earned;
                result.feesEarned[0].fees.liquidity = res[1][0].liquidity_fee_earned;
                result.feesEarned[0].fees.infrastructure = res[1][0].infrastructure_fee_earned;

                break;
            };

            case (marketId == undefined): {

                const res = await asyncQuery('feesEarned', ...partyQueries.totalFeesEarned(partyId), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.partyId = partyId;
                result.feesEarned.shift();

                for (let market of res[1]) {
                    result.feesEarned.push(
                        {
                            marketId: market.market_id,
                            timestamp: market.timestamp,
                            fees: {
                                total: (BigInt(market.maker_fee_earned) + BigInt(market.liquidity_fee_earned) + BigInt(market.infrastructure_fee_earned)).toString(),
                                maker: market.maker_fee_earned,
                                liquidity: market.liquidity_fee_earned,
                                infrastructure: market.infrastructure_fee_earned
                            }
                        }
                    );
                };

                break;
            };

        }

        res.send(result);

    });

    app.get('/fees-top-earners-by-market', async (req, res) => {
        // Accepts a marketId (optional) and a number of records to fetch, n. Returns the top n fee earners on
        // the specified market. Omitting the marketId will return results for all markets.

    });

    app.get('/fees-top-earners-by-asset', async (req, res) => {
        // Accepts an assetId (optional) and a number of records to return, n. Returns the top n fee earners for
        // the specified asset. If no asset is specified then the results are returned for all assets.

        const result = {
            topEarners: [
                {
                    partyId: "",
                    assetId: "",
                    timestamp: "0",
                    fees: {
                        maker: "",
                        liquidity: "",
                        infrastructure: "",
                        total: ""
                    }
                }
            ]
        }

        res = applyHeaders(res);

        const args = req.query;
        const expectedArgs = [ 'assetId', 'n' ];
        const defaultArgs = { assetId: undefined, n: 10 };

        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        switch (true) {
            case (args.assetId != undefined): {
                const res = await asyncQuery('feesTopEarnersByAsset', ...assetQueries.feesTopEarners(args.assetId, args.n), pgPool)
                
                console.log(res);
                if (!res[1][0]) {
                    break;
                }

                result.topEarners.length = 0;
                for (let party of res[1]) {
                    result.topEarners.push(
                        {
                            partyId: party.partyId,
                            assetId: args.assetId,
                            timestamp: party.timestamp,
                            fees: {
                                maker: party.maker_fee_earned,
                                liquidity: party.liquidity_fee_earned,
                                infrastructure: party.infrastructure_fee_earned,
                                total: party.total_fee_earned
                            }
                        }
                    )
                }

                break;
            }
            case (args.assetId == undefined): {
                
                const assets = (await asyncQuery('assets', ...assetQueries.getAssets(), pgPool))[1].map(x => ({ id: x.id, name: x.name, code: x.symbol }))

                const responses = [];
                for (let asset of assets) {
                    const prom = asyncQuery('feesTopEarnersByAsset', ...assetQueries.feesTopEarners(asset.id, 10), pgPool);
                    responses.push({ assetId: asset.id, content: prom });
                }

                result.topEarners.length = 0;
                for (let res of responses) {
                    const asset = { assetId: await res.assetId, res: await res.content }

                    for (let party of asset.res[1]) {
                        result.topEarners.push(
                            {
                                partyId: party.party_id,
                                assetId: party.asset_id,
                                timestamp: party.timestamp,
                                fees: {
                                    maker: party.maker_fee_earned,
                                    liquidity: party.liquidity_fee_earned,
                                    infrastructure: party.infrastructure_fee_earned,
                                    total: party.total_fee_earned
                                }
                            }
                        )
                    }
                }


                break;
            }
        }

        res.send(result);
    });

    app.get('/maker-fees-earned', async (req, res) => {

    });

    app.get('/liquidity-fees-earned', async (req, res) => {

    });

    app.get('/infra-fees-earned', async (req, res) => {

    });

    // ---------- UNTESTED ---------- //
    app.get('/fees-generated', async (req, res) => {
        // Accepts a marketId (optional) and returns a summary of all the fees that have been generated by
        // that market. Omitting a marketId will return a summary of all fees generated by all markets.

        const result = {
            feesGenerated: [
                {
                    marketId: "",
                    timestamp: "0",
                    infraFeeTimestamp: "0", // Different ts for infra because it comes from different table
                    fees: {
                        total: "0",
                        maker: "0",
                        liquidity: "0",
                        infrastructure: "0"
                    }
                }
            ]
        };

        res = applyHeaders(res) 
        
        const marketId = req.query.marketId;

        switch (true) {

            case (marketId != undefined): {

                const makerLiqRes = await asyncQuery('feesGenerated', ...marketQueries.makerLiquidityFeesGenerated(marketId), pgPool);
                const infraRes = await asyncQuery('feesGenerated', ...marketQueries.infraFeesGenerated(marketId), pgPool);

                if (!makerLiqRes[1][0] || !infraRes[1][0]) {
                    break
                };

                result.feesGenerated[0].marketId = marketId;
                result.feesGenerated[0].timestamp = makerLiqRes[1][0].timestamp;
                result.feesGenerated[0].infraFeeTimestamp = infraRes[1][0].timestamp;
                result.feesGenerated[0].fees.total = (BigInt(makerLiqRes[1][0].maker_fees_generated) + BigInt(makerLiqRes[1][0].liquidity_fees_generated) + BigInt(infraRes[1][0].infrastructure_fees_generated)).toString();
                result.feesGenerated[0].fees.maker = makerLiqRes[1][0].maker_fees_generated;
                result.feesGenerated[0].fees.liquidity = makerLiqRes[1][0].liquidity_fees_generated;
                result.feesGenerated[0].fees.infrastructure = infraRes[1][0].infrastructure_fees_generated;

                break;
            };

            case (marketId == undefined): {

                const makerLiqRes = await asyncQuery('feesGenerated', ...marketQueries.allMakerLiquidityFeesGenerated(), pgPool);
                const infraRes = await asyncQuery('feesGenerated', ...marketQueries.allInfraFeesGenerated(), pgPool);

                if (!makerLiqRes[1][0] || !infraRes[1][0]) {
                    break
                };
                
                for (let market of infraRes[1]) {
                    const elem = makerLiqRes[1].find(elem => elem.market_id == market.market_id);
                    elem['infra_fee_timestamp'] = market.timestamp;
                    elem['infrastructure_fees_generated'] = market.infrastructure_fees_generated;
                }

                result.feesGenerated.shift();

                for (let market of makerLiqRes[1]) {
                    result.feesGenerated.push(
                        {
                            marketId: market.market_id,
                            timestamp: market.timestamp,
                            infraFeeTimestamp: market.infra_fee_timestamp,
                            fees: {
                                total: (BigInt(market.maker_fees_generated) + BigInt(market.liquidity_fees_generated) + BigInt(market.infrastructure_fees_generated)).toString(),
                                maker: market.maker_fees_generated,
                                liquidity: market.liquidity_fees_generated,
                                infrastructure: market.infrastructure_fees_generated
                            }
                        }
                    );
                };

                break;
            };

        };

        res.send(result);

    });

    app.get('/rewards-distributed', async (req, res) => {
        // Accepts a marketId (optional) and returns the sum of rewards distributed across the lifetime
        // of that market. Omitting the marketId will return a sum of rewards for each market.
        // Note: Infrastructure fee transfers are NOT included in this endpoint despite being categorized
        //       as a reward payout transfer.


    });

    app.get('/rewards-earned', async (req, res) => {
        // Accepts a partyId (mandatory) and returns the sum of rewards earned by that party across all markets.
        // Omitting a partyId will return an empty result. 

    });

    app.get('/rewards-top-earners-by-asset', async (req, res) => {
        // Accepts an assetId (optional) and a number of records to return, n. Returns the top n reward earners for
        // the specified asset. If no asset is specified then the results are returned for all assets.


    });

    // ---------- UNTESTED ---------- //
    app.get('/bridge-balances', async (req, res) => {
        // Accepts an assetId (optional) and returns the current balance that Vega Core sees in the bridge
        // for the asset. Omitting the assetId returns the balances for all assets that Vega Core sees in
        // the bridge.

        const result = {
            balances: [
                {
                    assetId: "",
                    timestamp: "",
                    balance: ""
                }
            ]
        };

        res = applyHeaders(res) 

        const assetId = req.query.assetId;

        switch (true) {
            case (assetId != undefined): {
                const res = await asyncQuery('bridge-balance', ...assetQueries.getBridgeBalance(assetId), pgPool);
                if (!res[1][0]) break;
                // ----------------------- Temporarily filter out VEGA ----------------------- //
                if (res[1][0].asset == 'd1984e3d365faa05bcafbe41f50f90e3663ee7c0da22bb1e24b164e9532691b2') break;
                // Add it again once "TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE" is accounted for
                result.balances[0].assetId = res[1][0].asset;
                result.balances[0].timestamp = res[1][0].timestamp;
                result.balances[0].balance = res[1][0].balance;
                break;
            }
            case (assetId == undefined): {
                const res = await asyncQuery('bridge-balances', ...assetQueries.getAllBridgeBalances(), pgPool);
                if (!res[1][0]) break;
                result.length = 0;
                for (let asset of res[1]) {
                    // ----------------------- Temporarily filter out VEGA ----------------------- //
                    if (asset.asset == 'd1984e3d365faa05bcafbe41f50f90e3663ee7c0da22bb1e24b164e9532691b2') continue;
                    // Add it again once "TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE" is accounted for
                    result.balances.push({
                        assetId: asset.asset,
                        timestamp: asset.timestamp,
                        balance: asset.balance
                    });
                }
                break;
            }
        }
        res.send(result);
    });

    app.get('/24h-bridge-net-flows', async (req, res) => {
        // Accepts an assetId (optional) and returns the 24h net flow for the asset on the ERC-20 bridge,
        // omitting the assetId will return results for all assets in the bridge.

        const result = {
            bridgeNetFlows: [
                {
                    assetId: "",
                    timestamp: "0",
                    netFlow: "",
                }
            ]
        };

        res = applyHeaders(res);

        const assetId = req.query.assetId;
        
        switch (true) {
            case (assetId != undefined): {
                const res = await asyncQuery('24hBridgeNetFlows', ...assetQueries.twentyFourHourBridgeNetFlows(assetId), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.bridgeNetFlows[0].assetId = assetId;
                result.bridgeNetFlows[0].timestamp = res[1][0].timestamp;
                result.bridgeNetFlows[0].netFlow = res[1][0].net_flow;

                break;
            }
            case (assetId == undefined): {
                const res = await asyncQuery('24hBridgeNetFlows', ...assetQueries.allTwentyFourHourBridgeNetFlows(), pgPool);
                
                if (!res[1][0]) {
                    break;
                }

                result.bridgeNetFlows.length = 0;
                for (let row of res[1]) {
                    result.bridgeNetFlows.push(
                        {
                            assetId: row.asset,
                            timestamp: row.timestamp,
                            netFlow: row.net_flow
                        }
                    )
                }

                break;
            }
        }

        res.send(result);
    });

    app.get('/historical-bridge-net-flows', async (req, res) => {
        // Accepts an assetId (optional), an interval, and a limit, returns the historical net flows for the asset on
        // the ERC-20 bridge. Omitting the assetId will return results for all assets in the bridge.

        const result = {
            bridgeNetFlows: [
                {
                    assetId: "",
                    interval: "",
                    timestamp: "0",
                    data: [
                        { timeBucket: "0", netFlow: "" }
                    ]
                }
            ]
        };

        const args = req.query;
        const expectedArgs = [ 'assetId', 'interval', 'limit' ];
        const defaultArgs = { assetId: undefined, interval: 'INTERVAL_1D', limit: 1000 };

        for (let arg of expectedArgs) { 
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        let table;
        switch (args.interval) {
            case ('INTERVAL_5M'): {
                table = 'bridge_diffs_5m';
                break;
            }
            case ('INTERVAL_1H'): {
                table = 'bridge_diffs_1h';
                break;
            }
            case ('INTERVAL_1D'): {
                table = 'bridge_diffs_1d';
                break;
            }
            default: {
                return res.send(result);
            }
        }

        switch (true) {
            case (args.assetId != undefined): {
                const res = await asyncQuery('historicalBridgeNetFlows', ...assetQueries.historicalBridgeNetFlows(args.assetId, args.limit, table), pgPool);

                result.bridgeNetFlows[0].assetId = res[1][0].asset;
                result.bridgeNetFlows[0].interval = args.interval;
                result.bridgeNetFlows[0].timestamp = res[1][0].timestamp;
                result.bridgeNetFlows[0].data.length = 0;
                for (let row of res[1]) {
                    result.bridgeNetFlows[0].data.push(
                        { timeBucket: row.bucket, netFlow: row.net_flow }
                    )
                }

                break;
            }
            case (args.assetId == undefined): {
                const assetRes = await asyncQuery('assets', ...assetQueries.getAssets(), pgPool);
                
                const responses = [];
                for (let asset of assetRes[1]) {
                    const prom = asyncQuery('historicalBridgeNetFlows', ...assetQueries.historicalBridgeNetFlows(asset.id, args.limit, table), pgPool);
                    responses.push({ assetId: asset.id, content: prom });
                }
                
                for (let res of responses) {
                    const asset = { assetId: res.assetId, res: await res.content };
                    if (!asset.res[1][0]) continue;
                    result.bridgeNetFlows.push(
                        {
                            assetId: asset.assetId,
                            interval: args.interval,
                            timestamp: asset.res[1][0].timestamp,
                            data: asset.res[1].map((elem) => ({ timeBucket: elem.bucket, netFlow: elem.net_flow }))
                        }
                    )   
                }
                result.bridgeNetFlows.shift();

                break;
            }
        }
        
        res.send(result);
    });

    app.get('/historical-deposits', async (req, res) => {
        // Accepts an assetId (optional), an interval, and a limit, returns all historical deposits for that asset. Omitting the
        // assetId will return results for all assets.

        const result = {
            deposits: [
                {
                    assetId: "",
                    interval: "",
                    timestamp: "",
                    data: [
                        { timeBucket: "0", amount: "" },
                    ]
                }
            ]
        };

        res = applyHeaders(res);

        const args = req.query;
        const expectedArgs = [ 'assetId', 'interval', 'limit' ];
        const defaultArgs = { assetId: undefined, interval: 'INTERVAL_1D', limit: 1000 };

        for (let arg of expectedArgs) { 
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        let table;
        switch (args.interval) {
            case ('INTERVAL_5M'): {
                table = 'bridge_diffs_5m';
                break;
            }
            case ('INTERVAL_1H'): {
                table = 'bridge_diffs_1h';
                break;
            }
            case ('INTERVAL_1D'): {
                table = 'bridge_diffs_1d';
                break;
            }
            default: {
                return res.send(result);
            }
        }

        switch (true) {
            case (args.assetId != undefined): {
                const res = await asyncQuery('deposits', ...assetQueries.historicalBridgeDeposits(args.assetId, args.limit, table), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.deposits[0].assetId = args.asset_id;
                result.deposits[0].timestamp = res[1][0].timestamp;
                result.deposits[0].data.length = 0;
                for (let row of res[1]) {
                    result.deposits[0].data.timeBucket = row.bucket;
                    result.deposits[0].data.amount = row.amount;
                }

                break;
            }
            case (args.assetId == undefined): {
                const res = await asyncQuery('deposits', ...assetQueries.allHistoricalBridgeDeposits(args.limit, table), pgPool);

                if (!res[1][0]) {
                    break;
                }

                const assets = {};
                for (let row of res[1]) {
                    if (!Object.keys(assets).includes(row.asset_id)) {
                        assets[row.asset_id] = {
                            assetId: row.asset_id,
                            interval: args.interval,
                            timestamp: row.timestamp,
                            data: [
                                { timeBucket: row.bucket, amount: row.amount }
                            ]
                        };
                    } else {
                        assets[row.asset_id].data.push(
                            { timeBucket: row.bucket, amount: row.amount }
                        );
                    };
                };

                result.deposits.length = 0;
                for (let item of Object.values(assets)) result.deposits.push(item);
                break;
            }
        }

        res.send(result);
    });

    // ---------- UNTESTED ---------- //
    app.get('/historical-withdrawals', async (req, res) => {
        // Accepts an assetId (optional), an interval, and a limit, returns all historical withdrawals for that asset. Omitting the
        // assetId will return results for all assets.

        const result = {
            withdrawals: [
                {
                    assetId: "",
                    interval: "",
                    timestamp: "",
                    data: [
                        { timeBucket: "0", amount: "" },
                    ]
                }
            ]
        };

        res = applyHeaders(res);

        const args = req.query;
        const expectedArgs = [ 'assetId', 'interval', 'limit' ];
        const defaultArgs = { assetId: undefined, interval: 'INTERVAL_1D', limit: 1000 };

        for (let arg of expectedArgs) { 
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        let table;
        switch (args.interval) {
            case ('INTERVAL_5M'): {
                table = 'bridge_diffs_5m';
                break;
            }
            case ('INTERVAL_1H'): {
                table = 'bridge_diffs_1h';
                break;
            }
            case ('INTERVAL_1D'): {
                table = 'bridge_diffs_1d';
                break;
            }
            default: {
                return res.send(result);
            }
        }

        switch (true) {
            case (args.assetId != undefined): {
                const res = await asyncQuery('withdrawals', ...assetQueries.historicalBridgeWithdrawals(args.assetId, args.limit, table), pgPool);

                if (!res[1][0]) {
                    break;
                }

                result.withdrawals[0].assetId = args.asset_id;
                result.withdrawals[0].timestamp = res[1][0].timestamp;
                result.withdrawals[0].data.length = 0;
                for (let row of res[1]) {
                    result.withdrawals[0].data.timeBucket = row.bucket;
                    result.withdrawals[0].data.amount = row.amount;
                }

                break;
            }
            case (args.assetId == undefined): {
                const res = await asyncQuery('withdrawals', ...assetQueries.allHistoricalBridgeWithdrawals(args.limit, table), pgPool);

                if (!res[1][0]) {
                    break;
                }

                const assets = {};
                for (let row of res[1]) {
                    if (!Object.keys(assets).includes(row.asset_id)) {
                        assets[row.asset_id] = {
                            assetId: row.asset_id,
                            interval: args.interval,
                            timestamp: row.timestamp,
                            data: [
                                { timeBucket: row.bucket, amount: row.amount }
                            ]
                        };
                    } else {
                        assets[row.asset_id].data.push(
                            { timeBucket: row.bucket, amount: row.amount }
                        );
                    };
                };

                result.withdrawals.length = 0;
                for (let item of Object.values(assets)) result.withdrawals.push(item);
                break;
            }
        }

        res.send(result);
    });

    app.get('/bridge-capital-efficiency', async (req, res) => {
        // Figure out something like bridge balances vs margin account balances, maybe some metrics comparing
        // bridge balances to OI and trade volume...

    })

    // ---------- UNTESTED ---------- //
    app.get('/simple-moving-average', async (req, res) => {
        // Accepts a marketId, an interval, a windowLength, and a limit and returns the corresponding
        // moving averages for those parameters. Omitting a marketId will return an empty result. Omitting
        // any other argument will use a default value. Providing an invlaid value for any argument will
        // return an empty result.

        const result = {
            marketId: "",
            interval: "",
            sma: [ [ "0", "0" ] ]
        };

        res = applyHeaders(res) 

        const expectedArgs = [ 'marketId', 'interval', 'windowLength', 'limit' ];
        const defaultArgs = { marketId: undefined, interval: 'INTERVAL_1H', windowLength: 50, limit: 500 };
        const args = req.query;
        console.log(args);
    
        for (let arg of expectedArgs) {
            if (!args[arg]) {
                // Arg was not provided, set to default
                args[arg] = defaultArgs[arg];
            }
        }

        console.log(args);

        const [ marketId, interval, windowLength, limit ] =  [ args.marketId, args.interval, args.windowLength, args.limit ];
        let table, bucketSize;

        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];
        const validMarkets = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);

        console.log('validMarkets: ', validMarkets);

        if (!validIntervals.includes(interval)) return res.send(result);
        if (!validMarkets.includes(marketId)) return res.send(result);
        // if (!validMarkets.includes(marketId)) return res.send(result);

        switch (interval) {
            
            case ('INTERVAL_5M') : {
                table = 'candles_5m';
                bucketSize = '300000000000';
                break;
            };

            case ('INTERVAL_1H') : {
                table = 'candles_1h';
                bucketSize = '3600000000000';
                break;
            };

            case ('INTERVAL_1D') : {
                table = 'candles_1d';
                bucketSize = '86400000000000';
                break;
            };
        }

        const queryRes = await asyncQuery(
            'simpleMovingAverages', 
            ...marketQueries.simpleMovingAverage(marketId, table, bucketSize, windowLength, limit),
            pgPool
        );

        console.dir(queryRes);

        result.marketId = marketId;
        result.interval = interval;

        if (queryRes[1].length != 0) result.sma.shift();

        for (let item of queryRes[1]) {
            result.sma.push([ item.bucket_gf, item.sma ]);
        };

        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/pnl', async (req, res) => {
        // Accepts a partyId (mandatory) and a marketId (optional) and returns the most recent
        // realized and unrealized PnLs for the party on the market. If the marketId is omitted
        // then the PnLs for that party on all markets are returned. If the partyId is omitted
        // then an empty result will be returned. If the party has no open positions on a market
        // then no data is returned for that market.

        const result = {
            partyId: "",
            pnls: [
                {
                    marketId: "",
                    timestamp: "",
                    realizedPnl: "0",
                    unrealizedPnl: "0"
                }
            ]
        }

        res = applyHeaders(res) 

        const expectedArgs = [ 'partyId', 'marketId' ];
        const defaultArgs = { partyId: undefined, marketId: undefined };
        const args = req.query;
        console.log(args);

        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        const [ partyId, marketId ] =  [ args.partyId, args.marketId]
        const validMarkets = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);
        if (!validMarkets.includes(marketId)) return res.send(result);
        if (!partyId) return res.send(result);

        switch (true) {
            case (marketId != undefined): {
                const res = await asyncQuery('pnl', ...partyQueries.pnls(partyId, marketId), pgPool);
                if (!res[1][0].party_id) {
                    break;
                };

                result.partyId = res[1][0].party_id;
                result.pnlList[0].marketId = res[1][0].market_id;
                result.pnlList[0].timestamp = res[1][0].timestamp;
                result.pnlList[0].realizedPnl = res[1][0].unrealized_pnl;
                result.pnlList[0].unrealizedPnl = res[1][0].realized_pnl;
                
                break;
            }

            case (marketId == undefined): {
                const res = await asyncQuery('pnls', ...partyQueries.allPnls(partyId), pgPool);
                if (!res[1][0].party_id) {
                    break;
                };

                result.partyId = res[1][0].party_id;
                result.pnlList.shift();
                for (let market of res[1]) {
                    result.pnlList.push({
                        marketId: market.market_id,
                        timestamp: market.timestamp,
                        realizedPnl: market.unrealized_pnl,
                        unrealizedPnl: market.realized_pnl
                    })
                };

                break;
            }
        }

        res.send(result);
    });

    app.get('/historical-pnl', async (req, res) => {
        // Accepts a partyId (mandatory), a marketId (optional), and a time interval (optional) and returns
        // the pnl history for the corresponding party, market, and time interval. If marketId is omitted
        // then the histories for the party on all markets on which they have pnl history are returned. If the
        // time interval is omitted then a default value is used. Invalid 

    });

    app.get('/pnl-leaderboard', async (req, res) => {
        // Accepts an assetId (optional), a rolling time window, and a sorting mode. Returns the top 10 parties sorted
        // by PnL in either absolute or percentage terms depending on the sorting mode. Omitting the assetId returns a
        // pnl leaderboard for each active market.


    });

    app.get('/pnl-loserboard', async (req, res) => {
        // Accepts an assetId (optional), a rolling time window, and a sorting mode. Returns the 10 worst parties sorted
        // by PnL in either absolute or percentage terms depending on the sorting mode. Omitting the assetId returns a
        // pnl loserboard for each active market.


    });

    app.get('/rolling-market-return', async (req, res) => {
        // Accepts a marketId (optional), and a rolling time interval, returns the return for that market over the
        // rolling time interval. Omitting a marketId will return results for all active markets.


    });

    app.get('/historical-market-returns', async (req, res) => {
        // Accepts a marketId (optional), and a time interval, returns the returns for that market over the time
        // interval. Omitting a marketId will return results for all active markets.


    });

    // ---------- UNTESTED ---------- //
    app.get('/volatility', async (req, res) => {
        // Accepts a marketId (optional), returns the computed value of volatility for those parameters.
        // Omitting a marketId will return an empty result.

        const result = {
            marketId: "",
            timestamp: "0",
            interval: "",
            volatilityDaily: "0",
            volatilityAnnualized: ""
        };

        res = applyHeaders(res);

        const marketId = req.query.marketId;

        if (!marketId) {
            return res.send(result);
        }

        const queryRes = await asyncQuery('volatilty', ...marketQueries.volatility(marketId) , pgPool);

        console.log(queryRes);
        if (!queryRes[1]) {
            return res.send(result);
        }

        result.marketId = marketId;
        result.timestamp = queryRes[1][0].timestamp;
        result.volatilityDaily = queryRes[1][0].volatilty;
        result.volatilityAnnualized = queryRes[1][0].annualized_volatility;

        res.send(result);

    });

    // ---------- UNFINISHED ---------- //
    app.get('/historical-volatility', async (req, res) => {
        // Accepts a marketId, an interval, and a window size. Returns a series of historical volatility data
        // points for the specified market. Omitting the marketId or providing an invalid parameter will 
        // return an empty result.

        const result = {
            marketId: "",
            interval: "",
            windowLength: "",
            data: []
        };

        res = applyHeaders(res);

        const args = req.query;
        const expectedArgs = ['marketId', 'interval', 'windowSize'];
        const defaultArgs = { marketId: undefined, interval: "INTERVAL_1D", confidenceInterval: 30 }

        for (let arg of expectedArgs) { 
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        if (!args.marketId) {
            return res.send(result);
        };

        let table;
        switch (args.interval) {
            case ('INTERVAL_5M'): {

                break;
            }
            case ('INTERVAL_1H'): {

                break;
            }
            case ('INTERVAL_1d'): {

                break;
            }
            default: {
                return res.send(result);
            }
        }

        const queryRes = await asyncQuery('historicalVolatility', ...marketQueries.historicalVolatility(marketId, interval, windowLength), pgPool)


    });

    // ---------- UNTESTED ---------- //
    app.get('/value-at-risk', async (req, res) => {
        // Accepts a marketId, a time interval, and a confidence interval. Omitting a marketId will return
        // an empty result (should it return VaR for all markets?), while omitting any other argument will
        // use a defult value. Providing an invalid value for any argument will return an empty result. The
        // return value is a decimal between 0 and 1 representing a percentage (ie: 1 == 100%, 0.05 == 5%).
        // The method for this API is historical simulation using all available trade data for a partiuculat
        // market on Vega.

        const result = {
            marketId: "",
            interval: "",
            confidenceInterval: "0",
            valueAtRiskContinuous: "0",
            valueAtRiskDiscrete: "0"
        };

        res = applyHeaders(res) 

        const args = req.query;
        const expectedArgs = ['marketId', 'interval', 'confidenceInterval'];
        const defaultArgs = { marketId: undefined, interval: "INTERVAL_1D", confidenceInterval: 95 }

        for (let arg of expectedArgs) { 
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];
        const validMarkets = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);

        // Convert confidenceInterval to valid value (int, 0 < CI < 100);
        args['confidenceInterval'] = Math.min(Math.max(Math.round(parseFloat(args['confidenceInterval'])), 1), 99)/100;

        if (!args['confidenceInterval']) return res.send(result);
        if (!validMarkets.includes(args['marketId'])) return res.send(result);
        if (!validIntervals.includes(args['interval'])) return res.send(result);

        console.log(args);

        const varRes = await asyncQuery(
            'valueAtRisk',
            ...marketQueries.valueAtRisk(args['marketId'], args['interval'], args['confidenceInterval']),
            pgPool
        );

        result.marketId = args['marketId'];
        result.interval = args['interval'];
        result.confidenceInterval = args['confidenceInterval'];
        result.valueAtRiskContinuous = Math.abs(Number(varRes[1][0].p_cont).toFixed(5)).toString();
        result.valueAtRiskDiscrete = Math.abs(Number(varRes[1][0].p_disc).toFixed(5)).toString();

        res.send(result);

    });

    app.get('/expected-shortfall', async (req, res) => {

    });

    // ---------- UNTESTED ---------- //
    app.get('/sharpe-ratio', async (req, res) => {
        // Accepts a marketId (mandatory) and calculates the sharpe ratio for the market.

        const result = {
            marketId: "",
            timestamp: "",
            sharpeRatio: ""
        }

        res = applyHeaders(res);

        const marketId = req.query.marketId;

        if (!marketId) {
            return res.send(result);
        }

        const queryRes = await asyncQuery('sharpeRatio', ...marketQueries.sharpeRatio(marketId), pgPool);

        if (!queryRes[1][0]) {
            return res.send(result);
        }

        result.marketId = marketId;
        result.timestamp = queryRes[1][0].timestamp;
        result.sharpeRatio = queryRes[1][0].sharpe_ratio;

        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/sortino-ratio', async (req, res) => {
        // Accepts a marketId (mandatory) and calculates the sortino ratio for the market.

        const result = {
            marketId: "",
            timestamp: "",
            sortinoRatio: ""
        }

        res = applyHeaders(res);

        const marketId = req.query.marketId;

        if (!marketId) {
            return res.send(result);
        }

        const queryRes = await asyncQuery('sortinoRatio', ...marketQueries.sortinoRatio(marketId), pgPool);

        if (!queryRes[1][0]) {
            return res.send(result);
        }

        result.marketId = marketId;
        result.timestamp = queryRes[1][0].timestamp;
        result.sortinoRatio = queryRes[1][0].sortino_ratio;

        res.send(result);
    });

    // ---------- UNTESTED ---------- //
    app.get('/unique-depositors', async (req, res) => {
        
        const result = {
            timestamp: "0",
            uniqueDepositors: "0"
        };

        res = applyHeaders(res) 

        const queryRes = await asyncQuery('uniqueDepositors', ...partyQueries.uniqueDepositors(), pgPool);

        console.log(queryRes)
        if (!queryRes[1][0]) {
            return res.send(result)
        }

        result.timestamp = queryRes[1][0].timestamp;
        result.uniqueDepositors = queryRes[1][0].unique_depositors;

        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/historical-unique-depositors', async (req, res) => {

        const result = {
            timestamp: "0",
            interval: "",
            data: [ { timeBucket: "0", uniqueDepositors: "0" } ]
        };

        res = applyHeaders(res);

        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];

        const args = req.query;
        const limit = 1000;
        if (!validIntervals.includes(args.interval)) {
            args.interval = 'INTERVAL_1D';
        }

        let table
        switch (args.interval) {
            case ('INTERVAL_5M'): {
                table = 'bridge_diffs_5m';
                break;
            }
            case ('INTERVAL_1H'): {
                table = 'bridge_diffs_1h';
                break;
            }
            case ('INTERVAL_1D'): {
                table = 'bridge_diffs_1d';
                break;
            }
        }

        const queryRes =  await asyncQuery('historicalUniqueDepositors', ...partyQueries.historicalUniqueDepositors(limit, table), pgPool)

        console.log(queryRes);
        if (!queryRes[1][0]) {
            return res.send(result);
        }

        result.timestamp = queryRes[1][0].first_timestamp;
        result.interval = args.interval;
        result.data.length = 0;

        let datum = { timeBucket: queryRes[1][0].first_bucket, uniqueDepositors: 1 };
        for (let row of queryRes[1].slice(1)) {
            if (row.first_bucket == datum.timeBucket) {
                datum.uniqueDepositors++;
            } else {
                result.data.push(datum);
                datum = { timeBucket: row.first_bucket, uniqueDepositors: 1 };
            }
        }
        result.data.push(datum);

        res.send(result);

    })

    // ---------- UNTESTED ---------- //
    app.get('/unique-traders', async (req, res) => {

        const result = {
            timestamp: "0",
            uniqueTraders: "0"
        };

        res = applyHeaders(res) 

        const queryRes = await asyncQuery('uniqueTraders', ...partyQueries.uniqueTraders() , pgPool);

        console.log(queryRes);
        if (!queryRes[1][0]) {
            res.send(result);
        }

        result.timestamp = queryRes[1][0].timestamp;
        result.uniqueTraders = queryRes[1][0].unique_traders;

        res.send(result);

    });

    // ---------- UNTESTED ---------- //
    app.get('/historical-unique-traders', async (req, res) => {

        const result = {
            timestamp: "0",
            interval: "",
            data: [ { timeBucket: "0", uniqueTraders: 0 } ]
        }

        res = applyHeaders(res);

        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];

        const args = req.query;
        const limit = 1000;
        if (!validIntervals.includes(args.interval)) {
            args.interval = 'INTERVAL_1D';
        }

        let table
        switch (args.interval) {
            case ('INTERVAL_5M'): {
                table = 'party_data_5m';
                break;
            }
            case ('INTERVAL_1H'): {
                table = 'party_data_1h';
                break;
            }
            case ('INTERVAL_1D'): {
                table = 'party_data_1d';
                break;
            }
        }

        const queryRes = await asyncQuery('historicalUniqueTraders', ...partyQueries.historicalUniqueTraders(limit, table), pgPool)

        console.log(queryRes);
        if (!queryRes[1][0]) {
            return res.send(result);
        }

        result.timestamp = queryRes[1][0].first_timestamp;
        result.interval = args.interval;
        result.data.length = 0;

        let datum = { timeBucket: queryRes[1][0].first_bucket, uniqueTraders: 1 };
        for (let row of queryRes[1].slice(1)) {
            if (row.first_bucket == datum.timeBucket) {
                datum.uniqueTraders++;
            } else {
                result.data.push(datum);
                datum = { timeBucket: row.first_bucket, uniqueTraders: 1 };
            }
        }
        result.data.push(datum);

        res.send(result);

    });

    app.get('/taker-data', async (req, res) => {
        // Accepts a markteId (optional), and returns the taker data for the market, omitting the
        // marketId will return results for all active markets.


    });

    app.get('/rolling-taker-data', async (req, res) => {
        // Accepts a markteId (optional) and a rolling time interval, returns the taker data for the market over the
        // rolling time interval. Omitting the marketId will return results for all active markets.


    });

    app.get('/historical-taker-data', async (req, res) => {
        // Accepts a markteId (optional) and a time interval, returns the taker data for the market over the time
        // interval. Omitting the marketId will return results for all active markets.


    });

};


module.exports = { routes };