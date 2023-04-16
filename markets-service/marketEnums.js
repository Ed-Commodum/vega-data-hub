const marketEnums = {
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
        STATE_SETTLED: 9
    },
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
        TRADING_MODE_NO_TRADING: 5
    }
}

const marketEnumMappings = {
    state: {
        [marketEnums.state.STATE_UNSPECIFIED]: "STATE_UNSPECIFIED",
        [marketEnums.state.STATE_PROPOSED]: "STATE_PROPOSED",
        [marketEnums.state.STATE_REJECTED]: "STATE_REJECTED",
        [marketEnums.state.STATE_PENDING]: "STATE_PENDING",
        [marketEnums.state.STATE_CANCELLED]: "STATE_CANCELLED",
        [marketEnums.state.STATE_ACTIVE]: "STATE_ACTIVE",
        [marketEnums.state.STATE_SUSPENDED]: "STATE_SUSPENDED",
        [marketEnums.state.STATE_CLOSED]: "STATE_CLOSED",
        [marketEnums.state.STATE_TRADING_TERMINATED]: "STATE_TERMINATED",
        [marketEnums.state.STATE_SETTLED]: "STATE_SETTLED"
    },
    tradingMode: {
        [marketEnums.tradingMode.TRADING_MODE_UNSPECIFIED]: "TRADING_MODE_UNSPECIFIED",
        [marketEnums.tradingMode.TRADING_MODE_CONTINUOUS]: "TRADING_MODE_CONTINUOUS",
        [marketEnums.tradingMode.TRADING_MODE_BATCH_AUCTION]: "TRADING_MODE_BATCH_AUCTION",
        [marketEnums.tradingMode.TRADING_MODE_OPENING_AUCTION]: "TRADING_MODE_OPENING_AUCTION",
        [marketEnums.tradingMode.TRADING_MODE_MONITORING_AUCTION]: "TRADING_MODE_MONITORING_AUCTION",
        [marketEnums.tradingMode.TRADING_MODE_NO_TRADING]: "TRADING_MODE_NO_TRADING"
    }
}

module.exports = {
    marketEnums,
    marketEnumMappings
}