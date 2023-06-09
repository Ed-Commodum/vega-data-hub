// source: vega/vega.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var vega_markets_pb = require('../vega/markets_pb.js');
goog.object.extend(proto, vega_markets_pb);
goog.exportSymbol('proto.vega.Account', null, global);
goog.exportSymbol('proto.vega.AccountDetails', null, global);
goog.exportSymbol('proto.vega.AccountType', null, global);
goog.exportSymbol('proto.vega.AuctionIndicativeState', null, global);
goog.exportSymbol('proto.vega.AuctionTrigger', null, global);
goog.exportSymbol('proto.vega.Candle', null, global);
goog.exportSymbol('proto.vega.ChainStatus', null, global);
goog.exportSymbol('proto.vega.Delegation', null, global);
goog.exportSymbol('proto.vega.Deposit', null, global);
goog.exportSymbol('proto.vega.Deposit.Status', null, global);
goog.exportSymbol('proto.vega.DispatchMetric', null, global);
goog.exportSymbol('proto.vega.DispatchStrategy', null, global);
goog.exportSymbol('proto.vega.Epoch', null, global);
goog.exportSymbol('proto.vega.EpochAction', null, global);
goog.exportSymbol('proto.vega.EpochData', null, global);
goog.exportSymbol('proto.vega.EpochParticipation', null, global);
goog.exportSymbol('proto.vega.EpochRewardSummary', null, global);
goog.exportSymbol('proto.vega.EpochTimestamps', null, global);
goog.exportSymbol('proto.vega.Erc20WithdrawExt', null, global);
goog.exportSymbol('proto.vega.ErrorDetail', null, global);
goog.exportSymbol('proto.vega.EthereumConfig', null, global);
goog.exportSymbol('proto.vega.EthereumContractConfig', null, global);
goog.exportSymbol('proto.vega.Fee', null, global);
goog.exportSymbol('proto.vega.FinancialAmount', null, global);
goog.exportSymbol('proto.vega.Interval', null, global);
goog.exportSymbol('proto.vega.KeyValueBundle', null, global);
goog.exportSymbol('proto.vega.LedgerEntry', null, global);
goog.exportSymbol('proto.vega.LedgerMovement', null, global);
goog.exportSymbol('proto.vega.LiquidityOrder', null, global);
goog.exportSymbol('proto.vega.LiquidityOrderReference', null, global);
goog.exportSymbol('proto.vega.LiquidityProviderFeeShare', null, global);
goog.exportSymbol('proto.vega.LiquidityProvision', null, global);
goog.exportSymbol('proto.vega.LiquidityProvision.Status', null, global);
goog.exportSymbol('proto.vega.MarginLevels', null, global);
goog.exportSymbol('proto.vega.MarketData', null, global);
goog.exportSymbol('proto.vega.MarketDepth', null, global);
goog.exportSymbol('proto.vega.MarketDepthUpdate', null, global);
goog.exportSymbol('proto.vega.MatrixValue', null, global);
goog.exportSymbol('proto.vega.NetworkLimits', null, global);
goog.exportSymbol('proto.vega.NetworkParameter', null, global);
goog.exportSymbol('proto.vega.Node', null, global);
goog.exportSymbol('proto.vega.NodeData', null, global);
goog.exportSymbol('proto.vega.NodeSet', null, global);
goog.exportSymbol('proto.vega.NodeStatus', null, global);
goog.exportSymbol('proto.vega.Order', null, global);
goog.exportSymbol('proto.vega.Order.Status', null, global);
goog.exportSymbol('proto.vega.Order.TimeInForce', null, global);
goog.exportSymbol('proto.vega.Order.Type', null, global);
goog.exportSymbol('proto.vega.OrderCancellationConfirmation', null, global);
goog.exportSymbol('proto.vega.OrderConfirmation', null, global);
goog.exportSymbol('proto.vega.OrderError', null, global);
goog.exportSymbol('proto.vega.Party', null, global);
goog.exportSymbol('proto.vega.PeggedOrder', null, global);
goog.exportSymbol('proto.vega.PeggedReference', null, global);
goog.exportSymbol('proto.vega.Position', null, global);
goog.exportSymbol('proto.vega.PositionTrade', null, global);
goog.exportSymbol('proto.vega.PostTransferBalance', null, global);
goog.exportSymbol('proto.vega.PriceLevel', null, global);
goog.exportSymbol('proto.vega.PriceMonitoringBounds', null, global);
goog.exportSymbol('proto.vega.RankingScore', null, global);
goog.exportSymbol('proto.vega.Reward', null, global);
goog.exportSymbol('proto.vega.RewardScore', null, global);
goog.exportSymbol('proto.vega.RewardSummary', null, global);
goog.exportSymbol('proto.vega.RiskFactor', null, global);
goog.exportSymbol('proto.vega.ScalarValue', null, global);
goog.exportSymbol('proto.vega.Side', null, global);
goog.exportSymbol('proto.vega.StateValueProposal', null, global);
goog.exportSymbol('proto.vega.StateVarValue', null, global);
goog.exportSymbol('proto.vega.StateVarValue.ValueCase', null, global);
goog.exportSymbol('proto.vega.Trade', null, global);
goog.exportSymbol('proto.vega.Trade.Type', null, global);
goog.exportSymbol('proto.vega.TradeSet', null, global);
goog.exportSymbol('proto.vega.Transfer', null, global);
goog.exportSymbol('proto.vega.TransferRequest', null, global);
goog.exportSymbol('proto.vega.TransferType', null, global);
goog.exportSymbol('proto.vega.ValidatorNodeStatus', null, global);
goog.exportSymbol('proto.vega.VectorValue', null, global);
goog.exportSymbol('proto.vega.WithdrawExt', null, global);
goog.exportSymbol('proto.vega.WithdrawExt.ExtCase', null, global);
goog.exportSymbol('proto.vega.Withdrawal', null, global);
goog.exportSymbol('proto.vega.Withdrawal.Status', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Party = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Party, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Party.displayName = 'proto.vega.Party';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.RiskFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.RiskFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.RiskFactor.displayName = 'proto.vega.RiskFactor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PeggedOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PeggedOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PeggedOrder.displayName = 'proto.vega.PeggedOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Order.displayName = 'proto.vega.Order';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderCancellationConfirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.OrderCancellationConfirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderCancellationConfirmation.displayName = 'proto.vega.OrderCancellationConfirmation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderConfirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.OrderConfirmation.repeatedFields_, null);
};
goog.inherits(proto.vega.OrderConfirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderConfirmation.displayName = 'proto.vega.OrderConfirmation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.AuctionIndicativeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.AuctionIndicativeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.AuctionIndicativeState.displayName = 'proto.vega.AuctionIndicativeState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Trade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Trade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Trade.displayName = 'proto.vega.Trade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Fee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Fee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Fee.displayName = 'proto.vega.Fee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.TradeSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.TradeSet.repeatedFields_, null);
};
goog.inherits(proto.vega.TradeSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.TradeSet.displayName = 'proto.vega.TradeSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Candle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Candle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Candle.displayName = 'proto.vega.Candle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PriceLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PriceLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PriceLevel.displayName = 'proto.vega.PriceLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarketDepth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MarketDepth.repeatedFields_, null);
};
goog.inherits(proto.vega.MarketDepth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarketDepth.displayName = 'proto.vega.MarketDepth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarketDepthUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MarketDepthUpdate.repeatedFields_, null);
};
goog.inherits(proto.vega.MarketDepthUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarketDepthUpdate.displayName = 'proto.vega.MarketDepthUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Position.displayName = 'proto.vega.Position';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PositionTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PositionTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PositionTrade.displayName = 'proto.vega.PositionTrade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Deposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Deposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Deposit.displayName = 'proto.vega.Deposit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Withdrawal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Withdrawal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Withdrawal.displayName = 'proto.vega.Withdrawal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.WithdrawExt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.WithdrawExt.oneofGroups_);
};
goog.inherits(proto.vega.WithdrawExt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.WithdrawExt.displayName = 'proto.vega.WithdrawExt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Erc20WithdrawExt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Erc20WithdrawExt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Erc20WithdrawExt.displayName = 'proto.vega.Erc20WithdrawExt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Account.displayName = 'proto.vega.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.FinancialAmount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.FinancialAmount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.FinancialAmount.displayName = 'proto.vega.FinancialAmount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Transfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Transfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Transfer.displayName = 'proto.vega.Transfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.DispatchStrategy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.DispatchStrategy.repeatedFields_, null);
};
goog.inherits(proto.vega.DispatchStrategy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.DispatchStrategy.displayName = 'proto.vega.DispatchStrategy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.TransferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.TransferRequest.repeatedFields_, null);
};
goog.inherits(proto.vega.TransferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.TransferRequest.displayName = 'proto.vega.TransferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.AccountDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.AccountDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.AccountDetails.displayName = 'proto.vega.AccountDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LedgerEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LedgerEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LedgerEntry.displayName = 'proto.vega.LedgerEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PostTransferBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PostTransferBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PostTransferBalance.displayName = 'proto.vega.PostTransferBalance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LedgerMovement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.LedgerMovement.repeatedFields_, null);
};
goog.inherits(proto.vega.LedgerMovement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LedgerMovement.displayName = 'proto.vega.LedgerMovement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarginLevels = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.MarginLevels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarginLevels.displayName = 'proto.vega.MarginLevels';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarketData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MarketData.repeatedFields_, null);
};
goog.inherits(proto.vega.MarketData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarketData.displayName = 'proto.vega.MarketData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityProviderFeeShare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LiquidityProviderFeeShare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityProviderFeeShare.displayName = 'proto.vega.LiquidityProviderFeeShare';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PriceMonitoringBounds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PriceMonitoringBounds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PriceMonitoringBounds.displayName = 'proto.vega.PriceMonitoringBounds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.ErrorDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.ErrorDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.ErrorDetail.displayName = 'proto.vega.ErrorDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NetworkParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NetworkParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NetworkParameter.displayName = 'proto.vega.NetworkParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NetworkLimits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NetworkLimits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NetworkLimits.displayName = 'proto.vega.NetworkLimits';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LiquidityOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityOrder.displayName = 'proto.vega.LiquidityOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityOrderReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LiquidityOrderReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityOrderReference.displayName = 'proto.vega.LiquidityOrderReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityProvision = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.LiquidityProvision.repeatedFields_, null);
};
goog.inherits(proto.vega.LiquidityProvision, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityProvision.displayName = 'proto.vega.LiquidityProvision';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EthereumConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EthereumConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EthereumConfig.displayName = 'proto.vega.EthereumConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EthereumContractConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EthereumContractConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EthereumContractConfig.displayName = 'proto.vega.EthereumContractConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EpochTimestamps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EpochTimestamps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EpochTimestamps.displayName = 'proto.vega.EpochTimestamps';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Epoch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.Epoch.repeatedFields_, null);
};
goog.inherits(proto.vega.Epoch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Epoch.displayName = 'proto.vega.Epoch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EpochParticipation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EpochParticipation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EpochParticipation.displayName = 'proto.vega.EpochParticipation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EpochData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EpochData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EpochData.displayName = 'proto.vega.EpochData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.RankingScore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.RankingScore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.RankingScore.displayName = 'proto.vega.RankingScore';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.RewardScore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.RewardScore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.RewardScore.displayName = 'proto.vega.RewardScore';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.Node.repeatedFields_, null);
};
goog.inherits(proto.vega.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Node.displayName = 'proto.vega.Node';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NodeSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.NodeSet.repeatedFields_, null);
};
goog.inherits(proto.vega.NodeSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NodeSet.displayName = 'proto.vega.NodeSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NodeData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NodeData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NodeData.displayName = 'proto.vega.NodeData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Delegation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Delegation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Delegation.displayName = 'proto.vega.Delegation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Reward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Reward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Reward.displayName = 'proto.vega.Reward';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.RewardSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.RewardSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.RewardSummary.displayName = 'proto.vega.RewardSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EpochRewardSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EpochRewardSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EpochRewardSummary.displayName = 'proto.vega.EpochRewardSummary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.StateValueProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.StateValueProposal.repeatedFields_, null);
};
goog.inherits(proto.vega.StateValueProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.StateValueProposal.displayName = 'proto.vega.StateValueProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.KeyValueBundle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.KeyValueBundle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.KeyValueBundle.displayName = 'proto.vega.KeyValueBundle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.StateVarValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.StateVarValue.oneofGroups_);
};
goog.inherits(proto.vega.StateVarValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.StateVarValue.displayName = 'proto.vega.StateVarValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.ScalarValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.ScalarValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.ScalarValue.displayName = 'proto.vega.ScalarValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.VectorValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.VectorValue.repeatedFields_, null);
};
goog.inherits(proto.vega.VectorValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.VectorValue.displayName = 'proto.vega.VectorValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MatrixValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MatrixValue.repeatedFields_, null);
};
goog.inherits(proto.vega.MatrixValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MatrixValue.displayName = 'proto.vega.MatrixValue';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Party.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Party.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Party} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Party.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Party}
 */
proto.vega.Party.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Party;
  return proto.vega.Party.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Party} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Party}
 */
proto.vega.Party.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Party.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Party.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Party} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Party.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Party.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Party} returns this
 */
proto.vega.Party.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.RiskFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.RiskFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.RiskFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RiskFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_short: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pb_long: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.RiskFactor}
 */
proto.vega.RiskFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.RiskFactor;
  return proto.vega.RiskFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.RiskFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.RiskFactor}
 */
proto.vega.RiskFactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLong(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.RiskFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.RiskFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.RiskFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RiskFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLong();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.vega.RiskFactor.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RiskFactor} returns this
 */
proto.vega.RiskFactor.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string short = 2;
 * @return {string}
 */
proto.vega.RiskFactor.prototype.getShort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RiskFactor} returns this
 */
proto.vega.RiskFactor.prototype.setShort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string long = 3;
 * @return {string}
 */
proto.vega.RiskFactor.prototype.getLong = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RiskFactor} returns this
 */
proto.vega.RiskFactor.prototype.setLong = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PeggedOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PeggedOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PeggedOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PeggedOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PeggedOrder}
 */
proto.vega.PeggedOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PeggedOrder;
  return proto.vega.PeggedOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PeggedOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PeggedOrder}
 */
proto.vega.PeggedOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.PeggedReference} */ (reader.readEnum());
      msg.setReference(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PeggedOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PeggedOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PeggedOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PeggedOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional PeggedReference reference = 1;
 * @return {!proto.vega.PeggedReference}
 */
proto.vega.PeggedOrder.prototype.getReference = function() {
  return /** @type {!proto.vega.PeggedReference} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.PeggedReference} value
 * @return {!proto.vega.PeggedOrder} returns this
 */
proto.vega.PeggedOrder.prototype.setReference = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string offset = 2;
 * @return {string}
 */
proto.vega.PeggedOrder.prototype.getOffset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PeggedOrder} returns this
 */
proto.vega.PeggedOrder.prototype.setOffset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    side: jspb.Message.getFieldWithDefault(msg, 4, 0),
    price: jspb.Message.getFieldWithDefault(msg, 5, ""),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    remaining: jspb.Message.getFieldWithDefault(msg, 7, 0),
    timeInForce: jspb.Message.getFieldWithDefault(msg, 8, 0),
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    expiresAt: jspb.Message.getFieldWithDefault(msg, 12, 0),
    reference: jspb.Message.getFieldWithDefault(msg, 13, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 14, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 15, 0),
    version: jspb.Message.getFieldWithDefault(msg, 16, 0),
    batchId: jspb.Message.getFieldWithDefault(msg, 17, 0),
    peggedOrder: (f = msg.getPeggedOrder()) && proto.vega.PeggedOrder.toObject(includeInstance, f),
    liquidityProvisionId: jspb.Message.getFieldWithDefault(msg, 19, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Order}
 */
proto.vega.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Order;
  return proto.vega.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Order}
 */
proto.vega.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemaining(value);
      break;
    case 8:
      var value = /** @type {!proto.vega.Order.TimeInForce} */ (reader.readEnum());
      msg.setTimeInForce(value);
      break;
    case 9:
      var value = /** @type {!proto.vega.Order.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {!proto.vega.Order.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresAt(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 14:
      var value = /** @type {!proto.vega.OrderError} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBatchId(value);
      break;
    case 18:
      var value = new proto.vega.PeggedOrder;
      reader.readMessage(value,proto.vega.PeggedOrder.deserializeBinaryFromReader);
      msg.setPeggedOrder(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLiquidityProvisionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getRemaining();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTimeInForce();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getExpiresAt();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {!proto.vega.OrderError} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getBatchId();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getPeggedOrder();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.vega.PeggedOrder.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Order.TimeInForce = {
  TIME_IN_FORCE_UNSPECIFIED: 0,
  TIME_IN_FORCE_GTC: 1,
  TIME_IN_FORCE_GTT: 2,
  TIME_IN_FORCE_IOC: 3,
  TIME_IN_FORCE_FOK: 4,
  TIME_IN_FORCE_GFA: 5,
  TIME_IN_FORCE_GFN: 6
};

/**
 * @enum {number}
 */
proto.vega.Order.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_LIMIT: 1,
  TYPE_MARKET: 2,
  TYPE_NETWORK: 3
};

/**
 * @enum {number}
 */
proto.vega.Order.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_ACTIVE: 1,
  STATUS_EXPIRED: 2,
  STATUS_CANCELLED: 3,
  STATUS_STOPPED: 4,
  STATUS_FILLED: 5,
  STATUS_REJECTED: 6,
  STATUS_PARTIALLY_FILLED: 7,
  STATUS_PARKED: 8
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Order.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.Order.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string party_id = 3;
 * @return {string}
 */
proto.vega.Order.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Side side = 4;
 * @return {!proto.vega.Side}
 */
proto.vega.Order.prototype.getSide = function() {
  return /** @type {!proto.vega.Side} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.vega.Side} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string price = 5;
 * @return {string}
 */
proto.vega.Order.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 size = 6;
 * @return {number}
 */
proto.vega.Order.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 remaining = 7;
 * @return {number}
 */
proto.vega.Order.prototype.getRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional TimeInForce time_in_force = 8;
 * @return {!proto.vega.Order.TimeInForce}
 */
proto.vega.Order.prototype.getTimeInForce = function() {
  return /** @type {!proto.vega.Order.TimeInForce} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.vega.Order.TimeInForce} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setTimeInForce = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional Type type = 9;
 * @return {!proto.vega.Order.Type}
 */
proto.vega.Order.prototype.getType = function() {
  return /** @type {!proto.vega.Order.Type} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.vega.Order.Type} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 created_at = 10;
 * @return {number}
 */
proto.vega.Order.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Status status = 11;
 * @return {!proto.vega.Order.Status}
 */
proto.vega.Order.prototype.getStatus = function() {
  return /** @type {!proto.vega.Order.Status} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.vega.Order.Status} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional int64 expires_at = 12;
 * @return {number}
 */
proto.vega.Order.prototype.getExpiresAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setExpiresAt = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string reference = 13;
 * @return {string}
 */
proto.vega.Order.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional OrderError reason = 14;
 * @return {!proto.vega.OrderError}
 */
proto.vega.Order.prototype.getReason = function() {
  return /** @type {!proto.vega.OrderError} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.vega.OrderError} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.clearReason = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Order.prototype.hasReason = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int64 updated_at = 15;
 * @return {number}
 */
proto.vega.Order.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint64 version = 16;
 * @return {number}
 */
proto.vega.Order.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 batch_id = 17;
 * @return {number}
 */
proto.vega.Order.prototype.getBatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setBatchId = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional PeggedOrder pegged_order = 18;
 * @return {?proto.vega.PeggedOrder}
 */
proto.vega.Order.prototype.getPeggedOrder = function() {
  return /** @type{?proto.vega.PeggedOrder} */ (
    jspb.Message.getWrapperField(this, proto.vega.PeggedOrder, 18));
};


/**
 * @param {?proto.vega.PeggedOrder|undefined} value
 * @return {!proto.vega.Order} returns this
*/
proto.vega.Order.prototype.setPeggedOrder = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.clearPeggedOrder = function() {
  return this.setPeggedOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Order.prototype.hasPeggedOrder = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string liquidity_provision_id = 19;
 * @return {string}
 */
proto.vega.Order.prototype.getLiquidityProvisionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setLiquidityProvisionId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderCancellationConfirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderCancellationConfirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderCancellationConfirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderCancellationConfirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.vega.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderCancellationConfirmation}
 */
proto.vega.OrderCancellationConfirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderCancellationConfirmation;
  return proto.vega.OrderCancellationConfirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderCancellationConfirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderCancellationConfirmation}
 */
proto.vega.OrderCancellationConfirmation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Order;
      reader.readMessage(value,proto.vega.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderCancellationConfirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderCancellationConfirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderCancellationConfirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderCancellationConfirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.vega.OrderCancellationConfirmation.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, proto.vega.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.vega.OrderCancellationConfirmation} returns this
*/
proto.vega.OrderCancellationConfirmation.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderCancellationConfirmation} returns this
 */
proto.vega.OrderCancellationConfirmation.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderCancellationConfirmation.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.OrderConfirmation.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderConfirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderConfirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderConfirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderConfirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.vega.Order.toObject(includeInstance, f),
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.vega.Trade.toObject, includeInstance),
    passiveOrdersAffectedList: jspb.Message.toObjectList(msg.getPassiveOrdersAffectedList(),
    proto.vega.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderConfirmation}
 */
proto.vega.OrderConfirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderConfirmation;
  return proto.vega.OrderConfirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderConfirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderConfirmation}
 */
proto.vega.OrderConfirmation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Order;
      reader.readMessage(value,proto.vega.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = new proto.vega.Trade;
      reader.readMessage(value,proto.vega.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    case 3:
      var value = new proto.vega.Order;
      reader.readMessage(value,proto.vega.Order.deserializeBinaryFromReader);
      msg.addPassiveOrdersAffected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderConfirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderConfirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderConfirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderConfirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Order.serializeBinaryToWriter
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.Trade.serializeBinaryToWriter
    );
  }
  f = message.getPassiveOrdersAffectedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.vega.OrderConfirmation.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, proto.vega.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.vega.OrderConfirmation} returns this
*/
proto.vega.OrderConfirmation.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderConfirmation} returns this
 */
proto.vega.OrderConfirmation.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderConfirmation.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Trade trades = 2;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.vega.OrderConfirmation.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Trade, 2));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.vega.OrderConfirmation} returns this
*/
proto.vega.OrderConfirmation.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.vega.OrderConfirmation.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.OrderConfirmation} returns this
 */
proto.vega.OrderConfirmation.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};


/**
 * repeated Order passive_orders_affected = 3;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.OrderConfirmation.prototype.getPassiveOrdersAffectedList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Order, 3));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.OrderConfirmation} returns this
*/
proto.vega.OrderConfirmation.prototype.setPassiveOrdersAffectedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.OrderConfirmation.prototype.addPassiveOrdersAffected = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.OrderConfirmation} returns this
 */
proto.vega.OrderConfirmation.prototype.clearPassiveOrdersAffectedList = function() {
  return this.setPassiveOrdersAffectedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.AuctionIndicativeState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.AuctionIndicativeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.AuctionIndicativeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AuctionIndicativeState.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    indicativePrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    indicativeVolume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    auctionStart: jspb.Message.getFieldWithDefault(msg, 4, 0),
    auctionEnd: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.AuctionIndicativeState}
 */
proto.vega.AuctionIndicativeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.AuctionIndicativeState;
  return proto.vega.AuctionIndicativeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.AuctionIndicativeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.AuctionIndicativeState}
 */
proto.vega.AuctionIndicativeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndicativePrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndicativeVolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionStart(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.AuctionIndicativeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.AuctionIndicativeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.AuctionIndicativeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AuctionIndicativeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndicativePrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIndicativeVolume();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAuctionStart();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAuctionEnd();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.AuctionIndicativeState.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string indicative_price = 2;
 * @return {string}
 */
proto.vega.AuctionIndicativeState.prototype.getIndicativePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setIndicativePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 indicative_volume = 3;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getIndicativeVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setIndicativeVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 auction_start = 4;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getAuctionStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setAuctionStart = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 auction_end = 5;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getAuctionEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setAuctionEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Trade.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Trade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Trade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Trade.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    buyer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    seller: jspb.Message.getFieldWithDefault(msg, 6, ""),
    aggressor: jspb.Message.getFieldWithDefault(msg, 7, 0),
    buyOrder: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sellOrder: jspb.Message.getFieldWithDefault(msg, 9, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
    type: jspb.Message.getFieldWithDefault(msg, 11, 0),
    buyerFee: (f = msg.getBuyerFee()) && proto.vega.Fee.toObject(includeInstance, f),
    sellerFee: (f = msg.getSellerFee()) && proto.vega.Fee.toObject(includeInstance, f),
    buyerAuctionBatch: jspb.Message.getFieldWithDefault(msg, 14, 0),
    sellerAuctionBatch: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Trade}
 */
proto.vega.Trade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Trade;
  return proto.vega.Trade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Trade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Trade}
 */
proto.vega.Trade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeller(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.Side} */ (reader.readEnum());
      msg.setAggressor(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyOrder(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellOrder(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 11:
      var value = /** @type {!proto.vega.Trade.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 12:
      var value = new proto.vega.Fee;
      reader.readMessage(value,proto.vega.Fee.deserializeBinaryFromReader);
      msg.setBuyerFee(value);
      break;
    case 13:
      var value = new proto.vega.Fee;
      reader.readMessage(value,proto.vega.Fee.deserializeBinaryFromReader);
      msg.setSellerFee(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerAuctionBatch(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellerAuctionBatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Trade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Trade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Trade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Trade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBuyer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSeller();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAggressor();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBuyOrder();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSellOrder();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getBuyerFee();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.vega.Fee.serializeBinaryToWriter
    );
  }
  f = message.getSellerFee();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.vega.Fee.serializeBinaryToWriter
    );
  }
  f = message.getBuyerAuctionBatch();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getSellerAuctionBatch();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Trade.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_DEFAULT: 1,
  TYPE_NETWORK_CLOSE_OUT_GOOD: 2,
  TYPE_NETWORK_CLOSE_OUT_BAD: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Trade.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.Trade.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.vega.Trade.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 size = 4;
 * @return {number}
 */
proto.vega.Trade.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string buyer = 5;
 * @return {string}
 */
proto.vega.Trade.prototype.getBuyer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setBuyer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string seller = 6;
 * @return {string}
 */
proto.vega.Trade.prototype.getSeller = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSeller = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Side aggressor = 7;
 * @return {!proto.vega.Side}
 */
proto.vega.Trade.prototype.getAggressor = function() {
  return /** @type {!proto.vega.Side} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.Side} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setAggressor = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string buy_order = 8;
 * @return {string}
 */
proto.vega.Trade.prototype.getBuyOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setBuyOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string sell_order = 9;
 * @return {string}
 */
proto.vega.Trade.prototype.getSellOrder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSellOrder = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 timestamp = 10;
 * @return {number}
 */
proto.vega.Trade.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Type type = 11;
 * @return {!proto.vega.Trade.Type}
 */
proto.vega.Trade.prototype.getType = function() {
  return /** @type {!proto.vega.Trade.Type} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.vega.Trade.Type} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional Fee buyer_fee = 12;
 * @return {?proto.vega.Fee}
 */
proto.vega.Trade.prototype.getBuyerFee = function() {
  return /** @type{?proto.vega.Fee} */ (
    jspb.Message.getWrapperField(this, proto.vega.Fee, 12));
};


/**
 * @param {?proto.vega.Fee|undefined} value
 * @return {!proto.vega.Trade} returns this
*/
proto.vega.Trade.prototype.setBuyerFee = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.clearBuyerFee = function() {
  return this.setBuyerFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Trade.prototype.hasBuyerFee = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Fee seller_fee = 13;
 * @return {?proto.vega.Fee}
 */
proto.vega.Trade.prototype.getSellerFee = function() {
  return /** @type{?proto.vega.Fee} */ (
    jspb.Message.getWrapperField(this, proto.vega.Fee, 13));
};


/**
 * @param {?proto.vega.Fee|undefined} value
 * @return {!proto.vega.Trade} returns this
*/
proto.vega.Trade.prototype.setSellerFee = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.clearSellerFee = function() {
  return this.setSellerFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Trade.prototype.hasSellerFee = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint64 buyer_auction_batch = 14;
 * @return {number}
 */
proto.vega.Trade.prototype.getBuyerAuctionBatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setBuyerAuctionBatch = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint64 seller_auction_batch = 15;
 * @return {number}
 */
proto.vega.Trade.prototype.getSellerAuctionBatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSellerAuctionBatch = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Fee.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Fee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Fee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Fee.toObject = function(includeInstance, msg) {
  var f, obj = {
    makerFee: jspb.Message.getFieldWithDefault(msg, 1, ""),
    infrastructureFee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    liquidityFee: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Fee}
 */
proto.vega.Fee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Fee;
  return proto.vega.Fee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Fee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Fee}
 */
proto.vega.Fee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFee(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfrastructureFee(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLiquidityFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Fee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Fee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Fee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Fee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMakerFee();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfrastructureFee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLiquidityFee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string maker_fee = 1;
 * @return {string}
 */
proto.vega.Fee.prototype.getMakerFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Fee} returns this
 */
proto.vega.Fee.prototype.setMakerFee = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string infrastructure_fee = 2;
 * @return {string}
 */
proto.vega.Fee.prototype.getInfrastructureFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Fee} returns this
 */
proto.vega.Fee.prototype.setInfrastructureFee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string liquidity_fee = 3;
 * @return {string}
 */
proto.vega.Fee.prototype.getLiquidityFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Fee} returns this
 */
proto.vega.Fee.prototype.setLiquidityFee = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.TradeSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.TradeSet.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.TradeSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.TradeSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TradeSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.vega.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.TradeSet}
 */
proto.vega.TradeSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.TradeSet;
  return proto.vega.TradeSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.TradeSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.TradeSet}
 */
proto.vega.TradeSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Trade;
      reader.readMessage(value,proto.vega.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.TradeSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.TradeSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.TradeSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TradeSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.vega.TradeSet.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Trade, 1));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.vega.TradeSet} returns this
*/
proto.vega.TradeSet.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.vega.TradeSet.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TradeSet} returns this
 */
proto.vega.TradeSet.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Candle.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Candle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Candle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Candle.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    datetime: jspb.Message.getFieldWithDefault(msg, 2, ""),
    high: jspb.Message.getFieldWithDefault(msg, 3, ""),
    low: jspb.Message.getFieldWithDefault(msg, 4, ""),
    open: jspb.Message.getFieldWithDefault(msg, 5, ""),
    close: jspb.Message.getFieldWithDefault(msg, 6, ""),
    volume: jspb.Message.getFieldWithDefault(msg, 7, 0),
    interval: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Candle}
 */
proto.vega.Candle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Candle;
  return proto.vega.Candle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Candle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Candle}
 */
proto.vega.Candle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHigh(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLow(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpen(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClose(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    case 8:
      var value = /** @type {!proto.vega.Interval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Candle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Candle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Candle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Candle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDatetime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHigh();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLow();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOpen();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClose();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.vega.Candle.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string datetime = 2;
 * @return {string}
 */
proto.vega.Candle.prototype.getDatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setDatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string high = 3;
 * @return {string}
 */
proto.vega.Candle.prototype.getHigh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setHigh = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string low = 4;
 * @return {string}
 */
proto.vega.Candle.prototype.getLow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setLow = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string open = 5;
 * @return {string}
 */
proto.vega.Candle.prototype.getOpen = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setOpen = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string close = 6;
 * @return {string}
 */
proto.vega.Candle.prototype.getClose = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setClose = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 volume = 7;
 * @return {number}
 */
proto.vega.Candle.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Interval interval = 8;
 * @return {!proto.vega.Interval}
 */
proto.vega.Candle.prototype.getInterval = function() {
  return /** @type {!proto.vega.Interval} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.vega.Interval} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PriceLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PriceLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PriceLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numberOfOrders: jspb.Message.getFieldWithDefault(msg, 2, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.PriceLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PriceLevel;
  return proto.vega.PriceLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PriceLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.PriceLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumberOfOrders(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PriceLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PriceLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PriceLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumberOfOrders();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string price = 1;
 * @return {string}
 */
proto.vega.PriceLevel.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PriceLevel} returns this
 */
proto.vega.PriceLevel.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 number_of_orders = 2;
 * @return {number}
 */
proto.vega.PriceLevel.prototype.getNumberOfOrders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceLevel} returns this
 */
proto.vega.PriceLevel.prototype.setNumberOfOrders = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 volume = 3;
 * @return {number}
 */
proto.vega.PriceLevel.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceLevel} returns this
 */
proto.vega.PriceLevel.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MarketDepth.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarketDepth.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarketDepth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarketDepth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepth.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarketDepth}
 */
proto.vega.MarketDepth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarketDepth;
  return proto.vega.MarketDepth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarketDepth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarketDepth}
 */
proto.vega.MarketDepth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarketDepth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarketDepth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarketDepth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.MarketDepth.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PriceLevel buy = 2;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepth.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 2));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepth} returns this
*/
proto.vega.MarketDepth.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepth.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated PriceLevel sell = 3;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepth.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 3));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepth} returns this
*/
proto.vega.MarketDepth.prototype.setSellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepth.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.clearSellList = function() {
  return this.setSellList([]);
};


/**
 * optional uint64 sequence_number = 4;
 * @return {number}
 */
proto.vega.MarketDepth.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MarketDepthUpdate.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarketDepthUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarketDepthUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarketDepthUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepthUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    previousSequenceNumber: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarketDepthUpdate}
 */
proto.vega.MarketDepthUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarketDepthUpdate;
  return proto.vega.MarketDepthUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarketDepthUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarketDepthUpdate}
 */
proto.vega.MarketDepthUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceNumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPreviousSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarketDepthUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarketDepthUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarketDepthUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepthUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPreviousSequenceNumber();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.MarketDepthUpdate.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PriceLevel buy = 2;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepthUpdate.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 2));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
*/
proto.vega.MarketDepthUpdate.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepthUpdate.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated PriceLevel sell = 3;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepthUpdate.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 3));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
*/
proto.vega.MarketDepthUpdate.prototype.setSellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepthUpdate.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.clearSellList = function() {
  return this.setSellList([]);
};


/**
 * optional uint64 sequence_number = 4;
 * @return {number}
 */
proto.vega.MarketDepthUpdate.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 previous_sequence_number = 5;
 * @return {number}
 */
proto.vega.MarketDepthUpdate.prototype.getPreviousSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.setPreviousSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    openVolume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    realisedPnl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    unrealisedPnl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    averageEntryPrice: jspb.Message.getFieldWithDefault(msg, 6, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Position}
 */
proto.vega.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Position;
  return proto.vega.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Position}
 */
proto.vega.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpenVolume(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealisedPnl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnrealisedPnl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAverageEntryPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOpenVolume();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRealisedPnl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUnrealisedPnl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAverageEntryPrice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.Position.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.Position.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 open_volume = 3;
 * @return {number}
 */
proto.vega.Position.prototype.getOpenVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setOpenVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string realised_pnl = 4;
 * @return {string}
 */
proto.vega.Position.prototype.getRealisedPnl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setRealisedPnl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string unrealised_pnl = 5;
 * @return {string}
 */
proto.vega.Position.prototype.getUnrealisedPnl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setUnrealisedPnl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string average_entry_price = 6;
 * @return {string}
 */
proto.vega.Position.prototype.getAverageEntryPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setAverageEntryPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 updated_at = 7;
 * @return {number}
 */
proto.vega.Position.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PositionTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PositionTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PositionTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PositionTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
    volume: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PositionTrade}
 */
proto.vega.PositionTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PositionTrade;
  return proto.vega.PositionTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PositionTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PositionTrade}
 */
proto.vega.PositionTrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PositionTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PositionTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PositionTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PositionTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 volume = 1;
 * @return {number}
 */
proto.vega.PositionTrade.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PositionTrade} returns this
 */
proto.vega.PositionTrade.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.vega.PositionTrade.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PositionTrade} returns this
 */
proto.vega.PositionTrade.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Deposit.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Deposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Deposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Deposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    partyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txHash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    creditedTimestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createdTimestamp: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Deposit}
 */
proto.vega.Deposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Deposit;
  return proto.vega.Deposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Deposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Deposit}
 */
proto.vega.Deposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.Deposit.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreditedTimestamp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Deposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Deposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Deposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Deposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTxHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreditedTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCreatedTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Deposit.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_OPEN: 1,
  STATUS_CANCELLED: 2,
  STATUS_FINALIZED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Deposit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.vega.Deposit.Status}
 */
proto.vega.Deposit.prototype.getStatus = function() {
  return /** @type {!proto.vega.Deposit.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.Deposit.Status} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string party_id = 3;
 * @return {string}
 */
proto.vega.Deposit.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.vega.Deposit.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amount = 5;
 * @return {string}
 */
proto.vega.Deposit.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string tx_hash = 6;
 * @return {string}
 */
proto.vega.Deposit.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 credited_timestamp = 7;
 * @return {number}
 */
proto.vega.Deposit.prototype.getCreditedTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setCreditedTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 created_timestamp = 8;
 * @return {number}
 */
proto.vega.Deposit.prototype.getCreatedTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setCreatedTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Withdrawal.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Withdrawal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Withdrawal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Withdrawal.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 4, ""),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ref: jspb.Message.getFieldWithDefault(msg, 6, ""),
    txHash: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createdTimestamp: jspb.Message.getFieldWithDefault(msg, 9, 0),
    withdrawnTimestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
    ext: (f = msg.getExt()) && proto.vega.WithdrawExt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Withdrawal}
 */
proto.vega.Withdrawal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Withdrawal;
  return proto.vega.Withdrawal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Withdrawal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Withdrawal}
 */
proto.vega.Withdrawal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 5:
      var value = /** @type {!proto.vega.Withdrawal.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedTimestamp(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWithdrawnTimestamp(value);
      break;
    case 11:
      var value = new proto.vega.WithdrawExt;
      reader.readMessage(value,proto.vega.WithdrawExt.deserializeBinaryFromReader);
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Withdrawal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Withdrawal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Withdrawal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Withdrawal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getRef();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTxHash();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getWithdrawnTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getExt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.vega.WithdrawExt.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Withdrawal.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_OPEN: 1,
  STATUS_REJECTED: 2,
  STATUS_FINALIZED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Status status = 5;
 * @return {!proto.vega.Withdrawal.Status}
 */
proto.vega.Withdrawal.prototype.getStatus = function() {
  return /** @type {!proto.vega.Withdrawal.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.vega.Withdrawal.Status} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string ref = 6;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setRef = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string tx_hash = 8;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 created_timestamp = 9;
 * @return {number}
 */
proto.vega.Withdrawal.prototype.getCreatedTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setCreatedTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 withdrawn_timestamp = 10;
 * @return {number}
 */
proto.vega.Withdrawal.prototype.getWithdrawnTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setWithdrawnTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional WithdrawExt ext = 11;
 * @return {?proto.vega.WithdrawExt}
 */
proto.vega.Withdrawal.prototype.getExt = function() {
  return /** @type{?proto.vega.WithdrawExt} */ (
    jspb.Message.getWrapperField(this, proto.vega.WithdrawExt, 11));
};


/**
 * @param {?proto.vega.WithdrawExt|undefined} value
 * @return {!proto.vega.Withdrawal} returns this
*/
proto.vega.Withdrawal.prototype.setExt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.clearExt = function() {
  return this.setExt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Withdrawal.prototype.hasExt = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.WithdrawExt.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.vega.WithdrawExt.ExtCase = {
  EXT_NOT_SET: 0,
  ERC20: 1
};

/**
 * @return {proto.vega.WithdrawExt.ExtCase}
 */
proto.vega.WithdrawExt.prototype.getExtCase = function() {
  return /** @type {proto.vega.WithdrawExt.ExtCase} */(jspb.Message.computeOneofCase(this, proto.vega.WithdrawExt.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.WithdrawExt.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.WithdrawExt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.WithdrawExt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.WithdrawExt.toObject = function(includeInstance, msg) {
  var f, obj = {
    erc20: (f = msg.getErc20()) && proto.vega.Erc20WithdrawExt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.WithdrawExt}
 */
proto.vega.WithdrawExt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.WithdrawExt;
  return proto.vega.WithdrawExt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.WithdrawExt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.WithdrawExt}
 */
proto.vega.WithdrawExt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Erc20WithdrawExt;
      reader.readMessage(value,proto.vega.Erc20WithdrawExt.deserializeBinaryFromReader);
      msg.setErc20(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.WithdrawExt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.WithdrawExt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.WithdrawExt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.WithdrawExt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErc20();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Erc20WithdrawExt.serializeBinaryToWriter
    );
  }
};


/**
 * optional Erc20WithdrawExt erc20 = 1;
 * @return {?proto.vega.Erc20WithdrawExt}
 */
proto.vega.WithdrawExt.prototype.getErc20 = function() {
  return /** @type{?proto.vega.Erc20WithdrawExt} */ (
    jspb.Message.getWrapperField(this, proto.vega.Erc20WithdrawExt, 1));
};


/**
 * @param {?proto.vega.Erc20WithdrawExt|undefined} value
 * @return {!proto.vega.WithdrawExt} returns this
*/
proto.vega.WithdrawExt.prototype.setErc20 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.vega.WithdrawExt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.WithdrawExt} returns this
 */
proto.vega.WithdrawExt.prototype.clearErc20 = function() {
  return this.setErc20(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.WithdrawExt.prototype.hasErc20 = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Erc20WithdrawExt.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Erc20WithdrawExt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Erc20WithdrawExt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Erc20WithdrawExt.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiverAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Erc20WithdrawExt}
 */
proto.vega.Erc20WithdrawExt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Erc20WithdrawExt;
  return proto.vega.Erc20WithdrawExt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Erc20WithdrawExt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Erc20WithdrawExt}
 */
proto.vega.Erc20WithdrawExt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Erc20WithdrawExt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Erc20WithdrawExt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Erc20WithdrawExt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Erc20WithdrawExt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiverAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string receiver_address = 1;
 * @return {string}
 */
proto.vega.Erc20WithdrawExt.prototype.getReceiverAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Erc20WithdrawExt} returns this
 */
proto.vega.Erc20WithdrawExt.prototype.setReceiverAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 3, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 4, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Account}
 */
proto.vega.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Account;
  return proto.vega.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Account}
 */
proto.vega.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 6:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Account.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.vega.Account.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string balance = 3;
 * @return {string}
 */
proto.vega.Account.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.vega.Account.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string market_id = 5;
 * @return {string}
 */
proto.vega.Account.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional AccountType type = 6;
 * @return {!proto.vega.AccountType}
 */
proto.vega.Account.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.FinancialAmount.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.FinancialAmount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.FinancialAmount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.FinancialAmount.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.FinancialAmount}
 */
proto.vega.FinancialAmount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.FinancialAmount;
  return proto.vega.FinancialAmount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.FinancialAmount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.FinancialAmount}
 */
proto.vega.FinancialAmount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.FinancialAmount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.FinancialAmount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.FinancialAmount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.FinancialAmount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string amount = 1;
 * @return {string}
 */
proto.vega.FinancialAmount.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.FinancialAmount} returns this
 */
proto.vega.FinancialAmount.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string asset = 2;
 * @return {string}
 */
proto.vega.FinancialAmount.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.FinancialAmount} returns this
 */
proto.vega.FinancialAmount.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Transfer.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Transfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Transfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Transfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: (f = msg.getAmount()) && proto.vega.FinancialAmount.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minAmount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Transfer}
 */
proto.vega.Transfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Transfer;
  return proto.vega.Transfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Transfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Transfer}
 */
proto.vega.Transfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = new proto.vega.FinancialAmount;
      reader.readMessage(value,proto.vega.FinancialAmount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.TransferType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Transfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Transfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Transfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Transfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.FinancialAmount.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMinAmount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.vega.Transfer.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FinancialAmount amount = 2;
 * @return {?proto.vega.FinancialAmount}
 */
proto.vega.Transfer.prototype.getAmount = function() {
  return /** @type{?proto.vega.FinancialAmount} */ (
    jspb.Message.getWrapperField(this, proto.vega.FinancialAmount, 2));
};


/**
 * @param {?proto.vega.FinancialAmount|undefined} value
 * @return {!proto.vega.Transfer} returns this
*/
proto.vega.Transfer.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Transfer.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransferType type = 3;
 * @return {!proto.vega.TransferType}
 */
proto.vega.Transfer.prototype.getType = function() {
  return /** @type {!proto.vega.TransferType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.TransferType} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string min_amount = 4;
 * @return {string}
 */
proto.vega.Transfer.prototype.getMinAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string market_id = 5;
 * @return {string}
 */
proto.vega.Transfer.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.DispatchStrategy.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.DispatchStrategy.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.DispatchStrategy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.DispatchStrategy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.DispatchStrategy.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetForMetric: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metric: jspb.Message.getFieldWithDefault(msg, 2, 0),
    marketsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.DispatchStrategy}
 */
proto.vega.DispatchStrategy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.DispatchStrategy;
  return proto.vega.DispatchStrategy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.DispatchStrategy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.DispatchStrategy}
 */
proto.vega.DispatchStrategy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetForMetric(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.DispatchMetric} */ (reader.readEnum());
      msg.setMetric(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMarkets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.DispatchStrategy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.DispatchStrategy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.DispatchStrategy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.DispatchStrategy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetForMetric();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetric();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string asset_for_metric = 1;
 * @return {string}
 */
proto.vega.DispatchStrategy.prototype.getAssetForMetric = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.DispatchStrategy} returns this
 */
proto.vega.DispatchStrategy.prototype.setAssetForMetric = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DispatchMetric metric = 2;
 * @return {!proto.vega.DispatchMetric}
 */
proto.vega.DispatchStrategy.prototype.getMetric = function() {
  return /** @type {!proto.vega.DispatchMetric} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.DispatchMetric} value
 * @return {!proto.vega.DispatchStrategy} returns this
 */
proto.vega.DispatchStrategy.prototype.setMetric = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string markets = 3;
 * @return {!Array<string>}
 */
proto.vega.DispatchStrategy.prototype.getMarketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.DispatchStrategy} returns this
 */
proto.vega.DispatchStrategy.prototype.setMarketsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.DispatchStrategy} returns this
 */
proto.vega.DispatchStrategy.prototype.addMarkets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.DispatchStrategy} returns this
 */
proto.vega.DispatchStrategy.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.TransferRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.TransferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.TransferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.TransferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromAccountList: jspb.Message.toObjectList(msg.getFromAccountList(),
    proto.vega.Account.toObject, includeInstance),
    toAccountList: jspb.Message.toObjectList(msg.getToAccountList(),
    proto.vega.Account.toObject, includeInstance),
    amount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    minAmount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.TransferRequest}
 */
proto.vega.TransferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.TransferRequest;
  return proto.vega.TransferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.TransferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.TransferRequest}
 */
proto.vega.TransferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Account;
      reader.readMessage(value,proto.vega.Account.deserializeBinaryFromReader);
      msg.addFromAccount(value);
      break;
    case 2:
      var value = new proto.vega.Account;
      reader.readMessage(value,proto.vega.Account.deserializeBinaryFromReader);
      msg.addToAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.TransferType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.TransferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.TransferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.TransferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromAccountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.Account.serializeBinaryToWriter
    );
  }
  f = message.getToAccountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.Account.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMinAmount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * repeated Account from_account = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.vega.TransferRequest.prototype.getFromAccountList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.vega.TransferRequest} returns this
*/
proto.vega.TransferRequest.prototype.setFromAccountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.vega.TransferRequest.prototype.addFromAccount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.clearFromAccountList = function() {
  return this.setFromAccountList([]);
};


/**
 * repeated Account to_account = 2;
 * @return {!Array<!proto.vega.Account>}
 */
proto.vega.TransferRequest.prototype.getToAccountList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Account, 2));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.vega.TransferRequest} returns this
*/
proto.vega.TransferRequest.prototype.setToAccountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.vega.TransferRequest.prototype.addToAccount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.clearToAccountList = function() {
  return this.setToAccountList([]);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.TransferRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string min_amount = 4;
 * @return {string}
 */
proto.vega.TransferRequest.prototype.getMinAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setMinAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string asset = 5;
 * @return {string}
 */
proto.vega.TransferRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional TransferType type = 7;
 * @return {!proto.vega.TransferType}
 */
proto.vega.TransferRequest.prototype.getType = function() {
  return /** @type {!proto.vega.TransferType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.TransferType} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.AccountDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.AccountDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.AccountDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AccountDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    owner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.AccountDetails}
 */
proto.vega.AccountDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.AccountDetails;
  return proto.vega.AccountDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.AccountDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.AccountDetails}
 */
proto.vega.AccountDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetId(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.AccountDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.AccountDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.AccountDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AccountDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string asset_id = 1;
 * @return {string}
 */
proto.vega.AccountDetails.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.AccountDetails} returns this
 */
proto.vega.AccountDetails.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AccountType type = 2;
 * @return {!proto.vega.AccountType}
 */
proto.vega.AccountDetails.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.vega.AccountDetails} returns this
 */
proto.vega.AccountDetails.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string owner = 3;
 * @return {string}
 */
proto.vega.AccountDetails.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.AccountDetails} returns this
 */
proto.vega.AccountDetails.prototype.setOwner = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.AccountDetails} returns this
 */
proto.vega.AccountDetails.prototype.clearOwner = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.AccountDetails.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string market_id = 4;
 * @return {string}
 */
proto.vega.AccountDetails.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.AccountDetails} returns this
 */
proto.vega.AccountDetails.prototype.setMarketId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.AccountDetails} returns this
 */
proto.vega.AccountDetails.prototype.clearMarketId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.AccountDetails.prototype.hasMarketId = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LedgerEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LedgerEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LedgerEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LedgerEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromAccount: (f = msg.getFromAccount()) && proto.vega.AccountDetails.toObject(includeInstance, f),
    toAccount: (f = msg.getToAccount()) && proto.vega.AccountDetails.toObject(includeInstance, f),
    amount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fromAccountBalance: jspb.Message.getFieldWithDefault(msg, 6, ""),
    toAccountBalance: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LedgerEntry}
 */
proto.vega.LedgerEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LedgerEntry;
  return proto.vega.LedgerEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LedgerEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LedgerEntry}
 */
proto.vega.LedgerEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.AccountDetails;
      reader.readMessage(value,proto.vega.AccountDetails.deserializeBinaryFromReader);
      msg.setFromAccount(value);
      break;
    case 2:
      var value = new proto.vega.AccountDetails;
      reader.readMessage(value,proto.vega.AccountDetails.deserializeBinaryFromReader);
      msg.setToAccount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.TransferType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromAccountBalance(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setToAccountBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LedgerEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LedgerEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LedgerEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LedgerEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.AccountDetails.serializeBinaryToWriter
    );
  }
  f = message.getToAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.AccountDetails.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFromAccountBalance();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getToAccountBalance();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional AccountDetails from_account = 1;
 * @return {?proto.vega.AccountDetails}
 */
proto.vega.LedgerEntry.prototype.getFromAccount = function() {
  return /** @type{?proto.vega.AccountDetails} */ (
    jspb.Message.getWrapperField(this, proto.vega.AccountDetails, 1));
};


/**
 * @param {?proto.vega.AccountDetails|undefined} value
 * @return {!proto.vega.LedgerEntry} returns this
*/
proto.vega.LedgerEntry.prototype.setFromAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.clearFromAccount = function() {
  return this.setFromAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.LedgerEntry.prototype.hasFromAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountDetails to_account = 2;
 * @return {?proto.vega.AccountDetails}
 */
proto.vega.LedgerEntry.prototype.getToAccount = function() {
  return /** @type{?proto.vega.AccountDetails} */ (
    jspb.Message.getWrapperField(this, proto.vega.AccountDetails, 2));
};


/**
 * @param {?proto.vega.AccountDetails|undefined} value
 * @return {!proto.vega.LedgerEntry} returns this
*/
proto.vega.LedgerEntry.prototype.setToAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.clearToAccount = function() {
  return this.setToAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.LedgerEntry.prototype.hasToAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TransferType type = 4;
 * @return {!proto.vega.TransferType}
 */
proto.vega.LedgerEntry.prototype.getType = function() {
  return /** @type {!proto.vega.TransferType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.vega.TransferType} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.vega.LedgerEntry.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string from_account_balance = 6;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getFromAccountBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setFromAccountBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string to_account_balance = 7;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getToAccountBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setToAccountBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PostTransferBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PostTransferBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PostTransferBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PostTransferBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.vega.AccountDetails.toObject(includeInstance, f),
    balance: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PostTransferBalance}
 */
proto.vega.PostTransferBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PostTransferBalance;
  return proto.vega.PostTransferBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PostTransferBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PostTransferBalance}
 */
proto.vega.PostTransferBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.AccountDetails;
      reader.readMessage(value,proto.vega.AccountDetails.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PostTransferBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PostTransferBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PostTransferBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PostTransferBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.AccountDetails.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional AccountDetails account = 1;
 * @return {?proto.vega.AccountDetails}
 */
proto.vega.PostTransferBalance.prototype.getAccount = function() {
  return /** @type{?proto.vega.AccountDetails} */ (
    jspb.Message.getWrapperField(this, proto.vega.AccountDetails, 1));
};


/**
 * @param {?proto.vega.AccountDetails|undefined} value
 * @return {!proto.vega.PostTransferBalance} returns this
*/
proto.vega.PostTransferBalance.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.PostTransferBalance} returns this
 */
proto.vega.PostTransferBalance.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.PostTransferBalance.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string balance = 2;
 * @return {string}
 */
proto.vega.PostTransferBalance.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PostTransferBalance} returns this
 */
proto.vega.PostTransferBalance.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.LedgerMovement.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LedgerMovement.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LedgerMovement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LedgerMovement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LedgerMovement.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.vega.LedgerEntry.toObject, includeInstance),
    balancesList: jspb.Message.toObjectList(msg.getBalancesList(),
    proto.vega.PostTransferBalance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LedgerMovement}
 */
proto.vega.LedgerMovement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LedgerMovement;
  return proto.vega.LedgerMovement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LedgerMovement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LedgerMovement}
 */
proto.vega.LedgerMovement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.LedgerEntry;
      reader.readMessage(value,proto.vega.LedgerEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 2:
      var value = new proto.vega.PostTransferBalance;
      reader.readMessage(value,proto.vega.PostTransferBalance.deserializeBinaryFromReader);
      msg.addBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LedgerMovement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LedgerMovement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LedgerMovement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LedgerMovement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.LedgerEntry.serializeBinaryToWriter
    );
  }
  f = message.getBalancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.PostTransferBalance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LedgerEntry entries = 1;
 * @return {!Array<!proto.vega.LedgerEntry>}
 */
proto.vega.LedgerMovement.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.vega.LedgerEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LedgerEntry, 1));
};


/**
 * @param {!Array<!proto.vega.LedgerEntry>} value
 * @return {!proto.vega.LedgerMovement} returns this
*/
proto.vega.LedgerMovement.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.LedgerEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LedgerEntry}
 */
proto.vega.LedgerMovement.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.LedgerEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LedgerMovement} returns this
 */
proto.vega.LedgerMovement.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * repeated PostTransferBalance balances = 2;
 * @return {!Array<!proto.vega.PostTransferBalance>}
 */
proto.vega.LedgerMovement.prototype.getBalancesList = function() {
  return /** @type{!Array<!proto.vega.PostTransferBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PostTransferBalance, 2));
};


/**
 * @param {!Array<!proto.vega.PostTransferBalance>} value
 * @return {!proto.vega.LedgerMovement} returns this
*/
proto.vega.LedgerMovement.prototype.setBalancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PostTransferBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PostTransferBalance}
 */
proto.vega.LedgerMovement.prototype.addBalances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PostTransferBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LedgerMovement} returns this
 */
proto.vega.LedgerMovement.prototype.clearBalancesList = function() {
  return this.setBalancesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarginLevels.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarginLevels.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarginLevels} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarginLevels.toObject = function(includeInstance, msg) {
  var f, obj = {
    maintenanceMargin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    searchLevel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    initialMargin: jspb.Message.getFieldWithDefault(msg, 3, ""),
    collateralReleaseLevel: jspb.Message.getFieldWithDefault(msg, 4, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 7, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarginLevels}
 */
proto.vega.MarginLevels.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarginLevels;
  return proto.vega.MarginLevels.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarginLevels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarginLevels}
 */
proto.vega.MarginLevels.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMargin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchLevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMargin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollateralReleaseLevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarginLevels.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarginLevels.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarginLevels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarginLevels.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaintenanceMargin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSearchLevel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInitialMargin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCollateralReleaseLevel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string maintenance_margin = 1;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getMaintenanceMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setMaintenanceMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string search_level = 2;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getSearchLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setSearchLevel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string initial_margin = 3;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getInitialMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setInitialMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string collateral_release_level = 4;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getCollateralReleaseLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setCollateralReleaseLevel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string party_id = 5;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string market_id = 6;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string asset = 7;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 timestamp = 8;
 * @return {number}
 */
proto.vega.MarginLevels.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MarketData.repeatedFields_ = [24,26];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarketData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarketData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarketData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketData.toObject = function(includeInstance, msg) {
  var f, obj = {
    markPrice: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bestBidPrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bestBidVolume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bestOfferPrice: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bestOfferVolume: jspb.Message.getFieldWithDefault(msg, 5, 0),
    bestStaticBidPrice: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bestStaticBidVolume: jspb.Message.getFieldWithDefault(msg, 7, 0),
    bestStaticOfferPrice: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bestStaticOfferVolume: jspb.Message.getFieldWithDefault(msg, 9, 0),
    midPrice: jspb.Message.getFieldWithDefault(msg, 10, ""),
    staticMidPrice: jspb.Message.getFieldWithDefault(msg, 11, ""),
    market: jspb.Message.getFieldWithDefault(msg, 12, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 13, 0),
    openInterest: jspb.Message.getFieldWithDefault(msg, 14, 0),
    auctionEnd: jspb.Message.getFieldWithDefault(msg, 15, 0),
    auctionStart: jspb.Message.getFieldWithDefault(msg, 16, 0),
    indicativePrice: jspb.Message.getFieldWithDefault(msg, 17, ""),
    indicativeVolume: jspb.Message.getFieldWithDefault(msg, 18, 0),
    marketTradingMode: jspb.Message.getFieldWithDefault(msg, 19, 0),
    trigger: jspb.Message.getFieldWithDefault(msg, 20, 0),
    extensionTrigger: jspb.Message.getFieldWithDefault(msg, 21, 0),
    targetStake: jspb.Message.getFieldWithDefault(msg, 22, ""),
    suppliedStake: jspb.Message.getFieldWithDefault(msg, 23, ""),
    priceMonitoringBoundsList: jspb.Message.toObjectList(msg.getPriceMonitoringBoundsList(),
    proto.vega.PriceMonitoringBounds.toObject, includeInstance),
    marketValueProxy: jspb.Message.getFieldWithDefault(msg, 25, ""),
    liquidityProviderFeeShareList: jspb.Message.toObjectList(msg.getLiquidityProviderFeeShareList(),
    proto.vega.LiquidityProviderFeeShare.toObject, includeInstance),
    marketState: jspb.Message.getFieldWithDefault(msg, 27, 0),
    nextMarkToMarket: jspb.Message.getFieldWithDefault(msg, 28, 0),
    lastTradedPrice: jspb.Message.getFieldWithDefault(msg, 29, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarketData}
 */
proto.vega.MarketData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarketData;
  return proto.vega.MarketData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarketData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarketData}
 */
proto.vega.MarketData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarkPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBestBidPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestBidVolume(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBestOfferPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestOfferVolume(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBestStaticBidPrice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestStaticBidVolume(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBestStaticOfferPrice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestStaticOfferVolume(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMidPrice(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setStaticMidPrice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpenInterest(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionEnd(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionStart(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndicativePrice(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndicativeVolume(value);
      break;
    case 19:
      var value = /** @type {!proto.vega.Market.TradingMode} */ (reader.readEnum());
      msg.setMarketTradingMode(value);
      break;
    case 20:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setTrigger(value);
      break;
    case 21:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setExtensionTrigger(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetStake(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuppliedStake(value);
      break;
    case 24:
      var value = new proto.vega.PriceMonitoringBounds;
      reader.readMessage(value,proto.vega.PriceMonitoringBounds.deserializeBinaryFromReader);
      msg.addPriceMonitoringBounds(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketValueProxy(value);
      break;
    case 26:
      var value = new proto.vega.LiquidityProviderFeeShare;
      reader.readMessage(value,proto.vega.LiquidityProviderFeeShare.deserializeBinaryFromReader);
      msg.addLiquidityProviderFeeShare(value);
      break;
    case 27:
      var value = /** @type {!proto.vega.Market.State} */ (reader.readEnum());
      msg.setMarketState(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextMarkToMarket(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastTradedPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarketData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarketData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarketData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarkPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBestBidPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBestBidVolume();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBestOfferPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBestOfferVolume();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBestStaticBidPrice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBestStaticBidVolume();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getBestStaticOfferPrice();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBestStaticOfferVolume();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getMidPrice();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStaticMidPrice();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getOpenInterest();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getAuctionEnd();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getAuctionStart();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getIndicativePrice();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getIndicativeVolume();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getMarketTradingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getTrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getExtensionTrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getTargetStake();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getSuppliedStake();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getPriceMonitoringBoundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.vega.PriceMonitoringBounds.serializeBinaryToWriter
    );
  }
  f = message.getMarketValueProxy();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getLiquidityProviderFeeShareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.vega.LiquidityProviderFeeShare.serializeBinaryToWriter
    );
  }
  f = message.getMarketState();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getNextMarkToMarket();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getLastTradedPrice();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
};


/**
 * optional string mark_price = 1;
 * @return {string}
 */
proto.vega.MarketData.prototype.getMarkPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarkPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string best_bid_price = 2;
 * @return {string}
 */
proto.vega.MarketData.prototype.getBestBidPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestBidPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 best_bid_volume = 3;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestBidVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestBidVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string best_offer_price = 4;
 * @return {string}
 */
proto.vega.MarketData.prototype.getBestOfferPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestOfferPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 best_offer_volume = 5;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestOfferVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestOfferVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string best_static_bid_price = 6;
 * @return {string}
 */
proto.vega.MarketData.prototype.getBestStaticBidPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestStaticBidPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 best_static_bid_volume = 7;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestStaticBidVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestStaticBidVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string best_static_offer_price = 8;
 * @return {string}
 */
proto.vega.MarketData.prototype.getBestStaticOfferPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestStaticOfferPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 best_static_offer_volume = 9;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestStaticOfferVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestStaticOfferVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string mid_price = 10;
 * @return {string}
 */
proto.vega.MarketData.prototype.getMidPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMidPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string static_mid_price = 11;
 * @return {string}
 */
proto.vega.MarketData.prototype.getStaticMidPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setStaticMidPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string market = 12;
 * @return {string}
 */
proto.vega.MarketData.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 timestamp = 13;
 * @return {number}
 */
proto.vega.MarketData.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 open_interest = 14;
 * @return {number}
 */
proto.vega.MarketData.prototype.getOpenInterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setOpenInterest = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 auction_end = 15;
 * @return {number}
 */
proto.vega.MarketData.prototype.getAuctionEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setAuctionEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int64 auction_start = 16;
 * @return {number}
 */
proto.vega.MarketData.prototype.getAuctionStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setAuctionStart = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional string indicative_price = 17;
 * @return {string}
 */
proto.vega.MarketData.prototype.getIndicativePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setIndicativePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional uint64 indicative_volume = 18;
 * @return {number}
 */
proto.vega.MarketData.prototype.getIndicativeVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setIndicativeVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional Market.TradingMode market_trading_mode = 19;
 * @return {!proto.vega.Market.TradingMode}
 */
proto.vega.MarketData.prototype.getMarketTradingMode = function() {
  return /** @type {!proto.vega.Market.TradingMode} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.vega.Market.TradingMode} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarketTradingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional AuctionTrigger trigger = 20;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.MarketData.prototype.getTrigger = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setTrigger = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional AuctionTrigger extension_trigger = 21;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.MarketData.prototype.getExtensionTrigger = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setExtensionTrigger = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional string target_stake = 22;
 * @return {string}
 */
proto.vega.MarketData.prototype.getTargetStake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setTargetStake = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string supplied_stake = 23;
 * @return {string}
 */
proto.vega.MarketData.prototype.getSuppliedStake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setSuppliedStake = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * repeated PriceMonitoringBounds price_monitoring_bounds = 24;
 * @return {!Array<!proto.vega.PriceMonitoringBounds>}
 */
proto.vega.MarketData.prototype.getPriceMonitoringBoundsList = function() {
  return /** @type{!Array<!proto.vega.PriceMonitoringBounds>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceMonitoringBounds, 24));
};


/**
 * @param {!Array<!proto.vega.PriceMonitoringBounds>} value
 * @return {!proto.vega.MarketData} returns this
*/
proto.vega.MarketData.prototype.setPriceMonitoringBoundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.vega.PriceMonitoringBounds=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceMonitoringBounds}
 */
proto.vega.MarketData.prototype.addPriceMonitoringBounds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.vega.PriceMonitoringBounds, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.clearPriceMonitoringBoundsList = function() {
  return this.setPriceMonitoringBoundsList([]);
};


/**
 * optional string market_value_proxy = 25;
 * @return {string}
 */
proto.vega.MarketData.prototype.getMarketValueProxy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarketValueProxy = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * repeated LiquidityProviderFeeShare liquidity_provider_fee_share = 26;
 * @return {!Array<!proto.vega.LiquidityProviderFeeShare>}
 */
proto.vega.MarketData.prototype.getLiquidityProviderFeeShareList = function() {
  return /** @type{!Array<!proto.vega.LiquidityProviderFeeShare>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityProviderFeeShare, 26));
};


/**
 * @param {!Array<!proto.vega.LiquidityProviderFeeShare>} value
 * @return {!proto.vega.MarketData} returns this
*/
proto.vega.MarketData.prototype.setLiquidityProviderFeeShareList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.vega.LiquidityProviderFeeShare=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityProviderFeeShare}
 */
proto.vega.MarketData.prototype.addLiquidityProviderFeeShare = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.vega.LiquidityProviderFeeShare, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.clearLiquidityProviderFeeShareList = function() {
  return this.setLiquidityProviderFeeShareList([]);
};


/**
 * optional Market.State market_state = 27;
 * @return {!proto.vega.Market.State}
 */
proto.vega.MarketData.prototype.getMarketState = function() {
  return /** @type {!proto.vega.Market.State} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.vega.Market.State} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarketState = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional int64 next_mark_to_market = 28;
 * @return {number}
 */
proto.vega.MarketData.prototype.getNextMarkToMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setNextMarkToMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional string last_traded_price = 29;
 * @return {string}
 */
proto.vega.MarketData.prototype.getLastTradedPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setLastTradedPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityProviderFeeShare.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityProviderFeeShare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityProviderFeeShare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProviderFeeShare.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    equityLikeShare: jspb.Message.getFieldWithDefault(msg, 2, ""),
    averageEntryValuation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    averageScore: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityProviderFeeShare}
 */
proto.vega.LiquidityProviderFeeShare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityProviderFeeShare;
  return proto.vega.LiquidityProviderFeeShare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityProviderFeeShare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityProviderFeeShare}
 */
proto.vega.LiquidityProviderFeeShare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEquityLikeShare(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAverageEntryValuation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAverageScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityProviderFeeShare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityProviderFeeShare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityProviderFeeShare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProviderFeeShare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEquityLikeShare();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAverageEntryValuation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAverageScore();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.LiquidityProviderFeeShare.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProviderFeeShare} returns this
 */
proto.vega.LiquidityProviderFeeShare.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string equity_like_share = 2;
 * @return {string}
 */
proto.vega.LiquidityProviderFeeShare.prototype.getEquityLikeShare = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProviderFeeShare} returns this
 */
proto.vega.LiquidityProviderFeeShare.prototype.setEquityLikeShare = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string average_entry_valuation = 3;
 * @return {string}
 */
proto.vega.LiquidityProviderFeeShare.prototype.getAverageEntryValuation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProviderFeeShare} returns this
 */
proto.vega.LiquidityProviderFeeShare.prototype.setAverageEntryValuation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string average_score = 4;
 * @return {string}
 */
proto.vega.LiquidityProviderFeeShare.prototype.getAverageScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProviderFeeShare} returns this
 */
proto.vega.LiquidityProviderFeeShare.prototype.setAverageScore = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PriceMonitoringBounds.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PriceMonitoringBounds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PriceMonitoringBounds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceMonitoringBounds.toObject = function(includeInstance, msg) {
  var f, obj = {
    minValidPrice: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxValidPrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    trigger: (f = msg.getTrigger()) && vega_markets_pb.PriceMonitoringTrigger.toObject(includeInstance, f),
    referencePrice: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PriceMonitoringBounds}
 */
proto.vega.PriceMonitoringBounds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PriceMonitoringBounds;
  return proto.vega.PriceMonitoringBounds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PriceMonitoringBounds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PriceMonitoringBounds}
 */
proto.vega.PriceMonitoringBounds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinValidPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxValidPrice(value);
      break;
    case 3:
      var value = new vega_markets_pb.PriceMonitoringTrigger;
      reader.readMessage(value,vega_markets_pb.PriceMonitoringTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferencePrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PriceMonitoringBounds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PriceMonitoringBounds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PriceMonitoringBounds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceMonitoringBounds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinValidPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxValidPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      vega_markets_pb.PriceMonitoringTrigger.serializeBinaryToWriter
    );
  }
  f = message.getReferencePrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string min_valid_price = 1;
 * @return {string}
 */
proto.vega.PriceMonitoringBounds.prototype.getMinValidPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.setMinValidPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string max_valid_price = 2;
 * @return {string}
 */
proto.vega.PriceMonitoringBounds.prototype.getMaxValidPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.setMaxValidPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PriceMonitoringTrigger trigger = 3;
 * @return {?proto.vega.PriceMonitoringTrigger}
 */
proto.vega.PriceMonitoringBounds.prototype.getTrigger = function() {
  return /** @type{?proto.vega.PriceMonitoringTrigger} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.PriceMonitoringTrigger, 3));
};


/**
 * @param {?proto.vega.PriceMonitoringTrigger|undefined} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
*/
proto.vega.PriceMonitoringBounds.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.PriceMonitoringBounds.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reference_price = 4;
 * @return {string}
 */
proto.vega.PriceMonitoringBounds.prototype.getReferencePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.setReferencePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.ErrorDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.ErrorDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.ErrorDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ErrorDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inner: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.ErrorDetail}
 */
proto.vega.ErrorDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.ErrorDetail;
  return proto.vega.ErrorDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.ErrorDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.ErrorDetail}
 */
proto.vega.ErrorDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.ErrorDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.ErrorDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.ErrorDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ErrorDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.vega.ErrorDetail.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.ErrorDetail} returns this
 */
proto.vega.ErrorDetail.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.vega.ErrorDetail.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.ErrorDetail} returns this
 */
proto.vega.ErrorDetail.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string inner = 3;
 * @return {string}
 */
proto.vega.ErrorDetail.prototype.getInner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.ErrorDetail} returns this
 */
proto.vega.ErrorDetail.prototype.setInner = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NetworkParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NetworkParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NetworkParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NetworkParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NetworkParameter}
 */
proto.vega.NetworkParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NetworkParameter;
  return proto.vega.NetworkParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NetworkParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NetworkParameter}
 */
proto.vega.NetworkParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NetworkParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NetworkParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NetworkParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NetworkParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.vega.NetworkParameter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NetworkParameter} returns this
 */
proto.vega.NetworkParameter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.vega.NetworkParameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NetworkParameter} returns this
 */
proto.vega.NetworkParameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NetworkLimits.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NetworkLimits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NetworkLimits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NetworkLimits.toObject = function(includeInstance, msg) {
  var f, obj = {
    canProposeMarket: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    canProposeAsset: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    proposeMarketEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    proposeAssetEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    genesisLoaded: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    proposeMarketEnabledFrom: jspb.Message.getFieldWithDefault(msg, 8, 0),
    proposeAssetEnabledFrom: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NetworkLimits}
 */
proto.vega.NetworkLimits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NetworkLimits;
  return proto.vega.NetworkLimits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NetworkLimits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NetworkLimits}
 */
proto.vega.NetworkLimits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanProposeMarket(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanProposeAsset(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProposeMarketEnabled(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProposeAssetEnabled(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGenesisLoaded(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposeMarketEnabledFrom(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposeAssetEnabledFrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NetworkLimits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NetworkLimits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NetworkLimits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NetworkLimits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanProposeMarket();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCanProposeAsset();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getProposeMarketEnabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getProposeAssetEnabled();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getGenesisLoaded();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getProposeMarketEnabledFrom();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getProposeAssetEnabledFrom();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * optional bool can_propose_market = 1;
 * @return {boolean}
 */
proto.vega.NetworkLimits.prototype.getCanProposeMarket = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setCanProposeMarket = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool can_propose_asset = 2;
 * @return {boolean}
 */
proto.vega.NetworkLimits.prototype.getCanProposeAsset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setCanProposeAsset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool propose_market_enabled = 4;
 * @return {boolean}
 */
proto.vega.NetworkLimits.prototype.getProposeMarketEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setProposeMarketEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool propose_asset_enabled = 5;
 * @return {boolean}
 */
proto.vega.NetworkLimits.prototype.getProposeAssetEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setProposeAssetEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool genesis_loaded = 7;
 * @return {boolean}
 */
proto.vega.NetworkLimits.prototype.getGenesisLoaded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setGenesisLoaded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int64 propose_market_enabled_from = 8;
 * @return {number}
 */
proto.vega.NetworkLimits.prototype.getProposeMarketEnabledFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setProposeMarketEnabledFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 propose_asset_enabled_from = 9;
 * @return {number}
 */
proto.vega.NetworkLimits.prototype.getProposeAssetEnabledFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NetworkLimits} returns this
 */
proto.vega.NetworkLimits.prototype.setProposeAssetEnabledFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, 0),
    proportion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityOrder;
  return proto.vega.LiquidityOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.PeggedReference} */ (reader.readEnum());
      msg.setReference(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProportion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProportion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional PeggedReference reference = 1;
 * @return {!proto.vega.PeggedReference}
 */
proto.vega.LiquidityOrder.prototype.getReference = function() {
  return /** @type {!proto.vega.PeggedReference} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.PeggedReference} value
 * @return {!proto.vega.LiquidityOrder} returns this
 */
proto.vega.LiquidityOrder.prototype.setReference = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 proportion = 2;
 * @return {number}
 */
proto.vega.LiquidityOrder.prototype.getProportion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityOrder} returns this
 */
proto.vega.LiquidityOrder.prototype.setProportion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string offset = 3;
 * @return {string}
 */
proto.vega.LiquidityOrder.prototype.getOffset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityOrder} returns this
 */
proto.vega.LiquidityOrder.prototype.setOffset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityOrderReference.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityOrderReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityOrderReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrderReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    liquidityOrder: (f = msg.getLiquidityOrder()) && proto.vega.LiquidityOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityOrderReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityOrderReference;
  return proto.vega.LiquidityOrderReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityOrderReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityOrderReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = new proto.vega.LiquidityOrder;
      reader.readMessage(value,proto.vega.LiquidityOrder.deserializeBinaryFromReader);
      msg.setLiquidityOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityOrderReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityOrderReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityOrderReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrderReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLiquidityOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.LiquidityOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.vega.LiquidityOrderReference.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityOrderReference} returns this
 */
proto.vega.LiquidityOrderReference.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LiquidityOrder liquidity_order = 2;
 * @return {?proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityOrderReference.prototype.getLiquidityOrder = function() {
  return /** @type{?proto.vega.LiquidityOrder} */ (
    jspb.Message.getWrapperField(this, proto.vega.LiquidityOrder, 2));
};


/**
 * @param {?proto.vega.LiquidityOrder|undefined} value
 * @return {!proto.vega.LiquidityOrderReference} returns this
*/
proto.vega.LiquidityOrderReference.prototype.setLiquidityOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.LiquidityOrderReference} returns this
 */
proto.vega.LiquidityOrderReference.prototype.clearLiquidityOrder = function() {
  return this.setLiquidityOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.LiquidityOrderReference.prototype.hasLiquidityOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.LiquidityProvision.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityProvision.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityProvision.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityProvision} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProvision.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    marketId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    commitmentAmount: jspb.Message.getFieldWithDefault(msg, 6, ""),
    fee: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sellsList: jspb.Message.toObjectList(msg.getSellsList(),
    proto.vega.LiquidityOrderReference.toObject, includeInstance),
    buysList: jspb.Message.toObjectList(msg.getBuysList(),
    proto.vega.LiquidityOrderReference.toObject, includeInstance),
    version: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    reference: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityProvision}
 */
proto.vega.LiquidityProvision.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityProvision;
  return proto.vega.LiquidityProvision.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityProvision} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityProvision}
 */
proto.vega.LiquidityProvision.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitmentAmount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 8:
      var value = new proto.vega.LiquidityOrderReference;
      reader.readMessage(value,proto.vega.LiquidityOrderReference.deserializeBinaryFromReader);
      msg.addSells(value);
      break;
    case 9:
      var value = new proto.vega.LiquidityOrderReference;
      reader.readMessage(value,proto.vega.LiquidityOrderReference.deserializeBinaryFromReader);
      msg.addBuys(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    case 11:
      var value = /** @type {!proto.vega.LiquidityProvision.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityProvision.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityProvision.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityProvision} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProvision.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCommitmentAmount();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.vega.LiquidityOrderReference.serializeBinaryToWriter
    );
  }
  f = message.getBuysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.vega.LiquidityOrderReference.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.LiquidityProvision.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_ACTIVE: 1,
  STATUS_STOPPED: 2,
  STATUS_CANCELLED: 3,
  STATUS_REJECTED: 4,
  STATUS_UNDEPLOYED: 5,
  STATUS_PENDING: 6
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 created_at = 3;
 * @return {number}
 */
proto.vega.LiquidityProvision.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 updated_at = 4;
 * @return {number}
 */
proto.vega.LiquidityProvision.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string market_id = 5;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string commitment_amount = 6;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getCommitmentAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setCommitmentAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fee = 7;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated LiquidityOrderReference sells = 8;
 * @return {!Array<!proto.vega.LiquidityOrderReference>}
 */
proto.vega.LiquidityProvision.prototype.getSellsList = function() {
  return /** @type{!Array<!proto.vega.LiquidityOrderReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityOrderReference, 8));
};


/**
 * @param {!Array<!proto.vega.LiquidityOrderReference>} value
 * @return {!proto.vega.LiquidityProvision} returns this
*/
proto.vega.LiquidityProvision.prototype.setSellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.vega.LiquidityOrderReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityProvision.prototype.addSells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.vega.LiquidityOrderReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.clearSellsList = function() {
  return this.setSellsList([]);
};


/**
 * repeated LiquidityOrderReference buys = 9;
 * @return {!Array<!proto.vega.LiquidityOrderReference>}
 */
proto.vega.LiquidityProvision.prototype.getBuysList = function() {
  return /** @type{!Array<!proto.vega.LiquidityOrderReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityOrderReference, 9));
};


/**
 * @param {!Array<!proto.vega.LiquidityOrderReference>} value
 * @return {!proto.vega.LiquidityProvision} returns this
*/
proto.vega.LiquidityProvision.prototype.setBuysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.vega.LiquidityOrderReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityProvision.prototype.addBuys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.vega.LiquidityOrderReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.clearBuysList = function() {
  return this.setBuysList([]);
};


/**
 * optional uint64 version = 10;
 * @return {number}
 */
proto.vega.LiquidityProvision.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Status status = 11;
 * @return {!proto.vega.LiquidityProvision.Status}
 */
proto.vega.LiquidityProvision.prototype.getStatus = function() {
  return /** @type {!proto.vega.LiquidityProvision.Status} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.vega.LiquidityProvision.Status} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string reference = 12;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EthereumConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EthereumConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EthereumConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EthereumConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collateralBridgeContract: (f = msg.getCollateralBridgeContract()) && proto.vega.EthereumContractConfig.toObject(includeInstance, f),
    confirmations: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stakingBridgeContract: (f = msg.getStakingBridgeContract()) && proto.vega.EthereumContractConfig.toObject(includeInstance, f),
    tokenVestingContract: (f = msg.getTokenVestingContract()) && proto.vega.EthereumContractConfig.toObject(includeInstance, f),
    multisigControlContract: (f = msg.getMultisigControlContract()) && proto.vega.EthereumContractConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EthereumConfig}
 */
proto.vega.EthereumConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EthereumConfig;
  return proto.vega.EthereumConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EthereumConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EthereumConfig}
 */
proto.vega.EthereumConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 3:
      var value = new proto.vega.EthereumContractConfig;
      reader.readMessage(value,proto.vega.EthereumContractConfig.deserializeBinaryFromReader);
      msg.setCollateralBridgeContract(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmations(value);
      break;
    case 5:
      var value = new proto.vega.EthereumContractConfig;
      reader.readMessage(value,proto.vega.EthereumContractConfig.deserializeBinaryFromReader);
      msg.setStakingBridgeContract(value);
      break;
    case 6:
      var value = new proto.vega.EthereumContractConfig;
      reader.readMessage(value,proto.vega.EthereumContractConfig.deserializeBinaryFromReader);
      msg.setTokenVestingContract(value);
      break;
    case 7:
      var value = new proto.vega.EthereumContractConfig;
      reader.readMessage(value,proto.vega.EthereumContractConfig.deserializeBinaryFromReader);
      msg.setMultisigControlContract(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EthereumConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EthereumConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EthereumConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EthereumConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollateralBridgeContract();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vega.EthereumContractConfig.serializeBinaryToWriter
    );
  }
  f = message.getConfirmations();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStakingBridgeContract();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.vega.EthereumContractConfig.serializeBinaryToWriter
    );
  }
  f = message.getTokenVestingContract();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.vega.EthereumContractConfig.serializeBinaryToWriter
    );
  }
  f = message.getMultisigControlContract();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.vega.EthereumContractConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string network_id = 1;
 * @return {string}
 */
proto.vega.EthereumConfig.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.vega.EthereumConfig.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional EthereumContractConfig collateral_bridge_contract = 3;
 * @return {?proto.vega.EthereumContractConfig}
 */
proto.vega.EthereumConfig.prototype.getCollateralBridgeContract = function() {
  return /** @type{?proto.vega.EthereumContractConfig} */ (
    jspb.Message.getWrapperField(this, proto.vega.EthereumContractConfig, 3));
};


/**
 * @param {?proto.vega.EthereumContractConfig|undefined} value
 * @return {!proto.vega.EthereumConfig} returns this
*/
proto.vega.EthereumConfig.prototype.setCollateralBridgeContract = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.clearCollateralBridgeContract = function() {
  return this.setCollateralBridgeContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.EthereumConfig.prototype.hasCollateralBridgeContract = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 confirmations = 4;
 * @return {number}
 */
proto.vega.EthereumConfig.prototype.getConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional EthereumContractConfig staking_bridge_contract = 5;
 * @return {?proto.vega.EthereumContractConfig}
 */
proto.vega.EthereumConfig.prototype.getStakingBridgeContract = function() {
  return /** @type{?proto.vega.EthereumContractConfig} */ (
    jspb.Message.getWrapperField(this, proto.vega.EthereumContractConfig, 5));
};


/**
 * @param {?proto.vega.EthereumContractConfig|undefined} value
 * @return {!proto.vega.EthereumConfig} returns this
*/
proto.vega.EthereumConfig.prototype.setStakingBridgeContract = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.clearStakingBridgeContract = function() {
  return this.setStakingBridgeContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.EthereumConfig.prototype.hasStakingBridgeContract = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EthereumContractConfig token_vesting_contract = 6;
 * @return {?proto.vega.EthereumContractConfig}
 */
proto.vega.EthereumConfig.prototype.getTokenVestingContract = function() {
  return /** @type{?proto.vega.EthereumContractConfig} */ (
    jspb.Message.getWrapperField(this, proto.vega.EthereumContractConfig, 6));
};


/**
 * @param {?proto.vega.EthereumContractConfig|undefined} value
 * @return {!proto.vega.EthereumConfig} returns this
*/
proto.vega.EthereumConfig.prototype.setTokenVestingContract = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.clearTokenVestingContract = function() {
  return this.setTokenVestingContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.EthereumConfig.prototype.hasTokenVestingContract = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional EthereumContractConfig multisig_control_contract = 7;
 * @return {?proto.vega.EthereumContractConfig}
 */
proto.vega.EthereumConfig.prototype.getMultisigControlContract = function() {
  return /** @type{?proto.vega.EthereumContractConfig} */ (
    jspb.Message.getWrapperField(this, proto.vega.EthereumContractConfig, 7));
};


/**
 * @param {?proto.vega.EthereumContractConfig|undefined} value
 * @return {!proto.vega.EthereumConfig} returns this
*/
proto.vega.EthereumConfig.prototype.setMultisigControlContract = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.clearMultisigControlContract = function() {
  return this.setMultisigControlContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.EthereumConfig.prototype.hasMultisigControlContract = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EthereumContractConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EthereumContractConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EthereumContractConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EthereumContractConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deploymentBlockHeight: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EthereumContractConfig}
 */
proto.vega.EthereumContractConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EthereumContractConfig;
  return proto.vega.EthereumContractConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EthereumContractConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EthereumContractConfig}
 */
proto.vega.EthereumContractConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeploymentBlockHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EthereumContractConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EthereumContractConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EthereumContractConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EthereumContractConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeploymentBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.vega.EthereumContractConfig.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EthereumContractConfig} returns this
 */
proto.vega.EthereumContractConfig.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 deployment_block_height = 6;
 * @return {number}
 */
proto.vega.EthereumContractConfig.prototype.getDeploymentBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EthereumContractConfig} returns this
 */
proto.vega.EthereumContractConfig.prototype.setDeploymentBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EpochTimestamps.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EpochTimestamps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EpochTimestamps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochTimestamps.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expiryTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    firstBlock: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastBlock: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EpochTimestamps}
 */
proto.vega.EpochTimestamps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EpochTimestamps;
  return proto.vega.EpochTimestamps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EpochTimestamps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EpochTimestamps}
 */
proto.vega.EpochTimestamps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiryTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFirstBlock(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EpochTimestamps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EpochTimestamps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EpochTimestamps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochTimestamps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getExpiryTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFirstBlock();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getLastBlock();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional int64 start_time = 1;
 * @return {number}
 */
proto.vega.EpochTimestamps.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochTimestamps} returns this
 */
proto.vega.EpochTimestamps.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 expiry_time = 2;
 * @return {number}
 */
proto.vega.EpochTimestamps.prototype.getExpiryTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochTimestamps} returns this
 */
proto.vega.EpochTimestamps.prototype.setExpiryTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 end_time = 3;
 * @return {number}
 */
proto.vega.EpochTimestamps.prototype.getEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochTimestamps} returns this
 */
proto.vega.EpochTimestamps.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 first_block = 4;
 * @return {number}
 */
proto.vega.EpochTimestamps.prototype.getFirstBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochTimestamps} returns this
 */
proto.vega.EpochTimestamps.prototype.setFirstBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 last_block = 5;
 * @return {number}
 */
proto.vega.EpochTimestamps.prototype.getLastBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochTimestamps} returns this
 */
proto.vega.EpochTimestamps.prototype.setLastBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.Epoch.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Epoch.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Epoch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Epoch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Epoch.toObject = function(includeInstance, msg) {
  var f, obj = {
    seq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamps: (f = msg.getTimestamps()) && proto.vega.EpochTimestamps.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.vega.Node.toObject, includeInstance),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.vega.Delegation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Epoch}
 */
proto.vega.Epoch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Epoch;
  return proto.vega.Epoch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Epoch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Epoch}
 */
proto.vega.Epoch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeq(value);
      break;
    case 2:
      var value = new proto.vega.EpochTimestamps;
      reader.readMessage(value,proto.vega.EpochTimestamps.deserializeBinaryFromReader);
      msg.setTimestamps(value);
      break;
    case 3:
      var value = new proto.vega.Node;
      reader.readMessage(value,proto.vega.Node.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 4:
      var value = new proto.vega.Delegation;
      reader.readMessage(value,proto.vega.Delegation.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Epoch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Epoch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Epoch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Epoch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTimestamps();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.EpochTimestamps.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.Node.serializeBinaryToWriter
    );
  }
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 seq = 1;
 * @return {number}
 */
proto.vega.Epoch.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Epoch} returns this
 */
proto.vega.Epoch.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional EpochTimestamps timestamps = 2;
 * @return {?proto.vega.EpochTimestamps}
 */
proto.vega.Epoch.prototype.getTimestamps = function() {
  return /** @type{?proto.vega.EpochTimestamps} */ (
    jspb.Message.getWrapperField(this, proto.vega.EpochTimestamps, 2));
};


/**
 * @param {?proto.vega.EpochTimestamps|undefined} value
 * @return {!proto.vega.Epoch} returns this
*/
proto.vega.Epoch.prototype.setTimestamps = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Epoch} returns this
 */
proto.vega.Epoch.prototype.clearTimestamps = function() {
  return this.setTimestamps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Epoch.prototype.hasTimestamps = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Node validators = 3;
 * @return {!Array<!proto.vega.Node>}
 */
proto.vega.Epoch.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.vega.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Node, 3));
};


/**
 * @param {!Array<!proto.vega.Node>} value
 * @return {!proto.vega.Epoch} returns this
*/
proto.vega.Epoch.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Node}
 */
proto.vega.Epoch.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.Epoch} returns this
 */
proto.vega.Epoch.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * repeated Delegation delegations = 4;
 * @return {!Array<!proto.vega.Delegation>}
 */
proto.vega.Epoch.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.vega.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Delegation, 4));
};


/**
 * @param {!Array<!proto.vega.Delegation>} value
 * @return {!proto.vega.Epoch} returns this
*/
proto.vega.Epoch.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Delegation}
 */
proto.vega.Epoch.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.Epoch} returns this
 */
proto.vega.Epoch.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EpochParticipation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EpochParticipation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EpochParticipation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochParticipation.toObject = function(includeInstance, msg) {
  var f, obj = {
    epoch: (f = msg.getEpoch()) && proto.vega.Epoch.toObject(includeInstance, f),
    offline: jspb.Message.getFieldWithDefault(msg, 2, 0),
    online: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalRewards: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EpochParticipation}
 */
proto.vega.EpochParticipation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EpochParticipation;
  return proto.vega.EpochParticipation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EpochParticipation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EpochParticipation}
 */
proto.vega.EpochParticipation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Epoch;
      reader.readMessage(value,proto.vega.Epoch.deserializeBinaryFromReader);
      msg.setEpoch(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffline(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOnline(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalRewards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EpochParticipation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EpochParticipation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EpochParticipation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochParticipation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpoch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Epoch.serializeBinaryToWriter
    );
  }
  f = message.getOffline();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getOnline();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTotalRewards();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional Epoch epoch = 1;
 * @return {?proto.vega.Epoch}
 */
proto.vega.EpochParticipation.prototype.getEpoch = function() {
  return /** @type{?proto.vega.Epoch} */ (
    jspb.Message.getWrapperField(this, proto.vega.Epoch, 1));
};


/**
 * @param {?proto.vega.Epoch|undefined} value
 * @return {!proto.vega.EpochParticipation} returns this
*/
proto.vega.EpochParticipation.prototype.setEpoch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.EpochParticipation} returns this
 */
proto.vega.EpochParticipation.prototype.clearEpoch = function() {
  return this.setEpoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.EpochParticipation.prototype.hasEpoch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 offline = 2;
 * @return {number}
 */
proto.vega.EpochParticipation.prototype.getOffline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochParticipation} returns this
 */
proto.vega.EpochParticipation.prototype.setOffline = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 online = 3;
 * @return {number}
 */
proto.vega.EpochParticipation.prototype.getOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochParticipation} returns this
 */
proto.vega.EpochParticipation.prototype.setOnline = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double total_rewards = 4;
 * @return {number}
 */
proto.vega.EpochParticipation.prototype.getTotalRewards = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochParticipation} returns this
 */
proto.vega.EpochParticipation.prototype.setTotalRewards = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EpochData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EpochData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EpochData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochData.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offline: jspb.Message.getFieldWithDefault(msg, 2, 0),
    online: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EpochData}
 */
proto.vega.EpochData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EpochData;
  return proto.vega.EpochData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EpochData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EpochData}
 */
proto.vega.EpochData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffline(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EpochData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EpochData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EpochData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOffline();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOnline();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.vega.EpochData.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochData} returns this
 */
proto.vega.EpochData.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 offline = 2;
 * @return {number}
 */
proto.vega.EpochData.prototype.getOffline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochData} returns this
 */
proto.vega.EpochData.prototype.setOffline = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 online = 3;
 * @return {number}
 */
proto.vega.EpochData.prototype.getOnline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochData} returns this
 */
proto.vega.EpochData.prototype.setOnline = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.RankingScore.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.RankingScore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.RankingScore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RankingScore.toObject = function(includeInstance, msg) {
  var f, obj = {
    stakeScore: jspb.Message.getFieldWithDefault(msg, 1, ""),
    performanceScore: jspb.Message.getFieldWithDefault(msg, 2, ""),
    previousStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    votingPower: jspb.Message.getFieldWithDefault(msg, 5, 0),
    rankingScore: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.RankingScore}
 */
proto.vega.RankingScore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.RankingScore;
  return proto.vega.RankingScore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.RankingScore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.RankingScore}
 */
proto.vega.RankingScore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakeScore(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPerformanceScore(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.ValidatorNodeStatus} */ (reader.readEnum());
      msg.setPreviousStatus(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.ValidatorNodeStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVotingPower(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRankingScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.RankingScore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.RankingScore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.RankingScore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RankingScore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStakeScore();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPerformanceScore();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreviousStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getVotingPower();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRankingScore();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string stake_score = 1;
 * @return {string}
 */
proto.vega.RankingScore.prototype.getStakeScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RankingScore} returns this
 */
proto.vega.RankingScore.prototype.setStakeScore = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string performance_score = 2;
 * @return {string}
 */
proto.vega.RankingScore.prototype.getPerformanceScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RankingScore} returns this
 */
proto.vega.RankingScore.prototype.setPerformanceScore = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ValidatorNodeStatus previous_status = 3;
 * @return {!proto.vega.ValidatorNodeStatus}
 */
proto.vega.RankingScore.prototype.getPreviousStatus = function() {
  return /** @type {!proto.vega.ValidatorNodeStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.ValidatorNodeStatus} value
 * @return {!proto.vega.RankingScore} returns this
 */
proto.vega.RankingScore.prototype.setPreviousStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ValidatorNodeStatus status = 4;
 * @return {!proto.vega.ValidatorNodeStatus}
 */
proto.vega.RankingScore.prototype.getStatus = function() {
  return /** @type {!proto.vega.ValidatorNodeStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.vega.ValidatorNodeStatus} value
 * @return {!proto.vega.RankingScore} returns this
 */
proto.vega.RankingScore.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint32 voting_power = 5;
 * @return {number}
 */
proto.vega.RankingScore.prototype.getVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.RankingScore} returns this
 */
proto.vega.RankingScore.prototype.setVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string ranking_score = 6;
 * @return {string}
 */
proto.vega.RankingScore.prototype.getRankingScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RankingScore} returns this
 */
proto.vega.RankingScore.prototype.setRankingScore = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.RewardScore.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.RewardScore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.RewardScore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RewardScore.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawValidatorScore: jspb.Message.getFieldWithDefault(msg, 1, ""),
    performanceScore: jspb.Message.getFieldWithDefault(msg, 2, ""),
    multisigScore: jspb.Message.getFieldWithDefault(msg, 3, ""),
    validatorScore: jspb.Message.getFieldWithDefault(msg, 4, ""),
    normalisedScore: jspb.Message.getFieldWithDefault(msg, 5, ""),
    validatorStatus: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.RewardScore}
 */
proto.vega.RewardScore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.RewardScore;
  return proto.vega.RewardScore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.RewardScore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.RewardScore}
 */
proto.vega.RewardScore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRawValidatorScore(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPerformanceScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMultisigScore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormalisedScore(value);
      break;
    case 6:
      var value = /** @type {!proto.vega.ValidatorNodeStatus} */ (reader.readEnum());
      msg.setValidatorStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.RewardScore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.RewardScore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.RewardScore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RewardScore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawValidatorScore();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPerformanceScore();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMultisigScore();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValidatorScore();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNormalisedScore();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getValidatorStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string raw_validator_score = 1;
 * @return {string}
 */
proto.vega.RewardScore.prototype.getRawValidatorScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardScore} returns this
 */
proto.vega.RewardScore.prototype.setRawValidatorScore = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string performance_score = 2;
 * @return {string}
 */
proto.vega.RewardScore.prototype.getPerformanceScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardScore} returns this
 */
proto.vega.RewardScore.prototype.setPerformanceScore = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string multisig_score = 3;
 * @return {string}
 */
proto.vega.RewardScore.prototype.getMultisigScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardScore} returns this
 */
proto.vega.RewardScore.prototype.setMultisigScore = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string validator_score = 4;
 * @return {string}
 */
proto.vega.RewardScore.prototype.getValidatorScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardScore} returns this
 */
proto.vega.RewardScore.prototype.setValidatorScore = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string normalised_score = 5;
 * @return {string}
 */
proto.vega.RewardScore.prototype.getNormalisedScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardScore} returns this
 */
proto.vega.RewardScore.prototype.setNormalisedScore = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ValidatorNodeStatus validator_status = 6;
 * @return {!proto.vega.ValidatorNodeStatus}
 */
proto.vega.RewardScore.prototype.getValidatorStatus = function() {
  return /** @type {!proto.vega.ValidatorNodeStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.vega.ValidatorNodeStatus} value
 * @return {!proto.vega.RewardScore} returns this
 */
proto.vega.RewardScore.prototype.setValidatorStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.Node.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pubKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tmPubKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ethereumAddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    infoUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    location: jspb.Message.getFieldWithDefault(msg, 6, ""),
    stakedByOperator: jspb.Message.getFieldWithDefault(msg, 7, ""),
    stakedByDelegates: jspb.Message.getFieldWithDefault(msg, 8, ""),
    stakedTotal: jspb.Message.getFieldWithDefault(msg, 9, ""),
    maxIntendedStake: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pendingStake: jspb.Message.getFieldWithDefault(msg, 11, ""),
    epochData: (f = msg.getEpochData()) && proto.vega.EpochData.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 13, 0),
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.vega.Delegation.toObject, includeInstance),
    rewardScore: (f = msg.getRewardScore()) && proto.vega.RewardScore.toObject(includeInstance, f),
    rankingScore: (f = msg.getRankingScore()) && proto.vega.RankingScore.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 17, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 18, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Node}
 */
proto.vega.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Node;
  return proto.vega.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Node}
 */
proto.vega.Node.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPubKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTmPubKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthereumAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakedByOperator(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakedByDelegates(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakedTotal(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxIntendedStake(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPendingStake(value);
      break;
    case 12:
      var value = new proto.vega.EpochData;
      reader.readMessage(value,proto.vega.EpochData.deserializeBinaryFromReader);
      msg.setEpochData(value);
      break;
    case 13:
      var value = /** @type {!proto.vega.NodeStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 14:
      var value = new proto.vega.Delegation;
      reader.readMessage(value,proto.vega.Delegation.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    case 15:
      var value = new proto.vega.RewardScore;
      reader.readMessage(value,proto.vega.RewardScore.deserializeBinaryFromReader);
      msg.setRewardScore(value);
      break;
    case 16:
      var value = new proto.vega.RankingScore;
      reader.readMessage(value,proto.vega.RankingScore.deserializeBinaryFromReader);
      msg.setRankingScore(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTmPubKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEthereumAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInfoUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStakedByOperator();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStakedByDelegates();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStakedTotal();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMaxIntendedStake();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPendingStake();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEpochData();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.vega.EpochData.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.vega.Delegation.serializeBinaryToWriter
    );
  }
  f = message.getRewardScore();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.vega.RewardScore.serializeBinaryToWriter
    );
  }
  f = message.getRankingScore();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.vega.RankingScore.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Node.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pub_key = 2;
 * @return {string}
 */
proto.vega.Node.prototype.getPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tm_pub_key = 3;
 * @return {string}
 */
proto.vega.Node.prototype.getTmPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setTmPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ethereum_address = 4;
 * @return {string}
 */
proto.vega.Node.prototype.getEthereumAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setEthereumAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string info_url = 5;
 * @return {string}
 */
proto.vega.Node.prototype.getInfoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setInfoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string location = 6;
 * @return {string}
 */
proto.vega.Node.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string staked_by_operator = 7;
 * @return {string}
 */
proto.vega.Node.prototype.getStakedByOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setStakedByOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string staked_by_delegates = 8;
 * @return {string}
 */
proto.vega.Node.prototype.getStakedByDelegates = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setStakedByDelegates = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string staked_total = 9;
 * @return {string}
 */
proto.vega.Node.prototype.getStakedTotal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setStakedTotal = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string max_intended_stake = 10;
 * @return {string}
 */
proto.vega.Node.prototype.getMaxIntendedStake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setMaxIntendedStake = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string pending_stake = 11;
 * @return {string}
 */
proto.vega.Node.prototype.getPendingStake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setPendingStake = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional EpochData epoch_data = 12;
 * @return {?proto.vega.EpochData}
 */
proto.vega.Node.prototype.getEpochData = function() {
  return /** @type{?proto.vega.EpochData} */ (
    jspb.Message.getWrapperField(this, proto.vega.EpochData, 12));
};


/**
 * @param {?proto.vega.EpochData|undefined} value
 * @return {!proto.vega.Node} returns this
*/
proto.vega.Node.prototype.setEpochData = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.clearEpochData = function() {
  return this.setEpochData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Node.prototype.hasEpochData = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional NodeStatus status = 13;
 * @return {!proto.vega.NodeStatus}
 */
proto.vega.Node.prototype.getStatus = function() {
  return /** @type {!proto.vega.NodeStatus} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.vega.NodeStatus} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * repeated Delegation delegations = 14;
 * @return {!Array<!proto.vega.Delegation>}
 */
proto.vega.Node.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.vega.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Delegation, 14));
};


/**
 * @param {!Array<!proto.vega.Delegation>} value
 * @return {!proto.vega.Node} returns this
*/
proto.vega.Node.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.vega.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Delegation}
 */
proto.vega.Node.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.vega.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};


/**
 * optional RewardScore reward_score = 15;
 * @return {?proto.vega.RewardScore}
 */
proto.vega.Node.prototype.getRewardScore = function() {
  return /** @type{?proto.vega.RewardScore} */ (
    jspb.Message.getWrapperField(this, proto.vega.RewardScore, 15));
};


/**
 * @param {?proto.vega.RewardScore|undefined} value
 * @return {!proto.vega.Node} returns this
*/
proto.vega.Node.prototype.setRewardScore = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.clearRewardScore = function() {
  return this.setRewardScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Node.prototype.hasRewardScore = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional RankingScore ranking_score = 16;
 * @return {?proto.vega.RankingScore}
 */
proto.vega.Node.prototype.getRankingScore = function() {
  return /** @type{?proto.vega.RankingScore} */ (
    jspb.Message.getWrapperField(this, proto.vega.RankingScore, 16));
};


/**
 * @param {?proto.vega.RankingScore|undefined} value
 * @return {!proto.vega.Node} returns this
*/
proto.vega.Node.prototype.setRankingScore = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.clearRankingScore = function() {
  return this.setRankingScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Node.prototype.hasRankingScore = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string name = 17;
 * @return {string}
 */
proto.vega.Node.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string avatar_url = 18;
 * @return {string}
 */
proto.vega.Node.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Node} returns this
 */
proto.vega.Node.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.NodeSet.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NodeSet.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NodeSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NodeSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inactive: jspb.Message.getFieldWithDefault(msg, 2, 0),
    promotedList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    demotedList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maximum: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NodeSet}
 */
proto.vega.NodeSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NodeSet;
  return proto.vega.NodeSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NodeSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NodeSet}
 */
proto.vega.NodeSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInactive(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPromoted(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDemoted(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaximum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NodeSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NodeSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NodeSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInactive();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPromotedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDemotedList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 total = 1;
 * @return {number}
 */
proto.vega.NodeSet.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 inactive = 2;
 * @return {number}
 */
proto.vega.NodeSet.prototype.getInactive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.setInactive = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string promoted = 3;
 * @return {!Array<string>}
 */
proto.vega.NodeSet.prototype.getPromotedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.setPromotedList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.addPromoted = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.clearPromotedList = function() {
  return this.setPromotedList([]);
};


/**
 * repeated string demoted = 4;
 * @return {!Array<string>}
 */
proto.vega.NodeSet.prototype.getDemotedList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.setDemotedList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.addDemoted = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.clearDemotedList = function() {
  return this.setDemotedList([]);
};


/**
 * optional uint32 maximum = 5;
 * @return {number}
 */
proto.vega.NodeSet.prototype.getMaximum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.setMaximum = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.NodeSet} returns this
 */
proto.vega.NodeSet.prototype.clearMaximum = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.NodeSet.prototype.hasMaximum = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NodeData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NodeData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NodeData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeData.toObject = function(includeInstance, msg) {
  var f, obj = {
    stakedTotal: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalNodes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inactiveNodes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tendermintNodes: (f = msg.getTendermintNodes()) && proto.vega.NodeSet.toObject(includeInstance, f),
    ersatzNodes: (f = msg.getErsatzNodes()) && proto.vega.NodeSet.toObject(includeInstance, f),
    pendingNodes: (f = msg.getPendingNodes()) && proto.vega.NodeSet.toObject(includeInstance, f),
    uptime: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NodeData}
 */
proto.vega.NodeData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NodeData;
  return proto.vega.NodeData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NodeData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NodeData}
 */
proto.vega.NodeData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakedTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalNodes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInactiveNodes(value);
      break;
    case 4:
      var value = new proto.vega.NodeSet;
      reader.readMessage(value,proto.vega.NodeSet.deserializeBinaryFromReader);
      msg.setTendermintNodes(value);
      break;
    case 5:
      var value = new proto.vega.NodeSet;
      reader.readMessage(value,proto.vega.NodeSet.deserializeBinaryFromReader);
      msg.setErsatzNodes(value);
      break;
    case 6:
      var value = new proto.vega.NodeSet;
      reader.readMessage(value,proto.vega.NodeSet.deserializeBinaryFromReader);
      msg.setPendingNodes(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUptime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NodeData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NodeData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NodeData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStakedTotal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalNodes();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInactiveNodes();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTendermintNodes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vega.NodeSet.serializeBinaryToWriter
    );
  }
  f = message.getErsatzNodes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.vega.NodeSet.serializeBinaryToWriter
    );
  }
  f = message.getPendingNodes();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.vega.NodeSet.serializeBinaryToWriter
    );
  }
  f = message.getUptime();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional string staked_total = 1;
 * @return {string}
 */
proto.vega.NodeData.prototype.getStakedTotal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.setStakedTotal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 total_nodes = 2;
 * @return {number}
 */
proto.vega.NodeData.prototype.getTotalNodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.setTotalNodes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 inactive_nodes = 3;
 * @return {number}
 */
proto.vega.NodeData.prototype.getInactiveNodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.setInactiveNodes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional NodeSet tendermint_nodes = 4;
 * @return {?proto.vega.NodeSet}
 */
proto.vega.NodeData.prototype.getTendermintNodes = function() {
  return /** @type{?proto.vega.NodeSet} */ (
    jspb.Message.getWrapperField(this, proto.vega.NodeSet, 4));
};


/**
 * @param {?proto.vega.NodeSet|undefined} value
 * @return {!proto.vega.NodeData} returns this
*/
proto.vega.NodeData.prototype.setTendermintNodes = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.clearTendermintNodes = function() {
  return this.setTendermintNodes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.NodeData.prototype.hasTendermintNodes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional NodeSet ersatz_nodes = 5;
 * @return {?proto.vega.NodeSet}
 */
proto.vega.NodeData.prototype.getErsatzNodes = function() {
  return /** @type{?proto.vega.NodeSet} */ (
    jspb.Message.getWrapperField(this, proto.vega.NodeSet, 5));
};


/**
 * @param {?proto.vega.NodeSet|undefined} value
 * @return {!proto.vega.NodeData} returns this
*/
proto.vega.NodeData.prototype.setErsatzNodes = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.clearErsatzNodes = function() {
  return this.setErsatzNodes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.NodeData.prototype.hasErsatzNodes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NodeSet pending_nodes = 6;
 * @return {?proto.vega.NodeSet}
 */
proto.vega.NodeData.prototype.getPendingNodes = function() {
  return /** @type{?proto.vega.NodeSet} */ (
    jspb.Message.getWrapperField(this, proto.vega.NodeSet, 6));
};


/**
 * @param {?proto.vega.NodeSet|undefined} value
 * @return {!proto.vega.NodeData} returns this
*/
proto.vega.NodeData.prototype.setPendingNodes = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.clearPendingNodes = function() {
  return this.setPendingNodes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.NodeData.prototype.hasPendingNodes = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional float uptime = 7;
 * @return {number}
 */
proto.vega.NodeData.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vega.NodeData} returns this
 */
proto.vega.NodeData.prototype.setUptime = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Delegation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Delegation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Delegation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Delegation.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Delegation}
 */
proto.vega.Delegation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Delegation;
  return proto.vega.Delegation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Delegation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Delegation}
 */
proto.vega.Delegation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpochSeq(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Delegation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Delegation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Delegation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Delegation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.Delegation.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Delegation} returns this
 */
proto.vega.Delegation.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.vega.Delegation.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Delegation} returns this
 */
proto.vega.Delegation.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.Delegation.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Delegation} returns this
 */
proto.vega.Delegation.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string epoch_seq = 4;
 * @return {string}
 */
proto.vega.Delegation.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Delegation} returns this
 */
proto.vega.Delegation.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Reward.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Reward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Reward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Reward.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    epoch: jspb.Message.getFieldWithDefault(msg, 3, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    percentageOfTotal: jspb.Message.getFieldWithDefault(msg, 5, ""),
    receivedAt: jspb.Message.getFieldWithDefault(msg, 6, 0),
    marketId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    rewardType: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Reward}
 */
proto.vega.Reward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Reward;
  return proto.vega.Reward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Reward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Reward}
 */
proto.vega.Reward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpoch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPercentageOfTotal(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Reward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Reward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Reward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Reward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEpoch();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPercentageOfTotal();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReceivedAt();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRewardType();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string asset_id = 1;
 * @return {string}
 */
proto.vega.Reward.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.Reward.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 epoch = 3;
 * @return {number}
 */
proto.vega.Reward.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string amount = 4;
 * @return {string}
 */
proto.vega.Reward.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string percentage_of_total = 5;
 * @return {string}
 */
proto.vega.Reward.prototype.getPercentageOfTotal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setPercentageOfTotal = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 received_at = 6;
 * @return {number}
 */
proto.vega.Reward.prototype.getReceivedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setReceivedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string market_id = 7;
 * @return {string}
 */
proto.vega.Reward.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string reward_type = 8;
 * @return {string}
 */
proto.vega.Reward.prototype.getRewardType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Reward} returns this
 */
proto.vega.Reward.prototype.setRewardType = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.RewardSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.RewardSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.RewardSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RewardSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.RewardSummary}
 */
proto.vega.RewardSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.RewardSummary;
  return proto.vega.RewardSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.RewardSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.RewardSummary}
 */
proto.vega.RewardSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.RewardSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.RewardSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.RewardSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RewardSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string asset_id = 1;
 * @return {string}
 */
proto.vega.RewardSummary.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardSummary} returns this
 */
proto.vega.RewardSummary.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.RewardSummary.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardSummary} returns this
 */
proto.vega.RewardSummary.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.RewardSummary.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RewardSummary} returns this
 */
proto.vega.RewardSummary.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EpochRewardSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EpochRewardSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EpochRewardSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochRewardSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    epoch: jspb.Message.getFieldWithDefault(msg, 1, 0),
    assetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rewardType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EpochRewardSummary}
 */
proto.vega.EpochRewardSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EpochRewardSummary;
  return proto.vega.EpochRewardSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EpochRewardSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EpochRewardSummary}
 */
proto.vega.EpochRewardSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpoch(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EpochRewardSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EpochRewardSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EpochRewardSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EpochRewardSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpoch();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAssetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRewardType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 epoch = 1;
 * @return {number}
 */
proto.vega.EpochRewardSummary.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EpochRewardSummary} returns this
 */
proto.vega.EpochRewardSummary.prototype.setEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string asset_id = 2;
 * @return {string}
 */
proto.vega.EpochRewardSummary.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EpochRewardSummary} returns this
 */
proto.vega.EpochRewardSummary.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_id = 3;
 * @return {string}
 */
proto.vega.EpochRewardSummary.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EpochRewardSummary} returns this
 */
proto.vega.EpochRewardSummary.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reward_type = 4;
 * @return {string}
 */
proto.vega.EpochRewardSummary.prototype.getRewardType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EpochRewardSummary} returns this
 */
proto.vega.EpochRewardSummary.prototype.setRewardType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amount = 5;
 * @return {string}
 */
proto.vega.EpochRewardSummary.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EpochRewardSummary} returns this
 */
proto.vega.EpochRewardSummary.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.StateValueProposal.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.StateValueProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.StateValueProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.StateValueProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.StateValueProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    stateVarId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kvbList: jspb.Message.toObjectList(msg.getKvbList(),
    proto.vega.KeyValueBundle.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.StateValueProposal}
 */
proto.vega.StateValueProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.StateValueProposal;
  return proto.vega.StateValueProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.StateValueProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.StateValueProposal}
 */
proto.vega.StateValueProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateVarId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 3:
      var value = new proto.vega.KeyValueBundle;
      reader.readMessage(value,proto.vega.KeyValueBundle.deserializeBinaryFromReader);
      msg.addKvb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.StateValueProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.StateValueProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.StateValueProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.StateValueProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStateVarId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKvbList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.KeyValueBundle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string state_var_id = 1;
 * @return {string}
 */
proto.vega.StateValueProposal.prototype.getStateVarId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.StateValueProposal} returns this
 */
proto.vega.StateValueProposal.prototype.setStateVarId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_id = 2;
 * @return {string}
 */
proto.vega.StateValueProposal.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.StateValueProposal} returns this
 */
proto.vega.StateValueProposal.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated KeyValueBundle kvb = 3;
 * @return {!Array<!proto.vega.KeyValueBundle>}
 */
proto.vega.StateValueProposal.prototype.getKvbList = function() {
  return /** @type{!Array<!proto.vega.KeyValueBundle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.KeyValueBundle, 3));
};


/**
 * @param {!Array<!proto.vega.KeyValueBundle>} value
 * @return {!proto.vega.StateValueProposal} returns this
*/
proto.vega.StateValueProposal.prototype.setKvbList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.KeyValueBundle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.KeyValueBundle}
 */
proto.vega.StateValueProposal.prototype.addKvb = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.KeyValueBundle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.StateValueProposal} returns this
 */
proto.vega.StateValueProposal.prototype.clearKvbList = function() {
  return this.setKvbList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.KeyValueBundle.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.KeyValueBundle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.KeyValueBundle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.KeyValueBundle.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tolerance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: (f = msg.getValue()) && proto.vega.StateVarValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.KeyValueBundle}
 */
proto.vega.KeyValueBundle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.KeyValueBundle;
  return proto.vega.KeyValueBundle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.KeyValueBundle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.KeyValueBundle}
 */
proto.vega.KeyValueBundle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTolerance(value);
      break;
    case 3:
      var value = new proto.vega.StateVarValue;
      reader.readMessage(value,proto.vega.StateVarValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.KeyValueBundle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.KeyValueBundle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.KeyValueBundle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.KeyValueBundle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTolerance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vega.StateVarValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.vega.KeyValueBundle.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.KeyValueBundle} returns this
 */
proto.vega.KeyValueBundle.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tolerance = 2;
 * @return {string}
 */
proto.vega.KeyValueBundle.prototype.getTolerance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.KeyValueBundle} returns this
 */
proto.vega.KeyValueBundle.prototype.setTolerance = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional StateVarValue value = 3;
 * @return {?proto.vega.StateVarValue}
 */
proto.vega.KeyValueBundle.prototype.getValue = function() {
  return /** @type{?proto.vega.StateVarValue} */ (
    jspb.Message.getWrapperField(this, proto.vega.StateVarValue, 3));
};


/**
 * @param {?proto.vega.StateVarValue|undefined} value
 * @return {!proto.vega.KeyValueBundle} returns this
*/
proto.vega.KeyValueBundle.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.KeyValueBundle} returns this
 */
proto.vega.KeyValueBundle.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.KeyValueBundle.prototype.hasValue = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.StateVarValue.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.vega.StateVarValue.ValueCase = {
  VALUE_NOT_SET: 0,
  SCALAR_VAL: 1,
  VECTOR_VAL: 2,
  MATRIX_VAL: 3
};

/**
 * @return {proto.vega.StateVarValue.ValueCase}
 */
proto.vega.StateVarValue.prototype.getValueCase = function() {
  return /** @type {proto.vega.StateVarValue.ValueCase} */(jspb.Message.computeOneofCase(this, proto.vega.StateVarValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.StateVarValue.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.StateVarValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.StateVarValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.StateVarValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    scalarVal: (f = msg.getScalarVal()) && proto.vega.ScalarValue.toObject(includeInstance, f),
    vectorVal: (f = msg.getVectorVal()) && proto.vega.VectorValue.toObject(includeInstance, f),
    matrixVal: (f = msg.getMatrixVal()) && proto.vega.MatrixValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.StateVarValue}
 */
proto.vega.StateVarValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.StateVarValue;
  return proto.vega.StateVarValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.StateVarValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.StateVarValue}
 */
proto.vega.StateVarValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.ScalarValue;
      reader.readMessage(value,proto.vega.ScalarValue.deserializeBinaryFromReader);
      msg.setScalarVal(value);
      break;
    case 2:
      var value = new proto.vega.VectorValue;
      reader.readMessage(value,proto.vega.VectorValue.deserializeBinaryFromReader);
      msg.setVectorVal(value);
      break;
    case 3:
      var value = new proto.vega.MatrixValue;
      reader.readMessage(value,proto.vega.MatrixValue.deserializeBinaryFromReader);
      msg.setMatrixVal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.StateVarValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.StateVarValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.StateVarValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.StateVarValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScalarVal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.ScalarValue.serializeBinaryToWriter
    );
  }
  f = message.getVectorVal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.VectorValue.serializeBinaryToWriter
    );
  }
  f = message.getMatrixVal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vega.MatrixValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScalarValue scalar_val = 1;
 * @return {?proto.vega.ScalarValue}
 */
proto.vega.StateVarValue.prototype.getScalarVal = function() {
  return /** @type{?proto.vega.ScalarValue} */ (
    jspb.Message.getWrapperField(this, proto.vega.ScalarValue, 1));
};


/**
 * @param {?proto.vega.ScalarValue|undefined} value
 * @return {!proto.vega.StateVarValue} returns this
*/
proto.vega.StateVarValue.prototype.setScalarVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.vega.StateVarValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.StateVarValue} returns this
 */
proto.vega.StateVarValue.prototype.clearScalarVal = function() {
  return this.setScalarVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.StateVarValue.prototype.hasScalarVal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VectorValue vector_val = 2;
 * @return {?proto.vega.VectorValue}
 */
proto.vega.StateVarValue.prototype.getVectorVal = function() {
  return /** @type{?proto.vega.VectorValue} */ (
    jspb.Message.getWrapperField(this, proto.vega.VectorValue, 2));
};


/**
 * @param {?proto.vega.VectorValue|undefined} value
 * @return {!proto.vega.StateVarValue} returns this
*/
proto.vega.StateVarValue.prototype.setVectorVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.vega.StateVarValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.StateVarValue} returns this
 */
proto.vega.StateVarValue.prototype.clearVectorVal = function() {
  return this.setVectorVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.StateVarValue.prototype.hasVectorVal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MatrixValue matrix_val = 3;
 * @return {?proto.vega.MatrixValue}
 */
proto.vega.StateVarValue.prototype.getMatrixVal = function() {
  return /** @type{?proto.vega.MatrixValue} */ (
    jspb.Message.getWrapperField(this, proto.vega.MatrixValue, 3));
};


/**
 * @param {?proto.vega.MatrixValue|undefined} value
 * @return {!proto.vega.StateVarValue} returns this
*/
proto.vega.StateVarValue.prototype.setMatrixVal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.vega.StateVarValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.StateVarValue} returns this
 */
proto.vega.StateVarValue.prototype.clearMatrixVal = function() {
  return this.setMatrixVal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.StateVarValue.prototype.hasMatrixVal = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.ScalarValue.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.ScalarValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.ScalarValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ScalarValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.ScalarValue}
 */
proto.vega.ScalarValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.ScalarValue;
  return proto.vega.ScalarValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.ScalarValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.ScalarValue}
 */
proto.vega.ScalarValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.ScalarValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.ScalarValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.ScalarValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ScalarValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.vega.ScalarValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.ScalarValue} returns this
 */
proto.vega.ScalarValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.VectorValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.VectorValue.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.VectorValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.VectorValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.VectorValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.VectorValue}
 */
proto.vega.VectorValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.VectorValue;
  return proto.vega.VectorValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.VectorValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.VectorValue}
 */
proto.vega.VectorValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.VectorValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.VectorValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.VectorValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.VectorValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string value = 1;
 * @return {!Array<string>}
 */
proto.vega.VectorValue.prototype.getValueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.VectorValue} returns this
 */
proto.vega.VectorValue.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.VectorValue} returns this
 */
proto.vega.VectorValue.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.VectorValue} returns this
 */
proto.vega.VectorValue.prototype.clearValueList = function() {
  return this.setValueList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MatrixValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MatrixValue.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MatrixValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MatrixValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MatrixValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.vega.VectorValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MatrixValue}
 */
proto.vega.MatrixValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MatrixValue;
  return proto.vega.MatrixValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MatrixValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MatrixValue}
 */
proto.vega.MatrixValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.VectorValue;
      reader.readMessage(value,proto.vega.VectorValue.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MatrixValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MatrixValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MatrixValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MatrixValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.VectorValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VectorValue value = 1;
 * @return {!Array<!proto.vega.VectorValue>}
 */
proto.vega.MatrixValue.prototype.getValueList = function() {
  return /** @type{!Array<!proto.vega.VectorValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.VectorValue, 1));
};


/**
 * @param {!Array<!proto.vega.VectorValue>} value
 * @return {!proto.vega.MatrixValue} returns this
*/
proto.vega.MatrixValue.prototype.setValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.VectorValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.VectorValue}
 */
proto.vega.MatrixValue.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.VectorValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MatrixValue} returns this
 */
proto.vega.MatrixValue.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * @enum {number}
 */
proto.vega.Side = {
  SIDE_UNSPECIFIED: 0,
  SIDE_BUY: 1,
  SIDE_SELL: 2
};

/**
 * @enum {number}
 */
proto.vega.Interval = {
  INTERVAL_UNSPECIFIED: 0,
  INTERVAL_I1M: 60,
  INTERVAL_I5M: 300,
  INTERVAL_I15M: 900,
  INTERVAL_I1H: 3600,
  INTERVAL_I6H: 21600,
  INTERVAL_I1D: 86400
};

/**
 * @enum {number}
 */
proto.vega.AuctionTrigger = {
  AUCTION_TRIGGER_UNSPECIFIED: 0,
  AUCTION_TRIGGER_BATCH: 1,
  AUCTION_TRIGGER_OPENING: 2,
  AUCTION_TRIGGER_PRICE: 3,
  AUCTION_TRIGGER_LIQUIDITY: 4
};

/**
 * @enum {number}
 */
proto.vega.PeggedReference = {
  PEGGED_REFERENCE_UNSPECIFIED: 0,
  PEGGED_REFERENCE_MID: 1,
  PEGGED_REFERENCE_BEST_BID: 2,
  PEGGED_REFERENCE_BEST_ASK: 3
};

/**
 * @enum {number}
 */
proto.vega.OrderError = {
  ORDER_ERROR_UNSPECIFIED: 0,
  ORDER_ERROR_INVALID_MARKET_ID: 1,
  ORDER_ERROR_INVALID_ORDER_ID: 2,
  ORDER_ERROR_OUT_OF_SEQUENCE: 3,
  ORDER_ERROR_INVALID_REMAINING_SIZE: 4,
  ORDER_ERROR_TIME_FAILURE: 5,
  ORDER_ERROR_REMOVAL_FAILURE: 6,
  ORDER_ERROR_INVALID_EXPIRATION_DATETIME: 7,
  ORDER_ERROR_INVALID_ORDER_REFERENCE: 8,
  ORDER_ERROR_EDIT_NOT_ALLOWED: 9,
  ORDER_ERROR_AMEND_FAILURE: 10,
  ORDER_ERROR_NOT_FOUND: 11,
  ORDER_ERROR_INVALID_PARTY_ID: 12,
  ORDER_ERROR_MARKET_CLOSED: 13,
  ORDER_ERROR_MARGIN_CHECK_FAILED: 14,
  ORDER_ERROR_MISSING_GENERAL_ACCOUNT: 15,
  ORDER_ERROR_INTERNAL_ERROR: 16,
  ORDER_ERROR_INVALID_SIZE: 17,
  ORDER_ERROR_INVALID_PERSISTENCE: 18,
  ORDER_ERROR_INVALID_TYPE: 19,
  ORDER_ERROR_SELF_TRADING: 20,
  ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES: 21,
  ORDER_ERROR_INCORRECT_MARKET_TYPE: 22,
  ORDER_ERROR_INVALID_TIME_IN_FORCE: 23,
  ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION: 24,
  ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING: 25,
  ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT: 26,
  ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT: 27,
  ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT: 28,
  ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC: 29,
  ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN: 30,
  ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN: 31,
  ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION: 32,
  ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION: 33,
  ORDER_ERROR_MUST_BE_LIMIT_ORDER: 34,
  ORDER_ERROR_MUST_BE_GTT_OR_GTC: 35,
  ORDER_ERROR_WITHOUT_REFERENCE_PRICE: 36,
  ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE: 37,
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO: 40,
  ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE: 41,
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO: 42,
  ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE: 43,
  ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER: 44,
  ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER: 45,
  ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER: 46,
  ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS: 47,
  ORDER_ERROR_TOO_MANY_PEGGED_ORDERS: 48
};

/**
 * @enum {number}
 */
proto.vega.ChainStatus = {
  CHAIN_STATUS_UNSPECIFIED: 0,
  CHAIN_STATUS_DISCONNECTED: 1,
  CHAIN_STATUS_REPLAYING: 2,
  CHAIN_STATUS_CONNECTED: 3
};

/**
 * @enum {number}
 */
proto.vega.AccountType = {
  ACCOUNT_TYPE_UNSPECIFIED: 0,
  ACCOUNT_TYPE_INSURANCE: 1,
  ACCOUNT_TYPE_SETTLEMENT: 2,
  ACCOUNT_TYPE_MARGIN: 3,
  ACCOUNT_TYPE_GENERAL: 4,
  ACCOUNT_TYPE_FEES_INFRASTRUCTURE: 5,
  ACCOUNT_TYPE_FEES_LIQUIDITY: 6,
  ACCOUNT_TYPE_FEES_MAKER: 7,
  ACCOUNT_TYPE_BOND: 9,
  ACCOUNT_TYPE_EXTERNAL: 10,
  ACCOUNT_TYPE_GLOBAL_INSURANCE: 11,
  ACCOUNT_TYPE_GLOBAL_REWARD: 12,
  ACCOUNT_TYPE_PENDING_TRANSFERS: 13,
  ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES: 14,
  ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES: 15,
  ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES: 16,
  ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS: 17
};

/**
 * @enum {number}
 */
proto.vega.TransferType = {
  TRANSFER_TYPE_UNSPECIFIED: 0,
  TRANSFER_TYPE_LOSS: 1,
  TRANSFER_TYPE_WIN: 2,
  TRANSFER_TYPE_MTM_LOSS: 4,
  TRANSFER_TYPE_MTM_WIN: 5,
  TRANSFER_TYPE_MARGIN_LOW: 6,
  TRANSFER_TYPE_MARGIN_HIGH: 7,
  TRANSFER_TYPE_MARGIN_CONFISCATED: 8,
  TRANSFER_TYPE_MAKER_FEE_PAY: 9,
  TRANSFER_TYPE_MAKER_FEE_RECEIVE: 10,
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY: 11,
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE: 12,
  TRANSFER_TYPE_LIQUIDITY_FEE_PAY: 13,
  TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE: 14,
  TRANSFER_TYPE_BOND_LOW: 15,
  TRANSFER_TYPE_BOND_HIGH: 16,
  TRANSFER_TYPE_WITHDRAW: 18,
  TRANSFER_TYPE_DEPOSIT: 19,
  TRANSFER_TYPE_BOND_SLASHING: 20,
  TRANSFER_TYPE_REWARD_PAYOUT: 21,
  TRANSFER_TYPE_TRANSFER_FUNDS_SEND: 22,
  TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE: 23,
  TRANSFER_TYPE_CLEAR_ACCOUNT: 24,
  TRANSFER_TYPE_CHECKPOINT_BALANCE_RESTORE: 25
};

/**
 * @enum {number}
 */
proto.vega.DispatchMetric = {
  DISPATCH_METRIC_UNSPECIFIED: 0,
  DISPATCH_METRIC_MAKER_FEES_PAID: 1,
  DISPATCH_METRIC_MAKER_FEES_RECEIVED: 2,
  DISPATCH_METRIC_LP_FEES_RECEIVED: 3,
  DISPATCH_METRIC_MARKET_VALUE: 4
};

/**
 * @enum {number}
 */
proto.vega.NodeStatus = {
  NODE_STATUS_UNSPECIFIED: 0,
  NODE_STATUS_VALIDATOR: 1,
  NODE_STATUS_NON_VALIDATOR: 2
};

/**
 * @enum {number}
 */
proto.vega.EpochAction = {
  EPOCH_ACTION_UNSPECIFIED: 0,
  EPOCH_ACTION_START: 1,
  EPOCH_ACTION_END: 2
};

/**
 * @enum {number}
 */
proto.vega.ValidatorNodeStatus = {
  VALIDATOR_NODE_STATUS_UNSPECIFIED: 0,
  VALIDATOR_NODE_STATUS_TENDERMINT: 1,
  VALIDATOR_NODE_STATUS_ERSATZ: 2,
  VALIDATOR_NODE_STATUS_PENDING: 3
};

goog.object.extend(exports, proto.vega);
