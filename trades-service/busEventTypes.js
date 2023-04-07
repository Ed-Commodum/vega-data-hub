module.exports.busEventTypes = {
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