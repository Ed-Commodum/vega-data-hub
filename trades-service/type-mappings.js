const sideTypes = {
    // Default value, always invalid
    SIDE_UNSPECIFIED: 0,
    // Buy order
    SIDE_BUY: 1,
    // Sell order
    SIDE_SELL: 2
};

const tradeTypes = {
    // Default value, always invalid
    TYPE_UNSPECIFIED: 0,
    // Normal trading between two parties
    TYPE_DEFAULT: 1,
    // Trading initiated by the network with another party on the book,
    // which helps to zero-out the positions of one or more distressed parties
    TYPE_NETWORK_CLOSE_OUT_GOOD: 2,
    // Trading initiated by the network with another party off the book,
    // with a distressed party in order to zero-out the position of the party
    TYPE_NETWORK_CLOSE_OUT_BAD: 3
};


const tradeTypeMappings = {
    [tradeTypes.TYPE_UNSPECIFIED]: "INVALID",
    [tradeTypes.TYPE_DEFAULT]: "DEFAULT",
    [tradeTypes.TYPE_NETWORK_CLOSE_OUT_GOOD]: "NETWORK_CLOSE_OUT_GOOD",
    [tradeTypes.TYPE_NETWORK_CLOSE_OUT_BAD]: "NETWORK_CLOSE_OUT_BAD"
};

const tradeAggressorMappings = {
    [sideTypes.SIDE_UNSPECIFIED]: "INVALID",
    [sideTypes.SIDE_BUY]: "SIDE_BUY",
    [sideTypes.SIDE_SELL]: "SIDE_SELL"
};

module.exports = {
    tradeTypeMappings,
    tradeAggressorMappings
}