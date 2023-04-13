const marketState = {
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

// The trading mode the market is currently running, also referred to as 'market state'
const marketTradingMode = {
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
}

module.exports = { marketState, marketTradingMode };