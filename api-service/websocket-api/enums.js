const enums = {
    account: {
        type: {
            // Default value
            ACCOUNT_TYPE_UNSPECIFIED: 0,
            // Insurance pool accounts contain insurance pool funds for a market
            ACCOUNT_TYPE_INSURANCE: 1,
            // Settlement accounts exist only during settlement or mark-to-market
            ACCOUNT_TYPE_SETTLEMENT: 2,
            // Margin accounts contain funds set aside for the margin needed to support a party's open positions.
            ACCOUNT_TYPE_MARGIN: 3,
            // General accounts contain the collateral for a party that is not otherwise allocated.
            ACCOUNT_TYPE_GENERAL: 4,
            // Infrastructure accounts contain fees earned by providing infrastructure on Vega
            ACCOUNT_TYPE_FEES_INFRASTRUCTURE: 5,
            // Liquidity accounts contain fees earned by providing liquidity on Vega markets
            ACCOUNT_TYPE_FEES_LIQUIDITY: 6,
            // This account is created to hold fees earned by placing orders that sit on the book.
            ACCOUNT_TYPE_FEES_MAKER: 7,
            // This account is created to maintain liquidity providers funds commitments
            ACCOUNT_TYPE_BOND: 9,
            // External account represents an external source (deposit/withdrawal)
            ACCOUNT_TYPE_EXTERNAL: 10,
            // Global insurance account for the asset
            ACCOUNT_TYPE_GLOBAL_INSURANCE: 11,
            // Global reward account for the asset
            ACCOUNT_TYPE_GLOBAL_REWARD: 12,
            // Per asset account used to store pending transfers (if any)
            ACCOUNT_TYPE_PENDING_TRANSFERS: 13,
            // Per asset reward account for fees paid to makers
            ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES: 14,
            // Per asset reward account for fees received by makers
            ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES: 15,
            // Per asset reward account for fees received by liquidity providers
            ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES: 16,
            // Per asset reward account for market proposers when the market goes above some trading threshold
            ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS: 17,
        }
    },

    asset: {
        status: {
            // Default value, always invalid
            STATUS_UNSPECIFIED: 0,
            // Asset is proposed and under vote
            STATUS_PROPOSED: 1,
            // Asset has been rejected from governance
            STATUS_REJECTED: 2,
            // Asset is pending listing from the bridge
            STATUS_PENDING_LISTING: 3,
            // Asset is fully usable in the network
            STATUS_ENABLED: 4
        }
    },

    market: {
        tradingMode: {
            // Default value, this is invalid
            TRADING_MODE_UNSPECIFIED: 0,
            // Normal trading
            TRADING_MODE_CONTINUOUS: 1,
            // Auction trading (FBA)
            TRADING_MODE_BATCH_AUCTION: 2,
            // Opening auction
            TRADING_MODE_OPENING_AUCTION: 3,
            // Auction triggered by monitoring
            TRADING_MODE_MONITORING_AUCTION: 4,
            // No trading is allowed
            TRADING_MODE_NO_TRADING: 5,
        },
        state: {
            // Default value, invalid
            STATE_UNSPECIFIED: 0,
            // The governance proposal valid and accepted
            STATE_PROPOSED: 1,
            // Outcome of governance votes is to reject the market
            STATE_REJECTED: 2,
            // Governance vote passes/wins
            STATE_PENDING: 3,
            // Market triggers cancellation condition or governance
            // votes to close before market becomes Active
            STATE_CANCELLED: 4,
            // Enactment date reached and usual auction exit checks pass
            STATE_ACTIVE: 5,
            // Price monitoring or liquidity monitoring trigger
            STATE_SUSPENDED: 6,
            // Governance vote to close (Not currently implemented)
            STATE_CLOSED: 7,
            // Defined by the product (i.e. from a product parameter,
            // specified in market definition, giving close date/time)
            STATE_TRADING_TERMINATED: 8,
            // Settlement triggered and completed as defined by product
            STATE_SETTLED: 9,
        }
    },

    order: {
        timeInForce: {
            // Default value for TimeInForce, can be valid for an amend
            TIME_IN_FORCE_UNSPECIFIED: 0,
            // Good until cancelled.
            TIME_IN_FORCE_GTC: 1,
            // Good until specified time.
            TIME_IN_FORCE_GTT: 2,
            // Immediate or cancel.
            TIME_IN_FORCE_IOC: 3,
            // Fill or kill.
            TIME_IN_FORCE_FOK: 4,
            // Good for auction.
            TIME_IN_FORCE_GFA: 5,
            // Good for normal.
            TIME_IN_FORCE_GFN: 6
        },
        type: {
            // Default value, always invalid
            TYPE_UNSPECIFIED: 0,
            // Used for Limit orders
            TYPE_LIMIT: 1,
            // Used for Market orders
            TYPE_MARKET: 2,
            // Used for orders where the initiating party is the network (with distressed parties)
            TYPE_NETWORK: 3,
        },
        status: {
            // Default value, always invalid
            STATUS_UNSPECIFIED: 0,
            // Used for active unfilled or partially filled orders
            STATUS_ACTIVE: 1,
            // Used for expired GTT orders
            STATUS_EXPIRED: 2,
            // Used for orders cancelled by the party that created the order
            STATUS_CANCELLED: 3,
            // Used for unfilled FOK or IOC orders, and for orders that were stopped by the network
            STATUS_STOPPED: 4,
            // Used for closed fully filled orders
            STATUS_FILLED: 5,
            // Used for orders when not enough collateral was available to fill the margin requirements
            STATUS_REJECTED: 6,
            // Used for closed partially filled IOC orders
            STATUS_PARTIALLY_FILLED: 7,
            // Order has been removed from the order book and has been parked,
            // this applies to pegged orders and liquidity orders (orders created from a liquidity provision shape)
            STATUS_PARKED: 8
        },
        side: {
            // Default value, always invalid
            SIDE_UNSPECIFIED: 0,
            // Buy order
            SIDE_BUY: 1,
            // Sell order
            SIDE_SELL: 2
        },
        peggedReference: {
            // Default value for PeggedReference, no reference given
            PEGGED_REFERENCE_UNSPECIFIED: 0,
            // Mid price reference
            PEGGED_REFERENCE_MID: 1,
            // Best bid price reference
            PEGGED_REFERENCE_BEST_BID: 2,
            // Best ask price reference
            PEGGED_REFERENCE_BEST_ASK: 3
        }
    },

    busEvent: {
        type: {
            // Default value, always invalid
            BUS_EVENT_TYPE_UNSPECIFIED: 0,
            // Events of ALL event types, used when filtering stream from event bus
            BUS_EVENT_TYPE_ALL: 1,
            // Event for blockchain time updates
            BUS_EVENT_TYPE_TIME_UPDATE: 2,
            // Event for when a transfer happens internally, contains the transfer information
            BUS_EVENT_TYPE_LEDGER_MOVEMENTS: 3,
            // Event indicating position resolution has occurred
            BUS_EVENT_TYPE_POSITION_RESOLUTION: 4,
            // Event for order updates, both new and existing orders
            BUS_EVENT_TYPE_ORDER: 5,
            // Event for account updates
            BUS_EVENT_TYPE_ACCOUNT: 6,
            // Event for party updates
            BUS_EVENT_TYPE_PARTY: 7,
            // Event indicating a new trade has occurred
            BUS_EVENT_TYPE_TRADE: 8,
            // Event indicating margin levels have changed for a party
            BUS_EVENT_TYPE_MARGIN_LEVELS: 9,
            // Event for proposal updates (for governance)
            BUS_EVENT_TYPE_PROPOSAL: 10,
            // Event indicating a new vote has occurred (for governance)
            BUS_EVENT_TYPE_VOTE: 11,
            // Event for market data updates
            BUS_EVENT_TYPE_MARKET_DATA: 12,
            // Event for a new signature for a Vega node
            BUS_EVENT_TYPE_NODE_SIGNATURE: 13,
            // Event indicating loss socialisation occurred for a party
            BUS_EVENT_TYPE_LOSS_SOCIALIZATION: 14,
            // Event for when a position is being settled
            BUS_EVENT_TYPE_SETTLE_POSITION: 15,
            // Event for when a position is distressed
            BUS_EVENT_TYPE_SETTLE_DISTRESSED: 16,
            // Event indicating a new market was created
            BUS_EVENT_TYPE_MARKET_CREATED: 17,
            // Event for when an asset is added to Vega
            BUS_EVENT_TYPE_ASSET: 18,
            // Event indicating a market tick event
            BUS_EVENT_TYPE_MARKET_TICK: 19,
            // Event for when a withdrawal occurs
            BUS_EVENT_TYPE_WITHDRAWAL: 20,
            // Event for when a deposit occurs
            BUS_EVENT_TYPE_DEPOSIT: 21,
            // Event indicating a change in auction state, for example starting or ending an auction
            BUS_EVENT_TYPE_AUCTION: 22,
            // Event indicating a risk factor has been updated
            BUS_EVENT_TYPE_RISK_FACTOR: 23,
            // Event indicating a network parameter has been added or updated
            BUS_EVENT_TYPE_NETWORK_PARAMETER: 24,
            // Event indicating a liquidity provision has been created or updated
            BUS_EVENT_TYPE_LIQUIDITY_PROVISION: 25,
            // Event indicating a new market was created
            BUS_EVENT_TYPE_MARKET_UPDATED: 26,
            // Event indicating an oracle spec has been created or updated
            BUS_EVENT_TYPE_ORACLE_SPEC: 27,
            // Event indicating that an oracle data has been broadcast
            BUS_EVENT_TYPE_ORACLE_DATA: 28,
            // Event indicating that an delegation balance of a party to a node for current epoch has changed
            BUS_EVENT_TYPE_DELEGATION_BALANCE: 29,
            // Event indicating the validator score for the given epoch
            BUS_EVENT_TYPE_VALIDATOR_SCORE: 30,
            // Event indicating the start or end of an epoch
            BUS_EVENT_TYPE_EPOCH_UPDATE: 31,
            // Event indicating that validator node has been updated
            BUS_EVENT_TYPE_VALIDATOR_UPDATE: 32,
            // Event indicating a new staking event have been processed by the network
            BUS_EVENT_TYPE_STAKE_LINKING: 33,
            // Event indicating the payout of a reward has been initiated
            BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT: 34,
            // Event indicating a new checkpoint was created
            BUS_EVENT_TYPE_CHECKPOINT: 35,
            // Event indicating stream is starting
            BUS_EVENT_TYPE_STREAM_START: 36,
            // Event indicating key rotation took place
            BUS_EVENT_TYPE_KEY_ROTATION: 37,
            // Event indicating state transitions in state variable consensus
            BUS_EVENT_TYPE_STATE_VAR: 38,
            // Event indicating network limits set or updated
            BUS_EVENT_TYPE_NETWORK_LIMITS: 39,
            // Event indicating a update for a transfer
            BUS_EVENT_TYPE_TRANSFER: 40,
            // Event indicating the ranking of validator and their status in Vega
            BUS_EVENT_TYPE_VALIDATOR_RANKING: 41,
            // Event indicating a new multi sig signer event have been processed
            BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT: 42,
            // Event indicating the erc20 multi sig threshold have been updated
            BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD: 43,
            // Event indicating a new signer has been added to the ERC-20 multisig
            BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED: 44,
            // Event indicating a signer has been removed from the ERC-20 multisig
            BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED: 45,
            // Event indicating that a party's position has changed
            BUS_EVENT_TYPE_POSITION_STATE: 46,
            // Event indicating Ethereum key rotation took place
            BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION: 47,
            // Event indicating protocol upgrade proposal updates
            BUS_EVENT_TYPE_PROTOCOL_UPGRADE_PROPOSAL: 48,
            // The core is starting to process a new block
            BUS_EVENT_TYPE_BEGIN_BLOCK: 49,
            // The core finished to process a block
            BUS_EVENT_TYPE_END_BLOCK: 50,
            // The core is starting a protocol upgrade
            BUS_EVENT_TYPE_PROTOCOL_UPGRADE_STARTED: 51,
            // The market has stopped and settled
            BUS_EVENT_TYPE_SETTLE_MARKET: 52,
            // The result of a transaction processed by the network
            BUS_EVENT_TYPE_TRANSACTION_RESULT: 53,
            // Snapshot is taken at this block height
            BUS_EVENT_TYPE_SNAPSHOT_TAKEN: 54,
          
            // Data node notifies that it is ready to upgrade
            BUS_EVENT_TYPE_PROTOCOL_UPGRADE_DATA_NODE_READY: 55,
          
            // Event indicating parties had orders closed because they were distressed, but were not closed out.
            BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED: 56,
            // Event indicating parties had orders closed because they were distressed, but were not closed out.
            BUS_EVENT_TYPE_EXPIRED_ORDERS: 57,

            // Event indicating a market related event, for example when a market opens
            BUS_EVENT_TYPE_MARKET: 101,
            // Event used to report failed transactions back to a user, this is excluded from the ALL type
            BUS_EVENT_TYPE_TX_ERROR: 201,
        }
    },

    stakeLinking: {
        type: {
            // Default value
            TYPE_UNSPECIFIED: 0,
            // Indicate of a stake deposit instruction
            TYPE_LINK: 1,
            // Indicate of a stake remove instruction
            TYPE_UNLINK: 2
        },
    
        status: {
            // Default value
            STATUS_UNSPECIFIED: 0,
            // Indicates an event waiting for confirmation from the Vega network
            STATUS_PENDING: 1,
            // Indicates an event accepted by the Vega network
            STATUS_ACCEPTED: 2,
            // Indicates an event rejected by the Vega network
            STATUS_REJECTED: 3
        }
    },

    timeInterval: {
        INTERVAL_5M: 66,
        "INTERVAL_1M": 0,
        "INTERVAL_5M": 1,
        "INTERVAL_15M": 2,
        "INTERVAL_30M": 3,
        "INTERVAL_1H": 4,
        "INTERVAL_2H": 5,
        "INTERVAL_4H": 6,
        "INTERVAL_6H": 7,
        "INTERVAL_12H": 8,
        "INTERVAL_1D": 9,
        "INTERVAL_3D": 10,
        "INTERVAL_1W": 11,
        "INTERVAL_1MO": 12,

        "INTERVAL_ROLLING_1M": 100,
        "INTERVAL_ROLLING_5M": 101,
        "INTERVAL_ROLLING_15M": 102,
        "INTERVAL_ROLLING_30M": 103,
        "INTERVAL_ROLLING_1H": 104,
        "INTERVAL_ROLLING_2H": 105,
        "INTERVAL_ROLLING_4H": 106,
        "INTERVAL_ROLLING_6H": 107,
        "INTERVAL_ROLLING_12H": 108,
        "INTERVAL_ROLLING_1D": 109,
        "INTERVAL_ROLLING_3D": 110,
        "INTERVAL_ROLLING_1W": 111,
        "INTERVAL_ROLLING_1MO": 112
    }

};

const typeMappings = {

    account: {
        type: {
            [enums.account.type.ACCOUNT_TYPE_UNSPECIFIED]: "ACCOUNT_TYPE_UNSPECIFIED",
            [enums.account.type.ACCOUNT_TYPE_INSURANCE]: "ACCOUNT_TYPE_INSURANCE",
            [enums.account.type.ACCOUNT_TYPE_SETTLEMENT]: "ACCOUNT_TYPE_SETTLEMENT",
            [enums.account.type.ACCOUNT_TYPE_MARGIN]: "ACCOUNT_TYPE_MARGIN",
            [enums.account.type.ACCOUNT_TYPE_GENERAL]: "ACCOUNT_TYPE_GENERAL",
            [enums.account.type.ACCOUNT_TYPE_FEES_INFRASTRUCTURE]: "ACCOUNT_TYPE_FEES_INFRASTRUCTURE",
            [enums.account.type.ACCOUNT_TYPE_FEES_LIQUIDITY]: "ACCOUNT_TYPE_FEES_LIQUIDITY",
            [enums.account.type.ACCOUNT_TYPE_FEES_MAKER]: "ACCOUNT_TYPE_FEES_MAKER",
            [enums.account.type.ACCOUNT_TYPE_BOND]: "ACCOUNT_TYPE_BOND",
            [enums.account.type.ACCOUNT_TYPE_EXTERNAL]: "ACCOUNT_TYPE_EXTERNEL",
            [enums.account.type.ACCOUNT_TYPE_GLOBAL_INSURANCE]: "ACCOUNT_TYPE_GLOBAL_INSURANCE",
            [enums.account.type.ACCOUNT_TYPE_GLOBAL_REWARD]: "ACCOUNT_TYPE_GLOBAL_REWARD",
            [enums.account.type.ACCOUNT_TYPE_PENDING_TRANSFERS]: "ACCOUNT_TYPE_PENDING_TRANSFERS",
            [enums.account.type.ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES]: "ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES",
            [enums.account.type.ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES]: "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES",
            [enums.account.type.ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES]: "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES",
            [enums.account.type.ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS]: "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS"
        }
    },

    asset: {
        status: {
            [enums.asset.status.STATUS_UNSPECIFIED]: "STATUS_UNSPECIFIED",
            [enums.asset.status.STATUS_PROPOSED]: "STATUS_PROPOSED",
            [enums.asset.status.STATUS_REJECTED]: "STATUS_REJECTED",
            [enums.asset.status.STATUS_PENDING_LISTING]: "STATUS_PENDING_LISTING",
            [enums.asset.status.STATUS_ENABLED]: "STATUS_ENABLED"
        }
    },

    market: {
        state: {
            [enums.market.state.STATE_UNSPECIFIED]: "STATE_UNSPECIFIED",
            [enums.market.state.STATE_PROPOSED]: "STATE_PROPOSED",
            [enums.market.state.STATE_REJECTED]: "STATE_REJECTED",
            [enums.market.state.STATE_PENDING]: "STATE_PENDING",
            [enums.market.state.STATE_CANCELLED]: "STATE_CANCELLED",
            [enums.market.state.STATE_ACTIVE]: "STATE_ACTIVE",
            [enums.market.state.STATE_SUSPENDED]: "STATE_SUSPENDED",
            [enums.market.state.STATE_CLOSED]: "STATE_CLOSED",
            [enums.market.state.STATE_TRADING_TERMINATED]: "STATE_TERMINATED",
            [enums.market.state.STATE_SETTLED]: "STATE_SETTLED"
        },
        tradingMode: {
            [enums.market.tradingMode.TRADING_MODE_UNSPECIFIED]: "TRADING_MODE_UNSPECIFIED",
            [enums.market.tradingMode.TRADING_MODE_CONTINUOUS]: "TRADING_MODE_CONTINUOUS",
            [enums.market.tradingMode.TRADING_MODE_BATCH_AUCTION]: "TRADING_MODE_BATCH_AUCTION",
            [enums.market.tradingMode.TRADING_MODE_OPENING_AUCTION]: "TRADING_MODE_OPENING_AUCTION",
            [enums.market.tradingMode.TRADING_MODE_MONITORING_AUCTION]: "TRADING_MODE_MONITORING_AUCTION",
            [enums.market.tradingMode.TRADING_MODE_NO_TRADING]: "TRADING_MODE_NO_TRADING"
        }
    },

    order: {
        timeInForce: {
            [enums.order.timeInForce.TIME_IN_FORCE_UNSPECIFIED]: "TIME_IN_FORCE_UNSPECIFIED",
            [enums.order.timeInForce.TIME_IN_FORCE_GTC]: "TIME_IN_FORCE_GTC",
            [enums.order.timeInForce.TIME_IN_FORCE_GTT]: "TIME_IN_FORCE_GTT",
            [enums.order.timeInForce.TIME_IN_FORCE_IOC]: "TIME_IN_FORCE_IOC",
            [enums.order.timeInForce.TIME_IN_FORCE_FOK]: "TIME_IN_FORCE_FOK",
            [enums.order.timeInForce.TIME_IN_FORCE_GFA]: "TIME_IN_FORCE_GFA",
            [enums.order.timeInForce.TIME_IN_FORCE_GFN]: "TIME_IN_FORCE_GFN"
        },
        type: {
            [enums.order.type.TYPE_UNSPECIFIED]: "TYPE_UNSPECIFIED",
            [enums.order.type.TYPE_LIMIT]: "TYPE_LIMIT",
            [enums.order.type.TYPE_MARKET]: "TYPE_MARKET",
            [enums.order.type.TYPE_NETWORK]: "TYPE_NETWORK"
        },
        status: {
            [enums.order.status.STATUS_UNSPECIFIED]: "STATUS_UNSPECIFIED",
            [enums.order.status.STATUS_ACTIVE]: "STATUS_ACTIVE",
            [enums.order.status.STATUS_EXPIRED]: "STATUS_EXPIRED",
            [enums.order.status.STATUS_CANCELLED]: "STATUS_CANCELLED",
            [enums.order.status.STATUS_STOPPED]: "STATUS_STOPPED",
            [enums.order.status.STATUS_FILLED]: "STATUS_FILLED",
            [enums.order.status.STATUS_REJECTED]: "STATUS_REJECTED",
            [enums.order.status.STATUS_PARTIALLY_FILLED]: "STATUS_PARTIALLY_FILLED",
            [enums.order.status.STATUS_PARKED]: "STATUS_PARKED"
        },
        side: {
            [enums.order.side.SIDE_UNSPECIFIED]: "SIDE_UNSPECIFIED",
            [enums.order.side.SIDE_BUY]: "SIDE_BUY",
            [enums.order.side.SIDE_SELL]: "SIDE_SELL"
        },
        peggedReference: {
            [enums.order.peggedReference.PEGGED_REFERENCE_UNSPECIFIED]: "PEGGED_REFERENCE_UNSPECIFIED",
            [enums.order.peggedReference.PEGGED_REFERENCE_MID]: "PEGGED_REFERENCE_MID",
            [enums.order.peggedReference.PEGGED_REFERENCE_BEST_BID]: "PEGGED_REFERENCE_BEST_BID",
            [enums.order.peggedReference.PEGGED_REFERENCE_BEST_ASK]: "PEGGED_REFERENCE_BEST_ASK"
        }
    },


    busEvent: {
        type: {
            [enums.busEvent.type.BUS_EVENT_TYPE_TRADE]: "trades",
            [enums.busEvent.type.BUS_EVENT_TYPE_POSITION_STATE]: "position_updates",
            [enums.busEvent.type.BUS_EVENT_TYPE_SETTLE_POSITION]: "position_updates",
            [enums.busEvent.type.BUS_EVENT_TYPE_ORDER]: "orders",
            [enums.busEvent.type.BUS_EVENT_TYPE_EXPIRED_ORDERS]: "orders",
            [enums.busEvent.type.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED]: "orders",
            [enums.busEvent.type.BUS_EVENT_TYPE_LIQUIDITY_PROVISION]: "orders",
            [enums.busEvent.type.BUS_EVENT_TYPE_MARKET]: "markets",
            [enums.busEvent.type.BUS_EVENT_TYPE_MARKET_CREATED]: "markets",
            [enums.busEvent.type.BUS_EVENT_TYPE_MARKET_UPDATED]: "markets",
            [enums.busEvent.type.BUS_EVENT_TYPE_SETTLE_MARKET]: "markets",
            [enums.busEvent.type.BUS_EVENT_TYPE_MARKET_DATA]: "market_data",
            [enums.busEvent.type.BUS_EVENT_TYPE_PROPOSAL]: "governance",
            [enums.busEvent.type.BUS_EVENT_TYPE_VOTE]: "governance",
            [enums.busEvent.type.BUS_EVENT_TYPE_STATE_VAR]: "governance",
            [enums.busEvent.type.BUS_EVENT_TYPE_NETWORK_LIMITS]: "governance",
            [enums.busEvent.type.BUS_EVENT_TYPE_NETWORK_PARAMETER]: "governance",
            [enums.busEvent.type.BUS_EVENT_TYPE_VALIDATOR_RANKING]: "validators",
            [enums.busEvent.type.BUS_EVENT_TYPE_VALIDATOR_SCORE]: "validators",
            [enums.busEvent.type.BUS_EVENT_TYPE_VALIDATOR_UPDATE]: "validators",
            [enums.busEvent.type.BUS_EVENT_TYPE_LEDGER_MOVEMENTS]: "transfers",
            [enums.busEvent.type.BUS_EVENT_TYPE_TRANSFER]: "transfers",
            [enums.busEvent.type.BUS_EVENT_TYPE_BEGIN_BLOCK]: "blocks",
            [enums.busEvent.type.BUS_EVENT_TYPE_END_BLOCK]: "blocks",
            [enums.busEvent.type.BUS_EVENT_TYPE_TIME_UPDATE]: "time_updates",
            [enums.busEvent.type.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED]: "liquidations",
            [enums.busEvent.type.BUS_EVENT_TYPE_SETTLE_DISTRESSED]: "liquidations",
            [enums.busEvent.type.BUS_EVENT_TYPE_WITHDRAWAL]: "deposits_withdrawals",
            [enums.busEvent.type.BUS_EVENT_TYPE_DEPOSIT]: "deposits_withdrawals",
            [enums.busEvent.type.BUS_EVENT_TYPE_ACCOUNT]: "accounts",
            [enums.busEvent.type.BUS_EVENT_TYPE_ASSET]: "assets",
            [enums.busEvent.type.BUS_EVENT_TYPE_STAKE_LINKING]: "stake_linkings",
        },
        topic: {
            "trades": [ enums.busEvent.type.BUS_EVENT_TYPE_TRADE ],
            "position_updates": [ enums.busEvent.type.BUS_EVENT_TYPE_POSITION_STATE, enums.busEvent.type.BUS_EVENT_TYPE_SETTLE_POSITION ],
            "orders": [ enums.busEvent.type.BUS_EVENT_TYPE_ORDER, enums.busEvent.type.BUS_EVENT_TYPE_EXPIRED_ORDERS, enums.busEvent.type.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED, enums.busEvent.type.BUS_EVENT_TYPE_LIQUIDITY_PROVISION ],
            "markets": [ enums.busEvent.type.BUS_EVENT_TYPE_MARKET, enums.busEvent.type.BUS_EVENT_TYPE_MARKET_CREATED, enums.busEvent.type.BUS_EVENT_TYPE_MARKET_UPDATED, enums.busEvent.type.BUS_EVENT_TYPE_SETTLE_MARKET],
            "market_data": [ enums.busEvent.type.BUS_EVENT_TYPE_MARKET_DATA ],
            "governance": [ enums.busEvent.type.BUS_EVENT_TYPE_PROPOSAL, enums.busEvent.type.BUS_EVENT_TYPE_VOTE, enums.busEvent.type.BUS_EVENT_TYPE_STATE_VAR, enums.busEvent.type.BUS_EVENT_TYPE_NETWORK_LIMITS, enums.busEvent.type.BUS_EVENT_TYPE_NETWORK_PARAMETER ],
            "validators": [ enums.busEvent.type.BUS_EVENT_TYPE_VALIDATOR_RANKING, enums.busEvent.type.BUS_EVENT_TYPE_VALIDATOR_SCORE, enums.busEvent.type.BUS_EVENT_TYPE_VALIDATOR_UPDATE ],
            "transfers": [ enums.busEvent.type.BUS_EVENT_TYPE_LEDGER_MOVEMENTS, enums.busEvent.type.BUS_EVENT_TYPE_TRANSFER ],
            "blocks": [ enums.busEvent.type.BUS_EVENT_TYPE_BEGIN_BLOCK, enums.busEvent.type.BUS_EVENT_TYPE_END_BLOCK ],
            "time_updates": [ enums.busEvent.type.BUS_EVENT_TYPE_TIME_UPDATE ],
            "liquidations": [ enums.busEvent.type.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED, enums.busEvent.type.BUS_EVENT_TYPE_SETTLE_DISTRESSED ],
            "deposits_withdrawals": [ enums.busEvent.type.BUS_EVENT_TYPE_WITHDRAWAL, enums.busEvent.type.BUS_EVENT_TYPE_DEPOSIT ],
            "accounts": [ enums.busEvent.type.BUS_EVENT_TYPE_ACCOUNT ],
            "assets": [ enums.busEvent.type.BUS_EVENT_TYPE_ASSET ]
        }
    },

    stakeLinking: {
        type: {
            [enums.stakeLinking.type.TYPE_UNSPECIFIED]: 'TYPE_UNSPECIFIED',
            [enums.stakeLinking.type.TYPE_LINK]: 'TYPE_LINK',
            [enums.stakeLinking.type.TYPE_UNLINK]: 'TYPE_UNLINK'
        },
        status: {
            [enums.stakeLinking.status.STATUS_UNSPECIFIED]: 'STATUS_UNSPECIFIED',
            [enums.stakeLinking.status.STATUS_PENDING]: 'STATUS_PENDING',
            [enums.stakeLinking.status.STATUS_ACCEPTED]: 'STATUS_ACCEPTED',
            [enums.stakeLinking.status.STATUS_REJECTED]: 'STATUS_REJECTED'
        }
    },

    timeInterval: {
        nanos: {
            [enums.timeInterval.INTERVAL_1M]: '60000000000',
            [enums.timeInterval.INTERVAL_5M]: '300000000000',
            [enums.timeInterval.INTERVAL_15M]: '900000000000',
            [enums.timeInterval.INTERVAL_30M]: '1800000000000',
            [enums.timeInterval.INTERVAL_1H]: '3600000000000',
            [enums.timeInterval.INTERVAL_2H]: '7200000000000',
            [enums.timeInterval.INTERVAL_4H]: '14400000000000',
            [enums.timeInterval.INTERVAL_6H]: '21600000000000',
            [enums.timeInterval.INTERVAL_12H]: '43200000000000',
            [enums.timeInterval.INTERVAL_1D]: '86400000000000',
            [enums.timeInterval.INTERVAL_3D]: '259200000000000',
            [enums.timeInterval.INTERVAL_1W]: '604800000000000',
            [enums.timeInterval.INTERVAL_1MO]: '2629756800000000',
            [enums.timeInterval.INTERVAL_ROLLING_1M]: '60000000000',
            [enums.timeInterval.INTERVAL_ROLLING_5M]: '300000000000',
            [enums.timeInterval.INTERVAL_ROLLING_15M]: '900000000000',
            [enums.timeInterval.INTERVAL_ROLLING_30M]: '1800000000000',
            [enums.timeInterval.INTERVAL_ROLLING_1H]: '3600000000000',
            [enums.timeInterval.INTERVAL_ROLLING_2H]: '7200000000000',
            [enums.timeInterval.INTERVAL_ROLLING_4H]: '14400000000000',
            [enums.timeInterval.INTERVAL_ROLLING_6H]: '21600000000000',
            [enums.timeInterval.INTERVAL_ROLLING_12H]: '43200000000000',
            [enums.timeInterval.INTERVAL_ROLLING_1D]: '86400000000000',
            [enums.timeInterval.INTERVAL_ROLLING_3D]: '259200000000000',
            [enums.timeInterval.INTERVAL_ROLLING_1W]: '604800000000000',
            [enums.timeInterval.INTERVAL_ROLLING_1MO]: '2629756800000000',
        },
        tableSuffix: {
            [enums.timeInterval.INTERVAL_1M]: '_1m',
            [enums.timeInterval.INTERVAL_5M]: '_5m',
            [enums.timeInterval.INTERVAL_15M]: '_15m',
            [enums.timeInterval.INTERVAL_30M]: '_30m',
            [enums.timeInterval.INTERVAL_1H]: '_1h',
            [enums.timeInterval.INTERVAL_2H]: '_2h',
            [enums.timeInterval.INTERVAL_4H]: '_4h',
            [enums.timeInterval.INTERVAL_6H]: '_6h',
            [enums.timeInterval.INTERVAL_12H]: '_12h',
            [enums.timeInterval.INTERVAL_1D]: '_1d',
            [enums.timeInterval.INTERVAL_3D]: '_3d',
            [enums.timeInterval.INTERVAL_1W]: '_1w',
            [enums.timeInterval.INTERVAL_1MO]: '_1mo',
            [enums.timeInterval.INTERVAL_ROLLING_1M]: '_1m',
            [enums.timeInterval.INTERVAL_ROLLING_5M]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_15M]: '_15m',
            [enums.timeInterval.INTERVAL_ROLLING_30M]: '_30m',
            [enums.timeInterval.INTERVAL_ROLLING_1H]: '_1h',
            [enums.timeInterval.INTERVAL_ROLLING_2H]: '_2h',
            [enums.timeInterval.INTERVAL_ROLLING_4H]: '_4h',
            [enums.timeInterval.INTERVAL_ROLLING_6H]: '_6h',
            [enums.timeInterval.INTERVAL_ROLLING_12H]: '_12h',
            [enums.timeInterval.INTERVAL_ROLLING_1D]: '_1d',
            [enums.timeInterval.INTERVAL_ROLLING_3D]: '_3d',
            [enums.timeInterval.INTERVAL_ROLLING_1W]: '_1w',
            [enums.timeInterval.INTERVAL_ROLLING_1MO]: '_1mo',
        },
        queryTableSuffix: {
            [enums.timeInterval.INTERVAL_1M]: '_1m',
            [enums.timeInterval.INTERVAL_5M]: '_5m',
            [enums.timeInterval.INTERVAL_15M]: '_15m',
            [enums.timeInterval.INTERVAL_30M]: '_30m',
            [enums.timeInterval.INTERVAL_1H]: '_1h',
            [enums.timeInterval.INTERVAL_2H]: '_2h',
            [enums.timeInterval.INTERVAL_4H]: '_4h',
            [enums.timeInterval.INTERVAL_6H]: '_6h',
            [enums.timeInterval.INTERVAL_12H]: '_12h',
            [enums.timeInterval.INTERVAL_1D]: '_1d',
            [enums.timeInterval.INTERVAL_3D]: '_3d',
            [enums.timeInterval.INTERVAL_1W]: '_1w',
            [enums.timeInterval.INTERVAL_1MO]: '_1mo',
            [enums.timeInterval.INTERVAL_ROLLING_1M]: '_1m',
            [enums.timeInterval.INTERVAL_ROLLING_5M]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_15M]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_30M]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_1H]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_2H]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_4H]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_6H]: '_5m',
            [enums.timeInterval.INTERVAL_ROLLING_12H]: '_1h',
            [enums.timeInterval.INTERVAL_ROLLING_1D]: '_1h',
            [enums.timeInterval.INTERVAL_ROLLING_3D]: '_1h',
            [enums.timeInterval.INTERVAL_ROLLING_1W]: '_1h',
            [enums.timeInterval.INTERVAL_ROLLING_1MO]: '_1d',
        }
    }

};

module.exports = {
    enums,
    typeMappings
}