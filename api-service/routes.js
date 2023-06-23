const { asyncQuery, marketQueries, partyQueries } = require('./queries');


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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
    
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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

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
    
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

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

    app.get('/decimals', async () => {
        // Accepts a marketId (optional) and returns the decimal information for that market. If the marketId is
        // omitted then the decimal information for all markets is returned.

        const result = {
            markets: [
                {
                    marketId: "",
                    settlementAsset: "",
                    quoteName: "",
                    priceDecimals: "",
                    positionDecimals: ""
                }
            ]
        };

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const marketId = req.query.marketId;
        
        switch (true) {
            
            case (marketId != undefined): {
                // Return data for one market
                const res = await asyncQuery('market-decimals', ...marketQueries.getDecimals(marketId), pgPool);

                result.markets[0].marketId = res[1][0].market_id;
                result.markets[0].settlementAsset = res[1][0].future_settlement_asset;
                result.markets[0].quoteName = res[1][0].future_quote_name;
                result.markets[0].priceDecimals = res[1][0].decimal_places;
                result.markets[0].positionDecimals = res[1][0].position_decimal_places;

                break;
            }

            case (marketId == undefined): {
                // Return data for all markets
                const res = await asyncQuery('market-decimals', ...marketQueries.getAllDecimals(), pgPool);

                result.markets.shift();

                for (let market of res[1]) {
                    result.markets.push(
                        {
                            marketId: market.market_id,
                            settlementAsset: market.future_settlement_asset,
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
            volumeList: [
                {
                    marketId: "",
                    partyId: "",
                    timestamp: "",
                    volume: ""
                }
            ]
        }

        // Set headers
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const marketId = req.query.marketId;
        const partyId = req.query.partyId;

        switch (true) {
            case (marketId != undefined && partyId != undefined): {
                // Get volume for party on market
                
                const res = await asyncQuery('volume', ...partyQueries.volume(partyId, marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].volume) {
                    break;
                };

                result.volumeList[0].marketId = marketId;
                result.volumeList[0].partyId = partyId;
                result.volumeList[0].timestamp = res[1][0].timestamp;
                result.volumeList[0].volume = (BigInt(res[1][0].volume) + BigInt(res[1][0].self_volume)).toString();

                break;
            };

            case (marketId != undefined && partyId == undefined): {
                // Get volume for market

                const res = await asyncQuery('volume', ...marketQueries.volume(marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].volume) {
                    break;
                };

                result.volumeList[0].marketId = marketId;
                result.volumeList[0].partyId = "*";
                result.volumeList[0].timestamp = res[1][0].timestamp;
                result.volumeList[0].volume = res[1][0].volume;

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

                if (!res[1][0].market_id || !res[1][0].timestamp || !res[1][0].volume) {
                    break;
                };

                result.volumeList.shift();

                for (let market of res[1]) {
                    result.volumeList.push(
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

                if (!res[1][0].market_id || !res[1][0].timestamp || !res[1][0].volume) {
                    break;
                };

                result.volumeList.shift();

                for (let market of res[1]) {
                    result.volumeList.push(
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

    // ---------- UNFINISHED ---------- //
    app.get('/historical-volume', async (res, req) => {
        // Accepts a partyId (optional), a marketId (optional), and a time interval. Returns a historical time series
        // with data for the requested party and marketId. 

        const result = {
            volumeList: [
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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const args = req.query;
        const expectedArgs = ['partyId', 'marketId', 'interval'];
        const defaultArgs = { partyId: undefined, marketId: undefined, interval: "INTERVAL_1H" };

        for (let arg of expectedArgs) {
            if (!args[arg]) {
                args[arg] = defaultArgs[arg];
            };
        };

        const [ partyId, marketId, interval, limit ] =  [ args.partyId, args.marketId, args.interval, 500 ]
        // const validIntervals = [ "INTERVAL_5M", "INTERVAL_15M", "INTERVAL_30M", "INTERVAL_1H", "INTERVAL_3H", "INTERVAL_1D" ]
        const validIntervals = [ "INTERVAL_5M", "INTERVAL_1H", "INTERVAL_1D" ];
        const validMarkets = (await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool))[1].map(x => x.id);
        if (!validIntervals.includes(interval)) return res.send(result);
        if (!validMarkets.includes(marketId)) return res.send(result);
        if (!partyId) return res.send(result);

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

                // if (!res[1][0].timestamp || !res[1][0].volume) {
                //     break;
                // };

                result.volumeList[0].partyId = partyId;
                result.volumeList[0].marketId = marketId;
                result.volumeList[0].interval = interval;
                result.volumeList[0].timestamp = res[1][0][res[1][0].length-1].timestamp;
                result.volumeList[0].data.shift();
                for (let datum of res[1][0]) {
                    result.volumeList[0].data.push(
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
                const res = await asyncQuery('historicalVolume', ...marketQueries.historicalVolume(marketId, bucketSize, limit, marketTable), pgPool);

                console.log(res);

                // if (!res[1][0].timestamp || !res[1][0].volume) {
                //     break;
                // };

                result.volumeList[0].marketId = marketId;
                result.volumeList[0].partyId = "*";
                result.volumeList[0].interval = interval;
                result.volumeList[0].data.shift();
                for (let datum of res[1][0]) {
                    this.volumeList[0].data.push(
                        {
                            timeBucket: datum.bucket,
                            volume: (BigInt(datum.volume) + BigInt(datum.self_volume)).toString()
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
                // partyQueries.HistoricalVolume() query instead, but we will have to call it once for each market.
                const marketRes = await asyncQuery('getMarkets', ...marketQueries.getMarkets(), pgPool);

                console.log(marketRes[1]);

                for (let marketId of marketRes[1]) {
                    
                }

                const res = await asyncQuery('historicalVolume', ...partyQueries.historicalVolume(partyId, marketId, bucketSize, limit, partyTable), pgPool);

                // if (!res[1][0].market_id || !res[1][0].timestamp || !res[1][0].volume) {
                //     break;
                // };

                // These results will usually be very sparse, very few traders will have volume
                // in every interval on every timeframe. We can either return the sparse data or
                // we can fill the gaps with zeros, for now we will fill the gaps.

                result.volumeList.shift();

                const marketIds = [];
                const markets = {
                    marketId: {
                        partyId: partyId,
                        marketId: "",
                        interval: interval,
                        timestamp: "",
                        data: [
                            { timeBucket: "0", volume:"0" }
                        ]
                        
                    }
                };

                for (let datum of res[1]) {

                    if (!marketIds.includes(datum.market_id)) {
                        marketIds.push(datum.market_id);
                        markets.push(
                            {
                                partyId: partyId,
                                marketId: datum.market_id,
                                interval: interval,
                                timestamp: "",
                                data: [
                                    { timeBucket: "0", volume:"0" }
                                ]
                                
                            }
                        );
                    }

                    result.volumeList.push(
                        {
                            partyId: partyId,
                            marketId: market.market_id,
                            interval: interval,
                            timestamp: market.timestamp,
                            data: [
                                { timeBucket: "0", volume:"0" }
                            ]
                            
                        }
                    );
                }

                break;
            };

            case (marketId == undefined && partyId == undefined): {
                // Get volumes across all markets


                const res = await asyncQuery('volume', ...marketQueries.totalVolume(), pgPool);

                // if (!res[1][0].market_id || !res[1][0].timestamp || !res[1][0].volume) {
                //     break;
                // };

                result.volumeList.shift();

                for (let market of res[1]) {
                    result.volumeList.push(
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


    });

    // app.get('/global-historical-volume', async (res, req) => {
    //     // Returns a single time series of the global historical volume on vega.

    // });

    // ---------- TEST AGAIN ---------- //
    app.get('/trades-count', async (req, res) => {
        // Takes a marketId (optional) and a partyId (optional) and returns the most recent count of trades for
        // that party/market. If no party or market is specified then the global count of trades is returned.

        const result = {
            timestamp: "0",
            tradesCount: "0"
        };

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const marketId = req.query.marketId;
        const partyId = req.query.partyId;

        console.log(req.query);

        switch (true) {

            case (marketId != undefined && partyId != undefined): {
                // Get count of trades for party on market
                
                const res = await asyncQuery('tradesCount', ...partyQueries.numTrades(partyId), pgPool);

                console.log(res);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                for (let market of res[1]) {
                    if (market.market_id == marketId) {
                        result.timestamp = market.timestamp;
                        result.tradesCount = (BigInt(market.num_trades) + BigInt(market.num_self_trades)).toString();
                    }
                }

                break;
            };

            case (marketId != undefined && partyId == undefined): {
                // Get count of trades for market

                const res = await asyncQuery('tradesCount', ...marketQueries.numTrades(marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.timestamp = res[1][0].timestamp;
                result.tradesCount = res[1][0].num_trades;

                break;
            };

            case (marketId == undefined && partyId != undefined): {
                // Get count of trades for party
                
                const res = await asyncQuery('tradesCount', ...partyQueries.totalNumTrades(partyId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.timestamp = res[1][0].timestamp;
                result.tradesCount = (BigInt(res[1][0].num_trades) + BigInt(res[1][0].num_self_trades)).toString();

                break;
            };

            case (marketId == undefined && partyId == undefined): {
                // Get global count of trades

                const res = await asyncQuery('tradesCount', ...marketQueries.totalNumTrades(), pgPool);

                if (!res[1][0].timestamp || !res[1][0].num_trades) {
                    break;
                };

                result.timestamp = res[1][0].timestamp;
                result.tradesCount = res[1][0].num_trades;

                break;
            };

        }
        
        res.send(result);

    });

    app.get('/historical-trades-count', async (res, req) => {

    });

    // ---------- TEST AGAIN ---------- //
    app.get('/open-interest', async (req, res) => {
        // Uses market data updates to keep track of OI, accepts a marketId (optional) as input and
        // returns the most recent value of OI for that market, omitting marketId will return the OI
        // across all markets on Vega.

        const result = {
            openInterestList: [
                {
                    marketId: "",
                    timestamp: "0",
                    openInterest: "0"
                }
            ]
        }

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const marketId = req.query.marketId;

        switch (true) {
            case (marketId != undefined): {
                // Get open interets for a specific market

                const res = await asyncQuery('openInterest', ...marketQueries.openInterest(marketId), pgPool);

                if (!res[1][0].market_id || !res[1][0].timestamp || !res[1][0].open_interest) {
                    break;
                };

                result.openInterestList[0].marketId = res[1][0].market_id;
                result.openInterestList[0].timestamp = res[1][0].timestamp;
                result.openInterestList[0].openInterest = res[1][0].open_interest;

                break;
            };

            case (marketId == undefined): {
                // Get open interest for all markets

                const res = await asyncQuery('openInterest', ...marketQueries.totalOpenInterest(), pgPool);

                if (!res[1][0].market_id || !res[1][0].timestamp || !res[1][0].open_interest) {
                    break;
                };

                result.openInterestList.shift();

                for (let market of res[1]) {
                    result.openInterestList.push(
                        {
                            marketId: market.market_id,
                            timestamp: market.timestamp,
                            openInterest: market.open_interest
                        }
                    );
                }

                break;
            };
        }

        res.send(result);

    });

    app.get('/historical-open-interest', async (res, req) => {

    });

    // ---------- UNTESTED ---------- //
    app.get('/fees-paid', async (req, res) => {
        // Accepts a partyId (mandatory) and a marketId (optional) returns a summary of trading fees paid 
        // by a party on all markets or by a party on a specific market. Omitting the partyId will return
        // an empty result.
        
        const result = {
            partyId: "",
            feesPaidList: [
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
        }

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const partyId = req.query.partyId;
        const marketId = req.query.marketId;

        if (!partyId) return res.send(result);

        switch (true) {

            case (marketId != undefined): {
                // Fees paid by party on market

                const res = await asyncQuery('feesPaid', ...partyQueries.feesPaid(partyId, marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].maker_fee_paid || !res[1][0].liquidity_fee_paid || !res[1][0].infrastructure_fee_paid) {
                    break;
                };

                result.partyId = partyId;
                result.feesPaidList[0].marketId = marketId;
                result.feesPaidList[0].timestamp = res[1][0].timestamp;
                result.feesPaidList[0].fees.total = (BigInt(res[1][0].maker_fee_paid) + BigInt(res[1][0].liquidity_fee_paid) + BigInt(res[1][0].infrastructure_fee_paid)).toString();
                result.feesPaidList[0].fees.maker = res[1][0].maker_fee_paid;
                result.feesPaidList[0].fees.liquidity = res[1][0].liquidity_fee_paid;
                result.feesPaidList[0].fees.infrastructure = res[1][0].infrastructure_fee_paid;

                break;

            };

            case (marketId == undefined): {
                // Fees paid by party on all markets

                const res = await asyncQuery('feesPaid', ...partyQueries.totalFeesPaid(partyId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].maker_fee_paid || !res[1][0].liquidity_fee_paid || !res[1][0].infrastructure_fee_paid) {
                    break;
                };

                result.partyId = partyId;
                result.feesPaidList.shift();

                for (let market of res[1]) {
                    result.feesPaidList.push(
                        {
                            marketId: market.market_id,
                            timestamp: market.timestamp,
                            fees: {
                                total: (BigInt(market.maker_fee_paid) + BigInt(market.liquidity_fee_paid) + BigInt(market.infrastructure_fee_paid)).toString(),
                                maker: market.maker_fee_paid,
                                liquidity: market.liquidity_fee_paid,
                                infrastructure: market.infrastructure_fee_paid
                            }
                        }
                    );
                }

                break;
            };
        };

        res.send(result);
        
    });

    // ---------- UNTESTED ---------- //
    app.get('/fees-earned', async () => {
        // Accepts a partyId (mandatory) and a marketId (optional), returns a summary of all trading fees earned
        // by a party on a specific market or all trading fees earned by a party on all markets. Omitting the
        // partyId will return an empty result.

        const result = {
            partyId: "",
            feesEarnedList: [
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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const partyId = req.query.partyId;
        const marketId = req.query.marketId;

        if (!partyId) return res.send(result);

        switch (true) {

            case (marketId != undefined): {

                const res = await asyncQuery('feesEarned', ...partyQueries.feesEarned(partyId, marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].maker_fee_earned || !res[1][0].liquidity_fee_earned || !res[1][0].infrastructure_fee_earned) {
                    break;
                };

                result.partyId = partyId;
                result.feesEarnedList[0].marketId = marketId;
                result.feesEarnedList[0].timestamp = res[1][0].timestamp;
                result.feesEarnedList[0].fees.total = (BigInt(res[1][0].maker_fee_earned) + BigInt(res[1][0].liquidity_fee_earned) + BigInt(res[1][0].infrastructure_fee_earned)).toString();
                result.feesEarnedList[0].fees.maker = res[1][0].maker_fee_earned;
                result.feesEarnedList[0].fees.liquidity = res[1][0].liquidity_fee_earned;
                result.feesEarnedList[0].fees.infrastructure = res[1][0].infrastructure_fee_earned;

                break;
            };

            case (marketId == undefined): {

                const res = await asyncQuery('feesEarned', ...partyQueries.totalFeesEarned(partyId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].maker_fee_earned || !res[1][0].liquidity_fee_earned || !res[1][0].infrastructure_fee_earned) {
                    break;
                };

                result.partyId = partyId;
                result.feesEarnedList.shift();


                for (let market of res[1]) {
                    result.feesEarnedList.push(
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

    // ---------- UNTESTED ---------- //
    app.get('/fees-generated', async (req, res) => {
        // Accepts a marketId (optional) and returns a summary of all the fees that have been generated by
        // that market. Omitting a marketId will return a summary of all fees generated by all markets.

        const result = {
            feesGeneratedList: [
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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        
        const marketId = req.query.marketId;

        switch (true) {

            case (marketId != undefined): {

                const res = await asyncQuery('feesGenerated', ...marketQueries.feesGenerated(marketId), pgPool);

                if (!res[1][0].timestamp || !res[1][0].maker_fees_generated || !res[1][0].liquidity_fees_generated || !res[1][0].infrastructure_fees_generated) {
                    break;
                };

                result.feesGeneratedList[0].marketId = marketId;
                result.feesGeneratedList[0].timestamp = res[1][0].timestamp;
                result.feesGeneratedList[0].fees.total = (BigInt(res[1][0].maker_fees_generated) + BigInt(res[1][0].liquidity_fees_generated) + BigInt(res[1][0].infrastructure_fees_generated)).toString();
                result.feesGeneratedList[0].fees.maker = res[1][0].maker_fees_generated;
                result.feesGeneratedList[0].fees.liquidity = res[1][0].liquidity_fees_generated;
                result.feesGeneratedList[0].fees.infrastructure = res[1][0].infrastructure_fees_generated;

                break;
            };

            case (marketId == undefined): {

                const res = await asyncQuery('feesGenerated', ...marketQueries.totalFeesGenerated(), pgPool);

                if (!res[1][0].timestamp || !res[1][0].maker_fees_generated || !res[1][0].liquidity_fees_generated || !res[1][0].infrastructure_fees_generated) {
                    break;
                };

                result.feesGeneratedList.shift();

                for (let market of res[1]) {
                    result.feesGeneratedList.push(
                        {
                            marketId: market.market_id,
                            timestamp: market.timestamp,
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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

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
            pnlList: [
                {
                    marketId: "",
                    timestamp: "",
                    realizedPnl: "0",
                    unrealizedPnl: "0"
                }
            ]
        }

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

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

        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET');
        res.append('Access-Control-Allow-Headers', 'Content-Type');

        const args = req.query;
        const expectedArgs = ['marketId', 'interval', 'confidenceInterval'];
        const defaultArgs = { marketId: undefined, interval: "INTERVAL_1H", confidenceInterval: 95 }

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

    app.get('/sharpe-ratio', async (req, res) => {

    });

    app.get('/sortino-ratio', async (req, res) => {

    });

    app.get('/unique-traders', async (res, req) => {

    });

    app.get('/unique-depositors', async (res, req) => {

    });

};


module.exports = { routes };