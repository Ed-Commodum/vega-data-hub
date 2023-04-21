package main

func GetBusEventTopicMap() map[string]string {

	return map[string]string{
		"BUS_EVENT_TYPE_TRADE": "trades",
		"BUS_EVENT_TYPE_POSITION_STATE": "position_updates",
		"BUS_EVENT_TYPE_SETTLE_POSITION": "position_updates",
		"BUS_EVENT_TYPE_ORDER": "orders",
		"BUS_EVENT_TYPE_EXPIRED_ORDERS": "orders",
		"BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED": "orders",
		"BUS_EVENT_TYPE_LIQUIDITY_PROVISION": "orders",
		"BUS_EVENT_TYPE_MARKET": "markets",
		"BUS_EVENT_TYPE_MARKET_CREATED": "markets",
		"BUS_EVENT_TYPE_MARKET_UPDATED": "markets",
		"BUS_EVENT_TYPE_SETTLE_MARKET": "markets",
		"BUS_EVENT_TYPE_MARKET_DATA": "market_data",
		"BUS_EVENT_TYPE_PROPOSAL": "governance",
		"BUS_EVENT_TYPE_VOTE": "governance",
		"BUS_EVENT_TYPE_STATE_VAR": "governance",
		"BUS_EVENT_TYPE_NETWORK_LIMITS": "governance",
		"BUS_EVENT_TYPE_NETWORK_PARAMETER": "governance",
		"BUS_EVENT_TYPE_VALIDATOR_RANKING": "validators",
		"BUS_EVENT_TYPE_VALIDATOR_SCORE": "validators",
		"BUS_EVENT_TYPE_VALIDATOR_UPDATE": "validators",
		"BUS_EVENT_TYPE_LEDGER_MOVEMENTS": "transfers",
		"BUS_EVENT_TYPE_TRANSFER": "transfers",
		"BUS_EVENT_TYPE_BEGIN_BLOCK": "blocks",
		"BUS_EVENT_TYPE_END_BLOCK": "blocks",
		"BUS_EVENT_TYPE_TIME_UPDATE": "time_updates",
		// "BUS_EVENT_TYPE_DISTRESSED_ORDERS_CLOSED": "liquidations",
		"BUS_EVENT_TYPE_SETTLE_DISTRESSED": "liquidations",
		"BUS_EVENT_TYPE_WITHDRAWAL": "deposits_withdrawals",
		"BUS_EVENT_TYPE_DEPOSIT": "deposits_withdrawals",
		"BUS_EVENT_TYPE_ACCOUNT": "accounts",
		"BUS_EVENT_TYPE_ASSET": "assets",
	}

}