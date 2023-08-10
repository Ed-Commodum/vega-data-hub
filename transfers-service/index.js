const { Client, Pool } = require('pg');
const format = require('pg-format');

const pgClient = new Client({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});

const pgPool = new Pool({
    host: process.env.TIMESCALEDB_HOST,
    port: process.env.TIMESCALEDB_PORT,
    database: 'postgres',
    user: 'postgres',
    password: 'ilovetimescaledb'
});


const kafka = require("kafka-node");

// const kafkaBrokers = process.env.KAFKA_BROKERS.split(",");
const kafkaBrokers = process.env.KAFKA_BROKERS;

console.log(process.env);

const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
// const kafkaProducer = new kafka.Producer(kafkaClient);
// const kafkaAdmin = new kafka.Admin(kafkaClient);
let kafkaConsumer;

const { transferEnumMappings } = require('./transferEnums.js');
const { RecentBlocks } = require('./ringBuffers.js');
const recentBlocks = new RecentBlocks(20000);
const ledgerMovementsQueue = [];
const ledgerMovementsToInsert = [];
const transfersQueue = [];
const transfersToInsert = [];
let ledgerMovementsIntervalId;
let transfersIntervalId;
let intervalId;

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS transfers (
    synth_timestamp BIGINT
);

CREATE TABLE IF NOT EXISTS ledger_movements (
    from_account_asset TEXT NOT NULL,
    from_account_owner TEXT NOT NULL,
    from_account_type TEXT NOT NULL,
    from_account_market TEXT NOT NULL,
    to_account_asset TEXT NOT NULL,
    to_account_owner TEXT NOT NULL,
    to_account_type TEXT NOT NULL,
    to_account_market TEXT NOT NULL,
    amount NUMERIC,
    type TEXT NOT NULL,
    timestamp BIGINT,
    synth_timestamp BIGINT,
    from_balance NUMERIC,
    to_balance NUMERIC,
    PRIMARY KEY (
        synth_timestamp
    )
);

SELECT create_hypertable('transfers', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
SELECT create_hypertable('ledger_movements', 'synth_timestamp', chunk_time_interval => '604800000000000'::BIGINT, if_not_exists => TRUE);
`;

const insertLedgerMovements = `
INSERT INTO ledger_movements (
    from_account_asset,
    from_account_owner,
    from_account_type,
    from_account_market,
    to_account_asset,
    to_account_owner,
    to_account_type,
    to_account_market,
    amount,
    type,
    timestamp,
    synth_timestamp,
    from_balance,
    to_balance
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12,
    $13,
    $14
) ON CONFLICT DO NOTHING;
`;

const fInsertLedgerMovements = `
INSERT INTO ledger_movements (
    from_account_asset,
    from_account_owner,
    from_account_type,
    from_account_market,
    to_account_asset,
    to_account_owner,
    to_account_type,
    to_account_market,
    amount,
    type,
    timestamp,
    synth_timestamp,
    from_balance,
    to_balance
) values %L RETURNING *;`

const insertTransfers = `
INSERT INTO transfers (
    
) values (
    
) ON CONFLICT () DO NOTHING
RETURNING *;
`;

const upsertTransfers = `
INSERT INTO transfers (
    
) values (
    
) ON CONFLICT () DO UPDATE SET (

) = (

)
RETURNING *;
`;

const setIntegerNowFunc = `
SELECT set_integer_now_func('transfers', 'current_time_ns');
SELECT set_integer_now_func('ledger_movements', 'current_time_ns');
`;

const continuousAggregates = {
    gainsLosses: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW gains_losses_5m
            WITH (timescaledb.continuous) AS
            SELECT market_id,
                time_bucket(300000000000, synth_timestamp) AS bucket,
                CASE
                    WHEN type = 'TRANSFER_TYPE_MTM_LOSS' THEN from_account_owner
                    WHEN type = 'TRANSFER_TYPE_MTM_WIN' THEN to_account_owner
                    WHEN type = 'TRANSFER_TYPE_LOSS' THEN from_account_owner
                    WHEN type = 'TRANSFER_TYPE_WIN' THEN to_account_owner
                END as party_id,
                sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_WIN') as sum_unrealized_gain,
                sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_LOSS') as sum_unrealized_loss,
                sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_WIN') AS sum_realized_gain,
                sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_LOSS') as sum_realized_loss
            FROM ledger_movements
            GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('gains_losses_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        // interval_1h: {},
        // intervaln_1d: {}
    },
    pnlDeltas: {
        interval_5m: {
            createMatView: `
            CREATE MATERIALIZED VIEW pnl_deltas_5m
            WITH (timescaledb.continuous) AS
            SELECT
                to_account_market as market_id,
                time_bucket(300000000000, synth_timestamp) as bucket,
                CASE
                    WHEN type = 'TRANSFER_TYPE_MTM_LOSS' THEN from_account_owner
                    WHEN type = 'TRANSFER_TYPE_MTM_WIN' THEN to_account_owner
                    WHEN type = 'TRANSFER_TYPE_LOSS' THEN from_account_owner
                    WHEN type = 'TRANSFER_TYPE_WIN' THEN to_account_owner
                END as party_id,
                (sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_LOSS')) as unrealized_delta,
                (sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_LOSS')) as realized_delta,
                last(timestamp, timestamp) as last_timestamp
            FROM ledger_movements
            GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('pnl_deltas_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1h: {
            createMatView: `
            CREATE MATERIALIZED VIEW pnl_deltas_1h
            WITH (timescaledb.continuous) AS
            SELECT
                to_account_market as market_id,
                time_bucket(3600000000000, synth_timestamp) as bucket,
                CASE
                    WHEN type = 'TRANSFER_TYPE_MTM_LOSS' THEN from_account_owner
                    WHEN type = 'TRANSFER_TYPE_MTM_WIN' THEN to_account_owner
                    WHEN type = 'TRANSFER_TYPE_LOSS' THEN from_account_owner
                    WHEN type = 'TRANSFER_TYPE_WIN' THEN to_account_owner
                END as party_id,
                (sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MTM_LOSS')) as unrealized_delta,
                (sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_WIN') - sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_LOSS')) as realized_delta,
                last(timestamp, timestamp) as last_timestamp
            FROM ledger_movements
            GROUP BY market_id, party_id, time_bucket(3600000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('pnl_deltas_1h',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    marginAdditions: {
        interval_5m: {
            createMatView: `CREATE METERIALIZED VIEW margin_additions_5m
            with (timescaledb.continuous) AS
            SELECT 
                to_account_market as market_id,
                time_bucket(300000000000, synth_timestamp) as bucket,
                sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MARGIN_LOW') as margin_added,
                to_account_owner as party
            FROM ledger_movements
            GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp);

            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('margin_additions_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    marginDeductions: {
        interval_5m: {
            createMatView: `CREATE METERIALIZED VIEW margin_deductions_5m
            with (timescaledb.continuous) AS
            SELECT
                from_account_market as market_id,
                time_bucket(300000000000, synth_timestamp) as bucket,
                sum(amount) FILTER (WHERE type = 'TRANSFER_TYPE_MARGIN_HIGH') as margin_deducted,
                from_account_owner as party
            FROM ledger_movements
            GROUP BY market_id, party_id, time_bucket(300000000000, synth_timestamp);
            `,
            addrefreshPolicy: `SELECT add_continuous_aggregate_policy('margin_deductions_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    depositsWithdrawals: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW deposits_withdrawals_5m
            with (timescaledb.continuous) AS
            SELECT
                time_bucket(300000000000, synth_timestamp) as bucket,
                max(timestamp) AS timestamp,
                type,
                to_account_owner AS to_account,
                to_account_asset AS asset,
                from_account_owner AS from_account,
                amount
            FROM ledger_movements
            WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW'
            GROUP BY asset, to_account, from_account, type, amount, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('deposits_withdrawals_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    bridgeDiffs: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW bridge_diffs_5m
            with (timescaledb.continuous) AS
            SELECT
                time_bucket(300000000000, synth_timestamp) as bucket,
                max(timestamp) AS timestamp,
                CASE
                    WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_owner
                    WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_owner
                END AS party_id,
                CASE
                    WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_asset
                    WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_asset
                END AS asset,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
                        ELSE 0
                    END) AS deposits,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN amount
                        ELSE 0
                    END) AS withdrawals,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
                        WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN -amount
                        ELSE 0
                    END) AS diff
            FROM ledger_movements
            WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW'
            GROUP BY asset, party_id, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('bridge_diffs_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW bridge_diffs_1h
            with (timescaledb.continuous) AS
            SELECT
                time_bucket(3600000000000, synth_timestamp) as bucket,
                max(timestamp) AS timestamp,
                CASE
                    WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_owner
                    WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_owner
                END AS party_id,
                CASE
                    WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_asset
                    WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_asset
                END AS asset,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
                        ELSE 0
                    END) AS deposits,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN amount
                        ELSE 0
                    END) AS withdrawals,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
                        WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN -amount
                        ELSE 0
                    END) AS diff
            FROM ledger_movements
            WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW'
            GROUP BY asset, party_id, time_bucket(3600000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('bridge_diffs_1h',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        },
        interval_1d: {
            createMatView: `CREATE MATERIALIZED VIEW bridge_diffs_1d
            with (timescaledb.continuous) AS
            SELECT
                time_bucket(86400000000000, synth_timestamp) as bucket,
                max(timestamp) AS timestamp,
                CASE
                    WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_owner
                    WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_owner
                END AS party_id,
                CASE
                    WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN to_account_asset
                    WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN from_account_asset
                END AS asset,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
                        ELSE 0
                    END) AS deposits,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN amount
                        ELSE 0
                    END) AS withdrawals,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_DEPOSIT' THEN amount
                        WHEN type = 'TRANSFER_TYPE_WITHDRAW' THEN -amount
                        ELSE 0
                    END) AS diff
            FROM ledger_movements
            WHERE type = 'TRANSFER_TYPE_DEPOSIT' OR type = 'TRANSFER_TYPE_WITHDRAW'
            GROUP BY asset, party_id, time_bucket(86400000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('bridge_diffs_1d',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    infraFeesByAsset: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW infra_fees_by_asset_5m
            WITH (timescaledb.continuous) AS
            SELECT
                time_bucket(300000000000, synth_timestamp) as bucket,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY' THEN amount ELSE 0
                    END) as amount_paid,
                from_account_asset as asset
            FROM ledger_movements
            GROUP BY asset, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('infra_fees_by_asset_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    feesPaid: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW fees_paid_5m
            WITH (timescaledb.continuous) AS
            SELECT
                time_bucket(300000000000, synth_timestamp) AS bucket,
                to_account_market AS market_id,
                from_account_owner AS party_id,
                last(timestamp, synth_timestamp) AS timestamp,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_MAKER_FEE_PAY' THEN amount ELSE 0
                    END) as maker_fee_paid,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_LIQUIDITY_FEE_PAY' THEN amount ELSE 0
                    END) as liquidity_fee_paid,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY' THEN amount ELSE 0
                    END) as infrastructure_fee_paid,
                from_account_asset AS asset
            FROM ledger_movements
            GROUP BY market_id, party_id, asset, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('fees_paid_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    },
    feesEarned: {
        interval_5m: {
            createMatView: `CREATE MATERIALIZED VIEW fees_earned_5m
            WITH (timescaledb.continuous) AS
            SELECT
                time_bucket(300000000000, synth_timestamp) AS bucket,
                to_account_owner AS party_id,
                last(timestamp, synth_timestamp) AS timestamp,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_MAKER_FEE_RECEIVE' THEN amount ELSE 0
                    END) AS maker_fee_earned,
                sum(CASE
                        WHEN type = 'TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE' THEN amount ELSE 0
                    END) AS liquidity_fee_earned,
                sum(CASE
                        WHEN from_account_type = 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' THEN amount ELSE 0
                    END) AS infrastructure_fee_earned,
                from_account_asset AS asset
            FROM ledger_movements
            GROUP BY party_id, asset, time_bucket(300000000000, synth_timestamp);
            `,
            addRefreshPolicy: `SELECT add_continuous_aggregate_policy('fees_earned_5m',
            start_offset => '2592000000000000'::bigint,
            end_offset => '60000000000'::bigint,
            schedule_interval => INTERVAL '1 minute');`
        }
    }

};

const createContAggs = async (client, types) => {

    const queryQueue = [];

    for (let type of types) {
        for (let [ interval, queries ] of Object.entries(continuousAggregates[type])) {
            for (let [ name, query ] of Object.entries(queries)) {
                queryQueue.push({
                    type: type,
                    interval: interval,
                    name: name,
                    query: query
                });
            };
        };
    };

    const next = (obj) => {
        return new Promise((resolve, reject) => {
            console.log(`Submitting query ${obj.name} of type ${obj.type} for interval ${obj.interval}.`)
            client.query(obj.query, (err, res) => {
                if (!err) {
                    console.log(res);
                    resolve();
                } else {
                    console.log("Query failed: ", err);
                    reject();
                }
            });
        });
    };

    while (queryQueue.length) {
        await next(queryQueue.shift());
    };

};

const flushLedgerMovementsQueue = () => {

    clearInterval(ledgerMovementsIntervalId);

    while (ledgerMovementsQueue.length) {

        const evt = ledgerMovementsQueue.shift();
        const idParts = evt.id.split("-");
        const height = idParts[0];
        const evtIndex = idParts[1];
        const block = recentBlocks.get(height);

        if (!block) {
            console.log(`Missing block at height ${height}...`)
            ledgerMovementsQueue.unshift(evt);
            break;
        }

        // Only format ledgerMovements fields that are not empty
        if (evt.Event.LedgerMovements.ledger_movements) {
            // ledgerMovementsToInsert.push(...formatLedgerMovements(evt.Event.LedgerMovements.ledger_movements));
            ledgerMovementsToInsert.push(...formatLedgerMovements(evt, block));
        }

        if (ledgerMovementsToInsert.length >= 300) {
            persistLedgerMovements(ledgerMovementsToInsert);
            while (ledgerMovementsToInsert.length) ledgerMovementsToInsert.shift();
        }

    }

    if (ledgerMovementsToInsert.length > 0) {
        persistLedgerMovements(ledgerMovementsToInsert);
        while (ledgerMovementsToInsert.length) ledgerMovementsToInsert.shift();
    }

    ledgerMovementsIntervalId = setInterval(flushLedgerMovementsQueue, 100);

}

ledgerMovementsIntervalId = setInterval(flushLedgerMovementsQueue, 100);

const start = () => {

    // Connect to Kafka.
    const kafkaClient = new kafka.KafkaClient({ kafkaHost: kafkaBrokers });
    const kafkaAdmin = new kafka.Admin(kafkaClient);

    // Connect to postgres.
    pgPool.connect((err) => {
        if (err) {
            console.log(err);
        }
    });

    pgClient.connect((err) => {
        if (!err) {
            console.log("Connected to postgres...");
            pgClient.query(createTablesQuery, (err, res) => {
                if (!err) {
                    console.log("Created tables.");
                    console.log(res);
                    // Set integer time.
                    pgClient.query(setIntegerNowFunc, async (err, res) => {
                        if(!err) {
                            console.log(res);
                            await createContAggs(pgPool, ["feesPaid", "feesEarned", "pnlDeltas", "infraFeesByAsset", "bridgeDiffs"]);
                            kafkaAdmin.createTopics([{ topic: "transfers", partitions: 1, replicationFactor: 1 }], (err, result) => {
                                if (!err) {
                                    console.log("Topics created successfully");
                                    // Set up consumer
                                    setConsumer(kafkaConsumer);
                                } else {
                                    console.log(err);
                                }
                            });
                        } else {
                            console.log(err);
                        };
                    });
                } else {
                    console.log(err);
                };
            });
        } else {
            console.log(err);
        };
    });
};

const setConsumer = (kafkaConsumer) => {
    kafkaConsumer = new kafka.Consumer(kafkaClient, [], { groupId: "transfers-group-23", fetchMaxBytes: 2 * 1024 * 1024, fromOffset: 'true' });
    kafkaConsumer.on("message", (msg) => {

        // const dateTime = new Date(Date.now()).toISOString();
        // console.log(`${dateTime}: New message`);

        const evt = JSON.parse(msg.value);

        if (msg.topic == "transfers") {
            
            // const evt = JSON.parse(msg.value);
            // console.log(evt);
            // console.dir(evt, { depth: null });

            if (evt.Event.BeginBlock) {
                // console.log(msg);
                // console.log("Begin Block event at offset: ", msg.offset)
                evt.Event.BeginBlock["ledger_movement_count"] = 0;
                recentBlocks.push(evt.Event.BeginBlock);   
            }

            if (evt.Event.LedgerMovements) {

                // console.log("Ledger Movement at offset: ", msg.offset)
                // console.dir(evt, { depth: null });

                ledgerMovementsQueue.push(evt);

            }

        }

    });
    kafkaConsumer.addTopics([{ topic: 'transfers', offset: 0 }], () => console.log("topic added"))
};

const formatLedgerMovements = (evt, block) => { // movements) => {

    const movements = evt.Event.LedgerMovements.ledger_movements;

    const rows = [];

    try {
        for (let movement of movements) {
            if (!movement.entries) continue;
            for (let entry of movement.entries) {

                // Assign synthetic timestamp to ledger movement
                entry["timestamp"] = BigInt(block.timestamp);
                entry["synth_timestamp"] = BigInt(block.timestamp) + BigInt(block.ledger_movement_count);
                block.ledger_movement_count ++;

                // Convert enums to field names
                entry.type = transferEnumMappings.type[entry.type];
                entry.from_account.type = transferEnumMappings.accountType[entry.from_account.type];
                entry.to_account.type = transferEnumMappings.accountType[entry.to_account.type];

                // Replace undefined fields to prevent nulls in the PRIMARY KEY of the table
                if (entry.from_account.owner == undefined) entry.from_account.owner = "network";
                if (entry.to_account.owner == undefined) entry.to_account.owner = "network";
                
                if (entry.from_account.market_id == undefined) entry.from_account.market_id = "N/A";
                if (entry.to_account.market_id == undefined) entry.to_account.market_id = "N/A";

                const row = [
                    entry.from_account.asset_id,
                    entry.from_account.owner,
                    entry.from_account.type,
                    entry.from_account.market_id,
                    entry.to_account.asset_id,
                    entry.to_account.owner,
                    entry.to_account.type,
                    entry.to_account.market_id,
                    entry.amount,
                    entry.type,
                    entry.timestamp,
                    entry.synth_timestamp,
                    entry.from_account_balance,
                    entry.to_account_balance
                ];

                rows.push(row);

            }
        }
    } catch (err) {
        console.log(err);
        console.dir(movements, {depth:null});
    }

    return rows;

}

const persistLedgerMovements = (rows) => {

    // console.log("Inserting")
    // pgClient.query(format(fInsertLedgerMovements, rows), [], (err, res) => {
    pgPool.query(format(fInsertLedgerMovements, rows), [], (err, res) => {
        if (!err) {
            
        } else {
            console.log(`Error performing inserts`);
            console.log(err);
        }
    });

}

const persistTransfers = (evt) => {

    // console.log(pos);

    const row = [

    ];

    pgPool.query(insertTransfer, row, (err, res) => {
        if (!err) {
            // console.dir(res, { depth: null });
        } else {
            console.log("Error inserting position.");
        }
    });

};


setTimeout(start, 38000);