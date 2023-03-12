// source: vega/events/v1/events.proto
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

var vega_markets_pb = require('../../../vega/markets_pb.js');
goog.object.extend(proto, vega_markets_pb);
var vega_assets_pb = require('../../../vega/assets_pb.js');
goog.object.extend(proto, vega_assets_pb);
var vega_governance_pb = require('../../../vega/governance_pb.js');
goog.object.extend(proto, vega_governance_pb);
var vega_vega_pb = require('../../../vega/vega_pb.js');
goog.object.extend(proto, vega_vega_pb);
var vega_oracle_pb = require('../../../vega/oracle_pb.js');
goog.object.extend(proto, vega_oracle_pb);
var vega_commands_v1_commands_pb = require('../../../vega/commands/v1/commands_pb.js');
goog.object.extend(proto, vega_commands_v1_commands_pb);
var vega_commands_v1_data_pb = require('../../../vega/commands/v1/data_pb.js');
goog.object.extend(proto, vega_commands_v1_data_pb);
var vega_commands_v1_validator_commands_pb = require('../../../vega/commands/v1/validator_commands_pb.js');
goog.object.extend(proto, vega_commands_v1_validator_commands_pb);
goog.exportSymbol('proto.vega.events.v1.AuctionEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.BeginBlock', null, global);
goog.exportSymbol('proto.vega.events.v1.BusEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.BusEvent.EventCase', null, global);
goog.exportSymbol('proto.vega.events.v1.BusEventType', null, global);
goog.exportSymbol('proto.vega.events.v1.CheckpointEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.CoreSnapshotData', null, global);
goog.exportSymbol('proto.vega.events.v1.DelegationBalanceEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.ERC20MultiSigSignerAdded', null, global);
goog.exportSymbol('proto.vega.events.v1.ERC20MultiSigSignerEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.ERC20MultiSigSignerEvent.Type', null, global);
goog.exportSymbol('proto.vega.events.v1.ERC20MultiSigSignerRemoved', null, global);
goog.exportSymbol('proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter', null, global);
goog.exportSymbol('proto.vega.events.v1.ERC20MultiSigThresholdSetEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.EndBlock', null, global);
goog.exportSymbol('proto.vega.events.v1.EpochEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.EthereumKeyRotation', null, global);
goog.exportSymbol('proto.vega.events.v1.KeyRotation', null, global);
goog.exportSymbol('proto.vega.events.v1.LedgerMovements', null, global);
goog.exportSymbol('proto.vega.events.v1.LossSocialization', null, global);
goog.exportSymbol('proto.vega.events.v1.MarketEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.MarketTick', null, global);
goog.exportSymbol('proto.vega.events.v1.OneOffTransfer', null, global);
goog.exportSymbol('proto.vega.events.v1.PositionResolution', null, global);
goog.exportSymbol('proto.vega.events.v1.PositionStateEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.ProtocolUpgradeDataNodeReady', null, global);
goog.exportSymbol('proto.vega.events.v1.ProtocolUpgradeEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.ProtocolUpgradeProposalStatus', null, global);
goog.exportSymbol('proto.vega.events.v1.ProtocolUpgradeStarted', null, global);
goog.exportSymbol('proto.vega.events.v1.RecurringTransfer', null, global);
goog.exportSymbol('proto.vega.events.v1.RewardPayoutEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.SettleDistressed', null, global);
goog.exportSymbol('proto.vega.events.v1.SettleMarket', null, global);
goog.exportSymbol('proto.vega.events.v1.SettlePosition', null, global);
goog.exportSymbol('proto.vega.events.v1.StakeLinking', null, global);
goog.exportSymbol('proto.vega.events.v1.StakeLinking.Status', null, global);
goog.exportSymbol('proto.vega.events.v1.StakeLinking.Type', null, global);
goog.exportSymbol('proto.vega.events.v1.StateVar', null, global);
goog.exportSymbol('proto.vega.events.v1.StreamStartEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.TimeUpdate', null, global);
goog.exportSymbol('proto.vega.events.v1.TradeSettlement', null, global);
goog.exportSymbol('proto.vega.events.v1.TransactionResult', null, global);
goog.exportSymbol('proto.vega.events.v1.TransactionResult.ExtraCase', null, global);
goog.exportSymbol('proto.vega.events.v1.TransactionResult.FailureDetails', null, global);
goog.exportSymbol('proto.vega.events.v1.TransactionResult.SuccessDetails', null, global);
goog.exportSymbol('proto.vega.events.v1.TransactionResult.TransactionCase', null, global);
goog.exportSymbol('proto.vega.events.v1.Transfer', null, global);
goog.exportSymbol('proto.vega.events.v1.Transfer.KindCase', null, global);
goog.exportSymbol('proto.vega.events.v1.Transfer.Status', null, global);
goog.exportSymbol('proto.vega.events.v1.TxErrorEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.TxErrorEvent.TransactionCase', null, global);
goog.exportSymbol('proto.vega.events.v1.ValidatorRankingEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.ValidatorScoreEvent', null, global);
goog.exportSymbol('proto.vega.events.v1.ValidatorUpdate', null, global);
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
proto.vega.events.v1.ERC20MultiSigSignerAdded = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ERC20MultiSigSignerAdded, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ERC20MultiSigSignerAdded.displayName = 'proto.vega.events.v1.ERC20MultiSigSignerAdded';
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
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.displayName = 'proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter';
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
proto.vega.events.v1.ERC20MultiSigSignerRemoved = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.events.v1.ERC20MultiSigSignerRemoved.repeatedFields_, null);
};
goog.inherits(proto.vega.events.v1.ERC20MultiSigSignerRemoved, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ERC20MultiSigSignerRemoved.displayName = 'proto.vega.events.v1.ERC20MultiSigSignerRemoved';
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
proto.vega.events.v1.Transfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.events.v1.Transfer.oneofGroups_);
};
goog.inherits(proto.vega.events.v1.Transfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.Transfer.displayName = 'proto.vega.events.v1.Transfer';
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
proto.vega.events.v1.OneOffTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.OneOffTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.OneOffTransfer.displayName = 'proto.vega.events.v1.OneOffTransfer';
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
proto.vega.events.v1.RecurringTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.RecurringTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.RecurringTransfer.displayName = 'proto.vega.events.v1.RecurringTransfer';
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
proto.vega.events.v1.StakeLinking = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.StakeLinking, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.StakeLinking.displayName = 'proto.vega.events.v1.StakeLinking';
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
proto.vega.events.v1.ERC20MultiSigSignerEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ERC20MultiSigSignerEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ERC20MultiSigSignerEvent.displayName = 'proto.vega.events.v1.ERC20MultiSigSignerEvent';
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
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ERC20MultiSigThresholdSetEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.displayName = 'proto.vega.events.v1.ERC20MultiSigThresholdSetEvent';
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
proto.vega.events.v1.CheckpointEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.CheckpointEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.CheckpointEvent.displayName = 'proto.vega.events.v1.CheckpointEvent';
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
proto.vega.events.v1.StreamStartEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.StreamStartEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.StreamStartEvent.displayName = 'proto.vega.events.v1.StreamStartEvent';
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
proto.vega.events.v1.RewardPayoutEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.RewardPayoutEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.RewardPayoutEvent.displayName = 'proto.vega.events.v1.RewardPayoutEvent';
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
proto.vega.events.v1.ValidatorScoreEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ValidatorScoreEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ValidatorScoreEvent.displayName = 'proto.vega.events.v1.ValidatorScoreEvent';
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
proto.vega.events.v1.DelegationBalanceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.DelegationBalanceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.DelegationBalanceEvent.displayName = 'proto.vega.events.v1.DelegationBalanceEvent';
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
proto.vega.events.v1.MarketEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.MarketEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.MarketEvent.displayName = 'proto.vega.events.v1.MarketEvent';
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
proto.vega.events.v1.TransactionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.vega.events.v1.TransactionResult.oneofGroups_);
};
goog.inherits(proto.vega.events.v1.TransactionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.TransactionResult.displayName = 'proto.vega.events.v1.TransactionResult';
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
proto.vega.events.v1.TransactionResult.SuccessDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.TransactionResult.SuccessDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.TransactionResult.SuccessDetails.displayName = 'proto.vega.events.v1.TransactionResult.SuccessDetails';
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
proto.vega.events.v1.TransactionResult.FailureDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.TransactionResult.FailureDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.TransactionResult.FailureDetails.displayName = 'proto.vega.events.v1.TransactionResult.FailureDetails';
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
proto.vega.events.v1.TxErrorEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.events.v1.TxErrorEvent.oneofGroups_);
};
goog.inherits(proto.vega.events.v1.TxErrorEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.TxErrorEvent.displayName = 'proto.vega.events.v1.TxErrorEvent';
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
proto.vega.events.v1.TimeUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.TimeUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.TimeUpdate.displayName = 'proto.vega.events.v1.TimeUpdate';
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
proto.vega.events.v1.EpochEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.EpochEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.EpochEvent.displayName = 'proto.vega.events.v1.EpochEvent';
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
proto.vega.events.v1.LedgerMovements = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.events.v1.LedgerMovements.repeatedFields_, null);
};
goog.inherits(proto.vega.events.v1.LedgerMovements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.LedgerMovements.displayName = 'proto.vega.events.v1.LedgerMovements';
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
proto.vega.events.v1.PositionResolution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.PositionResolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.PositionResolution.displayName = 'proto.vega.events.v1.PositionResolution';
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
proto.vega.events.v1.LossSocialization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.LossSocialization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.LossSocialization.displayName = 'proto.vega.events.v1.LossSocialization';
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
proto.vega.events.v1.TradeSettlement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.TradeSettlement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.TradeSettlement.displayName = 'proto.vega.events.v1.TradeSettlement';
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
proto.vega.events.v1.SettlePosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.events.v1.SettlePosition.repeatedFields_, null);
};
goog.inherits(proto.vega.events.v1.SettlePosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.SettlePosition.displayName = 'proto.vega.events.v1.SettlePosition';
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
proto.vega.events.v1.SettleMarket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.SettleMarket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.SettleMarket.displayName = 'proto.vega.events.v1.SettleMarket';
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
proto.vega.events.v1.PositionStateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.PositionStateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.PositionStateEvent.displayName = 'proto.vega.events.v1.PositionStateEvent';
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
proto.vega.events.v1.SettleDistressed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.SettleDistressed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.SettleDistressed.displayName = 'proto.vega.events.v1.SettleDistressed';
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
proto.vega.events.v1.MarketTick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.MarketTick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.MarketTick.displayName = 'proto.vega.events.v1.MarketTick';
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
proto.vega.events.v1.AuctionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.AuctionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.AuctionEvent.displayName = 'proto.vega.events.v1.AuctionEvent';
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
proto.vega.events.v1.ValidatorUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ValidatorUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ValidatorUpdate.displayName = 'proto.vega.events.v1.ValidatorUpdate';
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
proto.vega.events.v1.ValidatorRankingEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ValidatorRankingEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ValidatorRankingEvent.displayName = 'proto.vega.events.v1.ValidatorRankingEvent';
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
proto.vega.events.v1.KeyRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.KeyRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.KeyRotation.displayName = 'proto.vega.events.v1.KeyRotation';
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
proto.vega.events.v1.EthereumKeyRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.EthereumKeyRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.EthereumKeyRotation.displayName = 'proto.vega.events.v1.EthereumKeyRotation';
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
proto.vega.events.v1.ProtocolUpgradeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.events.v1.ProtocolUpgradeEvent.repeatedFields_, null);
};
goog.inherits(proto.vega.events.v1.ProtocolUpgradeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ProtocolUpgradeEvent.displayName = 'proto.vega.events.v1.ProtocolUpgradeEvent';
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
proto.vega.events.v1.StateVar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.StateVar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.StateVar.displayName = 'proto.vega.events.v1.StateVar';
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
proto.vega.events.v1.BeginBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.BeginBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.BeginBlock.displayName = 'proto.vega.events.v1.BeginBlock';
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
proto.vega.events.v1.EndBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.EndBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.EndBlock.displayName = 'proto.vega.events.v1.EndBlock';
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
proto.vega.events.v1.ProtocolUpgradeStarted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ProtocolUpgradeStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ProtocolUpgradeStarted.displayName = 'proto.vega.events.v1.ProtocolUpgradeStarted';
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
proto.vega.events.v1.ProtocolUpgradeDataNodeReady = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.ProtocolUpgradeDataNodeReady, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.ProtocolUpgradeDataNodeReady.displayName = 'proto.vega.events.v1.ProtocolUpgradeDataNodeReady';
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
proto.vega.events.v1.CoreSnapshotData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.events.v1.CoreSnapshotData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.CoreSnapshotData.displayName = 'proto.vega.events.v1.CoreSnapshotData';
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
proto.vega.events.v1.BusEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.vega.events.v1.BusEvent.oneofGroups_);
};
goog.inherits(proto.vega.events.v1.BusEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.events.v1.BusEvent.displayName = 'proto.vega.events.v1.BusEvent';
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
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ERC20MultiSigSignerAdded.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerAdded} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.toObject = function(includeInstance, msg) {
  var f, obj = {
    signatureId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validatorId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    newSigner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    submitter: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 6, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ERC20MultiSigSignerAdded;
  return proto.vega.events.v1.ERC20MultiSigSignerAdded.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerAdded} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatureId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewSigner(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmitter(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 7:
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
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ERC20MultiSigSignerAdded.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerAdded} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatureId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidatorId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNewSigner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSubmitter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string signature_id = 1;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getSignatureId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setSignatureId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string validator_id = 2;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getValidatorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setValidatorId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string new_signer = 4;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getNewSigner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setNewSigner = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string submitter = 5;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getSubmitter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setSubmitter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string nonce = 6;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string epoch_seq = 7;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerAdded} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerAdded.prototype.setEpochSeq = function(value) {
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
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.toObject = function(includeInstance, msg) {
  var f, obj = {
    signatureId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    submitter: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter;
  return proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignatureId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmitter(value);
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
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatureId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubmitter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string signature_id = 1;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.prototype.getSignatureId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.prototype.setSignatureId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string submitter = 2;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.prototype.getSubmitter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.prototype.setSubmitter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.repeatedFields_ = [1];



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
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ERC20MultiSigSignerRemoved.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.toObject = function(includeInstance, msg) {
  var f, obj = {
    signatureSubmittersList: jspb.Message.toObjectList(msg.getSignatureSubmittersList(),
    proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.toObject, includeInstance),
    validatorId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    oldSigner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 5, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ERC20MultiSigSignerRemoved;
  return proto.vega.events.v1.ERC20MultiSigSignerRemoved.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter;
      reader.readMessage(value,proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.deserializeBinaryFromReader);
      msg.addSignatureSubmitters(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldSigner(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 6:
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
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ERC20MultiSigSignerRemoved.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatureSubmittersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter.serializeBinaryToWriter
    );
  }
  f = message.getValidatorId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOldSigner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * repeated ERC20MultiSigSignerRemovedSubmitter signature_submitters = 1;
 * @return {!Array<!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter>}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.getSignatureSubmittersList = function() {
  return /** @type{!Array<!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter, 1));
};


/**
 * @param {!Array<!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter>} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
*/
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.setSignatureSubmittersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.addSignatureSubmitters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.events.v1.ERC20MultiSigSignerRemovedSubmitter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.clearSignatureSubmittersList = function() {
  return this.setSignatureSubmittersList([]);
};


/**
 * optional string validator_id = 2;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.getValidatorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.setValidatorId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string old_signer = 4;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.getOldSigner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.setOldSigner = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string nonce = 5;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string epoch_seq = 6;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerRemoved} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerRemoved.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.events.v1.Transfer.oneofGroups_ = [[101,102]];

/**
 * @enum {number}
 */
proto.vega.events.v1.Transfer.KindCase = {
  KIND_NOT_SET: 0,
  ONE_OFF: 101,
  RECURRING: 102
};

/**
 * @return {proto.vega.events.v1.Transfer.KindCase}
 */
proto.vega.events.v1.Transfer.prototype.getKindCase = function() {
  return /** @type {proto.vega.events.v1.Transfer.KindCase} */(jspb.Message.computeOneofCase(this, proto.vega.events.v1.Transfer.oneofGroups_[0]));
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
proto.vega.events.v1.Transfer.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.Transfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.Transfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.Transfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromAccountType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    to: jspb.Message.getFieldWithDefault(msg, 4, ""),
    toAccountType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 6, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 7, ""),
    reference: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 11, ""),
    oneOff: (f = msg.getOneOff()) && proto.vega.events.v1.OneOffTransfer.toObject(includeInstance, f),
    recurring: (f = msg.getRecurring()) && proto.vega.events.v1.RecurringTransfer.toObject(includeInstance, f)
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
 * @return {!proto.vega.events.v1.Transfer}
 */
proto.vega.events.v1.Transfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.Transfer;
  return proto.vega.events.v1.Transfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.Transfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.Transfer}
 */
proto.vega.events.v1.Transfer.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setFromAccountType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 5:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setToAccountType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 9:
      var value = /** @type {!proto.vega.events.v1.Transfer.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 101:
      var value = new proto.vega.events.v1.OneOffTransfer;
      reader.readMessage(value,proto.vega.events.v1.OneOffTransfer.deserializeBinaryFromReader);
      msg.setOneOff(value);
      break;
    case 102:
      var value = new proto.vega.events.v1.RecurringTransfer;
      reader.readMessage(value,proto.vega.events.v1.RecurringTransfer.deserializeBinaryFromReader);
      msg.setRecurring(value);
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
proto.vega.events.v1.Transfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.Transfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.Transfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.Transfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromAccountType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getToAccountType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOneOff();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.vega.events.v1.OneOffTransfer.serializeBinaryToWriter
    );
  }
  f = message.getRecurring();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.vega.events.v1.RecurringTransfer.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.events.v1.Transfer.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_PENDING: 1,
  STATUS_DONE: 2,
  STATUS_REJECTED: 3,
  STATUS_STOPPED: 4,
  STATUS_CANCELLED: 5
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional vega.AccountType from_account_type = 3;
 * @return {!proto.vega.AccountType}
 */
proto.vega.events.v1.Transfer.prototype.getFromAccountType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setFromAccountType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string to = 4;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional vega.AccountType to_account_type = 5;
 * @return {!proto.vega.AccountType}
 */
proto.vega.events.v1.Transfer.prototype.getToAccountType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setToAccountType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string asset = 6;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string amount = 7;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string reference = 8;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Status status = 9;
 * @return {!proto.vega.events.v1.Transfer.Status}
 */
proto.vega.events.v1.Transfer.prototype.getStatus = function() {
  return /** @type {!proto.vega.events.v1.Transfer.Status} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.vega.events.v1.Transfer.Status} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 timestamp = 10;
 * @return {number}
 */
proto.vega.events.v1.Transfer.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string reason = 11;
 * @return {string}
 */
proto.vega.events.v1.Transfer.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.clearReason = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.Transfer.prototype.hasReason = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OneOffTransfer one_off = 101;
 * @return {?proto.vega.events.v1.OneOffTransfer}
 */
proto.vega.events.v1.Transfer.prototype.getOneOff = function() {
  return /** @type{?proto.vega.events.v1.OneOffTransfer} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.OneOffTransfer, 101));
};


/**
 * @param {?proto.vega.events.v1.OneOffTransfer|undefined} value
 * @return {!proto.vega.events.v1.Transfer} returns this
*/
proto.vega.events.v1.Transfer.prototype.setOneOff = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.vega.events.v1.Transfer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.clearOneOff = function() {
  return this.setOneOff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.Transfer.prototype.hasOneOff = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional RecurringTransfer recurring = 102;
 * @return {?proto.vega.events.v1.RecurringTransfer}
 */
proto.vega.events.v1.Transfer.prototype.getRecurring = function() {
  return /** @type{?proto.vega.events.v1.RecurringTransfer} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.RecurringTransfer, 102));
};


/**
 * @param {?proto.vega.events.v1.RecurringTransfer|undefined} value
 * @return {!proto.vega.events.v1.Transfer} returns this
*/
proto.vega.events.v1.Transfer.prototype.setRecurring = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.vega.events.v1.Transfer.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.Transfer} returns this
 */
proto.vega.events.v1.Transfer.prototype.clearRecurring = function() {
  return this.setRecurring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.Transfer.prototype.hasRecurring = function() {
  return jspb.Message.getField(this, 102) != null;
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
proto.vega.events.v1.OneOffTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.OneOffTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.OneOffTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.OneOffTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    deliverOn: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.events.v1.OneOffTransfer}
 */
proto.vega.events.v1.OneOffTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.OneOffTransfer;
  return proto.vega.events.v1.OneOffTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.OneOffTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.OneOffTransfer}
 */
proto.vega.events.v1.OneOffTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliverOn(value);
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
proto.vega.events.v1.OneOffTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.OneOffTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.OneOffTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.OneOffTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeliverOn();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 deliver_on = 1;
 * @return {number}
 */
proto.vega.events.v1.OneOffTransfer.prototype.getDeliverOn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.OneOffTransfer} returns this
 */
proto.vega.events.v1.OneOffTransfer.prototype.setDeliverOn = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.vega.events.v1.RecurringTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.RecurringTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.RecurringTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.RecurringTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    startEpoch: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endEpoch: jspb.Message.getFieldWithDefault(msg, 2, 0),
    factor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dispatchStrategy: (f = msg.getDispatchStrategy()) && vega_vega_pb.DispatchStrategy.toObject(includeInstance, f)
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
 * @return {!proto.vega.events.v1.RecurringTransfer}
 */
proto.vega.events.v1.RecurringTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.RecurringTransfer;
  return proto.vega.events.v1.RecurringTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.RecurringTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.RecurringTransfer}
 */
proto.vega.events.v1.RecurringTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartEpoch(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndEpoch(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFactor(value);
      break;
    case 4:
      var value = new vega_vega_pb.DispatchStrategy;
      reader.readMessage(value,vega_vega_pb.DispatchStrategy.deserializeBinaryFromReader);
      msg.setDispatchStrategy(value);
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
proto.vega.events.v1.RecurringTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.RecurringTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.RecurringTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.RecurringTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartEpoch();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFactor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDispatchStrategy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      vega_vega_pb.DispatchStrategy.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 start_epoch = 1;
 * @return {number}
 */
proto.vega.events.v1.RecurringTransfer.prototype.getStartEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.RecurringTransfer} returns this
 */
proto.vega.events.v1.RecurringTransfer.prototype.setStartEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 end_epoch = 2;
 * @return {number}
 */
proto.vega.events.v1.RecurringTransfer.prototype.getEndEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.RecurringTransfer} returns this
 */
proto.vega.events.v1.RecurringTransfer.prototype.setEndEpoch = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.events.v1.RecurringTransfer} returns this
 */
proto.vega.events.v1.RecurringTransfer.prototype.clearEndEpoch = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.RecurringTransfer.prototype.hasEndEpoch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string factor = 3;
 * @return {string}
 */
proto.vega.events.v1.RecurringTransfer.prototype.getFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RecurringTransfer} returns this
 */
proto.vega.events.v1.RecurringTransfer.prototype.setFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional vega.DispatchStrategy dispatch_strategy = 4;
 * @return {?proto.vega.DispatchStrategy}
 */
proto.vega.events.v1.RecurringTransfer.prototype.getDispatchStrategy = function() {
  return /** @type{?proto.vega.DispatchStrategy} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.DispatchStrategy, 4));
};


/**
 * @param {?proto.vega.DispatchStrategy|undefined} value
 * @return {!proto.vega.events.v1.RecurringTransfer} returns this
*/
proto.vega.events.v1.RecurringTransfer.prototype.setDispatchStrategy = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.RecurringTransfer} returns this
 */
proto.vega.events.v1.RecurringTransfer.prototype.clearDispatchStrategy = function() {
  return this.setDispatchStrategy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.RecurringTransfer.prototype.hasDispatchStrategy = function() {
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
proto.vega.events.v1.StakeLinking.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.StakeLinking.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.StakeLinking} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.StakeLinking.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ts: jspb.Message.getFieldWithDefault(msg, 3, 0),
    party: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    finalizedAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    txHash: jspb.Message.getFieldWithDefault(msg, 8, ""),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 9, 0),
    blockTime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    logIndex: jspb.Message.getFieldWithDefault(msg, 11, 0),
    ethereumAddress: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.vega.events.v1.StakeLinking}
 */
proto.vega.events.v1.StakeLinking.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.StakeLinking;
  return proto.vega.events.v1.StakeLinking.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.StakeLinking} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.StakeLinking}
 */
proto.vega.events.v1.StakeLinking.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.vega.events.v1.StakeLinking.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParty(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {!proto.vega.events.v1.StakeLinking.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFinalizedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockTime(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogIndex(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthereumAddress(value);
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
proto.vega.events.v1.StakeLinking.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.StakeLinking.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.StakeLinking} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.StakeLinking.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getTs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParty();
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
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getFinalizedAt();
  if (f !== 0) {
    writer.writeInt64(
      7,
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
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getBlockTime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getLogIndex();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getEthereumAddress();
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
proto.vega.events.v1.StakeLinking.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_LINK: 1,
  TYPE_UNLINK: 2
};

/**
 * @enum {number}
 */
proto.vega.events.v1.StakeLinking.Status = {
  STATUS_UNSPECIFIED: 0,
  STATUS_PENDING: 1,
  STATUS_ACCEPTED: 2,
  STATUS_REJECTED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.StakeLinking.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.vega.events.v1.StakeLinking.Type}
 */
proto.vega.events.v1.StakeLinking.prototype.getType = function() {
  return /** @type {!proto.vega.events.v1.StakeLinking.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.events.v1.StakeLinking.Type} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 ts = 3;
 * @return {number}
 */
proto.vega.events.v1.StakeLinking.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setTs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string party = 4;
 * @return {string}
 */
proto.vega.events.v1.StakeLinking.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amount = 5;
 * @return {string}
 */
proto.vega.events.v1.StakeLinking.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Status status = 6;
 * @return {!proto.vega.events.v1.StakeLinking.Status}
 */
proto.vega.events.v1.StakeLinking.prototype.getStatus = function() {
  return /** @type {!proto.vega.events.v1.StakeLinking.Status} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.vega.events.v1.StakeLinking.Status} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int64 finalized_at = 7;
 * @return {number}
 */
proto.vega.events.v1.StakeLinking.prototype.getFinalizedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setFinalizedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string tx_hash = 8;
 * @return {string}
 */
proto.vega.events.v1.StakeLinking.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 block_height = 9;
 * @return {number}
 */
proto.vega.events.v1.StakeLinking.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 block_time = 10;
 * @return {number}
 */
proto.vega.events.v1.StakeLinking.prototype.getBlockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setBlockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 log_index = 11;
 * @return {number}
 */
proto.vega.events.v1.StakeLinking.prototype.getLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setLogIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string ethereum_address = 12;
 * @return {string}
 */
proto.vega.events.v1.StakeLinking.prototype.getEthereumAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StakeLinking} returns this
 */
proto.vega.events.v1.StakeLinking.prototype.setEthereumAddress = function(value) {
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
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ERC20MultiSigSignerEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    signer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 4, ""),
    blockTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    txHash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    logIndex: jspb.Message.getFieldWithDefault(msg, 7, 0),
    blockNumber: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ERC20MultiSigSignerEvent;
  return proto.vega.events.v1.ERC20MultiSigSignerEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.vega.events.v1.ERC20MultiSigSignerEvent.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSigner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogIndex(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNumber(value);
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
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ERC20MultiSigSignerEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getSigner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBlockTime();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getLogIndex();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_ADDED: 1,
  TYPE_REMOVED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent.Type}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getType = function() {
  return /** @type {!proto.vega.events.v1.ERC20MultiSigSignerEvent.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerEvent.Type} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string signer = 3;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getSigner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setSigner = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nonce = 4;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 block_time = 5;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getBlockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setBlockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string tx_hash = 6;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 log_index = 7;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setLogIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 block_number = 8;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigSignerEvent.prototype.setBlockNumber = function(value) {
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
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newThreshold: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    txHash: jspb.Message.getFieldWithDefault(msg, 5, ""),
    logIndex: jspb.Message.getFieldWithDefault(msg, 6, 0),
    blockNumber: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ERC20MultiSigThresholdSetEvent;
  return proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewThreshold(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogIndex(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNumber(value);
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
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewThreshold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTxHash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLogIndex();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 new_threshold = 2;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getNewThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setNewThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string nonce = 3;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 block_time = 4;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getBlockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setBlockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string tx_hash = 5;
 * @return {string}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 log_index = 6;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setLogIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 block_number = 7;
 * @return {number}
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} returns this
 */
proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.prototype.setBlockNumber = function(value) {
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
proto.vega.events.v1.CheckpointEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.CheckpointEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.CheckpointEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.CheckpointEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.vega.events.v1.CheckpointEvent}
 */
proto.vega.events.v1.CheckpointEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.CheckpointEvent;
  return proto.vega.events.v1.CheckpointEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.CheckpointEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.CheckpointEvent}
 */
proto.vega.events.v1.CheckpointEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
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
proto.vega.events.v1.CheckpointEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.CheckpointEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.CheckpointEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.CheckpointEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.vega.events.v1.CheckpointEvent.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.CheckpointEvent} returns this
 */
proto.vega.events.v1.CheckpointEvent.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string block_hash = 2;
 * @return {string}
 */
proto.vega.events.v1.CheckpointEvent.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.CheckpointEvent} returns this
 */
proto.vega.events.v1.CheckpointEvent.prototype.setBlockHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 block_height = 3;
 * @return {number}
 */
proto.vega.events.v1.CheckpointEvent.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.CheckpointEvent} returns this
 */
proto.vega.events.v1.CheckpointEvent.prototype.setBlockHeight = function(value) {
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
proto.vega.events.v1.StreamStartEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.StreamStartEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.StreamStartEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.StreamStartEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.vega.events.v1.StreamStartEvent}
 */
proto.vega.events.v1.StreamStartEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.StreamStartEvent;
  return proto.vega.events.v1.StreamStartEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.StreamStartEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.StreamStartEvent}
 */
proto.vega.events.v1.StreamStartEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
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
proto.vega.events.v1.StreamStartEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.StreamStartEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.StreamStartEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.StreamStartEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chain_id = 1;
 * @return {string}
 */
proto.vega.events.v1.StreamStartEvent.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StreamStartEvent} returns this
 */
proto.vega.events.v1.StreamStartEvent.prototype.setChainId = function(value) {
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
proto.vega.events.v1.RewardPayoutEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.RewardPayoutEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.RewardPayoutEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.RewardPayoutEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 2, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, ""),
    percentOfTotalReward: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rewardType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    market: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.vega.events.v1.RewardPayoutEvent}
 */
proto.vega.events.v1.RewardPayoutEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.RewardPayoutEvent;
  return proto.vega.events.v1.RewardPayoutEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.RewardPayoutEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.RewardPayoutEvent}
 */
proto.vega.events.v1.RewardPayoutEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEpochSeq(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPercentOfTotalReward(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
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
proto.vega.events.v1.RewardPayoutEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.RewardPayoutEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.RewardPayoutEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.RewardPayoutEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getPercentOfTotalReward();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getRewardType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string epoch_seq = 2;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string amount = 4;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string percent_of_total_reward = 5;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getPercentOfTotalReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setPercentOfTotalReward = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string reward_type = 7;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getRewardType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setRewardType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string market = 8;
 * @return {string}
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.RewardPayoutEvent} returns this
 */
proto.vega.events.v1.RewardPayoutEvent.prototype.setMarket = function(value) {
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
proto.vega.events.v1.ValidatorScoreEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ValidatorScoreEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ValidatorScoreEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ValidatorScoreEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 2, ""),
    validatorScore: jspb.Message.getFieldWithDefault(msg, 3, ""),
    normalisedScore: jspb.Message.getFieldWithDefault(msg, 4, ""),
    validatorPerformance: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rawValidatorScore: jspb.Message.getFieldWithDefault(msg, 6, ""),
    validatorStatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
    multisigScore: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.vega.events.v1.ValidatorScoreEvent}
 */
proto.vega.events.v1.ValidatorScoreEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ValidatorScoreEvent;
  return proto.vega.events.v1.ValidatorScoreEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ValidatorScoreEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ValidatorScoreEvent}
 */
proto.vega.events.v1.ValidatorScoreEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpochSeq(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorScore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNormalisedScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorPerformance(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRawValidatorScore(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMultisigScore(value);
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
proto.vega.events.v1.ValidatorScoreEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ValidatorScoreEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ValidatorScoreEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ValidatorScoreEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValidatorScore();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNormalisedScore();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getValidatorPerformance();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRawValidatorScore();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getValidatorStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMultisigScore();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string epoch_seq = 2;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string validator_score = 3;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getValidatorScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setValidatorScore = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string normalised_score = 4;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getNormalisedScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setNormalisedScore = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string validator_performance = 5;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getValidatorPerformance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setValidatorPerformance = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string raw_validator_score = 6;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getRawValidatorScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setRawValidatorScore = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string validator_status = 7;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getValidatorStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setValidatorStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string multisig_score = 8;
 * @return {string}
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.getMultisigScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorScoreEvent} returns this
 */
proto.vega.events.v1.ValidatorScoreEvent.prototype.setMultisigScore = function(value) {
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
proto.vega.events.v1.DelegationBalanceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.DelegationBalanceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.DelegationBalanceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.DelegationBalanceEvent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.vega.events.v1.DelegationBalanceEvent}
 */
proto.vega.events.v1.DelegationBalanceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.DelegationBalanceEvent;
  return proto.vega.events.v1.DelegationBalanceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.DelegationBalanceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.DelegationBalanceEvent}
 */
proto.vega.events.v1.DelegationBalanceEvent.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.events.v1.DelegationBalanceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.DelegationBalanceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.DelegationBalanceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.DelegationBalanceEvent.serializeBinaryToWriter = function(message, writer) {
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
proto.vega.events.v1.DelegationBalanceEvent.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.DelegationBalanceEvent} returns this
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.DelegationBalanceEvent} returns this
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.DelegationBalanceEvent} returns this
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string epoch_seq = 4;
 * @return {string}
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.DelegationBalanceEvent} returns this
 */
proto.vega.events.v1.DelegationBalanceEvent.prototype.setEpochSeq = function(value) {
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
proto.vega.events.v1.MarketEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.MarketEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.MarketEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.MarketEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.events.v1.MarketEvent}
 */
proto.vega.events.v1.MarketEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.MarketEvent;
  return proto.vega.events.v1.MarketEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.MarketEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.MarketEvent}
 */
proto.vega.events.v1.MarketEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPayload(value);
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
proto.vega.events.v1.MarketEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.MarketEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.MarketEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.MarketEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.MarketEvent.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.MarketEvent} returns this
 */
proto.vega.events.v1.MarketEvent.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payload = 2;
 * @return {string}
 */
proto.vega.events.v1.MarketEvent.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.MarketEvent} returns this
 */
proto.vega.events.v1.MarketEvent.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.events.v1.TransactionResult.oneofGroups_ = [[101,102,103,104,105,106,107,108,109,111,112,113,114,115,116,117,118,119,120,121],[1001,1002]];

/**
 * @enum {number}
 */
proto.vega.events.v1.TransactionResult.TransactionCase = {
  TRANSACTION_NOT_SET: 0,
  ORDER_SUBMISSION: 101,
  ORDER_AMENDMENT: 102,
  ORDER_CANCELLATION: 103,
  PROPOSAL: 104,
  VOTE_SUBMISSION: 105,
  LIQUIDITY_PROVISION_SUBMISSION: 106,
  WITHDRAW_SUBMISSION: 107,
  DELEGATE_SUBMISSION: 108,
  UNDELEGATE_SUBMISSION: 109,
  LIQUIDITY_PROVISION_CANCELLATION: 111,
  LIQUIDITY_PROVISION_AMENDMENT: 112,
  TRANSFER: 113,
  CANCEL_TRANSFER: 114,
  ANNOUNCE_NODE: 115,
  ORACLE_DATA_SUBMISSION: 116,
  PROTOCOL_UPGRADE_PROPOSAL: 117,
  ISSUE_SIGNATURES: 118,
  BATCH_MARKET_INSTRUCTIONS: 119,
  KEY_ROTATE_SUBMISSION: 120,
  ETHEREUM_KEY_ROTATE_SUBMISSION: 121
};

/**
 * @return {proto.vega.events.v1.TransactionResult.TransactionCase}
 */
proto.vega.events.v1.TransactionResult.prototype.getTransactionCase = function() {
  return /** @type {proto.vega.events.v1.TransactionResult.TransactionCase} */(jspb.Message.computeOneofCase(this, proto.vega.events.v1.TransactionResult.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.vega.events.v1.TransactionResult.ExtraCase = {
  EXTRA_NOT_SET: 0,
  SUCCESS: 1001,
  FAILURE: 1002
};

/**
 * @return {proto.vega.events.v1.TransactionResult.ExtraCase}
 */
proto.vega.events.v1.TransactionResult.prototype.getExtraCase = function() {
  return /** @type {proto.vega.events.v1.TransactionResult.ExtraCase} */(jspb.Message.computeOneofCase(this, proto.vega.events.v1.TransactionResult.oneofGroups_[1]));
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
proto.vega.events.v1.TransactionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.TransactionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.TransactionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TransactionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    hash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderSubmission: (f = msg.getOrderSubmission()) && vega_commands_v1_commands_pb.OrderSubmission.toObject(includeInstance, f),
    orderAmendment: (f = msg.getOrderAmendment()) && vega_commands_v1_commands_pb.OrderAmendment.toObject(includeInstance, f),
    orderCancellation: (f = msg.getOrderCancellation()) && vega_commands_v1_commands_pb.OrderCancellation.toObject(includeInstance, f),
    proposal: (f = msg.getProposal()) && vega_commands_v1_commands_pb.ProposalSubmission.toObject(includeInstance, f),
    voteSubmission: (f = msg.getVoteSubmission()) && vega_commands_v1_commands_pb.VoteSubmission.toObject(includeInstance, f),
    liquidityProvisionSubmission: (f = msg.getLiquidityProvisionSubmission()) && vega_commands_v1_commands_pb.LiquidityProvisionSubmission.toObject(includeInstance, f),
    withdrawSubmission: (f = msg.getWithdrawSubmission()) && vega_commands_v1_commands_pb.WithdrawSubmission.toObject(includeInstance, f),
    delegateSubmission: (f = msg.getDelegateSubmission()) && vega_commands_v1_commands_pb.DelegateSubmission.toObject(includeInstance, f),
    undelegateSubmission: (f = msg.getUndelegateSubmission()) && vega_commands_v1_commands_pb.UndelegateSubmission.toObject(includeInstance, f),
    liquidityProvisionCancellation: (f = msg.getLiquidityProvisionCancellation()) && vega_commands_v1_commands_pb.LiquidityProvisionCancellation.toObject(includeInstance, f),
    liquidityProvisionAmendment: (f = msg.getLiquidityProvisionAmendment()) && vega_commands_v1_commands_pb.LiquidityProvisionAmendment.toObject(includeInstance, f),
    transfer: (f = msg.getTransfer()) && vega_commands_v1_commands_pb.Transfer.toObject(includeInstance, f),
    cancelTransfer: (f = msg.getCancelTransfer()) && vega_commands_v1_commands_pb.CancelTransfer.toObject(includeInstance, f),
    announceNode: (f = msg.getAnnounceNode()) && vega_commands_v1_validator_commands_pb.AnnounceNode.toObject(includeInstance, f),
    oracleDataSubmission: (f = msg.getOracleDataSubmission()) && vega_commands_v1_data_pb.OracleDataSubmission.toObject(includeInstance, f),
    protocolUpgradeProposal: (f = msg.getProtocolUpgradeProposal()) && vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal.toObject(includeInstance, f),
    issueSignatures: (f = msg.getIssueSignatures()) && vega_commands_v1_validator_commands_pb.IssueSignatures.toObject(includeInstance, f),
    batchMarketInstructions: (f = msg.getBatchMarketInstructions()) && vega_commands_v1_commands_pb.BatchMarketInstructions.toObject(includeInstance, f),
    keyRotateSubmission: (f = msg.getKeyRotateSubmission()) && vega_commands_v1_validator_commands_pb.KeyRotateSubmission.toObject(includeInstance, f),
    ethereumKeyRotateSubmission: (f = msg.getEthereumKeyRotateSubmission()) && vega_commands_v1_validator_commands_pb.EthereumKeyRotateSubmission.toObject(includeInstance, f),
    success: (f = msg.getSuccess()) && proto.vega.events.v1.TransactionResult.SuccessDetails.toObject(includeInstance, f),
    failure: (f = msg.getFailure()) && proto.vega.events.v1.TransactionResult.FailureDetails.toObject(includeInstance, f)
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
 * @return {!proto.vega.events.v1.TransactionResult}
 */
proto.vega.events.v1.TransactionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.TransactionResult;
  return proto.vega.events.v1.TransactionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.TransactionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.TransactionResult}
 */
proto.vega.events.v1.TransactionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 101:
      var value = new vega_commands_v1_commands_pb.OrderSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.OrderSubmission.deserializeBinaryFromReader);
      msg.setOrderSubmission(value);
      break;
    case 102:
      var value = new vega_commands_v1_commands_pb.OrderAmendment;
      reader.readMessage(value,vega_commands_v1_commands_pb.OrderAmendment.deserializeBinaryFromReader);
      msg.setOrderAmendment(value);
      break;
    case 103:
      var value = new vega_commands_v1_commands_pb.OrderCancellation;
      reader.readMessage(value,vega_commands_v1_commands_pb.OrderCancellation.deserializeBinaryFromReader);
      msg.setOrderCancellation(value);
      break;
    case 104:
      var value = new vega_commands_v1_commands_pb.ProposalSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.ProposalSubmission.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 105:
      var value = new vega_commands_v1_commands_pb.VoteSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.VoteSubmission.deserializeBinaryFromReader);
      msg.setVoteSubmission(value);
      break;
    case 106:
      var value = new vega_commands_v1_commands_pb.LiquidityProvisionSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.LiquidityProvisionSubmission.deserializeBinaryFromReader);
      msg.setLiquidityProvisionSubmission(value);
      break;
    case 107:
      var value = new vega_commands_v1_commands_pb.WithdrawSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.WithdrawSubmission.deserializeBinaryFromReader);
      msg.setWithdrawSubmission(value);
      break;
    case 108:
      var value = new vega_commands_v1_commands_pb.DelegateSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.DelegateSubmission.deserializeBinaryFromReader);
      msg.setDelegateSubmission(value);
      break;
    case 109:
      var value = new vega_commands_v1_commands_pb.UndelegateSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.UndelegateSubmission.deserializeBinaryFromReader);
      msg.setUndelegateSubmission(value);
      break;
    case 111:
      var value = new vega_commands_v1_commands_pb.LiquidityProvisionCancellation;
      reader.readMessage(value,vega_commands_v1_commands_pb.LiquidityProvisionCancellation.deserializeBinaryFromReader);
      msg.setLiquidityProvisionCancellation(value);
      break;
    case 112:
      var value = new vega_commands_v1_commands_pb.LiquidityProvisionAmendment;
      reader.readMessage(value,vega_commands_v1_commands_pb.LiquidityProvisionAmendment.deserializeBinaryFromReader);
      msg.setLiquidityProvisionAmendment(value);
      break;
    case 113:
      var value = new vega_commands_v1_commands_pb.Transfer;
      reader.readMessage(value,vega_commands_v1_commands_pb.Transfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 114:
      var value = new vega_commands_v1_commands_pb.CancelTransfer;
      reader.readMessage(value,vega_commands_v1_commands_pb.CancelTransfer.deserializeBinaryFromReader);
      msg.setCancelTransfer(value);
      break;
    case 115:
      var value = new vega_commands_v1_validator_commands_pb.AnnounceNode;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.AnnounceNode.deserializeBinaryFromReader);
      msg.setAnnounceNode(value);
      break;
    case 116:
      var value = new vega_commands_v1_data_pb.OracleDataSubmission;
      reader.readMessage(value,vega_commands_v1_data_pb.OracleDataSubmission.deserializeBinaryFromReader);
      msg.setOracleDataSubmission(value);
      break;
    case 117:
      var value = new vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal.deserializeBinaryFromReader);
      msg.setProtocolUpgradeProposal(value);
      break;
    case 118:
      var value = new vega_commands_v1_validator_commands_pb.IssueSignatures;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.IssueSignatures.deserializeBinaryFromReader);
      msg.setIssueSignatures(value);
      break;
    case 119:
      var value = new vega_commands_v1_commands_pb.BatchMarketInstructions;
      reader.readMessage(value,vega_commands_v1_commands_pb.BatchMarketInstructions.deserializeBinaryFromReader);
      msg.setBatchMarketInstructions(value);
      break;
    case 120:
      var value = new vega_commands_v1_validator_commands_pb.KeyRotateSubmission;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.KeyRotateSubmission.deserializeBinaryFromReader);
      msg.setKeyRotateSubmission(value);
      break;
    case 121:
      var value = new vega_commands_v1_validator_commands_pb.EthereumKeyRotateSubmission;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.EthereumKeyRotateSubmission.deserializeBinaryFromReader);
      msg.setEthereumKeyRotateSubmission(value);
      break;
    case 1001:
      var value = new proto.vega.events.v1.TransactionResult.SuccessDetails;
      reader.readMessage(value,proto.vega.events.v1.TransactionResult.SuccessDetails.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 1002:
      var value = new proto.vega.events.v1.TransactionResult.FailureDetails;
      reader.readMessage(value,proto.vega.events.v1.TransactionResult.FailureDetails.deserializeBinaryFromReader);
      msg.setFailure(value);
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
proto.vega.events.v1.TransactionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.TransactionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.TransactionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TransactionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderSubmission();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      vega_commands_v1_commands_pb.OrderSubmission.serializeBinaryToWriter
    );
  }
  f = message.getOrderAmendment();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      vega_commands_v1_commands_pb.OrderAmendment.serializeBinaryToWriter
    );
  }
  f = message.getOrderCancellation();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      vega_commands_v1_commands_pb.OrderCancellation.serializeBinaryToWriter
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      vega_commands_v1_commands_pb.ProposalSubmission.serializeBinaryToWriter
    );
  }
  f = message.getVoteSubmission();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      vega_commands_v1_commands_pb.VoteSubmission.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionSubmission();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      vega_commands_v1_commands_pb.LiquidityProvisionSubmission.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawSubmission();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      vega_commands_v1_commands_pb.WithdrawSubmission.serializeBinaryToWriter
    );
  }
  f = message.getDelegateSubmission();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      vega_commands_v1_commands_pb.DelegateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getUndelegateSubmission();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      vega_commands_v1_commands_pb.UndelegateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionCancellation();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      vega_commands_v1_commands_pb.LiquidityProvisionCancellation.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionAmendment();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      vega_commands_v1_commands_pb.LiquidityProvisionAmendment.serializeBinaryToWriter
    );
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      113,
      f,
      vega_commands_v1_commands_pb.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getCancelTransfer();
  if (f != null) {
    writer.writeMessage(
      114,
      f,
      vega_commands_v1_commands_pb.CancelTransfer.serializeBinaryToWriter
    );
  }
  f = message.getAnnounceNode();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      vega_commands_v1_validator_commands_pb.AnnounceNode.serializeBinaryToWriter
    );
  }
  f = message.getOracleDataSubmission();
  if (f != null) {
    writer.writeMessage(
      116,
      f,
      vega_commands_v1_data_pb.OracleDataSubmission.serializeBinaryToWriter
    );
  }
  f = message.getProtocolUpgradeProposal();
  if (f != null) {
    writer.writeMessage(
      117,
      f,
      vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal.serializeBinaryToWriter
    );
  }
  f = message.getIssueSignatures();
  if (f != null) {
    writer.writeMessage(
      118,
      f,
      vega_commands_v1_validator_commands_pb.IssueSignatures.serializeBinaryToWriter
    );
  }
  f = message.getBatchMarketInstructions();
  if (f != null) {
    writer.writeMessage(
      119,
      f,
      vega_commands_v1_commands_pb.BatchMarketInstructions.serializeBinaryToWriter
    );
  }
  f = message.getKeyRotateSubmission();
  if (f != null) {
    writer.writeMessage(
      120,
      f,
      vega_commands_v1_validator_commands_pb.KeyRotateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getEthereumKeyRotateSubmission();
  if (f != null) {
    writer.writeMessage(
      121,
      f,
      vega_commands_v1_validator_commands_pb.EthereumKeyRotateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      proto.vega.events.v1.TransactionResult.SuccessDetails.serializeBinaryToWriter
    );
  }
  f = message.getFailure();
  if (f != null) {
    writer.writeMessage(
      1002,
      f,
      proto.vega.events.v1.TransactionResult.FailureDetails.serializeBinaryToWriter
    );
  }
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
proto.vega.events.v1.TransactionResult.SuccessDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.TransactionResult.SuccessDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.TransactionResult.SuccessDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TransactionResult.SuccessDetails.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.vega.events.v1.TransactionResult.SuccessDetails}
 */
proto.vega.events.v1.TransactionResult.SuccessDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.TransactionResult.SuccessDetails;
  return proto.vega.events.v1.TransactionResult.SuccessDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.TransactionResult.SuccessDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.TransactionResult.SuccessDetails}
 */
proto.vega.events.v1.TransactionResult.SuccessDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.vega.events.v1.TransactionResult.SuccessDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.TransactionResult.SuccessDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.TransactionResult.SuccessDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TransactionResult.SuccessDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.vega.events.v1.TransactionResult.FailureDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.TransactionResult.FailureDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.TransactionResult.FailureDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TransactionResult.FailureDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.vega.events.v1.TransactionResult.FailureDetails}
 */
proto.vega.events.v1.TransactionResult.FailureDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.TransactionResult.FailureDetails;
  return proto.vega.events.v1.TransactionResult.FailureDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.TransactionResult.FailureDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.TransactionResult.FailureDetails}
 */
proto.vega.events.v1.TransactionResult.FailureDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.vega.events.v1.TransactionResult.FailureDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.TransactionResult.FailureDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.TransactionResult.FailureDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TransactionResult.FailureDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.vega.events.v1.TransactionResult.FailureDetails.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TransactionResult.FailureDetails} returns this
 */
proto.vega.events.v1.TransactionResult.FailureDetails.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.vega.events.v1.TransactionResult.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool status = 2;
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.vega.events.v1.TransactionResult.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional vega.commands.v1.OrderSubmission order_submission = 101;
 * @return {?proto.vega.commands.v1.OrderSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getOrderSubmission = function() {
  return /** @type{?proto.vega.commands.v1.OrderSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.OrderSubmission, 101));
};


/**
 * @param {?proto.vega.commands.v1.OrderSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setOrderSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearOrderSubmission = function() {
  return this.setOrderSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasOrderSubmission = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional vega.commands.v1.OrderAmendment order_amendment = 102;
 * @return {?proto.vega.commands.v1.OrderAmendment}
 */
proto.vega.events.v1.TransactionResult.prototype.getOrderAmendment = function() {
  return /** @type{?proto.vega.commands.v1.OrderAmendment} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.OrderAmendment, 102));
};


/**
 * @param {?proto.vega.commands.v1.OrderAmendment|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setOrderAmendment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearOrderAmendment = function() {
  return this.setOrderAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasOrderAmendment = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional vega.commands.v1.OrderCancellation order_cancellation = 103;
 * @return {?proto.vega.commands.v1.OrderCancellation}
 */
proto.vega.events.v1.TransactionResult.prototype.getOrderCancellation = function() {
  return /** @type{?proto.vega.commands.v1.OrderCancellation} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.OrderCancellation, 103));
};


/**
 * @param {?proto.vega.commands.v1.OrderCancellation|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setOrderCancellation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearOrderCancellation = function() {
  return this.setOrderCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasOrderCancellation = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional vega.commands.v1.ProposalSubmission proposal = 104;
 * @return {?proto.vega.commands.v1.ProposalSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getProposal = function() {
  return /** @type{?proto.vega.commands.v1.ProposalSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.ProposalSubmission, 104));
};


/**
 * @param {?proto.vega.commands.v1.ProposalSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional vega.commands.v1.VoteSubmission vote_submission = 105;
 * @return {?proto.vega.commands.v1.VoteSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getVoteSubmission = function() {
  return /** @type{?proto.vega.commands.v1.VoteSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.VoteSubmission, 105));
};


/**
 * @param {?proto.vega.commands.v1.VoteSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setVoteSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearVoteSubmission = function() {
  return this.setVoteSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasVoteSubmission = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionSubmission liquidity_provision_submission = 106;
 * @return {?proto.vega.commands.v1.LiquidityProvisionSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getLiquidityProvisionSubmission = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.LiquidityProvisionSubmission, 106));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setLiquidityProvisionSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearLiquidityProvisionSubmission = function() {
  return this.setLiquidityProvisionSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasLiquidityProvisionSubmission = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional vega.commands.v1.WithdrawSubmission withdraw_submission = 107;
 * @return {?proto.vega.commands.v1.WithdrawSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getWithdrawSubmission = function() {
  return /** @type{?proto.vega.commands.v1.WithdrawSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.WithdrawSubmission, 107));
};


/**
 * @param {?proto.vega.commands.v1.WithdrawSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setWithdrawSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearWithdrawSubmission = function() {
  return this.setWithdrawSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasWithdrawSubmission = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional vega.commands.v1.DelegateSubmission delegate_submission = 108;
 * @return {?proto.vega.commands.v1.DelegateSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getDelegateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.DelegateSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.DelegateSubmission, 108));
};


/**
 * @param {?proto.vega.commands.v1.DelegateSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setDelegateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearDelegateSubmission = function() {
  return this.setDelegateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasDelegateSubmission = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional vega.commands.v1.UndelegateSubmission undelegate_submission = 109;
 * @return {?proto.vega.commands.v1.UndelegateSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getUndelegateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.UndelegateSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.UndelegateSubmission, 109));
};


/**
 * @param {?proto.vega.commands.v1.UndelegateSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setUndelegateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearUndelegateSubmission = function() {
  return this.setUndelegateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasUndelegateSubmission = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionCancellation liquidity_provision_cancellation = 111;
 * @return {?proto.vega.commands.v1.LiquidityProvisionCancellation}
 */
proto.vega.events.v1.TransactionResult.prototype.getLiquidityProvisionCancellation = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionCancellation} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.LiquidityProvisionCancellation, 111));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionCancellation|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setLiquidityProvisionCancellation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearLiquidityProvisionCancellation = function() {
  return this.setLiquidityProvisionCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasLiquidityProvisionCancellation = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionAmendment liquidity_provision_amendment = 112;
 * @return {?proto.vega.commands.v1.LiquidityProvisionAmendment}
 */
proto.vega.events.v1.TransactionResult.prototype.getLiquidityProvisionAmendment = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionAmendment} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.LiquidityProvisionAmendment, 112));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionAmendment|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setLiquidityProvisionAmendment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearLiquidityProvisionAmendment = function() {
  return this.setLiquidityProvisionAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasLiquidityProvisionAmendment = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional vega.commands.v1.Transfer transfer = 113;
 * @return {?proto.vega.commands.v1.Transfer}
 */
proto.vega.events.v1.TransactionResult.prototype.getTransfer = function() {
  return /** @type{?proto.vega.commands.v1.Transfer} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.Transfer, 113));
};


/**
 * @param {?proto.vega.commands.v1.Transfer|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 113, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional vega.commands.v1.CancelTransfer cancel_transfer = 114;
 * @return {?proto.vega.commands.v1.CancelTransfer}
 */
proto.vega.events.v1.TransactionResult.prototype.getCancelTransfer = function() {
  return /** @type{?proto.vega.commands.v1.CancelTransfer} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.CancelTransfer, 114));
};


/**
 * @param {?proto.vega.commands.v1.CancelTransfer|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setCancelTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 114, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearCancelTransfer = function() {
  return this.setCancelTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasCancelTransfer = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional vega.commands.v1.AnnounceNode announce_node = 115;
 * @return {?proto.vega.commands.v1.AnnounceNode}
 */
proto.vega.events.v1.TransactionResult.prototype.getAnnounceNode = function() {
  return /** @type{?proto.vega.commands.v1.AnnounceNode} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.AnnounceNode, 115));
};


/**
 * @param {?proto.vega.commands.v1.AnnounceNode|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setAnnounceNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearAnnounceNode = function() {
  return this.setAnnounceNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasAnnounceNode = function() {
  return jspb.Message.getField(this, 115) != null;
};


/**
 * optional vega.commands.v1.OracleDataSubmission oracle_data_submission = 116;
 * @return {?proto.vega.commands.v1.OracleDataSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getOracleDataSubmission = function() {
  return /** @type{?proto.vega.commands.v1.OracleDataSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_data_pb.OracleDataSubmission, 116));
};


/**
 * @param {?proto.vega.commands.v1.OracleDataSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setOracleDataSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 116, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearOracleDataSubmission = function() {
  return this.setOracleDataSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasOracleDataSubmission = function() {
  return jspb.Message.getField(this, 116) != null;
};


/**
 * optional vega.commands.v1.ProtocolUpgradeProposal protocol_upgrade_proposal = 117;
 * @return {?proto.vega.commands.v1.ProtocolUpgradeProposal}
 */
proto.vega.events.v1.TransactionResult.prototype.getProtocolUpgradeProposal = function() {
  return /** @type{?proto.vega.commands.v1.ProtocolUpgradeProposal} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal, 117));
};


/**
 * @param {?proto.vega.commands.v1.ProtocolUpgradeProposal|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setProtocolUpgradeProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 117, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearProtocolUpgradeProposal = function() {
  return this.setProtocolUpgradeProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasProtocolUpgradeProposal = function() {
  return jspb.Message.getField(this, 117) != null;
};


/**
 * optional vega.commands.v1.IssueSignatures issue_signatures = 118;
 * @return {?proto.vega.commands.v1.IssueSignatures}
 */
proto.vega.events.v1.TransactionResult.prototype.getIssueSignatures = function() {
  return /** @type{?proto.vega.commands.v1.IssueSignatures} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.IssueSignatures, 118));
};


/**
 * @param {?proto.vega.commands.v1.IssueSignatures|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setIssueSignatures = function(value) {
  return jspb.Message.setOneofWrapperField(this, 118, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearIssueSignatures = function() {
  return this.setIssueSignatures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasIssueSignatures = function() {
  return jspb.Message.getField(this, 118) != null;
};


/**
 * optional vega.commands.v1.BatchMarketInstructions batch_market_instructions = 119;
 * @return {?proto.vega.commands.v1.BatchMarketInstructions}
 */
proto.vega.events.v1.TransactionResult.prototype.getBatchMarketInstructions = function() {
  return /** @type{?proto.vega.commands.v1.BatchMarketInstructions} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.BatchMarketInstructions, 119));
};


/**
 * @param {?proto.vega.commands.v1.BatchMarketInstructions|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setBatchMarketInstructions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 119, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearBatchMarketInstructions = function() {
  return this.setBatchMarketInstructions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasBatchMarketInstructions = function() {
  return jspb.Message.getField(this, 119) != null;
};


/**
 * optional vega.commands.v1.KeyRotateSubmission key_rotate_submission = 120;
 * @return {?proto.vega.commands.v1.KeyRotateSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getKeyRotateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.KeyRotateSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.KeyRotateSubmission, 120));
};


/**
 * @param {?proto.vega.commands.v1.KeyRotateSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setKeyRotateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 120, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearKeyRotateSubmission = function() {
  return this.setKeyRotateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasKeyRotateSubmission = function() {
  return jspb.Message.getField(this, 120) != null;
};


/**
 * optional vega.commands.v1.EthereumKeyRotateSubmission ethereum_key_rotate_submission = 121;
 * @return {?proto.vega.commands.v1.EthereumKeyRotateSubmission}
 */
proto.vega.events.v1.TransactionResult.prototype.getEthereumKeyRotateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.EthereumKeyRotateSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.EthereumKeyRotateSubmission, 121));
};


/**
 * @param {?proto.vega.commands.v1.EthereumKeyRotateSubmission|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setEthereumKeyRotateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 121, proto.vega.events.v1.TransactionResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearEthereumKeyRotateSubmission = function() {
  return this.setEthereumKeyRotateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasEthereumKeyRotateSubmission = function() {
  return jspb.Message.getField(this, 121) != null;
};


/**
 * optional SuccessDetails success = 1001;
 * @return {?proto.vega.events.v1.TransactionResult.SuccessDetails}
 */
proto.vega.events.v1.TransactionResult.prototype.getSuccess = function() {
  return /** @type{?proto.vega.events.v1.TransactionResult.SuccessDetails} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.TransactionResult.SuccessDetails, 1001));
};


/**
 * @param {?proto.vega.events.v1.TransactionResult.SuccessDetails|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1001, proto.vega.events.v1.TransactionResult.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1001) != null;
};


/**
 * optional FailureDetails failure = 1002;
 * @return {?proto.vega.events.v1.TransactionResult.FailureDetails}
 */
proto.vega.events.v1.TransactionResult.prototype.getFailure = function() {
  return /** @type{?proto.vega.events.v1.TransactionResult.FailureDetails} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.TransactionResult.FailureDetails, 1002));
};


/**
 * @param {?proto.vega.events.v1.TransactionResult.FailureDetails|undefined} value
 * @return {!proto.vega.events.v1.TransactionResult} returns this
*/
proto.vega.events.v1.TransactionResult.prototype.setFailure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1002, proto.vega.events.v1.TransactionResult.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TransactionResult} returns this
 */
proto.vega.events.v1.TransactionResult.prototype.clearFailure = function() {
  return this.setFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TransactionResult.prototype.hasFailure = function() {
  return jspb.Message.getField(this, 1002) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.events.v1.TxErrorEvent.oneofGroups_ = [[101,102,103,104,105,106,107,108,109,111,112,113,114,115,116,117,118,119]];

/**
 * @enum {number}
 */
proto.vega.events.v1.TxErrorEvent.TransactionCase = {
  TRANSACTION_NOT_SET: 0,
  ORDER_SUBMISSION: 101,
  ORDER_AMENDMENT: 102,
  ORDER_CANCELLATION: 103,
  PROPOSAL: 104,
  VOTE_SUBMISSION: 105,
  LIQUIDITY_PROVISION_SUBMISSION: 106,
  WITHDRAW_SUBMISSION: 107,
  DELEGATE_SUBMISSION: 108,
  UNDELEGATE_SUBMISSION: 109,
  LIQUIDITY_PROVISION_CANCELLATION: 111,
  LIQUIDITY_PROVISION_AMENDMENT: 112,
  TRANSFER: 113,
  CANCEL_TRANSFER: 114,
  ANNOUNCE_NODE: 115,
  ORACLE_DATA_SUBMISSION: 116,
  PROTOCOL_UPGRADE_PROPOSAL: 117,
  ISSUE_SIGNATURES: 118,
  BATCH_MARKET_INSTRUCTIONS: 119
};

/**
 * @return {proto.vega.events.v1.TxErrorEvent.TransactionCase}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getTransactionCase = function() {
  return /** @type {proto.vega.events.v1.TxErrorEvent.TransactionCase} */(jspb.Message.computeOneofCase(this, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0]));
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
proto.vega.events.v1.TxErrorEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.TxErrorEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.TxErrorEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TxErrorEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errMsg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderSubmission: (f = msg.getOrderSubmission()) && vega_commands_v1_commands_pb.OrderSubmission.toObject(includeInstance, f),
    orderAmendment: (f = msg.getOrderAmendment()) && vega_commands_v1_commands_pb.OrderAmendment.toObject(includeInstance, f),
    orderCancellation: (f = msg.getOrderCancellation()) && vega_commands_v1_commands_pb.OrderCancellation.toObject(includeInstance, f),
    proposal: (f = msg.getProposal()) && vega_commands_v1_commands_pb.ProposalSubmission.toObject(includeInstance, f),
    voteSubmission: (f = msg.getVoteSubmission()) && vega_commands_v1_commands_pb.VoteSubmission.toObject(includeInstance, f),
    liquidityProvisionSubmission: (f = msg.getLiquidityProvisionSubmission()) && vega_commands_v1_commands_pb.LiquidityProvisionSubmission.toObject(includeInstance, f),
    withdrawSubmission: (f = msg.getWithdrawSubmission()) && vega_commands_v1_commands_pb.WithdrawSubmission.toObject(includeInstance, f),
    delegateSubmission: (f = msg.getDelegateSubmission()) && vega_commands_v1_commands_pb.DelegateSubmission.toObject(includeInstance, f),
    undelegateSubmission: (f = msg.getUndelegateSubmission()) && vega_commands_v1_commands_pb.UndelegateSubmission.toObject(includeInstance, f),
    liquidityProvisionCancellation: (f = msg.getLiquidityProvisionCancellation()) && vega_commands_v1_commands_pb.LiquidityProvisionCancellation.toObject(includeInstance, f),
    liquidityProvisionAmendment: (f = msg.getLiquidityProvisionAmendment()) && vega_commands_v1_commands_pb.LiquidityProvisionAmendment.toObject(includeInstance, f),
    transfer: (f = msg.getTransfer()) && vega_commands_v1_commands_pb.Transfer.toObject(includeInstance, f),
    cancelTransfer: (f = msg.getCancelTransfer()) && vega_commands_v1_commands_pb.CancelTransfer.toObject(includeInstance, f),
    announceNode: (f = msg.getAnnounceNode()) && vega_commands_v1_validator_commands_pb.AnnounceNode.toObject(includeInstance, f),
    oracleDataSubmission: (f = msg.getOracleDataSubmission()) && vega_commands_v1_data_pb.OracleDataSubmission.toObject(includeInstance, f),
    protocolUpgradeProposal: (f = msg.getProtocolUpgradeProposal()) && vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal.toObject(includeInstance, f),
    issueSignatures: (f = msg.getIssueSignatures()) && vega_commands_v1_validator_commands_pb.IssueSignatures.toObject(includeInstance, f),
    batchMarketInstructions: (f = msg.getBatchMarketInstructions()) && vega_commands_v1_commands_pb.BatchMarketInstructions.toObject(includeInstance, f)
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
 * @return {!proto.vega.events.v1.TxErrorEvent}
 */
proto.vega.events.v1.TxErrorEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.TxErrorEvent;
  return proto.vega.events.v1.TxErrorEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.TxErrorEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.TxErrorEvent}
 */
proto.vega.events.v1.TxErrorEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrMsg(value);
      break;
    case 101:
      var value = new vega_commands_v1_commands_pb.OrderSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.OrderSubmission.deserializeBinaryFromReader);
      msg.setOrderSubmission(value);
      break;
    case 102:
      var value = new vega_commands_v1_commands_pb.OrderAmendment;
      reader.readMessage(value,vega_commands_v1_commands_pb.OrderAmendment.deserializeBinaryFromReader);
      msg.setOrderAmendment(value);
      break;
    case 103:
      var value = new vega_commands_v1_commands_pb.OrderCancellation;
      reader.readMessage(value,vega_commands_v1_commands_pb.OrderCancellation.deserializeBinaryFromReader);
      msg.setOrderCancellation(value);
      break;
    case 104:
      var value = new vega_commands_v1_commands_pb.ProposalSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.ProposalSubmission.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 105:
      var value = new vega_commands_v1_commands_pb.VoteSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.VoteSubmission.deserializeBinaryFromReader);
      msg.setVoteSubmission(value);
      break;
    case 106:
      var value = new vega_commands_v1_commands_pb.LiquidityProvisionSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.LiquidityProvisionSubmission.deserializeBinaryFromReader);
      msg.setLiquidityProvisionSubmission(value);
      break;
    case 107:
      var value = new vega_commands_v1_commands_pb.WithdrawSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.WithdrawSubmission.deserializeBinaryFromReader);
      msg.setWithdrawSubmission(value);
      break;
    case 108:
      var value = new vega_commands_v1_commands_pb.DelegateSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.DelegateSubmission.deserializeBinaryFromReader);
      msg.setDelegateSubmission(value);
      break;
    case 109:
      var value = new vega_commands_v1_commands_pb.UndelegateSubmission;
      reader.readMessage(value,vega_commands_v1_commands_pb.UndelegateSubmission.deserializeBinaryFromReader);
      msg.setUndelegateSubmission(value);
      break;
    case 111:
      var value = new vega_commands_v1_commands_pb.LiquidityProvisionCancellation;
      reader.readMessage(value,vega_commands_v1_commands_pb.LiquidityProvisionCancellation.deserializeBinaryFromReader);
      msg.setLiquidityProvisionCancellation(value);
      break;
    case 112:
      var value = new vega_commands_v1_commands_pb.LiquidityProvisionAmendment;
      reader.readMessage(value,vega_commands_v1_commands_pb.LiquidityProvisionAmendment.deserializeBinaryFromReader);
      msg.setLiquidityProvisionAmendment(value);
      break;
    case 113:
      var value = new vega_commands_v1_commands_pb.Transfer;
      reader.readMessage(value,vega_commands_v1_commands_pb.Transfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 114:
      var value = new vega_commands_v1_commands_pb.CancelTransfer;
      reader.readMessage(value,vega_commands_v1_commands_pb.CancelTransfer.deserializeBinaryFromReader);
      msg.setCancelTransfer(value);
      break;
    case 115:
      var value = new vega_commands_v1_validator_commands_pb.AnnounceNode;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.AnnounceNode.deserializeBinaryFromReader);
      msg.setAnnounceNode(value);
      break;
    case 116:
      var value = new vega_commands_v1_data_pb.OracleDataSubmission;
      reader.readMessage(value,vega_commands_v1_data_pb.OracleDataSubmission.deserializeBinaryFromReader);
      msg.setOracleDataSubmission(value);
      break;
    case 117:
      var value = new vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal.deserializeBinaryFromReader);
      msg.setProtocolUpgradeProposal(value);
      break;
    case 118:
      var value = new vega_commands_v1_validator_commands_pb.IssueSignatures;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.IssueSignatures.deserializeBinaryFromReader);
      msg.setIssueSignatures(value);
      break;
    case 119:
      var value = new vega_commands_v1_commands_pb.BatchMarketInstructions;
      reader.readMessage(value,vega_commands_v1_commands_pb.BatchMarketInstructions.deserializeBinaryFromReader);
      msg.setBatchMarketInstructions(value);
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
proto.vega.events.v1.TxErrorEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.TxErrorEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.TxErrorEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TxErrorEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderSubmission();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      vega_commands_v1_commands_pb.OrderSubmission.serializeBinaryToWriter
    );
  }
  f = message.getOrderAmendment();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      vega_commands_v1_commands_pb.OrderAmendment.serializeBinaryToWriter
    );
  }
  f = message.getOrderCancellation();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      vega_commands_v1_commands_pb.OrderCancellation.serializeBinaryToWriter
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      vega_commands_v1_commands_pb.ProposalSubmission.serializeBinaryToWriter
    );
  }
  f = message.getVoteSubmission();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      vega_commands_v1_commands_pb.VoteSubmission.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionSubmission();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      vega_commands_v1_commands_pb.LiquidityProvisionSubmission.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawSubmission();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      vega_commands_v1_commands_pb.WithdrawSubmission.serializeBinaryToWriter
    );
  }
  f = message.getDelegateSubmission();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      vega_commands_v1_commands_pb.DelegateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getUndelegateSubmission();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      vega_commands_v1_commands_pb.UndelegateSubmission.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionCancellation();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      vega_commands_v1_commands_pb.LiquidityProvisionCancellation.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisionAmendment();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      vega_commands_v1_commands_pb.LiquidityProvisionAmendment.serializeBinaryToWriter
    );
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      113,
      f,
      vega_commands_v1_commands_pb.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getCancelTransfer();
  if (f != null) {
    writer.writeMessage(
      114,
      f,
      vega_commands_v1_commands_pb.CancelTransfer.serializeBinaryToWriter
    );
  }
  f = message.getAnnounceNode();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      vega_commands_v1_validator_commands_pb.AnnounceNode.serializeBinaryToWriter
    );
  }
  f = message.getOracleDataSubmission();
  if (f != null) {
    writer.writeMessage(
      116,
      f,
      vega_commands_v1_data_pb.OracleDataSubmission.serializeBinaryToWriter
    );
  }
  f = message.getProtocolUpgradeProposal();
  if (f != null) {
    writer.writeMessage(
      117,
      f,
      vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal.serializeBinaryToWriter
    );
  }
  f = message.getIssueSignatures();
  if (f != null) {
    writer.writeMessage(
      118,
      f,
      vega_commands_v1_validator_commands_pb.IssueSignatures.serializeBinaryToWriter
    );
  }
  f = message.getBatchMarketInstructions();
  if (f != null) {
    writer.writeMessage(
      119,
      f,
      vega_commands_v1_commands_pb.BatchMarketInstructions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string err_msg = 2;
 * @return {string}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getErrMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.setErrMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional vega.commands.v1.OrderSubmission order_submission = 101;
 * @return {?proto.vega.commands.v1.OrderSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getOrderSubmission = function() {
  return /** @type{?proto.vega.commands.v1.OrderSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.OrderSubmission, 101));
};


/**
 * @param {?proto.vega.commands.v1.OrderSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setOrderSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearOrderSubmission = function() {
  return this.setOrderSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasOrderSubmission = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional vega.commands.v1.OrderAmendment order_amendment = 102;
 * @return {?proto.vega.commands.v1.OrderAmendment}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getOrderAmendment = function() {
  return /** @type{?proto.vega.commands.v1.OrderAmendment} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.OrderAmendment, 102));
};


/**
 * @param {?proto.vega.commands.v1.OrderAmendment|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setOrderAmendment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearOrderAmendment = function() {
  return this.setOrderAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasOrderAmendment = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional vega.commands.v1.OrderCancellation order_cancellation = 103;
 * @return {?proto.vega.commands.v1.OrderCancellation}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getOrderCancellation = function() {
  return /** @type{?proto.vega.commands.v1.OrderCancellation} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.OrderCancellation, 103));
};


/**
 * @param {?proto.vega.commands.v1.OrderCancellation|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setOrderCancellation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearOrderCancellation = function() {
  return this.setOrderCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasOrderCancellation = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional vega.commands.v1.ProposalSubmission proposal = 104;
 * @return {?proto.vega.commands.v1.ProposalSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getProposal = function() {
  return /** @type{?proto.vega.commands.v1.ProposalSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.ProposalSubmission, 104));
};


/**
 * @param {?proto.vega.commands.v1.ProposalSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional vega.commands.v1.VoteSubmission vote_submission = 105;
 * @return {?proto.vega.commands.v1.VoteSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getVoteSubmission = function() {
  return /** @type{?proto.vega.commands.v1.VoteSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.VoteSubmission, 105));
};


/**
 * @param {?proto.vega.commands.v1.VoteSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setVoteSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearVoteSubmission = function() {
  return this.setVoteSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasVoteSubmission = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionSubmission liquidity_provision_submission = 106;
 * @return {?proto.vega.commands.v1.LiquidityProvisionSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getLiquidityProvisionSubmission = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.LiquidityProvisionSubmission, 106));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setLiquidityProvisionSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearLiquidityProvisionSubmission = function() {
  return this.setLiquidityProvisionSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasLiquidityProvisionSubmission = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional vega.commands.v1.WithdrawSubmission withdraw_submission = 107;
 * @return {?proto.vega.commands.v1.WithdrawSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getWithdrawSubmission = function() {
  return /** @type{?proto.vega.commands.v1.WithdrawSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.WithdrawSubmission, 107));
};


/**
 * @param {?proto.vega.commands.v1.WithdrawSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setWithdrawSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearWithdrawSubmission = function() {
  return this.setWithdrawSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasWithdrawSubmission = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional vega.commands.v1.DelegateSubmission delegate_submission = 108;
 * @return {?proto.vega.commands.v1.DelegateSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getDelegateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.DelegateSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.DelegateSubmission, 108));
};


/**
 * @param {?proto.vega.commands.v1.DelegateSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setDelegateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearDelegateSubmission = function() {
  return this.setDelegateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasDelegateSubmission = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional vega.commands.v1.UndelegateSubmission undelegate_submission = 109;
 * @return {?proto.vega.commands.v1.UndelegateSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getUndelegateSubmission = function() {
  return /** @type{?proto.vega.commands.v1.UndelegateSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.UndelegateSubmission, 109));
};


/**
 * @param {?proto.vega.commands.v1.UndelegateSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setUndelegateSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearUndelegateSubmission = function() {
  return this.setUndelegateSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasUndelegateSubmission = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionCancellation liquidity_provision_cancellation = 111;
 * @return {?proto.vega.commands.v1.LiquidityProvisionCancellation}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getLiquidityProvisionCancellation = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionCancellation} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.LiquidityProvisionCancellation, 111));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionCancellation|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setLiquidityProvisionCancellation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearLiquidityProvisionCancellation = function() {
  return this.setLiquidityProvisionCancellation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasLiquidityProvisionCancellation = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional vega.commands.v1.LiquidityProvisionAmendment liquidity_provision_amendment = 112;
 * @return {?proto.vega.commands.v1.LiquidityProvisionAmendment}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getLiquidityProvisionAmendment = function() {
  return /** @type{?proto.vega.commands.v1.LiquidityProvisionAmendment} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.LiquidityProvisionAmendment, 112));
};


/**
 * @param {?proto.vega.commands.v1.LiquidityProvisionAmendment|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setLiquidityProvisionAmendment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearLiquidityProvisionAmendment = function() {
  return this.setLiquidityProvisionAmendment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasLiquidityProvisionAmendment = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional vega.commands.v1.Transfer transfer = 113;
 * @return {?proto.vega.commands.v1.Transfer}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getTransfer = function() {
  return /** @type{?proto.vega.commands.v1.Transfer} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.Transfer, 113));
};


/**
 * @param {?proto.vega.commands.v1.Transfer|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 113, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional vega.commands.v1.CancelTransfer cancel_transfer = 114;
 * @return {?proto.vega.commands.v1.CancelTransfer}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getCancelTransfer = function() {
  return /** @type{?proto.vega.commands.v1.CancelTransfer} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.CancelTransfer, 114));
};


/**
 * @param {?proto.vega.commands.v1.CancelTransfer|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setCancelTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 114, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearCancelTransfer = function() {
  return this.setCancelTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasCancelTransfer = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional vega.commands.v1.AnnounceNode announce_node = 115;
 * @return {?proto.vega.commands.v1.AnnounceNode}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getAnnounceNode = function() {
  return /** @type{?proto.vega.commands.v1.AnnounceNode} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.AnnounceNode, 115));
};


/**
 * @param {?proto.vega.commands.v1.AnnounceNode|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setAnnounceNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearAnnounceNode = function() {
  return this.setAnnounceNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasAnnounceNode = function() {
  return jspb.Message.getField(this, 115) != null;
};


/**
 * optional vega.commands.v1.OracleDataSubmission oracle_data_submission = 116;
 * @return {?proto.vega.commands.v1.OracleDataSubmission}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getOracleDataSubmission = function() {
  return /** @type{?proto.vega.commands.v1.OracleDataSubmission} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_data_pb.OracleDataSubmission, 116));
};


/**
 * @param {?proto.vega.commands.v1.OracleDataSubmission|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setOracleDataSubmission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 116, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearOracleDataSubmission = function() {
  return this.setOracleDataSubmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasOracleDataSubmission = function() {
  return jspb.Message.getField(this, 116) != null;
};


/**
 * optional vega.commands.v1.ProtocolUpgradeProposal protocol_upgrade_proposal = 117;
 * @return {?proto.vega.commands.v1.ProtocolUpgradeProposal}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getProtocolUpgradeProposal = function() {
  return /** @type{?proto.vega.commands.v1.ProtocolUpgradeProposal} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.ProtocolUpgradeProposal, 117));
};


/**
 * @param {?proto.vega.commands.v1.ProtocolUpgradeProposal|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setProtocolUpgradeProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 117, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearProtocolUpgradeProposal = function() {
  return this.setProtocolUpgradeProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasProtocolUpgradeProposal = function() {
  return jspb.Message.getField(this, 117) != null;
};


/**
 * optional vega.commands.v1.IssueSignatures issue_signatures = 118;
 * @return {?proto.vega.commands.v1.IssueSignatures}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getIssueSignatures = function() {
  return /** @type{?proto.vega.commands.v1.IssueSignatures} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.IssueSignatures, 118));
};


/**
 * @param {?proto.vega.commands.v1.IssueSignatures|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setIssueSignatures = function(value) {
  return jspb.Message.setOneofWrapperField(this, 118, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearIssueSignatures = function() {
  return this.setIssueSignatures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasIssueSignatures = function() {
  return jspb.Message.getField(this, 118) != null;
};


/**
 * optional vega.commands.v1.BatchMarketInstructions batch_market_instructions = 119;
 * @return {?proto.vega.commands.v1.BatchMarketInstructions}
 */
proto.vega.events.v1.TxErrorEvent.prototype.getBatchMarketInstructions = function() {
  return /** @type{?proto.vega.commands.v1.BatchMarketInstructions} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_commands_pb.BatchMarketInstructions, 119));
};


/**
 * @param {?proto.vega.commands.v1.BatchMarketInstructions|undefined} value
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
*/
proto.vega.events.v1.TxErrorEvent.prototype.setBatchMarketInstructions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 119, proto.vega.events.v1.TxErrorEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.TxErrorEvent} returns this
 */
proto.vega.events.v1.TxErrorEvent.prototype.clearBatchMarketInstructions = function() {
  return this.setBatchMarketInstructions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.TxErrorEvent.prototype.hasBatchMarketInstructions = function() {
  return jspb.Message.getField(this, 119) != null;
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
proto.vega.events.v1.TimeUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.TimeUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.TimeUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TimeUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.events.v1.TimeUpdate}
 */
proto.vega.events.v1.TimeUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.TimeUpdate;
  return proto.vega.events.v1.TimeUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.TimeUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.TimeUpdate}
 */
proto.vega.events.v1.TimeUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.events.v1.TimeUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.TimeUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.TimeUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TimeUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.vega.events.v1.TimeUpdate.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.TimeUpdate} returns this
 */
proto.vega.events.v1.TimeUpdate.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.vega.events.v1.EpochEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.EpochEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.EpochEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.EpochEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    seq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    action: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expireTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    endTime: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.vega.events.v1.EpochEvent}
 */
proto.vega.events.v1.EpochEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.EpochEvent;
  return proto.vega.events.v1.EpochEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.EpochEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.EpochEvent}
 */
proto.vega.events.v1.EpochEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.vega.EpochAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpireTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTime(value);
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
proto.vega.events.v1.EpochEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.EpochEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.EpochEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.EpochEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStartTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getExpireTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getEndTime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional uint64 seq = 1;
 * @return {number}
 */
proto.vega.events.v1.EpochEvent.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.EpochEvent} returns this
 */
proto.vega.events.v1.EpochEvent.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional vega.EpochAction action = 2;
 * @return {!proto.vega.EpochAction}
 */
proto.vega.events.v1.EpochEvent.prototype.getAction = function() {
  return /** @type {!proto.vega.EpochAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.EpochAction} value
 * @return {!proto.vega.events.v1.EpochEvent} returns this
 */
proto.vega.events.v1.EpochEvent.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 start_time = 3;
 * @return {number}
 */
proto.vega.events.v1.EpochEvent.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.EpochEvent} returns this
 */
proto.vega.events.v1.EpochEvent.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 expire_time = 4;
 * @return {number}
 */
proto.vega.events.v1.EpochEvent.prototype.getExpireTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.EpochEvent} returns this
 */
proto.vega.events.v1.EpochEvent.prototype.setExpireTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 end_time = 5;
 * @return {number}
 */
proto.vega.events.v1.EpochEvent.prototype.getEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.EpochEvent} returns this
 */
proto.vega.events.v1.EpochEvent.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.events.v1.LedgerMovements.repeatedFields_ = [1];



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
proto.vega.events.v1.LedgerMovements.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.LedgerMovements.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.LedgerMovements} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.LedgerMovements.toObject = function(includeInstance, msg) {
  var f, obj = {
    ledgerMovementsList: jspb.Message.toObjectList(msg.getLedgerMovementsList(),
    vega_vega_pb.LedgerMovement.toObject, includeInstance)
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
 * @return {!proto.vega.events.v1.LedgerMovements}
 */
proto.vega.events.v1.LedgerMovements.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.LedgerMovements;
  return proto.vega.events.v1.LedgerMovements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.LedgerMovements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.LedgerMovements}
 */
proto.vega.events.v1.LedgerMovements.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.LedgerMovement;
      reader.readMessage(value,vega_vega_pb.LedgerMovement.deserializeBinaryFromReader);
      msg.addLedgerMovements(value);
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
proto.vega.events.v1.LedgerMovements.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.LedgerMovements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.LedgerMovements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.LedgerMovements.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLedgerMovementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.LedgerMovement.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.LedgerMovement ledger_movements = 1;
 * @return {!Array<!proto.vega.LedgerMovement>}
 */
proto.vega.events.v1.LedgerMovements.prototype.getLedgerMovementsList = function() {
  return /** @type{!Array<!proto.vega.LedgerMovement>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.LedgerMovement, 1));
};


/**
 * @param {!Array<!proto.vega.LedgerMovement>} value
 * @return {!proto.vega.events.v1.LedgerMovements} returns this
*/
proto.vega.events.v1.LedgerMovements.prototype.setLedgerMovementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.LedgerMovement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LedgerMovement}
 */
proto.vega.events.v1.LedgerMovements.prototype.addLedgerMovements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.LedgerMovement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.events.v1.LedgerMovements} returns this
 */
proto.vega.events.v1.LedgerMovements.prototype.clearLedgerMovementsList = function() {
  return this.setLedgerMovementsList([]);
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
proto.vega.events.v1.PositionResolution.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.PositionResolution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.PositionResolution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.PositionResolution.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    distressed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    closed: jspb.Message.getFieldWithDefault(msg, 3, 0),
    markPrice: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.vega.events.v1.PositionResolution}
 */
proto.vega.events.v1.PositionResolution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.PositionResolution;
  return proto.vega.events.v1.PositionResolution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.PositionResolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.PositionResolution}
 */
proto.vega.events.v1.PositionResolution.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDistressed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClosed(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarkPrice(value);
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
proto.vega.events.v1.PositionResolution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.PositionResolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.PositionResolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.PositionResolution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDistressed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getClosed();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMarkPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.PositionResolution.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.PositionResolution} returns this
 */
proto.vega.events.v1.PositionResolution.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 distressed = 2;
 * @return {number}
 */
proto.vega.events.v1.PositionResolution.prototype.getDistressed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.PositionResolution} returns this
 */
proto.vega.events.v1.PositionResolution.prototype.setDistressed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 closed = 3;
 * @return {number}
 */
proto.vega.events.v1.PositionResolution.prototype.getClosed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.PositionResolution} returns this
 */
proto.vega.events.v1.PositionResolution.prototype.setClosed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string mark_price = 4;
 * @return {string}
 */
proto.vega.events.v1.PositionResolution.prototype.getMarkPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.PositionResolution} returns this
 */
proto.vega.events.v1.PositionResolution.prototype.setMarkPrice = function(value) {
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
proto.vega.events.v1.LossSocialization.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.LossSocialization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.LossSocialization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.LossSocialization.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.vega.events.v1.LossSocialization}
 */
proto.vega.events.v1.LossSocialization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.LossSocialization;
  return proto.vega.events.v1.LossSocialization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.LossSocialization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.LossSocialization}
 */
proto.vega.events.v1.LossSocialization.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.events.v1.LossSocialization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.LossSocialization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.LossSocialization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.LossSocialization.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.LossSocialization.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.LossSocialization} returns this
 */
proto.vega.events.v1.LossSocialization.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.events.v1.LossSocialization.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.LossSocialization} returns this
 */
proto.vega.events.v1.LossSocialization.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.events.v1.LossSocialization.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.LossSocialization} returns this
 */
proto.vega.events.v1.LossSocialization.prototype.setAmount = function(value) {
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
proto.vega.events.v1.TradeSettlement.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.TradeSettlement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.TradeSettlement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TradeSettlement.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketPrice: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.vega.events.v1.TradeSettlement}
 */
proto.vega.events.v1.TradeSettlement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.TradeSettlement;
  return proto.vega.events.v1.TradeSettlement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.TradeSettlement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.TradeSettlement}
 */
proto.vega.events.v1.TradeSettlement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketPrice(value);
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
proto.vega.events.v1.TradeSettlement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.TradeSettlement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.TradeSettlement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.TradeSettlement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
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
  f = message.getMarketPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 size = 1;
 * @return {number}
 */
proto.vega.events.v1.TradeSettlement.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.TradeSettlement} returns this
 */
proto.vega.events.v1.TradeSettlement.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.vega.events.v1.TradeSettlement.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TradeSettlement} returns this
 */
proto.vega.events.v1.TradeSettlement.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_price = 3;
 * @return {string}
 */
proto.vega.events.v1.TradeSettlement.prototype.getMarketPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.TradeSettlement} returns this
 */
proto.vega.events.v1.TradeSettlement.prototype.setMarketPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.events.v1.SettlePosition.repeatedFields_ = [4];



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
proto.vega.events.v1.SettlePosition.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.SettlePosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.SettlePosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.SettlePosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tradeSettlementsList: jspb.Message.toObjectList(msg.getTradeSettlementsList(),
    proto.vega.events.v1.TradeSettlement.toObject, includeInstance),
    positionFactor: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.vega.events.v1.SettlePosition}
 */
proto.vega.events.v1.SettlePosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.SettlePosition;
  return proto.vega.events.v1.SettlePosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.SettlePosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.SettlePosition}
 */
proto.vega.events.v1.SettlePosition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = new proto.vega.events.v1.TradeSettlement;
      reader.readMessage(value,proto.vega.events.v1.TradeSettlement.deserializeBinaryFromReader);
      msg.addTradeSettlements(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionFactor(value);
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
proto.vega.events.v1.SettlePosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.SettlePosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.SettlePosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.SettlePosition.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTradeSettlementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.events.v1.TradeSettlement.serializeBinaryToWriter
    );
  }
  f = message.getPositionFactor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.SettlePosition.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettlePosition} returns this
 */
proto.vega.events.v1.SettlePosition.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.events.v1.SettlePosition.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettlePosition} returns this
 */
proto.vega.events.v1.SettlePosition.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.vega.events.v1.SettlePosition.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettlePosition} returns this
 */
proto.vega.events.v1.SettlePosition.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated TradeSettlement trade_settlements = 4;
 * @return {!Array<!proto.vega.events.v1.TradeSettlement>}
 */
proto.vega.events.v1.SettlePosition.prototype.getTradeSettlementsList = function() {
  return /** @type{!Array<!proto.vega.events.v1.TradeSettlement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.events.v1.TradeSettlement, 4));
};


/**
 * @param {!Array<!proto.vega.events.v1.TradeSettlement>} value
 * @return {!proto.vega.events.v1.SettlePosition} returns this
*/
proto.vega.events.v1.SettlePosition.prototype.setTradeSettlementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.events.v1.TradeSettlement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.TradeSettlement}
 */
proto.vega.events.v1.SettlePosition.prototype.addTradeSettlements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.events.v1.TradeSettlement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.events.v1.SettlePosition} returns this
 */
proto.vega.events.v1.SettlePosition.prototype.clearTradeSettlementsList = function() {
  return this.setTradeSettlementsList([]);
};


/**
 * optional string position_factor = 5;
 * @return {string}
 */
proto.vega.events.v1.SettlePosition.prototype.getPositionFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettlePosition} returns this
 */
proto.vega.events.v1.SettlePosition.prototype.setPositionFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.vega.events.v1.SettleMarket.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.SettleMarket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.SettleMarket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.SettleMarket.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFieldWithDefault(msg, 2, ""),
    positionFactor: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.vega.events.v1.SettleMarket}
 */
proto.vega.events.v1.SettleMarket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.SettleMarket;
  return proto.vega.events.v1.SettleMarket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.SettleMarket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.SettleMarket}
 */
proto.vega.events.v1.SettleMarket.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPositionFactor(value);
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
proto.vega.events.v1.SettleMarket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.SettleMarket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.SettleMarket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.SettleMarket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getPositionFactor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.SettleMarket.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleMarket} returns this
 */
proto.vega.events.v1.SettleMarket.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.vega.events.v1.SettleMarket.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleMarket} returns this
 */
proto.vega.events.v1.SettleMarket.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string position_factor = 3;
 * @return {string}
 */
proto.vega.events.v1.SettleMarket.prototype.getPositionFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleMarket} returns this
 */
proto.vega.events.v1.SettleMarket.prototype.setPositionFactor = function(value) {
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
proto.vega.events.v1.PositionStateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.PositionStateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.PositionStateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.PositionStateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    potentialBuys: jspb.Message.getFieldWithDefault(msg, 4, 0),
    potentialSells: jspb.Message.getFieldWithDefault(msg, 5, 0),
    vwBuyPrice: jspb.Message.getFieldWithDefault(msg, 6, ""),
    vwSellPrice: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.vega.events.v1.PositionStateEvent}
 */
proto.vega.events.v1.PositionStateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.PositionStateEvent;
  return proto.vega.events.v1.PositionStateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.PositionStateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.PositionStateEvent}
 */
proto.vega.events.v1.PositionStateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPotentialBuys(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPotentialSells(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVwBuyPrice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVwSellPrice(value);
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
proto.vega.events.v1.PositionStateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.PositionStateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.PositionStateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.PositionStateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
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
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPotentialBuys();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPotentialSells();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getVwBuyPrice();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVwSellPrice();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 potential_buys = 4;
 * @return {number}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getPotentialBuys = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setPotentialBuys = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 potential_sells = 5;
 * @return {number}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getPotentialSells = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setPotentialSells = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string vw_buy_price = 6;
 * @return {string}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getVwBuyPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setVwBuyPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string vw_sell_price = 7;
 * @return {string}
 */
proto.vega.events.v1.PositionStateEvent.prototype.getVwSellPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.PositionStateEvent} returns this
 */
proto.vega.events.v1.PositionStateEvent.prototype.setVwSellPrice = function(value) {
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
proto.vega.events.v1.SettleDistressed.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.SettleDistressed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.SettleDistressed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.SettleDistressed.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    margin: jspb.Message.getFieldWithDefault(msg, 3, ""),
    price: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.vega.events.v1.SettleDistressed}
 */
proto.vega.events.v1.SettleDistressed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.SettleDistressed;
  return proto.vega.events.v1.SettleDistressed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.SettleDistressed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.SettleDistressed}
 */
proto.vega.events.v1.SettleDistressed.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setMargin(value);
      break;
    case 4:
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
proto.vega.events.v1.SettleDistressed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.SettleDistressed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.SettleDistressed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.SettleDistressed.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMargin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.SettleDistressed.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleDistressed} returns this
 */
proto.vega.events.v1.SettleDistressed.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.events.v1.SettleDistressed.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleDistressed} returns this
 */
proto.vega.events.v1.SettleDistressed.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string margin = 3;
 * @return {string}
 */
proto.vega.events.v1.SettleDistressed.prototype.getMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleDistressed} returns this
 */
proto.vega.events.v1.SettleDistressed.prototype.setMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string price = 4;
 * @return {string}
 */
proto.vega.events.v1.SettleDistressed.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.SettleDistressed} returns this
 */
proto.vega.events.v1.SettleDistressed.prototype.setPrice = function(value) {
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
proto.vega.events.v1.MarketTick.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.MarketTick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.MarketTick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.MarketTick.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.events.v1.MarketTick}
 */
proto.vega.events.v1.MarketTick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.MarketTick;
  return proto.vega.events.v1.MarketTick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.MarketTick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.MarketTick}
 */
proto.vega.events.v1.MarketTick.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
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
proto.vega.events.v1.MarketTick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.MarketTick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.MarketTick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.MarketTick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.MarketTick.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.MarketTick} returns this
 */
proto.vega.events.v1.MarketTick.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 time = 2;
 * @return {number}
 */
proto.vega.events.v1.MarketTick.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.MarketTick} returns this
 */
proto.vega.events.v1.MarketTick.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.vega.events.v1.AuctionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.AuctionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.AuctionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.AuctionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openingAuction: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    leave: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    start: jspb.Message.getFieldWithDefault(msg, 4, 0),
    end: jspb.Message.getFieldWithDefault(msg, 5, 0),
    trigger: jspb.Message.getFieldWithDefault(msg, 6, 0),
    extensionTrigger: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.vega.events.v1.AuctionEvent}
 */
proto.vega.events.v1.AuctionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.AuctionEvent;
  return proto.vega.events.v1.AuctionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.AuctionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.AuctionEvent}
 */
proto.vega.events.v1.AuctionEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOpeningAuction(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLeave(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStart(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEnd(value);
      break;
    case 6:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setTrigger(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setExtensionTrigger(value);
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
proto.vega.events.v1.AuctionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.AuctionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.AuctionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.AuctionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpeningAuction();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLeave();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getExtensionTrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.events.v1.AuctionEvent.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool opening_auction = 2;
 * @return {boolean}
 */
proto.vega.events.v1.AuctionEvent.prototype.getOpeningAuction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setOpeningAuction = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool leave = 3;
 * @return {boolean}
 */
proto.vega.events.v1.AuctionEvent.prototype.getLeave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setLeave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 start = 4;
 * @return {number}
 */
proto.vega.events.v1.AuctionEvent.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 end = 5;
 * @return {number}
 */
proto.vega.events.v1.AuctionEvent.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional vega.AuctionTrigger trigger = 6;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.events.v1.AuctionEvent.prototype.getTrigger = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setTrigger = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional vega.AuctionTrigger extension_trigger = 7;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.events.v1.AuctionEvent.prototype.getExtensionTrigger = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.events.v1.AuctionEvent} returns this
 */
proto.vega.events.v1.AuctionEvent.prototype.setExtensionTrigger = function(value) {
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
proto.vega.events.v1.ValidatorUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ValidatorUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ValidatorUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ValidatorUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vegaPubKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ethereumAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tmPubKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    infoUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    country: jspb.Message.getFieldWithDefault(msg, 6, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, ""),
    avatarUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    vegaPubKeyIndex: jspb.Message.getFieldWithDefault(msg, 9, 0),
    added: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    fromEpoch: jspb.Message.getFieldWithDefault(msg, 11, 0),
    submitterAddress: jspb.Message.getFieldWithDefault(msg, 12, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.vega.events.v1.ValidatorUpdate}
 */
proto.vega.events.v1.ValidatorUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ValidatorUpdate;
  return proto.vega.events.v1.ValidatorUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ValidatorUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ValidatorUpdate}
 */
proto.vega.events.v1.ValidatorUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVegaPubKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthereumAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTmPubKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfoUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarUrl(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVegaPubKeyIndex(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdded(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromEpoch(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmitterAddress(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
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
proto.vega.events.v1.ValidatorUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ValidatorUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ValidatorUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ValidatorUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVegaPubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEthereumAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTmPubKey();
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
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getVegaPubKeyIndex();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getAdded();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getFromEpoch();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getSubmitterAddress();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEpochSeq();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string vega_pub_key = 2;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getVegaPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setVegaPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ethereum_address = 3;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getEthereumAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setEthereumAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tm_pub_key = 4;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getTmPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setTmPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string info_url = 5;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getInfoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setInfoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string country = 6;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string avatar_url = 8;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint32 vega_pub_key_index = 9;
 * @return {number}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getVegaPubKeyIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setVegaPubKeyIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool added = 10;
 * @return {boolean}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getAdded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setAdded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional uint64 from_epoch = 11;
 * @return {number}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getFromEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setFromEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string submitter_address = 12;
 * @return {string}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getSubmitterAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setSubmitterAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint64 epoch_seq = 13;
 * @return {number}
 */
proto.vega.events.v1.ValidatorUpdate.prototype.getEpochSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ValidatorUpdate} returns this
 */
proto.vega.events.v1.ValidatorUpdate.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
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
proto.vega.events.v1.ValidatorRankingEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ValidatorRankingEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ValidatorRankingEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ValidatorRankingEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stakeScore: jspb.Message.getFieldWithDefault(msg, 2, ""),
    performanceScore: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rankingScore: jspb.Message.getFieldWithDefault(msg, 4, ""),
    previousStatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nextStatus: jspb.Message.getFieldWithDefault(msg, 6, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tmVotingPower: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.vega.events.v1.ValidatorRankingEvent}
 */
proto.vega.events.v1.ValidatorRankingEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ValidatorRankingEvent;
  return proto.vega.events.v1.ValidatorRankingEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ValidatorRankingEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ValidatorRankingEvent}
 */
proto.vega.events.v1.ValidatorRankingEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakeScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPerformanceScore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRankingScore(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextStatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpochSeq(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTmVotingPower(value);
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
proto.vega.events.v1.ValidatorRankingEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ValidatorRankingEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ValidatorRankingEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ValidatorRankingEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStakeScore();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPerformanceScore();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRankingScore();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPreviousStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNextStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEpochSeq();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTmVotingPower();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stake_score = 2;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getStakeScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setStakeScore = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string performance_score = 3;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getPerformanceScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setPerformanceScore = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ranking_score = 4;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getRankingScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setRankingScore = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string previous_status = 5;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getPreviousStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setPreviousStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string next_status = 6;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getNextStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setNextStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string epoch_seq = 7;
 * @return {string}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 tm_voting_power = 8;
 * @return {number}
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.getTmVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ValidatorRankingEvent} returns this
 */
proto.vega.events.v1.ValidatorRankingEvent.prototype.setTmVotingPower = function(value) {
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
proto.vega.events.v1.KeyRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.KeyRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.KeyRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.KeyRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPubKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPubKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.events.v1.KeyRotation}
 */
proto.vega.events.v1.KeyRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.KeyRotation;
  return proto.vega.events.v1.KeyRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.KeyRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.KeyRotation}
 */
proto.vega.events.v1.KeyRotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPubKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPubKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
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
proto.vega.events.v1.KeyRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.KeyRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.KeyRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.KeyRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldPubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewPubKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.vega.events.v1.KeyRotation.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.KeyRotation} returns this
 */
proto.vega.events.v1.KeyRotation.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_pub_key = 2;
 * @return {string}
 */
proto.vega.events.v1.KeyRotation.prototype.getOldPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.KeyRotation} returns this
 */
proto.vega.events.v1.KeyRotation.prototype.setOldPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_pub_key = 3;
 * @return {string}
 */
proto.vega.events.v1.KeyRotation.prototype.getNewPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.KeyRotation} returns this
 */
proto.vega.events.v1.KeyRotation.prototype.setNewPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 block_height = 4;
 * @return {number}
 */
proto.vega.events.v1.KeyRotation.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.KeyRotation} returns this
 */
proto.vega.events.v1.KeyRotation.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.vega.events.v1.EthereumKeyRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.EthereumKeyRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.EthereumKeyRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.EthereumKeyRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.events.v1.EthereumKeyRotation}
 */
proto.vega.events.v1.EthereumKeyRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.EthereumKeyRotation;
  return proto.vega.events.v1.EthereumKeyRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.EthereumKeyRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.EthereumKeyRotation}
 */
proto.vega.events.v1.EthereumKeyRotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
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
proto.vega.events.v1.EthereumKeyRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.EthereumKeyRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.EthereumKeyRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.EthereumKeyRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.EthereumKeyRotation} returns this
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_address = 2;
 * @return {string}
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.getOldAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.EthereumKeyRotation} returns this
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.setOldAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_address = 3;
 * @return {string}
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.getNewAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.EthereumKeyRotation} returns this
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.setNewAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 block_height = 4;
 * @return {number}
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.EthereumKeyRotation} returns this
 */
proto.vega.events.v1.EthereumKeyRotation.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.events.v1.ProtocolUpgradeEvent.repeatedFields_ = [3];



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
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ProtocolUpgradeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ProtocolUpgradeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ProtocolUpgradeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    upgradeBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vegaReleaseTag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    approversList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent}
 */
proto.vega.events.v1.ProtocolUpgradeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ProtocolUpgradeEvent;
  return proto.vega.events.v1.ProtocolUpgradeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ProtocolUpgradeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent}
 */
proto.vega.events.v1.ProtocolUpgradeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpgradeBlockHeight(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVegaReleaseTag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addApprovers(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.events.v1.ProtocolUpgradeProposalStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ProtocolUpgradeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ProtocolUpgradeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ProtocolUpgradeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpgradeBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVegaReleaseTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApproversList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
};


/**
 * optional uint64 upgrade_block_height = 1;
 * @return {number}
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.getUpgradeBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent} returns this
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.setUpgradeBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string vega_release_tag = 2;
 * @return {string}
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.getVegaReleaseTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent} returns this
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.setVegaReleaseTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string approvers = 3;
 * @return {!Array<string>}
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.getApproversList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent} returns this
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.setApproversList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent} returns this
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.addApprovers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent} returns this
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.clearApproversList = function() {
  return this.setApproversList([]);
};


/**
 * optional ProtocolUpgradeProposalStatus status = 4;
 * @return {!proto.vega.events.v1.ProtocolUpgradeProposalStatus}
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.getStatus = function() {
  return /** @type {!proto.vega.events.v1.ProtocolUpgradeProposalStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.vega.events.v1.ProtocolUpgradeProposalStatus} value
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent} returns this
 */
proto.vega.events.v1.ProtocolUpgradeEvent.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.vega.events.v1.StateVar.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.StateVar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.StateVar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.StateVar.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.vega.events.v1.StateVar}
 */
proto.vega.events.v1.StateVar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.StateVar;
  return proto.vega.events.v1.StateVar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.StateVar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.StateVar}
 */
proto.vega.events.v1.StateVar.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEventId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
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
proto.vega.events.v1.StateVar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.StateVar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.StateVar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.StateVar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.StateVar.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StateVar} returns this
 */
proto.vega.events.v1.StateVar.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string event_id = 2;
 * @return {string}
 */
proto.vega.events.v1.StateVar.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StateVar} returns this
 */
proto.vega.events.v1.StateVar.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.vega.events.v1.StateVar.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.StateVar} returns this
 */
proto.vega.events.v1.StateVar.prototype.setState = function(value) {
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
proto.vega.events.v1.BeginBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.BeginBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.BeginBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.BeginBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hash: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.vega.events.v1.BeginBlock}
 */
proto.vega.events.v1.BeginBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.BeginBlock;
  return proto.vega.events.v1.BeginBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.BeginBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.BeginBlock}
 */
proto.vega.events.v1.BeginBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
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
proto.vega.events.v1.BeginBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.BeginBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.BeginBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.BeginBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.vega.events.v1.BeginBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.BeginBlock} returns this
 */
proto.vega.events.v1.BeginBlock.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.vega.events.v1.BeginBlock.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.BeginBlock} returns this
 */
proto.vega.events.v1.BeginBlock.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.vega.events.v1.BeginBlock.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.BeginBlock} returns this
 */
proto.vega.events.v1.BeginBlock.prototype.setHash = function(value) {
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
proto.vega.events.v1.EndBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.EndBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.EndBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.EndBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.events.v1.EndBlock}
 */
proto.vega.events.v1.EndBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.EndBlock;
  return proto.vega.events.v1.EndBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.EndBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.EndBlock}
 */
proto.vega.events.v1.EndBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
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
proto.vega.events.v1.EndBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.EndBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.EndBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.EndBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.vega.events.v1.EndBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.EndBlock} returns this
 */
proto.vega.events.v1.EndBlock.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.vega.events.v1.ProtocolUpgradeStarted.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ProtocolUpgradeStarted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ProtocolUpgradeStarted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ProtocolUpgradeStarted.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.events.v1.ProtocolUpgradeStarted}
 */
proto.vega.events.v1.ProtocolUpgradeStarted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ProtocolUpgradeStarted;
  return proto.vega.events.v1.ProtocolUpgradeStarted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ProtocolUpgradeStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ProtocolUpgradeStarted}
 */
proto.vega.events.v1.ProtocolUpgradeStarted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastBlockHeight(value);
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
proto.vega.events.v1.ProtocolUpgradeStarted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ProtocolUpgradeStarted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ProtocolUpgradeStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ProtocolUpgradeStarted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 last_block_height = 1;
 * @return {number}
 */
proto.vega.events.v1.ProtocolUpgradeStarted.prototype.getLastBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ProtocolUpgradeStarted} returns this
 */
proto.vega.events.v1.ProtocolUpgradeStarted.prototype.setLastBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.ProtocolUpgradeDataNodeReady.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.ProtocolUpgradeDataNodeReady} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.events.v1.ProtocolUpgradeDataNodeReady}
 */
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.ProtocolUpgradeDataNodeReady;
  return proto.vega.events.v1.ProtocolUpgradeDataNodeReady.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.ProtocolUpgradeDataNodeReady} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.ProtocolUpgradeDataNodeReady}
 */
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastBlockHeight(value);
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
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.ProtocolUpgradeDataNodeReady.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.ProtocolUpgradeDataNodeReady} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 last_block_height = 1;
 * @return {number}
 */
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.prototype.getLastBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.ProtocolUpgradeDataNodeReady} returns this
 */
proto.vega.events.v1.ProtocolUpgradeDataNodeReady.prototype.setLastBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.vega.events.v1.CoreSnapshotData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.CoreSnapshotData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.CoreSnapshotData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.CoreSnapshotData.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coreVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    protocolUpgradeBlock: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.vega.events.v1.CoreSnapshotData}
 */
proto.vega.events.v1.CoreSnapshotData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.CoreSnapshotData;
  return proto.vega.events.v1.CoreSnapshotData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.CoreSnapshotData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.CoreSnapshotData}
 */
proto.vega.events.v1.CoreSnapshotData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoreVersion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProtocolUpgradeBlock(value);
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
proto.vega.events.v1.CoreSnapshotData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.CoreSnapshotData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.CoreSnapshotData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.CoreSnapshotData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoreVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProtocolUpgradeBlock();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.vega.events.v1.CoreSnapshotData.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.CoreSnapshotData} returns this
 */
proto.vega.events.v1.CoreSnapshotData.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string block_hash = 2;
 * @return {string}
 */
proto.vega.events.v1.CoreSnapshotData.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.CoreSnapshotData} returns this
 */
proto.vega.events.v1.CoreSnapshotData.prototype.setBlockHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string core_version = 3;
 * @return {string}
 */
proto.vega.events.v1.CoreSnapshotData.prototype.getCoreVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.CoreSnapshotData} returns this
 */
proto.vega.events.v1.CoreSnapshotData.prototype.setCoreVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool protocol_upgrade_block = 4;
 * @return {boolean}
 */
proto.vega.events.v1.CoreSnapshotData.prototype.getProtocolUpgradeBlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.events.v1.CoreSnapshotData} returns this
 */
proto.vega.events.v1.CoreSnapshotData.prototype.setProtocolUpgradeBlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.events.v1.BusEvent.oneofGroups_ = [[101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,1001,2001]];

/**
 * @enum {number}
 */
proto.vega.events.v1.BusEvent.EventCase = {
  EVENT_NOT_SET: 0,
  TIME_UPDATE: 101,
  LEDGER_MOVEMENTS: 102,
  POSITION_RESOLUTION: 103,
  ORDER: 104,
  ACCOUNT: 105,
  PARTY: 106,
  TRADE: 107,
  MARGIN_LEVELS: 108,
  PROPOSAL: 109,
  VOTE: 110,
  MARKET_DATA: 111,
  NODE_SIGNATURE: 112,
  LOSS_SOCIALIZATION: 113,
  SETTLE_POSITION: 114,
  SETTLE_DISTRESSED: 115,
  MARKET_CREATED: 116,
  ASSET: 117,
  MARKET_TICK: 118,
  WITHDRAWAL: 119,
  DEPOSIT: 120,
  AUCTION: 121,
  RISK_FACTOR: 122,
  NETWORK_PARAMETER: 123,
  LIQUIDITY_PROVISION: 124,
  MARKET_UPDATED: 125,
  ORACLE_SPEC: 126,
  ORACLE_DATA: 127,
  DELEGATION_BALANCE: 129,
  VALIDATOR_SCORE: 130,
  EPOCH_EVENT: 131,
  VALIDATOR_UPDATE: 132,
  STAKE_LINKING: 133,
  REWARD_PAYOUT: 134,
  CHECKPOINT: 135,
  KEY_ROTATION: 136,
  STATE_VAR: 137,
  NETWORK_LIMITS: 138,
  TRANSFER: 139,
  RANKING_EVENT: 140,
  ERC20_MULTISIG_SIGNER_EVENT: 141,
  ERC20_MULTISIG_SET_THRESHOLD_EVENT: 142,
  ERC20_MULTISIG_SIGNER_ADDED: 143,
  ERC20_MULTISIG_SIGNER_REMOVED: 144,
  POSITION_STATE_EVENT: 145,
  ETHEREUM_KEY_ROTATION: 146,
  PROTOCOL_UPGRADE_EVENT: 147,
  BEGIN_BLOCK: 148,
  END_BLOCK: 149,
  PROTOCOL_UPGRADE_STARTED: 150,
  SETTLE_MARKET: 151,
  TRANSACTION_RESULT: 152,
  CORE_SNAPSHOT_EVENT: 153,
  PROTOCOL_UPGRADE_DATA_NODE_READY: 154,
  MARKET: 1001,
  TX_ERR_EVENT: 2001
};

/**
 * @return {proto.vega.events.v1.BusEvent.EventCase}
 */
proto.vega.events.v1.BusEvent.prototype.getEventCase = function() {
  return /** @type {proto.vega.events.v1.BusEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.vega.events.v1.BusEvent.oneofGroups_[0]));
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
proto.vega.events.v1.BusEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.events.v1.BusEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.events.v1.BusEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.BusEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    block: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    timeUpdate: (f = msg.getTimeUpdate()) && proto.vega.events.v1.TimeUpdate.toObject(includeInstance, f),
    ledgerMovements: (f = msg.getLedgerMovements()) && proto.vega.events.v1.LedgerMovements.toObject(includeInstance, f),
    positionResolution: (f = msg.getPositionResolution()) && proto.vega.events.v1.PositionResolution.toObject(includeInstance, f),
    order: (f = msg.getOrder()) && vega_vega_pb.Order.toObject(includeInstance, f),
    account: (f = msg.getAccount()) && vega_vega_pb.Account.toObject(includeInstance, f),
    party: (f = msg.getParty()) && vega_vega_pb.Party.toObject(includeInstance, f),
    trade: (f = msg.getTrade()) && vega_vega_pb.Trade.toObject(includeInstance, f),
    marginLevels: (f = msg.getMarginLevels()) && vega_vega_pb.MarginLevels.toObject(includeInstance, f),
    proposal: (f = msg.getProposal()) && vega_governance_pb.Proposal.toObject(includeInstance, f),
    vote: (f = msg.getVote()) && vega_governance_pb.Vote.toObject(includeInstance, f),
    marketData: (f = msg.getMarketData()) && vega_vega_pb.MarketData.toObject(includeInstance, f),
    nodeSignature: (f = msg.getNodeSignature()) && vega_commands_v1_validator_commands_pb.NodeSignature.toObject(includeInstance, f),
    lossSocialization: (f = msg.getLossSocialization()) && proto.vega.events.v1.LossSocialization.toObject(includeInstance, f),
    settlePosition: (f = msg.getSettlePosition()) && proto.vega.events.v1.SettlePosition.toObject(includeInstance, f),
    settleDistressed: (f = msg.getSettleDistressed()) && proto.vega.events.v1.SettleDistressed.toObject(includeInstance, f),
    marketCreated: (f = msg.getMarketCreated()) && vega_markets_pb.Market.toObject(includeInstance, f),
    asset: (f = msg.getAsset()) && vega_assets_pb.Asset.toObject(includeInstance, f),
    marketTick: (f = msg.getMarketTick()) && proto.vega.events.v1.MarketTick.toObject(includeInstance, f),
    withdrawal: (f = msg.getWithdrawal()) && vega_vega_pb.Withdrawal.toObject(includeInstance, f),
    deposit: (f = msg.getDeposit()) && vega_vega_pb.Deposit.toObject(includeInstance, f),
    auction: (f = msg.getAuction()) && proto.vega.events.v1.AuctionEvent.toObject(includeInstance, f),
    riskFactor: (f = msg.getRiskFactor()) && vega_vega_pb.RiskFactor.toObject(includeInstance, f),
    networkParameter: (f = msg.getNetworkParameter()) && vega_vega_pb.NetworkParameter.toObject(includeInstance, f),
    liquidityProvision: (f = msg.getLiquidityProvision()) && vega_vega_pb.LiquidityProvision.toObject(includeInstance, f),
    marketUpdated: (f = msg.getMarketUpdated()) && vega_markets_pb.Market.toObject(includeInstance, f),
    oracleSpec: (f = msg.getOracleSpec()) && vega_oracle_pb.OracleSpec.toObject(includeInstance, f),
    oracleData: (f = msg.getOracleData()) && vega_oracle_pb.OracleData.toObject(includeInstance, f),
    delegationBalance: (f = msg.getDelegationBalance()) && proto.vega.events.v1.DelegationBalanceEvent.toObject(includeInstance, f),
    validatorScore: (f = msg.getValidatorScore()) && proto.vega.events.v1.ValidatorScoreEvent.toObject(includeInstance, f),
    epochEvent: (f = msg.getEpochEvent()) && proto.vega.events.v1.EpochEvent.toObject(includeInstance, f),
    validatorUpdate: (f = msg.getValidatorUpdate()) && proto.vega.events.v1.ValidatorUpdate.toObject(includeInstance, f),
    stakeLinking: (f = msg.getStakeLinking()) && proto.vega.events.v1.StakeLinking.toObject(includeInstance, f),
    rewardPayout: (f = msg.getRewardPayout()) && proto.vega.events.v1.RewardPayoutEvent.toObject(includeInstance, f),
    checkpoint: (f = msg.getCheckpoint()) && proto.vega.events.v1.CheckpointEvent.toObject(includeInstance, f),
    keyRotation: (f = msg.getKeyRotation()) && proto.vega.events.v1.KeyRotation.toObject(includeInstance, f),
    stateVar: (f = msg.getStateVar()) && proto.vega.events.v1.StateVar.toObject(includeInstance, f),
    networkLimits: (f = msg.getNetworkLimits()) && vega_vega_pb.NetworkLimits.toObject(includeInstance, f),
    transfer: (f = msg.getTransfer()) && proto.vega.events.v1.Transfer.toObject(includeInstance, f),
    rankingEvent: (f = msg.getRankingEvent()) && proto.vega.events.v1.ValidatorRankingEvent.toObject(includeInstance, f),
    erc20MultisigSignerEvent: (f = msg.getErc20MultisigSignerEvent()) && proto.vega.events.v1.ERC20MultiSigSignerEvent.toObject(includeInstance, f),
    erc20MultisigSetThresholdEvent: (f = msg.getErc20MultisigSetThresholdEvent()) && proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.toObject(includeInstance, f),
    erc20MultisigSignerAdded: (f = msg.getErc20MultisigSignerAdded()) && proto.vega.events.v1.ERC20MultiSigSignerAdded.toObject(includeInstance, f),
    erc20MultisigSignerRemoved: (f = msg.getErc20MultisigSignerRemoved()) && proto.vega.events.v1.ERC20MultiSigSignerRemoved.toObject(includeInstance, f),
    positionStateEvent: (f = msg.getPositionStateEvent()) && proto.vega.events.v1.PositionStateEvent.toObject(includeInstance, f),
    ethereumKeyRotation: (f = msg.getEthereumKeyRotation()) && proto.vega.events.v1.EthereumKeyRotation.toObject(includeInstance, f),
    protocolUpgradeEvent: (f = msg.getProtocolUpgradeEvent()) && proto.vega.events.v1.ProtocolUpgradeEvent.toObject(includeInstance, f),
    beginBlock: (f = msg.getBeginBlock()) && proto.vega.events.v1.BeginBlock.toObject(includeInstance, f),
    endBlock: (f = msg.getEndBlock()) && proto.vega.events.v1.EndBlock.toObject(includeInstance, f),
    protocolUpgradeStarted: (f = msg.getProtocolUpgradeStarted()) && proto.vega.events.v1.ProtocolUpgradeStarted.toObject(includeInstance, f),
    settleMarket: (f = msg.getSettleMarket()) && proto.vega.events.v1.SettleMarket.toObject(includeInstance, f),
    transactionResult: (f = msg.getTransactionResult()) && proto.vega.events.v1.TransactionResult.toObject(includeInstance, f),
    coreSnapshotEvent: (f = msg.getCoreSnapshotEvent()) && proto.vega.events.v1.CoreSnapshotData.toObject(includeInstance, f),
    protocolUpgradeDataNodeReady: (f = msg.getProtocolUpgradeDataNodeReady()) && proto.vega.events.v1.ProtocolUpgradeDataNodeReady.toObject(includeInstance, f),
    market: (f = msg.getMarket()) && proto.vega.events.v1.MarketEvent.toObject(includeInstance, f),
    txErrEvent: (f = msg.getTxErrEvent()) && proto.vega.events.v1.TxErrorEvent.toObject(includeInstance, f),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0),
    chainId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txHash: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.vega.events.v1.BusEvent}
 */
proto.vega.events.v1.BusEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.events.v1.BusEvent;
  return proto.vega.events.v1.BusEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.events.v1.BusEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.events.v1.BusEvent}
 */
proto.vega.events.v1.BusEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBlock(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.events.v1.BusEventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 101:
      var value = new proto.vega.events.v1.TimeUpdate;
      reader.readMessage(value,proto.vega.events.v1.TimeUpdate.deserializeBinaryFromReader);
      msg.setTimeUpdate(value);
      break;
    case 102:
      var value = new proto.vega.events.v1.LedgerMovements;
      reader.readMessage(value,proto.vega.events.v1.LedgerMovements.deserializeBinaryFromReader);
      msg.setLedgerMovements(value);
      break;
    case 103:
      var value = new proto.vega.events.v1.PositionResolution;
      reader.readMessage(value,proto.vega.events.v1.PositionResolution.deserializeBinaryFromReader);
      msg.setPositionResolution(value);
      break;
    case 104:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 105:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 106:
      var value = new vega_vega_pb.Party;
      reader.readMessage(value,vega_vega_pb.Party.deserializeBinaryFromReader);
      msg.setParty(value);
      break;
    case 107:
      var value = new vega_vega_pb.Trade;
      reader.readMessage(value,vega_vega_pb.Trade.deserializeBinaryFromReader);
      msg.setTrade(value);
      break;
    case 108:
      var value = new vega_vega_pb.MarginLevels;
      reader.readMessage(value,vega_vega_pb.MarginLevels.deserializeBinaryFromReader);
      msg.setMarginLevels(value);
      break;
    case 109:
      var value = new vega_governance_pb.Proposal;
      reader.readMessage(value,vega_governance_pb.Proposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 110:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    case 111:
      var value = new vega_vega_pb.MarketData;
      reader.readMessage(value,vega_vega_pb.MarketData.deserializeBinaryFromReader);
      msg.setMarketData(value);
      break;
    case 112:
      var value = new vega_commands_v1_validator_commands_pb.NodeSignature;
      reader.readMessage(value,vega_commands_v1_validator_commands_pb.NodeSignature.deserializeBinaryFromReader);
      msg.setNodeSignature(value);
      break;
    case 113:
      var value = new proto.vega.events.v1.LossSocialization;
      reader.readMessage(value,proto.vega.events.v1.LossSocialization.deserializeBinaryFromReader);
      msg.setLossSocialization(value);
      break;
    case 114:
      var value = new proto.vega.events.v1.SettlePosition;
      reader.readMessage(value,proto.vega.events.v1.SettlePosition.deserializeBinaryFromReader);
      msg.setSettlePosition(value);
      break;
    case 115:
      var value = new proto.vega.events.v1.SettleDistressed;
      reader.readMessage(value,proto.vega.events.v1.SettleDistressed.deserializeBinaryFromReader);
      msg.setSettleDistressed(value);
      break;
    case 116:
      var value = new vega_markets_pb.Market;
      reader.readMessage(value,vega_markets_pb.Market.deserializeBinaryFromReader);
      msg.setMarketCreated(value);
      break;
    case 117:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.setAsset(value);
      break;
    case 118:
      var value = new proto.vega.events.v1.MarketTick;
      reader.readMessage(value,proto.vega.events.v1.MarketTick.deserializeBinaryFromReader);
      msg.setMarketTick(value);
      break;
    case 119:
      var value = new vega_vega_pb.Withdrawal;
      reader.readMessage(value,vega_vega_pb.Withdrawal.deserializeBinaryFromReader);
      msg.setWithdrawal(value);
      break;
    case 120:
      var value = new vega_vega_pb.Deposit;
      reader.readMessage(value,vega_vega_pb.Deposit.deserializeBinaryFromReader);
      msg.setDeposit(value);
      break;
    case 121:
      var value = new proto.vega.events.v1.AuctionEvent;
      reader.readMessage(value,proto.vega.events.v1.AuctionEvent.deserializeBinaryFromReader);
      msg.setAuction(value);
      break;
    case 122:
      var value = new vega_vega_pb.RiskFactor;
      reader.readMessage(value,vega_vega_pb.RiskFactor.deserializeBinaryFromReader);
      msg.setRiskFactor(value);
      break;
    case 123:
      var value = new vega_vega_pb.NetworkParameter;
      reader.readMessage(value,vega_vega_pb.NetworkParameter.deserializeBinaryFromReader);
      msg.setNetworkParameter(value);
      break;
    case 124:
      var value = new vega_vega_pb.LiquidityProvision;
      reader.readMessage(value,vega_vega_pb.LiquidityProvision.deserializeBinaryFromReader);
      msg.setLiquidityProvision(value);
      break;
    case 125:
      var value = new vega_markets_pb.Market;
      reader.readMessage(value,vega_markets_pb.Market.deserializeBinaryFromReader);
      msg.setMarketUpdated(value);
      break;
    case 126:
      var value = new vega_oracle_pb.OracleSpec;
      reader.readMessage(value,vega_oracle_pb.OracleSpec.deserializeBinaryFromReader);
      msg.setOracleSpec(value);
      break;
    case 127:
      var value = new vega_oracle_pb.OracleData;
      reader.readMessage(value,vega_oracle_pb.OracleData.deserializeBinaryFromReader);
      msg.setOracleData(value);
      break;
    case 129:
      var value = new proto.vega.events.v1.DelegationBalanceEvent;
      reader.readMessage(value,proto.vega.events.v1.DelegationBalanceEvent.deserializeBinaryFromReader);
      msg.setDelegationBalance(value);
      break;
    case 130:
      var value = new proto.vega.events.v1.ValidatorScoreEvent;
      reader.readMessage(value,proto.vega.events.v1.ValidatorScoreEvent.deserializeBinaryFromReader);
      msg.setValidatorScore(value);
      break;
    case 131:
      var value = new proto.vega.events.v1.EpochEvent;
      reader.readMessage(value,proto.vega.events.v1.EpochEvent.deserializeBinaryFromReader);
      msg.setEpochEvent(value);
      break;
    case 132:
      var value = new proto.vega.events.v1.ValidatorUpdate;
      reader.readMessage(value,proto.vega.events.v1.ValidatorUpdate.deserializeBinaryFromReader);
      msg.setValidatorUpdate(value);
      break;
    case 133:
      var value = new proto.vega.events.v1.StakeLinking;
      reader.readMessage(value,proto.vega.events.v1.StakeLinking.deserializeBinaryFromReader);
      msg.setStakeLinking(value);
      break;
    case 134:
      var value = new proto.vega.events.v1.RewardPayoutEvent;
      reader.readMessage(value,proto.vega.events.v1.RewardPayoutEvent.deserializeBinaryFromReader);
      msg.setRewardPayout(value);
      break;
    case 135:
      var value = new proto.vega.events.v1.CheckpointEvent;
      reader.readMessage(value,proto.vega.events.v1.CheckpointEvent.deserializeBinaryFromReader);
      msg.setCheckpoint(value);
      break;
    case 136:
      var value = new proto.vega.events.v1.KeyRotation;
      reader.readMessage(value,proto.vega.events.v1.KeyRotation.deserializeBinaryFromReader);
      msg.setKeyRotation(value);
      break;
    case 137:
      var value = new proto.vega.events.v1.StateVar;
      reader.readMessage(value,proto.vega.events.v1.StateVar.deserializeBinaryFromReader);
      msg.setStateVar(value);
      break;
    case 138:
      var value = new vega_vega_pb.NetworkLimits;
      reader.readMessage(value,vega_vega_pb.NetworkLimits.deserializeBinaryFromReader);
      msg.setNetworkLimits(value);
      break;
    case 139:
      var value = new proto.vega.events.v1.Transfer;
      reader.readMessage(value,proto.vega.events.v1.Transfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 140:
      var value = new proto.vega.events.v1.ValidatorRankingEvent;
      reader.readMessage(value,proto.vega.events.v1.ValidatorRankingEvent.deserializeBinaryFromReader);
      msg.setRankingEvent(value);
      break;
    case 141:
      var value = new proto.vega.events.v1.ERC20MultiSigSignerEvent;
      reader.readMessage(value,proto.vega.events.v1.ERC20MultiSigSignerEvent.deserializeBinaryFromReader);
      msg.setErc20MultisigSignerEvent(value);
      break;
    case 142:
      var value = new proto.vega.events.v1.ERC20MultiSigThresholdSetEvent;
      reader.readMessage(value,proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.deserializeBinaryFromReader);
      msg.setErc20MultisigSetThresholdEvent(value);
      break;
    case 143:
      var value = new proto.vega.events.v1.ERC20MultiSigSignerAdded;
      reader.readMessage(value,proto.vega.events.v1.ERC20MultiSigSignerAdded.deserializeBinaryFromReader);
      msg.setErc20MultisigSignerAdded(value);
      break;
    case 144:
      var value = new proto.vega.events.v1.ERC20MultiSigSignerRemoved;
      reader.readMessage(value,proto.vega.events.v1.ERC20MultiSigSignerRemoved.deserializeBinaryFromReader);
      msg.setErc20MultisigSignerRemoved(value);
      break;
    case 145:
      var value = new proto.vega.events.v1.PositionStateEvent;
      reader.readMessage(value,proto.vega.events.v1.PositionStateEvent.deserializeBinaryFromReader);
      msg.setPositionStateEvent(value);
      break;
    case 146:
      var value = new proto.vega.events.v1.EthereumKeyRotation;
      reader.readMessage(value,proto.vega.events.v1.EthereumKeyRotation.deserializeBinaryFromReader);
      msg.setEthereumKeyRotation(value);
      break;
    case 147:
      var value = new proto.vega.events.v1.ProtocolUpgradeEvent;
      reader.readMessage(value,proto.vega.events.v1.ProtocolUpgradeEvent.deserializeBinaryFromReader);
      msg.setProtocolUpgradeEvent(value);
      break;
    case 148:
      var value = new proto.vega.events.v1.BeginBlock;
      reader.readMessage(value,proto.vega.events.v1.BeginBlock.deserializeBinaryFromReader);
      msg.setBeginBlock(value);
      break;
    case 149:
      var value = new proto.vega.events.v1.EndBlock;
      reader.readMessage(value,proto.vega.events.v1.EndBlock.deserializeBinaryFromReader);
      msg.setEndBlock(value);
      break;
    case 150:
      var value = new proto.vega.events.v1.ProtocolUpgradeStarted;
      reader.readMessage(value,proto.vega.events.v1.ProtocolUpgradeStarted.deserializeBinaryFromReader);
      msg.setProtocolUpgradeStarted(value);
      break;
    case 151:
      var value = new proto.vega.events.v1.SettleMarket;
      reader.readMessage(value,proto.vega.events.v1.SettleMarket.deserializeBinaryFromReader);
      msg.setSettleMarket(value);
      break;
    case 152:
      var value = new proto.vega.events.v1.TransactionResult;
      reader.readMessage(value,proto.vega.events.v1.TransactionResult.deserializeBinaryFromReader);
      msg.setTransactionResult(value);
      break;
    case 153:
      var value = new proto.vega.events.v1.CoreSnapshotData;
      reader.readMessage(value,proto.vega.events.v1.CoreSnapshotData.deserializeBinaryFromReader);
      msg.setCoreSnapshotEvent(value);
      break;
    case 154:
      var value = new proto.vega.events.v1.ProtocolUpgradeDataNodeReady;
      reader.readMessage(value,proto.vega.events.v1.ProtocolUpgradeDataNodeReady.deserializeBinaryFromReader);
      msg.setProtocolUpgradeDataNodeReady(value);
      break;
    case 1001:
      var value = new proto.vega.events.v1.MarketEvent;
      reader.readMessage(value,proto.vega.events.v1.MarketEvent.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2001:
      var value = new proto.vega.events.v1.TxErrorEvent;
      reader.readMessage(value,proto.vega.events.v1.TxErrorEvent.deserializeBinaryFromReader);
      msg.setTxErrEvent(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
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
proto.vega.events.v1.BusEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.events.v1.BusEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.events.v1.BusEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.events.v1.BusEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlock();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimeUpdate();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.vega.events.v1.TimeUpdate.serializeBinaryToWriter
    );
  }
  f = message.getLedgerMovements();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.vega.events.v1.LedgerMovements.serializeBinaryToWriter
    );
  }
  f = message.getPositionResolution();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      proto.vega.events.v1.PositionResolution.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getParty();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      vega_vega_pb.Party.serializeBinaryToWriter
    );
  }
  f = message.getTrade();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      vega_vega_pb.Trade.serializeBinaryToWriter
    );
  }
  f = message.getMarginLevels();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      vega_vega_pb.MarginLevels.serializeBinaryToWriter
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      vega_governance_pb.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      110,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
  f = message.getMarketData();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      vega_vega_pb.MarketData.serializeBinaryToWriter
    );
  }
  f = message.getNodeSignature();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      vega_commands_v1_validator_commands_pb.NodeSignature.serializeBinaryToWriter
    );
  }
  f = message.getLossSocialization();
  if (f != null) {
    writer.writeMessage(
      113,
      f,
      proto.vega.events.v1.LossSocialization.serializeBinaryToWriter
    );
  }
  f = message.getSettlePosition();
  if (f != null) {
    writer.writeMessage(
      114,
      f,
      proto.vega.events.v1.SettlePosition.serializeBinaryToWriter
    );
  }
  f = message.getSettleDistressed();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      proto.vega.events.v1.SettleDistressed.serializeBinaryToWriter
    );
  }
  f = message.getMarketCreated();
  if (f != null) {
    writer.writeMessage(
      116,
      f,
      vega_markets_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getAsset();
  if (f != null) {
    writer.writeMessage(
      117,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
  f = message.getMarketTick();
  if (f != null) {
    writer.writeMessage(
      118,
      f,
      proto.vega.events.v1.MarketTick.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawal();
  if (f != null) {
    writer.writeMessage(
      119,
      f,
      vega_vega_pb.Withdrawal.serializeBinaryToWriter
    );
  }
  f = message.getDeposit();
  if (f != null) {
    writer.writeMessage(
      120,
      f,
      vega_vega_pb.Deposit.serializeBinaryToWriter
    );
  }
  f = message.getAuction();
  if (f != null) {
    writer.writeMessage(
      121,
      f,
      proto.vega.events.v1.AuctionEvent.serializeBinaryToWriter
    );
  }
  f = message.getRiskFactor();
  if (f != null) {
    writer.writeMessage(
      122,
      f,
      vega_vega_pb.RiskFactor.serializeBinaryToWriter
    );
  }
  f = message.getNetworkParameter();
  if (f != null) {
    writer.writeMessage(
      123,
      f,
      vega_vega_pb.NetworkParameter.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvision();
  if (f != null) {
    writer.writeMessage(
      124,
      f,
      vega_vega_pb.LiquidityProvision.serializeBinaryToWriter
    );
  }
  f = message.getMarketUpdated();
  if (f != null) {
    writer.writeMessage(
      125,
      f,
      vega_markets_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getOracleSpec();
  if (f != null) {
    writer.writeMessage(
      126,
      f,
      vega_oracle_pb.OracleSpec.serializeBinaryToWriter
    );
  }
  f = message.getOracleData();
  if (f != null) {
    writer.writeMessage(
      127,
      f,
      vega_oracle_pb.OracleData.serializeBinaryToWriter
    );
  }
  f = message.getDelegationBalance();
  if (f != null) {
    writer.writeMessage(
      129,
      f,
      proto.vega.events.v1.DelegationBalanceEvent.serializeBinaryToWriter
    );
  }
  f = message.getValidatorScore();
  if (f != null) {
    writer.writeMessage(
      130,
      f,
      proto.vega.events.v1.ValidatorScoreEvent.serializeBinaryToWriter
    );
  }
  f = message.getEpochEvent();
  if (f != null) {
    writer.writeMessage(
      131,
      f,
      proto.vega.events.v1.EpochEvent.serializeBinaryToWriter
    );
  }
  f = message.getValidatorUpdate();
  if (f != null) {
    writer.writeMessage(
      132,
      f,
      proto.vega.events.v1.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getStakeLinking();
  if (f != null) {
    writer.writeMessage(
      133,
      f,
      proto.vega.events.v1.StakeLinking.serializeBinaryToWriter
    );
  }
  f = message.getRewardPayout();
  if (f != null) {
    writer.writeMessage(
      134,
      f,
      proto.vega.events.v1.RewardPayoutEvent.serializeBinaryToWriter
    );
  }
  f = message.getCheckpoint();
  if (f != null) {
    writer.writeMessage(
      135,
      f,
      proto.vega.events.v1.CheckpointEvent.serializeBinaryToWriter
    );
  }
  f = message.getKeyRotation();
  if (f != null) {
    writer.writeMessage(
      136,
      f,
      proto.vega.events.v1.KeyRotation.serializeBinaryToWriter
    );
  }
  f = message.getStateVar();
  if (f != null) {
    writer.writeMessage(
      137,
      f,
      proto.vega.events.v1.StateVar.serializeBinaryToWriter
    );
  }
  f = message.getNetworkLimits();
  if (f != null) {
    writer.writeMessage(
      138,
      f,
      vega_vega_pb.NetworkLimits.serializeBinaryToWriter
    );
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      139,
      f,
      proto.vega.events.v1.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getRankingEvent();
  if (f != null) {
    writer.writeMessage(
      140,
      f,
      proto.vega.events.v1.ValidatorRankingEvent.serializeBinaryToWriter
    );
  }
  f = message.getErc20MultisigSignerEvent();
  if (f != null) {
    writer.writeMessage(
      141,
      f,
      proto.vega.events.v1.ERC20MultiSigSignerEvent.serializeBinaryToWriter
    );
  }
  f = message.getErc20MultisigSetThresholdEvent();
  if (f != null) {
    writer.writeMessage(
      142,
      f,
      proto.vega.events.v1.ERC20MultiSigThresholdSetEvent.serializeBinaryToWriter
    );
  }
  f = message.getErc20MultisigSignerAdded();
  if (f != null) {
    writer.writeMessage(
      143,
      f,
      proto.vega.events.v1.ERC20MultiSigSignerAdded.serializeBinaryToWriter
    );
  }
  f = message.getErc20MultisigSignerRemoved();
  if (f != null) {
    writer.writeMessage(
      144,
      f,
      proto.vega.events.v1.ERC20MultiSigSignerRemoved.serializeBinaryToWriter
    );
  }
  f = message.getPositionStateEvent();
  if (f != null) {
    writer.writeMessage(
      145,
      f,
      proto.vega.events.v1.PositionStateEvent.serializeBinaryToWriter
    );
  }
  f = message.getEthereumKeyRotation();
  if (f != null) {
    writer.writeMessage(
      146,
      f,
      proto.vega.events.v1.EthereumKeyRotation.serializeBinaryToWriter
    );
  }
  f = message.getProtocolUpgradeEvent();
  if (f != null) {
    writer.writeMessage(
      147,
      f,
      proto.vega.events.v1.ProtocolUpgradeEvent.serializeBinaryToWriter
    );
  }
  f = message.getBeginBlock();
  if (f != null) {
    writer.writeMessage(
      148,
      f,
      proto.vega.events.v1.BeginBlock.serializeBinaryToWriter
    );
  }
  f = message.getEndBlock();
  if (f != null) {
    writer.writeMessage(
      149,
      f,
      proto.vega.events.v1.EndBlock.serializeBinaryToWriter
    );
  }
  f = message.getProtocolUpgradeStarted();
  if (f != null) {
    writer.writeMessage(
      150,
      f,
      proto.vega.events.v1.ProtocolUpgradeStarted.serializeBinaryToWriter
    );
  }
  f = message.getSettleMarket();
  if (f != null) {
    writer.writeMessage(
      151,
      f,
      proto.vega.events.v1.SettleMarket.serializeBinaryToWriter
    );
  }
  f = message.getTransactionResult();
  if (f != null) {
    writer.writeMessage(
      152,
      f,
      proto.vega.events.v1.TransactionResult.serializeBinaryToWriter
    );
  }
  f = message.getCoreSnapshotEvent();
  if (f != null) {
    writer.writeMessage(
      153,
      f,
      proto.vega.events.v1.CoreSnapshotData.serializeBinaryToWriter
    );
  }
  f = message.getProtocolUpgradeDataNodeReady();
  if (f != null) {
    writer.writeMessage(
      154,
      f,
      proto.vega.events.v1.ProtocolUpgradeDataNodeReady.serializeBinaryToWriter
    );
  }
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      proto.vega.events.v1.MarketEvent.serializeBinaryToWriter
    );
  }
  f = message.getTxErrEvent();
  if (f != null) {
    writer.writeMessage(
      2001,
      f,
      proto.vega.events.v1.TxErrorEvent.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getChainId();
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.events.v1.BusEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string block = 2;
 * @return {string}
 */
proto.vega.events.v1.BusEvent.prototype.getBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.setBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BusEventType type = 3;
 * @return {!proto.vega.events.v1.BusEventType}
 */
proto.vega.events.v1.BusEvent.prototype.getType = function() {
  return /** @type {!proto.vega.events.v1.BusEventType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.events.v1.BusEventType} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional TimeUpdate time_update = 101;
 * @return {?proto.vega.events.v1.TimeUpdate}
 */
proto.vega.events.v1.BusEvent.prototype.getTimeUpdate = function() {
  return /** @type{?proto.vega.events.v1.TimeUpdate} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.TimeUpdate, 101));
};


/**
 * @param {?proto.vega.events.v1.TimeUpdate|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setTimeUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearTimeUpdate = function() {
  return this.setTimeUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasTimeUpdate = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional LedgerMovements ledger_movements = 102;
 * @return {?proto.vega.events.v1.LedgerMovements}
 */
proto.vega.events.v1.BusEvent.prototype.getLedgerMovements = function() {
  return /** @type{?proto.vega.events.v1.LedgerMovements} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.LedgerMovements, 102));
};


/**
 * @param {?proto.vega.events.v1.LedgerMovements|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setLedgerMovements = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearLedgerMovements = function() {
  return this.setLedgerMovements(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasLedgerMovements = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional PositionResolution position_resolution = 103;
 * @return {?proto.vega.events.v1.PositionResolution}
 */
proto.vega.events.v1.BusEvent.prototype.getPositionResolution = function() {
  return /** @type{?proto.vega.events.v1.PositionResolution} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.PositionResolution, 103));
};


/**
 * @param {?proto.vega.events.v1.PositionResolution|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setPositionResolution = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearPositionResolution = function() {
  return this.setPositionResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasPositionResolution = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional vega.Order order = 104;
 * @return {?proto.vega.Order}
 */
proto.vega.events.v1.BusEvent.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Order, 104));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setOrder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional vega.Account account = 105;
 * @return {?proto.vega.Account}
 */
proto.vega.events.v1.BusEvent.prototype.getAccount = function() {
  return /** @type{?proto.vega.Account} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Account, 105));
};


/**
 * @param {?proto.vega.Account|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setAccount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional vega.Party party = 106;
 * @return {?proto.vega.Party}
 */
proto.vega.events.v1.BusEvent.prototype.getParty = function() {
  return /** @type{?proto.vega.Party} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Party, 106));
};


/**
 * @param {?proto.vega.Party|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setParty = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearParty = function() {
  return this.setParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasParty = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional vega.Trade trade = 107;
 * @return {?proto.vega.Trade}
 */
proto.vega.events.v1.BusEvent.prototype.getTrade = function() {
  return /** @type{?proto.vega.Trade} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Trade, 107));
};


/**
 * @param {?proto.vega.Trade|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setTrade = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearTrade = function() {
  return this.setTrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasTrade = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional vega.MarginLevels margin_levels = 108;
 * @return {?proto.vega.MarginLevels}
 */
proto.vega.events.v1.BusEvent.prototype.getMarginLevels = function() {
  return /** @type{?proto.vega.MarginLevels} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarginLevels, 108));
};


/**
 * @param {?proto.vega.MarginLevels|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setMarginLevels = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearMarginLevels = function() {
  return this.setMarginLevels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasMarginLevels = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional vega.Proposal proposal = 109;
 * @return {?proto.vega.Proposal}
 */
proto.vega.events.v1.BusEvent.prototype.getProposal = function() {
  return /** @type{?proto.vega.Proposal} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.Proposal, 109));
};


/**
 * @param {?proto.vega.Proposal|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional vega.Vote vote = 110;
 * @return {?proto.vega.Vote}
 */
proto.vega.events.v1.BusEvent.prototype.getVote = function() {
  return /** @type{?proto.vega.Vote} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.Vote, 110));
};


/**
 * @param {?proto.vega.Vote|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 110, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasVote = function() {
  return jspb.Message.getField(this, 110) != null;
};


/**
 * optional vega.MarketData market_data = 111;
 * @return {?proto.vega.MarketData}
 */
proto.vega.events.v1.BusEvent.prototype.getMarketData = function() {
  return /** @type{?proto.vega.MarketData} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.MarketData, 111));
};


/**
 * @param {?proto.vega.MarketData|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setMarketData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearMarketData = function() {
  return this.setMarketData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasMarketData = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional vega.commands.v1.NodeSignature node_signature = 112;
 * @return {?proto.vega.commands.v1.NodeSignature}
 */
proto.vega.events.v1.BusEvent.prototype.getNodeSignature = function() {
  return /** @type{?proto.vega.commands.v1.NodeSignature} */ (
    jspb.Message.getWrapperField(this, vega_commands_v1_validator_commands_pb.NodeSignature, 112));
};


/**
 * @param {?proto.vega.commands.v1.NodeSignature|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setNodeSignature = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearNodeSignature = function() {
  return this.setNodeSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasNodeSignature = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional LossSocialization loss_socialization = 113;
 * @return {?proto.vega.events.v1.LossSocialization}
 */
proto.vega.events.v1.BusEvent.prototype.getLossSocialization = function() {
  return /** @type{?proto.vega.events.v1.LossSocialization} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.LossSocialization, 113));
};


/**
 * @param {?proto.vega.events.v1.LossSocialization|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setLossSocialization = function(value) {
  return jspb.Message.setOneofWrapperField(this, 113, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearLossSocialization = function() {
  return this.setLossSocialization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasLossSocialization = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional SettlePosition settle_position = 114;
 * @return {?proto.vega.events.v1.SettlePosition}
 */
proto.vega.events.v1.BusEvent.prototype.getSettlePosition = function() {
  return /** @type{?proto.vega.events.v1.SettlePosition} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.SettlePosition, 114));
};


/**
 * @param {?proto.vega.events.v1.SettlePosition|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setSettlePosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 114, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearSettlePosition = function() {
  return this.setSettlePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasSettlePosition = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional SettleDistressed settle_distressed = 115;
 * @return {?proto.vega.events.v1.SettleDistressed}
 */
proto.vega.events.v1.BusEvent.prototype.getSettleDistressed = function() {
  return /** @type{?proto.vega.events.v1.SettleDistressed} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.SettleDistressed, 115));
};


/**
 * @param {?proto.vega.events.v1.SettleDistressed|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setSettleDistressed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearSettleDistressed = function() {
  return this.setSettleDistressed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasSettleDistressed = function() {
  return jspb.Message.getField(this, 115) != null;
};


/**
 * optional vega.Market market_created = 116;
 * @return {?proto.vega.Market}
 */
proto.vega.events.v1.BusEvent.prototype.getMarketCreated = function() {
  return /** @type{?proto.vega.Market} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.Market, 116));
};


/**
 * @param {?proto.vega.Market|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setMarketCreated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 116, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearMarketCreated = function() {
  return this.setMarketCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasMarketCreated = function() {
  return jspb.Message.getField(this, 116) != null;
};


/**
 * optional vega.Asset asset = 117;
 * @return {?proto.vega.Asset}
 */
proto.vega.events.v1.BusEvent.prototype.getAsset = function() {
  return /** @type{?proto.vega.Asset} */ (
    jspb.Message.getWrapperField(this, vega_assets_pb.Asset, 117));
};


/**
 * @param {?proto.vega.Asset|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setAsset = function(value) {
  return jspb.Message.setOneofWrapperField(this, 117, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearAsset = function() {
  return this.setAsset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasAsset = function() {
  return jspb.Message.getField(this, 117) != null;
};


/**
 * optional MarketTick market_tick = 118;
 * @return {?proto.vega.events.v1.MarketTick}
 */
proto.vega.events.v1.BusEvent.prototype.getMarketTick = function() {
  return /** @type{?proto.vega.events.v1.MarketTick} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.MarketTick, 118));
};


/**
 * @param {?proto.vega.events.v1.MarketTick|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setMarketTick = function(value) {
  return jspb.Message.setOneofWrapperField(this, 118, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearMarketTick = function() {
  return this.setMarketTick(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasMarketTick = function() {
  return jspb.Message.getField(this, 118) != null;
};


/**
 * optional vega.Withdrawal withdrawal = 119;
 * @return {?proto.vega.Withdrawal}
 */
proto.vega.events.v1.BusEvent.prototype.getWithdrawal = function() {
  return /** @type{?proto.vega.Withdrawal} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Withdrawal, 119));
};


/**
 * @param {?proto.vega.Withdrawal|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setWithdrawal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 119, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearWithdrawal = function() {
  return this.setWithdrawal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasWithdrawal = function() {
  return jspb.Message.getField(this, 119) != null;
};


/**
 * optional vega.Deposit deposit = 120;
 * @return {?proto.vega.Deposit}
 */
proto.vega.events.v1.BusEvent.prototype.getDeposit = function() {
  return /** @type{?proto.vega.Deposit} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Deposit, 120));
};


/**
 * @param {?proto.vega.Deposit|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setDeposit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 120, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearDeposit = function() {
  return this.setDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasDeposit = function() {
  return jspb.Message.getField(this, 120) != null;
};


/**
 * optional AuctionEvent auction = 121;
 * @return {?proto.vega.events.v1.AuctionEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getAuction = function() {
  return /** @type{?proto.vega.events.v1.AuctionEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.AuctionEvent, 121));
};


/**
 * @param {?proto.vega.events.v1.AuctionEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setAuction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 121, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearAuction = function() {
  return this.setAuction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasAuction = function() {
  return jspb.Message.getField(this, 121) != null;
};


/**
 * optional vega.RiskFactor risk_factor = 122;
 * @return {?proto.vega.RiskFactor}
 */
proto.vega.events.v1.BusEvent.prototype.getRiskFactor = function() {
  return /** @type{?proto.vega.RiskFactor} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.RiskFactor, 122));
};


/**
 * @param {?proto.vega.RiskFactor|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setRiskFactor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 122, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearRiskFactor = function() {
  return this.setRiskFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasRiskFactor = function() {
  return jspb.Message.getField(this, 122) != null;
};


/**
 * optional vega.NetworkParameter network_parameter = 123;
 * @return {?proto.vega.NetworkParameter}
 */
proto.vega.events.v1.BusEvent.prototype.getNetworkParameter = function() {
  return /** @type{?proto.vega.NetworkParameter} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.NetworkParameter, 123));
};


/**
 * @param {?proto.vega.NetworkParameter|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setNetworkParameter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 123, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearNetworkParameter = function() {
  return this.setNetworkParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasNetworkParameter = function() {
  return jspb.Message.getField(this, 123) != null;
};


/**
 * optional vega.LiquidityProvision liquidity_provision = 124;
 * @return {?proto.vega.LiquidityProvision}
 */
proto.vega.events.v1.BusEvent.prototype.getLiquidityProvision = function() {
  return /** @type{?proto.vega.LiquidityProvision} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.LiquidityProvision, 124));
};


/**
 * @param {?proto.vega.LiquidityProvision|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setLiquidityProvision = function(value) {
  return jspb.Message.setOneofWrapperField(this, 124, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearLiquidityProvision = function() {
  return this.setLiquidityProvision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasLiquidityProvision = function() {
  return jspb.Message.getField(this, 124) != null;
};


/**
 * optional vega.Market market_updated = 125;
 * @return {?proto.vega.Market}
 */
proto.vega.events.v1.BusEvent.prototype.getMarketUpdated = function() {
  return /** @type{?proto.vega.Market} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.Market, 125));
};


/**
 * @param {?proto.vega.Market|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setMarketUpdated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 125, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearMarketUpdated = function() {
  return this.setMarketUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasMarketUpdated = function() {
  return jspb.Message.getField(this, 125) != null;
};


/**
 * optional vega.OracleSpec oracle_spec = 126;
 * @return {?proto.vega.OracleSpec}
 */
proto.vega.events.v1.BusEvent.prototype.getOracleSpec = function() {
  return /** @type{?proto.vega.OracleSpec} */ (
    jspb.Message.getWrapperField(this, vega_oracle_pb.OracleSpec, 126));
};


/**
 * @param {?proto.vega.OracleSpec|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setOracleSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 126, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearOracleSpec = function() {
  return this.setOracleSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasOracleSpec = function() {
  return jspb.Message.getField(this, 126) != null;
};


/**
 * optional vega.OracleData oracle_data = 127;
 * @return {?proto.vega.OracleData}
 */
proto.vega.events.v1.BusEvent.prototype.getOracleData = function() {
  return /** @type{?proto.vega.OracleData} */ (
    jspb.Message.getWrapperField(this, vega_oracle_pb.OracleData, 127));
};


/**
 * @param {?proto.vega.OracleData|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setOracleData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 127, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearOracleData = function() {
  return this.setOracleData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasOracleData = function() {
  return jspb.Message.getField(this, 127) != null;
};


/**
 * optional DelegationBalanceEvent delegation_balance = 129;
 * @return {?proto.vega.events.v1.DelegationBalanceEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getDelegationBalance = function() {
  return /** @type{?proto.vega.events.v1.DelegationBalanceEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.DelegationBalanceEvent, 129));
};


/**
 * @param {?proto.vega.events.v1.DelegationBalanceEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setDelegationBalance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 129, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearDelegationBalance = function() {
  return this.setDelegationBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasDelegationBalance = function() {
  return jspb.Message.getField(this, 129) != null;
};


/**
 * optional ValidatorScoreEvent validator_score = 130;
 * @return {?proto.vega.events.v1.ValidatorScoreEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getValidatorScore = function() {
  return /** @type{?proto.vega.events.v1.ValidatorScoreEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ValidatorScoreEvent, 130));
};


/**
 * @param {?proto.vega.events.v1.ValidatorScoreEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setValidatorScore = function(value) {
  return jspb.Message.setOneofWrapperField(this, 130, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearValidatorScore = function() {
  return this.setValidatorScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasValidatorScore = function() {
  return jspb.Message.getField(this, 130) != null;
};


/**
 * optional EpochEvent epoch_event = 131;
 * @return {?proto.vega.events.v1.EpochEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getEpochEvent = function() {
  return /** @type{?proto.vega.events.v1.EpochEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.EpochEvent, 131));
};


/**
 * @param {?proto.vega.events.v1.EpochEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setEpochEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 131, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearEpochEvent = function() {
  return this.setEpochEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasEpochEvent = function() {
  return jspb.Message.getField(this, 131) != null;
};


/**
 * optional ValidatorUpdate validator_update = 132;
 * @return {?proto.vega.events.v1.ValidatorUpdate}
 */
proto.vega.events.v1.BusEvent.prototype.getValidatorUpdate = function() {
  return /** @type{?proto.vega.events.v1.ValidatorUpdate} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ValidatorUpdate, 132));
};


/**
 * @param {?proto.vega.events.v1.ValidatorUpdate|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setValidatorUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 132, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearValidatorUpdate = function() {
  return this.setValidatorUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasValidatorUpdate = function() {
  return jspb.Message.getField(this, 132) != null;
};


/**
 * optional StakeLinking stake_linking = 133;
 * @return {?proto.vega.events.v1.StakeLinking}
 */
proto.vega.events.v1.BusEvent.prototype.getStakeLinking = function() {
  return /** @type{?proto.vega.events.v1.StakeLinking} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.StakeLinking, 133));
};


/**
 * @param {?proto.vega.events.v1.StakeLinking|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setStakeLinking = function(value) {
  return jspb.Message.setOneofWrapperField(this, 133, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearStakeLinking = function() {
  return this.setStakeLinking(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasStakeLinking = function() {
  return jspb.Message.getField(this, 133) != null;
};


/**
 * optional RewardPayoutEvent reward_payout = 134;
 * @return {?proto.vega.events.v1.RewardPayoutEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getRewardPayout = function() {
  return /** @type{?proto.vega.events.v1.RewardPayoutEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.RewardPayoutEvent, 134));
};


/**
 * @param {?proto.vega.events.v1.RewardPayoutEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setRewardPayout = function(value) {
  return jspb.Message.setOneofWrapperField(this, 134, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearRewardPayout = function() {
  return this.setRewardPayout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasRewardPayout = function() {
  return jspb.Message.getField(this, 134) != null;
};


/**
 * optional CheckpointEvent checkpoint = 135;
 * @return {?proto.vega.events.v1.CheckpointEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getCheckpoint = function() {
  return /** @type{?proto.vega.events.v1.CheckpointEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.CheckpointEvent, 135));
};


/**
 * @param {?proto.vega.events.v1.CheckpointEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setCheckpoint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 135, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearCheckpoint = function() {
  return this.setCheckpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasCheckpoint = function() {
  return jspb.Message.getField(this, 135) != null;
};


/**
 * optional KeyRotation key_rotation = 136;
 * @return {?proto.vega.events.v1.KeyRotation}
 */
proto.vega.events.v1.BusEvent.prototype.getKeyRotation = function() {
  return /** @type{?proto.vega.events.v1.KeyRotation} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.KeyRotation, 136));
};


/**
 * @param {?proto.vega.events.v1.KeyRotation|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setKeyRotation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 136, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearKeyRotation = function() {
  return this.setKeyRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasKeyRotation = function() {
  return jspb.Message.getField(this, 136) != null;
};


/**
 * optional StateVar state_var = 137;
 * @return {?proto.vega.events.v1.StateVar}
 */
proto.vega.events.v1.BusEvent.prototype.getStateVar = function() {
  return /** @type{?proto.vega.events.v1.StateVar} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.StateVar, 137));
};


/**
 * @param {?proto.vega.events.v1.StateVar|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setStateVar = function(value) {
  return jspb.Message.setOneofWrapperField(this, 137, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearStateVar = function() {
  return this.setStateVar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasStateVar = function() {
  return jspb.Message.getField(this, 137) != null;
};


/**
 * optional vega.NetworkLimits network_limits = 138;
 * @return {?proto.vega.NetworkLimits}
 */
proto.vega.events.v1.BusEvent.prototype.getNetworkLimits = function() {
  return /** @type{?proto.vega.NetworkLimits} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.NetworkLimits, 138));
};


/**
 * @param {?proto.vega.NetworkLimits|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setNetworkLimits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 138, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearNetworkLimits = function() {
  return this.setNetworkLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasNetworkLimits = function() {
  return jspb.Message.getField(this, 138) != null;
};


/**
 * optional Transfer transfer = 139;
 * @return {?proto.vega.events.v1.Transfer}
 */
proto.vega.events.v1.BusEvent.prototype.getTransfer = function() {
  return /** @type{?proto.vega.events.v1.Transfer} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.Transfer, 139));
};


/**
 * @param {?proto.vega.events.v1.Transfer|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 139, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 139) != null;
};


/**
 * optional ValidatorRankingEvent ranking_event = 140;
 * @return {?proto.vega.events.v1.ValidatorRankingEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getRankingEvent = function() {
  return /** @type{?proto.vega.events.v1.ValidatorRankingEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ValidatorRankingEvent, 140));
};


/**
 * @param {?proto.vega.events.v1.ValidatorRankingEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setRankingEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 140, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearRankingEvent = function() {
  return this.setRankingEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasRankingEvent = function() {
  return jspb.Message.getField(this, 140) != null;
};


/**
 * optional ERC20MultiSigSignerEvent erc20_multisig_signer_event = 141;
 * @return {?proto.vega.events.v1.ERC20MultiSigSignerEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getErc20MultisigSignerEvent = function() {
  return /** @type{?proto.vega.events.v1.ERC20MultiSigSignerEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ERC20MultiSigSignerEvent, 141));
};


/**
 * @param {?proto.vega.events.v1.ERC20MultiSigSignerEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setErc20MultisigSignerEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 141, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearErc20MultisigSignerEvent = function() {
  return this.setErc20MultisigSignerEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasErc20MultisigSignerEvent = function() {
  return jspb.Message.getField(this, 141) != null;
};


/**
 * optional ERC20MultiSigThresholdSetEvent erc20_multisig_set_threshold_event = 142;
 * @return {?proto.vega.events.v1.ERC20MultiSigThresholdSetEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getErc20MultisigSetThresholdEvent = function() {
  return /** @type{?proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ERC20MultiSigThresholdSetEvent, 142));
};


/**
 * @param {?proto.vega.events.v1.ERC20MultiSigThresholdSetEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setErc20MultisigSetThresholdEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 142, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearErc20MultisigSetThresholdEvent = function() {
  return this.setErc20MultisigSetThresholdEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasErc20MultisigSetThresholdEvent = function() {
  return jspb.Message.getField(this, 142) != null;
};


/**
 * optional ERC20MultiSigSignerAdded erc20_multisig_signer_added = 143;
 * @return {?proto.vega.events.v1.ERC20MultiSigSignerAdded}
 */
proto.vega.events.v1.BusEvent.prototype.getErc20MultisigSignerAdded = function() {
  return /** @type{?proto.vega.events.v1.ERC20MultiSigSignerAdded} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ERC20MultiSigSignerAdded, 143));
};


/**
 * @param {?proto.vega.events.v1.ERC20MultiSigSignerAdded|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setErc20MultisigSignerAdded = function(value) {
  return jspb.Message.setOneofWrapperField(this, 143, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearErc20MultisigSignerAdded = function() {
  return this.setErc20MultisigSignerAdded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasErc20MultisigSignerAdded = function() {
  return jspb.Message.getField(this, 143) != null;
};


/**
 * optional ERC20MultiSigSignerRemoved erc20_multisig_signer_removed = 144;
 * @return {?proto.vega.events.v1.ERC20MultiSigSignerRemoved}
 */
proto.vega.events.v1.BusEvent.prototype.getErc20MultisigSignerRemoved = function() {
  return /** @type{?proto.vega.events.v1.ERC20MultiSigSignerRemoved} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ERC20MultiSigSignerRemoved, 144));
};


/**
 * @param {?proto.vega.events.v1.ERC20MultiSigSignerRemoved|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setErc20MultisigSignerRemoved = function(value) {
  return jspb.Message.setOneofWrapperField(this, 144, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearErc20MultisigSignerRemoved = function() {
  return this.setErc20MultisigSignerRemoved(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasErc20MultisigSignerRemoved = function() {
  return jspb.Message.getField(this, 144) != null;
};


/**
 * optional PositionStateEvent position_state_event = 145;
 * @return {?proto.vega.events.v1.PositionStateEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getPositionStateEvent = function() {
  return /** @type{?proto.vega.events.v1.PositionStateEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.PositionStateEvent, 145));
};


/**
 * @param {?proto.vega.events.v1.PositionStateEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setPositionStateEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 145, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearPositionStateEvent = function() {
  return this.setPositionStateEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasPositionStateEvent = function() {
  return jspb.Message.getField(this, 145) != null;
};


/**
 * optional EthereumKeyRotation ethereum_key_rotation = 146;
 * @return {?proto.vega.events.v1.EthereumKeyRotation}
 */
proto.vega.events.v1.BusEvent.prototype.getEthereumKeyRotation = function() {
  return /** @type{?proto.vega.events.v1.EthereumKeyRotation} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.EthereumKeyRotation, 146));
};


/**
 * @param {?proto.vega.events.v1.EthereumKeyRotation|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setEthereumKeyRotation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 146, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearEthereumKeyRotation = function() {
  return this.setEthereumKeyRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasEthereumKeyRotation = function() {
  return jspb.Message.getField(this, 146) != null;
};


/**
 * optional ProtocolUpgradeEvent protocol_upgrade_event = 147;
 * @return {?proto.vega.events.v1.ProtocolUpgradeEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getProtocolUpgradeEvent = function() {
  return /** @type{?proto.vega.events.v1.ProtocolUpgradeEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ProtocolUpgradeEvent, 147));
};


/**
 * @param {?proto.vega.events.v1.ProtocolUpgradeEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setProtocolUpgradeEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 147, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearProtocolUpgradeEvent = function() {
  return this.setProtocolUpgradeEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasProtocolUpgradeEvent = function() {
  return jspb.Message.getField(this, 147) != null;
};


/**
 * optional BeginBlock begin_block = 148;
 * @return {?proto.vega.events.v1.BeginBlock}
 */
proto.vega.events.v1.BusEvent.prototype.getBeginBlock = function() {
  return /** @type{?proto.vega.events.v1.BeginBlock} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.BeginBlock, 148));
};


/**
 * @param {?proto.vega.events.v1.BeginBlock|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setBeginBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 148, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearBeginBlock = function() {
  return this.setBeginBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasBeginBlock = function() {
  return jspb.Message.getField(this, 148) != null;
};


/**
 * optional EndBlock end_block = 149;
 * @return {?proto.vega.events.v1.EndBlock}
 */
proto.vega.events.v1.BusEvent.prototype.getEndBlock = function() {
  return /** @type{?proto.vega.events.v1.EndBlock} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.EndBlock, 149));
};


/**
 * @param {?proto.vega.events.v1.EndBlock|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setEndBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 149, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearEndBlock = function() {
  return this.setEndBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasEndBlock = function() {
  return jspb.Message.getField(this, 149) != null;
};


/**
 * optional ProtocolUpgradeStarted protocol_upgrade_started = 150;
 * @return {?proto.vega.events.v1.ProtocolUpgradeStarted}
 */
proto.vega.events.v1.BusEvent.prototype.getProtocolUpgradeStarted = function() {
  return /** @type{?proto.vega.events.v1.ProtocolUpgradeStarted} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ProtocolUpgradeStarted, 150));
};


/**
 * @param {?proto.vega.events.v1.ProtocolUpgradeStarted|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setProtocolUpgradeStarted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 150, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearProtocolUpgradeStarted = function() {
  return this.setProtocolUpgradeStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasProtocolUpgradeStarted = function() {
  return jspb.Message.getField(this, 150) != null;
};


/**
 * optional SettleMarket settle_market = 151;
 * @return {?proto.vega.events.v1.SettleMarket}
 */
proto.vega.events.v1.BusEvent.prototype.getSettleMarket = function() {
  return /** @type{?proto.vega.events.v1.SettleMarket} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.SettleMarket, 151));
};


/**
 * @param {?proto.vega.events.v1.SettleMarket|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setSettleMarket = function(value) {
  return jspb.Message.setOneofWrapperField(this, 151, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearSettleMarket = function() {
  return this.setSettleMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasSettleMarket = function() {
  return jspb.Message.getField(this, 151) != null;
};


/**
 * optional TransactionResult transaction_result = 152;
 * @return {?proto.vega.events.v1.TransactionResult}
 */
proto.vega.events.v1.BusEvent.prototype.getTransactionResult = function() {
  return /** @type{?proto.vega.events.v1.TransactionResult} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.TransactionResult, 152));
};


/**
 * @param {?proto.vega.events.v1.TransactionResult|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setTransactionResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 152, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearTransactionResult = function() {
  return this.setTransactionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasTransactionResult = function() {
  return jspb.Message.getField(this, 152) != null;
};


/**
 * optional CoreSnapshotData core_snapshot_event = 153;
 * @return {?proto.vega.events.v1.CoreSnapshotData}
 */
proto.vega.events.v1.BusEvent.prototype.getCoreSnapshotEvent = function() {
  return /** @type{?proto.vega.events.v1.CoreSnapshotData} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.CoreSnapshotData, 153));
};


/**
 * @param {?proto.vega.events.v1.CoreSnapshotData|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setCoreSnapshotEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 153, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearCoreSnapshotEvent = function() {
  return this.setCoreSnapshotEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasCoreSnapshotEvent = function() {
  return jspb.Message.getField(this, 153) != null;
};


/**
 * optional ProtocolUpgradeDataNodeReady protocol_upgrade_data_node_ready = 154;
 * @return {?proto.vega.events.v1.ProtocolUpgradeDataNodeReady}
 */
proto.vega.events.v1.BusEvent.prototype.getProtocolUpgradeDataNodeReady = function() {
  return /** @type{?proto.vega.events.v1.ProtocolUpgradeDataNodeReady} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.ProtocolUpgradeDataNodeReady, 154));
};


/**
 * @param {?proto.vega.events.v1.ProtocolUpgradeDataNodeReady|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setProtocolUpgradeDataNodeReady = function(value) {
  return jspb.Message.setOneofWrapperField(this, 154, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearProtocolUpgradeDataNodeReady = function() {
  return this.setProtocolUpgradeDataNodeReady(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasProtocolUpgradeDataNodeReady = function() {
  return jspb.Message.getField(this, 154) != null;
};


/**
 * optional MarketEvent market = 1001;
 * @return {?proto.vega.events.v1.MarketEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getMarket = function() {
  return /** @type{?proto.vega.events.v1.MarketEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.MarketEvent, 1001));
};


/**
 * @param {?proto.vega.events.v1.MarketEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setMarket = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1001, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1001) != null;
};


/**
 * optional TxErrorEvent tx_err_event = 2001;
 * @return {?proto.vega.events.v1.TxErrorEvent}
 */
proto.vega.events.v1.BusEvent.prototype.getTxErrEvent = function() {
  return /** @type{?proto.vega.events.v1.TxErrorEvent} */ (
    jspb.Message.getWrapperField(this, proto.vega.events.v1.TxErrorEvent, 2001));
};


/**
 * @param {?proto.vega.events.v1.TxErrorEvent|undefined} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
*/
proto.vega.events.v1.BusEvent.prototype.setTxErrEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2001, proto.vega.events.v1.BusEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.clearTxErrEvent = function() {
  return this.setTxErrEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.events.v1.BusEvent.prototype.hasTxErrEvent = function() {
  return jspb.Message.getField(this, 2001) != null;
};


/**
 * optional uint32 version = 4;
 * @return {number}
 */
proto.vega.events.v1.BusEvent.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string chain_id = 5;
 * @return {string}
 */
proto.vega.events.v1.BusEvent.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string tx_hash = 6;
 * @return {string}
 */
proto.vega.events.v1.BusEvent.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.events.v1.BusEvent} returns this
 */
proto.vega.events.v1.BusEvent.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.vega.events.v1.ProtocolUpgradeProposalStatus = {
  PROTOCOL_UPGRADE_PROPOSAL_STATUS_UNSPECIFIED: 0,
  PROTOCOL_UPGRADE_PROPOSAL_STATUS_PENDING: 1,
  PROTOCOL_UPGRADE_PROPOSAL_STATUS_APPROVED: 2,
  PROTOCOL_UPGRADE_PROPOSAL_STATUS_REJECTED: 3
};

/**
 * @enum {number}
 */
proto.vega.events.v1.BusEventType = {
  BUS_EVENT_TYPE_UNSPECIFIED: 0,
  BUS_EVENT_TYPE_ALL: 1,
  BUS_EVENT_TYPE_TIME_UPDATE: 2,
  BUS_EVENT_TYPE_LEDGER_MOVEMENTS: 3,
  BUS_EVENT_TYPE_POSITION_RESOLUTION: 4,
  BUS_EVENT_TYPE_ORDER: 5,
  BUS_EVENT_TYPE_ACCOUNT: 6,
  BUS_EVENT_TYPE_PARTY: 7,
  BUS_EVENT_TYPE_TRADE: 8,
  BUS_EVENT_TYPE_MARGIN_LEVELS: 9,
  BUS_EVENT_TYPE_PROPOSAL: 10,
  BUS_EVENT_TYPE_VOTE: 11,
  BUS_EVENT_TYPE_MARKET_DATA: 12,
  BUS_EVENT_TYPE_NODE_SIGNATURE: 13,
  BUS_EVENT_TYPE_LOSS_SOCIALIZATION: 14,
  BUS_EVENT_TYPE_SETTLE_POSITION: 15,
  BUS_EVENT_TYPE_SETTLE_DISTRESSED: 16,
  BUS_EVENT_TYPE_MARKET_CREATED: 17,
  BUS_EVENT_TYPE_ASSET: 18,
  BUS_EVENT_TYPE_MARKET_TICK: 19,
  BUS_EVENT_TYPE_WITHDRAWAL: 20,
  BUS_EVENT_TYPE_DEPOSIT: 21,
  BUS_EVENT_TYPE_AUCTION: 22,
  BUS_EVENT_TYPE_RISK_FACTOR: 23,
  BUS_EVENT_TYPE_NETWORK_PARAMETER: 24,
  BUS_EVENT_TYPE_LIQUIDITY_PROVISION: 25,
  BUS_EVENT_TYPE_MARKET_UPDATED: 26,
  BUS_EVENT_TYPE_ORACLE_SPEC: 27,
  BUS_EVENT_TYPE_ORACLE_DATA: 28,
  BUS_EVENT_TYPE_DELEGATION_BALANCE: 29,
  BUS_EVENT_TYPE_VALIDATOR_SCORE: 30,
  BUS_EVENT_TYPE_EPOCH_UPDATE: 31,
  BUS_EVENT_TYPE_VALIDATOR_UPDATE: 32,
  BUS_EVENT_TYPE_STAKE_LINKING: 33,
  BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT: 34,
  BUS_EVENT_TYPE_CHECKPOINT: 35,
  BUS_EVENT_TYPE_STREAM_START: 36,
  BUS_EVENT_TYPE_KEY_ROTATION: 37,
  BUS_EVENT_TYPE_STATE_VAR: 38,
  BUS_EVENT_TYPE_NETWORK_LIMITS: 39,
  BUS_EVENT_TYPE_TRANSFER: 40,
  BUS_EVENT_TYPE_VALIDATOR_RANKING: 41,
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT: 42,
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD: 43,
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED: 44,
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED: 45,
  BUS_EVENT_TYPE_POSITION_STATE: 46,
  BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION: 47,
  BUS_EVENT_TYPE_PROTOCOL_UPGRADE_PROPOSAL: 48,
  BUS_EVENT_TYPE_BEGIN_BLOCK: 49,
  BUS_EVENT_TYPE_END_BLOCK: 50,
  BUS_EVENT_TYPE_PROTOCOL_UPGRADE_STARTED: 51,
  BUS_EVENT_TYPE_SETTLE_MARKET: 52,
  BUS_EVENT_TYPE_TRANSACTION_RESULT: 53,
  BUS_EVENT_TYPE_SNAPSHOT_TAKEN: 54,
  BUS_EVENT_TYPE_PROTOCOL_UPGRADE_DATA_NODE_READY: 55,
  BUS_EVENT_TYPE_MARKET: 101,
  BUS_EVENT_TYPE_TX_ERROR: 201
};

goog.object.extend(exports, proto.vega.events.v1);
