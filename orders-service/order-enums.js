const orderEnums = {
  timeInForce: {
    // Default value for TimeInForce, can be valid for an amend
    TIME_IN_FORCE_UNSPECIFIED: 0,
    // Good until cancelled, the order trades any amount and as much as possible
    // and remains on the book until it either trades completely or is cancelled
    TIME_IN_FORCE_GTC: 1,
    // Good until specified time, this order type trades any amount and as much as possible
    // and remains on the book until it either trades completely, is cancelled, or expires at a set time
    // NOTE: this may in future be multiple types or have sub types for orders that provide different ways of specifying expiry
    TIME_IN_FORCE_GTT: 2,
    // Immediate or cancel, the order trades any amount and as much as possible
    // but does not remain on the book (whether it trades or not)
    TIME_IN_FORCE_IOC: 3,
    // Fill or kill, The order either trades completely (remainingSize == 0 after adding)
    // or not at all, does not remain on the book if it doesn't trade
    TIME_IN_FORCE_FOK: 4,
    // Good for auction, this order is only accepted during an auction period
    TIME_IN_FORCE_GFA: 5,
    // Good for normal, this order is only accepted during normal trading (that can be continuous trading or frequent batched auctions)
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
}

const orderEnumMappings = {
  timeInForce: {
    [orderEnums.timeInForce.TIME_IN_FORCE_UNSPECIFIED]: "TIME_IN_FORCE_UNSPECIFIED",
    [orderEnums.timeInForce.TIME_IN_FORCE_GTC]: "TIME_IN_FORCE_GTC",
    [orderEnums.timeInForce.TIME_IN_FORCE_GTT]: "TIME_IN_FORCE_GTT",
    [orderEnums.timeInForce.TIME_IN_FORCE_IOC]: "TIME_IN_FORCE_IOC",
    [orderEnums.timeInForce.TIME_IN_FORCE_FOK]: "TIME_IN_FORCE_FOK",
    [orderEnums.timeInForce.TIME_IN_FORCE_GFA]: "TIME_IN_FORCE_GFA",
    [orderEnums.timeInForce.TIME_IN_FORCE_GFN]: "TIME_IN_FORCE_GFN"
  },
  type: {
    [orderEnums.type.TYPE_UNSPECIFIED]: "TYPE_UNSPECIFIED",
    [orderEnums.type.TYPE_LIMIT]: "TYPE_LIMIT",
    [orderEnums.type.TYPE_MARKET]: "TYPE_MARKET",
    [orderEnums.type.TYPE_NETWORK]: "TYPE_NETWORK"
  },
  status: {
    [orderEnums.status.STATUS_UNSPECIFIED]: "STATUS_UNSPECIFIED",
    [orderEnums.status.STATUS_ACTIVE]: "STATUS_ACTIVE",
    [orderEnums.status.STATUS_EXPIRED]: "STATUS_EXPIRED",
    [orderEnums.status.STATUS_CANCELLED]: "STATUS_CANCELLED",
    [orderEnums.status.STATUS_STOPPED]: "STATUS_STOPPED",
    [orderEnums.status.STATUS_FILLED]: "STATUS_FILLED",
    [orderEnums.status.STATUS_REJECTED]: "STATUS_REJECTED",
    [orderEnums.status.STATUS_PARTIALLY_FILLED]: "STATUS_PARTIALLY_FILLED",
    [orderEnums.status.STATUS_PARKED]: "STATUS_PARKED"
  },
  side: {
    [orderEnums.side.SIDE_UNSPECIFIED]: "SIDE_",
    [orderEnums.side.SIDE_BUY]: "SIDE_BUY",
    [orderEnums.side.SIDE_SELL]: "SIDE_SELL"
  },
  peggedReference: {
    [orderEnums.peggedReference.PEGGED_REFERENCE_UNSPECIFIED]: "PEGGED_REFERENCE_UNSPECIFIED",
    [orderEnums.peggedReference.PEGGED_REFERENCE_MID]: "PEGGED_REFERENCE_MID",
    [orderEnums.peggedReference.PEGGED_REFERENCE_BEST_BID]: "PEGGED_REFERENCE_BEST_BID",
    [orderEnums.peggedReference.PEGGED_REFERENCE_BEST_ASK]: "PEGGED_REFERENCE_BEST_ASK"
  }
}

module.exports = {
  orderEnums,
  orderEnumMappings
}