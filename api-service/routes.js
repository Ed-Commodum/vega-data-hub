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
        const noArgumentRes = "Please provide a partyId.\n"
    
        if (!partyId) {
            res.sendStatus(404);
            return;
        };
    

        // Test to see if party is in the necessary tables: party_data, positions
        
        const checkRes = await asyncQuery('checkPartyId', partyQueries.count(partyId, 'party_data_5m'), pgPool);
        const count = checkRes[1][0].count;

        if (!count || count == 0) {
            res.sendStatus(404);
            return;
        }

        const running = [];
        const result = {
            partyId: partyId,
            totals: { numTrades: 0, volume: 0, feesPaid: "0" },
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

    
        for (let [type, query] of [
            [ 'numTrades', partyQueries.numTrades(partyId) ],
            [ 'volume', partyQueries.volume(partyId) ],
            [ 'feesPaid', partyQueries.feesPaid(partyId) ],
            [ 'positions', partyQueries.openPositions(partyId) ] ]) {
            
            running.push(asyncQuery(type, query, pgPool));
        };
    
        const results = await Promise.all(running);
        console.dir(results, { depth: null });
    


        result['numTrades'].regular = results[0][1][0].num_trades;
        result['numTrades'].self = results[0][1][0].num_self_trades;
        result['numTrades'].total = (BigInt(result['numTrades'].regular) + BigInt(result['numTrades'].self)).toString();
    
        result['volume'].regular = results[1][1][0].volume;
        result['volume'].self = results[1][1][0].self_volume;
        result['volume'].total = (BigInt(result['volume'].regular) + BigInt(result['volume'].self)).toString();
    
        result['feesPaid'] = results[2][1][0].total_fees;
    
        // result['positions'] = results[3][1]
    
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
        const noArgumentRes = "Please provide a partyId.\n"
    
        if (!partyId) {
            return res.sendStatus(404);
        };
    
        const result = {
            partyId: partyId,
            positions: []
        }
    
        // Get positions
        const data = await asyncQuery('positions', partyQueries.openPositions(partyId), pgPool);
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
    
            varsRunning.push(asyncQuery('var', marketQueries.valueAtRisk(marketId, interval, bucketSize, confidenceInterval), pgPool));
            pricesRunning.push(asyncQuery('price', marketQueries.mostRecentPrice(marketId), pgPool));
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
        const noArgumentRes = "Please provide a marketId.\n"
    
        if (!marketId) {
            res.sendStatus(404);
            // res.send(noArgumentRes);
            return;
        };
    
        const running = [];
        const result = {
            marketId: marketId,
            numTrades: 0,
            volume: 0,
            fees: {
                total: 0,
                infrastructure: 0
            },
            openInterest: {
                timestamp: "",
                value: 0
            }
        };
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
    
        for (let [type, query] of [
            [ 'numTrades', marketQueries.totalNumTrades(marketId) ],
            [ 'volume', marketQueries.totalVolume(marketId) ],
            [ 'fees', marketQueries.totalFees(marketId) ],
            [ 'openInterest', marketQueries.openInterest(marketId) ] ]) {
            
            running.push(asyncQuery(type, query, pgPool));
        };
    
        const results = await Promise.all(running);
        console.log(results);
    
        result['numTrades'] = results[0][1][0].numTrades;
        result['volume'] = results[1][1][0].volume;
        result['fees'].total = results[2][1][0].total_fees;
        result['fees'].infrastructure = results[2][1][0].infrastructure_fees;
        result['openInterest'].timestamp = results[3][1][0].bucket;
        result['openInterest'].value = results[3][1][0].first_open_interest;
    
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
        let limit = req.query.limit;
        const interval = req.query.interval;
    
        console.log(marketId, limit, interval);
    
        const noArgumentRes = "Please provide a marketId, a limit, and one of the following intervals ['5m'].\n"
    
        if (!marketId || !interval) {
            res.send(404);
            return;
        };
    
        if (!limit) {
            limit = 50
        }

        if (interval != '5m') {
            return res.sendStatus(404);
        }

        const result = {
            marketId: marketId,
            interval: interval,
            sma50: [],
            sma100: [],
            sma200: []
        }
    
        let bucketSize;
        let safeWindow;
    
        if (interval == "5m") {
            bucketSize = "300000000000"
            safeWindow = "172800000000000"
        } else {
            res.send("Invalid interval");
            return;
        };
    
    
        console.log(marketId, interval, limit, bucketSize, safeWindow);
        console.log(marketQueries.simpleMovingAverages(marketId, interval, limit, bucketSize, safeWindow));
    
        const data = await asyncQuery('simpleMovingAverages', marketQueries.simpleMovingAverages(marketId, interval, limit, bucketSize, safeWindow), pgPool);
    
        for (let item of data[1]) {
            result.sma50.push(Number(item.sma_50));
            result.sma100.push(Number(item.sma_100));
            result.sma200.push(Number(item.sma_200));
        }
    
        console.log(result);
        res.send(result);
    });
    

    
    app.get('/party-fees-total', (req, res) => {
    
        const partyId = req.query.partyId;
        const noArgumentRes = "Please provide a partyId.\n"
    
        if (!partyId) {
            res.send(noArgumentRes);
        };
    
        const query = `
        SELECT y.party, SUM(y.fee)
        FROM fees_paid_1d x
        CROSS JOIN LATERAL ( VALUES (x.buyer, x.buyer_fee)
                                  , (x.seller, x.seller_fee)) as y(party, fee)
        WHERE party = '${partyId}'
        GROUP BY party;
        `
    
        pgPool.query(query, (err, result) => {
            if (!err) {
                console.log(result);
                res.send(result);
    
            } else {
                console.log(err);
            }
        });
    });

};


module.exports = { routes };