const { busEventTypes } = require('./busEventTypes.js');

const busEventTopicMappings = {
  [busEventTypes.BUS_EVENT_TYPE_TRADE]: "trades",
  [busEventTypes.BUS_EVENT_TYPE_POSITION_STATE]: "position_updates",
  [busEventTypes.BUS_EVENT_TYPE_SETTLE_POSITION]: "position_updates",
  [busEventTypes.BUS_EVENT_TYPE_ORDER]: "orders",
  [busEventTypes.BUS_EVENT_TYPE_EXPIRED_ORDERS]: "orders",
  [busEventTypes.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED]: "orders",
  [busEventTypes.BUS_EVENT_TYPE_LIQUIDITY_PROVISION]: "orders",
  [busEventTypes.BUS_EVENT_TYPE_MARKET]: "markets",
  [busEventTypes.BUS_EVENT_TYPE_MARKET_CREATED]: "markets",
  [busEventTypes.BUS_EVENT_TYPE_MARKET_UPDATED]: "markets",
  [busEventTypes.BUS_EVENT_TYPE_SETTLE_MARKET]: "markets",
  [busEventTypes.BUS_EVENT_TYPE_MARKET_DATA]: "market_data",
  [busEventTypes.BUS_EVENT_TYPE_PROPOSAL]: "governance",
  [busEventTypes.BUS_EVENT_TYPE_VOTE]: "governance",
  [busEventTypes.BUS_EVENT_TYPE_STATE_VAR]: "governance",
  [busEventTypes.BUS_EVENT_TYPE_NETWORK_LIMITS]: "governance",
  [busEventTypes.BUS_EVENT_TYPE_NETWORK_PARAMETER]: "governance",
  [busEventTypes.BUS_EVENT_TYPE_VALIDATOR_RANKING]: "validators",
  [busEventTypes.BUS_EVENT_TYPE_VALIDATOR_SCORE]: "validators",
  [busEventTypes.BUS_EVENT_TYPE_VALIDATOR_UPDATE]: "validators",
  [busEventTypes.BUS_EVENT_TYPE_LEDGER_MOVEMENTS]: "transfers",
  [busEventTypes.BUS_EVENT_TYPE_TRANSFER]: "transfers",
  [busEventTypes.BUS_EVENT_TYPE_BEGIN_BLOCK]: "blocks",
  [busEventTypes.BUS_EVENT_TYPE_END_BLOCK]: "blocks",
  [busEventTypes.BUS_EVENT_TYPE_TIME_UPDATE]: "time_updates",
  [busEventTypes.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED]: "liquidations",
  [busEventTypes.BUS_EVENT_TYPE_SETTLE_DISTRESSED]: "liquidations",
  [busEventTypes.BUS_EVENT_TYPE_WITHDRAWAL]: "bridge",
  [busEventTypes.BUS_EVENT_TYPE_DEPOSIT]: "bridge"
}

const topicBusEventMappings = {
  "trades": [ busEventTypes.BUS_EVENT_TYPE_TRADE ],
  "position_updates": [ busEventTypes.BUS_EVENT_TYPE_POSITION_STATE, busEventTypes.BUS_EVENT_TYPE_SETTLE_POSITION ],
  "orders": [ busEventTypes.BUS_EVENT_TYPE_ORDER, busEventTypes.BUS_EVENT_TYPE_EXPIRED_ORDERS, busEventTypes.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED, busEventTypes.BUS_EVENT_TYPE_LIQUIDITY_PROVISION ],
  "markets": [ busEventTypes.BUS_EVENT_TYPE_MARKET, busEventTypes.BUS_EVENT_TYPE_MARKET_CREATED, busEventTypes.BUS_EVENT_TYPE_MARKET_UPDATED, busEventTypes.BUS_EVENT_TYPE_SETTLE_MARKET ],
  "market_data": [ busEventTypes.BUS_EVENT_TYPE_MARKET_DATA ],
  "governance": [ busEventTypes.BUS_EVENT_TYPE_PROPOSAL, busEventTypes.BUS_EVENT_TYPE_VOTE, busEventTypes.BUS_EVENT_TYPE_STATE_VAR, busEventTypes.BUS_EVENT_TYPE_NETWORK_LIMITS, busEventTypes.BUS_EVENT_TYPE_NETWORK_PARAMETER ],
  "validators": [ busEventTypes.BUS_EVENT_TYPE_VALIDATOR_RANKING, busEventTypes.BUS_EVENT_TYPE_VALIDATOR_SCORE, busEventTypes.BUS_EVENT_TYPE_VALIDATOR_UPDATE ],
  "transfers": [ busEventTypes.BUS_EVENT_TYPE_LEDGER_MOVEMENTS, busEventTypes.BUS_EVENT_TYPE_TRANSFER ],
  "blocks": [ busEventTypes.BUS_EVENT_TYPE_BEGIN_BLOCK, busEventTypes.BUS_EVENT_TYPE_END_BLOCK ],
  "time_updates": [ busEventTypes.BUS_EVENT_TYPE_TIME_UPDATE ],
  "liquidations": [ busEventTypes.BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED, busEventTypes.BUS_EVENT_TYPE_SETTLE_DISTRESSED ],
  "deposits_withdrawals": [ busEventTypes.BUS_EVENT_TYPE_WITHDRAWAL, busEventTypes.BUS_EVENT_TYPE_DEPOSIT ]
}

module.exports = {
  busEventTopicMappings,
  topicBusEventMappings
}