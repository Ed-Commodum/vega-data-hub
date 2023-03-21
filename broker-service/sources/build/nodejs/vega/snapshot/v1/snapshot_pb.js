// source: vega/snapshot/v1/snapshot.proto
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

var vega_vega_pb = require('../../../vega/vega_pb.js');
goog.object.extend(proto, vega_vega_pb);
var vega_markets_pb = require('../../../vega/markets_pb.js');
goog.object.extend(proto, vega_markets_pb);
var vega_assets_pb = require('../../../vega/assets_pb.js');
goog.object.extend(proto, vega_assets_pb);
var vega_chain_events_pb = require('../../../vega/chain_events_pb.js');
goog.object.extend(proto, vega_chain_events_pb);
var vega_governance_pb = require('../../../vega/governance_pb.js');
goog.object.extend(proto, vega_governance_pb);
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');
goog.object.extend(proto, vega_events_v1_events_pb);
var vega_checkpoint_v1_checkpoint_pb = require('../../../vega/checkpoint/v1/checkpoint_pb.js');
goog.object.extend(proto, vega_checkpoint_v1_checkpoint_pb);
var vega_data_v1_data_pb = require('../../../vega/data/v1/data_pb.js');
goog.object.extend(proto, vega_data_v1_data_pb);
goog.exportSymbol('proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ActiveAssets', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.AppState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.AssetAction', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.AuctionState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingAssetActions', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingBridgeState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingDeposits', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingRecurringTransfers', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingScheduledTransfers', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingSeen', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BankingWithdrawals', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BannedParty', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.BlockRejectStats', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Checkpoint', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Chunk', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.CollateralAccounts', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.CollateralAssets', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.CurrentPrice', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.DecimalMap', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.DelegationActive', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.DelegationAuto', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.DelegationLastReconciliationTime', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.DelegationPending', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Deposit', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ERC20MultiSigTopologyPending', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.EpochState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.EquityShare', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.EquityShareLP', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.EventForwarder', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ExecutionMarkets', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.FeeSplitter', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.FloatingPointConsensus', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.FloatingPointValidatorResult', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Format', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.GovernanceActive', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.GovernanceEnacted', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.GovernanceNode', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.HeartbeatTracker', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LastSettledPosition', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LimitState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityParameters', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityPartiesOrders', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityPendingProvisions', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityPriceProbabilityPair', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityProvisions', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityScore', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityScores', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquiditySupplied', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.LiquidityTarget', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Market', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.MarketPositions', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.MarketTracker', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.MatchingBook', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Metadata', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.NetParams', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.NextTimeTrigger', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.NodeHash', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Notary', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.NotarySigs', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.OracleData', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.OracleDataBatch', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.OracleDataPair', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PartyOrders', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PartyProposalVoteCount', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PartyTokenBalance', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PastPrice', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Payload', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Payload.DataCase', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PeggedOrders', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PendingAssetUpdates', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PendingAssets', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PendingERC20MultisigControlSignature', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PendingEthereumKeyRotation', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PendingKeyRotation', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PerformanceStats', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Position', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PriceBound', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PriceMonitor', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PriceRange', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PriceRangeCache', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.PriceVolume', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProofOfWork', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProofOfWorkBlockState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProofOfWorkParams', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProofOfWorkState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProposalData', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ProtocolUpgradeProposals', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Resource', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.RewardsPartyAmount', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.RewardsPayout', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.RewardsPendingPayouts', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ScheduledRewardsPayout', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.SettlementState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.SettlementTrade', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.SignerEventsPerAddress', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.SimpleSpamPolicy', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Snapshot', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.SpamPartyTransactionCount', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.StakeVerifierDeposited', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.StakeVerifierPending', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.StakeVerifierRemoved', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.StakingAccount', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.StakingAccounts', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.StateVarInternalState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.TimePrice', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.TimestampedOpenInterest', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ToplogySignatures', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Topology', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.TransactionsAtHeight', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.TxRef', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ValidatorPerformance', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.ValidatorState', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.VoteSpamPolicy', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Withdrawal', null, global);
goog.exportSymbol('proto.vega.snapshot.v1.Witness', null, global);
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
proto.vega.snapshot.v1.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Snapshot.displayName = 'proto.vega.snapshot.v1.Snapshot';
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
proto.vega.snapshot.v1.NodeHash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.NodeHash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.NodeHash.displayName = 'proto.vega.snapshot.v1.NodeHash';
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
proto.vega.snapshot.v1.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Metadata.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Metadata.displayName = 'proto.vega.snapshot.v1.Metadata';
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
proto.vega.snapshot.v1.Chunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Chunk.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Chunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Chunk.displayName = 'proto.vega.snapshot.v1.Chunk';
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
proto.vega.snapshot.v1.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.snapshot.v1.Payload.oneofGroups_);
};
goog.inherits(proto.vega.snapshot.v1.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Payload.displayName = 'proto.vega.snapshot.v1.Payload';
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
proto.vega.snapshot.v1.TimestampedOpenInterest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.TimestampedOpenInterest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.TimestampedOpenInterest.displayName = 'proto.vega.snapshot.v1.TimestampedOpenInterest';
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
proto.vega.snapshot.v1.LiquidityTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquidityTarget.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityTarget.displayName = 'proto.vega.snapshot.v1.LiquidityTarget';
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
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityPriceProbabilityPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.displayName = 'proto.vega.snapshot.v1.LiquidityPriceProbabilityPair';
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
proto.vega.snapshot.v1.LiquiditySupplied = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquiditySupplied.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquiditySupplied, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquiditySupplied.displayName = 'proto.vega.snapshot.v1.LiquiditySupplied';
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
proto.vega.snapshot.v1.OracleDataBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.OracleDataBatch.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.OracleDataBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.OracleDataBatch.displayName = 'proto.vega.snapshot.v1.OracleDataBatch';
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
proto.vega.snapshot.v1.OracleData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.OracleData.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.OracleData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.OracleData.displayName = 'proto.vega.snapshot.v1.OracleData';
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
proto.vega.snapshot.v1.OracleDataPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.OracleDataPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.OracleDataPair.displayName = 'proto.vega.snapshot.v1.OracleDataPair';
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
proto.vega.snapshot.v1.Witness = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Witness.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Witness, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Witness.displayName = 'proto.vega.snapshot.v1.Witness';
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
proto.vega.snapshot.v1.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Resource.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Resource.displayName = 'proto.vega.snapshot.v1.Resource';
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
proto.vega.snapshot.v1.EventForwarder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.EventForwarder.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.EventForwarder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.EventForwarder.displayName = 'proto.vega.snapshot.v1.EventForwarder';
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
proto.vega.snapshot.v1.CollateralAccounts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.CollateralAccounts.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.CollateralAccounts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.CollateralAccounts.displayName = 'proto.vega.snapshot.v1.CollateralAccounts';
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
proto.vega.snapshot.v1.CollateralAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.CollateralAssets.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.CollateralAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.CollateralAssets.displayName = 'proto.vega.snapshot.v1.CollateralAssets';
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
proto.vega.snapshot.v1.ActiveAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ActiveAssets.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ActiveAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ActiveAssets.displayName = 'proto.vega.snapshot.v1.ActiveAssets';
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
proto.vega.snapshot.v1.PendingAssets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.PendingAssets.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.PendingAssets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PendingAssets.displayName = 'proto.vega.snapshot.v1.PendingAssets';
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
proto.vega.snapshot.v1.PendingAssetUpdates = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.PendingAssetUpdates.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.PendingAssetUpdates, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PendingAssetUpdates.displayName = 'proto.vega.snapshot.v1.PendingAssetUpdates';
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
proto.vega.snapshot.v1.Withdrawal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.Withdrawal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Withdrawal.displayName = 'proto.vega.snapshot.v1.Withdrawal';
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
proto.vega.snapshot.v1.Deposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.Deposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Deposit.displayName = 'proto.vega.snapshot.v1.Deposit';
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
proto.vega.snapshot.v1.TxRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.TxRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.TxRef.displayName = 'proto.vega.snapshot.v1.TxRef';
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
proto.vega.snapshot.v1.AssetAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.AssetAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.AssetAction.displayName = 'proto.vega.snapshot.v1.AssetAction';
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
proto.vega.snapshot.v1.BankingWithdrawals = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.BankingWithdrawals.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingWithdrawals, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingWithdrawals.displayName = 'proto.vega.snapshot.v1.BankingWithdrawals';
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
proto.vega.snapshot.v1.BankingDeposits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.BankingDeposits.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingDeposits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingDeposits.displayName = 'proto.vega.snapshot.v1.BankingDeposits';
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
proto.vega.snapshot.v1.BankingSeen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.BankingSeen.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingSeen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingSeen.displayName = 'proto.vega.snapshot.v1.BankingSeen';
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
proto.vega.snapshot.v1.BankingAssetActions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.BankingAssetActions.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingAssetActions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingAssetActions.displayName = 'proto.vega.snapshot.v1.BankingAssetActions';
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
proto.vega.snapshot.v1.BankingRecurringTransfers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingRecurringTransfers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingRecurringTransfers.displayName = 'proto.vega.snapshot.v1.BankingRecurringTransfers';
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
proto.vega.snapshot.v1.BankingScheduledTransfers = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.BankingScheduledTransfers.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingScheduledTransfers, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingScheduledTransfers.displayName = 'proto.vega.snapshot.v1.BankingScheduledTransfers';
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
proto.vega.snapshot.v1.BankingBridgeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.BankingBridgeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BankingBridgeState.displayName = 'proto.vega.snapshot.v1.BankingBridgeState';
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
proto.vega.snapshot.v1.Checkpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.Checkpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Checkpoint.displayName = 'proto.vega.snapshot.v1.Checkpoint';
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
proto.vega.snapshot.v1.DelegationLastReconciliationTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.DelegationLastReconciliationTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.DelegationLastReconciliationTime.displayName = 'proto.vega.snapshot.v1.DelegationLastReconciliationTime';
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
proto.vega.snapshot.v1.DelegationActive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.DelegationActive.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.DelegationActive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.DelegationActive.displayName = 'proto.vega.snapshot.v1.DelegationActive';
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
proto.vega.snapshot.v1.DelegationPending = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.DelegationPending.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.DelegationPending, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.DelegationPending.displayName = 'proto.vega.snapshot.v1.DelegationPending';
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
proto.vega.snapshot.v1.DelegationAuto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.DelegationAuto.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.DelegationAuto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.DelegationAuto.displayName = 'proto.vega.snapshot.v1.DelegationAuto';
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
proto.vega.snapshot.v1.ProposalData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ProposalData.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ProposalData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProposalData.displayName = 'proto.vega.snapshot.v1.ProposalData';
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
proto.vega.snapshot.v1.GovernanceEnacted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.GovernanceEnacted.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.GovernanceEnacted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.GovernanceEnacted.displayName = 'proto.vega.snapshot.v1.GovernanceEnacted';
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
proto.vega.snapshot.v1.GovernanceActive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.GovernanceActive.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.GovernanceActive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.GovernanceActive.displayName = 'proto.vega.snapshot.v1.GovernanceActive';
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
proto.vega.snapshot.v1.GovernanceNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.GovernanceNode.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.GovernanceNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.GovernanceNode.displayName = 'proto.vega.snapshot.v1.GovernanceNode';
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
proto.vega.snapshot.v1.StakingAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.StakingAccount.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.StakingAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.StakingAccount.displayName = 'proto.vega.snapshot.v1.StakingAccount';
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
proto.vega.snapshot.v1.StakingAccounts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.StakingAccounts.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.StakingAccounts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.StakingAccounts.displayName = 'proto.vega.snapshot.v1.StakingAccounts';
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
proto.vega.snapshot.v1.MatchingBook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.MatchingBook.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.MatchingBook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.MatchingBook.displayName = 'proto.vega.snapshot.v1.MatchingBook';
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
proto.vega.snapshot.v1.NetParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.NetParams.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.NetParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.NetParams.displayName = 'proto.vega.snapshot.v1.NetParams';
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
proto.vega.snapshot.v1.DecimalMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.DecimalMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.DecimalMap.displayName = 'proto.vega.snapshot.v1.DecimalMap';
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
proto.vega.snapshot.v1.TimePrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.TimePrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.TimePrice.displayName = 'proto.vega.snapshot.v1.TimePrice';
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
proto.vega.snapshot.v1.PriceVolume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PriceVolume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PriceVolume.displayName = 'proto.vega.snapshot.v1.PriceVolume';
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
proto.vega.snapshot.v1.PriceRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PriceRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PriceRange.displayName = 'proto.vega.snapshot.v1.PriceRange';
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
proto.vega.snapshot.v1.PriceBound = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PriceBound, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PriceBound.displayName = 'proto.vega.snapshot.v1.PriceBound';
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
proto.vega.snapshot.v1.PriceRangeCache = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PriceRangeCache, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PriceRangeCache.displayName = 'proto.vega.snapshot.v1.PriceRangeCache';
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
proto.vega.snapshot.v1.CurrentPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.CurrentPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.CurrentPrice.displayName = 'proto.vega.snapshot.v1.CurrentPrice';
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
proto.vega.snapshot.v1.PastPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PastPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PastPrice.displayName = 'proto.vega.snapshot.v1.PastPrice';
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
proto.vega.snapshot.v1.PriceMonitor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.PriceMonitor.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.PriceMonitor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PriceMonitor.displayName = 'proto.vega.snapshot.v1.PriceMonitor';
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
proto.vega.snapshot.v1.AuctionState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.AuctionState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.AuctionState.displayName = 'proto.vega.snapshot.v1.AuctionState';
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
proto.vega.snapshot.v1.EquityShareLP = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.EquityShareLP, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.EquityShareLP.displayName = 'proto.vega.snapshot.v1.EquityShareLP';
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
proto.vega.snapshot.v1.EquityShare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.EquityShare.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.EquityShare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.EquityShare.displayName = 'proto.vega.snapshot.v1.EquityShare';
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
proto.vega.snapshot.v1.FeeSplitter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.FeeSplitter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.FeeSplitter.displayName = 'proto.vega.snapshot.v1.FeeSplitter';
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
proto.vega.snapshot.v1.Market = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Market.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Market, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Market.displayName = 'proto.vega.snapshot.v1.Market';
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
proto.vega.snapshot.v1.PeggedOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.PeggedOrders.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.PeggedOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PeggedOrders.displayName = 'proto.vega.snapshot.v1.PeggedOrders';
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
proto.vega.snapshot.v1.ExecutionMarkets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ExecutionMarkets.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ExecutionMarkets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ExecutionMarkets.displayName = 'proto.vega.snapshot.v1.ExecutionMarkets';
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
proto.vega.snapshot.v1.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Position.displayName = 'proto.vega.snapshot.v1.Position';
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
proto.vega.snapshot.v1.MarketPositions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.MarketPositions.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.MarketPositions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.MarketPositions.displayName = 'proto.vega.snapshot.v1.MarketPositions';
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
proto.vega.snapshot.v1.SettlementState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.SettlementState.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.SettlementState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.SettlementState.displayName = 'proto.vega.snapshot.v1.SettlementState';
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
proto.vega.snapshot.v1.LastSettledPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.LastSettledPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LastSettledPosition.displayName = 'proto.vega.snapshot.v1.LastSettledPosition';
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
proto.vega.snapshot.v1.SettlementTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.SettlementTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.SettlementTrade.displayName = 'proto.vega.snapshot.v1.SettlementTrade';
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
proto.vega.snapshot.v1.AppState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.AppState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.AppState.displayName = 'proto.vega.snapshot.v1.AppState';
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
proto.vega.snapshot.v1.EpochState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.EpochState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.EpochState.displayName = 'proto.vega.snapshot.v1.EpochState';
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
proto.vega.snapshot.v1.RewardsPendingPayouts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.RewardsPendingPayouts.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.RewardsPendingPayouts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.RewardsPendingPayouts.displayName = 'proto.vega.snapshot.v1.RewardsPendingPayouts';
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
proto.vega.snapshot.v1.ScheduledRewardsPayout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ScheduledRewardsPayout.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ScheduledRewardsPayout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ScheduledRewardsPayout.displayName = 'proto.vega.snapshot.v1.ScheduledRewardsPayout';
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
proto.vega.snapshot.v1.RewardsPayout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.RewardsPayout.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.RewardsPayout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.RewardsPayout.displayName = 'proto.vega.snapshot.v1.RewardsPayout';
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
proto.vega.snapshot.v1.RewardsPartyAmount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.RewardsPartyAmount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.RewardsPartyAmount.displayName = 'proto.vega.snapshot.v1.RewardsPartyAmount';
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
proto.vega.snapshot.v1.LimitState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.LimitState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LimitState.displayName = 'proto.vega.snapshot.v1.LimitState';
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
proto.vega.snapshot.v1.VoteSpamPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.VoteSpamPolicy.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.VoteSpamPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.VoteSpamPolicy.displayName = 'proto.vega.snapshot.v1.VoteSpamPolicy';
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
proto.vega.snapshot.v1.PartyProposalVoteCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PartyProposalVoteCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PartyProposalVoteCount.displayName = 'proto.vega.snapshot.v1.PartyProposalVoteCount';
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
proto.vega.snapshot.v1.PartyTokenBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PartyTokenBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PartyTokenBalance.displayName = 'proto.vega.snapshot.v1.PartyTokenBalance';
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
proto.vega.snapshot.v1.BlockRejectStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.BlockRejectStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BlockRejectStats.displayName = 'proto.vega.snapshot.v1.BlockRejectStats';
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
proto.vega.snapshot.v1.SpamPartyTransactionCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.SpamPartyTransactionCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.SpamPartyTransactionCount.displayName = 'proto.vega.snapshot.v1.SpamPartyTransactionCount';
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
proto.vega.snapshot.v1.SimpleSpamPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.SimpleSpamPolicy.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.SimpleSpamPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.SimpleSpamPolicy.displayName = 'proto.vega.snapshot.v1.SimpleSpamPolicy';
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
proto.vega.snapshot.v1.NotarySigs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.NotarySigs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.NotarySigs.displayName = 'proto.vega.snapshot.v1.NotarySigs';
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
proto.vega.snapshot.v1.Notary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Notary.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Notary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Notary.displayName = 'proto.vega.snapshot.v1.Notary';
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
proto.vega.snapshot.v1.StakeVerifierDeposited = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.StakeVerifierDeposited.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.StakeVerifierDeposited, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.StakeVerifierDeposited.displayName = 'proto.vega.snapshot.v1.StakeVerifierDeposited';
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
proto.vega.snapshot.v1.StakeVerifierRemoved = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.StakeVerifierRemoved.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.StakeVerifierRemoved, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.StakeVerifierRemoved.displayName = 'proto.vega.snapshot.v1.StakeVerifierRemoved';
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
proto.vega.snapshot.v1.StakeVerifierPending = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.StakeVerifierPending, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.StakeVerifierPending.displayName = 'proto.vega.snapshot.v1.StakeVerifierPending';
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
proto.vega.snapshot.v1.PendingKeyRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PendingKeyRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PendingKeyRotation.displayName = 'proto.vega.snapshot.v1.PendingKeyRotation';
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
proto.vega.snapshot.v1.PendingEthereumKeyRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PendingEthereumKeyRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PendingEthereumKeyRotation.displayName = 'proto.vega.snapshot.v1.PendingEthereumKeyRotation';
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
proto.vega.snapshot.v1.Topology = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.Topology.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.Topology, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.Topology.displayName = 'proto.vega.snapshot.v1.Topology';
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
proto.vega.snapshot.v1.ToplogySignatures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ToplogySignatures.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ToplogySignatures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ToplogySignatures.displayName = 'proto.vega.snapshot.v1.ToplogySignatures';
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
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PendingERC20MultisigControlSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.displayName = 'proto.vega.snapshot.v1.PendingERC20MultisigControlSignature';
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
proto.vega.snapshot.v1.ValidatorState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.ValidatorState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ValidatorState.displayName = 'proto.vega.snapshot.v1.ValidatorState';
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
proto.vega.snapshot.v1.HeartbeatTracker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.HeartbeatTracker.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.HeartbeatTracker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.HeartbeatTracker.displayName = 'proto.vega.snapshot.v1.HeartbeatTracker';
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
proto.vega.snapshot.v1.PerformanceStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.PerformanceStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PerformanceStats.displayName = 'proto.vega.snapshot.v1.PerformanceStats';
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
proto.vega.snapshot.v1.ValidatorPerformance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ValidatorPerformance.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ValidatorPerformance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ValidatorPerformance.displayName = 'proto.vega.snapshot.v1.ValidatorPerformance';
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
proto.vega.snapshot.v1.LiquidityParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityParameters.displayName = 'proto.vega.snapshot.v1.LiquidityParameters';
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
proto.vega.snapshot.v1.LiquidityPendingProvisions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquidityPendingProvisions.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityPendingProvisions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityPendingProvisions.displayName = 'proto.vega.snapshot.v1.LiquidityPendingProvisions';
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
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.displayName = 'proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders';
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
proto.vega.snapshot.v1.PartyOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.PartyOrders.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.PartyOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.PartyOrders.displayName = 'proto.vega.snapshot.v1.PartyOrders';
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
proto.vega.snapshot.v1.LiquidityPartiesOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquidityPartiesOrders.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityPartiesOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityPartiesOrders.displayName = 'proto.vega.snapshot.v1.LiquidityPartiesOrders';
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
proto.vega.snapshot.v1.LiquidityProvisions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquidityProvisions.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityProvisions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityProvisions.displayName = 'proto.vega.snapshot.v1.LiquidityProvisions';
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
proto.vega.snapshot.v1.LiquidityScores = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.LiquidityScores.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityScores, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityScores.displayName = 'proto.vega.snapshot.v1.LiquidityScores';
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
proto.vega.snapshot.v1.LiquidityScore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.LiquidityScore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.LiquidityScore.displayName = 'proto.vega.snapshot.v1.LiquidityScore';
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
proto.vega.snapshot.v1.FloatingPointConsensus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.FloatingPointConsensus.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.FloatingPointConsensus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.FloatingPointConsensus.displayName = 'proto.vega.snapshot.v1.FloatingPointConsensus';
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
proto.vega.snapshot.v1.StateVarInternalState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.StateVarInternalState.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.StateVarInternalState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.StateVarInternalState.displayName = 'proto.vega.snapshot.v1.StateVarInternalState';
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
proto.vega.snapshot.v1.FloatingPointValidatorResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.FloatingPointValidatorResult.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.FloatingPointValidatorResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.FloatingPointValidatorResult.displayName = 'proto.vega.snapshot.v1.FloatingPointValidatorResult';
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
proto.vega.snapshot.v1.NextTimeTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.NextTimeTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.NextTimeTrigger.displayName = 'proto.vega.snapshot.v1.NextTimeTrigger';
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
proto.vega.snapshot.v1.MarketTracker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.MarketTracker.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.MarketTracker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.MarketTracker.displayName = 'proto.vega.snapshot.v1.MarketTracker';
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
proto.vega.snapshot.v1.SignerEventsPerAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.SignerEventsPerAddress.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.SignerEventsPerAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.SignerEventsPerAddress.displayName = 'proto.vega.snapshot.v1.SignerEventsPerAddress';
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
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.displayName = 'proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified';
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
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ERC20MultiSigTopologyPending, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.displayName = 'proto.vega.snapshot.v1.ERC20MultiSigTopologyPending';
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
proto.vega.snapshot.v1.ProofOfWork = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ProofOfWork.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ProofOfWork, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProofOfWork.displayName = 'proto.vega.snapshot.v1.ProofOfWork';
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
proto.vega.snapshot.v1.BannedParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.BannedParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.BannedParty.displayName = 'proto.vega.snapshot.v1.BannedParty';
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
proto.vega.snapshot.v1.ProofOfWorkParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.ProofOfWorkParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProofOfWorkParams.displayName = 'proto.vega.snapshot.v1.ProofOfWorkParams';
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
proto.vega.snapshot.v1.ProofOfWorkState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ProofOfWorkState.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ProofOfWorkState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProofOfWorkState.displayName = 'proto.vega.snapshot.v1.ProofOfWorkState';
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
proto.vega.snapshot.v1.ProofOfWorkBlockState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ProofOfWorkBlockState.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ProofOfWorkBlockState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProofOfWorkBlockState.displayName = 'proto.vega.snapshot.v1.ProofOfWorkBlockState';
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
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.displayName = 'proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock';
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
proto.vega.snapshot.v1.TransactionsAtHeight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.TransactionsAtHeight.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.TransactionsAtHeight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.TransactionsAtHeight.displayName = 'proto.vega.snapshot.v1.TransactionsAtHeight';
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
proto.vega.snapshot.v1.ProtocolUpgradeProposals = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.snapshot.v1.ProtocolUpgradeProposals.repeatedFields_, null);
};
goog.inherits(proto.vega.snapshot.v1.ProtocolUpgradeProposals, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.ProtocolUpgradeProposals.displayName = 'proto.vega.snapshot.v1.ProtocolUpgradeProposals';
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
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.displayName = 'proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal';
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
proto.vega.snapshot.v1.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chunks: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hash: msg.getHash_asB64(),
    metadata: msg.getMetadata_asB64()
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
 * @return {!proto.vega.snapshot.v1.Snapshot}
 */
proto.vega.snapshot.v1.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Snapshot;
  return proto.vega.snapshot.v1.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Snapshot}
 */
proto.vega.snapshot.v1.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.vega.snapshot.v1.Format} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunks(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMetadata(value);
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
proto.vega.snapshot.v1.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Snapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Snapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getChunks();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getMetadata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Snapshot} returns this
 */
proto.vega.snapshot.v1.Snapshot.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Format format = 2;
 * @return {!proto.vega.snapshot.v1.Format}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getFormat = function() {
  return /** @type {!proto.vega.snapshot.v1.Format} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.snapshot.v1.Format} value
 * @return {!proto.vega.snapshot.v1.Snapshot} returns this
 */
proto.vega.snapshot.v1.Snapshot.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 chunks = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getChunks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Snapshot} returns this
 */
proto.vega.snapshot.v1.Snapshot.prototype.setChunks = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes hash = 4;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.snapshot.v1.Snapshot} returns this
 */
proto.vega.snapshot.v1.Snapshot.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes metadata = 5;
 * @return {!(string|Uint8Array)}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getMetadata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes metadata = 5;
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {string}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getMetadata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMetadata()));
};


/**
 * optional bytes metadata = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMetadata()`
 * @return {!Uint8Array}
 */
proto.vega.snapshot.v1.Snapshot.prototype.getMetadata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMetadata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.snapshot.v1.Snapshot} returns this
 */
proto.vega.snapshot.v1.Snapshot.prototype.setMetadata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
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
proto.vega.snapshot.v1.NodeHash.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.NodeHash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.NodeHash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NodeHash.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    version: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isLeaf: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.vega.snapshot.v1.NodeHash}
 */
proto.vega.snapshot.v1.NodeHash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.NodeHash;
  return proto.vega.snapshot.v1.NodeHash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.NodeHash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.NodeHash}
 */
proto.vega.snapshot.v1.NodeHash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLeaf(value);
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
proto.vega.snapshot.v1.NodeHash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.NodeHash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.NodeHash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NodeHash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getIsLeaf();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.NodeHash.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NodeHash} returns this
 */
proto.vega.snapshot.v1.NodeHash.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string hash = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.NodeHash.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NodeHash} returns this
 */
proto.vega.snapshot.v1.NodeHash.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 height = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.NodeHash.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.NodeHash} returns this
 */
proto.vega.snapshot.v1.NodeHash.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 version = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.NodeHash.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.NodeHash} returns this
 */
proto.vega.snapshot.v1.NodeHash.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool is_leaf = 7;
 * @return {boolean}
 */
proto.vega.snapshot.v1.NodeHash.prototype.getIsLeaf = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.NodeHash} returns this
 */
proto.vega.snapshot.v1.NodeHash.prototype.setIsLeaf = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Metadata.repeatedFields_ = [2,3];



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
proto.vega.snapshot.v1.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chunkHashesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    nodeHashesList: jspb.Message.toObjectList(msg.getNodeHashesList(),
    proto.vega.snapshot.v1.NodeHash.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.Metadata}
 */
proto.vega.snapshot.v1.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Metadata;
  return proto.vega.snapshot.v1.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Metadata}
 */
proto.vega.snapshot.v1.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addChunkHashes(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.NodeHash;
      reader.readMessage(value,proto.vega.snapshot.v1.NodeHash.deserializeBinaryFromReader);
      msg.addNodeHashes(value);
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
proto.vega.snapshot.v1.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getChunkHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getNodeHashesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.NodeHash.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 version = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.Metadata.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Metadata} returns this
 */
proto.vega.snapshot.v1.Metadata.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string chunk_hashes = 2;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.Metadata.prototype.getChunkHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.Metadata} returns this
 */
proto.vega.snapshot.v1.Metadata.prototype.setChunkHashesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Metadata} returns this
 */
proto.vega.snapshot.v1.Metadata.prototype.addChunkHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Metadata} returns this
 */
proto.vega.snapshot.v1.Metadata.prototype.clearChunkHashesList = function() {
  return this.setChunkHashesList([]);
};


/**
 * repeated NodeHash node_hashes = 3;
 * @return {!Array<!proto.vega.snapshot.v1.NodeHash>}
 */
proto.vega.snapshot.v1.Metadata.prototype.getNodeHashesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.NodeHash>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.NodeHash, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.NodeHash>} value
 * @return {!proto.vega.snapshot.v1.Metadata} returns this
*/
proto.vega.snapshot.v1.Metadata.prototype.setNodeHashesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.NodeHash=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.NodeHash}
 */
proto.vega.snapshot.v1.Metadata.prototype.addNodeHashes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.NodeHash, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Metadata} returns this
 */
proto.vega.snapshot.v1.Metadata.prototype.clearNodeHashesList = function() {
  return this.setNodeHashesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Chunk.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.Chunk.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Chunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Chunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Chunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.vega.snapshot.v1.Payload.toObject, includeInstance),
    nr: jspb.Message.getFieldWithDefault(msg, 2, 0),
    of: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.vega.snapshot.v1.Chunk}
 */
proto.vega.snapshot.v1.Chunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Chunk;
  return proto.vega.snapshot.v1.Chunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Chunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Chunk}
 */
proto.vega.snapshot.v1.Chunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.Payload;
      reader.readMessage(value,proto.vega.snapshot.v1.Payload.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNr(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOf(value);
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
proto.vega.snapshot.v1.Chunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Chunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Chunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Chunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.Payload.serializeBinaryToWriter
    );
  }
  f = message.getNr();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOf();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated Payload data = 1;
 * @return {!Array<!proto.vega.snapshot.v1.Payload>}
 */
proto.vega.snapshot.v1.Chunk.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.Payload>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.Payload, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.Payload>} value
 * @return {!proto.vega.snapshot.v1.Chunk} returns this
*/
proto.vega.snapshot.v1.Chunk.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.Payload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Payload}
 */
proto.vega.snapshot.v1.Chunk.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.Payload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Chunk} returns this
 */
proto.vega.snapshot.v1.Chunk.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional int64 nr = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.Chunk.prototype.getNr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Chunk} returns this
 */
proto.vega.snapshot.v1.Chunk.prototype.setNr = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 of = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.Chunk.prototype.getOf = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Chunk} returns this
 */
proto.vega.snapshot.v1.Chunk.prototype.setOf = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.snapshot.v1.Payload.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,49,50,51,52,53,54,55,56,57,58]];

/**
 * @enum {number}
 */
proto.vega.snapshot.v1.Payload.DataCase = {
  DATA_NOT_SET: 0,
  ACTIVE_ASSETS: 1,
  PENDING_ASSETS: 2,
  BANKING_WITHDRAWALS: 3,
  BANKING_DEPOSITS: 4,
  BANKING_SEEN: 5,
  BANKING_ASSET_ACTIONS: 6,
  CHECKPOINT: 7,
  COLLATERAL_ACCOUNTS: 8,
  COLLATERAL_ASSETS: 9,
  DELEGATION_ACTIVE: 10,
  DELEGATION_PENDING: 11,
  DELEGATION_AUTO: 12,
  GOVERNANCE_ACTIVE: 13,
  GOVERNANCE_ENACTED: 14,
  STAKING_ACCOUNTS: 15,
  MATCHING_BOOK: 16,
  NETWORK_PARAMETERS: 17,
  EXECUTION_MARKETS: 18,
  MARKET_POSITIONS: 19,
  APP_STATE: 20,
  EPOCH: 21,
  REWARDS_PENDING_PAYOUTS: 23,
  GOVERNANCE_NODE: 24,
  LIMIT_STATE: 25,
  VOTE_SPAM_POLICY: 26,
  SIMPLE_SPAM_POLICY: 27,
  NOTARY: 28,
  EVENT_FORWARDER: 31,
  STAKE_VERIFIER_DEPOSITED: 32,
  STAKE_VERIFIER_REMOVED: 33,
  WITNESS: 34,
  DELEGATION_LAST_RECONCILIATION_TIME: 35,
  TOPOLOGY: 36,
  ORACLE_DATA: 37,
  LIQUIDITY_PARAMETERS: 38,
  LIQUIDITY_PENDING_PROVISIONS: 39,
  LIQUIDITY_PARTIES_LIQUIDITY_ORDERS: 40,
  LIQUIDITY_PARTIES_ORDERS: 41,
  LIQUIDITY_PROVISIONS: 42,
  LIQUIDITY_SUPPLIED: 43,
  LIQUIDITY_TARGET: 44,
  FLOATING_POINT_CONSENSUS: 46,
  MARKET_TRACKER: 47,
  BANKING_RECURRING_TRANSFERS: 49,
  BANKING_SCHEDULED_TRANSFERS: 50,
  ERC20_MULTISIG_TOPOLOGY_VERIFIED: 51,
  ERC20_MULTISIG_TOPOLOGY_PENDING: 52,
  PROOF_OF_WORK: 53,
  PENDING_ASSET_UPDATES: 54,
  PROTOCOL_UPGRADE_PROPOSALS: 55,
  BANKING_BRIDGE_STATE: 56,
  SETTLEMENT_STATE: 57,
  LIQUIDITY_SCORES: 58
};

/**
 * @return {proto.vega.snapshot.v1.Payload.DataCase}
 */
proto.vega.snapshot.v1.Payload.prototype.getDataCase = function() {
  return /** @type {proto.vega.snapshot.v1.Payload.DataCase} */(jspb.Message.computeOneofCase(this, proto.vega.snapshot.v1.Payload.oneofGroups_[0]));
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
proto.vega.snapshot.v1.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeAssets: (f = msg.getActiveAssets()) && proto.vega.snapshot.v1.ActiveAssets.toObject(includeInstance, f),
    pendingAssets: (f = msg.getPendingAssets()) && proto.vega.snapshot.v1.PendingAssets.toObject(includeInstance, f),
    bankingWithdrawals: (f = msg.getBankingWithdrawals()) && proto.vega.snapshot.v1.BankingWithdrawals.toObject(includeInstance, f),
    bankingDeposits: (f = msg.getBankingDeposits()) && proto.vega.snapshot.v1.BankingDeposits.toObject(includeInstance, f),
    bankingSeen: (f = msg.getBankingSeen()) && proto.vega.snapshot.v1.BankingSeen.toObject(includeInstance, f),
    bankingAssetActions: (f = msg.getBankingAssetActions()) && proto.vega.snapshot.v1.BankingAssetActions.toObject(includeInstance, f),
    checkpoint: (f = msg.getCheckpoint()) && proto.vega.snapshot.v1.Checkpoint.toObject(includeInstance, f),
    collateralAccounts: (f = msg.getCollateralAccounts()) && proto.vega.snapshot.v1.CollateralAccounts.toObject(includeInstance, f),
    collateralAssets: (f = msg.getCollateralAssets()) && proto.vega.snapshot.v1.CollateralAssets.toObject(includeInstance, f),
    delegationActive: (f = msg.getDelegationActive()) && proto.vega.snapshot.v1.DelegationActive.toObject(includeInstance, f),
    delegationPending: (f = msg.getDelegationPending()) && proto.vega.snapshot.v1.DelegationPending.toObject(includeInstance, f),
    delegationAuto: (f = msg.getDelegationAuto()) && proto.vega.snapshot.v1.DelegationAuto.toObject(includeInstance, f),
    governanceActive: (f = msg.getGovernanceActive()) && proto.vega.snapshot.v1.GovernanceActive.toObject(includeInstance, f),
    governanceEnacted: (f = msg.getGovernanceEnacted()) && proto.vega.snapshot.v1.GovernanceEnacted.toObject(includeInstance, f),
    stakingAccounts: (f = msg.getStakingAccounts()) && proto.vega.snapshot.v1.StakingAccounts.toObject(includeInstance, f),
    matchingBook: (f = msg.getMatchingBook()) && proto.vega.snapshot.v1.MatchingBook.toObject(includeInstance, f),
    networkParameters: (f = msg.getNetworkParameters()) && proto.vega.snapshot.v1.NetParams.toObject(includeInstance, f),
    executionMarkets: (f = msg.getExecutionMarkets()) && proto.vega.snapshot.v1.ExecutionMarkets.toObject(includeInstance, f),
    marketPositions: (f = msg.getMarketPositions()) && proto.vega.snapshot.v1.MarketPositions.toObject(includeInstance, f),
    appState: (f = msg.getAppState()) && proto.vega.snapshot.v1.AppState.toObject(includeInstance, f),
    epoch: (f = msg.getEpoch()) && proto.vega.snapshot.v1.EpochState.toObject(includeInstance, f),
    rewardsPendingPayouts: (f = msg.getRewardsPendingPayouts()) && proto.vega.snapshot.v1.RewardsPendingPayouts.toObject(includeInstance, f),
    governanceNode: (f = msg.getGovernanceNode()) && proto.vega.snapshot.v1.GovernanceNode.toObject(includeInstance, f),
    limitState: (f = msg.getLimitState()) && proto.vega.snapshot.v1.LimitState.toObject(includeInstance, f),
    voteSpamPolicy: (f = msg.getVoteSpamPolicy()) && proto.vega.snapshot.v1.VoteSpamPolicy.toObject(includeInstance, f),
    simpleSpamPolicy: (f = msg.getSimpleSpamPolicy()) && proto.vega.snapshot.v1.SimpleSpamPolicy.toObject(includeInstance, f),
    notary: (f = msg.getNotary()) && proto.vega.snapshot.v1.Notary.toObject(includeInstance, f),
    eventForwarder: (f = msg.getEventForwarder()) && proto.vega.snapshot.v1.EventForwarder.toObject(includeInstance, f),
    stakeVerifierDeposited: (f = msg.getStakeVerifierDeposited()) && proto.vega.snapshot.v1.StakeVerifierDeposited.toObject(includeInstance, f),
    stakeVerifierRemoved: (f = msg.getStakeVerifierRemoved()) && proto.vega.snapshot.v1.StakeVerifierRemoved.toObject(includeInstance, f),
    witness: (f = msg.getWitness()) && proto.vega.snapshot.v1.Witness.toObject(includeInstance, f),
    delegationLastReconciliationTime: (f = msg.getDelegationLastReconciliationTime()) && proto.vega.snapshot.v1.DelegationLastReconciliationTime.toObject(includeInstance, f),
    topology: (f = msg.getTopology()) && proto.vega.snapshot.v1.Topology.toObject(includeInstance, f),
    oracleData: (f = msg.getOracleData()) && proto.vega.snapshot.v1.OracleDataBatch.toObject(includeInstance, f),
    liquidityParameters: (f = msg.getLiquidityParameters()) && proto.vega.snapshot.v1.LiquidityParameters.toObject(includeInstance, f),
    liquidityPendingProvisions: (f = msg.getLiquidityPendingProvisions()) && proto.vega.snapshot.v1.LiquidityPendingProvisions.toObject(includeInstance, f),
    liquidityPartiesLiquidityOrders: (f = msg.getLiquidityPartiesLiquidityOrders()) && proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.toObject(includeInstance, f),
    liquidityPartiesOrders: (f = msg.getLiquidityPartiesOrders()) && proto.vega.snapshot.v1.LiquidityPartiesOrders.toObject(includeInstance, f),
    liquidityProvisions: (f = msg.getLiquidityProvisions()) && proto.vega.snapshot.v1.LiquidityProvisions.toObject(includeInstance, f),
    liquiditySupplied: (f = msg.getLiquiditySupplied()) && proto.vega.snapshot.v1.LiquiditySupplied.toObject(includeInstance, f),
    liquidityTarget: (f = msg.getLiquidityTarget()) && proto.vega.snapshot.v1.LiquidityTarget.toObject(includeInstance, f),
    floatingPointConsensus: (f = msg.getFloatingPointConsensus()) && proto.vega.snapshot.v1.FloatingPointConsensus.toObject(includeInstance, f),
    marketTracker: (f = msg.getMarketTracker()) && proto.vega.snapshot.v1.MarketTracker.toObject(includeInstance, f),
    bankingRecurringTransfers: (f = msg.getBankingRecurringTransfers()) && proto.vega.snapshot.v1.BankingRecurringTransfers.toObject(includeInstance, f),
    bankingScheduledTransfers: (f = msg.getBankingScheduledTransfers()) && proto.vega.snapshot.v1.BankingScheduledTransfers.toObject(includeInstance, f),
    erc20MultisigTopologyVerified: (f = msg.getErc20MultisigTopologyVerified()) && proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.toObject(includeInstance, f),
    erc20MultisigTopologyPending: (f = msg.getErc20MultisigTopologyPending()) && proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.toObject(includeInstance, f),
    proofOfWork: (f = msg.getProofOfWork()) && proto.vega.snapshot.v1.ProofOfWork.toObject(includeInstance, f),
    pendingAssetUpdates: (f = msg.getPendingAssetUpdates()) && proto.vega.snapshot.v1.PendingAssetUpdates.toObject(includeInstance, f),
    protocolUpgradeProposals: (f = msg.getProtocolUpgradeProposals()) && proto.vega.snapshot.v1.ProtocolUpgradeProposals.toObject(includeInstance, f),
    bankingBridgeState: (f = msg.getBankingBridgeState()) && proto.vega.snapshot.v1.BankingBridgeState.toObject(includeInstance, f),
    settlementState: (f = msg.getSettlementState()) && proto.vega.snapshot.v1.SettlementState.toObject(includeInstance, f),
    liquidityScores: (f = msg.getLiquidityScores()) && proto.vega.snapshot.v1.LiquidityScores.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.Payload}
 */
proto.vega.snapshot.v1.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Payload;
  return proto.vega.snapshot.v1.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Payload}
 */
proto.vega.snapshot.v1.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.ActiveAssets;
      reader.readMessage(value,proto.vega.snapshot.v1.ActiveAssets.deserializeBinaryFromReader);
      msg.setActiveAssets(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.PendingAssets;
      reader.readMessage(value,proto.vega.snapshot.v1.PendingAssets.deserializeBinaryFromReader);
      msg.setPendingAssets(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.BankingWithdrawals;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingWithdrawals.deserializeBinaryFromReader);
      msg.setBankingWithdrawals(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.BankingDeposits;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingDeposits.deserializeBinaryFromReader);
      msg.setBankingDeposits(value);
      break;
    case 5:
      var value = new proto.vega.snapshot.v1.BankingSeen;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingSeen.deserializeBinaryFromReader);
      msg.setBankingSeen(value);
      break;
    case 6:
      var value = new proto.vega.snapshot.v1.BankingAssetActions;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingAssetActions.deserializeBinaryFromReader);
      msg.setBankingAssetActions(value);
      break;
    case 7:
      var value = new proto.vega.snapshot.v1.Checkpoint;
      reader.readMessage(value,proto.vega.snapshot.v1.Checkpoint.deserializeBinaryFromReader);
      msg.setCheckpoint(value);
      break;
    case 8:
      var value = new proto.vega.snapshot.v1.CollateralAccounts;
      reader.readMessage(value,proto.vega.snapshot.v1.CollateralAccounts.deserializeBinaryFromReader);
      msg.setCollateralAccounts(value);
      break;
    case 9:
      var value = new proto.vega.snapshot.v1.CollateralAssets;
      reader.readMessage(value,proto.vega.snapshot.v1.CollateralAssets.deserializeBinaryFromReader);
      msg.setCollateralAssets(value);
      break;
    case 10:
      var value = new proto.vega.snapshot.v1.DelegationActive;
      reader.readMessage(value,proto.vega.snapshot.v1.DelegationActive.deserializeBinaryFromReader);
      msg.setDelegationActive(value);
      break;
    case 11:
      var value = new proto.vega.snapshot.v1.DelegationPending;
      reader.readMessage(value,proto.vega.snapshot.v1.DelegationPending.deserializeBinaryFromReader);
      msg.setDelegationPending(value);
      break;
    case 12:
      var value = new proto.vega.snapshot.v1.DelegationAuto;
      reader.readMessage(value,proto.vega.snapshot.v1.DelegationAuto.deserializeBinaryFromReader);
      msg.setDelegationAuto(value);
      break;
    case 13:
      var value = new proto.vega.snapshot.v1.GovernanceActive;
      reader.readMessage(value,proto.vega.snapshot.v1.GovernanceActive.deserializeBinaryFromReader);
      msg.setGovernanceActive(value);
      break;
    case 14:
      var value = new proto.vega.snapshot.v1.GovernanceEnacted;
      reader.readMessage(value,proto.vega.snapshot.v1.GovernanceEnacted.deserializeBinaryFromReader);
      msg.setGovernanceEnacted(value);
      break;
    case 15:
      var value = new proto.vega.snapshot.v1.StakingAccounts;
      reader.readMessage(value,proto.vega.snapshot.v1.StakingAccounts.deserializeBinaryFromReader);
      msg.setStakingAccounts(value);
      break;
    case 16:
      var value = new proto.vega.snapshot.v1.MatchingBook;
      reader.readMessage(value,proto.vega.snapshot.v1.MatchingBook.deserializeBinaryFromReader);
      msg.setMatchingBook(value);
      break;
    case 17:
      var value = new proto.vega.snapshot.v1.NetParams;
      reader.readMessage(value,proto.vega.snapshot.v1.NetParams.deserializeBinaryFromReader);
      msg.setNetworkParameters(value);
      break;
    case 18:
      var value = new proto.vega.snapshot.v1.ExecutionMarkets;
      reader.readMessage(value,proto.vega.snapshot.v1.ExecutionMarkets.deserializeBinaryFromReader);
      msg.setExecutionMarkets(value);
      break;
    case 19:
      var value = new proto.vega.snapshot.v1.MarketPositions;
      reader.readMessage(value,proto.vega.snapshot.v1.MarketPositions.deserializeBinaryFromReader);
      msg.setMarketPositions(value);
      break;
    case 20:
      var value = new proto.vega.snapshot.v1.AppState;
      reader.readMessage(value,proto.vega.snapshot.v1.AppState.deserializeBinaryFromReader);
      msg.setAppState(value);
      break;
    case 21:
      var value = new proto.vega.snapshot.v1.EpochState;
      reader.readMessage(value,proto.vega.snapshot.v1.EpochState.deserializeBinaryFromReader);
      msg.setEpoch(value);
      break;
    case 23:
      var value = new proto.vega.snapshot.v1.RewardsPendingPayouts;
      reader.readMessage(value,proto.vega.snapshot.v1.RewardsPendingPayouts.deserializeBinaryFromReader);
      msg.setRewardsPendingPayouts(value);
      break;
    case 24:
      var value = new proto.vega.snapshot.v1.GovernanceNode;
      reader.readMessage(value,proto.vega.snapshot.v1.GovernanceNode.deserializeBinaryFromReader);
      msg.setGovernanceNode(value);
      break;
    case 25:
      var value = new proto.vega.snapshot.v1.LimitState;
      reader.readMessage(value,proto.vega.snapshot.v1.LimitState.deserializeBinaryFromReader);
      msg.setLimitState(value);
      break;
    case 26:
      var value = new proto.vega.snapshot.v1.VoteSpamPolicy;
      reader.readMessage(value,proto.vega.snapshot.v1.VoteSpamPolicy.deserializeBinaryFromReader);
      msg.setVoteSpamPolicy(value);
      break;
    case 27:
      var value = new proto.vega.snapshot.v1.SimpleSpamPolicy;
      reader.readMessage(value,proto.vega.snapshot.v1.SimpleSpamPolicy.deserializeBinaryFromReader);
      msg.setSimpleSpamPolicy(value);
      break;
    case 28:
      var value = new proto.vega.snapshot.v1.Notary;
      reader.readMessage(value,proto.vega.snapshot.v1.Notary.deserializeBinaryFromReader);
      msg.setNotary(value);
      break;
    case 31:
      var value = new proto.vega.snapshot.v1.EventForwarder;
      reader.readMessage(value,proto.vega.snapshot.v1.EventForwarder.deserializeBinaryFromReader);
      msg.setEventForwarder(value);
      break;
    case 32:
      var value = new proto.vega.snapshot.v1.StakeVerifierDeposited;
      reader.readMessage(value,proto.vega.snapshot.v1.StakeVerifierDeposited.deserializeBinaryFromReader);
      msg.setStakeVerifierDeposited(value);
      break;
    case 33:
      var value = new proto.vega.snapshot.v1.StakeVerifierRemoved;
      reader.readMessage(value,proto.vega.snapshot.v1.StakeVerifierRemoved.deserializeBinaryFromReader);
      msg.setStakeVerifierRemoved(value);
      break;
    case 34:
      var value = new proto.vega.snapshot.v1.Witness;
      reader.readMessage(value,proto.vega.snapshot.v1.Witness.deserializeBinaryFromReader);
      msg.setWitness(value);
      break;
    case 35:
      var value = new proto.vega.snapshot.v1.DelegationLastReconciliationTime;
      reader.readMessage(value,proto.vega.snapshot.v1.DelegationLastReconciliationTime.deserializeBinaryFromReader);
      msg.setDelegationLastReconciliationTime(value);
      break;
    case 36:
      var value = new proto.vega.snapshot.v1.Topology;
      reader.readMessage(value,proto.vega.snapshot.v1.Topology.deserializeBinaryFromReader);
      msg.setTopology(value);
      break;
    case 37:
      var value = new proto.vega.snapshot.v1.OracleDataBatch;
      reader.readMessage(value,proto.vega.snapshot.v1.OracleDataBatch.deserializeBinaryFromReader);
      msg.setOracleData(value);
      break;
    case 38:
      var value = new proto.vega.snapshot.v1.LiquidityParameters;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityParameters.deserializeBinaryFromReader);
      msg.setLiquidityParameters(value);
      break;
    case 39:
      var value = new proto.vega.snapshot.v1.LiquidityPendingProvisions;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityPendingProvisions.deserializeBinaryFromReader);
      msg.setLiquidityPendingProvisions(value);
      break;
    case 40:
      var value = new proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.deserializeBinaryFromReader);
      msg.setLiquidityPartiesLiquidityOrders(value);
      break;
    case 41:
      var value = new proto.vega.snapshot.v1.LiquidityPartiesOrders;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityPartiesOrders.deserializeBinaryFromReader);
      msg.setLiquidityPartiesOrders(value);
      break;
    case 42:
      var value = new proto.vega.snapshot.v1.LiquidityProvisions;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityProvisions.deserializeBinaryFromReader);
      msg.setLiquidityProvisions(value);
      break;
    case 43:
      var value = new proto.vega.snapshot.v1.LiquiditySupplied;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquiditySupplied.deserializeBinaryFromReader);
      msg.setLiquiditySupplied(value);
      break;
    case 44:
      var value = new proto.vega.snapshot.v1.LiquidityTarget;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityTarget.deserializeBinaryFromReader);
      msg.setLiquidityTarget(value);
      break;
    case 46:
      var value = new proto.vega.snapshot.v1.FloatingPointConsensus;
      reader.readMessage(value,proto.vega.snapshot.v1.FloatingPointConsensus.deserializeBinaryFromReader);
      msg.setFloatingPointConsensus(value);
      break;
    case 47:
      var value = new proto.vega.snapshot.v1.MarketTracker;
      reader.readMessage(value,proto.vega.snapshot.v1.MarketTracker.deserializeBinaryFromReader);
      msg.setMarketTracker(value);
      break;
    case 49:
      var value = new proto.vega.snapshot.v1.BankingRecurringTransfers;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingRecurringTransfers.deserializeBinaryFromReader);
      msg.setBankingRecurringTransfers(value);
      break;
    case 50:
      var value = new proto.vega.snapshot.v1.BankingScheduledTransfers;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingScheduledTransfers.deserializeBinaryFromReader);
      msg.setBankingScheduledTransfers(value);
      break;
    case 51:
      var value = new proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified;
      reader.readMessage(value,proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.deserializeBinaryFromReader);
      msg.setErc20MultisigTopologyVerified(value);
      break;
    case 52:
      var value = new proto.vega.snapshot.v1.ERC20MultiSigTopologyPending;
      reader.readMessage(value,proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.deserializeBinaryFromReader);
      msg.setErc20MultisigTopologyPending(value);
      break;
    case 53:
      var value = new proto.vega.snapshot.v1.ProofOfWork;
      reader.readMessage(value,proto.vega.snapshot.v1.ProofOfWork.deserializeBinaryFromReader);
      msg.setProofOfWork(value);
      break;
    case 54:
      var value = new proto.vega.snapshot.v1.PendingAssetUpdates;
      reader.readMessage(value,proto.vega.snapshot.v1.PendingAssetUpdates.deserializeBinaryFromReader);
      msg.setPendingAssetUpdates(value);
      break;
    case 55:
      var value = new proto.vega.snapshot.v1.ProtocolUpgradeProposals;
      reader.readMessage(value,proto.vega.snapshot.v1.ProtocolUpgradeProposals.deserializeBinaryFromReader);
      msg.setProtocolUpgradeProposals(value);
      break;
    case 56:
      var value = new proto.vega.snapshot.v1.BankingBridgeState;
      reader.readMessage(value,proto.vega.snapshot.v1.BankingBridgeState.deserializeBinaryFromReader);
      msg.setBankingBridgeState(value);
      break;
    case 57:
      var value = new proto.vega.snapshot.v1.SettlementState;
      reader.readMessage(value,proto.vega.snapshot.v1.SettlementState.deserializeBinaryFromReader);
      msg.setSettlementState(value);
      break;
    case 58:
      var value = new proto.vega.snapshot.v1.LiquidityScores;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityScores.deserializeBinaryFromReader);
      msg.setLiquidityScores(value);
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
proto.vega.snapshot.v1.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveAssets();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.snapshot.v1.ActiveAssets.serializeBinaryToWriter
    );
  }
  f = message.getPendingAssets();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.snapshot.v1.PendingAssets.serializeBinaryToWriter
    );
  }
  f = message.getBankingWithdrawals();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vega.snapshot.v1.BankingWithdrawals.serializeBinaryToWriter
    );
  }
  f = message.getBankingDeposits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vega.snapshot.v1.BankingDeposits.serializeBinaryToWriter
    );
  }
  f = message.getBankingSeen();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.vega.snapshot.v1.BankingSeen.serializeBinaryToWriter
    );
  }
  f = message.getBankingAssetActions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.vega.snapshot.v1.BankingAssetActions.serializeBinaryToWriter
    );
  }
  f = message.getCheckpoint();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.vega.snapshot.v1.Checkpoint.serializeBinaryToWriter
    );
  }
  f = message.getCollateralAccounts();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.vega.snapshot.v1.CollateralAccounts.serializeBinaryToWriter
    );
  }
  f = message.getCollateralAssets();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.vega.snapshot.v1.CollateralAssets.serializeBinaryToWriter
    );
  }
  f = message.getDelegationActive();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.vega.snapshot.v1.DelegationActive.serializeBinaryToWriter
    );
  }
  f = message.getDelegationPending();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.vega.snapshot.v1.DelegationPending.serializeBinaryToWriter
    );
  }
  f = message.getDelegationAuto();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.vega.snapshot.v1.DelegationAuto.serializeBinaryToWriter
    );
  }
  f = message.getGovernanceActive();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.vega.snapshot.v1.GovernanceActive.serializeBinaryToWriter
    );
  }
  f = message.getGovernanceEnacted();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.vega.snapshot.v1.GovernanceEnacted.serializeBinaryToWriter
    );
  }
  f = message.getStakingAccounts();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.vega.snapshot.v1.StakingAccounts.serializeBinaryToWriter
    );
  }
  f = message.getMatchingBook();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.vega.snapshot.v1.MatchingBook.serializeBinaryToWriter
    );
  }
  f = message.getNetworkParameters();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.vega.snapshot.v1.NetParams.serializeBinaryToWriter
    );
  }
  f = message.getExecutionMarkets();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.vega.snapshot.v1.ExecutionMarkets.serializeBinaryToWriter
    );
  }
  f = message.getMarketPositions();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.vega.snapshot.v1.MarketPositions.serializeBinaryToWriter
    );
  }
  f = message.getAppState();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.vega.snapshot.v1.AppState.serializeBinaryToWriter
    );
  }
  f = message.getEpoch();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.vega.snapshot.v1.EpochState.serializeBinaryToWriter
    );
  }
  f = message.getRewardsPendingPayouts();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.vega.snapshot.v1.RewardsPendingPayouts.serializeBinaryToWriter
    );
  }
  f = message.getGovernanceNode();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.vega.snapshot.v1.GovernanceNode.serializeBinaryToWriter
    );
  }
  f = message.getLimitState();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.vega.snapshot.v1.LimitState.serializeBinaryToWriter
    );
  }
  f = message.getVoteSpamPolicy();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.vega.snapshot.v1.VoteSpamPolicy.serializeBinaryToWriter
    );
  }
  f = message.getSimpleSpamPolicy();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.vega.snapshot.v1.SimpleSpamPolicy.serializeBinaryToWriter
    );
  }
  f = message.getNotary();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.vega.snapshot.v1.Notary.serializeBinaryToWriter
    );
  }
  f = message.getEventForwarder();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.vega.snapshot.v1.EventForwarder.serializeBinaryToWriter
    );
  }
  f = message.getStakeVerifierDeposited();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.vega.snapshot.v1.StakeVerifierDeposited.serializeBinaryToWriter
    );
  }
  f = message.getStakeVerifierRemoved();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.vega.snapshot.v1.StakeVerifierRemoved.serializeBinaryToWriter
    );
  }
  f = message.getWitness();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.vega.snapshot.v1.Witness.serializeBinaryToWriter
    );
  }
  f = message.getDelegationLastReconciliationTime();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.vega.snapshot.v1.DelegationLastReconciliationTime.serializeBinaryToWriter
    );
  }
  f = message.getTopology();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.vega.snapshot.v1.Topology.serializeBinaryToWriter
    );
  }
  f = message.getOracleData();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.vega.snapshot.v1.OracleDataBatch.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityParameters();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.vega.snapshot.v1.LiquidityParameters.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityPendingProvisions();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.vega.snapshot.v1.LiquidityPendingProvisions.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityPartiesLiquidityOrders();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityPartiesOrders();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.vega.snapshot.v1.LiquidityPartiesOrders.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityProvisions();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.vega.snapshot.v1.LiquidityProvisions.serializeBinaryToWriter
    );
  }
  f = message.getLiquiditySupplied();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.vega.snapshot.v1.LiquiditySupplied.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityTarget();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.vega.snapshot.v1.LiquidityTarget.serializeBinaryToWriter
    );
  }
  f = message.getFloatingPointConsensus();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto.vega.snapshot.v1.FloatingPointConsensus.serializeBinaryToWriter
    );
  }
  f = message.getMarketTracker();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.vega.snapshot.v1.MarketTracker.serializeBinaryToWriter
    );
  }
  f = message.getBankingRecurringTransfers();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.vega.snapshot.v1.BankingRecurringTransfers.serializeBinaryToWriter
    );
  }
  f = message.getBankingScheduledTransfers();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.vega.snapshot.v1.BankingScheduledTransfers.serializeBinaryToWriter
    );
  }
  f = message.getErc20MultisigTopologyVerified();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.serializeBinaryToWriter
    );
  }
  f = message.getErc20MultisigTopologyPending();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.serializeBinaryToWriter
    );
  }
  f = message.getProofOfWork();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.vega.snapshot.v1.ProofOfWork.serializeBinaryToWriter
    );
  }
  f = message.getPendingAssetUpdates();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.vega.snapshot.v1.PendingAssetUpdates.serializeBinaryToWriter
    );
  }
  f = message.getProtocolUpgradeProposals();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.vega.snapshot.v1.ProtocolUpgradeProposals.serializeBinaryToWriter
    );
  }
  f = message.getBankingBridgeState();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      proto.vega.snapshot.v1.BankingBridgeState.serializeBinaryToWriter
    );
  }
  f = message.getSettlementState();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      proto.vega.snapshot.v1.SettlementState.serializeBinaryToWriter
    );
  }
  f = message.getLiquidityScores();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto.vega.snapshot.v1.LiquidityScores.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActiveAssets active_assets = 1;
 * @return {?proto.vega.snapshot.v1.ActiveAssets}
 */
proto.vega.snapshot.v1.Payload.prototype.getActiveAssets = function() {
  return /** @type{?proto.vega.snapshot.v1.ActiveAssets} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ActiveAssets, 1));
};


/**
 * @param {?proto.vega.snapshot.v1.ActiveAssets|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setActiveAssets = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearActiveAssets = function() {
  return this.setActiveAssets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasActiveAssets = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PendingAssets pending_assets = 2;
 * @return {?proto.vega.snapshot.v1.PendingAssets}
 */
proto.vega.snapshot.v1.Payload.prototype.getPendingAssets = function() {
  return /** @type{?proto.vega.snapshot.v1.PendingAssets} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.PendingAssets, 2));
};


/**
 * @param {?proto.vega.snapshot.v1.PendingAssets|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setPendingAssets = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearPendingAssets = function() {
  return this.setPendingAssets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasPendingAssets = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BankingWithdrawals banking_withdrawals = 3;
 * @return {?proto.vega.snapshot.v1.BankingWithdrawals}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingWithdrawals = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingWithdrawals} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingWithdrawals, 3));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingWithdrawals|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingWithdrawals = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingWithdrawals = function() {
  return this.setBankingWithdrawals(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingWithdrawals = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional BankingDeposits banking_deposits = 4;
 * @return {?proto.vega.snapshot.v1.BankingDeposits}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingDeposits = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingDeposits} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingDeposits, 4));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingDeposits|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingDeposits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingDeposits = function() {
  return this.setBankingDeposits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingDeposits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BankingSeen banking_seen = 5;
 * @return {?proto.vega.snapshot.v1.BankingSeen}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingSeen = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingSeen} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingSeen, 5));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingSeen|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingSeen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingSeen = function() {
  return this.setBankingSeen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingSeen = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BankingAssetActions banking_asset_actions = 6;
 * @return {?proto.vega.snapshot.v1.BankingAssetActions}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingAssetActions = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingAssetActions} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingAssetActions, 6));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingAssetActions|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingAssetActions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingAssetActions = function() {
  return this.setBankingAssetActions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingAssetActions = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Checkpoint checkpoint = 7;
 * @return {?proto.vega.snapshot.v1.Checkpoint}
 */
proto.vega.snapshot.v1.Payload.prototype.getCheckpoint = function() {
  return /** @type{?proto.vega.snapshot.v1.Checkpoint} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.Checkpoint, 7));
};


/**
 * @param {?proto.vega.snapshot.v1.Checkpoint|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setCheckpoint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearCheckpoint = function() {
  return this.setCheckpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasCheckpoint = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CollateralAccounts collateral_accounts = 8;
 * @return {?proto.vega.snapshot.v1.CollateralAccounts}
 */
proto.vega.snapshot.v1.Payload.prototype.getCollateralAccounts = function() {
  return /** @type{?proto.vega.snapshot.v1.CollateralAccounts} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.CollateralAccounts, 8));
};


/**
 * @param {?proto.vega.snapshot.v1.CollateralAccounts|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setCollateralAccounts = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearCollateralAccounts = function() {
  return this.setCollateralAccounts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasCollateralAccounts = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CollateralAssets collateral_assets = 9;
 * @return {?proto.vega.snapshot.v1.CollateralAssets}
 */
proto.vega.snapshot.v1.Payload.prototype.getCollateralAssets = function() {
  return /** @type{?proto.vega.snapshot.v1.CollateralAssets} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.CollateralAssets, 9));
};


/**
 * @param {?proto.vega.snapshot.v1.CollateralAssets|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setCollateralAssets = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearCollateralAssets = function() {
  return this.setCollateralAssets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasCollateralAssets = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DelegationActive delegation_active = 10;
 * @return {?proto.vega.snapshot.v1.DelegationActive}
 */
proto.vega.snapshot.v1.Payload.prototype.getDelegationActive = function() {
  return /** @type{?proto.vega.snapshot.v1.DelegationActive} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.DelegationActive, 10));
};


/**
 * @param {?proto.vega.snapshot.v1.DelegationActive|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setDelegationActive = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearDelegationActive = function() {
  return this.setDelegationActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasDelegationActive = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional DelegationPending delegation_pending = 11;
 * @return {?proto.vega.snapshot.v1.DelegationPending}
 */
proto.vega.snapshot.v1.Payload.prototype.getDelegationPending = function() {
  return /** @type{?proto.vega.snapshot.v1.DelegationPending} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.DelegationPending, 11));
};


/**
 * @param {?proto.vega.snapshot.v1.DelegationPending|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setDelegationPending = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearDelegationPending = function() {
  return this.setDelegationPending(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasDelegationPending = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DelegationAuto delegation_auto = 12;
 * @return {?proto.vega.snapshot.v1.DelegationAuto}
 */
proto.vega.snapshot.v1.Payload.prototype.getDelegationAuto = function() {
  return /** @type{?proto.vega.snapshot.v1.DelegationAuto} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.DelegationAuto, 12));
};


/**
 * @param {?proto.vega.snapshot.v1.DelegationAuto|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setDelegationAuto = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearDelegationAuto = function() {
  return this.setDelegationAuto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasDelegationAuto = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional GovernanceActive governance_active = 13;
 * @return {?proto.vega.snapshot.v1.GovernanceActive}
 */
proto.vega.snapshot.v1.Payload.prototype.getGovernanceActive = function() {
  return /** @type{?proto.vega.snapshot.v1.GovernanceActive} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.GovernanceActive, 13));
};


/**
 * @param {?proto.vega.snapshot.v1.GovernanceActive|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setGovernanceActive = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearGovernanceActive = function() {
  return this.setGovernanceActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasGovernanceActive = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional GovernanceEnacted governance_enacted = 14;
 * @return {?proto.vega.snapshot.v1.GovernanceEnacted}
 */
proto.vega.snapshot.v1.Payload.prototype.getGovernanceEnacted = function() {
  return /** @type{?proto.vega.snapshot.v1.GovernanceEnacted} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.GovernanceEnacted, 14));
};


/**
 * @param {?proto.vega.snapshot.v1.GovernanceEnacted|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setGovernanceEnacted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearGovernanceEnacted = function() {
  return this.setGovernanceEnacted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasGovernanceEnacted = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional StakingAccounts staking_accounts = 15;
 * @return {?proto.vega.snapshot.v1.StakingAccounts}
 */
proto.vega.snapshot.v1.Payload.prototype.getStakingAccounts = function() {
  return /** @type{?proto.vega.snapshot.v1.StakingAccounts} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.StakingAccounts, 15));
};


/**
 * @param {?proto.vega.snapshot.v1.StakingAccounts|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setStakingAccounts = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearStakingAccounts = function() {
  return this.setStakingAccounts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasStakingAccounts = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional MatchingBook matching_book = 16;
 * @return {?proto.vega.snapshot.v1.MatchingBook}
 */
proto.vega.snapshot.v1.Payload.prototype.getMatchingBook = function() {
  return /** @type{?proto.vega.snapshot.v1.MatchingBook} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.MatchingBook, 16));
};


/**
 * @param {?proto.vega.snapshot.v1.MatchingBook|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setMatchingBook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearMatchingBook = function() {
  return this.setMatchingBook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasMatchingBook = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional NetParams network_parameters = 17;
 * @return {?proto.vega.snapshot.v1.NetParams}
 */
proto.vega.snapshot.v1.Payload.prototype.getNetworkParameters = function() {
  return /** @type{?proto.vega.snapshot.v1.NetParams} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.NetParams, 17));
};


/**
 * @param {?proto.vega.snapshot.v1.NetParams|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setNetworkParameters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearNetworkParameters = function() {
  return this.setNetworkParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasNetworkParameters = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ExecutionMarkets execution_markets = 18;
 * @return {?proto.vega.snapshot.v1.ExecutionMarkets}
 */
proto.vega.snapshot.v1.Payload.prototype.getExecutionMarkets = function() {
  return /** @type{?proto.vega.snapshot.v1.ExecutionMarkets} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ExecutionMarkets, 18));
};


/**
 * @param {?proto.vega.snapshot.v1.ExecutionMarkets|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setExecutionMarkets = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearExecutionMarkets = function() {
  return this.setExecutionMarkets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasExecutionMarkets = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional MarketPositions market_positions = 19;
 * @return {?proto.vega.snapshot.v1.MarketPositions}
 */
proto.vega.snapshot.v1.Payload.prototype.getMarketPositions = function() {
  return /** @type{?proto.vega.snapshot.v1.MarketPositions} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.MarketPositions, 19));
};


/**
 * @param {?proto.vega.snapshot.v1.MarketPositions|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setMarketPositions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearMarketPositions = function() {
  return this.setMarketPositions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasMarketPositions = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional AppState app_state = 20;
 * @return {?proto.vega.snapshot.v1.AppState}
 */
proto.vega.snapshot.v1.Payload.prototype.getAppState = function() {
  return /** @type{?proto.vega.snapshot.v1.AppState} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.AppState, 20));
};


/**
 * @param {?proto.vega.snapshot.v1.AppState|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setAppState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearAppState = function() {
  return this.setAppState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasAppState = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional EpochState epoch = 21;
 * @return {?proto.vega.snapshot.v1.EpochState}
 */
proto.vega.snapshot.v1.Payload.prototype.getEpoch = function() {
  return /** @type{?proto.vega.snapshot.v1.EpochState} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.EpochState, 21));
};


/**
 * @param {?proto.vega.snapshot.v1.EpochState|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setEpoch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearEpoch = function() {
  return this.setEpoch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasEpoch = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional RewardsPendingPayouts rewards_pending_payouts = 23;
 * @return {?proto.vega.snapshot.v1.RewardsPendingPayouts}
 */
proto.vega.snapshot.v1.Payload.prototype.getRewardsPendingPayouts = function() {
  return /** @type{?proto.vega.snapshot.v1.RewardsPendingPayouts} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.RewardsPendingPayouts, 23));
};


/**
 * @param {?proto.vega.snapshot.v1.RewardsPendingPayouts|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setRewardsPendingPayouts = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearRewardsPendingPayouts = function() {
  return this.setRewardsPendingPayouts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasRewardsPendingPayouts = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional GovernanceNode governance_node = 24;
 * @return {?proto.vega.snapshot.v1.GovernanceNode}
 */
proto.vega.snapshot.v1.Payload.prototype.getGovernanceNode = function() {
  return /** @type{?proto.vega.snapshot.v1.GovernanceNode} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.GovernanceNode, 24));
};


/**
 * @param {?proto.vega.snapshot.v1.GovernanceNode|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setGovernanceNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearGovernanceNode = function() {
  return this.setGovernanceNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasGovernanceNode = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional LimitState limit_state = 25;
 * @return {?proto.vega.snapshot.v1.LimitState}
 */
proto.vega.snapshot.v1.Payload.prototype.getLimitState = function() {
  return /** @type{?proto.vega.snapshot.v1.LimitState} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LimitState, 25));
};


/**
 * @param {?proto.vega.snapshot.v1.LimitState|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLimitState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLimitState = function() {
  return this.setLimitState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLimitState = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional VoteSpamPolicy vote_spam_policy = 26;
 * @return {?proto.vega.snapshot.v1.VoteSpamPolicy}
 */
proto.vega.snapshot.v1.Payload.prototype.getVoteSpamPolicy = function() {
  return /** @type{?proto.vega.snapshot.v1.VoteSpamPolicy} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.VoteSpamPolicy, 26));
};


/**
 * @param {?proto.vega.snapshot.v1.VoteSpamPolicy|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setVoteSpamPolicy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearVoteSpamPolicy = function() {
  return this.setVoteSpamPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasVoteSpamPolicy = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional SimpleSpamPolicy simple_spam_policy = 27;
 * @return {?proto.vega.snapshot.v1.SimpleSpamPolicy}
 */
proto.vega.snapshot.v1.Payload.prototype.getSimpleSpamPolicy = function() {
  return /** @type{?proto.vega.snapshot.v1.SimpleSpamPolicy} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.SimpleSpamPolicy, 27));
};


/**
 * @param {?proto.vega.snapshot.v1.SimpleSpamPolicy|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setSimpleSpamPolicy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearSimpleSpamPolicy = function() {
  return this.setSimpleSpamPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasSimpleSpamPolicy = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Notary notary = 28;
 * @return {?proto.vega.snapshot.v1.Notary}
 */
proto.vega.snapshot.v1.Payload.prototype.getNotary = function() {
  return /** @type{?proto.vega.snapshot.v1.Notary} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.Notary, 28));
};


/**
 * @param {?proto.vega.snapshot.v1.Notary|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setNotary = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearNotary = function() {
  return this.setNotary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasNotary = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional EventForwarder event_forwarder = 31;
 * @return {?proto.vega.snapshot.v1.EventForwarder}
 */
proto.vega.snapshot.v1.Payload.prototype.getEventForwarder = function() {
  return /** @type{?proto.vega.snapshot.v1.EventForwarder} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.EventForwarder, 31));
};


/**
 * @param {?proto.vega.snapshot.v1.EventForwarder|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setEventForwarder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearEventForwarder = function() {
  return this.setEventForwarder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasEventForwarder = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional StakeVerifierDeposited stake_verifier_deposited = 32;
 * @return {?proto.vega.snapshot.v1.StakeVerifierDeposited}
 */
proto.vega.snapshot.v1.Payload.prototype.getStakeVerifierDeposited = function() {
  return /** @type{?proto.vega.snapshot.v1.StakeVerifierDeposited} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.StakeVerifierDeposited, 32));
};


/**
 * @param {?proto.vega.snapshot.v1.StakeVerifierDeposited|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setStakeVerifierDeposited = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearStakeVerifierDeposited = function() {
  return this.setStakeVerifierDeposited(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasStakeVerifierDeposited = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional StakeVerifierRemoved stake_verifier_removed = 33;
 * @return {?proto.vega.snapshot.v1.StakeVerifierRemoved}
 */
proto.vega.snapshot.v1.Payload.prototype.getStakeVerifierRemoved = function() {
  return /** @type{?proto.vega.snapshot.v1.StakeVerifierRemoved} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.StakeVerifierRemoved, 33));
};


/**
 * @param {?proto.vega.snapshot.v1.StakeVerifierRemoved|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setStakeVerifierRemoved = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearStakeVerifierRemoved = function() {
  return this.setStakeVerifierRemoved(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasStakeVerifierRemoved = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional Witness witness = 34;
 * @return {?proto.vega.snapshot.v1.Witness}
 */
proto.vega.snapshot.v1.Payload.prototype.getWitness = function() {
  return /** @type{?proto.vega.snapshot.v1.Witness} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.Witness, 34));
};


/**
 * @param {?proto.vega.snapshot.v1.Witness|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setWitness = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearWitness = function() {
  return this.setWitness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasWitness = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional DelegationLastReconciliationTime delegation_last_reconciliation_time = 35;
 * @return {?proto.vega.snapshot.v1.DelegationLastReconciliationTime}
 */
proto.vega.snapshot.v1.Payload.prototype.getDelegationLastReconciliationTime = function() {
  return /** @type{?proto.vega.snapshot.v1.DelegationLastReconciliationTime} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.DelegationLastReconciliationTime, 35));
};


/**
 * @param {?proto.vega.snapshot.v1.DelegationLastReconciliationTime|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setDelegationLastReconciliationTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearDelegationLastReconciliationTime = function() {
  return this.setDelegationLastReconciliationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasDelegationLastReconciliationTime = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional Topology topology = 36;
 * @return {?proto.vega.snapshot.v1.Topology}
 */
proto.vega.snapshot.v1.Payload.prototype.getTopology = function() {
  return /** @type{?proto.vega.snapshot.v1.Topology} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.Topology, 36));
};


/**
 * @param {?proto.vega.snapshot.v1.Topology|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setTopology = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearTopology = function() {
  return this.setTopology(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasTopology = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional OracleDataBatch oracle_data = 37;
 * @return {?proto.vega.snapshot.v1.OracleDataBatch}
 */
proto.vega.snapshot.v1.Payload.prototype.getOracleData = function() {
  return /** @type{?proto.vega.snapshot.v1.OracleDataBatch} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.OracleDataBatch, 37));
};


/**
 * @param {?proto.vega.snapshot.v1.OracleDataBatch|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setOracleData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearOracleData = function() {
  return this.setOracleData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasOracleData = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional LiquidityParameters liquidity_parameters = 38;
 * @return {?proto.vega.snapshot.v1.LiquidityParameters}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityParameters = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityParameters} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityParameters, 38));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityParameters|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityParameters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityParameters = function() {
  return this.setLiquidityParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityParameters = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional LiquidityPendingProvisions liquidity_pending_provisions = 39;
 * @return {?proto.vega.snapshot.v1.LiquidityPendingProvisions}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityPendingProvisions = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityPendingProvisions} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityPendingProvisions, 39));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityPendingProvisions|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityPendingProvisions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityPendingProvisions = function() {
  return this.setLiquidityPendingProvisions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityPendingProvisions = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional LiquidityPartiesLiquidityOrders liquidity_parties_liquidity_orders = 40;
 * @return {?proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityPartiesLiquidityOrders = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders, 40));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityPartiesLiquidityOrders = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityPartiesLiquidityOrders = function() {
  return this.setLiquidityPartiesLiquidityOrders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityPartiesLiquidityOrders = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional LiquidityPartiesOrders liquidity_parties_orders = 41;
 * @return {?proto.vega.snapshot.v1.LiquidityPartiesOrders}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityPartiesOrders = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityPartiesOrders} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityPartiesOrders, 41));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityPartiesOrders|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityPartiesOrders = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityPartiesOrders = function() {
  return this.setLiquidityPartiesOrders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityPartiesOrders = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional LiquidityProvisions liquidity_provisions = 42;
 * @return {?proto.vega.snapshot.v1.LiquidityProvisions}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityProvisions = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityProvisions} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityProvisions, 42));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityProvisions|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityProvisions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityProvisions = function() {
  return this.setLiquidityProvisions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityProvisions = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional LiquiditySupplied liquidity_supplied = 43;
 * @return {?proto.vega.snapshot.v1.LiquiditySupplied}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquiditySupplied = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquiditySupplied} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquiditySupplied, 43));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquiditySupplied|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquiditySupplied = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquiditySupplied = function() {
  return this.setLiquiditySupplied(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquiditySupplied = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional LiquidityTarget liquidity_target = 44;
 * @return {?proto.vega.snapshot.v1.LiquidityTarget}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityTarget = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityTarget} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityTarget, 44));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityTarget|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityTarget = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityTarget = function() {
  return this.setLiquidityTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityTarget = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional FloatingPointConsensus floating_point_consensus = 46;
 * @return {?proto.vega.snapshot.v1.FloatingPointConsensus}
 */
proto.vega.snapshot.v1.Payload.prototype.getFloatingPointConsensus = function() {
  return /** @type{?proto.vega.snapshot.v1.FloatingPointConsensus} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.FloatingPointConsensus, 46));
};


/**
 * @param {?proto.vega.snapshot.v1.FloatingPointConsensus|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setFloatingPointConsensus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 46, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearFloatingPointConsensus = function() {
  return this.setFloatingPointConsensus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasFloatingPointConsensus = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional MarketTracker market_tracker = 47;
 * @return {?proto.vega.snapshot.v1.MarketTracker}
 */
proto.vega.snapshot.v1.Payload.prototype.getMarketTracker = function() {
  return /** @type{?proto.vega.snapshot.v1.MarketTracker} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.MarketTracker, 47));
};


/**
 * @param {?proto.vega.snapshot.v1.MarketTracker|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setMarketTracker = function(value) {
  return jspb.Message.setOneofWrapperField(this, 47, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearMarketTracker = function() {
  return this.setMarketTracker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasMarketTracker = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional BankingRecurringTransfers banking_recurring_transfers = 49;
 * @return {?proto.vega.snapshot.v1.BankingRecurringTransfers}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingRecurringTransfers = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingRecurringTransfers} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingRecurringTransfers, 49));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingRecurringTransfers|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingRecurringTransfers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 49, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingRecurringTransfers = function() {
  return this.setBankingRecurringTransfers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingRecurringTransfers = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional BankingScheduledTransfers banking_scheduled_transfers = 50;
 * @return {?proto.vega.snapshot.v1.BankingScheduledTransfers}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingScheduledTransfers = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingScheduledTransfers} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingScheduledTransfers, 50));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingScheduledTransfers|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingScheduledTransfers = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingScheduledTransfers = function() {
  return this.setBankingScheduledTransfers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingScheduledTransfers = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional ERC20MultiSigTopologyVerified erc20_multisig_topology_verified = 51;
 * @return {?proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified}
 */
proto.vega.snapshot.v1.Payload.prototype.getErc20MultisigTopologyVerified = function() {
  return /** @type{?proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified, 51));
};


/**
 * @param {?proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setErc20MultisigTopologyVerified = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearErc20MultisigTopologyVerified = function() {
  return this.setErc20MultisigTopologyVerified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasErc20MultisigTopologyVerified = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional ERC20MultiSigTopologyPending erc20_multisig_topology_pending = 52;
 * @return {?proto.vega.snapshot.v1.ERC20MultiSigTopologyPending}
 */
proto.vega.snapshot.v1.Payload.prototype.getErc20MultisigTopologyPending = function() {
  return /** @type{?proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ERC20MultiSigTopologyPending, 52));
};


/**
 * @param {?proto.vega.snapshot.v1.ERC20MultiSigTopologyPending|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setErc20MultisigTopologyPending = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearErc20MultisigTopologyPending = function() {
  return this.setErc20MultisigTopologyPending(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasErc20MultisigTopologyPending = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional ProofOfWork proof_of_work = 53;
 * @return {?proto.vega.snapshot.v1.ProofOfWork}
 */
proto.vega.snapshot.v1.Payload.prototype.getProofOfWork = function() {
  return /** @type{?proto.vega.snapshot.v1.ProofOfWork} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ProofOfWork, 53));
};


/**
 * @param {?proto.vega.snapshot.v1.ProofOfWork|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setProofOfWork = function(value) {
  return jspb.Message.setOneofWrapperField(this, 53, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearProofOfWork = function() {
  return this.setProofOfWork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasProofOfWork = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional PendingAssetUpdates pending_asset_updates = 54;
 * @return {?proto.vega.snapshot.v1.PendingAssetUpdates}
 */
proto.vega.snapshot.v1.Payload.prototype.getPendingAssetUpdates = function() {
  return /** @type{?proto.vega.snapshot.v1.PendingAssetUpdates} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.PendingAssetUpdates, 54));
};


/**
 * @param {?proto.vega.snapshot.v1.PendingAssetUpdates|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setPendingAssetUpdates = function(value) {
  return jspb.Message.setOneofWrapperField(this, 54, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearPendingAssetUpdates = function() {
  return this.setPendingAssetUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasPendingAssetUpdates = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional ProtocolUpgradeProposals protocol_upgrade_proposals = 55;
 * @return {?proto.vega.snapshot.v1.ProtocolUpgradeProposals}
 */
proto.vega.snapshot.v1.Payload.prototype.getProtocolUpgradeProposals = function() {
  return /** @type{?proto.vega.snapshot.v1.ProtocolUpgradeProposals} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ProtocolUpgradeProposals, 55));
};


/**
 * @param {?proto.vega.snapshot.v1.ProtocolUpgradeProposals|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setProtocolUpgradeProposals = function(value) {
  return jspb.Message.setOneofWrapperField(this, 55, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearProtocolUpgradeProposals = function() {
  return this.setProtocolUpgradeProposals(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasProtocolUpgradeProposals = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional BankingBridgeState banking_bridge_state = 56;
 * @return {?proto.vega.snapshot.v1.BankingBridgeState}
 */
proto.vega.snapshot.v1.Payload.prototype.getBankingBridgeState = function() {
  return /** @type{?proto.vega.snapshot.v1.BankingBridgeState} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.BankingBridgeState, 56));
};


/**
 * @param {?proto.vega.snapshot.v1.BankingBridgeState|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setBankingBridgeState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 56, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearBankingBridgeState = function() {
  return this.setBankingBridgeState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasBankingBridgeState = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional SettlementState settlement_state = 57;
 * @return {?proto.vega.snapshot.v1.SettlementState}
 */
proto.vega.snapshot.v1.Payload.prototype.getSettlementState = function() {
  return /** @type{?proto.vega.snapshot.v1.SettlementState} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.SettlementState, 57));
};


/**
 * @param {?proto.vega.snapshot.v1.SettlementState|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setSettlementState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 57, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearSettlementState = function() {
  return this.setSettlementState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasSettlementState = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional LiquidityScores liquidity_scores = 58;
 * @return {?proto.vega.snapshot.v1.LiquidityScores}
 */
proto.vega.snapshot.v1.Payload.prototype.getLiquidityScores = function() {
  return /** @type{?proto.vega.snapshot.v1.LiquidityScores} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.LiquidityScores, 58));
};


/**
 * @param {?proto.vega.snapshot.v1.LiquidityScores|undefined} value
 * @return {!proto.vega.snapshot.v1.Payload} returns this
*/
proto.vega.snapshot.v1.Payload.prototype.setLiquidityScores = function(value) {
  return jspb.Message.setOneofWrapperField(this, 58, proto.vega.snapshot.v1.Payload.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Payload} returns this
 */
proto.vega.snapshot.v1.Payload.prototype.clearLiquidityScores = function() {
  return this.setLiquidityScores(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Payload.prototype.hasLiquidityScores = function() {
  return jspb.Message.getField(this, 58) != null;
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
proto.vega.snapshot.v1.TimestampedOpenInterest.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.TimestampedOpenInterest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.TimestampedOpenInterest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.toObject = function(includeInstance, msg) {
  var f, obj = {
    openInterest: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.vega.snapshot.v1.TimestampedOpenInterest}
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.TimestampedOpenInterest;
  return proto.vega.snapshot.v1.TimestampedOpenInterest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.TimestampedOpenInterest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.TimestampedOpenInterest}
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpenInterest(value);
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
proto.vega.snapshot.v1.TimestampedOpenInterest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.TimestampedOpenInterest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.TimestampedOpenInterest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenInterest();
  if (f !== 0) {
    writer.writeUint64(
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
 * optional uint64 open_interest = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.prototype.getOpenInterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.TimestampedOpenInterest} returns this
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.prototype.setOpenInterest = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 time = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.TimestampedOpenInterest} returns this
 */
proto.vega.snapshot.v1.TimestampedOpenInterest.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquidityTarget.repeatedFields_ = [4,5];



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
proto.vega.snapshot.v1.LiquidityTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currentTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    scheduledTruncate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentOpenInterestsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    previousOpenInterestsList: jspb.Message.toObjectList(msg.getPreviousOpenInterestsList(),
    proto.vega.snapshot.v1.TimestampedOpenInterest.toObject, includeInstance),
    maxOpenInterests: (f = msg.getMaxOpenInterests()) && proto.vega.snapshot.v1.TimestampedOpenInterest.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.LiquidityTarget}
 */
proto.vega.snapshot.v1.LiquidityTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityTarget;
  return proto.vega.snapshot.v1.LiquidityTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityTarget}
 */
proto.vega.snapshot.v1.LiquidityTarget.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCurrentTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduledTruncate(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCurrentOpenInterests(values[i]);
      }
      break;
    case 5:
      var value = new proto.vega.snapshot.v1.TimestampedOpenInterest;
      reader.readMessage(value,proto.vega.snapshot.v1.TimestampedOpenInterest.deserializeBinaryFromReader);
      msg.addPreviousOpenInterests(value);
      break;
    case 6:
      var value = new proto.vega.snapshot.v1.TimestampedOpenInterest;
      reader.readMessage(value,proto.vega.snapshot.v1.TimestampedOpenInterest.deserializeBinaryFromReader);
      msg.setMaxOpenInterests(value);
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
proto.vega.snapshot.v1.LiquidityTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrentTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getScheduledTruncate();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrentOpenInterestsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      4,
      f
    );
  }
  f = message.getPreviousOpenInterestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vega.snapshot.v1.TimestampedOpenInterest.serializeBinaryToWriter
    );
  }
  f = message.getMaxOpenInterests();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.vega.snapshot.v1.TimestampedOpenInterest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 current_time = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.getCurrentTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.setCurrentTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 scheduled_truncate = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.getScheduledTruncate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.setScheduledTruncate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated uint64 current_open_interests = 4;
 * @return {!Array<number>}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.getCurrentOpenInterestsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.setCurrentOpenInterestsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.addCurrentOpenInterests = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.clearCurrentOpenInterestsList = function() {
  return this.setCurrentOpenInterestsList([]);
};


/**
 * repeated TimestampedOpenInterest previous_open_interests = 5;
 * @return {!Array<!proto.vega.snapshot.v1.TimestampedOpenInterest>}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.getPreviousOpenInterestsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.TimestampedOpenInterest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.TimestampedOpenInterest, 5));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.TimestampedOpenInterest>} value
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
*/
proto.vega.snapshot.v1.LiquidityTarget.prototype.setPreviousOpenInterestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vega.snapshot.v1.TimestampedOpenInterest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.TimestampedOpenInterest}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.addPreviousOpenInterests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vega.snapshot.v1.TimestampedOpenInterest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.clearPreviousOpenInterestsList = function() {
  return this.setPreviousOpenInterestsList([]);
};


/**
 * optional TimestampedOpenInterest max_open_interests = 6;
 * @return {?proto.vega.snapshot.v1.TimestampedOpenInterest}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.getMaxOpenInterests = function() {
  return /** @type{?proto.vega.snapshot.v1.TimestampedOpenInterest} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.TimestampedOpenInterest, 6));
};


/**
 * @param {?proto.vega.snapshot.v1.TimestampedOpenInterest|undefined} value
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
*/
proto.vega.snapshot.v1.LiquidityTarget.prototype.setMaxOpenInterests = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.LiquidityTarget} returns this
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.clearMaxOpenInterests = function() {
  return this.setMaxOpenInterests(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.LiquidityTarget.prototype.hasMaxOpenInterests = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, ""),
    probability: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair}
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityPriceProbabilityPair;
  return proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair}
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setProbability(value);
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
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProbability();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string price = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair} returns this
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string probability = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.prototype.getProbability = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair} returns this
 */
proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.prototype.setProbability = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquiditySupplied.repeatedFields_ = [3,4];



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
proto.vega.snapshot.v1.LiquiditySupplied.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquiditySupplied.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquiditySupplied} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquiditySupplied.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    consensusReached: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    bidCacheList: jspb.Message.toObjectList(msg.getBidCacheList(),
    proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.toObject, includeInstance),
    askCacheList: jspb.Message.toObjectList(msg.getAskCacheList(),
    proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied}
 */
proto.vega.snapshot.v1.LiquiditySupplied.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquiditySupplied;
  return proto.vega.snapshot.v1.LiquiditySupplied.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquiditySupplied} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied}
 */
proto.vega.snapshot.v1.LiquiditySupplied.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConsensusReached(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.LiquidityPriceProbabilityPair;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.deserializeBinaryFromReader);
      msg.addBidCache(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.LiquidityPriceProbabilityPair;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.deserializeBinaryFromReader);
      msg.addAskCache(value);
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
proto.vega.snapshot.v1.LiquiditySupplied.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquiditySupplied.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquiditySupplied} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquiditySupplied.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConsensusReached();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBidCacheList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.serializeBinaryToWriter
    );
  }
  f = message.getAskCacheList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.LiquidityPriceProbabilityPair.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied} returns this
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool consensus_reached = 2;
 * @return {boolean}
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.getConsensusReached = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied} returns this
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.setConsensusReached = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated LiquidityPriceProbabilityPair bid_cache = 3;
 * @return {!Array<!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair>}
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.getBidCacheList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.LiquidityPriceProbabilityPair, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair>} value
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied} returns this
*/
proto.vega.snapshot.v1.LiquiditySupplied.prototype.setBidCacheList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair}
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.addBidCache = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.LiquidityPriceProbabilityPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied} returns this
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.clearBidCacheList = function() {
  return this.setBidCacheList([]);
};


/**
 * repeated LiquidityPriceProbabilityPair ask_cache = 4;
 * @return {!Array<!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair>}
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.getAskCacheList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.LiquidityPriceProbabilityPair, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair>} value
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied} returns this
*/
proto.vega.snapshot.v1.LiquiditySupplied.prototype.setAskCacheList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.LiquidityPriceProbabilityPair}
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.addAskCache = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.LiquidityPriceProbabilityPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquiditySupplied} returns this
 */
proto.vega.snapshot.v1.LiquiditySupplied.prototype.clearAskCacheList = function() {
  return this.setAskCacheList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.OracleDataBatch.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.OracleDataBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.OracleDataBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.OracleDataBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.OracleDataBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    oracleDataList: jspb.Message.toObjectList(msg.getOracleDataList(),
    proto.vega.snapshot.v1.OracleData.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.OracleDataBatch}
 */
proto.vega.snapshot.v1.OracleDataBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.OracleDataBatch;
  return proto.vega.snapshot.v1.OracleDataBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.OracleDataBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.OracleDataBatch}
 */
proto.vega.snapshot.v1.OracleDataBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.OracleData;
      reader.readMessage(value,proto.vega.snapshot.v1.OracleData.deserializeBinaryFromReader);
      msg.addOracleData(value);
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
proto.vega.snapshot.v1.OracleDataBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.OracleDataBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.OracleDataBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.OracleDataBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOracleDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.OracleData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OracleData oracle_data = 1;
 * @return {!Array<!proto.vega.snapshot.v1.OracleData>}
 */
proto.vega.snapshot.v1.OracleDataBatch.prototype.getOracleDataList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.OracleData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.OracleData, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.OracleData>} value
 * @return {!proto.vega.snapshot.v1.OracleDataBatch} returns this
*/
proto.vega.snapshot.v1.OracleDataBatch.prototype.setOracleDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.OracleData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.OracleData}
 */
proto.vega.snapshot.v1.OracleDataBatch.prototype.addOracleData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.OracleData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.OracleDataBatch} returns this
 */
proto.vega.snapshot.v1.OracleDataBatch.prototype.clearOracleDataList = function() {
  return this.setOracleDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.OracleData.repeatedFields_ = [1,2];



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
proto.vega.snapshot.v1.OracleData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.OracleData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.OracleData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.OracleData.toObject = function(includeInstance, msg) {
  var f, obj = {
    signersList: jspb.Message.toObjectList(msg.getSignersList(),
    vega_data_v1_data_pb.Signer.toObject, includeInstance),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.vega.snapshot.v1.OracleDataPair.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.OracleData}
 */
proto.vega.snapshot.v1.OracleData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.OracleData;
  return proto.vega.snapshot.v1.OracleData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.OracleData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.OracleData}
 */
proto.vega.snapshot.v1.OracleData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_data_v1_data_pb.Signer;
      reader.readMessage(value,vega_data_v1_data_pb.Signer.deserializeBinaryFromReader);
      msg.addSigners(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.OracleDataPair;
      reader.readMessage(value,proto.vega.snapshot.v1.OracleDataPair.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.vega.snapshot.v1.OracleData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.OracleData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.OracleData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.OracleData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_data_v1_data_pb.Signer.serializeBinaryToWriter
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.OracleDataPair.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.data.v1.Signer signers = 1;
 * @return {!Array<!proto.vega.data.v1.Signer>}
 */
proto.vega.snapshot.v1.OracleData.prototype.getSignersList = function() {
  return /** @type{!Array<!proto.vega.data.v1.Signer>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_data_v1_data_pb.Signer, 1));
};


/**
 * @param {!Array<!proto.vega.data.v1.Signer>} value
 * @return {!proto.vega.snapshot.v1.OracleData} returns this
*/
proto.vega.snapshot.v1.OracleData.prototype.setSignersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.data.v1.Signer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.data.v1.Signer}
 */
proto.vega.snapshot.v1.OracleData.prototype.addSigners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.data.v1.Signer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.OracleData} returns this
 */
proto.vega.snapshot.v1.OracleData.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * repeated OracleDataPair data = 2;
 * @return {!Array<!proto.vega.snapshot.v1.OracleDataPair>}
 */
proto.vega.snapshot.v1.OracleData.prototype.getDataList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.OracleDataPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.OracleDataPair, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.OracleDataPair>} value
 * @return {!proto.vega.snapshot.v1.OracleData} returns this
*/
proto.vega.snapshot.v1.OracleData.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.OracleDataPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.OracleDataPair}
 */
proto.vega.snapshot.v1.OracleData.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.OracleDataPair, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.OracleData} returns this
 */
proto.vega.snapshot.v1.OracleData.prototype.clearDataList = function() {
  return this.setDataList([]);
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
proto.vega.snapshot.v1.OracleDataPair.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.OracleDataPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.OracleDataPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.OracleDataPair.toObject = function(includeInstance, msg) {
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
 * @return {!proto.vega.snapshot.v1.OracleDataPair}
 */
proto.vega.snapshot.v1.OracleDataPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.OracleDataPair;
  return proto.vega.snapshot.v1.OracleDataPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.OracleDataPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.OracleDataPair}
 */
proto.vega.snapshot.v1.OracleDataPair.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.snapshot.v1.OracleDataPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.OracleDataPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.OracleDataPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.OracleDataPair.serializeBinaryToWriter = function(message, writer) {
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
proto.vega.snapshot.v1.OracleDataPair.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.OracleDataPair} returns this
 */
proto.vega.snapshot.v1.OracleDataPair.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.OracleDataPair.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.OracleDataPair} returns this
 */
proto.vega.snapshot.v1.OracleDataPair.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Witness.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.Witness.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Witness.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Witness} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Witness.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.vega.snapshot.v1.Resource.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.Witness}
 */
proto.vega.snapshot.v1.Witness.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Witness;
  return proto.vega.snapshot.v1.Witness.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Witness} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Witness}
 */
proto.vega.snapshot.v1.Witness.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.Resource;
      reader.readMessage(value,proto.vega.snapshot.v1.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
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
proto.vega.snapshot.v1.Witness.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Witness.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Witness} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Witness.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Resource resources = 1;
 * @return {!Array<!proto.vega.snapshot.v1.Resource>}
 */
proto.vega.snapshot.v1.Witness.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.Resource, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.Resource>} value
 * @return {!proto.vega.snapshot.v1.Witness} returns this
*/
proto.vega.snapshot.v1.Witness.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Resource}
 */
proto.vega.snapshot.v1.Witness.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Witness} returns this
 */
proto.vega.snapshot.v1.Witness.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Resource.repeatedFields_ = [3];



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
proto.vega.snapshot.v1.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    checkUntil: jspb.Message.getFieldWithDefault(msg, 2, 0),
    votesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    state: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.snapshot.v1.Resource}
 */
proto.vega.snapshot.v1.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Resource;
  return proto.vega.snapshot.v1.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Resource}
 */
proto.vega.snapshot.v1.Resource.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCheckUntil(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addVotes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
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
proto.vega.snapshot.v1.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCheckUntil();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.Resource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Resource} returns this
 */
proto.vega.snapshot.v1.Resource.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 check_until = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.Resource.prototype.getCheckUntil = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Resource} returns this
 */
proto.vega.snapshot.v1.Resource.prototype.setCheckUntil = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string votes = 3;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.Resource.prototype.getVotesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.Resource} returns this
 */
proto.vega.snapshot.v1.Resource.prototype.setVotesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Resource} returns this
 */
proto.vega.snapshot.v1.Resource.prototype.addVotes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Resource} returns this
 */
proto.vega.snapshot.v1.Resource.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};


/**
 * optional uint32 state = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.Resource.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Resource} returns this
 */
proto.vega.snapshot.v1.Resource.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.EventForwarder.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.EventForwarder.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.EventForwarder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.EventForwarder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EventForwarder.toObject = function(includeInstance, msg) {
  var f, obj = {
    ackedEventsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.EventForwarder}
 */
proto.vega.snapshot.v1.EventForwarder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.EventForwarder;
  return proto.vega.snapshot.v1.EventForwarder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.EventForwarder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.EventForwarder}
 */
proto.vega.snapshot.v1.EventForwarder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAckedEvents(value);
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
proto.vega.snapshot.v1.EventForwarder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.EventForwarder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.EventForwarder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EventForwarder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAckedEventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string acked_events = 1;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.EventForwarder.prototype.getAckedEventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.EventForwarder} returns this
 */
proto.vega.snapshot.v1.EventForwarder.prototype.setAckedEventsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.EventForwarder} returns this
 */
proto.vega.snapshot.v1.EventForwarder.prototype.addAckedEvents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.EventForwarder} returns this
 */
proto.vega.snapshot.v1.EventForwarder.prototype.clearAckedEventsList = function() {
  return this.setAckedEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.CollateralAccounts.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.CollateralAccounts.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.CollateralAccounts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.CollateralAccounts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.CollateralAccounts.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    vega_vega_pb.Account.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.CollateralAccounts}
 */
proto.vega.snapshot.v1.CollateralAccounts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.CollateralAccounts;
  return proto.vega.snapshot.v1.CollateralAccounts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.CollateralAccounts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.CollateralAccounts}
 */
proto.vega.snapshot.v1.CollateralAccounts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Account;
      reader.readMessage(value,vega_vega_pb.Account.deserializeBinaryFromReader);
      msg.addAccounts(value);
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
proto.vega.snapshot.v1.CollateralAccounts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.CollateralAccounts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.CollateralAccounts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.CollateralAccounts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Account accounts = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.vega.snapshot.v1.CollateralAccounts.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.vega.snapshot.v1.CollateralAccounts} returns this
*/
proto.vega.snapshot.v1.CollateralAccounts.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.vega.snapshot.v1.CollateralAccounts.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.CollateralAccounts} returns this
 */
proto.vega.snapshot.v1.CollateralAccounts.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.CollateralAssets.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.CollateralAssets.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.CollateralAssets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.CollateralAssets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.CollateralAssets.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    vega_assets_pb.Asset.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.CollateralAssets}
 */
proto.vega.snapshot.v1.CollateralAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.CollateralAssets;
  return proto.vega.snapshot.v1.CollateralAssets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.CollateralAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.CollateralAssets}
 */
proto.vega.snapshot.v1.CollateralAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
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
proto.vega.snapshot.v1.CollateralAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.CollateralAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.CollateralAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.CollateralAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Asset assets = 1;
 * @return {!Array<!proto.vega.Asset>}
 */
proto.vega.snapshot.v1.CollateralAssets.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.vega.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_assets_pb.Asset, 1));
};


/**
 * @param {!Array<!proto.vega.Asset>} value
 * @return {!proto.vega.snapshot.v1.CollateralAssets} returns this
*/
proto.vega.snapshot.v1.CollateralAssets.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Asset}
 */
proto.vega.snapshot.v1.CollateralAssets.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.CollateralAssets} returns this
 */
proto.vega.snapshot.v1.CollateralAssets.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ActiveAssets.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.ActiveAssets.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ActiveAssets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ActiveAssets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ActiveAssets.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    vega_assets_pb.Asset.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ActiveAssets}
 */
proto.vega.snapshot.v1.ActiveAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ActiveAssets;
  return proto.vega.snapshot.v1.ActiveAssets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ActiveAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ActiveAssets}
 */
proto.vega.snapshot.v1.ActiveAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
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
proto.vega.snapshot.v1.ActiveAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ActiveAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ActiveAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ActiveAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Asset assets = 1;
 * @return {!Array<!proto.vega.Asset>}
 */
proto.vega.snapshot.v1.ActiveAssets.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.vega.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_assets_pb.Asset, 1));
};


/**
 * @param {!Array<!proto.vega.Asset>} value
 * @return {!proto.vega.snapshot.v1.ActiveAssets} returns this
*/
proto.vega.snapshot.v1.ActiveAssets.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Asset}
 */
proto.vega.snapshot.v1.ActiveAssets.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ActiveAssets} returns this
 */
proto.vega.snapshot.v1.ActiveAssets.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.PendingAssets.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.PendingAssets.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PendingAssets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PendingAssets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingAssets.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    vega_assets_pb.Asset.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.PendingAssets}
 */
proto.vega.snapshot.v1.PendingAssets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PendingAssets;
  return proto.vega.snapshot.v1.PendingAssets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PendingAssets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PendingAssets}
 */
proto.vega.snapshot.v1.PendingAssets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
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
proto.vega.snapshot.v1.PendingAssets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PendingAssets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PendingAssets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingAssets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Asset assets = 1;
 * @return {!Array<!proto.vega.Asset>}
 */
proto.vega.snapshot.v1.PendingAssets.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.vega.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_assets_pb.Asset, 1));
};


/**
 * @param {!Array<!proto.vega.Asset>} value
 * @return {!proto.vega.snapshot.v1.PendingAssets} returns this
*/
proto.vega.snapshot.v1.PendingAssets.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Asset}
 */
proto.vega.snapshot.v1.PendingAssets.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PendingAssets} returns this
 */
proto.vega.snapshot.v1.PendingAssets.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.PendingAssetUpdates.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.PendingAssetUpdates.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PendingAssetUpdates.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PendingAssetUpdates} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingAssetUpdates.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    vega_assets_pb.Asset.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.PendingAssetUpdates}
 */
proto.vega.snapshot.v1.PendingAssetUpdates.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PendingAssetUpdates;
  return proto.vega.snapshot.v1.PendingAssetUpdates.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PendingAssetUpdates} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PendingAssetUpdates}
 */
proto.vega.snapshot.v1.PendingAssetUpdates.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_assets_pb.Asset;
      reader.readMessage(value,vega_assets_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
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
proto.vega.snapshot.v1.PendingAssetUpdates.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PendingAssetUpdates.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PendingAssetUpdates} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingAssetUpdates.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_assets_pb.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Asset assets = 1;
 * @return {!Array<!proto.vega.Asset>}
 */
proto.vega.snapshot.v1.PendingAssetUpdates.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.vega.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_assets_pb.Asset, 1));
};


/**
 * @param {!Array<!proto.vega.Asset>} value
 * @return {!proto.vega.snapshot.v1.PendingAssetUpdates} returns this
*/
proto.vega.snapshot.v1.PendingAssetUpdates.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Asset}
 */
proto.vega.snapshot.v1.PendingAssetUpdates.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PendingAssetUpdates} returns this
 */
proto.vega.snapshot.v1.PendingAssetUpdates.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
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
proto.vega.snapshot.v1.Withdrawal.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Withdrawal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Withdrawal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Withdrawal.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: jspb.Message.getFieldWithDefault(msg, 1, ""),
    withdrawal: (f = msg.getWithdrawal()) && vega_vega_pb.Withdrawal.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.Withdrawal}
 */
proto.vega.snapshot.v1.Withdrawal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Withdrawal;
  return proto.vega.snapshot.v1.Withdrawal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Withdrawal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Withdrawal}
 */
proto.vega.snapshot.v1.Withdrawal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 2:
      var value = new vega_vega_pb.Withdrawal;
      reader.readMessage(value,vega_vega_pb.Withdrawal.deserializeBinaryFromReader);
      msg.setWithdrawal(value);
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
proto.vega.snapshot.v1.Withdrawal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Withdrawal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Withdrawal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Withdrawal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRef();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWithdrawal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      vega_vega_pb.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ref = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.Withdrawal.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Withdrawal} returns this
 */
proto.vega.snapshot.v1.Withdrawal.prototype.setRef = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional vega.Withdrawal withdrawal = 2;
 * @return {?proto.vega.Withdrawal}
 */
proto.vega.snapshot.v1.Withdrawal.prototype.getWithdrawal = function() {
  return /** @type{?proto.vega.Withdrawal} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Withdrawal, 2));
};


/**
 * @param {?proto.vega.Withdrawal|undefined} value
 * @return {!proto.vega.snapshot.v1.Withdrawal} returns this
*/
proto.vega.snapshot.v1.Withdrawal.prototype.setWithdrawal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Withdrawal} returns this
 */
proto.vega.snapshot.v1.Withdrawal.prototype.clearWithdrawal = function() {
  return this.setWithdrawal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Withdrawal.prototype.hasWithdrawal = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.vega.snapshot.v1.Deposit.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Deposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Deposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Deposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deposit: (f = msg.getDeposit()) && vega_vega_pb.Deposit.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.Deposit}
 */
proto.vega.snapshot.v1.Deposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Deposit;
  return proto.vega.snapshot.v1.Deposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Deposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Deposit}
 */
proto.vega.snapshot.v1.Deposit.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new vega_vega_pb.Deposit;
      reader.readMessage(value,vega_vega_pb.Deposit.deserializeBinaryFromReader);
      msg.setDeposit(value);
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
proto.vega.snapshot.v1.Deposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Deposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Deposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Deposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeposit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      vega_vega_pb.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.Deposit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Deposit} returns this
 */
proto.vega.snapshot.v1.Deposit.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional vega.Deposit deposit = 2;
 * @return {?proto.vega.Deposit}
 */
proto.vega.snapshot.v1.Deposit.prototype.getDeposit = function() {
  return /** @type{?proto.vega.Deposit} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.Deposit, 2));
};


/**
 * @param {?proto.vega.Deposit|undefined} value
 * @return {!proto.vega.snapshot.v1.Deposit} returns this
*/
proto.vega.snapshot.v1.Deposit.prototype.setDeposit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Deposit} returns this
 */
proto.vega.snapshot.v1.Deposit.prototype.clearDeposit = function() {
  return this.setDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Deposit.prototype.hasDeposit = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.vega.snapshot.v1.TxRef.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.TxRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.TxRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TxRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockNr: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    logIndex: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.snapshot.v1.TxRef}
 */
proto.vega.snapshot.v1.TxRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.TxRef;
  return proto.vega.snapshot.v1.TxRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.TxRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.TxRef}
 */
proto.vega.snapshot.v1.TxRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNr(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogIndex(value);
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
proto.vega.snapshot.v1.TxRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.TxRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.TxRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TxRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockNr();
  if (f !== 0) {
    writer.writeUint64(
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
  f = message.getLogIndex();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string asset = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.TxRef.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.TxRef} returns this
 */
proto.vega.snapshot.v1.TxRef.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 block_nr = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.TxRef.prototype.getBlockNr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.TxRef} returns this
 */
proto.vega.snapshot.v1.TxRef.prototype.setBlockNr = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string hash = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.TxRef.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.TxRef} returns this
 */
proto.vega.snapshot.v1.TxRef.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 log_index = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.TxRef.prototype.getLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.TxRef} returns this
 */
proto.vega.snapshot.v1.TxRef.prototype.setLogIndex = function(value) {
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
proto.vega.snapshot.v1.AssetAction.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.AssetAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.AssetAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AssetAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockNumber: jspb.Message.getFieldWithDefault(msg, 4, 0),
    txIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    builtinDeposit: (f = msg.getBuiltinDeposit()) && vega_chain_events_pb.BuiltinAssetDeposit.toObject(includeInstance, f),
    erc20Deposit: (f = msg.getErc20Deposit()) && vega_chain_events_pb.ERC20Deposit.toObject(includeInstance, f),
    assetList: (f = msg.getAssetList()) && vega_chain_events_pb.ERC20AssetList.toObject(includeInstance, f),
    erc20AssetLimitsUpdated: (f = msg.getErc20AssetLimitsUpdated()) && vega_chain_events_pb.ERC20AssetLimitsUpdated.toObject(includeInstance, f),
    erc20BridgeStopped: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    erc20BridgeResumed: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.vega.snapshot.v1.AssetAction}
 */
proto.vega.snapshot.v1.AssetAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.AssetAction;
  return proto.vega.snapshot.v1.AssetAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.AssetAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.AssetAction}
 */
proto.vega.snapshot.v1.AssetAction.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNumber(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxIndex(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 7:
      var value = new vega_chain_events_pb.BuiltinAssetDeposit;
      reader.readMessage(value,vega_chain_events_pb.BuiltinAssetDeposit.deserializeBinaryFromReader);
      msg.setBuiltinDeposit(value);
      break;
    case 8:
      var value = new vega_chain_events_pb.ERC20Deposit;
      reader.readMessage(value,vega_chain_events_pb.ERC20Deposit.deserializeBinaryFromReader);
      msg.setErc20Deposit(value);
      break;
    case 9:
      var value = new vega_chain_events_pb.ERC20AssetList;
      reader.readMessage(value,vega_chain_events_pb.ERC20AssetList.deserializeBinaryFromReader);
      msg.setAssetList(value);
      break;
    case 10:
      var value = new vega_chain_events_pb.ERC20AssetLimitsUpdated;
      reader.readMessage(value,vega_chain_events_pb.ERC20AssetLimitsUpdated.deserializeBinaryFromReader);
      msg.setErc20AssetLimitsUpdated(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setErc20BridgeStopped(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setErc20BridgeResumed(value);
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
proto.vega.snapshot.v1.AssetAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.AssetAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.AssetAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AssetAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeUint32(
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
  f = message.getBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTxIndex();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuiltinDeposit();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      vega_chain_events_pb.BuiltinAssetDeposit.serializeBinaryToWriter
    );
  }
  f = message.getErc20Deposit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      vega_chain_events_pb.ERC20Deposit.serializeBinaryToWriter
    );
  }
  f = message.getAssetList();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      vega_chain_events_pb.ERC20AssetList.serializeBinaryToWriter
    );
  }
  f = message.getErc20AssetLimitsUpdated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      vega_chain_events_pb.ERC20AssetLimitsUpdated.serializeBinaryToWriter
    );
  }
  f = message.getErc20BridgeStopped();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getErc20BridgeResumed();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 state = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 block_number = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setBlockNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 tx_index = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getTxIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setTxIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string hash = 6;
 * @return {string}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional vega.BuiltinAssetDeposit builtin_deposit = 7;
 * @return {?proto.vega.BuiltinAssetDeposit}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getBuiltinDeposit = function() {
  return /** @type{?proto.vega.BuiltinAssetDeposit} */ (
    jspb.Message.getWrapperField(this, vega_chain_events_pb.BuiltinAssetDeposit, 7));
};


/**
 * @param {?proto.vega.BuiltinAssetDeposit|undefined} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
*/
proto.vega.snapshot.v1.AssetAction.prototype.setBuiltinDeposit = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.clearBuiltinDeposit = function() {
  return this.setBuiltinDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.AssetAction.prototype.hasBuiltinDeposit = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional vega.ERC20Deposit erc20_deposit = 8;
 * @return {?proto.vega.ERC20Deposit}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getErc20Deposit = function() {
  return /** @type{?proto.vega.ERC20Deposit} */ (
    jspb.Message.getWrapperField(this, vega_chain_events_pb.ERC20Deposit, 8));
};


/**
 * @param {?proto.vega.ERC20Deposit|undefined} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
*/
proto.vega.snapshot.v1.AssetAction.prototype.setErc20Deposit = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.clearErc20Deposit = function() {
  return this.setErc20Deposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.AssetAction.prototype.hasErc20Deposit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional vega.ERC20AssetList asset_list = 9;
 * @return {?proto.vega.ERC20AssetList}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getAssetList = function() {
  return /** @type{?proto.vega.ERC20AssetList} */ (
    jspb.Message.getWrapperField(this, vega_chain_events_pb.ERC20AssetList, 9));
};


/**
 * @param {?proto.vega.ERC20AssetList|undefined} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
*/
proto.vega.snapshot.v1.AssetAction.prototype.setAssetList = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.clearAssetList = function() {
  return this.setAssetList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.AssetAction.prototype.hasAssetList = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional vega.ERC20AssetLimitsUpdated erc20_asset_limits_updated = 10;
 * @return {?proto.vega.ERC20AssetLimitsUpdated}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getErc20AssetLimitsUpdated = function() {
  return /** @type{?proto.vega.ERC20AssetLimitsUpdated} */ (
    jspb.Message.getWrapperField(this, vega_chain_events_pb.ERC20AssetLimitsUpdated, 10));
};


/**
 * @param {?proto.vega.ERC20AssetLimitsUpdated|undefined} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
*/
proto.vega.snapshot.v1.AssetAction.prototype.setErc20AssetLimitsUpdated = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.clearErc20AssetLimitsUpdated = function() {
  return this.setErc20AssetLimitsUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.AssetAction.prototype.hasErc20AssetLimitsUpdated = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool erc20_bridge_stopped = 11;
 * @return {boolean}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getErc20BridgeStopped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setErc20BridgeStopped = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool erc20_bridge_resumed = 12;
 * @return {boolean}
 */
proto.vega.snapshot.v1.AssetAction.prototype.getErc20BridgeResumed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.AssetAction} returns this
 */
proto.vega.snapshot.v1.AssetAction.prototype.setErc20BridgeResumed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.BankingWithdrawals.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.BankingWithdrawals.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingWithdrawals.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingWithdrawals} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingWithdrawals.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawalsList: jspb.Message.toObjectList(msg.getWithdrawalsList(),
    proto.vega.snapshot.v1.Withdrawal.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.BankingWithdrawals}
 */
proto.vega.snapshot.v1.BankingWithdrawals.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingWithdrawals;
  return proto.vega.snapshot.v1.BankingWithdrawals.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingWithdrawals} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingWithdrawals}
 */
proto.vega.snapshot.v1.BankingWithdrawals.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.Withdrawal;
      reader.readMessage(value,proto.vega.snapshot.v1.Withdrawal.deserializeBinaryFromReader);
      msg.addWithdrawals(value);
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
proto.vega.snapshot.v1.BankingWithdrawals.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingWithdrawals.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingWithdrawals} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingWithdrawals.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.Withdrawal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Withdrawal withdrawals = 1;
 * @return {!Array<!proto.vega.snapshot.v1.Withdrawal>}
 */
proto.vega.snapshot.v1.BankingWithdrawals.prototype.getWithdrawalsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.Withdrawal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.Withdrawal, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.Withdrawal>} value
 * @return {!proto.vega.snapshot.v1.BankingWithdrawals} returns this
*/
proto.vega.snapshot.v1.BankingWithdrawals.prototype.setWithdrawalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.Withdrawal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Withdrawal}
 */
proto.vega.snapshot.v1.BankingWithdrawals.prototype.addWithdrawals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.Withdrawal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.BankingWithdrawals} returns this
 */
proto.vega.snapshot.v1.BankingWithdrawals.prototype.clearWithdrawalsList = function() {
  return this.setWithdrawalsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.BankingDeposits.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.BankingDeposits.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingDeposits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingDeposits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingDeposits.toObject = function(includeInstance, msg) {
  var f, obj = {
    depositList: jspb.Message.toObjectList(msg.getDepositList(),
    proto.vega.snapshot.v1.Deposit.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.BankingDeposits}
 */
proto.vega.snapshot.v1.BankingDeposits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingDeposits;
  return proto.vega.snapshot.v1.BankingDeposits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingDeposits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingDeposits}
 */
proto.vega.snapshot.v1.BankingDeposits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.Deposit;
      reader.readMessage(value,proto.vega.snapshot.v1.Deposit.deserializeBinaryFromReader);
      msg.addDeposit(value);
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
proto.vega.snapshot.v1.BankingDeposits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingDeposits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingDeposits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingDeposits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepositList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Deposit deposit = 1;
 * @return {!Array<!proto.vega.snapshot.v1.Deposit>}
 */
proto.vega.snapshot.v1.BankingDeposits.prototype.getDepositList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.Deposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.Deposit, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.Deposit>} value
 * @return {!proto.vega.snapshot.v1.BankingDeposits} returns this
*/
proto.vega.snapshot.v1.BankingDeposits.prototype.setDepositList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.Deposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Deposit}
 */
proto.vega.snapshot.v1.BankingDeposits.prototype.addDeposit = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.Deposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.BankingDeposits} returns this
 */
proto.vega.snapshot.v1.BankingDeposits.prototype.clearDepositList = function() {
  return this.setDepositList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.BankingSeen.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.BankingSeen.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingSeen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingSeen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingSeen.toObject = function(includeInstance, msg) {
  var f, obj = {
    refsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.BankingSeen}
 */
proto.vega.snapshot.v1.BankingSeen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingSeen;
  return proto.vega.snapshot.v1.BankingSeen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingSeen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingSeen}
 */
proto.vega.snapshot.v1.BankingSeen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRefs(value);
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
proto.vega.snapshot.v1.BankingSeen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingSeen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingSeen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingSeen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string refs = 1;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.BankingSeen.prototype.getRefsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.BankingSeen} returns this
 */
proto.vega.snapshot.v1.BankingSeen.prototype.setRefsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.BankingSeen} returns this
 */
proto.vega.snapshot.v1.BankingSeen.prototype.addRefs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.BankingSeen} returns this
 */
proto.vega.snapshot.v1.BankingSeen.prototype.clearRefsList = function() {
  return this.setRefsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.BankingAssetActions.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.BankingAssetActions.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingAssetActions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingAssetActions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingAssetActions.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetActionList: jspb.Message.toObjectList(msg.getAssetActionList(),
    proto.vega.snapshot.v1.AssetAction.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.BankingAssetActions}
 */
proto.vega.snapshot.v1.BankingAssetActions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingAssetActions;
  return proto.vega.snapshot.v1.BankingAssetActions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingAssetActions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingAssetActions}
 */
proto.vega.snapshot.v1.BankingAssetActions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.AssetAction;
      reader.readMessage(value,proto.vega.snapshot.v1.AssetAction.deserializeBinaryFromReader);
      msg.addAssetAction(value);
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
proto.vega.snapshot.v1.BankingAssetActions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingAssetActions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingAssetActions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingAssetActions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetActionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.AssetAction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AssetAction asset_action = 1;
 * @return {!Array<!proto.vega.snapshot.v1.AssetAction>}
 */
proto.vega.snapshot.v1.BankingAssetActions.prototype.getAssetActionList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.AssetAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.AssetAction, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.AssetAction>} value
 * @return {!proto.vega.snapshot.v1.BankingAssetActions} returns this
*/
proto.vega.snapshot.v1.BankingAssetActions.prototype.setAssetActionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.AssetAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.AssetAction}
 */
proto.vega.snapshot.v1.BankingAssetActions.prototype.addAssetAction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.AssetAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.BankingAssetActions} returns this
 */
proto.vega.snapshot.v1.BankingAssetActions.prototype.clearAssetActionList = function() {
  return this.setAssetActionList([]);
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
proto.vega.snapshot.v1.BankingRecurringTransfers.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingRecurringTransfers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingRecurringTransfers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.toObject = function(includeInstance, msg) {
  var f, obj = {
    recurringTransfers: (f = msg.getRecurringTransfers()) && vega_checkpoint_v1_checkpoint_pb.RecurringTransfers.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.BankingRecurringTransfers}
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingRecurringTransfers;
  return proto.vega.snapshot.v1.BankingRecurringTransfers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingRecurringTransfers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingRecurringTransfers}
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_checkpoint_v1_checkpoint_pb.RecurringTransfers;
      reader.readMessage(value,vega_checkpoint_v1_checkpoint_pb.RecurringTransfers.deserializeBinaryFromReader);
      msg.setRecurringTransfers(value);
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
proto.vega.snapshot.v1.BankingRecurringTransfers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingRecurringTransfers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingRecurringTransfers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecurringTransfers();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_checkpoint_v1_checkpoint_pb.RecurringTransfers.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.checkpoint.v1.RecurringTransfers recurring_transfers = 1;
 * @return {?proto.vega.checkpoint.v1.RecurringTransfers}
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.prototype.getRecurringTransfers = function() {
  return /** @type{?proto.vega.checkpoint.v1.RecurringTransfers} */ (
    jspb.Message.getWrapperField(this, vega_checkpoint_v1_checkpoint_pb.RecurringTransfers, 1));
};


/**
 * @param {?proto.vega.checkpoint.v1.RecurringTransfers|undefined} value
 * @return {!proto.vega.snapshot.v1.BankingRecurringTransfers} returns this
*/
proto.vega.snapshot.v1.BankingRecurringTransfers.prototype.setRecurringTransfers = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.BankingRecurringTransfers} returns this
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.prototype.clearRecurringTransfers = function() {
  return this.setRecurringTransfers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.BankingRecurringTransfers.prototype.hasRecurringTransfers = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.BankingScheduledTransfers.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingScheduledTransfers.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingScheduledTransfers} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfersAtTimeList: jspb.Message.toObjectList(msg.getTransfersAtTimeList(),
    vega_checkpoint_v1_checkpoint_pb.ScheduledTransferAtTime.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.BankingScheduledTransfers}
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingScheduledTransfers;
  return proto.vega.snapshot.v1.BankingScheduledTransfers.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingScheduledTransfers} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingScheduledTransfers}
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_checkpoint_v1_checkpoint_pb.ScheduledTransferAtTime;
      reader.readMessage(value,vega_checkpoint_v1_checkpoint_pb.ScheduledTransferAtTime.deserializeBinaryFromReader);
      msg.addTransfersAtTime(value);
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
proto.vega.snapshot.v1.BankingScheduledTransfers.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingScheduledTransfers.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingScheduledTransfers} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfersAtTimeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_checkpoint_v1_checkpoint_pb.ScheduledTransferAtTime.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.checkpoint.v1.ScheduledTransferAtTime transfers_at_time = 1;
 * @return {!Array<!proto.vega.checkpoint.v1.ScheduledTransferAtTime>}
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.prototype.getTransfersAtTimeList = function() {
  return /** @type{!Array<!proto.vega.checkpoint.v1.ScheduledTransferAtTime>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_checkpoint_v1_checkpoint_pb.ScheduledTransferAtTime, 1));
};


/**
 * @param {!Array<!proto.vega.checkpoint.v1.ScheduledTransferAtTime>} value
 * @return {!proto.vega.snapshot.v1.BankingScheduledTransfers} returns this
*/
proto.vega.snapshot.v1.BankingScheduledTransfers.prototype.setTransfersAtTimeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.checkpoint.v1.ScheduledTransferAtTime=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.checkpoint.v1.ScheduledTransferAtTime}
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.prototype.addTransfersAtTime = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.checkpoint.v1.ScheduledTransferAtTime, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.BankingScheduledTransfers} returns this
 */
proto.vega.snapshot.v1.BankingScheduledTransfers.prototype.clearTransfersAtTimeList = function() {
  return this.setTransfersAtTimeList([]);
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
proto.vega.snapshot.v1.BankingBridgeState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BankingBridgeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BankingBridgeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingBridgeState.toObject = function(includeInstance, msg) {
  var f, obj = {
    bridgeState: (f = msg.getBridgeState()) && vega_checkpoint_v1_checkpoint_pb.BridgeState.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.BankingBridgeState}
 */
proto.vega.snapshot.v1.BankingBridgeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BankingBridgeState;
  return proto.vega.snapshot.v1.BankingBridgeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BankingBridgeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BankingBridgeState}
 */
proto.vega.snapshot.v1.BankingBridgeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_checkpoint_v1_checkpoint_pb.BridgeState;
      reader.readMessage(value,vega_checkpoint_v1_checkpoint_pb.BridgeState.deserializeBinaryFromReader);
      msg.setBridgeState(value);
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
proto.vega.snapshot.v1.BankingBridgeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BankingBridgeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BankingBridgeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BankingBridgeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBridgeState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_checkpoint_v1_checkpoint_pb.BridgeState.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.checkpoint.v1.BridgeState bridge_state = 1;
 * @return {?proto.vega.checkpoint.v1.BridgeState}
 */
proto.vega.snapshot.v1.BankingBridgeState.prototype.getBridgeState = function() {
  return /** @type{?proto.vega.checkpoint.v1.BridgeState} */ (
    jspb.Message.getWrapperField(this, vega_checkpoint_v1_checkpoint_pb.BridgeState, 1));
};


/**
 * @param {?proto.vega.checkpoint.v1.BridgeState|undefined} value
 * @return {!proto.vega.snapshot.v1.BankingBridgeState} returns this
*/
proto.vega.snapshot.v1.BankingBridgeState.prototype.setBridgeState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.BankingBridgeState} returns this
 */
proto.vega.snapshot.v1.BankingBridgeState.prototype.clearBridgeState = function() {
  return this.setBridgeState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.BankingBridgeState.prototype.hasBridgeState = function() {
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
proto.vega.snapshot.v1.Checkpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Checkpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Checkpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Checkpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextCp: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.snapshot.v1.Checkpoint}
 */
proto.vega.snapshot.v1.Checkpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Checkpoint;
  return proto.vega.snapshot.v1.Checkpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Checkpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Checkpoint}
 */
proto.vega.snapshot.v1.Checkpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextCp(value);
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
proto.vega.snapshot.v1.Checkpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Checkpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Checkpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Checkpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextCp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 next_cp = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.Checkpoint.prototype.getNextCp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Checkpoint} returns this
 */
proto.vega.snapshot.v1.Checkpoint.prototype.setNextCp = function(value) {
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
proto.vega.snapshot.v1.DelegationLastReconciliationTime.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.DelegationLastReconciliationTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.DelegationLastReconciliationTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationLastReconciliationTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastReconciliationTime: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.vega.snapshot.v1.DelegationLastReconciliationTime}
 */
proto.vega.snapshot.v1.DelegationLastReconciliationTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.DelegationLastReconciliationTime;
  return proto.vega.snapshot.v1.DelegationLastReconciliationTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.DelegationLastReconciliationTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.DelegationLastReconciliationTime}
 */
proto.vega.snapshot.v1.DelegationLastReconciliationTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastReconciliationTime(value);
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
proto.vega.snapshot.v1.DelegationLastReconciliationTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.DelegationLastReconciliationTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.DelegationLastReconciliationTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationLastReconciliationTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastReconciliationTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 last_reconciliation_time = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.DelegationLastReconciliationTime.prototype.getLastReconciliationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.DelegationLastReconciliationTime} returns this
 */
proto.vega.snapshot.v1.DelegationLastReconciliationTime.prototype.setLastReconciliationTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.DelegationActive.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.DelegationActive.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.DelegationActive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.DelegationActive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationActive.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    vega_vega_pb.Delegation.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.DelegationActive}
 */
proto.vega.snapshot.v1.DelegationActive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.DelegationActive;
  return proto.vega.snapshot.v1.DelegationActive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.DelegationActive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.DelegationActive}
 */
proto.vega.snapshot.v1.DelegationActive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Delegation;
      reader.readMessage(value,vega_vega_pb.Delegation.deserializeBinaryFromReader);
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
proto.vega.snapshot.v1.DelegationActive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.DelegationActive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.DelegationActive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationActive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Delegation delegations = 1;
 * @return {!Array<!proto.vega.Delegation>}
 */
proto.vega.snapshot.v1.DelegationActive.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.vega.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Delegation, 1));
};


/**
 * @param {!Array<!proto.vega.Delegation>} value
 * @return {!proto.vega.snapshot.v1.DelegationActive} returns this
*/
proto.vega.snapshot.v1.DelegationActive.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Delegation}
 */
proto.vega.snapshot.v1.DelegationActive.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.DelegationActive} returns this
 */
proto.vega.snapshot.v1.DelegationActive.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.DelegationPending.repeatedFields_ = [1,2];



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
proto.vega.snapshot.v1.DelegationPending.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.DelegationPending.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.DelegationPending} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationPending.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    vega_vega_pb.Delegation.toObject, includeInstance),
    undelegationList: jspb.Message.toObjectList(msg.getUndelegationList(),
    vega_vega_pb.Delegation.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.DelegationPending}
 */
proto.vega.snapshot.v1.DelegationPending.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.DelegationPending;
  return proto.vega.snapshot.v1.DelegationPending.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.DelegationPending} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.DelegationPending}
 */
proto.vega.snapshot.v1.DelegationPending.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.Delegation;
      reader.readMessage(value,vega_vega_pb.Delegation.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    case 2:
      var value = new vega_vega_pb.Delegation;
      reader.readMessage(value,vega_vega_pb.Delegation.deserializeBinaryFromReader);
      msg.addUndelegation(value);
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
proto.vega.snapshot.v1.DelegationPending.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.DelegationPending.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.DelegationPending} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationPending.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.Delegation.serializeBinaryToWriter
    );
  }
  f = message.getUndelegationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_vega_pb.Delegation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Delegation delegations = 1;
 * @return {!Array<!proto.vega.Delegation>}
 */
proto.vega.snapshot.v1.DelegationPending.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.vega.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Delegation, 1));
};


/**
 * @param {!Array<!proto.vega.Delegation>} value
 * @return {!proto.vega.snapshot.v1.DelegationPending} returns this
*/
proto.vega.snapshot.v1.DelegationPending.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Delegation}
 */
proto.vega.snapshot.v1.DelegationPending.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.DelegationPending} returns this
 */
proto.vega.snapshot.v1.DelegationPending.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};


/**
 * repeated vega.Delegation undelegation = 2;
 * @return {!Array<!proto.vega.Delegation>}
 */
proto.vega.snapshot.v1.DelegationPending.prototype.getUndelegationList = function() {
  return /** @type{!Array<!proto.vega.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Delegation, 2));
};


/**
 * @param {!Array<!proto.vega.Delegation>} value
 * @return {!proto.vega.snapshot.v1.DelegationPending} returns this
*/
proto.vega.snapshot.v1.DelegationPending.prototype.setUndelegationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Delegation}
 */
proto.vega.snapshot.v1.DelegationPending.prototype.addUndelegation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Delegation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.DelegationPending} returns this
 */
proto.vega.snapshot.v1.DelegationPending.prototype.clearUndelegationList = function() {
  return this.setUndelegationList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.DelegationAuto.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.DelegationAuto.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.DelegationAuto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.DelegationAuto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationAuto.toObject = function(includeInstance, msg) {
  var f, obj = {
    partiesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.DelegationAuto}
 */
proto.vega.snapshot.v1.DelegationAuto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.DelegationAuto;
  return proto.vega.snapshot.v1.DelegationAuto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.DelegationAuto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.DelegationAuto}
 */
proto.vega.snapshot.v1.DelegationAuto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addParties(value);
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
proto.vega.snapshot.v1.DelegationAuto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.DelegationAuto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.DelegationAuto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DelegationAuto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string parties = 1;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.DelegationAuto.prototype.getPartiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.DelegationAuto} returns this
 */
proto.vega.snapshot.v1.DelegationAuto.prototype.setPartiesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.DelegationAuto} returns this
 */
proto.vega.snapshot.v1.DelegationAuto.prototype.addParties = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.DelegationAuto} returns this
 */
proto.vega.snapshot.v1.DelegationAuto.prototype.clearPartiesList = function() {
  return this.setPartiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ProposalData.repeatedFields_ = [2,3,4];



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
proto.vega.snapshot.v1.ProposalData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProposalData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProposalData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProposalData.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: (f = msg.getProposal()) && vega_governance_pb.Proposal.toObject(includeInstance, f),
    yesList: jspb.Message.toObjectList(msg.getYesList(),
    vega_governance_pb.Vote.toObject, includeInstance),
    noList: jspb.Message.toObjectList(msg.getNoList(),
    vega_governance_pb.Vote.toObject, includeInstance),
    invalidList: jspb.Message.toObjectList(msg.getInvalidList(),
    vega_governance_pb.Vote.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ProposalData}
 */
proto.vega.snapshot.v1.ProposalData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProposalData;
  return proto.vega.snapshot.v1.ProposalData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProposalData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProposalData}
 */
proto.vega.snapshot.v1.ProposalData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.Proposal;
      reader.readMessage(value,vega_governance_pb.Proposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 2:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.addYes(value);
      break;
    case 3:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.addNo(value);
      break;
    case 4:
      var value = new vega_governance_pb.Vote;
      reader.readMessage(value,vega_governance_pb.Vote.deserializeBinaryFromReader);
      msg.addInvalid(value);
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
proto.vega.snapshot.v1.ProposalData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProposalData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProposalData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProposalData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_governance_pb.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getYesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
  f = message.getNoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
  f = message.getInvalidList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      vega_governance_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.Proposal proposal = 1;
 * @return {?proto.vega.Proposal}
 */
proto.vega.snapshot.v1.ProposalData.prototype.getProposal = function() {
  return /** @type{?proto.vega.Proposal} */ (
    jspb.Message.getWrapperField(this, vega_governance_pb.Proposal, 1));
};


/**
 * @param {?proto.vega.Proposal|undefined} value
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
*/
proto.vega.snapshot.v1.ProposalData.prototype.setProposal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
 */
proto.vega.snapshot.v1.ProposalData.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.ProposalData.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated vega.Vote yes = 2;
 * @return {!Array<!proto.vega.Vote>}
 */
proto.vega.snapshot.v1.ProposalData.prototype.getYesList = function() {
  return /** @type{!Array<!proto.vega.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.Vote, 2));
};


/**
 * @param {!Array<!proto.vega.Vote>} value
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
*/
proto.vega.snapshot.v1.ProposalData.prototype.setYesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Vote}
 */
proto.vega.snapshot.v1.ProposalData.prototype.addYes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
 */
proto.vega.snapshot.v1.ProposalData.prototype.clearYesList = function() {
  return this.setYesList([]);
};


/**
 * repeated vega.Vote no = 3;
 * @return {!Array<!proto.vega.Vote>}
 */
proto.vega.snapshot.v1.ProposalData.prototype.getNoList = function() {
  return /** @type{!Array<!proto.vega.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.Vote, 3));
};


/**
 * @param {!Array<!proto.vega.Vote>} value
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
*/
proto.vega.snapshot.v1.ProposalData.prototype.setNoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Vote}
 */
proto.vega.snapshot.v1.ProposalData.prototype.addNo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
 */
proto.vega.snapshot.v1.ProposalData.prototype.clearNoList = function() {
  return this.setNoList([]);
};


/**
 * repeated vega.Vote invalid = 4;
 * @return {!Array<!proto.vega.Vote>}
 */
proto.vega.snapshot.v1.ProposalData.prototype.getInvalidList = function() {
  return /** @type{!Array<!proto.vega.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.Vote, 4));
};


/**
 * @param {!Array<!proto.vega.Vote>} value
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
*/
proto.vega.snapshot.v1.ProposalData.prototype.setInvalidList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Vote}
 */
proto.vega.snapshot.v1.ProposalData.prototype.addInvalid = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProposalData} returns this
 */
proto.vega.snapshot.v1.ProposalData.prototype.clearInvalidList = function() {
  return this.setInvalidList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.GovernanceEnacted.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.GovernanceEnacted.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.GovernanceEnacted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.GovernanceEnacted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.GovernanceEnacted.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalsList: jspb.Message.toObjectList(msg.getProposalsList(),
    proto.vega.snapshot.v1.ProposalData.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.GovernanceEnacted}
 */
proto.vega.snapshot.v1.GovernanceEnacted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.GovernanceEnacted;
  return proto.vega.snapshot.v1.GovernanceEnacted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.GovernanceEnacted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.GovernanceEnacted}
 */
proto.vega.snapshot.v1.GovernanceEnacted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.ProposalData;
      reader.readMessage(value,proto.vega.snapshot.v1.ProposalData.deserializeBinaryFromReader);
      msg.addProposals(value);
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
proto.vega.snapshot.v1.GovernanceEnacted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.GovernanceEnacted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.GovernanceEnacted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.GovernanceEnacted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.ProposalData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProposalData proposals = 1;
 * @return {!Array<!proto.vega.snapshot.v1.ProposalData>}
 */
proto.vega.snapshot.v1.GovernanceEnacted.prototype.getProposalsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ProposalData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ProposalData, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ProposalData>} value
 * @return {!proto.vega.snapshot.v1.GovernanceEnacted} returns this
*/
proto.vega.snapshot.v1.GovernanceEnacted.prototype.setProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ProposalData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProposalData}
 */
proto.vega.snapshot.v1.GovernanceEnacted.prototype.addProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.ProposalData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.GovernanceEnacted} returns this
 */
proto.vega.snapshot.v1.GovernanceEnacted.prototype.clearProposalsList = function() {
  return this.setProposalsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.GovernanceActive.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.GovernanceActive.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.GovernanceActive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.GovernanceActive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.GovernanceActive.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalsList: jspb.Message.toObjectList(msg.getProposalsList(),
    proto.vega.snapshot.v1.ProposalData.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.GovernanceActive}
 */
proto.vega.snapshot.v1.GovernanceActive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.GovernanceActive;
  return proto.vega.snapshot.v1.GovernanceActive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.GovernanceActive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.GovernanceActive}
 */
proto.vega.snapshot.v1.GovernanceActive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.ProposalData;
      reader.readMessage(value,proto.vega.snapshot.v1.ProposalData.deserializeBinaryFromReader);
      msg.addProposals(value);
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
proto.vega.snapshot.v1.GovernanceActive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.GovernanceActive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.GovernanceActive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.GovernanceActive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.ProposalData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProposalData proposals = 1;
 * @return {!Array<!proto.vega.snapshot.v1.ProposalData>}
 */
proto.vega.snapshot.v1.GovernanceActive.prototype.getProposalsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ProposalData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ProposalData, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ProposalData>} value
 * @return {!proto.vega.snapshot.v1.GovernanceActive} returns this
*/
proto.vega.snapshot.v1.GovernanceActive.prototype.setProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ProposalData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProposalData}
 */
proto.vega.snapshot.v1.GovernanceActive.prototype.addProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.ProposalData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.GovernanceActive} returns this
 */
proto.vega.snapshot.v1.GovernanceActive.prototype.clearProposalsList = function() {
  return this.setProposalsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.GovernanceNode.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.GovernanceNode.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.GovernanceNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.GovernanceNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.GovernanceNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalsList: jspb.Message.toObjectList(msg.getProposalsList(),
    vega_governance_pb.Proposal.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.GovernanceNode}
 */
proto.vega.snapshot.v1.GovernanceNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.GovernanceNode;
  return proto.vega.snapshot.v1.GovernanceNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.GovernanceNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.GovernanceNode}
 */
proto.vega.snapshot.v1.GovernanceNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_governance_pb.Proposal;
      reader.readMessage(value,vega_governance_pb.Proposal.deserializeBinaryFromReader);
      msg.addProposals(value);
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
proto.vega.snapshot.v1.GovernanceNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.GovernanceNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.GovernanceNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.GovernanceNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_governance_pb.Proposal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Proposal proposals = 1;
 * @return {!Array<!proto.vega.Proposal>}
 */
proto.vega.snapshot.v1.GovernanceNode.prototype.getProposalsList = function() {
  return /** @type{!Array<!proto.vega.Proposal>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_governance_pb.Proposal, 1));
};


/**
 * @param {!Array<!proto.vega.Proposal>} value
 * @return {!proto.vega.snapshot.v1.GovernanceNode} returns this
*/
proto.vega.snapshot.v1.GovernanceNode.prototype.setProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Proposal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Proposal}
 */
proto.vega.snapshot.v1.GovernanceNode.prototype.addProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Proposal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.GovernanceNode} returns this
 */
proto.vega.snapshot.v1.GovernanceNode.prototype.clearProposalsList = function() {
  return this.setProposalsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.StakingAccount.repeatedFields_ = [3];



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
proto.vega.snapshot.v1.StakingAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.StakingAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.StakingAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakingAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    vega_events_v1_events_pb.StakeLinking.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.StakingAccount}
 */
proto.vega.snapshot.v1.StakingAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.StakingAccount;
  return proto.vega.snapshot.v1.StakingAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.StakingAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.StakingAccount}
 */
proto.vega.snapshot.v1.StakingAccount.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBalance(value);
      break;
    case 3:
      var value = new vega_events_v1_events_pb.StakeLinking;
      reader.readMessage(value,vega_events_v1_events_pb.StakeLinking.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.vega.snapshot.v1.StakingAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.StakingAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.StakingAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakingAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      vega_events_v1_events_pb.StakeLinking.serializeBinaryToWriter
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.StakingAccount.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakingAccount} returns this
 */
proto.vega.snapshot.v1.StakingAccount.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string balance = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.StakingAccount.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakingAccount} returns this
 */
proto.vega.snapshot.v1.StakingAccount.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated vega.events.v1.StakeLinking events = 3;
 * @return {!Array<!proto.vega.events.v1.StakeLinking>}
 */
proto.vega.snapshot.v1.StakingAccount.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.vega.events.v1.StakeLinking>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.StakeLinking, 3));
};


/**
 * @param {!Array<!proto.vega.events.v1.StakeLinking>} value
 * @return {!proto.vega.snapshot.v1.StakingAccount} returns this
*/
proto.vega.snapshot.v1.StakingAccount.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.events.v1.StakeLinking=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.StakeLinking}
 */
proto.vega.snapshot.v1.StakingAccount.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.events.v1.StakeLinking, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.StakingAccount} returns this
 */
proto.vega.snapshot.v1.StakingAccount.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.StakingAccounts.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.StakingAccounts.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.StakingAccounts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.StakingAccounts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakingAccounts.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.vega.snapshot.v1.StakingAccount.toObject, includeInstance),
    stakingAssetTotalSupply: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.StakingAccounts}
 */
proto.vega.snapshot.v1.StakingAccounts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.StakingAccounts;
  return proto.vega.snapshot.v1.StakingAccounts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.StakingAccounts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.StakingAccounts}
 */
proto.vega.snapshot.v1.StakingAccounts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.StakingAccount;
      reader.readMessage(value,proto.vega.snapshot.v1.StakingAccount.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakingAssetTotalSupply(value);
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
proto.vega.snapshot.v1.StakingAccounts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.StakingAccounts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.StakingAccounts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakingAccounts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.StakingAccount.serializeBinaryToWriter
    );
  }
  f = message.getStakingAssetTotalSupply();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated StakingAccount accounts = 1;
 * @return {!Array<!proto.vega.snapshot.v1.StakingAccount>}
 */
proto.vega.snapshot.v1.StakingAccounts.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.StakingAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.StakingAccount, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.StakingAccount>} value
 * @return {!proto.vega.snapshot.v1.StakingAccounts} returns this
*/
proto.vega.snapshot.v1.StakingAccounts.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.StakingAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.StakingAccount}
 */
proto.vega.snapshot.v1.StakingAccounts.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.StakingAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.StakingAccounts} returns this
 */
proto.vega.snapshot.v1.StakingAccounts.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional string staking_asset_total_supply = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.StakingAccounts.prototype.getStakingAssetTotalSupply = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakingAccounts} returns this
 */
proto.vega.snapshot.v1.StakingAccounts.prototype.setStakingAssetTotalSupply = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.MatchingBook.repeatedFields_ = [2,3];



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
proto.vega.snapshot.v1.MatchingBook.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.MatchingBook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.MatchingBook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.MatchingBook.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    vega_vega_pb.Order.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    vega_vega_pb.Order.toObject, includeInstance),
    lastTradedPrice: jspb.Message.getFieldWithDefault(msg, 4, ""),
    auction: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    batchId: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.vega.snapshot.v1.MatchingBook}
 */
proto.vega.snapshot.v1.MatchingBook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.MatchingBook;
  return proto.vega.snapshot.v1.MatchingBook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.MatchingBook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.MatchingBook}
 */
proto.vega.snapshot.v1.MatchingBook.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastTradedPrice(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuction(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBatchId(value);
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
proto.vega.snapshot.v1.MatchingBook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.MatchingBook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.MatchingBook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.MatchingBook.serializeBinaryToWriter = function(message, writer) {
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
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
  f = message.getLastTradedPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuction();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getBatchId();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
 */
proto.vega.snapshot.v1.MatchingBook.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.Order buy = 2;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 2));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
*/
proto.vega.snapshot.v1.MatchingBook.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
 */
proto.vega.snapshot.v1.MatchingBook.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated vega.Order sell = 3;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 3));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
*/
proto.vega.snapshot.v1.MatchingBook.prototype.setSellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
 */
proto.vega.snapshot.v1.MatchingBook.prototype.clearSellList = function() {
  return this.setSellList([]);
};


/**
 * optional string last_traded_price = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.getLastTradedPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
 */
proto.vega.snapshot.v1.MatchingBook.prototype.setLastTradedPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool auction = 5;
 * @return {boolean}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.getAuction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
 */
proto.vega.snapshot.v1.MatchingBook.prototype.setAuction = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint64 batch_id = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.MatchingBook.prototype.getBatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.MatchingBook} returns this
 */
proto.vega.snapshot.v1.MatchingBook.prototype.setBatchId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.NetParams.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.NetParams.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.NetParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.NetParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NetParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    vega_vega_pb.NetworkParameter.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.NetParams}
 */
proto.vega.snapshot.v1.NetParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.NetParams;
  return proto.vega.snapshot.v1.NetParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.NetParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.NetParams}
 */
proto.vega.snapshot.v1.NetParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.NetworkParameter;
      reader.readMessage(value,vega_vega_pb.NetworkParameter.deserializeBinaryFromReader);
      msg.addParams(value);
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
proto.vega.snapshot.v1.NetParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.NetParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.NetParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NetParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.NetworkParameter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.NetworkParameter params = 1;
 * @return {!Array<!proto.vega.NetworkParameter>}
 */
proto.vega.snapshot.v1.NetParams.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.vega.NetworkParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.NetworkParameter, 1));
};


/**
 * @param {!Array<!proto.vega.NetworkParameter>} value
 * @return {!proto.vega.snapshot.v1.NetParams} returns this
*/
proto.vega.snapshot.v1.NetParams.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.NetworkParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.NetworkParameter}
 */
proto.vega.snapshot.v1.NetParams.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.NetworkParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.NetParams} returns this
 */
proto.vega.snapshot.v1.NetParams.prototype.clearParamsList = function() {
  return this.setParamsList([]);
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
proto.vega.snapshot.v1.DecimalMap.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.DecimalMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.DecimalMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DecimalMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    val: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.DecimalMap}
 */
proto.vega.snapshot.v1.DecimalMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.DecimalMap;
  return proto.vega.snapshot.v1.DecimalMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.DecimalMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.DecimalMap}
 */
proto.vega.snapshot.v1.DecimalMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVal(value);
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
proto.vega.snapshot.v1.DecimalMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.DecimalMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.DecimalMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.DecimalMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVal();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 key = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.DecimalMap.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.DecimalMap} returns this
 */
proto.vega.snapshot.v1.DecimalMap.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string val = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.DecimalMap.prototype.getVal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.DecimalMap} returns this
 */
proto.vega.snapshot.v1.DecimalMap.prototype.setVal = function(value) {
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
proto.vega.snapshot.v1.TimePrice.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.TimePrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.TimePrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TimePrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.vega.snapshot.v1.TimePrice}
 */
proto.vega.snapshot.v1.TimePrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.TimePrice;
  return proto.vega.snapshot.v1.TimePrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.TimePrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.TimePrice}
 */
proto.vega.snapshot.v1.TimePrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
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
proto.vega.snapshot.v1.TimePrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.TimePrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.TimePrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TimePrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
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
 * optional int64 time = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.TimePrice.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.TimePrice} returns this
 */
proto.vega.snapshot.v1.TimePrice.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.TimePrice.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.TimePrice} returns this
 */
proto.vega.snapshot.v1.TimePrice.prototype.setPrice = function(value) {
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
proto.vega.snapshot.v1.PriceVolume.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PriceVolume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PriceVolume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceVolume.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volume: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.snapshot.v1.PriceVolume}
 */
proto.vega.snapshot.v1.PriceVolume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PriceVolume;
  return proto.vega.snapshot.v1.PriceVolume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PriceVolume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PriceVolume}
 */
proto.vega.snapshot.v1.PriceVolume.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.snapshot.v1.PriceVolume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PriceVolume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PriceVolume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceVolume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string price = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PriceVolume.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PriceVolume} returns this
 */
proto.vega.snapshot.v1.PriceVolume.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 volume = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.PriceVolume.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PriceVolume} returns this
 */
proto.vega.snapshot.v1.PriceVolume.prototype.setVolume = function(value) {
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
proto.vega.snapshot.v1.PriceRange.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PriceRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PriceRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: jspb.Message.getFieldWithDefault(msg, 1, ""),
    max: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ref: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.vega.snapshot.v1.PriceRange}
 */
proto.vega.snapshot.v1.PriceRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PriceRange;
  return proto.vega.snapshot.v1.PriceRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PriceRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PriceRange}
 */
proto.vega.snapshot.v1.PriceRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
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
proto.vega.snapshot.v1.PriceRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PriceRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PriceRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMax();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRef();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string min = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PriceRange.prototype.getMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PriceRange} returns this
 */
proto.vega.snapshot.v1.PriceRange.prototype.setMin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string max = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PriceRange.prototype.getMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PriceRange} returns this
 */
proto.vega.snapshot.v1.PriceRange.prototype.setMax = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ref = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.PriceRange.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PriceRange} returns this
 */
proto.vega.snapshot.v1.PriceRange.prototype.setRef = function(value) {
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
proto.vega.snapshot.v1.PriceBound.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PriceBound.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PriceBound} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceBound.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    upFactor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    downFactor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    trigger: (f = msg.getTrigger()) && vega_markets_pb.PriceMonitoringTrigger.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.PriceBound}
 */
proto.vega.snapshot.v1.PriceBound.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PriceBound;
  return proto.vega.snapshot.v1.PriceBound.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PriceBound} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PriceBound}
 */
proto.vega.snapshot.v1.PriceBound.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpFactor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownFactor(value);
      break;
    case 4:
      var value = new vega_markets_pb.PriceMonitoringTrigger;
      reader.readMessage(value,vega_markets_pb.PriceMonitoringTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
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
proto.vega.snapshot.v1.PriceBound.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PriceBound.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PriceBound} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceBound.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUpFactor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDownFactor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      vega_markets_pb.PriceMonitoringTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.vega.snapshot.v1.PriceBound.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.PriceBound} returns this
 */
proto.vega.snapshot.v1.PriceBound.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string up_factor = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PriceBound.prototype.getUpFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PriceBound} returns this
 */
proto.vega.snapshot.v1.PriceBound.prototype.setUpFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string down_factor = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.PriceBound.prototype.getDownFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PriceBound} returns this
 */
proto.vega.snapshot.v1.PriceBound.prototype.setDownFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional vega.PriceMonitoringTrigger trigger = 4;
 * @return {?proto.vega.PriceMonitoringTrigger}
 */
proto.vega.snapshot.v1.PriceBound.prototype.getTrigger = function() {
  return /** @type{?proto.vega.PriceMonitoringTrigger} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.PriceMonitoringTrigger, 4));
};


/**
 * @param {?proto.vega.PriceMonitoringTrigger|undefined} value
 * @return {!proto.vega.snapshot.v1.PriceBound} returns this
*/
proto.vega.snapshot.v1.PriceBound.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.PriceBound} returns this
 */
proto.vega.snapshot.v1.PriceBound.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.PriceBound.prototype.hasTrigger = function() {
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
proto.vega.snapshot.v1.PriceRangeCache.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PriceRangeCache.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PriceRangeCache} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceRangeCache.toObject = function(includeInstance, msg) {
  var f, obj = {
    bound: (f = msg.getBound()) && proto.vega.snapshot.v1.PriceBound.toObject(includeInstance, f),
    range: (f = msg.getRange()) && proto.vega.snapshot.v1.PriceRange.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.PriceRangeCache}
 */
proto.vega.snapshot.v1.PriceRangeCache.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PriceRangeCache;
  return proto.vega.snapshot.v1.PriceRangeCache.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PriceRangeCache} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PriceRangeCache}
 */
proto.vega.snapshot.v1.PriceRangeCache.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.PriceBound;
      reader.readMessage(value,proto.vega.snapshot.v1.PriceBound.deserializeBinaryFromReader);
      msg.setBound(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.PriceRange;
      reader.readMessage(value,proto.vega.snapshot.v1.PriceRange.deserializeBinaryFromReader);
      msg.setRange(value);
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
proto.vega.snapshot.v1.PriceRangeCache.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PriceRangeCache.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PriceRangeCache} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceRangeCache.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBound();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.snapshot.v1.PriceBound.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.snapshot.v1.PriceRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional PriceBound bound = 1;
 * @return {?proto.vega.snapshot.v1.PriceBound}
 */
proto.vega.snapshot.v1.PriceRangeCache.prototype.getBound = function() {
  return /** @type{?proto.vega.snapshot.v1.PriceBound} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.PriceBound, 1));
};


/**
 * @param {?proto.vega.snapshot.v1.PriceBound|undefined} value
 * @return {!proto.vega.snapshot.v1.PriceRangeCache} returns this
*/
proto.vega.snapshot.v1.PriceRangeCache.prototype.setBound = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.PriceRangeCache} returns this
 */
proto.vega.snapshot.v1.PriceRangeCache.prototype.clearBound = function() {
  return this.setBound(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.PriceRangeCache.prototype.hasBound = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PriceRange range = 2;
 * @return {?proto.vega.snapshot.v1.PriceRange}
 */
proto.vega.snapshot.v1.PriceRangeCache.prototype.getRange = function() {
  return /** @type{?proto.vega.snapshot.v1.PriceRange} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.PriceRange, 2));
};


/**
 * @param {?proto.vega.snapshot.v1.PriceRange|undefined} value
 * @return {!proto.vega.snapshot.v1.PriceRangeCache} returns this
*/
proto.vega.snapshot.v1.PriceRangeCache.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.PriceRangeCache} returns this
 */
proto.vega.snapshot.v1.PriceRangeCache.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.PriceRangeCache.prototype.hasRange = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.vega.snapshot.v1.CurrentPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.CurrentPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.CurrentPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.CurrentPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, ""),
    volume: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.snapshot.v1.CurrentPrice}
 */
proto.vega.snapshot.v1.CurrentPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.CurrentPrice;
  return proto.vega.snapshot.v1.CurrentPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.CurrentPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.CurrentPrice}
 */
proto.vega.snapshot.v1.CurrentPrice.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.snapshot.v1.CurrentPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.CurrentPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.CurrentPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.CurrentPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string price = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.CurrentPrice.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.CurrentPrice} returns this
 */
proto.vega.snapshot.v1.CurrentPrice.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 volume = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.CurrentPrice.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.CurrentPrice} returns this
 */
proto.vega.snapshot.v1.CurrentPrice.prototype.setVolume = function(value) {
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
proto.vega.snapshot.v1.PastPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PastPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PastPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PastPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFieldWithDefault(msg, 1, 0),
    volumeWeightedPrice: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.PastPrice}
 */
proto.vega.snapshot.v1.PastPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PastPrice;
  return proto.vega.snapshot.v1.PastPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PastPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PastPrice}
 */
proto.vega.snapshot.v1.PastPrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVolumeWeightedPrice(value);
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
proto.vega.snapshot.v1.PastPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PastPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PastPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PastPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVolumeWeightedPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 time = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.PastPrice.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PastPrice} returns this
 */
proto.vega.snapshot.v1.PastPrice.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string volume_weighted_price = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PastPrice.prototype.getVolumeWeightedPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PastPrice} returns this
 */
proto.vega.snapshot.v1.PastPrice.prototype.setVolumeWeightedPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.PriceMonitor.repeatedFields_ = [4,7,9,11,12,13];



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
proto.vega.snapshot.v1.PriceMonitor.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PriceMonitor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PriceMonitor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceMonitor.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialised: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    fpHorizonsList: jspb.Message.toObjectList(msg.getFpHorizonsList(),
    proto.vega.snapshot.v1.DecimalMap.toObject, includeInstance),
    now: jspb.Message.getFieldWithDefault(msg, 5, 0),
    update: jspb.Message.getFieldWithDefault(msg, 6, 0),
    boundsList: jspb.Message.toObjectList(msg.getBoundsList(),
    proto.vega.snapshot.v1.PriceBound.toObject, includeInstance),
    priceRangeCacheTime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    priceRangeCacheList: jspb.Message.toObjectList(msg.getPriceRangeCacheList(),
    proto.vega.snapshot.v1.PriceRangeCache.toObject, includeInstance),
    refPriceCacheTime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    refPriceCacheList: jspb.Message.toObjectList(msg.getRefPriceCacheList(),
    proto.vega.snapshot.v1.DecimalMap.toObject, includeInstance),
    pricesNowList: jspb.Message.toObjectList(msg.getPricesNowList(),
    proto.vega.snapshot.v1.CurrentPrice.toObject, includeInstance),
    pricesPastList: jspb.Message.toObjectList(msg.getPricesPastList(),
    proto.vega.snapshot.v1.PastPrice.toObject, includeInstance),
    consensusReached: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
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
 * @return {!proto.vega.snapshot.v1.PriceMonitor}
 */
proto.vega.snapshot.v1.PriceMonitor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PriceMonitor;
  return proto.vega.snapshot.v1.PriceMonitor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PriceMonitor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PriceMonitor}
 */
proto.vega.snapshot.v1.PriceMonitor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInitialised(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.DecimalMap;
      reader.readMessage(value,proto.vega.snapshot.v1.DecimalMap.deserializeBinaryFromReader);
      msg.addFpHorizons(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNow(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdate(value);
      break;
    case 7:
      var value = new proto.vega.snapshot.v1.PriceBound;
      reader.readMessage(value,proto.vega.snapshot.v1.PriceBound.deserializeBinaryFromReader);
      msg.addBounds(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPriceRangeCacheTime(value);
      break;
    case 9:
      var value = new proto.vega.snapshot.v1.PriceRangeCache;
      reader.readMessage(value,proto.vega.snapshot.v1.PriceRangeCache.deserializeBinaryFromReader);
      msg.addPriceRangeCache(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefPriceCacheTime(value);
      break;
    case 11:
      var value = new proto.vega.snapshot.v1.DecimalMap;
      reader.readMessage(value,proto.vega.snapshot.v1.DecimalMap.deserializeBinaryFromReader);
      msg.addRefPriceCache(value);
      break;
    case 12:
      var value = new proto.vega.snapshot.v1.CurrentPrice;
      reader.readMessage(value,proto.vega.snapshot.v1.CurrentPrice.deserializeBinaryFromReader);
      msg.addPricesNow(value);
      break;
    case 13:
      var value = new proto.vega.snapshot.v1.PastPrice;
      reader.readMessage(value,proto.vega.snapshot.v1.PastPrice.deserializeBinaryFromReader);
      msg.addPricesPast(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConsensusReached(value);
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
proto.vega.snapshot.v1.PriceMonitor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PriceMonitor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PriceMonitor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PriceMonitor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialised();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFpHorizonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.DecimalMap.serializeBinaryToWriter
    );
  }
  f = message.getNow();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdate();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getBoundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.vega.snapshot.v1.PriceBound.serializeBinaryToWriter
    );
  }
  f = message.getPriceRangeCacheTime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getPriceRangeCacheList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.vega.snapshot.v1.PriceRangeCache.serializeBinaryToWriter
    );
  }
  f = message.getRefPriceCacheTime();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getRefPriceCacheList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.vega.snapshot.v1.DecimalMap.serializeBinaryToWriter
    );
  }
  f = message.getPricesNowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.vega.snapshot.v1.CurrentPrice.serializeBinaryToWriter
    );
  }
  f = message.getPricesPastList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.vega.snapshot.v1.PastPrice.serializeBinaryToWriter
    );
  }
  f = message.getConsensusReached();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional bool initialised = 3;
 * @return {boolean}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getInitialised = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.setInitialised = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated DecimalMap fp_horizons = 4;
 * @return {!Array<!proto.vega.snapshot.v1.DecimalMap>}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getFpHorizonsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.DecimalMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.DecimalMap, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.DecimalMap>} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
*/
proto.vega.snapshot.v1.PriceMonitor.prototype.setFpHorizonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.DecimalMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.DecimalMap}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.addFpHorizons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.DecimalMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.clearFpHorizonsList = function() {
  return this.setFpHorizonsList([]);
};


/**
 * optional int64 now = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getNow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.setNow = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 update = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getUpdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated PriceBound bounds = 7;
 * @return {!Array<!proto.vega.snapshot.v1.PriceBound>}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getBoundsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PriceBound>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PriceBound, 7));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PriceBound>} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
*/
proto.vega.snapshot.v1.PriceMonitor.prototype.setBoundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PriceBound=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PriceBound}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.addBounds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.vega.snapshot.v1.PriceBound, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.clearBoundsList = function() {
  return this.setBoundsList([]);
};


/**
 * optional int64 price_range_cache_time = 8;
 * @return {number}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getPriceRangeCacheTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.setPriceRangeCacheTime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated PriceRangeCache price_range_cache = 9;
 * @return {!Array<!proto.vega.snapshot.v1.PriceRangeCache>}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getPriceRangeCacheList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PriceRangeCache>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PriceRangeCache, 9));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PriceRangeCache>} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
*/
proto.vega.snapshot.v1.PriceMonitor.prototype.setPriceRangeCacheList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PriceRangeCache=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PriceRangeCache}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.addPriceRangeCache = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.vega.snapshot.v1.PriceRangeCache, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.clearPriceRangeCacheList = function() {
  return this.setPriceRangeCacheList([]);
};


/**
 * optional int64 ref_price_cache_time = 10;
 * @return {number}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getRefPriceCacheTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.setRefPriceCacheTime = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated DecimalMap ref_price_cache = 11;
 * @return {!Array<!proto.vega.snapshot.v1.DecimalMap>}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getRefPriceCacheList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.DecimalMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.DecimalMap, 11));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.DecimalMap>} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
*/
proto.vega.snapshot.v1.PriceMonitor.prototype.setRefPriceCacheList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.vega.snapshot.v1.DecimalMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.DecimalMap}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.addRefPriceCache = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.vega.snapshot.v1.DecimalMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.clearRefPriceCacheList = function() {
  return this.setRefPriceCacheList([]);
};


/**
 * repeated CurrentPrice prices_now = 12;
 * @return {!Array<!proto.vega.snapshot.v1.CurrentPrice>}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getPricesNowList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.CurrentPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.CurrentPrice, 12));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.CurrentPrice>} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
*/
proto.vega.snapshot.v1.PriceMonitor.prototype.setPricesNowList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.vega.snapshot.v1.CurrentPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.CurrentPrice}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.addPricesNow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.vega.snapshot.v1.CurrentPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.clearPricesNowList = function() {
  return this.setPricesNowList([]);
};


/**
 * repeated PastPrice prices_past = 13;
 * @return {!Array<!proto.vega.snapshot.v1.PastPrice>}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getPricesPastList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PastPrice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PastPrice, 13));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PastPrice>} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
*/
proto.vega.snapshot.v1.PriceMonitor.prototype.setPricesPastList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PastPrice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PastPrice}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.addPricesPast = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.vega.snapshot.v1.PastPrice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.clearPricesPastList = function() {
  return this.setPricesPastList([]);
};


/**
 * optional bool consensus_reached = 14;
 * @return {boolean}
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.getConsensusReached = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.PriceMonitor} returns this
 */
proto.vega.snapshot.v1.PriceMonitor.prototype.setConsensusReached = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
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
proto.vega.snapshot.v1.AuctionState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.AuctionState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.AuctionState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AuctionState.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    defaultMode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    trigger: jspb.Message.getFieldWithDefault(msg, 3, 0),
    begin: jspb.Message.getFieldWithDefault(msg, 4, 0),
    end: (f = msg.getEnd()) && vega_markets_pb.AuctionDuration.toObject(includeInstance, f),
    start: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    stop: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    extension: jspb.Message.getFieldWithDefault(msg, 8, 0),
    extensionEventSent: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.vega.snapshot.v1.AuctionState}
 */
proto.vega.snapshot.v1.AuctionState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.AuctionState;
  return proto.vega.snapshot.v1.AuctionState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.AuctionState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.AuctionState}
 */
proto.vega.snapshot.v1.AuctionState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.Market.TradingMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.Market.TradingMode} */ (reader.readEnum());
      msg.setDefaultMode(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setTrigger(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBegin(value);
      break;
    case 5:
      var value = new vega_markets_pb.AuctionDuration;
      reader.readMessage(value,vega_markets_pb.AuctionDuration.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStart(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStop(value);
      break;
    case 8:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setExtension$(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExtensionEventSent(value);
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
proto.vega.snapshot.v1.AuctionState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.AuctionState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.AuctionState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AuctionState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDefaultMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBegin();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      vega_markets_pb.AuctionDuration.serializeBinaryToWriter
    );
  }
  f = message.getStart();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getStop();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getExtension$();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getExtensionEventSent();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional vega.Market.TradingMode mode = 1;
 * @return {!proto.vega.Market.TradingMode}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getMode = function() {
  return /** @type {!proto.vega.Market.TradingMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.Market.TradingMode} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional vega.Market.TradingMode default_mode = 2;
 * @return {!proto.vega.Market.TradingMode}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getDefaultMode = function() {
  return /** @type {!proto.vega.Market.TradingMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.Market.TradingMode} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setDefaultMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional vega.AuctionTrigger trigger = 3;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getTrigger = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setTrigger = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 begin = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getBegin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setBegin = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional vega.AuctionDuration end = 5;
 * @return {?proto.vega.AuctionDuration}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getEnd = function() {
  return /** @type{?proto.vega.AuctionDuration} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.AuctionDuration, 5));
};


/**
 * @param {?proto.vega.AuctionDuration|undefined} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
*/
proto.vega.snapshot.v1.AuctionState.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.AuctionState.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool start = 6;
 * @return {boolean}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getStart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setStart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool stop = 7;
 * @return {boolean}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getStop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setStop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional vega.AuctionTrigger extension = 8;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getExtension$ = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setExtension$ = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool extension_event_sent = 9;
 * @return {boolean}
 */
proto.vega.snapshot.v1.AuctionState.prototype.getExtensionEventSent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.AuctionState} returns this
 */
proto.vega.snapshot.v1.AuctionState.prototype.setExtensionEventSent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
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
proto.vega.snapshot.v1.EquityShareLP.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.EquityShareLP.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.EquityShareLP} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EquityShareLP.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stake: jspb.Message.getFieldWithDefault(msg, 2, ""),
    share: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avg: jspb.Message.getFieldWithDefault(msg, 4, ""),
    vshare: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.vega.snapshot.v1.EquityShareLP}
 */
proto.vega.snapshot.v1.EquityShareLP.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.EquityShareLP;
  return proto.vega.snapshot.v1.EquityShareLP.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.EquityShareLP} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.EquityShareLP}
 */
proto.vega.snapshot.v1.EquityShareLP.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setStake(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShare(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVshare(value);
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
proto.vega.snapshot.v1.EquityShareLP.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.EquityShareLP.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.EquityShareLP} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EquityShareLP.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStake();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShare();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvg();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVshare();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShareLP} returns this
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stake = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.getStake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShareLP} returns this
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.setStake = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string share = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.getShare = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShareLP} returns this
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.setShare = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string avg = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.getAvg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShareLP} returns this
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.setAvg = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string vshare = 5;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.getVshare = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShareLP} returns this
 */
proto.vega.snapshot.v1.EquityShareLP.prototype.setVshare = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.EquityShare.repeatedFields_ = [3];



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
proto.vega.snapshot.v1.EquityShare.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.EquityShare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.EquityShare} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EquityShare.toObject = function(includeInstance, msg) {
  var f, obj = {
    mvp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openingAuctionEnded: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    lpsList: jspb.Message.toObjectList(msg.getLpsList(),
    proto.vega.snapshot.v1.EquityShareLP.toObject, includeInstance),
    r: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pMvp: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.vega.snapshot.v1.EquityShare}
 */
proto.vega.snapshot.v1.EquityShare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.EquityShare;
  return proto.vega.snapshot.v1.EquityShare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.EquityShare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.EquityShare}
 */
proto.vega.snapshot.v1.EquityShare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMvp(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOpeningAuctionEnded(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.EquityShareLP;
      reader.readMessage(value,proto.vega.snapshot.v1.EquityShareLP.deserializeBinaryFromReader);
      msg.addLps(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setR(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPMvp(value);
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
proto.vega.snapshot.v1.EquityShare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.EquityShare.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.EquityShare} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EquityShare.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMvp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpeningAuctionEnded();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.EquityShareLP.serializeBinaryToWriter
    );
  }
  f = message.getR();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPMvp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string mvp = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShare.prototype.getMvp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShare} returns this
 */
proto.vega.snapshot.v1.EquityShare.prototype.setMvp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool opening_auction_ended = 2;
 * @return {boolean}
 */
proto.vega.snapshot.v1.EquityShare.prototype.getOpeningAuctionEnded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.EquityShare} returns this
 */
proto.vega.snapshot.v1.EquityShare.prototype.setOpeningAuctionEnded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated EquityShareLP lps = 3;
 * @return {!Array<!proto.vega.snapshot.v1.EquityShareLP>}
 */
proto.vega.snapshot.v1.EquityShare.prototype.getLpsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.EquityShareLP>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.EquityShareLP, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.EquityShareLP>} value
 * @return {!proto.vega.snapshot.v1.EquityShare} returns this
*/
proto.vega.snapshot.v1.EquityShare.prototype.setLpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.EquityShareLP=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.EquityShareLP}
 */
proto.vega.snapshot.v1.EquityShare.prototype.addLps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.EquityShareLP, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.EquityShare} returns this
 */
proto.vega.snapshot.v1.EquityShare.prototype.clearLpsList = function() {
  return this.setLpsList([]);
};


/**
 * optional string r = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShare.prototype.getR = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShare} returns this
 */
proto.vega.snapshot.v1.EquityShare.prototype.setR = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string p_mvp = 5;
 * @return {string}
 */
proto.vega.snapshot.v1.EquityShare.prototype.getPMvp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.EquityShare} returns this
 */
proto.vega.snapshot.v1.EquityShare.prototype.setPMvp = function(value) {
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
proto.vega.snapshot.v1.FeeSplitter.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.FeeSplitter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.FeeSplitter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.FeeSplitter.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeWindowStart: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tradeValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    window: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.snapshot.v1.FeeSplitter}
 */
proto.vega.snapshot.v1.FeeSplitter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.FeeSplitter;
  return proto.vega.snapshot.v1.FeeSplitter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.FeeSplitter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.FeeSplitter}
 */
proto.vega.snapshot.v1.FeeSplitter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeWindowStart(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTradeValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvg(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWindow(value);
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
proto.vega.snapshot.v1.FeeSplitter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.FeeSplitter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.FeeSplitter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.FeeSplitter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeWindowStart();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTradeValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindow();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional int64 time_window_start = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.getTimeWindowStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.FeeSplitter} returns this
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.setTimeWindowStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string trade_value = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.getTradeValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.FeeSplitter} returns this
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.setTradeValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avg = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.getAvg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.FeeSplitter} returns this
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.setAvg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 window = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.getWindow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.FeeSplitter} returns this
 */
proto.vega.snapshot.v1.FeeSplitter.prototype.setWindow = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Market.repeatedFields_ = [5];



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
proto.vega.snapshot.v1.Market.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Market.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Market} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Market.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && vega_markets_pb.Market.toObject(includeInstance, f),
    priceMonitor: (f = msg.getPriceMonitor()) && proto.vega.snapshot.v1.PriceMonitor.toObject(includeInstance, f),
    auctionState: (f = msg.getAuctionState()) && proto.vega.snapshot.v1.AuctionState.toObject(includeInstance, f),
    peggedOrders: (f = msg.getPeggedOrders()) && proto.vega.snapshot.v1.PeggedOrders.toObject(includeInstance, f),
    expiringOrdersList: jspb.Message.toObjectList(msg.getExpiringOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance),
    lastBestBid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    lastBestAsk: jspb.Message.getFieldWithDefault(msg, 7, ""),
    lastMidBid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lastMidAsk: jspb.Message.getFieldWithDefault(msg, 9, ""),
    lastMarketValueProxy: jspb.Message.getFieldWithDefault(msg, 10, ""),
    lastEquityShareDistributed: jspb.Message.getFieldWithDefault(msg, 11, 0),
    equityShare: (f = msg.getEquityShare()) && proto.vega.snapshot.v1.EquityShare.toObject(includeInstance, f),
    currentMarkPrice: jspb.Message.getFieldWithDefault(msg, 13, ""),
    riskFactorShort: jspb.Message.getFieldWithDefault(msg, 14, ""),
    riskFactorLong: jspb.Message.getFieldWithDefault(msg, 15, ""),
    riskFactorConsensusReached: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    feeSplitter: (f = msg.getFeeSplitter()) && proto.vega.snapshot.v1.FeeSplitter.toObject(includeInstance, f),
    settlementData: jspb.Message.getFieldWithDefault(msg, 18, ""),
    nextMarkToMarket: jspb.Message.getFieldWithDefault(msg, 19, 0),
    lastTradedPrice: jspb.Message.getFieldWithDefault(msg, 20, "")
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
 * @return {!proto.vega.snapshot.v1.Market}
 */
proto.vega.snapshot.v1.Market.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Market;
  return proto.vega.snapshot.v1.Market.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Market} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Market}
 */
proto.vega.snapshot.v1.Market.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_markets_pb.Market;
      reader.readMessage(value,vega_markets_pb.Market.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.PriceMonitor;
      reader.readMessage(value,proto.vega.snapshot.v1.PriceMonitor.deserializeBinaryFromReader);
      msg.setPriceMonitor(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.AuctionState;
      reader.readMessage(value,proto.vega.snapshot.v1.AuctionState.deserializeBinaryFromReader);
      msg.setAuctionState(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.PeggedOrders;
      reader.readMessage(value,proto.vega.snapshot.v1.PeggedOrders.deserializeBinaryFromReader);
      msg.setPeggedOrders(value);
      break;
    case 5:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addExpiringOrders(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastBestBid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastBestAsk(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastMidBid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastMidAsk(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastMarketValueProxy(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastEquityShareDistributed(value);
      break;
    case 12:
      var value = new proto.vega.snapshot.v1.EquityShare;
      reader.readMessage(value,proto.vega.snapshot.v1.EquityShare.deserializeBinaryFromReader);
      msg.setEquityShare(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentMarkPrice(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskFactorShort(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setRiskFactorLong(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRiskFactorConsensusReached(value);
      break;
    case 17:
      var value = new proto.vega.snapshot.v1.FeeSplitter;
      reader.readMessage(value,proto.vega.snapshot.v1.FeeSplitter.deserializeBinaryFromReader);
      msg.setFeeSplitter(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettlementData(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextMarkToMarket(value);
      break;
    case 20:
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
proto.vega.snapshot.v1.Market.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Market.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Market} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Market.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_markets_pb.Market.serializeBinaryToWriter
    );
  }
  f = message.getPriceMonitor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.snapshot.v1.PriceMonitor.serializeBinaryToWriter
    );
  }
  f = message.getAuctionState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vega.snapshot.v1.AuctionState.serializeBinaryToWriter
    );
  }
  f = message.getPeggedOrders();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vega.snapshot.v1.PeggedOrders.serializeBinaryToWriter
    );
  }
  f = message.getExpiringOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
  f = message.getLastBestBid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLastBestAsk();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLastMidBid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLastMidAsk();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLastMarketValueProxy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLastEquityShareDistributed();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getEquityShare();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.vega.snapshot.v1.EquityShare.serializeBinaryToWriter
    );
  }
  f = message.getCurrentMarkPrice();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRiskFactorShort();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRiskFactorLong();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRiskFactorConsensusReached();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getFeeSplitter();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.vega.snapshot.v1.FeeSplitter.serializeBinaryToWriter
    );
  }
  f = message.getSettlementData();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getNextMarkToMarket();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getLastTradedPrice();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional vega.Market market = 1;
 * @return {?proto.vega.Market}
 */
proto.vega.snapshot.v1.Market.prototype.getMarket = function() {
  return /** @type{?proto.vega.Market} */ (
    jspb.Message.getWrapperField(this, vega_markets_pb.Market, 1));
};


/**
 * @param {?proto.vega.Market|undefined} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PriceMonitor price_monitor = 2;
 * @return {?proto.vega.snapshot.v1.PriceMonitor}
 */
proto.vega.snapshot.v1.Market.prototype.getPriceMonitor = function() {
  return /** @type{?proto.vega.snapshot.v1.PriceMonitor} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.PriceMonitor, 2));
};


/**
 * @param {?proto.vega.snapshot.v1.PriceMonitor|undefined} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setPriceMonitor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearPriceMonitor = function() {
  return this.setPriceMonitor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.hasPriceMonitor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuctionState auction_state = 3;
 * @return {?proto.vega.snapshot.v1.AuctionState}
 */
proto.vega.snapshot.v1.Market.prototype.getAuctionState = function() {
  return /** @type{?proto.vega.snapshot.v1.AuctionState} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.AuctionState, 3));
};


/**
 * @param {?proto.vega.snapshot.v1.AuctionState|undefined} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setAuctionState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearAuctionState = function() {
  return this.setAuctionState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.hasAuctionState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PeggedOrders pegged_orders = 4;
 * @return {?proto.vega.snapshot.v1.PeggedOrders}
 */
proto.vega.snapshot.v1.Market.prototype.getPeggedOrders = function() {
  return /** @type{?proto.vega.snapshot.v1.PeggedOrders} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.PeggedOrders, 4));
};


/**
 * @param {?proto.vega.snapshot.v1.PeggedOrders|undefined} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setPeggedOrders = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearPeggedOrders = function() {
  return this.setPeggedOrders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.hasPeggedOrders = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated vega.Order expiring_orders = 5;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.snapshot.v1.Market.prototype.getExpiringOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 5));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setExpiringOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.snapshot.v1.Market.prototype.addExpiringOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearExpiringOrdersList = function() {
  return this.setExpiringOrdersList([]);
};


/**
 * optional string last_best_bid = 6;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getLastBestBid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastBestBid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string last_best_ask = 7;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getLastBestAsk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastBestAsk = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string last_mid_bid = 8;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getLastMidBid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastMidBid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string last_mid_ask = 9;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getLastMidAsk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastMidAsk = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string last_market_value_proxy = 10;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getLastMarketValueProxy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastMarketValueProxy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 last_equity_share_distributed = 11;
 * @return {number}
 */
proto.vega.snapshot.v1.Market.prototype.getLastEquityShareDistributed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastEquityShareDistributed = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional EquityShare equity_share = 12;
 * @return {?proto.vega.snapshot.v1.EquityShare}
 */
proto.vega.snapshot.v1.Market.prototype.getEquityShare = function() {
  return /** @type{?proto.vega.snapshot.v1.EquityShare} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.EquityShare, 12));
};


/**
 * @param {?proto.vega.snapshot.v1.EquityShare|undefined} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setEquityShare = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearEquityShare = function() {
  return this.setEquityShare(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.hasEquityShare = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string current_mark_price = 13;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getCurrentMarkPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setCurrentMarkPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string risk_factor_short = 14;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getRiskFactorShort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setRiskFactorShort = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string risk_factor_long = 15;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getRiskFactorLong = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setRiskFactorLong = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bool risk_factor_consensus_reached = 16;
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.getRiskFactorConsensusReached = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setRiskFactorConsensusReached = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional FeeSplitter fee_splitter = 17;
 * @return {?proto.vega.snapshot.v1.FeeSplitter}
 */
proto.vega.snapshot.v1.Market.prototype.getFeeSplitter = function() {
  return /** @type{?proto.vega.snapshot.v1.FeeSplitter} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.FeeSplitter, 17));
};


/**
 * @param {?proto.vega.snapshot.v1.FeeSplitter|undefined} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
*/
proto.vega.snapshot.v1.Market.prototype.setFeeSplitter = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.clearFeeSplitter = function() {
  return this.setFeeSplitter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Market.prototype.hasFeeSplitter = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string settlement_data = 18;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getSettlementData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setSettlementData = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional int64 next_mark_to_market = 19;
 * @return {number}
 */
proto.vega.snapshot.v1.Market.prototype.getNextMarkToMarket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setNextMarkToMarket = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string last_traded_price = 20;
 * @return {string}
 */
proto.vega.snapshot.v1.Market.prototype.getLastTradedPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Market} returns this
 */
proto.vega.snapshot.v1.Market.prototype.setLastTradedPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.PeggedOrders.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.PeggedOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PeggedOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PeggedOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PeggedOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    parkedOrdersList: jspb.Message.toObjectList(msg.getParkedOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.PeggedOrders}
 */
proto.vega.snapshot.v1.PeggedOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PeggedOrders;
  return proto.vega.snapshot.v1.PeggedOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PeggedOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PeggedOrders}
 */
proto.vega.snapshot.v1.PeggedOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addParkedOrders(value);
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
proto.vega.snapshot.v1.PeggedOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PeggedOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PeggedOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PeggedOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParkedOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.Order parked_orders = 2;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.snapshot.v1.PeggedOrders.prototype.getParkedOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 2));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.snapshot.v1.PeggedOrders} returns this
*/
proto.vega.snapshot.v1.PeggedOrders.prototype.setParkedOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.snapshot.v1.PeggedOrders.prototype.addParkedOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PeggedOrders} returns this
 */
proto.vega.snapshot.v1.PeggedOrders.prototype.clearParkedOrdersList = function() {
  return this.setParkedOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ExecutionMarkets.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.ExecutionMarkets.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ExecutionMarkets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ExecutionMarkets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ExecutionMarkets.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketsList: jspb.Message.toObjectList(msg.getMarketsList(),
    proto.vega.snapshot.v1.Market.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ExecutionMarkets}
 */
proto.vega.snapshot.v1.ExecutionMarkets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ExecutionMarkets;
  return proto.vega.snapshot.v1.ExecutionMarkets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ExecutionMarkets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ExecutionMarkets}
 */
proto.vega.snapshot.v1.ExecutionMarkets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.Market;
      reader.readMessage(value,proto.vega.snapshot.v1.Market.deserializeBinaryFromReader);
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
proto.vega.snapshot.v1.ExecutionMarkets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ExecutionMarkets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ExecutionMarkets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ExecutionMarkets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.Market.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Market markets = 1;
 * @return {!Array<!proto.vega.snapshot.v1.Market>}
 */
proto.vega.snapshot.v1.ExecutionMarkets.prototype.getMarketsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.Market>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.Market, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.Market>} value
 * @return {!proto.vega.snapshot.v1.ExecutionMarkets} returns this
*/
proto.vega.snapshot.v1.ExecutionMarkets.prototype.setMarketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.Market=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Market}
 */
proto.vega.snapshot.v1.ExecutionMarkets.prototype.addMarkets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.Market, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ExecutionMarkets} returns this
 */
proto.vega.snapshot.v1.ExecutionMarkets.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
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
proto.vega.snapshot.v1.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    buy: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sell: jspb.Message.getFieldWithDefault(msg, 4, 0),
    price: jspb.Message.getFieldWithDefault(msg, 5, ""),
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
 * @return {!proto.vega.snapshot.v1.Position}
 */
proto.vega.snapshot.v1.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Position;
  return proto.vega.snapshot.v1.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Position}
 */
proto.vega.snapshot.v1.Position.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuy(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSell(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
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
proto.vega.snapshot.v1.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBuy();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSell();
  if (f !== 0) {
    writer.writeInt64(
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
proto.vega.snapshot.v1.Position.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.Position.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 buy = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.Position.prototype.getBuy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setBuy = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 sell = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.Position.prototype.getSell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setSell = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string price = 5;
 * @return {string}
 */
proto.vega.snapshot.v1.Position.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string vw_buy_price = 6;
 * @return {string}
 */
proto.vega.snapshot.v1.Position.prototype.getVwBuyPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setVwBuyPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string vw_sell_price = 7;
 * @return {string}
 */
proto.vega.snapshot.v1.Position.prototype.getVwSellPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.Position} returns this
 */
proto.vega.snapshot.v1.Position.prototype.setVwSellPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.MarketPositions.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.MarketPositions.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.MarketPositions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.MarketPositions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.MarketPositions.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    proto.vega.snapshot.v1.Position.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.MarketPositions}
 */
proto.vega.snapshot.v1.MarketPositions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.MarketPositions;
  return proto.vega.snapshot.v1.MarketPositions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.MarketPositions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.MarketPositions}
 */
proto.vega.snapshot.v1.MarketPositions.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.vega.snapshot.v1.Position;
      reader.readMessage(value,proto.vega.snapshot.v1.Position.deserializeBinaryFromReader);
      msg.addPositions(value);
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
proto.vega.snapshot.v1.MarketPositions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.MarketPositions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.MarketPositions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.MarketPositions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.Position.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.MarketPositions.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.MarketPositions} returns this
 */
proto.vega.snapshot.v1.MarketPositions.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Position positions = 2;
 * @return {!Array<!proto.vega.snapshot.v1.Position>}
 */
proto.vega.snapshot.v1.MarketPositions.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.Position, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.Position>} value
 * @return {!proto.vega.snapshot.v1.MarketPositions} returns this
*/
proto.vega.snapshot.v1.MarketPositions.prototype.setPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Position}
 */
proto.vega.snapshot.v1.MarketPositions.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.MarketPositions} returns this
 */
proto.vega.snapshot.v1.MarketPositions.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.SettlementState.repeatedFields_ = [3,4];



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
proto.vega.snapshot.v1.SettlementState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.SettlementState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.SettlementState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SettlementState.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastMarkPrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastSettledPositionsList: jspb.Message.toObjectList(msg.getLastSettledPositionsList(),
    proto.vega.snapshot.v1.LastSettledPosition.toObject, includeInstance),
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.vega.snapshot.v1.SettlementTrade.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.SettlementState}
 */
proto.vega.snapshot.v1.SettlementState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.SettlementState;
  return proto.vega.snapshot.v1.SettlementState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.SettlementState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.SettlementState}
 */
proto.vega.snapshot.v1.SettlementState.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLastMarkPrice(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.LastSettledPosition;
      reader.readMessage(value,proto.vega.snapshot.v1.LastSettledPosition.deserializeBinaryFromReader);
      msg.addLastSettledPositions(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.SettlementTrade;
      reader.readMessage(value,proto.vega.snapshot.v1.SettlementTrade.deserializeBinaryFromReader);
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
proto.vega.snapshot.v1.SettlementState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.SettlementState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.SettlementState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SettlementState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastMarkPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastSettledPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.LastSettledPosition.serializeBinaryToWriter
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.SettlementTrade.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.SettlementState.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SettlementState} returns this
 */
proto.vega.snapshot.v1.SettlementState.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_mark_price = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.SettlementState.prototype.getLastMarkPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SettlementState} returns this
 */
proto.vega.snapshot.v1.SettlementState.prototype.setLastMarkPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated LastSettledPosition last_settled_positions = 3;
 * @return {!Array<!proto.vega.snapshot.v1.LastSettledPosition>}
 */
proto.vega.snapshot.v1.SettlementState.prototype.getLastSettledPositionsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.LastSettledPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.LastSettledPosition, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.LastSettledPosition>} value
 * @return {!proto.vega.snapshot.v1.SettlementState} returns this
*/
proto.vega.snapshot.v1.SettlementState.prototype.setLastSettledPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.LastSettledPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.LastSettledPosition}
 */
proto.vega.snapshot.v1.SettlementState.prototype.addLastSettledPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.LastSettledPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.SettlementState} returns this
 */
proto.vega.snapshot.v1.SettlementState.prototype.clearLastSettledPositionsList = function() {
  return this.setLastSettledPositionsList([]);
};


/**
 * repeated SettlementTrade trades = 4;
 * @return {!Array<!proto.vega.snapshot.v1.SettlementTrade>}
 */
proto.vega.snapshot.v1.SettlementState.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.SettlementTrade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.SettlementTrade, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.SettlementTrade>} value
 * @return {!proto.vega.snapshot.v1.SettlementState} returns this
*/
proto.vega.snapshot.v1.SettlementState.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.SettlementTrade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.SettlementTrade}
 */
proto.vega.snapshot.v1.SettlementState.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.SettlementTrade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.SettlementState} returns this
 */
proto.vega.snapshot.v1.SettlementState.prototype.clearTradesList = function() {
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
proto.vega.snapshot.v1.LastSettledPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LastSettledPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LastSettledPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LastSettledPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settledPosition: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.snapshot.v1.LastSettledPosition}
 */
proto.vega.snapshot.v1.LastSettledPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LastSettledPosition;
  return proto.vega.snapshot.v1.LastSettledPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LastSettledPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LastSettledPosition}
 */
proto.vega.snapshot.v1.LastSettledPosition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSettledPosition(value);
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
proto.vega.snapshot.v1.LastSettledPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LastSettledPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LastSettledPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LastSettledPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettledPosition();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.LastSettledPosition.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LastSettledPosition} returns this
 */
proto.vega.snapshot.v1.LastSettledPosition.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 settled_position = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.LastSettledPosition.prototype.getSettledPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LastSettledPosition} returns this
 */
proto.vega.snapshot.v1.LastSettledPosition.prototype.setSettledPosition = function(value) {
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
proto.vega.snapshot.v1.SettlementTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.SettlementTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.SettlementTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SettlementTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketPrice: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    newSize: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.vega.snapshot.v1.SettlementTrade}
 */
proto.vega.snapshot.v1.SettlementTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.SettlementTrade;
  return proto.vega.snapshot.v1.SettlementTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.SettlementTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.SettlementTrade}
 */
proto.vega.snapshot.v1.SettlementTrade.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewSize(value);
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
proto.vega.snapshot.v1.SettlementTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.SettlementTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.SettlementTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SettlementTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyId();
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
  f = message.getMarketPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getNewSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string party_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SettlementTrade} returns this
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SettlementTrade} returns this
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_price = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.getMarketPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SettlementTrade} returns this
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.setMarketPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 size = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.SettlementTrade} returns this
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 new_size = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.getNewSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.SettlementTrade} returns this
 */
proto.vega.snapshot.v1.SettlementTrade.prototype.setNewSize = function(value) {
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
proto.vega.snapshot.v1.AppState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.AppState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.AppState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AppState.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    block: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0),
    chainId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.vega.snapshot.v1.AppState}
 */
proto.vega.snapshot.v1.AppState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.AppState;
  return proto.vega.snapshot.v1.AppState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.AppState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.AppState}
 */
proto.vega.snapshot.v1.AppState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setBlock(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 4:
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
proto.vega.snapshot.v1.AppState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.AppState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.AppState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AppState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
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
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.AppState.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AppState} returns this
 */
proto.vega.snapshot.v1.AppState.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string block = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.AppState.prototype.getBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.AppState} returns this
 */
proto.vega.snapshot.v1.AppState.prototype.setBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 time = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.AppState.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AppState} returns this
 */
proto.vega.snapshot.v1.AppState.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string chain_id = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.AppState.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.AppState} returns this
 */
proto.vega.snapshot.v1.AppState.prototype.setChainId = function(value) {
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
proto.vega.snapshot.v1.EpochState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.EpochState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.EpochState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EpochState.toObject = function(includeInstance, msg) {
  var f, obj = {
    seq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startTime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expireTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    readyToStartNewEpoch: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    readyToEndEpoch: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.vega.snapshot.v1.EpochState}
 */
proto.vega.snapshot.v1.EpochState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.EpochState;
  return proto.vega.snapshot.v1.EpochState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.EpochState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.EpochState}
 */
proto.vega.snapshot.v1.EpochState.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpireTime(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadyToStartNewEpoch(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadyToEndEpoch(value);
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
proto.vega.snapshot.v1.EpochState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.EpochState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.EpochState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.EpochState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint64(
      1,
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
  f = message.getReadyToStartNewEpoch();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getReadyToEndEpoch();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional uint64 seq = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.EpochState.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.EpochState} returns this
 */
proto.vega.snapshot.v1.EpochState.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 start_time = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.EpochState.prototype.getStartTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.EpochState} returns this
 */
proto.vega.snapshot.v1.EpochState.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 expire_time = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.EpochState.prototype.getExpireTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.EpochState} returns this
 */
proto.vega.snapshot.v1.EpochState.prototype.setExpireTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool ready_to_start_new_epoch = 6;
 * @return {boolean}
 */
proto.vega.snapshot.v1.EpochState.prototype.getReadyToStartNewEpoch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.EpochState} returns this
 */
proto.vega.snapshot.v1.EpochState.prototype.setReadyToStartNewEpoch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool ready_to_end_epoch = 7;
 * @return {boolean}
 */
proto.vega.snapshot.v1.EpochState.prototype.getReadyToEndEpoch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.EpochState} returns this
 */
proto.vega.snapshot.v1.EpochState.prototype.setReadyToEndEpoch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.RewardsPendingPayouts.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.RewardsPendingPayouts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.RewardsPendingPayouts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduledRewardsPayoutList: jspb.Message.toObjectList(msg.getScheduledRewardsPayoutList(),
    proto.vega.snapshot.v1.ScheduledRewardsPayout.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.RewardsPendingPayouts}
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.RewardsPendingPayouts;
  return proto.vega.snapshot.v1.RewardsPendingPayouts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.RewardsPendingPayouts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.RewardsPendingPayouts}
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.ScheduledRewardsPayout;
      reader.readMessage(value,proto.vega.snapshot.v1.ScheduledRewardsPayout.deserializeBinaryFromReader);
      msg.addScheduledRewardsPayout(value);
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
proto.vega.snapshot.v1.RewardsPendingPayouts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.RewardsPendingPayouts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.RewardsPendingPayouts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduledRewardsPayoutList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.ScheduledRewardsPayout.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ScheduledRewardsPayout scheduled_rewards_payout = 1;
 * @return {!Array<!proto.vega.snapshot.v1.ScheduledRewardsPayout>}
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.prototype.getScheduledRewardsPayoutList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ScheduledRewardsPayout>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ScheduledRewardsPayout, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ScheduledRewardsPayout>} value
 * @return {!proto.vega.snapshot.v1.RewardsPendingPayouts} returns this
*/
proto.vega.snapshot.v1.RewardsPendingPayouts.prototype.setScheduledRewardsPayoutList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ScheduledRewardsPayout=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ScheduledRewardsPayout}
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.prototype.addScheduledRewardsPayout = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.ScheduledRewardsPayout, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.RewardsPendingPayouts} returns this
 */
proto.vega.snapshot.v1.RewardsPendingPayouts.prototype.clearScheduledRewardsPayoutList = function() {
  return this.setScheduledRewardsPayoutList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ScheduledRewardsPayout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ScheduledRewardsPayout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.toObject = function(includeInstance, msg) {
  var f, obj = {
    payoutTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rewardsPayoutList: jspb.Message.toObjectList(msg.getRewardsPayoutList(),
    proto.vega.snapshot.v1.RewardsPayout.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ScheduledRewardsPayout}
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ScheduledRewardsPayout;
  return proto.vega.snapshot.v1.ScheduledRewardsPayout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ScheduledRewardsPayout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ScheduledRewardsPayout}
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPayoutTime(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.RewardsPayout;
      reader.readMessage(value,proto.vega.snapshot.v1.RewardsPayout.deserializeBinaryFromReader);
      msg.addRewardsPayout(value);
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
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ScheduledRewardsPayout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ScheduledRewardsPayout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRewardsPayoutList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.RewardsPayout.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 payout_time = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.getPayoutTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ScheduledRewardsPayout} returns this
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.setPayoutTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RewardsPayout rewards_payout = 2;
 * @return {!Array<!proto.vega.snapshot.v1.RewardsPayout>}
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.getRewardsPayoutList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.RewardsPayout>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.RewardsPayout, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.RewardsPayout>} value
 * @return {!proto.vega.snapshot.v1.ScheduledRewardsPayout} returns this
*/
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.setRewardsPayoutList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.RewardsPayout=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.RewardsPayout}
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.addRewardsPayout = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.RewardsPayout, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ScheduledRewardsPayout} returns this
 */
proto.vega.snapshot.v1.ScheduledRewardsPayout.prototype.clearRewardsPayoutList = function() {
  return this.setRewardsPayoutList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.RewardsPayout.repeatedFields_ = [3];



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
proto.vega.snapshot.v1.RewardsPayout.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.RewardsPayout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.RewardsPayout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.RewardsPayout.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromAccount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rewardPartyAmountList: jspb.Message.toObjectList(msg.getRewardPartyAmountList(),
    proto.vega.snapshot.v1.RewardsPartyAmount.toObject, includeInstance),
    totalReward: jspb.Message.getFieldWithDefault(msg, 4, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.vega.snapshot.v1.RewardsPayout}
 */
proto.vega.snapshot.v1.RewardsPayout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.RewardsPayout;
  return proto.vega.snapshot.v1.RewardsPayout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.RewardsPayout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.RewardsPayout}
 */
proto.vega.snapshot.v1.RewardsPayout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromAccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.RewardsPartyAmount;
      reader.readMessage(value,proto.vega.snapshot.v1.RewardsPartyAmount.deserializeBinaryFromReader);
      msg.addRewardPartyAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalReward(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEpochSeq(value);
      break;
    case 6:
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
proto.vega.snapshot.v1.RewardsPayout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.RewardsPayout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.RewardsPayout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.RewardsPayout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromAccount();
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
  f = message.getRewardPartyAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.RewardsPartyAmount.serializeBinaryToWriter
    );
  }
  f = message.getTotalReward();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEpochSeq();
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
};


/**
 * optional string from_account = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.getFromAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.setFromAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string asset = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RewardsPartyAmount reward_party_amount = 3;
 * @return {!Array<!proto.vega.snapshot.v1.RewardsPartyAmount>}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.getRewardPartyAmountList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.RewardsPartyAmount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.RewardsPartyAmount, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.RewardsPartyAmount>} value
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
*/
proto.vega.snapshot.v1.RewardsPayout.prototype.setRewardPartyAmountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.RewardsPartyAmount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.RewardsPartyAmount}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.addRewardPartyAmount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.RewardsPartyAmount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.clearRewardPartyAmountList = function() {
  return this.setRewardPartyAmountList([]);
};


/**
 * optional string total_reward = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.getTotalReward = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.setTotalReward = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string epoch_seq = 5;
 * @return {string}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.getEpochSeq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.RewardsPayout} returns this
 */
proto.vega.snapshot.v1.RewardsPayout.prototype.setTimestamp = function(value) {
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
proto.vega.snapshot.v1.RewardsPartyAmount.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.RewardsPartyAmount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.RewardsPartyAmount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.RewardsPartyAmount.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.RewardsPartyAmount}
 */
proto.vega.snapshot.v1.RewardsPartyAmount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.RewardsPartyAmount;
  return proto.vega.snapshot.v1.RewardsPartyAmount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.RewardsPartyAmount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.RewardsPartyAmount}
 */
proto.vega.snapshot.v1.RewardsPartyAmount.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.snapshot.v1.RewardsPartyAmount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.RewardsPartyAmount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.RewardsPartyAmount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.RewardsPartyAmount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.RewardsPartyAmount.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.RewardsPartyAmount} returns this
 */
proto.vega.snapshot.v1.RewardsPartyAmount.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.RewardsPartyAmount.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.RewardsPartyAmount} returns this
 */
proto.vega.snapshot.v1.RewardsPartyAmount.prototype.setAmount = function(value) {
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
proto.vega.snapshot.v1.LimitState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LimitState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LimitState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LimitState.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    canProposeMarket: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    canProposeAsset: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    genesisLoaded: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    proposeMarketEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    proposeAssetEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    proposeMarketEnabledFrom: jspb.Message.getFieldWithDefault(msg, 7, 0),
    proposeAssetEnabledFrom: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.vega.snapshot.v1.LimitState}
 */
proto.vega.snapshot.v1.LimitState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LimitState;
  return proto.vega.snapshot.v1.LimitState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LimitState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LimitState}
 */
proto.vega.snapshot.v1.LimitState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockCount(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanProposeMarket(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanProposeAsset(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGenesisLoaded(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProposeMarketEnabled(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProposeAssetEnabled(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposeMarketEnabledFrom(value);
      break;
    case 8:
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
proto.vega.snapshot.v1.LimitState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LimitState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LimitState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LimitState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCanProposeMarket();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCanProposeAsset();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGenesisLoaded();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getProposeMarketEnabled();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getProposeAssetEnabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getProposeMarketEnabledFrom();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getProposeAssetEnabledFrom();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional uint32 block_count = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.LimitState.prototype.getBlockCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setBlockCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool can_propose_market = 2;
 * @return {boolean}
 */
proto.vega.snapshot.v1.LimitState.prototype.getCanProposeMarket = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setCanProposeMarket = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool can_propose_asset = 3;
 * @return {boolean}
 */
proto.vega.snapshot.v1.LimitState.prototype.getCanProposeAsset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setCanProposeAsset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool genesis_loaded = 4;
 * @return {boolean}
 */
proto.vega.snapshot.v1.LimitState.prototype.getGenesisLoaded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setGenesisLoaded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool propose_market_enabled = 5;
 * @return {boolean}
 */
proto.vega.snapshot.v1.LimitState.prototype.getProposeMarketEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setProposeMarketEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool propose_asset_enabled = 6;
 * @return {boolean}
 */
proto.vega.snapshot.v1.LimitState.prototype.getProposeAssetEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setProposeAssetEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int64 propose_market_enabled_from = 7;
 * @return {number}
 */
proto.vega.snapshot.v1.LimitState.prototype.getProposeMarketEnabledFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setProposeMarketEnabledFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 propose_asset_enabled_from = 8;
 * @return {number}
 */
proto.vega.snapshot.v1.LimitState.prototype.getProposeAssetEnabledFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LimitState} returns this
 */
proto.vega.snapshot.v1.LimitState.prototype.setProposeAssetEnabledFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.VoteSpamPolicy.repeatedFields_ = [1,2,3,4];



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
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.VoteSpamPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.VoteSpamPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.VoteSpamPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyToVoteList: jspb.Message.toObjectList(msg.getPartyToVoteList(),
    proto.vega.snapshot.v1.PartyProposalVoteCount.toObject, includeInstance),
    bannedPartiesList: jspb.Message.toObjectList(msg.getBannedPartiesList(),
    proto.vega.snapshot.v1.BannedParty.toObject, includeInstance),
    tokenBalanceList: jspb.Message.toObjectList(msg.getTokenBalanceList(),
    proto.vega.snapshot.v1.PartyTokenBalance.toObject, includeInstance),
    recentBlocksRejectStatsList: jspb.Message.toObjectList(msg.getRecentBlocksRejectStatsList(),
    proto.vega.snapshot.v1.BlockRejectStats.toObject, includeInstance),
    currentBlockIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lastIncreaseBlock: jspb.Message.getFieldWithDefault(msg, 6, 0),
    currentEpochSeq: jspb.Message.getFieldWithDefault(msg, 7, 0),
    minVotingTokensFactor: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.VoteSpamPolicy;
  return proto.vega.snapshot.v1.VoteSpamPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.VoteSpamPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.PartyProposalVoteCount;
      reader.readMessage(value,proto.vega.snapshot.v1.PartyProposalVoteCount.deserializeBinaryFromReader);
      msg.addPartyToVote(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.BannedParty;
      reader.readMessage(value,proto.vega.snapshot.v1.BannedParty.deserializeBinaryFromReader);
      msg.addBannedParties(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.PartyTokenBalance;
      reader.readMessage(value,proto.vega.snapshot.v1.PartyTokenBalance.deserializeBinaryFromReader);
      msg.addTokenBalance(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.BlockRejectStats;
      reader.readMessage(value,proto.vega.snapshot.v1.BlockRejectStats.deserializeBinaryFromReader);
      msg.addRecentBlocksRejectStats(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentBlockIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastIncreaseBlock(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentEpochSeq(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinVotingTokensFactor(value);
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
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.VoteSpamPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.VoteSpamPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.VoteSpamPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyToVoteList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.PartyProposalVoteCount.serializeBinaryToWriter
    );
  }
  f = message.getBannedPartiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.BannedParty.serializeBinaryToWriter
    );
  }
  f = message.getTokenBalanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.PartyTokenBalance.serializeBinaryToWriter
    );
  }
  f = message.getRecentBlocksRejectStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.BlockRejectStats.serializeBinaryToWriter
    );
  }
  f = message.getCurrentBlockIndex();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getLastIncreaseBlock();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getCurrentEpochSeq();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getMinVotingTokensFactor();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * repeated PartyProposalVoteCount party_to_vote = 1;
 * @return {!Array<!proto.vega.snapshot.v1.PartyProposalVoteCount>}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getPartyToVoteList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PartyProposalVoteCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PartyProposalVoteCount, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PartyProposalVoteCount>} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
*/
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setPartyToVoteList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PartyProposalVoteCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PartyProposalVoteCount}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.addPartyToVote = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.PartyProposalVoteCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.clearPartyToVoteList = function() {
  return this.setPartyToVoteList([]);
};


/**
 * repeated BannedParty banned_parties = 2;
 * @return {!Array<!proto.vega.snapshot.v1.BannedParty>}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getBannedPartiesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.BannedParty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.BannedParty, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.BannedParty>} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
*/
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setBannedPartiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.BannedParty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.BannedParty}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.addBannedParties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.BannedParty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.clearBannedPartiesList = function() {
  return this.setBannedPartiesList([]);
};


/**
 * repeated PartyTokenBalance token_balance = 3;
 * @return {!Array<!proto.vega.snapshot.v1.PartyTokenBalance>}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getTokenBalanceList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PartyTokenBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PartyTokenBalance, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PartyTokenBalance>} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
*/
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setTokenBalanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PartyTokenBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PartyTokenBalance}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.addTokenBalance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.PartyTokenBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.clearTokenBalanceList = function() {
  return this.setTokenBalanceList([]);
};


/**
 * repeated BlockRejectStats recent_blocks_reject_stats = 4;
 * @return {!Array<!proto.vega.snapshot.v1.BlockRejectStats>}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getRecentBlocksRejectStatsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.BlockRejectStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.BlockRejectStats, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.BlockRejectStats>} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
*/
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setRecentBlocksRejectStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.BlockRejectStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.BlockRejectStats}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.addRecentBlocksRejectStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.BlockRejectStats, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.clearRecentBlocksRejectStatsList = function() {
  return this.setRecentBlocksRejectStatsList([]);
};


/**
 * optional uint64 current_block_index = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getCurrentBlockIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setCurrentBlockIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 last_increase_block = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getLastIncreaseBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setLastIncreaseBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 current_epoch_seq = 7;
 * @return {number}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getCurrentEpochSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setCurrentEpochSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string min_voting_tokens_factor = 8;
 * @return {string}
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.getMinVotingTokensFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.VoteSpamPolicy} returns this
 */
proto.vega.snapshot.v1.VoteSpamPolicy.prototype.setMinVotingTokensFactor = function(value) {
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
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PartyProposalVoteCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PartyProposalVoteCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    proposal: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.vega.snapshot.v1.PartyProposalVoteCount}
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PartyProposalVoteCount;
  return proto.vega.snapshot.v1.PartyProposalVoteCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PartyProposalVoteCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PartyProposalVoteCount}
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProposal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
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
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PartyProposalVoteCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PartyProposalVoteCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProposal();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PartyProposalVoteCount} returns this
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string proposal = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.getProposal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PartyProposalVoteCount} returns this
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.setProposal = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PartyProposalVoteCount} returns this
 */
proto.vega.snapshot.v1.PartyProposalVoteCount.prototype.setCount = function(value) {
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
proto.vega.snapshot.v1.PartyTokenBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PartyTokenBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PartyTokenBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PartyTokenBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.vega.snapshot.v1.PartyTokenBalance}
 */
proto.vega.snapshot.v1.PartyTokenBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PartyTokenBalance;
  return proto.vega.snapshot.v1.PartyTokenBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PartyTokenBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PartyTokenBalance}
 */
proto.vega.snapshot.v1.PartyTokenBalance.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.snapshot.v1.PartyTokenBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PartyTokenBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PartyTokenBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PartyTokenBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
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
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PartyTokenBalance.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PartyTokenBalance} returns this
 */
proto.vega.snapshot.v1.PartyTokenBalance.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string balance = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PartyTokenBalance.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PartyTokenBalance} returns this
 */
proto.vega.snapshot.v1.PartyTokenBalance.prototype.setBalance = function(value) {
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
proto.vega.snapshot.v1.BlockRejectStats.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BlockRejectStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BlockRejectStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BlockRejectStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    rejected: jspb.Message.getFieldWithDefault(msg, 1, 0),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.snapshot.v1.BlockRejectStats}
 */
proto.vega.snapshot.v1.BlockRejectStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BlockRejectStats;
  return proto.vega.snapshot.v1.BlockRejectStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BlockRejectStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BlockRejectStats}
 */
proto.vega.snapshot.v1.BlockRejectStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRejected(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
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
proto.vega.snapshot.v1.BlockRejectStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BlockRejectStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BlockRejectStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BlockRejectStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRejected();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 rejected = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.BlockRejectStats.prototype.getRejected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.BlockRejectStats} returns this
 */
proto.vega.snapshot.v1.BlockRejectStats.prototype.setRejected = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 total = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.BlockRejectStats.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.BlockRejectStats} returns this
 */
proto.vega.snapshot.v1.BlockRejectStats.prototype.setTotal = function(value) {
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
proto.vega.snapshot.v1.SpamPartyTransactionCount.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.SpamPartyTransactionCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.SpamPartyTransactionCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.snapshot.v1.SpamPartyTransactionCount}
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.SpamPartyTransactionCount;
  return proto.vega.snapshot.v1.SpamPartyTransactionCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.SpamPartyTransactionCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.SpamPartyTransactionCount}
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
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
proto.vega.snapshot.v1.SpamPartyTransactionCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.SpamPartyTransactionCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.SpamPartyTransactionCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SpamPartyTransactionCount} returns this
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.SpamPartyTransactionCount} returns this
 */
proto.vega.snapshot.v1.SpamPartyTransactionCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.repeatedFields_ = [2,3,4];



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
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.SimpleSpamPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.SimpleSpamPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyToCountList: jspb.Message.toObjectList(msg.getPartyToCountList(),
    proto.vega.snapshot.v1.SpamPartyTransactionCount.toObject, includeInstance),
    bannedPartiesList: jspb.Message.toObjectList(msg.getBannedPartiesList(),
    proto.vega.snapshot.v1.BannedParty.toObject, includeInstance),
    tokenBalanceList: jspb.Message.toObjectList(msg.getTokenBalanceList(),
    proto.vega.snapshot.v1.PartyTokenBalance.toObject, includeInstance),
    currentEpochSeq: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.SimpleSpamPolicy;
  return proto.vega.snapshot.v1.SimpleSpamPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.SimpleSpamPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyName(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.SpamPartyTransactionCount;
      reader.readMessage(value,proto.vega.snapshot.v1.SpamPartyTransactionCount.deserializeBinaryFromReader);
      msg.addPartyToCount(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.BannedParty;
      reader.readMessage(value,proto.vega.snapshot.v1.BannedParty.deserializeBinaryFromReader);
      msg.addBannedParties(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.PartyTokenBalance;
      reader.readMessage(value,proto.vega.snapshot.v1.PartyTokenBalance.deserializeBinaryFromReader);
      msg.addTokenBalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentEpochSeq(value);
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
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.SimpleSpamPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.SimpleSpamPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyToCountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.SpamPartyTransactionCount.serializeBinaryToWriter
    );
  }
  f = message.getBannedPartiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.BannedParty.serializeBinaryToWriter
    );
  }
  f = message.getTokenBalanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.PartyTokenBalance.serializeBinaryToWriter
    );
  }
  f = message.getCurrentEpochSeq();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string policy_name = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.getPolicyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.setPolicyName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SpamPartyTransactionCount party_to_count = 2;
 * @return {!Array<!proto.vega.snapshot.v1.SpamPartyTransactionCount>}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.getPartyToCountList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.SpamPartyTransactionCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.SpamPartyTransactionCount, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.SpamPartyTransactionCount>} value
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
*/
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.setPartyToCountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.SpamPartyTransactionCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.SpamPartyTransactionCount}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.addPartyToCount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.SpamPartyTransactionCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.clearPartyToCountList = function() {
  return this.setPartyToCountList([]);
};


/**
 * repeated BannedParty banned_parties = 3;
 * @return {!Array<!proto.vega.snapshot.v1.BannedParty>}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.getBannedPartiesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.BannedParty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.BannedParty, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.BannedParty>} value
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
*/
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.setBannedPartiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.BannedParty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.BannedParty}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.addBannedParties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.BannedParty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.clearBannedPartiesList = function() {
  return this.setBannedPartiesList([]);
};


/**
 * repeated PartyTokenBalance token_balance = 4;
 * @return {!Array<!proto.vega.snapshot.v1.PartyTokenBalance>}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.getTokenBalanceList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PartyTokenBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PartyTokenBalance, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PartyTokenBalance>} value
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
*/
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.setTokenBalanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PartyTokenBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PartyTokenBalance}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.addTokenBalance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.PartyTokenBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.clearTokenBalanceList = function() {
  return this.setTokenBalanceList([]);
};


/**
 * optional uint64 current_epoch_seq = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.getCurrentEpochSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.SimpleSpamPolicy} returns this
 */
proto.vega.snapshot.v1.SimpleSpamPolicy.prototype.setCurrentEpochSeq = function(value) {
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
proto.vega.snapshot.v1.NotarySigs.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.NotarySigs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.NotarySigs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NotarySigs.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 2, 0),
    node: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sig: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.vega.snapshot.v1.NotarySigs}
 */
proto.vega.snapshot.v1.NotarySigs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.NotarySigs;
  return proto.vega.snapshot.v1.NotarySigs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.NotarySigs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.NotarySigs}
 */
proto.vega.snapshot.v1.NotarySigs.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSig(value);
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
proto.vega.snapshot.v1.NotarySigs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.NotarySigs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.NotarySigs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NotarySigs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKind();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSig();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.NotarySigs.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NotarySigs} returns this
 */
proto.vega.snapshot.v1.NotarySigs.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 kind = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.NotarySigs.prototype.getKind = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.NotarySigs} returns this
 */
proto.vega.snapshot.v1.NotarySigs.prototype.setKind = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string node = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.NotarySigs.prototype.getNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NotarySigs} returns this
 */
proto.vega.snapshot.v1.NotarySigs.prototype.setNode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sig = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.NotarySigs.prototype.getSig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NotarySigs} returns this
 */
proto.vega.snapshot.v1.NotarySigs.prototype.setSig = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Notary.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.Notary.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Notary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Notary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Notary.toObject = function(includeInstance, msg) {
  var f, obj = {
    notarySigsList: jspb.Message.toObjectList(msg.getNotarySigsList(),
    proto.vega.snapshot.v1.NotarySigs.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.Notary}
 */
proto.vega.snapshot.v1.Notary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Notary;
  return proto.vega.snapshot.v1.Notary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Notary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Notary}
 */
proto.vega.snapshot.v1.Notary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.NotarySigs;
      reader.readMessage(value,proto.vega.snapshot.v1.NotarySigs.deserializeBinaryFromReader);
      msg.addNotarySigs(value);
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
proto.vega.snapshot.v1.Notary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Notary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Notary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Notary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotarySigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.NotarySigs.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NotarySigs notary_sigs = 1;
 * @return {!Array<!proto.vega.snapshot.v1.NotarySigs>}
 */
proto.vega.snapshot.v1.Notary.prototype.getNotarySigsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.NotarySigs>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.NotarySigs, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.NotarySigs>} value
 * @return {!proto.vega.snapshot.v1.Notary} returns this
*/
proto.vega.snapshot.v1.Notary.prototype.setNotarySigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.NotarySigs=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.NotarySigs}
 */
proto.vega.snapshot.v1.Notary.prototype.addNotarySigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.NotarySigs, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Notary} returns this
 */
proto.vega.snapshot.v1.Notary.prototype.clearNotarySigsList = function() {
  return this.setNotarySigsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.StakeVerifierDeposited.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.StakeVerifierDeposited.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.StakeVerifierDeposited} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingDepositedList: jspb.Message.toObjectList(msg.getPendingDepositedList(),
    proto.vega.snapshot.v1.StakeVerifierPending.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.StakeVerifierDeposited}
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.StakeVerifierDeposited;
  return proto.vega.snapshot.v1.StakeVerifierDeposited.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.StakeVerifierDeposited} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.StakeVerifierDeposited}
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.StakeVerifierPending;
      reader.readMessage(value,proto.vega.snapshot.v1.StakeVerifierPending.deserializeBinaryFromReader);
      msg.addPendingDeposited(value);
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
proto.vega.snapshot.v1.StakeVerifierDeposited.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.StakeVerifierDeposited.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.StakeVerifierDeposited} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingDepositedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.StakeVerifierPending.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StakeVerifierPending pending_deposited = 1;
 * @return {!Array<!proto.vega.snapshot.v1.StakeVerifierPending>}
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.prototype.getPendingDepositedList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.StakeVerifierPending>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.StakeVerifierPending, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.StakeVerifierPending>} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierDeposited} returns this
*/
proto.vega.snapshot.v1.StakeVerifierDeposited.prototype.setPendingDepositedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.StakeVerifierPending=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending}
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.prototype.addPendingDeposited = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.StakeVerifierPending, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.StakeVerifierDeposited} returns this
 */
proto.vega.snapshot.v1.StakeVerifierDeposited.prototype.clearPendingDepositedList = function() {
  return this.setPendingDepositedList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.StakeVerifierRemoved.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.StakeVerifierRemoved.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.StakeVerifierRemoved} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingRemovedList: jspb.Message.toObjectList(msg.getPendingRemovedList(),
    proto.vega.snapshot.v1.StakeVerifierPending.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.StakeVerifierRemoved}
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.StakeVerifierRemoved;
  return proto.vega.snapshot.v1.StakeVerifierRemoved.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.StakeVerifierRemoved} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.StakeVerifierRemoved}
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.StakeVerifierPending;
      reader.readMessage(value,proto.vega.snapshot.v1.StakeVerifierPending.deserializeBinaryFromReader);
      msg.addPendingRemoved(value);
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
proto.vega.snapshot.v1.StakeVerifierRemoved.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.StakeVerifierRemoved.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.StakeVerifierRemoved} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingRemovedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.StakeVerifierPending.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StakeVerifierPending pending_removed = 1;
 * @return {!Array<!proto.vega.snapshot.v1.StakeVerifierPending>}
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.prototype.getPendingRemovedList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.StakeVerifierPending>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.StakeVerifierPending, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.StakeVerifierPending>} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierRemoved} returns this
*/
proto.vega.snapshot.v1.StakeVerifierRemoved.prototype.setPendingRemovedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.StakeVerifierPending=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending}
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.prototype.addPendingRemoved = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.StakeVerifierPending, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.StakeVerifierRemoved} returns this
 */
proto.vega.snapshot.v1.StakeVerifierRemoved.prototype.clearPendingRemovedList = function() {
  return this.setPendingRemovedList([]);
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
proto.vega.snapshot.v1.StakeVerifierPending.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.StakeVerifierPending.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.StakeVerifierPending} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakeVerifierPending.toObject = function(includeInstance, msg) {
  var f, obj = {
    ethereumAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vegaPublicKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockNumber: jspb.Message.getFieldWithDefault(msg, 5, 0),
    logIndex: jspb.Message.getFieldWithDefault(msg, 6, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    id: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending}
 */
proto.vega.snapshot.v1.StakeVerifierPending.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.StakeVerifierPending;
  return proto.vega.snapshot.v1.StakeVerifierPending.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.StakeVerifierPending} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending}
 */
proto.vega.snapshot.v1.StakeVerifierPending.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthereumAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVegaPublicKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockNumber(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogIndex(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 8:
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
proto.vega.snapshot.v1.StakeVerifierPending.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.StakeVerifierPending.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.StakeVerifierPending} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StakeVerifierPending.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEthereumAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVegaPublicKey();
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
  f = message.getBlockTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getBlockNumber();
  if (f !== 0) {
    writer.writeUint64(
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
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string ethereum_address = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getEthereumAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setEthereumAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string vega_public_key = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getVegaPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setVegaPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 block_time = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getBlockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setBlockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 block_number = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setBlockNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 log_index = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getLogIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setLogIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string tx_id = 7;
 * @return {string}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string id = 8;
 * @return {string}
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StakeVerifierPending} returns this
 */
proto.vega.snapshot.v1.StakeVerifierPending.prototype.setId = function(value) {
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
proto.vega.snapshot.v1.PendingKeyRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PendingKeyRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PendingKeyRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingKeyRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPubKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newPubKeyIndex: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation}
 */
proto.vega.snapshot.v1.PendingKeyRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PendingKeyRotation;
  return proto.vega.snapshot.v1.PendingKeyRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PendingKeyRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation}
 */
proto.vega.snapshot.v1.PendingKeyRotation.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNodeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPubKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNewPubKeyIndex(value);
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
proto.vega.snapshot.v1.PendingKeyRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PendingKeyRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PendingKeyRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingKeyRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
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
  f = message.getNewPubKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewPubKeyIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_pub_key = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.getNewPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.setNewPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 new_pub_key_index = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.getNewPubKeyIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingKeyRotation.prototype.setNewPubKeyIndex = function(value) {
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
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PendingEthereumKeyRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    submitter: jspb.Message.getFieldWithDefault(msg, 4, ""),
    oldAddress: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PendingEthereumKeyRotation;
  return proto.vega.snapshot.v1.PendingEthereumKeyRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNodeId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubmitter(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldAddress(value);
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
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PendingEthereumKeyRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
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
  f = message.getNewAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubmitter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOldAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string node_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_address = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.getNewAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.setNewAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string submitter = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.getSubmitter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.setSubmitter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string old_address = 5;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.getOldAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation} returns this
 */
proto.vega.snapshot.v1.PendingEthereumKeyRotation.prototype.setOldAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.Topology.repeatedFields_ = [1,2,3,5,7];



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
proto.vega.snapshot.v1.Topology.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.Topology.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.Topology} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Topology.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorDataList: jspb.Message.toObjectList(msg.getValidatorDataList(),
    proto.vega.snapshot.v1.ValidatorState.toObject, includeInstance),
    chainKeysList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    pendingPubKeyRotationsList: jspb.Message.toObjectList(msg.getPendingPubKeyRotationsList(),
    proto.vega.snapshot.v1.PendingKeyRotation.toObject, includeInstance),
    validatorPerformance: (f = msg.getValidatorPerformance()) && proto.vega.snapshot.v1.ValidatorPerformance.toObject(includeInstance, f),
    pendingEthereumKeyRotationsList: jspb.Message.toObjectList(msg.getPendingEthereumKeyRotationsList(),
    proto.vega.snapshot.v1.PendingEthereumKeyRotation.toObject, includeInstance),
    signatures: (f = msg.getSignatures()) && proto.vega.snapshot.v1.ToplogySignatures.toObject(includeInstance, f),
    unsolvedEthereumKeyRotationsList: jspb.Message.toObjectList(msg.getUnsolvedEthereumKeyRotationsList(),
    proto.vega.snapshot.v1.PendingEthereumKeyRotation.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.Topology}
 */
proto.vega.snapshot.v1.Topology.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.Topology;
  return proto.vega.snapshot.v1.Topology.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.Topology} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.Topology}
 */
proto.vega.snapshot.v1.Topology.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.ValidatorState;
      reader.readMessage(value,proto.vega.snapshot.v1.ValidatorState.deserializeBinaryFromReader);
      msg.addValidatorData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addChainKeys(value);
      break;
    case 3:
      var value = new proto.vega.snapshot.v1.PendingKeyRotation;
      reader.readMessage(value,proto.vega.snapshot.v1.PendingKeyRotation.deserializeBinaryFromReader);
      msg.addPendingPubKeyRotations(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.ValidatorPerformance;
      reader.readMessage(value,proto.vega.snapshot.v1.ValidatorPerformance.deserializeBinaryFromReader);
      msg.setValidatorPerformance(value);
      break;
    case 5:
      var value = new proto.vega.snapshot.v1.PendingEthereumKeyRotation;
      reader.readMessage(value,proto.vega.snapshot.v1.PendingEthereumKeyRotation.deserializeBinaryFromReader);
      msg.addPendingEthereumKeyRotations(value);
      break;
    case 6:
      var value = new proto.vega.snapshot.v1.ToplogySignatures;
      reader.readMessage(value,proto.vega.snapshot.v1.ToplogySignatures.deserializeBinaryFromReader);
      msg.setSignatures(value);
      break;
    case 7:
      var value = new proto.vega.snapshot.v1.PendingEthereumKeyRotation;
      reader.readMessage(value,proto.vega.snapshot.v1.PendingEthereumKeyRotation.deserializeBinaryFromReader);
      msg.addUnsolvedEthereumKeyRotations(value);
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
proto.vega.snapshot.v1.Topology.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.Topology.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.Topology} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.Topology.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.ValidatorState.serializeBinaryToWriter
    );
  }
  f = message.getChainKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPendingPubKeyRotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.snapshot.v1.PendingKeyRotation.serializeBinaryToWriter
    );
  }
  f = message.getValidatorPerformance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vega.snapshot.v1.ValidatorPerformance.serializeBinaryToWriter
    );
  }
  f = message.getPendingEthereumKeyRotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vega.snapshot.v1.PendingEthereumKeyRotation.serializeBinaryToWriter
    );
  }
  f = message.getSignatures();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.vega.snapshot.v1.ToplogySignatures.serializeBinaryToWriter
    );
  }
  f = message.getUnsolvedEthereumKeyRotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.vega.snapshot.v1.PendingEthereumKeyRotation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ValidatorState validator_data = 1;
 * @return {!Array<!proto.vega.snapshot.v1.ValidatorState>}
 */
proto.vega.snapshot.v1.Topology.prototype.getValidatorDataList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ValidatorState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ValidatorState, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ValidatorState>} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
*/
proto.vega.snapshot.v1.Topology.prototype.setValidatorDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ValidatorState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ValidatorState}
 */
proto.vega.snapshot.v1.Topology.prototype.addValidatorData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.ValidatorState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearValidatorDataList = function() {
  return this.setValidatorDataList([]);
};


/**
 * repeated string chain_keys = 2;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.Topology.prototype.getChainKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.setChainKeysList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.addChainKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearChainKeysList = function() {
  return this.setChainKeysList([]);
};


/**
 * repeated PendingKeyRotation pending_pub_key_rotations = 3;
 * @return {!Array<!proto.vega.snapshot.v1.PendingKeyRotation>}
 */
proto.vega.snapshot.v1.Topology.prototype.getPendingPubKeyRotationsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PendingKeyRotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PendingKeyRotation, 3));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PendingKeyRotation>} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
*/
proto.vega.snapshot.v1.Topology.prototype.setPendingPubKeyRotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PendingKeyRotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PendingKeyRotation}
 */
proto.vega.snapshot.v1.Topology.prototype.addPendingPubKeyRotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.snapshot.v1.PendingKeyRotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearPendingPubKeyRotationsList = function() {
  return this.setPendingPubKeyRotationsList([]);
};


/**
 * optional ValidatorPerformance validator_performance = 4;
 * @return {?proto.vega.snapshot.v1.ValidatorPerformance}
 */
proto.vega.snapshot.v1.Topology.prototype.getValidatorPerformance = function() {
  return /** @type{?proto.vega.snapshot.v1.ValidatorPerformance} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ValidatorPerformance, 4));
};


/**
 * @param {?proto.vega.snapshot.v1.ValidatorPerformance|undefined} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
*/
proto.vega.snapshot.v1.Topology.prototype.setValidatorPerformance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearValidatorPerformance = function() {
  return this.setValidatorPerformance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Topology.prototype.hasValidatorPerformance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated PendingEthereumKeyRotation pending_ethereum_key_rotations = 5;
 * @return {!Array<!proto.vega.snapshot.v1.PendingEthereumKeyRotation>}
 */
proto.vega.snapshot.v1.Topology.prototype.getPendingEthereumKeyRotationsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PendingEthereumKeyRotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PendingEthereumKeyRotation, 5));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PendingEthereumKeyRotation>} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
*/
proto.vega.snapshot.v1.Topology.prototype.setPendingEthereumKeyRotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PendingEthereumKeyRotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation}
 */
proto.vega.snapshot.v1.Topology.prototype.addPendingEthereumKeyRotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vega.snapshot.v1.PendingEthereumKeyRotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearPendingEthereumKeyRotationsList = function() {
  return this.setPendingEthereumKeyRotationsList([]);
};


/**
 * optional ToplogySignatures signatures = 6;
 * @return {?proto.vega.snapshot.v1.ToplogySignatures}
 */
proto.vega.snapshot.v1.Topology.prototype.getSignatures = function() {
  return /** @type{?proto.vega.snapshot.v1.ToplogySignatures} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.ToplogySignatures, 6));
};


/**
 * @param {?proto.vega.snapshot.v1.ToplogySignatures|undefined} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
*/
proto.vega.snapshot.v1.Topology.prototype.setSignatures = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearSignatures = function() {
  return this.setSignatures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.Topology.prototype.hasSignatures = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated PendingEthereumKeyRotation unsolved_ethereum_key_rotations = 7;
 * @return {!Array<!proto.vega.snapshot.v1.PendingEthereumKeyRotation>}
 */
proto.vega.snapshot.v1.Topology.prototype.getUnsolvedEthereumKeyRotationsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PendingEthereumKeyRotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PendingEthereumKeyRotation, 7));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PendingEthereumKeyRotation>} value
 * @return {!proto.vega.snapshot.v1.Topology} returns this
*/
proto.vega.snapshot.v1.Topology.prototype.setUnsolvedEthereumKeyRotationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PendingEthereumKeyRotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PendingEthereumKeyRotation}
 */
proto.vega.snapshot.v1.Topology.prototype.addUnsolvedEthereumKeyRotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.vega.snapshot.v1.PendingEthereumKeyRotation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.Topology} returns this
 */
proto.vega.snapshot.v1.Topology.prototype.clearUnsolvedEthereumKeyRotationsList = function() {
  return this.setUnsolvedEthereumKeyRotationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ToplogySignatures.repeatedFields_ = [1,2];



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
proto.vega.snapshot.v1.ToplogySignatures.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ToplogySignatures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ToplogySignatures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ToplogySignatures.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingSignaturesList: jspb.Message.toObjectList(msg.getPendingSignaturesList(),
    proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.toObject, includeInstance),
    issuedSignaturesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.ToplogySignatures}
 */
proto.vega.snapshot.v1.ToplogySignatures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ToplogySignatures;
  return proto.vega.snapshot.v1.ToplogySignatures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ToplogySignatures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ToplogySignatures}
 */
proto.vega.snapshot.v1.ToplogySignatures.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.PendingERC20MultisigControlSignature;
      reader.readMessage(value,proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.deserializeBinaryFromReader);
      msg.addPendingSignatures(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addIssuedSignatures(value);
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
proto.vega.snapshot.v1.ToplogySignatures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ToplogySignatures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ToplogySignatures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ToplogySignatures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.serializeBinaryToWriter
    );
  }
  f = message.getIssuedSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated PendingERC20MultisigControlSignature pending_signatures = 1;
 * @return {!Array<!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature>}
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.getPendingSignaturesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PendingERC20MultisigControlSignature, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature>} value
 * @return {!proto.vega.snapshot.v1.ToplogySignatures} returns this
*/
proto.vega.snapshot.v1.ToplogySignatures.prototype.setPendingSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature}
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.addPendingSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.PendingERC20MultisigControlSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ToplogySignatures} returns this
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.clearPendingSignaturesList = function() {
  return this.setPendingSignaturesList([]);
};


/**
 * repeated string issued_signatures = 2;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.getIssuedSignaturesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.ToplogySignatures} returns this
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.setIssuedSignaturesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ToplogySignatures} returns this
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.addIssuedSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ToplogySignatures} returns this
 */
proto.vega.snapshot.v1.ToplogySignatures.prototype.clearIssuedSignaturesList = function() {
  return this.setIssuedSignaturesList([]);
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
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ethereumAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nonce: jspb.Message.getFieldWithDefault(msg, 3, ""),
    epochSeq: jspb.Message.getFieldWithDefault(msg, 4, 0),
    added: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PendingERC20MultisigControlSignature;
  return proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEthereumAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochSeq(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdded(value);
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
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEthereumAddress();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getEpochSeq();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAdded();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} returns this
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ethereum_address = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.getEthereumAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} returns this
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.setEthereumAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nonce = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} returns this
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 epoch_seq = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.getEpochSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} returns this
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.setEpochSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool added = 5;
 * @return {boolean}
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.getAdded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.PendingERC20MultisigControlSignature} returns this
 */
proto.vega.snapshot.v1.PendingERC20MultisigControlSignature.prototype.setAdded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.vega.snapshot.v1.ValidatorState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ValidatorState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ValidatorState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ValidatorState.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorUpdate: (f = msg.getValidatorUpdate()) && vega_events_v1_events_pb.ValidatorUpdate.toObject(includeInstance, f),
    blockAdded: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    statusChangeBlock: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastBlockWithPositiveRanking: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ethEventsForwarded: jspb.Message.getFieldWithDefault(msg, 6, 0),
    heartbeatTracker: (f = msg.getHeartbeatTracker()) && proto.vega.snapshot.v1.HeartbeatTracker.toObject(includeInstance, f),
    validatorPower: jspb.Message.getFieldWithDefault(msg, 8, 0),
    rankingScore: (f = msg.getRankingScore()) && vega_vega_pb.RankingScore.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.ValidatorState}
 */
proto.vega.snapshot.v1.ValidatorState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ValidatorState;
  return proto.vega.snapshot.v1.ValidatorState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ValidatorState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ValidatorState}
 */
proto.vega.snapshot.v1.ValidatorState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_events_v1_events_pb.ValidatorUpdate;
      reader.readMessage(value,vega_events_v1_events_pb.ValidatorUpdate.deserializeBinaryFromReader);
      msg.setValidatorUpdate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockAdded(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStatusChangeBlock(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastBlockWithPositiveRanking(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEthEventsForwarded(value);
      break;
    case 7:
      var value = new proto.vega.snapshot.v1.HeartbeatTracker;
      reader.readMessage(value,proto.vega.snapshot.v1.HeartbeatTracker.deserializeBinaryFromReader);
      msg.setHeartbeatTracker(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidatorPower(value);
      break;
    case 9:
      var value = new vega_vega_pb.RankingScore;
      reader.readMessage(value,vega_vega_pb.RankingScore.deserializeBinaryFromReader);
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
proto.vega.snapshot.v1.ValidatorState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ValidatorState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ValidatorState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ValidatorState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vega_events_v1_events_pb.ValidatorUpdate.serializeBinaryToWriter
    );
  }
  f = message.getBlockAdded();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStatusChangeBlock();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getLastBlockWithPositiveRanking();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getEthEventsForwarded();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getHeartbeatTracker();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.vega.snapshot.v1.HeartbeatTracker.serializeBinaryToWriter
    );
  }
  f = message.getValidatorPower();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getRankingScore();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      vega_vega_pb.RankingScore.serializeBinaryToWriter
    );
  }
};


/**
 * optional vega.events.v1.ValidatorUpdate validator_update = 1;
 * @return {?proto.vega.events.v1.ValidatorUpdate}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getValidatorUpdate = function() {
  return /** @type{?proto.vega.events.v1.ValidatorUpdate} */ (
    jspb.Message.getWrapperField(this, vega_events_v1_events_pb.ValidatorUpdate, 1));
};


/**
 * @param {?proto.vega.events.v1.ValidatorUpdate|undefined} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
*/
proto.vega.snapshot.v1.ValidatorState.prototype.setValidatorUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.clearValidatorUpdate = function() {
  return this.setValidatorUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.hasValidatorUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 block_added = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getBlockAdded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.setBlockAdded = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 status_change_block = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getStatusChangeBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.setStatusChangeBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 last_block_with_positive_ranking = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getLastBlockWithPositiveRanking = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.setLastBlockWithPositiveRanking = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 eth_events_forwarded = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getEthEventsForwarded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.setEthEventsForwarded = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional HeartbeatTracker heartbeat_tracker = 7;
 * @return {?proto.vega.snapshot.v1.HeartbeatTracker}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getHeartbeatTracker = function() {
  return /** @type{?proto.vega.snapshot.v1.HeartbeatTracker} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.HeartbeatTracker, 7));
};


/**
 * @param {?proto.vega.snapshot.v1.HeartbeatTracker|undefined} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
*/
proto.vega.snapshot.v1.ValidatorState.prototype.setHeartbeatTracker = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.clearHeartbeatTracker = function() {
  return this.setHeartbeatTracker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.hasHeartbeatTracker = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 validator_power = 8;
 * @return {number}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getValidatorPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.setValidatorPower = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional vega.RankingScore ranking_score = 9;
 * @return {?proto.vega.RankingScore}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.getRankingScore = function() {
  return /** @type{?proto.vega.RankingScore} */ (
    jspb.Message.getWrapperField(this, vega_vega_pb.RankingScore, 9));
};


/**
 * @param {?proto.vega.RankingScore|undefined} value
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
*/
proto.vega.snapshot.v1.ValidatorState.prototype.setRankingScore = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.ValidatorState} returns this
 */
proto.vega.snapshot.v1.ValidatorState.prototype.clearRankingScore = function() {
  return this.setRankingScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.ValidatorState.prototype.hasRankingScore = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.HeartbeatTracker.repeatedFields_ = [4];



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
proto.vega.snapshot.v1.HeartbeatTracker.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.HeartbeatTracker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.HeartbeatTracker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.HeartbeatTracker.toObject = function(includeInstance, msg) {
  var f, obj = {
    expectedNextHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expectedNextHashSince: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    blockSigsList: (f = jspb.Message.getRepeatedBooleanField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker}
 */
proto.vega.snapshot.v1.HeartbeatTracker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.HeartbeatTracker;
  return proto.vega.snapshot.v1.HeartbeatTracker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.HeartbeatTracker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker}
 */
proto.vega.snapshot.v1.HeartbeatTracker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpectedNextHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpectedNextHashSince(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlockIndex(value);
      break;
    case 4:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBlockSigs(values[i]);
      }
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
proto.vega.snapshot.v1.HeartbeatTracker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.HeartbeatTracker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.HeartbeatTracker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.HeartbeatTracker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpectedNextHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpectedNextHashSince();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBlockIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBlockSigsList();
  if (f.length > 0) {
    writer.writePackedBool(
      4,
      f
    );
  }
};


/**
 * optional string expected_next_hash = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.getExpectedNextHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker} returns this
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.setExpectedNextHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 expected_next_hash_since = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.getExpectedNextHashSince = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker} returns this
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.setExpectedNextHashSince = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 block_index = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.getBlockIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker} returns this
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.setBlockIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated bool block_sigs = 4;
 * @return {!Array<boolean>}
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.getBlockSigsList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 4));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker} returns this
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.setBlockSigsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker} returns this
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.addBlockSigs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.HeartbeatTracker} returns this
 */
proto.vega.snapshot.v1.HeartbeatTracker.prototype.clearBlockSigsList = function() {
  return this.setBlockSigsList([]);
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
proto.vega.snapshot.v1.PerformanceStats.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PerformanceStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PerformanceStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PerformanceStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    proposed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    elected: jspb.Message.getFieldWithDefault(msg, 3, 0),
    voted: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastHeightVoted: jspb.Message.getFieldWithDefault(msg, 5, 0),
    lastHeightProposed: jspb.Message.getFieldWithDefault(msg, 6, 0),
    lastHeightElected: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.vega.snapshot.v1.PerformanceStats}
 */
proto.vega.snapshot.v1.PerformanceStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PerformanceStats;
  return proto.vega.snapshot.v1.PerformanceStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PerformanceStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PerformanceStats}
 */
proto.vega.snapshot.v1.PerformanceStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setElected(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVoted(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastHeightVoted(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastHeightProposed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastHeightElected(value);
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
proto.vega.snapshot.v1.PerformanceStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PerformanceStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PerformanceStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PerformanceStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProposed();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getElected();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getVoted();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getLastHeightVoted();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLastHeightProposed();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getLastHeightElected();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string validator_address = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getValidatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 proposed = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getProposed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setProposed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 elected = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getElected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setElected = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 voted = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getVoted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setVoted = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 last_height_voted = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getLastHeightVoted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setLastHeightVoted = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 last_height_proposed = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getLastHeightProposed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setLastHeightProposed = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 last_height_elected = 7;
 * @return {number}
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.getLastHeightElected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.PerformanceStats} returns this
 */
proto.vega.snapshot.v1.PerformanceStats.prototype.setLastHeightElected = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ValidatorPerformance.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.ValidatorPerformance.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ValidatorPerformance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ValidatorPerformance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ValidatorPerformance.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorPerfStatsList: jspb.Message.toObjectList(msg.getValidatorPerfStatsList(),
    proto.vega.snapshot.v1.PerformanceStats.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ValidatorPerformance}
 */
proto.vega.snapshot.v1.ValidatorPerformance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ValidatorPerformance;
  return proto.vega.snapshot.v1.ValidatorPerformance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ValidatorPerformance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ValidatorPerformance}
 */
proto.vega.snapshot.v1.ValidatorPerformance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.PerformanceStats;
      reader.readMessage(value,proto.vega.snapshot.v1.PerformanceStats.deserializeBinaryFromReader);
      msg.addValidatorPerfStats(value);
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
proto.vega.snapshot.v1.ValidatorPerformance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ValidatorPerformance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ValidatorPerformance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ValidatorPerformance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorPerfStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.PerformanceStats.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PerformanceStats validator_perf_stats = 1;
 * @return {!Array<!proto.vega.snapshot.v1.PerformanceStats>}
 */
proto.vega.snapshot.v1.ValidatorPerformance.prototype.getValidatorPerfStatsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PerformanceStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PerformanceStats, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PerformanceStats>} value
 * @return {!proto.vega.snapshot.v1.ValidatorPerformance} returns this
*/
proto.vega.snapshot.v1.ValidatorPerformance.prototype.setValidatorPerfStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PerformanceStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PerformanceStats}
 */
proto.vega.snapshot.v1.ValidatorPerformance.prototype.addValidatorPerfStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.PerformanceStats, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ValidatorPerformance} returns this
 */
proto.vega.snapshot.v1.ValidatorPerformance.prototype.clearValidatorPerfStatsList = function() {
  return this.setValidatorPerfStatsList([]);
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
proto.vega.snapshot.v1.LiquidityParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxFee: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxShapeSize: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stakeToObligationFactor: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.vega.snapshot.v1.LiquidityParameters}
 */
proto.vega.snapshot.v1.LiquidityParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityParameters;
  return proto.vega.snapshot.v1.LiquidityParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityParameters}
 */
proto.vega.snapshot.v1.LiquidityParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxFee(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxShapeSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakeToObligationFactor(value);
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
proto.vega.snapshot.v1.LiquidityParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxFee();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxShapeSize();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStakeToObligationFactor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string max_fee = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.getMaxFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityParameters} returns this
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.setMaxFee = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string max_shape_size = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.getMaxShapeSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityParameters} returns this
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.setMaxShapeSize = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string stake_to_obligation_factor = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.getStakeToObligationFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityParameters} returns this
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.setStakeToObligationFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string market_id = 4;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityParameters} returns this
 */
proto.vega.snapshot.v1.LiquidityParameters.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityPendingProvisions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityPendingProvisions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingProvisionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityPendingProvisions}
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityPendingProvisions;
  return proto.vega.snapshot.v1.LiquidityPendingProvisions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityPendingProvisions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityPendingProvisions}
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPendingProvisions(value);
      break;
    case 2:
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
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityPendingProvisions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityPendingProvisions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingProvisionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
};


/**
 * repeated string pending_provisions = 1;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.getPendingProvisionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.LiquidityPendingProvisions} returns this
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.setPendingProvisionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.LiquidityPendingProvisions} returns this
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.addPendingProvisions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityPendingProvisions} returns this
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.clearPendingProvisionsList = function() {
  return this.setPendingProvisionsList([]);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityPendingProvisions} returns this
 */
proto.vega.snapshot.v1.LiquidityPendingProvisions.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyOrdersList: jspb.Message.toObjectList(msg.getPartyOrdersList(),
    proto.vega.snapshot.v1.PartyOrders.toObject, includeInstance),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders}
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders;
  return proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders}
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.PartyOrders;
      reader.readMessage(value,proto.vega.snapshot.v1.PartyOrders.deserializeBinaryFromReader);
      msg.addPartyOrders(value);
      break;
    case 2:
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
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.PartyOrders.serializeBinaryToWriter
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated PartyOrders party_orders = 1;
 * @return {!Array<!proto.vega.snapshot.v1.PartyOrders>}
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.getPartyOrdersList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PartyOrders>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PartyOrders, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PartyOrders>} value
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} returns this
*/
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.setPartyOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PartyOrders=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PartyOrders}
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.addPartyOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.PartyOrders, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} returns this
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.clearPartyOrdersList = function() {
  return this.setPartyOrdersList([]);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders} returns this
 */
proto.vega.snapshot.v1.LiquidityPartiesLiquidityOrders.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.PartyOrders.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.PartyOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.PartyOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.PartyOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PartyOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    vega_vega_pb.Order.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.PartyOrders}
 */
proto.vega.snapshot.v1.PartyOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.PartyOrders;
  return proto.vega.snapshot.v1.PartyOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.PartyOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.PartyOrders}
 */
proto.vega.snapshot.v1.PartyOrders.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new vega_vega_pb.Order;
      reader.readMessage(value,vega_vega_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
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
proto.vega.snapshot.v1.PartyOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.PartyOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.PartyOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.PartyOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_vega_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.PartyOrders.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.PartyOrders} returns this
 */
proto.vega.snapshot.v1.PartyOrders.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.Order orders = 2;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.snapshot.v1.PartyOrders.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.Order, 2));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.snapshot.v1.PartyOrders} returns this
*/
proto.vega.snapshot.v1.PartyOrders.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.snapshot.v1.PartyOrders.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.PartyOrders} returns this
 */
proto.vega.snapshot.v1.PartyOrders.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityPartiesOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityPartiesOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyOrdersList: jspb.Message.toObjectList(msg.getPartyOrdersList(),
    proto.vega.snapshot.v1.PartyOrders.toObject, includeInstance),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesOrders}
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityPartiesOrders;
  return proto.vega.snapshot.v1.LiquidityPartiesOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityPartiesOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesOrders}
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.PartyOrders;
      reader.readMessage(value,proto.vega.snapshot.v1.PartyOrders.deserializeBinaryFromReader);
      msg.addPartyOrders(value);
      break;
    case 2:
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
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityPartiesOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityPartiesOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.PartyOrders.serializeBinaryToWriter
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated PartyOrders party_orders = 1;
 * @return {!Array<!proto.vega.snapshot.v1.PartyOrders>}
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.getPartyOrdersList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.PartyOrders>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.PartyOrders, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.PartyOrders>} value
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesOrders} returns this
*/
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.setPartyOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.PartyOrders=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.PartyOrders}
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.addPartyOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.PartyOrders, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesOrders} returns this
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.clearPartyOrdersList = function() {
  return this.setPartyOrdersList([]);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityPartiesOrders} returns this
 */
proto.vega.snapshot.v1.LiquidityPartiesOrders.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquidityProvisions.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.LiquidityProvisions.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityProvisions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityProvisions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityProvisions.toObject = function(includeInstance, msg) {
  var f, obj = {
    liquidityProvisionsList: jspb.Message.toObjectList(msg.getLiquidityProvisionsList(),
    vega_vega_pb.LiquidityProvision.toObject, includeInstance),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityProvisions}
 */
proto.vega.snapshot.v1.LiquidityProvisions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityProvisions;
  return proto.vega.snapshot.v1.LiquidityProvisions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityProvisions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityProvisions}
 */
proto.vega.snapshot.v1.LiquidityProvisions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_vega_pb.LiquidityProvision;
      reader.readMessage(value,vega_vega_pb.LiquidityProvision.deserializeBinaryFromReader);
      msg.addLiquidityProvisions(value);
      break;
    case 2:
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
proto.vega.snapshot.v1.LiquidityProvisions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityProvisions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityProvisions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityProvisions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLiquidityProvisionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_vega_pb.LiquidityProvision.serializeBinaryToWriter
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated vega.LiquidityProvision liquidity_provisions = 1;
 * @return {!Array<!proto.vega.LiquidityProvision>}
 */
proto.vega.snapshot.v1.LiquidityProvisions.prototype.getLiquidityProvisionsList = function() {
  return /** @type{!Array<!proto.vega.LiquidityProvision>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.LiquidityProvision, 1));
};


/**
 * @param {!Array<!proto.vega.LiquidityProvision>} value
 * @return {!proto.vega.snapshot.v1.LiquidityProvisions} returns this
*/
proto.vega.snapshot.v1.LiquidityProvisions.prototype.setLiquidityProvisionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.LiquidityProvision=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityProvision}
 */
proto.vega.snapshot.v1.LiquidityProvisions.prototype.addLiquidityProvisions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.LiquidityProvision, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityProvisions} returns this
 */
proto.vega.snapshot.v1.LiquidityProvisions.prototype.clearLiquidityProvisionsList = function() {
  return this.setLiquidityProvisionsList([]);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityProvisions.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityProvisions} returns this
 */
proto.vega.snapshot.v1.LiquidityProvisions.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.LiquidityScores.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.LiquidityScores.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityScores.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityScores} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityScores.toObject = function(includeInstance, msg) {
  var f, obj = {
    runningAverageCounter: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scoresList: jspb.Message.toObjectList(msg.getScoresList(),
    proto.vega.snapshot.v1.LiquidityScore.toObject, includeInstance),
    marketId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityScores}
 */
proto.vega.snapshot.v1.LiquidityScores.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityScores;
  return proto.vega.snapshot.v1.LiquidityScores.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityScores} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityScores}
 */
proto.vega.snapshot.v1.LiquidityScores.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRunningAverageCounter(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.LiquidityScore;
      reader.readMessage(value,proto.vega.snapshot.v1.LiquidityScore.deserializeBinaryFromReader);
      msg.addScores(value);
      break;
    case 3:
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
proto.vega.snapshot.v1.LiquidityScores.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityScores.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityScores} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityScores.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRunningAverageCounter();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getScoresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.LiquidityScore.serializeBinaryToWriter
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 running_average_counter = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.getRunningAverageCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.LiquidityScores} returns this
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.setRunningAverageCounter = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LiquidityScore scores = 2;
 * @return {!Array<!proto.vega.snapshot.v1.LiquidityScore>}
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.getScoresList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.LiquidityScore>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.LiquidityScore, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.LiquidityScore>} value
 * @return {!proto.vega.snapshot.v1.LiquidityScores} returns this
*/
proto.vega.snapshot.v1.LiquidityScores.prototype.setScoresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.LiquidityScore=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.LiquidityScore}
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.addScores = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.LiquidityScore, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.LiquidityScores} returns this
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.clearScoresList = function() {
  return this.setScoresList([]);
};


/**
 * optional string market_id = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityScores} returns this
 */
proto.vega.snapshot.v1.LiquidityScores.prototype.setMarketId = function(value) {
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
proto.vega.snapshot.v1.LiquidityScore.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.LiquidityScore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.LiquidityScore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityScore.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.LiquidityScore}
 */
proto.vega.snapshot.v1.LiquidityScore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.LiquidityScore;
  return proto.vega.snapshot.v1.LiquidityScore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.LiquidityScore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.LiquidityScore}
 */
proto.vega.snapshot.v1.LiquidityScore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScore(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyId(value);
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
proto.vega.snapshot.v1.LiquidityScore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.LiquidityScore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.LiquidityScore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.LiquidityScore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
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
};


/**
 * optional string score = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityScore.prototype.getScore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityScore} returns this
 */
proto.vega.snapshot.v1.LiquidityScore.prototype.setScore = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string party_id = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.LiquidityScore.prototype.getPartyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.LiquidityScore} returns this
 */
proto.vega.snapshot.v1.LiquidityScore.prototype.setPartyId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.FloatingPointConsensus.repeatedFields_ = [1,2];



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
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.FloatingPointConsensus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.FloatingPointConsensus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.FloatingPointConsensus.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextTimeTriggerList: jspb.Message.toObjectList(msg.getNextTimeTriggerList(),
    proto.vega.snapshot.v1.NextTimeTrigger.toObject, includeInstance),
    stateVariablesList: jspb.Message.toObjectList(msg.getStateVariablesList(),
    proto.vega.snapshot.v1.StateVarInternalState.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.FloatingPointConsensus}
 */
proto.vega.snapshot.v1.FloatingPointConsensus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.FloatingPointConsensus;
  return proto.vega.snapshot.v1.FloatingPointConsensus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.FloatingPointConsensus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.FloatingPointConsensus}
 */
proto.vega.snapshot.v1.FloatingPointConsensus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.NextTimeTrigger;
      reader.readMessage(value,proto.vega.snapshot.v1.NextTimeTrigger.deserializeBinaryFromReader);
      msg.addNextTimeTrigger(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.StateVarInternalState;
      reader.readMessage(value,proto.vega.snapshot.v1.StateVarInternalState.deserializeBinaryFromReader);
      msg.addStateVariables(value);
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
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.FloatingPointConsensus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.FloatingPointConsensus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.FloatingPointConsensus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextTimeTriggerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.NextTimeTrigger.serializeBinaryToWriter
    );
  }
  f = message.getStateVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.StateVarInternalState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NextTimeTrigger next_time_trigger = 1;
 * @return {!Array<!proto.vega.snapshot.v1.NextTimeTrigger>}
 */
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.getNextTimeTriggerList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.NextTimeTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.NextTimeTrigger, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.NextTimeTrigger>} value
 * @return {!proto.vega.snapshot.v1.FloatingPointConsensus} returns this
*/
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.setNextTimeTriggerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.NextTimeTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger}
 */
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.addNextTimeTrigger = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.NextTimeTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.FloatingPointConsensus} returns this
 */
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.clearNextTimeTriggerList = function() {
  return this.setNextTimeTriggerList([]);
};


/**
 * repeated StateVarInternalState state_variables = 2;
 * @return {!Array<!proto.vega.snapshot.v1.StateVarInternalState>}
 */
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.getStateVariablesList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.StateVarInternalState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.StateVarInternalState, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.StateVarInternalState>} value
 * @return {!proto.vega.snapshot.v1.FloatingPointConsensus} returns this
*/
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.setStateVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.StateVarInternalState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.StateVarInternalState}
 */
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.addStateVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.StateVarInternalState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.FloatingPointConsensus} returns this
 */
proto.vega.snapshot.v1.FloatingPointConsensus.prototype.clearStateVariablesList = function() {
  return this.setStateVariablesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.StateVarInternalState.repeatedFields_ = [4];



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
proto.vega.snapshot.v1.StateVarInternalState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.StateVarInternalState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.StateVarInternalState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StateVarInternalState.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    eventId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    validatorsResultsList: jspb.Message.toObjectList(msg.getValidatorsResultsList(),
    proto.vega.snapshot.v1.FloatingPointValidatorResult.toObject, includeInstance),
    roundsSinceMeaningfulUpdate: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.vega.snapshot.v1.StateVarInternalState}
 */
proto.vega.snapshot.v1.StateVarInternalState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.StateVarInternalState;
  return proto.vega.snapshot.v1.StateVarInternalState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.StateVarInternalState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.StateVarInternalState}
 */
proto.vega.snapshot.v1.StateVarInternalState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.FloatingPointValidatorResult;
      reader.readMessage(value,proto.vega.snapshot.v1.FloatingPointValidatorResult.deserializeBinaryFromReader);
      msg.addValidatorsResults(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoundsSinceMeaningfulUpdate(value);
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
proto.vega.snapshot.v1.StateVarInternalState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.StateVarInternalState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.StateVarInternalState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.StateVarInternalState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValidatorsResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.FloatingPointValidatorResult.serializeBinaryToWriter
    );
  }
  f = message.getRoundsSinceMeaningfulUpdate();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StateVarInternalState} returns this
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.StateVarInternalState} returns this
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.setState = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string event_id = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.StateVarInternalState} returns this
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated FloatingPointValidatorResult validators_results = 4;
 * @return {!Array<!proto.vega.snapshot.v1.FloatingPointValidatorResult>}
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.getValidatorsResultsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.FloatingPointValidatorResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.FloatingPointValidatorResult, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.FloatingPointValidatorResult>} value
 * @return {!proto.vega.snapshot.v1.StateVarInternalState} returns this
*/
proto.vega.snapshot.v1.StateVarInternalState.prototype.setValidatorsResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.FloatingPointValidatorResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.FloatingPointValidatorResult}
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.addValidatorsResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.FloatingPointValidatorResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.StateVarInternalState} returns this
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.clearValidatorsResultsList = function() {
  return this.setValidatorsResultsList([]);
};


/**
 * optional int32 rounds_since_meaningful_update = 5;
 * @return {number}
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.getRoundsSinceMeaningfulUpdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.StateVarInternalState} returns this
 */
proto.vega.snapshot.v1.StateVarInternalState.prototype.setRoundsSinceMeaningfulUpdate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.FloatingPointValidatorResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.FloatingPointValidatorResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bundleList: jspb.Message.toObjectList(msg.getBundleList(),
    vega_vega_pb.KeyValueBundle.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.FloatingPointValidatorResult}
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.FloatingPointValidatorResult;
  return proto.vega.snapshot.v1.FloatingPointValidatorResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.FloatingPointValidatorResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.FloatingPointValidatorResult}
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new vega_vega_pb.KeyValueBundle;
      reader.readMessage(value,vega_vega_pb.KeyValueBundle.deserializeBinaryFromReader);
      msg.addBundle(value);
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
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.FloatingPointValidatorResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.FloatingPointValidatorResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBundleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_vega_pb.KeyValueBundle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.FloatingPointValidatorResult} returns this
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.KeyValueBundle bundle = 2;
 * @return {!Array<!proto.vega.KeyValueBundle>}
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.getBundleList = function() {
  return /** @type{!Array<!proto.vega.KeyValueBundle>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_vega_pb.KeyValueBundle, 2));
};


/**
 * @param {!Array<!proto.vega.KeyValueBundle>} value
 * @return {!proto.vega.snapshot.v1.FloatingPointValidatorResult} returns this
*/
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.setBundleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.KeyValueBundle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.KeyValueBundle}
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.addBundle = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.KeyValueBundle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.FloatingPointValidatorResult} returns this
 */
proto.vega.snapshot.v1.FloatingPointValidatorResult.prototype.clearBundleList = function() {
  return this.setBundleList([]);
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
proto.vega.snapshot.v1.NextTimeTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.NextTimeTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.NextTimeTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NextTimeTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nextTrigger: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger}
 */
proto.vega.snapshot.v1.NextTimeTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.NextTimeTrigger;
  return proto.vega.snapshot.v1.NextTimeTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.NextTimeTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger}
 */
proto.vega.snapshot.v1.NextTimeTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextTrigger(value);
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
proto.vega.snapshot.v1.NextTimeTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.NextTimeTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.NextTimeTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.NextTimeTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNextTrigger();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string asset = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger} returns this
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger} returns this
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger} returns this
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 next_trigger = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.getNextTrigger = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.NextTimeTrigger} returns this
 */
proto.vega.snapshot.v1.NextTimeTrigger.prototype.setNextTrigger = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.MarketTracker.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.MarketTracker.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.MarketTracker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.MarketTracker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.MarketTracker.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketActivityList: jspb.Message.toObjectList(msg.getMarketActivityList(),
    vega_checkpoint_v1_checkpoint_pb.MarketActivityTracker.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.MarketTracker}
 */
proto.vega.snapshot.v1.MarketTracker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.MarketTracker;
  return proto.vega.snapshot.v1.MarketTracker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.MarketTracker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.MarketTracker}
 */
proto.vega.snapshot.v1.MarketTracker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_checkpoint_v1_checkpoint_pb.MarketActivityTracker;
      reader.readMessage(value,vega_checkpoint_v1_checkpoint_pb.MarketActivityTracker.deserializeBinaryFromReader);
      msg.addMarketActivity(value);
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
proto.vega.snapshot.v1.MarketTracker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.MarketTracker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.MarketTracker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.MarketTracker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketActivityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_checkpoint_v1_checkpoint_pb.MarketActivityTracker.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.checkpoint.v1.MarketActivityTracker market_activity = 1;
 * @return {!Array<!proto.vega.checkpoint.v1.MarketActivityTracker>}
 */
proto.vega.snapshot.v1.MarketTracker.prototype.getMarketActivityList = function() {
  return /** @type{!Array<!proto.vega.checkpoint.v1.MarketActivityTracker>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_checkpoint_v1_checkpoint_pb.MarketActivityTracker, 1));
};


/**
 * @param {!Array<!proto.vega.checkpoint.v1.MarketActivityTracker>} value
 * @return {!proto.vega.snapshot.v1.MarketTracker} returns this
*/
proto.vega.snapshot.v1.MarketTracker.prototype.setMarketActivityList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.checkpoint.v1.MarketActivityTracker=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.checkpoint.v1.MarketActivityTracker}
 */
proto.vega.snapshot.v1.MarketTracker.prototype.addMarketActivity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.checkpoint.v1.MarketActivityTracker, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.MarketTracker} returns this
 */
proto.vega.snapshot.v1.MarketTracker.prototype.clearMarketActivityList = function() {
  return this.setMarketActivityList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.SignerEventsPerAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.SignerEventsPerAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    vega_events_v1_events_pb.ERC20MultiSigSignerEvent.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.SignerEventsPerAddress}
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.SignerEventsPerAddress;
  return proto.vega.snapshot.v1.SignerEventsPerAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.SignerEventsPerAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.SignerEventsPerAddress}
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = new vega_events_v1_events_pb.ERC20MultiSigSignerEvent;
      reader.readMessage(value,vega_events_v1_events_pb.ERC20MultiSigSignerEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.SignerEventsPerAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.SignerEventsPerAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_events_v1_events_pb.ERC20MultiSigSignerEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.SignerEventsPerAddress} returns this
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated vega.events.v1.ERC20MultiSigSignerEvent events = 2;
 * @return {!Array<!proto.vega.events.v1.ERC20MultiSigSignerEvent>}
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.vega.events.v1.ERC20MultiSigSignerEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.ERC20MultiSigSignerEvent, 2));
};


/**
 * @param {!Array<!proto.vega.events.v1.ERC20MultiSigSignerEvent>} value
 * @return {!proto.vega.snapshot.v1.SignerEventsPerAddress} returns this
*/
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent}
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.events.v1.ERC20MultiSigSignerEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.SignerEventsPerAddress} returns this
 */
proto.vega.snapshot.v1.SignerEventsPerAddress.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.repeatedFields_ = [1,2,4];



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
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.toObject = function(includeInstance, msg) {
  var f, obj = {
    signersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    eventsPerAddressList: jspb.Message.toObjectList(msg.getEventsPerAddressList(),
    proto.vega.snapshot.v1.SignerEventsPerAddress.toObject, includeInstance),
    threshold: (f = msg.getThreshold()) && vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent.toObject(includeInstance, f),
    seenEventsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified;
  return proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSigners(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.SignerEventsPerAddress;
      reader.readMessage(value,proto.vega.snapshot.v1.SignerEventsPerAddress.deserializeBinaryFromReader);
      msg.addEventsPerAddress(value);
      break;
    case 3:
      var value = new vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent;
      reader.readMessage(value,vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent.deserializeBinaryFromReader);
      msg.setThreshold(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeenEvents(value);
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
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getEventsPerAddressList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.SignerEventsPerAddress.serializeBinaryToWriter
    );
  }
  f = message.getThreshold();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent.serializeBinaryToWriter
    );
  }
  f = message.getSeenEventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string signers = 1;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.getSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * repeated SignerEventsPerAddress events_per_address = 2;
 * @return {!Array<!proto.vega.snapshot.v1.SignerEventsPerAddress>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.getEventsPerAddressList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.SignerEventsPerAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.SignerEventsPerAddress, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.SignerEventsPerAddress>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
*/
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.setEventsPerAddressList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.SignerEventsPerAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.SignerEventsPerAddress}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.addEventsPerAddress = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.SignerEventsPerAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.clearEventsPerAddressList = function() {
  return this.setEventsPerAddressList([]);
};


/**
 * optional vega.events.v1.ERC20MultiSigThresholdSetEvent threshold = 3;
 * @return {?proto.vega.events.v1.ERC20MultiSigThresholdSetEvent}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.getThreshold = function() {
  return /** @type{?proto.vega.events.v1.ERC20MultiSigThresholdSetEvent} */ (
    jspb.Message.getWrapperField(this, vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent, 3));
};


/**
 * @param {?proto.vega.events.v1.ERC20MultiSigThresholdSetEvent|undefined} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
*/
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.setThreshold = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.clearThreshold = function() {
  return this.setThreshold(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.hasThreshold = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string seen_events = 4;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.getSeenEventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.setSeenEventsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.addSeenEvents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyVerified.prototype.clearSeenEventsList = function() {
  return this.setSeenEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.repeatedFields_ = [1,2,3,4];



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
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.toObject = function(includeInstance, msg) {
  var f, obj = {
    pendingSignersList: jspb.Message.toObjectList(msg.getPendingSignersList(),
    vega_events_v1_events_pb.ERC20MultiSigSignerEvent.toObject, includeInstance),
    pendingThresholdSetList: jspb.Message.toObjectList(msg.getPendingThresholdSetList(),
    vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent.toObject, includeInstance),
    witnessedSignersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    witnessedThresholdSetsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ERC20MultiSigTopologyPending;
  return proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_events_v1_events_pb.ERC20MultiSigSignerEvent;
      reader.readMessage(value,vega_events_v1_events_pb.ERC20MultiSigSignerEvent.deserializeBinaryFromReader);
      msg.addPendingSigners(value);
      break;
    case 2:
      var value = new vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent;
      reader.readMessage(value,vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent.deserializeBinaryFromReader);
      msg.addPendingThresholdSet(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addWitnessedSigners(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addWitnessedThresholdSets(value);
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
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingSignersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_events_v1_events_pb.ERC20MultiSigSignerEvent.serializeBinaryToWriter
    );
  }
  f = message.getPendingThresholdSetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent.serializeBinaryToWriter
    );
  }
  f = message.getWitnessedSignersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getWitnessedThresholdSetsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated vega.events.v1.ERC20MultiSigSignerEvent pending_signers = 1;
 * @return {!Array<!proto.vega.events.v1.ERC20MultiSigSignerEvent>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.getPendingSignersList = function() {
  return /** @type{!Array<!proto.vega.events.v1.ERC20MultiSigSignerEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.ERC20MultiSigSignerEvent, 1));
};


/**
 * @param {!Array<!proto.vega.events.v1.ERC20MultiSigSignerEvent>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
*/
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.setPendingSignersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.events.v1.ERC20MultiSigSignerEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.ERC20MultiSigSignerEvent}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.addPendingSigners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.events.v1.ERC20MultiSigSignerEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.clearPendingSignersList = function() {
  return this.setPendingSignersList([]);
};


/**
 * repeated vega.events.v1.ERC20MultiSigThresholdSetEvent pending_threshold_set = 2;
 * @return {!Array<!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.getPendingThresholdSetList = function() {
  return /** @type{!Array<!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.ERC20MultiSigThresholdSetEvent, 2));
};


/**
 * @param {!Array<!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
*/
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.setPendingThresholdSetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.ERC20MultiSigThresholdSetEvent}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.addPendingThresholdSet = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.events.v1.ERC20MultiSigThresholdSetEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.clearPendingThresholdSetList = function() {
  return this.setPendingThresholdSetList([]);
};


/**
 * repeated string witnessed_signers = 3;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.getWitnessedSignersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.setWitnessedSignersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.addWitnessedSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.clearWitnessedSignersList = function() {
  return this.setWitnessedSignersList([]);
};


/**
 * repeated string witnessed_threshold_sets = 4;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.getWitnessedThresholdSetsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.setWitnessedThresholdSetsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.addWitnessedThresholdSets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ERC20MultiSigTopologyPending} returns this
 */
proto.vega.snapshot.v1.ERC20MultiSigTopologyPending.prototype.clearWitnessedThresholdSetsList = function() {
  return this.setWitnessedThresholdSetsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ProofOfWork.repeatedFields_ = [1,2,4,6,7,8,9];



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
proto.vega.snapshot.v1.ProofOfWork.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProofOfWork.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProofOfWork} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWork.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeightList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    blockHashList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    txAtHeightList: jspb.Message.toObjectList(msg.getTxAtHeightList(),
    proto.vega.snapshot.v1.TransactionsAtHeight.toObject, includeInstance),
    tidAtHeightList: jspb.Message.toObjectList(msg.getTidAtHeightList(),
    proto.vega.snapshot.v1.TransactionsAtHeight.toObject, includeInstance),
    bannedList: jspb.Message.toObjectList(msg.getBannedList(),
    proto.vega.snapshot.v1.BannedParty.toObject, includeInstance),
    powParamsList: jspb.Message.toObjectList(msg.getPowParamsList(),
    proto.vega.snapshot.v1.ProofOfWorkParams.toObject, includeInstance),
    powStateList: jspb.Message.toObjectList(msg.getPowStateList(),
    proto.vega.snapshot.v1.ProofOfWorkState.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ProofOfWork}
 */
proto.vega.snapshot.v1.ProofOfWork.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProofOfWork;
  return proto.vega.snapshot.v1.ProofOfWork.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProofOfWork} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProofOfWork}
 */
proto.vega.snapshot.v1.ProofOfWork.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBlockHeight(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockHash(value);
      break;
    case 4:
      var value = new proto.vega.snapshot.v1.TransactionsAtHeight;
      reader.readMessage(value,proto.vega.snapshot.v1.TransactionsAtHeight.deserializeBinaryFromReader);
      msg.addTxAtHeight(value);
      break;
    case 6:
      var value = new proto.vega.snapshot.v1.TransactionsAtHeight;
      reader.readMessage(value,proto.vega.snapshot.v1.TransactionsAtHeight.deserializeBinaryFromReader);
      msg.addTidAtHeight(value);
      break;
    case 7:
      var value = new proto.vega.snapshot.v1.BannedParty;
      reader.readMessage(value,proto.vega.snapshot.v1.BannedParty.deserializeBinaryFromReader);
      msg.addBanned(value);
      break;
    case 8:
      var value = new proto.vega.snapshot.v1.ProofOfWorkParams;
      reader.readMessage(value,proto.vega.snapshot.v1.ProofOfWorkParams.deserializeBinaryFromReader);
      msg.addPowParams(value);
      break;
    case 9:
      var value = new proto.vega.snapshot.v1.ProofOfWorkState;
      reader.readMessage(value,proto.vega.snapshot.v1.ProofOfWorkState.deserializeBinaryFromReader);
      msg.addPowState(value);
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
proto.vega.snapshot.v1.ProofOfWork.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProofOfWork.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProofOfWork} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWork.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeightList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getBlockHashList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getTxAtHeightList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.snapshot.v1.TransactionsAtHeight.serializeBinaryToWriter
    );
  }
  f = message.getTidAtHeightList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.vega.snapshot.v1.TransactionsAtHeight.serializeBinaryToWriter
    );
  }
  f = message.getBannedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.vega.snapshot.v1.BannedParty.serializeBinaryToWriter
    );
  }
  f = message.getPowParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.vega.snapshot.v1.ProofOfWorkParams.serializeBinaryToWriter
    );
  }
  f = message.getPowStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.vega.snapshot.v1.ProofOfWorkState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated uint64 block_height = 1;
 * @return {!Array<number>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getBlockHeightList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.setBlockHeightList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addBlockHeight = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearBlockHeightList = function() {
  return this.setBlockHeightList([]);
};


/**
 * repeated string block_hash = 2;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getBlockHashList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.setBlockHashList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addBlockHash = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearBlockHashList = function() {
  return this.setBlockHashList([]);
};


/**
 * repeated TransactionsAtHeight tx_at_height = 4;
 * @return {!Array<!proto.vega.snapshot.v1.TransactionsAtHeight>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getTxAtHeightList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.TransactionsAtHeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.TransactionsAtHeight, 4));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.TransactionsAtHeight>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
*/
proto.vega.snapshot.v1.ProofOfWork.prototype.setTxAtHeightList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.snapshot.v1.TransactionsAtHeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addTxAtHeight = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.snapshot.v1.TransactionsAtHeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearTxAtHeightList = function() {
  return this.setTxAtHeightList([]);
};


/**
 * repeated TransactionsAtHeight tid_at_height = 6;
 * @return {!Array<!proto.vega.snapshot.v1.TransactionsAtHeight>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getTidAtHeightList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.TransactionsAtHeight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.TransactionsAtHeight, 6));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.TransactionsAtHeight>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
*/
proto.vega.snapshot.v1.ProofOfWork.prototype.setTidAtHeightList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.vega.snapshot.v1.TransactionsAtHeight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addTidAtHeight = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.vega.snapshot.v1.TransactionsAtHeight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearTidAtHeightList = function() {
  return this.setTidAtHeightList([]);
};


/**
 * repeated BannedParty banned = 7;
 * @return {!Array<!proto.vega.snapshot.v1.BannedParty>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getBannedList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.BannedParty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.BannedParty, 7));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.BannedParty>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
*/
proto.vega.snapshot.v1.ProofOfWork.prototype.setBannedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.vega.snapshot.v1.BannedParty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.BannedParty}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addBanned = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.vega.snapshot.v1.BannedParty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearBannedList = function() {
  return this.setBannedList([]);
};


/**
 * repeated ProofOfWorkParams pow_params = 8;
 * @return {!Array<!proto.vega.snapshot.v1.ProofOfWorkParams>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getPowParamsList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ProofOfWorkParams>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ProofOfWorkParams, 8));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ProofOfWorkParams>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
*/
proto.vega.snapshot.v1.ProofOfWork.prototype.setPowParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ProofOfWorkParams=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addPowParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.vega.snapshot.v1.ProofOfWorkParams, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearPowParamsList = function() {
  return this.setPowParamsList([]);
};


/**
 * repeated ProofOfWorkState pow_state = 9;
 * @return {!Array<!proto.vega.snapshot.v1.ProofOfWorkState>}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.getPowStateList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ProofOfWorkState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ProofOfWorkState, 9));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ProofOfWorkState>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
*/
proto.vega.snapshot.v1.ProofOfWork.prototype.setPowStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ProofOfWorkState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProofOfWorkState}
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.addPowState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.vega.snapshot.v1.ProofOfWorkState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWork} returns this
 */
proto.vega.snapshot.v1.ProofOfWork.prototype.clearPowStateList = function() {
  return this.setPowStateList([]);
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
proto.vega.snapshot.v1.BannedParty.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.BannedParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.BannedParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BannedParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    until: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.vega.snapshot.v1.BannedParty}
 */
proto.vega.snapshot.v1.BannedParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.BannedParty;
  return proto.vega.snapshot.v1.BannedParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.BannedParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.BannedParty}
 */
proto.vega.snapshot.v1.BannedParty.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUntil(value);
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
proto.vega.snapshot.v1.BannedParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.BannedParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.BannedParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.BannedParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUntil();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.BannedParty.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.BannedParty} returns this
 */
proto.vega.snapshot.v1.BannedParty.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 until = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.BannedParty.prototype.getUntil = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.BannedParty} returns this
 */
proto.vega.snapshot.v1.BannedParty.prototype.setUntil = function(value) {
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
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProofOfWorkParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProofOfWorkParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    spamPowNumberOfPastBlocks: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spamPowDifficulty: jspb.Message.getFieldWithDefault(msg, 2, 0),
    spamPowHashFunction: jspb.Message.getFieldWithDefault(msg, 3, ""),
    spamPowNumberOfTxPerBlock: jspb.Message.getFieldWithDefault(msg, 4, 0),
    spamPowIncreasingDifficulty: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    fromBlock: jspb.Message.getFieldWithDefault(msg, 6, 0),
    untilBlock: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProofOfWorkParams;
  return proto.vega.snapshot.v1.ProofOfWorkParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSpamPowNumberOfPastBlocks(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpamPowDifficulty(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpamPowHashFunction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSpamPowNumberOfTxPerBlock(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpamPowIncreasingDifficulty(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromBlock(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUntilBlock(value);
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
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProofOfWorkParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpamPowNumberOfPastBlocks();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSpamPowDifficulty();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSpamPowHashFunction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSpamPowNumberOfTxPerBlock();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSpamPowIncreasingDifficulty();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getFromBlock();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getUntilBlock();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional uint64 spam_pow_number_of_past_blocks = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getSpamPowNumberOfPastBlocks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setSpamPowNumberOfPastBlocks = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 spam_pow_difficulty = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getSpamPowDifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setSpamPowDifficulty = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string spam_pow_hash_function = 3;
 * @return {string}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getSpamPowHashFunction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setSpamPowHashFunction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 spam_pow_number_of_tx_per_block = 4;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getSpamPowNumberOfTxPerBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setSpamPowNumberOfTxPerBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool spam_pow_increasing_difficulty = 5;
 * @return {boolean}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getSpamPowIncreasingDifficulty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setSpamPowIncreasingDifficulty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint64 from_block = 6;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getFromBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setFromBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 until_block = 7;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.getUntilBlock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkParams} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkParams.prototype.setUntilBlock = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ProofOfWorkState.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.ProofOfWorkState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProofOfWorkState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProofOfWorkState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkState.toObject = function(includeInstance, msg) {
  var f, obj = {
    powStateList: jspb.Message.toObjectList(msg.getPowStateList(),
    proto.vega.snapshot.v1.ProofOfWorkBlockState.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ProofOfWorkState}
 */
proto.vega.snapshot.v1.ProofOfWorkState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProofOfWorkState;
  return proto.vega.snapshot.v1.ProofOfWorkState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProofOfWorkState}
 */
proto.vega.snapshot.v1.ProofOfWorkState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.snapshot.v1.ProofOfWorkBlockState;
      reader.readMessage(value,proto.vega.snapshot.v1.ProofOfWorkBlockState.deserializeBinaryFromReader);
      msg.addPowState(value);
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
proto.vega.snapshot.v1.ProofOfWorkState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProofOfWorkState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPowStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.snapshot.v1.ProofOfWorkBlockState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProofOfWorkBlockState pow_state = 1;
 * @return {!Array<!proto.vega.snapshot.v1.ProofOfWorkBlockState>}
 */
proto.vega.snapshot.v1.ProofOfWorkState.prototype.getPowStateList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ProofOfWorkBlockState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ProofOfWorkBlockState, 1));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ProofOfWorkBlockState>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkState} returns this
*/
proto.vega.snapshot.v1.ProofOfWorkState.prototype.setPowStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ProofOfWorkBlockState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProofOfWorkBlockState}
 */
proto.vega.snapshot.v1.ProofOfWorkState.prototype.addPowState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.snapshot.v1.ProofOfWorkBlockState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWorkState} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkState.prototype.clearPowStateList = function() {
  return this.setPowStateList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProofOfWorkBlockState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProofOfWorkBlockState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    partyStateList: jspb.Message.toObjectList(msg.getPartyStateList(),
    proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.toObject, includeInstance)
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
 * @return {!proto.vega.snapshot.v1.ProofOfWorkBlockState}
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProofOfWorkBlockState;
  return proto.vega.snapshot.v1.ProofOfWorkBlockState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkBlockState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProofOfWorkBlockState}
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock;
      reader.readMessage(value,proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.deserializeBinaryFromReader);
      msg.addPartyState(value);
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
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProofOfWorkBlockState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkBlockState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPartyStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkBlockState} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ProofOfWorkPartyStateForBlock party_state = 2;
 * @return {!Array<!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock>}
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.getPartyStateList = function() {
  return /** @type{!Array<!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock, 2));
};


/**
 * @param {!Array<!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock>} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkBlockState} returns this
*/
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.setPartyStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock}
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.addPartyState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProofOfWorkBlockState} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkBlockState.prototype.clearPartyStateList = function() {
  return this.setPartyStateList([]);
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
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    party: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seenCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    observedDifficulty: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock}
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock;
  return proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock}
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeenCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setObservedDifficulty(value);
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
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeenCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getObservedDifficulty();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string party = 1;
 * @return {string}
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.getParty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.setParty = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 seen_count = 2;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.getSeenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.setSeenCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 observed_difficulty = 3;
 * @return {number}
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.getObservedDifficulty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock} returns this
 */
proto.vega.snapshot.v1.ProofOfWorkPartyStateForBlock.prototype.setObservedDifficulty = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.TransactionsAtHeight.repeatedFields_ = [2];



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
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.TransactionsAtHeight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.TransactionsAtHeight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TransactionsAtHeight.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transactionsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight}
 */
proto.vega.snapshot.v1.TransactionsAtHeight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.TransactionsAtHeight;
  return proto.vega.snapshot.v1.TransactionsAtHeight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.TransactionsAtHeight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight}
 */
proto.vega.snapshot.v1.TransactionsAtHeight.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.addTransactions(value);
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
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.TransactionsAtHeight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.TransactionsAtHeight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.TransactionsAtHeight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight} returns this
 */
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string transactions = 2;
 * @return {!Array<string>}
 */
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.getTransactionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight} returns this
 */
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.setTransactionsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight} returns this
 */
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.addTransactions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.TransactionsAtHeight} returns this
 */
proto.vega.snapshot.v1.TransactionsAtHeight.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.repeatedFields_ = [1];



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
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.ProtocolUpgradeProposals.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeProposalsList: jspb.Message.toObjectList(msg.getActiveProposalsList(),
    vega_events_v1_events_pb.ProtocolUpgradeEvent.toObject, includeInstance),
    acceptedProposal: (f = msg.getAcceptedProposal()) && proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.toObject(includeInstance, f)
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
 * @return {!proto.vega.snapshot.v1.ProtocolUpgradeProposals}
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.ProtocolUpgradeProposals;
  return proto.vega.snapshot.v1.ProtocolUpgradeProposals.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.ProtocolUpgradeProposals}
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vega_events_v1_events_pb.ProtocolUpgradeEvent;
      reader.readMessage(value,vega_events_v1_events_pb.ProtocolUpgradeEvent.deserializeBinaryFromReader);
      msg.addActiveProposals(value);
      break;
    case 2:
      var value = new proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal;
      reader.readMessage(value,proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.deserializeBinaryFromReader);
      msg.setAcceptedProposal(value);
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
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.ProtocolUpgradeProposals.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      vega_events_v1_events_pb.ProtocolUpgradeEvent.serializeBinaryToWriter
    );
  }
  f = message.getAcceptedProposal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.serializeBinaryToWriter
    );
  }
};


/**
 * repeated vega.events.v1.ProtocolUpgradeEvent active_proposals = 1;
 * @return {!Array<!proto.vega.events.v1.ProtocolUpgradeEvent>}
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.getActiveProposalsList = function() {
  return /** @type{!Array<!proto.vega.events.v1.ProtocolUpgradeEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, vega_events_v1_events_pb.ProtocolUpgradeEvent, 1));
};


/**
 * @param {!Array<!proto.vega.events.v1.ProtocolUpgradeEvent>} value
 * @return {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} returns this
*/
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.setActiveProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.events.v1.ProtocolUpgradeEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.events.v1.ProtocolUpgradeEvent}
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.addActiveProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.events.v1.ProtocolUpgradeEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} returns this
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.clearActiveProposalsList = function() {
  return this.setActiveProposalsList([]);
};


/**
 * optional AcceptedProtocolUpgradeProposal accepted_proposal = 2;
 * @return {?proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal}
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.getAcceptedProposal = function() {
  return /** @type{?proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal} */ (
    jspb.Message.getWrapperField(this, proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal, 2));
};


/**
 * @param {?proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal|undefined} value
 * @return {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} returns this
*/
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.setAcceptedProposal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.snapshot.v1.ProtocolUpgradeProposals} returns this
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.clearAcceptedProposal = function() {
  return this.setAcceptedProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.snapshot.v1.ProtocolUpgradeProposals.prototype.hasAcceptedProposal = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    upgradeBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vegaReleaseTag: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal}
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal;
  return proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal}
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.deserializeBinaryFromReader = function(msg, reader) {
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
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional uint64 upgrade_block_height = 1;
 * @return {number}
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.prototype.getUpgradeBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal} returns this
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.prototype.setUpgradeBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string vega_release_tag = 2;
 * @return {string}
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.prototype.getVegaReleaseTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal} returns this
 */
proto.vega.snapshot.v1.AcceptedProtocolUpgradeProposal.prototype.setVegaReleaseTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.vega.snapshot.v1.Format = {
  FORMAT_UNSPECIFIED: 0,
  FORMAT_PROTO: 1,
  FORMAT_PROTO_COMPRESSED: 2,
  FORMAT_JSON: 3
};

goog.object.extend(exports, proto.vega.snapshot.v1);
