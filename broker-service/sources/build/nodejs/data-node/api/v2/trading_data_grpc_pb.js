// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var data$node_api_v2_trading_data_pb = require('../../../data-node/api/v2/trading_data_pb.js');
var vega_vega_pb = require('../../../vega/vega_pb.js');
var vega_governance_pb = require('../../../vega/governance_pb.js');
var vega_markets_pb = require('../../../vega/markets_pb.js');
var vega_assets_pb = require('../../../vega/assets_pb.js');
var vega_oracle_pb = require('../../../vega/oracle_pb.js');
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');
var vega_commands_v1_validator_commands_pb = require('../../../vega/commands/v1/validator_commands_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_datanode_api_v2_EstimateFeeRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.EstimateFeeRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.EstimateFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_EstimateFeeRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.EstimateFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_EstimateFeeResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.EstimateFeeResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.EstimateFeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_EstimateFeeResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.EstimateFeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_EstimateMarginRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.EstimateMarginRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.EstimateMarginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_EstimateMarginRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.EstimateMarginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_EstimateMarginResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.EstimateMarginResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.EstimateMarginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_EstimateMarginResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.EstimateMarginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ExportLedgerEntriesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ExportLedgerEntriesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ExportLedgerEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ExportLedgerEntriesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ExportLedgerEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ExportLedgerEntriesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ExportLedgerEntriesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ExportLedgerEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ExportLedgerEntriesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ExportLedgerEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetActiveNetworkHistoryPeerAddressesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetActiveNetworkHistoryPeerAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetActiveNetworkHistoryPeerAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetActiveNetworkHistoryPeerAddressesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetActiveNetworkHistoryPeerAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetActiveNetworkHistoryPeerAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetAssetRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetAssetRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetAssetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetAssetRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetAssetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetAssetResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetAssetResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetAssetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetAssetResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetAssetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetDepositRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetDepositRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetDepositRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetDepositRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetDepositRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetDepositResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetDepositResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetDepositResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetDepositResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetDepositResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetERC20ListAssetBundleRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetERC20ListAssetBundleRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetERC20ListAssetBundleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetERC20ListAssetBundleRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetERC20ListAssetBundleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetERC20ListAssetBundleResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetERC20ListAssetBundleResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetERC20ListAssetBundleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetERC20ListAssetBundleResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetERC20ListAssetBundleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetERC20SetAssetLimitsBundleRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetERC20SetAssetLimitsBundleRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetERC20SetAssetLimitsBundleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetERC20SetAssetLimitsBundleRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetERC20SetAssetLimitsBundleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetERC20SetAssetLimitsBundleResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetERC20SetAssetLimitsBundleResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetERC20SetAssetLimitsBundleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetERC20SetAssetLimitsBundleResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetERC20SetAssetLimitsBundleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetERC20WithdrawalApprovalRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetERC20WithdrawalApprovalRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetERC20WithdrawalApprovalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetERC20WithdrawalApprovalRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetERC20WithdrawalApprovalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetERC20WithdrawalApprovalResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetERC20WithdrawalApprovalResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetERC20WithdrawalApprovalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetERC20WithdrawalApprovalResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetERC20WithdrawalApprovalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetEpochRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetEpochRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetEpochRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetEpochRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetEpochRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetEpochResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetEpochResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetEpochResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetEpochResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetEpochResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetGovernanceDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetGovernanceDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetGovernanceDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetGovernanceDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetGovernanceDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetGovernanceDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetGovernanceDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetGovernanceDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetGovernanceDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetGovernanceDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetLastTradeRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetLastTradeRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetLastTradeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetLastTradeRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetLastTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetLastTradeResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetLastTradeResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetLastTradeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetLastTradeResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetLastTradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetLatestMarketDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetLatestMarketDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetLatestMarketDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetLatestMarketDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetLatestMarketDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetLatestMarketDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetLatestMarketDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetLatestMarketDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetLatestMarketDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetLatestMarketDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetLatestMarketDepthRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetLatestMarketDepthRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetLatestMarketDepthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetLatestMarketDepthRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetLatestMarketDepthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetLatestMarketDepthResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetLatestMarketDepthResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetLatestMarketDepthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetLatestMarketDepthResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetLatestMarketDepthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetMarketDataHistoryByIDRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetMarketDataHistoryByIDRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetMarketDataHistoryByIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetMarketDataHistoryByIDRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetMarketDataHistoryByIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetMarketDataHistoryByIDResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetMarketDataHistoryByIDResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetMarketDataHistoryByIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetMarketDataHistoryByIDResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetMarketDataHistoryByIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetMarketRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetMarketRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetMarketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetMarketRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetMarketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetMarketResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetMarketResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetMarketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetMarketResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetMarketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetMostRecentNetworkHistorySegmentRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetMostRecentNetworkHistorySegmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetMostRecentNetworkHistorySegmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetMostRecentNetworkHistorySegmentResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetMostRecentNetworkHistorySegmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetMostRecentNetworkHistorySegmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNetworkDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNetworkDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNetworkDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNetworkDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNetworkDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNetworkDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNetworkDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNetworkDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNetworkDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNetworkDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNetworkLimitsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNetworkLimitsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNetworkLimitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNetworkLimitsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNetworkLimitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNetworkLimitsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNetworkLimitsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNetworkLimitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNetworkLimitsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNetworkLimitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNetworkParameterRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNetworkParameterRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNetworkParameterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNetworkParameterRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNetworkParameterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNetworkParameterResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNetworkParameterResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNetworkParameterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNetworkParameterResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNetworkParameterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNodeRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNodeRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNodeRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetNodeResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetNodeResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetNodeResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetOracleSpecRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetOracleSpecRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetOracleSpecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetOracleSpecRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetOracleSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetOracleSpecResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetOracleSpecResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetOracleSpecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetOracleSpecResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetOracleSpecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetOrderRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetOrderRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetOrderRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetOrderResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetOrderResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetOrderResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetPartyRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetPartyRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetPartyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetPartyRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetPartyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetPartyResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetPartyResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetPartyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetPartyResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetPartyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetProtocolUpgradeStatusRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetProtocolUpgradeStatusRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetProtocolUpgradeStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetProtocolUpgradeStatusRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetProtocolUpgradeStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetProtocolUpgradeStatusResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetProtocolUpgradeStatusResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetProtocolUpgradeStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetProtocolUpgradeStatusResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetProtocolUpgradeStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetRiskFactorsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetRiskFactorsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetRiskFactorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetRiskFactorsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetRiskFactorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetRiskFactorsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetRiskFactorsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetRiskFactorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetRiskFactorsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetRiskFactorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetStakeRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetStakeRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetStakeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetStakeRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetStakeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetStakeResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetStakeResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetStakeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetStakeResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetStakeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetVegaTimeRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetVegaTimeRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetVegaTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetVegaTimeRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetVegaTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetVegaTimeResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetVegaTimeResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetVegaTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetVegaTimeResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetVegaTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetWithdrawalRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetWithdrawalRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.GetWithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetWithdrawalRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetWithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_GetWithdrawalResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.GetWithdrawalResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.GetWithdrawalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_GetWithdrawalResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.GetWithdrawalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_InfoRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.InfoRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.InfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_InfoRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.InfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_InfoResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.InfoResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.InfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_InfoResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.InfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListAccountsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListAccountsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListAccountsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListAccountsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListAccountsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListAccountsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListAllNetworkHistorySegmentsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListAllNetworkHistorySegmentsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListAllNetworkHistorySegmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListAllNetworkHistorySegmentsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListAllNetworkHistorySegmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListAllNetworkHistorySegmentsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListAllNetworkHistorySegmentsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListAllNetworkHistorySegmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListAllNetworkHistorySegmentsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListAllNetworkHistorySegmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListAssetsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListAssetsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListAssetsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListAssetsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListAssetsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListAssetsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListBalanceChangesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListBalanceChangesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListBalanceChangesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListBalanceChangesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListBalanceChangesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListBalanceChangesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListBalanceChangesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListBalanceChangesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListBalanceChangesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListBalanceChangesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCandleDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCandleDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCandleDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCandleDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCandleDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCandleDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCandleDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCandleDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCandleDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCandleDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCandleIntervalsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCandleIntervalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCandleIntervalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCandleIntervalsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCandleIntervalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCandleIntervalsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCandleIntervalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCandleIntervalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCandleIntervalsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCandleIntervalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCheckpointsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCheckpointsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCheckpointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCheckpointsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCheckpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCheckpointsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCheckpointsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCheckpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCheckpointsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCheckpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCoreSnapshotsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCoreSnapshotsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCoreSnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCoreSnapshotsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCoreSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListCoreSnapshotsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListCoreSnapshotsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListCoreSnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListCoreSnapshotsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListCoreSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListDelegationsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListDelegationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListDelegationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListDelegationsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListDelegationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListDelegationsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListDelegationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListDelegationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListDelegationsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListDelegationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListDepositsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListDepositsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListDepositsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListDepositsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListDepositsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListDepositsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListDepositsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListDepositsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListDepositsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListDepositsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerAddedBundlesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListERC20MultiSigSignerAddedBundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerAddedBundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerAddedBundlesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListERC20MultiSigSignerAddedBundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerAddedBundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerRemovedBundlesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListERC20MultiSigSignerRemovedBundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerRemovedBundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerRemovedBundlesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListERC20MultiSigSignerRemovedBundlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerRemovedBundlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListEpochRewardSummariesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListEpochRewardSummariesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListEpochRewardSummariesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListEpochRewardSummariesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListEpochRewardSummariesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListEpochRewardSummariesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListEpochRewardSummariesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListEpochRewardSummariesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListEpochRewardSummariesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListEpochRewardSummariesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListEthereumKeyRotationsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListEthereumKeyRotationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListEthereumKeyRotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListEthereumKeyRotationsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListEthereumKeyRotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListEthereumKeyRotationsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListEthereumKeyRotationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListEthereumKeyRotationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListEthereumKeyRotationsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListEthereumKeyRotationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListGovernanceDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListGovernanceDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListGovernanceDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListGovernanceDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListGovernanceDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListGovernanceDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListGovernanceDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListGovernanceDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListGovernanceDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListGovernanceDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListKeyRotationsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListKeyRotationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListKeyRotationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListKeyRotationsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListKeyRotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListKeyRotationsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListKeyRotationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListKeyRotationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListKeyRotationsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListKeyRotationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListLatestMarketDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListLatestMarketDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListLatestMarketDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListLatestMarketDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListLatestMarketDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListLatestMarketDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListLatestMarketDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListLatestMarketDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListLatestMarketDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListLatestMarketDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListLedgerEntriesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListLedgerEntriesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListLedgerEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListLedgerEntriesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListLedgerEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListLedgerEntriesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListLedgerEntriesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListLedgerEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListLedgerEntriesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListLedgerEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListLiquidityProvisionsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListLiquidityProvisionsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListLiquidityProvisionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListLiquidityProvisionsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListLiquidityProvisionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListLiquidityProvisionsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListLiquidityProvisionsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListLiquidityProvisionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListLiquidityProvisionsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListLiquidityProvisionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListMarginLevelsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListMarginLevelsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListMarginLevelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListMarginLevelsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListMarginLevelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListMarginLevelsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListMarginLevelsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListMarginLevelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListMarginLevelsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListMarginLevelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListMarketsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListMarketsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListMarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListMarketsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListMarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListMarketsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListMarketsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListMarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListMarketsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListMarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListNetworkParametersRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListNetworkParametersRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListNetworkParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListNetworkParametersRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListNetworkParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListNetworkParametersResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListNetworkParametersResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListNetworkParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListNetworkParametersResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListNetworkParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListNodeSignaturesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListNodeSignaturesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListNodeSignaturesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListNodeSignaturesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListNodeSignaturesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListNodeSignaturesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListNodeSignaturesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListNodeSignaturesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListNodeSignaturesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListNodeSignaturesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListNodesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListNodesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListNodesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListNodesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListNodesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListNodesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOracleDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOracleDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOracleDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOracleDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOracleDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOracleDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOracleDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOracleDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOracleDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOracleDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOracleSpecsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOracleSpecsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOracleSpecsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOracleSpecsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOracleSpecsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOracleSpecsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOracleSpecsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOracleSpecsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOracleSpecsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOracleSpecsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOrderVersionsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOrderVersionsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOrderVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOrderVersionsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOrderVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOrderVersionsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOrderVersionsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOrderVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOrderVersionsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOrderVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOrdersRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOrdersRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOrdersRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListOrdersResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListOrdersResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListOrdersResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListPartiesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListPartiesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListPartiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListPartiesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListPartiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListPartiesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListPartiesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListPartiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListPartiesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListPartiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListPositionsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListPositionsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListPositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListPositionsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListPositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListPositionsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListPositionsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListPositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListPositionsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListPositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListProtocolUpgradeProposalsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListProtocolUpgradeProposalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListProtocolUpgradeProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListProtocolUpgradeProposalsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListProtocolUpgradeProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListProtocolUpgradeProposalsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListProtocolUpgradeProposalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListProtocolUpgradeProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListProtocolUpgradeProposalsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListProtocolUpgradeProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListRewardSummariesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListRewardSummariesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListRewardSummariesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListRewardSummariesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListRewardSummariesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListRewardSummariesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListRewardSummariesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListRewardSummariesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListRewardSummariesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListRewardSummariesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListRewardsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListRewardsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListRewardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListRewardsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListRewardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListRewardsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListRewardsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListRewardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListRewardsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListRewardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListTradesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListTradesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListTradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListTradesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListTradesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListTradesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListTradesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListTradesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListTransfersRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListTransfersRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListTransfersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListTransfersRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListTransfersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListTransfersResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListTransfersResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListTransfersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListTransfersResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListTransfersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListVotesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListVotesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListVotesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListVotesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListVotesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListVotesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListWithdrawalsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListWithdrawalsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ListWithdrawalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListWithdrawalsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListWithdrawalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ListWithdrawalsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ListWithdrawalsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ListWithdrawalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ListWithdrawalsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ListWithdrawalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveAccountsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveAccountsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveAccountsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveAccountsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveAccountsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveAccountsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveCandleDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveCandleDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveCandleDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveCandleDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveCandleDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveCandleDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveCandleDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveCandleDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveCandleDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveCandleDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveDelegationsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveDelegationsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveDelegationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveDelegationsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveDelegationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveDelegationsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveDelegationsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveDelegationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveDelegationsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveDelegationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveEventBusRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveEventBusRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveEventBusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveEventBusRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveEventBusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveEventBusResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveEventBusResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveEventBusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveEventBusResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveEventBusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveGovernanceRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveGovernanceRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveGovernanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveGovernanceRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveGovernanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveGovernanceResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveGovernanceResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveGovernanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveGovernanceResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveGovernanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveLedgerMovementsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveLedgerMovementsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveLedgerMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveLedgerMovementsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveLedgerMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveLedgerMovementsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveLedgerMovementsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveLedgerMovementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveLedgerMovementsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveLedgerMovementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveLiquidityProvisionsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveLiquidityProvisionsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveLiquidityProvisionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveLiquidityProvisionsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveLiquidityProvisionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveLiquidityProvisionsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveLiquidityProvisionsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveLiquidityProvisionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveLiquidityProvisionsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveLiquidityProvisionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarginLevelsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarginLevelsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarginLevelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarginLevelsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarginLevelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarginLevelsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarginLevelsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarginLevelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarginLevelsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarginLevelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarketsDataRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarketsDataRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarketsDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarketsDataRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarketsDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarketsDataResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarketsDataResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarketsDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarketsDataResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarketsDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarketsDepthRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarketsDepthRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarketsDepthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarketsDepthRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarketsDepthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarketsDepthResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarketsDepthResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarketsDepthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarketsDepthResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarketsDepthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarketsDepthUpdatesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarketsDepthUpdatesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarketsDepthUpdatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarketsDepthUpdatesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarketsDepthUpdatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveMarketsDepthUpdatesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveMarketsDepthUpdatesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveMarketsDepthUpdatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveMarketsDepthUpdatesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveMarketsDepthUpdatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveOrdersRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveOrdersRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveOrdersRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveOrdersResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveOrdersResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveOrdersResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObservePositionsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObservePositionsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObservePositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObservePositionsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObservePositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObservePositionsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObservePositionsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObservePositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObservePositionsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObservePositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveRewardsRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveRewardsRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveRewardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveRewardsRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveRewardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveRewardsResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveRewardsResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveRewardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveRewardsResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveRewardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveTradesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveTradesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveTradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveTradesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveTradesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveTradesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveTradesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveTradesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveVotesRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveVotesRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveVotesRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_ObserveVotesResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.ObserveVotesResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.ObserveVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_ObserveVotesResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.ObserveVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_PingRequest(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.PingRequest)) {
    throw new Error('Expected argument of type datanode.api.v2.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_PingRequest(buffer_arg) {
  return data$node_api_v2_trading_data_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datanode_api_v2_PingResponse(arg) {
  if (!(arg instanceof data$node_api_v2_trading_data_pb.PingResponse)) {
    throw new Error('Expected argument of type datanode.api.v2.PingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datanode_api_v2_PingResponse(buffer_arg) {
  return data$node_api_v2_trading_data_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TradingDataServiceService = exports.TradingDataServiceService = {
  // Accounts
//
// Returns a list of accounts matching the supplied filter, including their current balances.
// If a given account has never had a balance, it will be absent from the list.
listAccounts: {
    path: '/datanode.api.v2.TradingDataService/ListAccounts',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListAccountsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListAccountsResponse,
    requestSerialize: serialize_datanode_api_v2_ListAccountsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListAccountsRequest,
    responseSerialize: serialize_datanode_api_v2_ListAccountsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListAccountsResponse,
  },
  // Accounts subscription
//
// Subscribe to a stream of accounts
observeAccounts: {
    path: '/datanode.api.v2.TradingDataService/ObserveAccounts',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveAccountsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveAccountsResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveAccountsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveAccountsRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveAccountsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveAccountsResponse,
  },
  // Data node info
//
// Retrieves information about the data node.
// Response contains a semver formatted version of the data node and the commit hash, from which the data node was built
info: {
    path: '/datanode.api.v2.TradingDataService/Info',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.InfoRequest,
    responseType: data$node_api_v2_trading_data_pb.InfoResponse,
    requestSerialize: serialize_datanode_api_v2_InfoRequest,
    requestDeserialize: deserialize_datanode_api_v2_InfoRequest,
    responseSerialize: serialize_datanode_api_v2_InfoResponse,
    responseDeserialize: deserialize_datanode_api_v2_InfoResponse,
  },
  // Order
//
// Gets the current version of an order, or optionally provide a version ID to retrieve a given version.
getOrder: {
    path: '/datanode.api.v2.TradingDataService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetOrderRequest,
    responseType: data$node_api_v2_trading_data_pb.GetOrderResponse,
    requestSerialize: serialize_datanode_api_v2_GetOrderRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetOrderRequest,
    responseSerialize: serialize_datanode_api_v2_GetOrderResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetOrderResponse,
  },
  // Orders list
//
// Get a list of orders that match the given filters
listOrders: {
    path: '/datanode.api.v2.TradingDataService/ListOrders',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListOrdersRequest,
    responseType: data$node_api_v2_trading_data_pb.ListOrdersResponse,
    requestSerialize: serialize_datanode_api_v2_ListOrdersRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListOrdersRequest,
    responseSerialize: serialize_datanode_api_v2_ListOrdersResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListOrdersResponse,
  },
  // Order history
//
// List all versions of an order in the order history
listOrderVersions: {
    path: '/datanode.api.v2.TradingDataService/ListOrderVersions',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListOrderVersionsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListOrderVersionsResponse,
    requestSerialize: serialize_datanode_api_v2_ListOrderVersionsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListOrderVersionsRequest,
    responseSerialize: serialize_datanode_api_v2_ListOrderVersionsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListOrderVersionsResponse,
  },
  // Orders subscription
//
// Subscribe to a stream of orders
observeOrders: {
    path: '/datanode.api.v2.TradingDataService/ObserveOrders',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveOrdersRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveOrdersResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveOrdersRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveOrdersRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveOrdersResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveOrdersResponse,
  },
  // Positions
//
// Get a list of positions by party (public key) using cursor based pagination
listPositions: {
    path: '/datanode.api.v2.TradingDataService/ListPositions',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListPositionsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListPositionsResponse,
    requestSerialize: serialize_datanode_api_v2_ListPositionsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListPositionsRequest,
    responseSerialize: serialize_datanode_api_v2_ListPositionsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListPositionsResponse,
  },
  // Positions subscription
//
// Subscribe to a stream of positions
observePositions: {
    path: '/datanode.api.v2.TradingDataService/ObservePositions',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObservePositionsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObservePositionsResponse,
    requestSerialize: serialize_datanode_api_v2_ObservePositionsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObservePositionsRequest,
    responseSerialize: serialize_datanode_api_v2_ObservePositionsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObservePositionsResponse,
  },
  // Ledger entries
//
// Get ledger entries by asset, market, party, account type, transfer type within the given date range.
// This query requests and sums the number of ledger entries from a given subset of accounts, specified via the 'filter' argument.
// It returns a time series (implemented as a list of AggregateLedgerEntry structs), with a row for every time
// the summed ledger entries of the set of specified accounts changes.
// Listed queries should be limited to a single party from each side only. If no or more than one parties are provided
// for sending and receiving accounts - the query returns error.
//
// Entries can be queried by:
//   - listing ledger entries with filtering on the sending account (market_id, asset_id, account_type)
//   - listing ledger entries with filtering on the receiving account (market_id, asset_id, account_type)
//   - listing ledger entries with filtering on the sending AND receiving account
//   - listing ledger entries with filtering on the transfer type (on top of above filters or as a standalone option)
listLedgerEntries: {
    path: '/datanode.api.v2.TradingDataService/ListLedgerEntries',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListLedgerEntriesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListLedgerEntriesResponse,
    requestSerialize: serialize_datanode_api_v2_ListLedgerEntriesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListLedgerEntriesRequest,
    responseSerialize: serialize_datanode_api_v2_ListLedgerEntriesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListLedgerEntriesResponse,
  },
  // Export ledger entries records ledger entries to a csv file.
// May or may not contain a date range - if no date range is provided, list all records for all times.
//
//
// Ledger entries can be exported by:
//   - export ledger entries for a single party for a given asset within a given time range
//   - export ledger entries for a single party for a given asset for all times
exportLedgerEntries: {
    path: '/datanode.api.v2.TradingDataService/ExportLedgerEntries',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ExportLedgerEntriesRequest,
    responseType: data$node_api_v2_trading_data_pb.ExportLedgerEntriesResponse,
    requestSerialize: serialize_datanode_api_v2_ExportLedgerEntriesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ExportLedgerEntriesRequest,
    responseSerialize: serialize_datanode_api_v2_ExportLedgerEntriesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ExportLedgerEntriesResponse,
  },
  //  Balances
//
// `ListBalanceChanges` is for querying the change in account balances over a period of time.
//
// An account is defined as a set of (asset_id, type, party_id, market_id).
// - Every account has an associated asset and type.
// - Certain account types (for example, the global reward pool) do not have an associated party.
//   These are denoted by the special party identifier 'network'
// - Certain account types do not have an associated market (for example general party accounts).
//   These are denoted by the special market identifier '' (the empty string)
//
// `ListBalanceChangesRequest` will return a list of
// `(vega_time, asset_id, account_type, party_id, market_id, balance)`
// With a row for each block at which a given account's balance changes.
listBalanceChanges: {
    path: '/datanode.api.v2.TradingDataService/ListBalanceChanges',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListBalanceChangesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListBalanceChangesResponse,
    requestSerialize: serialize_datanode_api_v2_ListBalanceChangesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListBalanceChangesRequest,
    responseSerialize: serialize_datanode_api_v2_ListBalanceChangesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListBalanceChangesResponse,
  },
  // Market Data
//
// Get the latest market data for a given market
getLatestMarketData: {
    path: '/datanode.api.v2.TradingDataService/GetLatestMarketData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetLatestMarketDataRequest,
    responseType: data$node_api_v2_trading_data_pb.GetLatestMarketDataResponse,
    requestSerialize: serialize_datanode_api_v2_GetLatestMarketDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetLatestMarketDataRequest,
    responseSerialize: serialize_datanode_api_v2_GetLatestMarketDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetLatestMarketDataResponse,
  },
  // Market Data list
//
// Lists the latest market data for every market
listLatestMarketData: {
    path: '/datanode.api.v2.TradingDataService/ListLatestMarketData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListLatestMarketDataRequest,
    responseType: data$node_api_v2_trading_data_pb.ListLatestMarketDataResponse,
    requestSerialize: serialize_datanode_api_v2_ListLatestMarketDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListLatestMarketDataRequest,
    responseSerialize: serialize_datanode_api_v2_ListLatestMarketDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListLatestMarketDataResponse,
  },
  // Market Depth
//
// Get the latest market depth for a given market
getLatestMarketDepth: {
    path: '/datanode.api.v2.TradingDataService/GetLatestMarketDepth',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetLatestMarketDepthRequest,
    responseType: data$node_api_v2_trading_data_pb.GetLatestMarketDepthResponse,
    requestSerialize: serialize_datanode_api_v2_GetLatestMarketDepthRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetLatestMarketDepthRequest,
    responseSerialize: serialize_datanode_api_v2_GetLatestMarketDepthResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetLatestMarketDepthResponse,
  },
  // Market depth subscription
//
// Subscribe to a stream of the latest market depth for a given market
observeMarketsDepth: {
    path: '/datanode.api.v2.TradingDataService/ObserveMarketsDepth',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveMarketsDepthRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveMarketsDepthResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveMarketsDepthRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveMarketsDepthRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveMarketsDepthResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveMarketsDepthResponse,
  },
  // Market depth updates subscription
//
// Subscribe to a stream of updates on market depth for a given market
observeMarketsDepthUpdates: {
    path: '/datanode.api.v2.TradingDataService/ObserveMarketsDepthUpdates',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveMarketsDepthUpdatesRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveMarketsDepthUpdatesResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveMarketsDepthUpdatesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveMarketsDepthUpdatesRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveMarketsDepthUpdatesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveMarketsDepthUpdatesResponse,
  },
  // Market data subscription
//
// Subscribe to a stream of data about a given market
observeMarketsData: {
    path: '/datanode.api.v2.TradingDataService/ObserveMarketsData',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveMarketsDataRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveMarketsDataResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveMarketsDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveMarketsDataRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveMarketsDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveMarketsDataResponse,
  },
  // Market data history
//
// Get market data history for a market ID between given dates using a cursor based pagination model
getMarketDataHistoryByID: {
    path: '/datanode.api.v2.TradingDataService/GetMarketDataHistoryByID',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetMarketDataHistoryByIDRequest,
    responseType: data$node_api_v2_trading_data_pb.GetMarketDataHistoryByIDResponse,
    requestSerialize: serialize_datanode_api_v2_GetMarketDataHistoryByIDRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetMarketDataHistoryByIDRequest,
    responseSerialize: serialize_datanode_api_v2_GetMarketDataHistoryByIDResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetMarketDataHistoryByIDResponse,
  },
  // Transfers list
//
// List Transfers to/from/either a public key using a cursor based pagination model
listTransfers: {
    path: '/datanode.api.v2.TradingDataService/ListTransfers',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListTransfersRequest,
    responseType: data$node_api_v2_trading_data_pb.ListTransfersResponse,
    requestSerialize: serialize_datanode_api_v2_ListTransfersRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListTransfersRequest,
    responseSerialize: serialize_datanode_api_v2_ListTransfersResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListTransfersResponse,
  },
  // Network Limits
//
// Get the current network limits (is bootstrapping finished, are proposals enabled etc..)
getNetworkLimits: {
    path: '/datanode.api.v2.TradingDataService/GetNetworkLimits',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetNetworkLimitsRequest,
    responseType: data$node_api_v2_trading_data_pb.GetNetworkLimitsResponse,
    requestSerialize: serialize_datanode_api_v2_GetNetworkLimitsRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetNetworkLimitsRequest,
    responseSerialize: serialize_datanode_api_v2_GetNetworkLimitsResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetNetworkLimitsResponse,
  },
  // Candles list
//
// Get candle data for a given candle ID
listCandleData: {
    path: '/datanode.api.v2.TradingDataService/ListCandleData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListCandleDataRequest,
    responseType: data$node_api_v2_trading_data_pb.ListCandleDataResponse,
    requestSerialize: serialize_datanode_api_v2_ListCandleDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListCandleDataRequest,
    responseSerialize: serialize_datanode_api_v2_ListCandleDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListCandleDataResponse,
  },
  // Candle updates
//
// Subscribe to a stream of candle updates
observeCandleData: {
    path: '/datanode.api.v2.TradingDataService/ObserveCandleData',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveCandleDataRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveCandleDataResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveCandleDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveCandleDataRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveCandleDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveCandleDataResponse,
  },
  // Candle intervals list
//
// Get all available intervals for a given market along with the corresponding candle id
listCandleIntervals: {
    path: '/datanode.api.v2.TradingDataService/ListCandleIntervals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListCandleIntervalsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListCandleIntervalsResponse,
    requestSerialize: serialize_datanode_api_v2_ListCandleIntervalsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListCandleIntervalsRequest,
    responseSerialize: serialize_datanode_api_v2_ListCandleIntervalsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListCandleIntervalsResponse,
  },
  // Votes list
//
// Get Votes for a Party ID using a cursor based pagination model
listVotes: {
    path: '/datanode.api.v2.TradingDataService/ListVotes',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListVotesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListVotesResponse,
    requestSerialize: serialize_datanode_api_v2_ListVotesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListVotesRequest,
    responseSerialize: serialize_datanode_api_v2_ListVotesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListVotesResponse,
  },
  // Votes subscription
//
// Subscribe to a stream of votes
observeVotes: {
    path: '/datanode.api.v2.TradingDataService/ObserveVotes',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveVotesRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveVotesResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveVotesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveVotesRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveVotesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveVotesResponse,
  },
  // ERC20 add signer bundle
//
// List the signature bundle to add a particular validator to the signer list of the multisig contract
listERC20MultiSigSignerAddedBundles: {
    path: '/datanode.api.v2.TradingDataService/ListERC20MultiSigSignerAddedBundles',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerAddedBundlesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerAddedBundlesResponse,
    requestSerialize: serialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesRequest,
    responseSerialize: serialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListERC20MultiSigSignerAddedBundlesResponse,
  },
  // ERC20 remove signer bundle
//
// List the signatures bundle to remove a particular validator from signer list of the multisig contract
listERC20MultiSigSignerRemovedBundles: {
    path: '/datanode.api.v2.TradingDataService/ListERC20MultiSigSignerRemovedBundles',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerRemovedBundlesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListERC20MultiSigSignerRemovedBundlesResponse,
    requestSerialize: serialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesRequest,
    responseSerialize: serialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListERC20MultiSigSignerRemovedBundlesResponse,
  },
  // ERC20 list asset bundle
//
// Get the signatures bundle to allowlist an ERC20 token in the collateral bridge
getERC20ListAssetBundle: {
    path: '/datanode.api.v2.TradingDataService/GetERC20ListAssetBundle',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetERC20ListAssetBundleRequest,
    responseType: data$node_api_v2_trading_data_pb.GetERC20ListAssetBundleResponse,
    requestSerialize: serialize_datanode_api_v2_GetERC20ListAssetBundleRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetERC20ListAssetBundleRequest,
    responseSerialize: serialize_datanode_api_v2_GetERC20ListAssetBundleResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetERC20ListAssetBundleResponse,
  },
  // ERC20 set asset limit bundle
//
// Get the signature bundle to update the token limits (maxLifetimeDeposit and withdrawThreshold) for a given ERC20 token (already allowlisted) in the collateral bridge
getERC20SetAssetLimitsBundle: {
    path: '/datanode.api.v2.TradingDataService/GetERC20SetAssetLimitsBundle',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetERC20SetAssetLimitsBundleRequest,
    responseType: data$node_api_v2_trading_data_pb.GetERC20SetAssetLimitsBundleResponse,
    requestSerialize: serialize_datanode_api_v2_GetERC20SetAssetLimitsBundleRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetERC20SetAssetLimitsBundleRequest,
    responseSerialize: serialize_datanode_api_v2_GetERC20SetAssetLimitsBundleResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetERC20SetAssetLimitsBundleResponse,
  },
  // ERC20 withdrawal bundle
//
// Get the signature bundle to finalize a withdrawal on ethereum
getERC20WithdrawalApproval: {
    path: '/datanode.api.v2.TradingDataService/GetERC20WithdrawalApproval',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetERC20WithdrawalApprovalRequest,
    responseType: data$node_api_v2_trading_data_pb.GetERC20WithdrawalApprovalResponse,
    requestSerialize: serialize_datanode_api_v2_GetERC20WithdrawalApprovalRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetERC20WithdrawalApprovalRequest,
    responseSerialize: serialize_datanode_api_v2_GetERC20WithdrawalApprovalResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetERC20WithdrawalApprovalResponse,
  },
  // Trade (latest)
//
// Get latest trade
getLastTrade: {
    path: '/datanode.api.v2.TradingDataService/GetLastTrade',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetLastTradeRequest,
    responseType: data$node_api_v2_trading_data_pb.GetLastTradeResponse,
    requestSerialize: serialize_datanode_api_v2_GetLastTradeRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetLastTradeRequest,
    responseSerialize: serialize_datanode_api_v2_GetLastTradeResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetLastTradeResponse,
  },
  // Trades list
//
// Get a list of all trades, optionally filtered by party/market/order using a cursor based pagination model
listTrades: {
    path: '/datanode.api.v2.TradingDataService/ListTrades',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListTradesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListTradesResponse,
    requestSerialize: serialize_datanode_api_v2_ListTradesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListTradesRequest,
    responseSerialize: serialize_datanode_api_v2_ListTradesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListTradesResponse,
  },
  // Trades subscription
//
// Subscribe to a stream of trades, optionally filtered by party/market
observeTrades: {
    path: '/datanode.api.v2.TradingDataService/ObserveTrades',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveTradesRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveTradesResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveTradesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveTradesRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveTradesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveTradesResponse,
  },
  // Oracle Spec
//
// Get an oracle spec by ID.
getOracleSpec: {
    path: '/datanode.api.v2.TradingDataService/GetOracleSpec',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetOracleSpecRequest,
    responseType: data$node_api_v2_trading_data_pb.GetOracleSpecResponse,
    requestSerialize: serialize_datanode_api_v2_GetOracleSpecRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetOracleSpecRequest,
    responseSerialize: serialize_datanode_api_v2_GetOracleSpecResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetOracleSpecResponse,
  },
  // Oracle Spec list
//
// Get the oracle specs
listOracleSpecs: {
    path: '/datanode.api.v2.TradingDataService/ListOracleSpecs',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListOracleSpecsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListOracleSpecsResponse,
    requestSerialize: serialize_datanode_api_v2_ListOracleSpecsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListOracleSpecsRequest,
    responseSerialize: serialize_datanode_api_v2_ListOracleSpecsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListOracleSpecsResponse,
  },
  // Oracle data list
//
// Get all oracle data
listOracleData: {
    path: '/datanode.api.v2.TradingDataService/ListOracleData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListOracleDataRequest,
    responseType: data$node_api_v2_trading_data_pb.ListOracleDataResponse,
    requestSerialize: serialize_datanode_api_v2_ListOracleDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListOracleDataRequest,
    responseSerialize: serialize_datanode_api_v2_ListOracleDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListOracleDataResponse,
  },
  // Market
//
// Get all markets using a cursor based pagination model
getMarket: {
    path: '/datanode.api.v2.TradingDataService/GetMarket',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetMarketRequest,
    responseType: data$node_api_v2_trading_data_pb.GetMarketResponse,
    requestSerialize: serialize_datanode_api_v2_GetMarketRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetMarketRequest,
    responseSerialize: serialize_datanode_api_v2_GetMarketResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetMarketResponse,
  },
  // Markets list
//
// Get markets using a cursor based pagination
listMarkets: {
    path: '/datanode.api.v2.TradingDataService/ListMarkets',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListMarketsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListMarketsResponse,
    requestSerialize: serialize_datanode_api_v2_ListMarketsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListMarketsRequest,
    responseSerialize: serialize_datanode_api_v2_ListMarketsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListMarketsResponse,
  },
  // Party
//
// Get a single party
getParty: {
    path: '/datanode.api.v2.TradingDataService/GetParty',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetPartyRequest,
    responseType: data$node_api_v2_trading_data_pb.GetPartyResponse,
    requestSerialize: serialize_datanode_api_v2_GetPartyRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetPartyRequest,
    responseSerialize: serialize_datanode_api_v2_GetPartyResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetPartyResponse,
  },
  // Parties
//
// Get parties using a cursor based pagination model
listParties: {
    path: '/datanode.api.v2.TradingDataService/ListParties',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListPartiesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListPartiesResponse,
    requestSerialize: serialize_datanode_api_v2_ListPartiesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListPartiesRequest,
    responseSerialize: serialize_datanode_api_v2_ListPartiesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListPartiesResponse,
  },
  // Margin Levels list
//
// Get margin levels using a cursor based pagination model
listMarginLevels: {
    path: '/datanode.api.v2.TradingDataService/ListMarginLevels',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListMarginLevelsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListMarginLevelsResponse,
    requestSerialize: serialize_datanode_api_v2_ListMarginLevelsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListMarginLevelsRequest,
    responseSerialize: serialize_datanode_api_v2_ListMarginLevelsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListMarginLevelsResponse,
  },
  // Margin levels subscription
//
// Subscribe to a stream of margin levels
observeMarginLevels: {
    path: '/datanode.api.v2.TradingDataService/ObserveMarginLevels',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveMarginLevelsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveMarginLevelsResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveMarginLevelsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveMarginLevelsRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveMarginLevelsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveMarginLevelsResponse,
  },
  // Rewards list
//
// Get rewards
listRewards: {
    path: '/datanode.api.v2.TradingDataService/ListRewards',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListRewardsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListRewardsResponse,
    requestSerialize: serialize_datanode_api_v2_ListRewardsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListRewardsRequest,
    responseSerialize: serialize_datanode_api_v2_ListRewardsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListRewardsResponse,
  },
  // Reward summaries list
//
// Get reward summaries
listRewardSummaries: {
    path: '/datanode.api.v2.TradingDataService/ListRewardSummaries',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListRewardSummariesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListRewardSummariesResponse,
    requestSerialize: serialize_datanode_api_v2_ListRewardSummariesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListRewardSummariesRequest,
    responseSerialize: serialize_datanode_api_v2_ListRewardSummariesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListRewardSummariesResponse,
  },
  // Reward summaries by epoch
//
// List reward summaries by epoch
listEpochRewardSummaries: {
    path: '/datanode.api.v2.TradingDataService/ListEpochRewardSummaries',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListEpochRewardSummariesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListEpochRewardSummariesResponse,
    requestSerialize: serialize_datanode_api_v2_ListEpochRewardSummariesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListEpochRewardSummariesRequest,
    responseSerialize: serialize_datanode_api_v2_ListEpochRewardSummariesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListEpochRewardSummariesResponse,
  },
  // Rewards subscription
//
// Subscribe to a stream of rewards
observeRewards: {
    path: '/datanode.api.v2.TradingDataService/ObserveRewards',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveRewardsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveRewardsResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveRewardsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveRewardsRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveRewardsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveRewardsResponse,
  },
  // Deposit
//
// Get a deposit by its identifier
getDeposit: {
    path: '/datanode.api.v2.TradingDataService/GetDeposit',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetDepositRequest,
    responseType: data$node_api_v2_trading_data_pb.GetDepositResponse,
    requestSerialize: serialize_datanode_api_v2_GetDepositRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetDepositRequest,
    responseSerialize: serialize_datanode_api_v2_GetDepositResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetDepositResponse,
  },
  // Deposits list
//
// Get a list of deposits for a given party
listDeposits: {
    path: '/datanode.api.v2.TradingDataService/ListDeposits',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListDepositsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListDepositsResponse,
    requestSerialize: serialize_datanode_api_v2_ListDepositsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListDepositsRequest,
    responseSerialize: serialize_datanode_api_v2_ListDepositsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListDepositsResponse,
  },
  // Withdrawal
//
// Get a withdrawal by its identifier
getWithdrawal: {
    path: '/datanode.api.v2.TradingDataService/GetWithdrawal',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetWithdrawalRequest,
    responseType: data$node_api_v2_trading_data_pb.GetWithdrawalResponse,
    requestSerialize: serialize_datanode_api_v2_GetWithdrawalRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetWithdrawalRequest,
    responseSerialize: serialize_datanode_api_v2_GetWithdrawalResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetWithdrawalResponse,
  },
  // Withdrawals list
//
// Get a list of withdrawals for a given party
listWithdrawals: {
    path: '/datanode.api.v2.TradingDataService/ListWithdrawals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListWithdrawalsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListWithdrawalsResponse,
    requestSerialize: serialize_datanode_api_v2_ListWithdrawalsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListWithdrawalsRequest,
    responseSerialize: serialize_datanode_api_v2_ListWithdrawalsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListWithdrawalsResponse,
  },
  // Asset
//
// Get a single asset using its identifier
getAsset: {
    path: '/datanode.api.v2.TradingDataService/GetAsset',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetAssetRequest,
    responseType: data$node_api_v2_trading_data_pb.GetAssetResponse,
    requestSerialize: serialize_datanode_api_v2_GetAssetRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetAssetRequest,
    responseSerialize: serialize_datanode_api_v2_GetAssetResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetAssetResponse,
  },
  // Assets list
//
// Get a list of assets using cursor based pagination
listAssets: {
    path: '/datanode.api.v2.TradingDataService/ListAssets',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListAssetsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListAssetsResponse,
    requestSerialize: serialize_datanode_api_v2_ListAssetsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListAssetsRequest,
    responseSerialize: serialize_datanode_api_v2_ListAssetsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListAssetsResponse,
  },
  // Liquidity Provisions list
//
// Get a list of liquidity provisions for a given market using a cursor based pagination
listLiquidityProvisions: {
    path: '/datanode.api.v2.TradingDataService/ListLiquidityProvisions',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListLiquidityProvisionsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListLiquidityProvisionsResponse,
    requestSerialize: serialize_datanode_api_v2_ListLiquidityProvisionsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListLiquidityProvisionsRequest,
    responseSerialize: serialize_datanode_api_v2_ListLiquidityProvisionsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListLiquidityProvisionsResponse,
  },
  // Liquidity provision subscription
//
// Get a liquidity provision subscription for a given market and party
observeLiquidityProvisions: {
    path: '/datanode.api.v2.TradingDataService/ObserveLiquidityProvisions',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveLiquidityProvisionsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveLiquidityProvisionsResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveLiquidityProvisionsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveLiquidityProvisionsRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveLiquidityProvisionsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveLiquidityProvisionsResponse,
  },
  // Governance
//
// Get a single proposal's details
getGovernanceData: {
    path: '/datanode.api.v2.TradingDataService/GetGovernanceData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetGovernanceDataRequest,
    responseType: data$node_api_v2_trading_data_pb.GetGovernanceDataResponse,
    requestSerialize: serialize_datanode_api_v2_GetGovernanceDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetGovernanceDataRequest,
    responseSerialize: serialize_datanode_api_v2_GetGovernanceDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetGovernanceDataResponse,
  },
  // Governance list
//
// List proposals using a cursor based pagination model
listGovernanceData: {
    path: '/datanode.api.v2.TradingDataService/ListGovernanceData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListGovernanceDataRequest,
    responseType: data$node_api_v2_trading_data_pb.ListGovernanceDataResponse,
    requestSerialize: serialize_datanode_api_v2_ListGovernanceDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListGovernanceDataRequest,
    responseSerialize: serialize_datanode_api_v2_ListGovernanceDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListGovernanceDataResponse,
  },
  // Governance proposals subscription
//
// Subscribe to a stream of governance proposals
observeGovernance: {
    path: '/datanode.api.v2.TradingDataService/ObserveGovernance',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveGovernanceRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveGovernanceResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveGovernanceRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveGovernanceRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveGovernanceResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveGovernanceResponse,
  },
  // Delegation list
//
// List delegations
listDelegations: {
    path: '/datanode.api.v2.TradingDataService/ListDelegations',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListDelegationsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListDelegationsResponse,
    requestSerialize: serialize_datanode_api_v2_ListDelegationsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListDelegationsRequest,
    responseSerialize: serialize_datanode_api_v2_ListDelegationsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListDelegationsResponse,
  },
  // Delegation events subscription
//
// Subscribe to delegation events
observeDelegations: {
    path: '/datanode.api.v2.TradingDataService/ObserveDelegations',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveDelegationsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveDelegationsResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveDelegationsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveDelegationsRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveDelegationsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveDelegationsResponse,
  },
  // Network data
//
// Get data regarding the nodes of the network
getNetworkData: {
    path: '/datanode.api.v2.TradingDataService/GetNetworkData',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetNetworkDataRequest,
    responseType: data$node_api_v2_trading_data_pb.GetNetworkDataResponse,
    requestSerialize: serialize_datanode_api_v2_GetNetworkDataRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetNetworkDataRequest,
    responseSerialize: serialize_datanode_api_v2_GetNetworkDataResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetNetworkDataResponse,
  },
  // Node
//
// Get information about a given node
getNode: {
    path: '/datanode.api.v2.TradingDataService/GetNode',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetNodeRequest,
    responseType: data$node_api_v2_trading_data_pb.GetNodeResponse,
    requestSerialize: serialize_datanode_api_v2_GetNodeRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetNodeRequest,
    responseSerialize: serialize_datanode_api_v2_GetNodeResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetNodeResponse,
  },
  // Nodes list
//
// List information about the nodes on the network
listNodes: {
    path: '/datanode.api.v2.TradingDataService/ListNodes',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListNodesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListNodesResponse,
    requestSerialize: serialize_datanode_api_v2_ListNodesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListNodesRequest,
    responseSerialize: serialize_datanode_api_v2_ListNodesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListNodesResponse,
  },
  // Node signatures list
//
// List an aggregate of signatures from all the nodes of the network
listNodeSignatures: {
    path: '/datanode.api.v2.TradingDataService/ListNodeSignatures',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListNodeSignaturesRequest,
    responseType: data$node_api_v2_trading_data_pb.ListNodeSignaturesResponse,
    requestSerialize: serialize_datanode_api_v2_ListNodeSignaturesRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListNodeSignaturesRequest,
    responseSerialize: serialize_datanode_api_v2_ListNodeSignaturesResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListNodeSignaturesResponse,
  },
  // Epoch
//
// Get data for a specific epoch, if ID is omitted, it retrieves the current epoch
getEpoch: {
    path: '/datanode.api.v2.TradingDataService/GetEpoch',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetEpochRequest,
    responseType: data$node_api_v2_trading_data_pb.GetEpochResponse,
    requestSerialize: serialize_datanode_api_v2_GetEpochRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetEpochRequest,
    responseSerialize: serialize_datanode_api_v2_GetEpochResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetEpochResponse,
  },
  // Estimate fee
//
// Estimate the fee that would incur for submitting this order
estimateFee: {
    path: '/datanode.api.v2.TradingDataService/EstimateFee',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.EstimateFeeRequest,
    responseType: data$node_api_v2_trading_data_pb.EstimateFeeResponse,
    requestSerialize: serialize_datanode_api_v2_EstimateFeeRequest,
    requestDeserialize: deserialize_datanode_api_v2_EstimateFeeRequest,
    responseSerialize: serialize_datanode_api_v2_EstimateFeeResponse,
    responseDeserialize: deserialize_datanode_api_v2_EstimateFeeResponse,
  },
  // Estimate margin
//
// Estimate the margin that would be required for submitting this order
estimateMargin: {
    path: '/datanode.api.v2.TradingDataService/EstimateMargin',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.EstimateMarginRequest,
    responseType: data$node_api_v2_trading_data_pb.EstimateMarginResponse,
    requestSerialize: serialize_datanode_api_v2_EstimateMarginRequest,
    requestDeserialize: deserialize_datanode_api_v2_EstimateMarginRequest,
    responseSerialize: serialize_datanode_api_v2_EstimateMarginResponse,
    responseDeserialize: deserialize_datanode_api_v2_EstimateMarginResponse,
  },
  // Network Parameters list
//
// Get the network parameters
listNetworkParameters: {
    path: '/datanode.api.v2.TradingDataService/ListNetworkParameters',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListNetworkParametersRequest,
    responseType: data$node_api_v2_trading_data_pb.ListNetworkParametersResponse,
    requestSerialize: serialize_datanode_api_v2_ListNetworkParametersRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListNetworkParametersRequest,
    responseSerialize: serialize_datanode_api_v2_ListNetworkParametersResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListNetworkParametersResponse,
  },
  // Network Parameter
//
// Get a single network parameter
getNetworkParameter: {
    path: '/datanode.api.v2.TradingDataService/GetNetworkParameter',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetNetworkParameterRequest,
    responseType: data$node_api_v2_trading_data_pb.GetNetworkParameterResponse,
    requestSerialize: serialize_datanode_api_v2_GetNetworkParameterRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetNetworkParameterRequest,
    responseSerialize: serialize_datanode_api_v2_GetNetworkParameterResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetNetworkParameterResponse,
  },
  // Checkpoints list
//
// List information about checkpoint generated by the network
listCheckpoints: {
    path: '/datanode.api.v2.TradingDataService/ListCheckpoints',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListCheckpointsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListCheckpointsResponse,
    requestSerialize: serialize_datanode_api_v2_ListCheckpointsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListCheckpointsRequest,
    responseSerialize: serialize_datanode_api_v2_ListCheckpointsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListCheckpointsResponse,
  },
  // Stake
//
// Retrieve staking informations for a given party
getStake: {
    path: '/datanode.api.v2.TradingDataService/GetStake',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetStakeRequest,
    responseType: data$node_api_v2_trading_data_pb.GetStakeResponse,
    requestSerialize: serialize_datanode_api_v2_GetStakeRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetStakeRequest,
    responseSerialize: serialize_datanode_api_v2_GetStakeResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetStakeResponse,
  },
  // Risk Factors
//
// Get Risk Factor data for a given market
getRiskFactors: {
    path: '/datanode.api.v2.TradingDataService/GetRiskFactors',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetRiskFactorsRequest,
    responseType: data$node_api_v2_trading_data_pb.GetRiskFactorsResponse,
    requestSerialize: serialize_datanode_api_v2_GetRiskFactorsRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetRiskFactorsRequest,
    responseSerialize: serialize_datanode_api_v2_GetRiskFactorsResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetRiskFactorsResponse,
  },
  // Event Bus
//
// Subscribe to a stream of events from the core
observeEventBus: {
    path: '/datanode.api.v2.TradingDataService/ObserveEventBus',
    requestStream: true,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveEventBusRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveEventBusResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveEventBusRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveEventBusRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveEventBusResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveEventBusResponse,
  },
  // Transfer Responses
//
// Subscribe to a stream of transfer responses
observeLedgerMovements: {
    path: '/datanode.api.v2.TradingDataService/ObserveLedgerMovements',
    requestStream: false,
    responseStream: true,
    requestType: data$node_api_v2_trading_data_pb.ObserveLedgerMovementsRequest,
    responseType: data$node_api_v2_trading_data_pb.ObserveLedgerMovementsResponse,
    requestSerialize: serialize_datanode_api_v2_ObserveLedgerMovementsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ObserveLedgerMovementsRequest,
    responseSerialize: serialize_datanode_api_v2_ObserveLedgerMovementsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ObserveLedgerMovementsResponse,
  },
  // Key Rotations list
//
// List all key rotation applied for a given party
listKeyRotations: {
    path: '/datanode.api.v2.TradingDataService/ListKeyRotations',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListKeyRotationsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListKeyRotationsResponse,
    requestSerialize: serialize_datanode_api_v2_ListKeyRotationsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListKeyRotationsRequest,
    responseSerialize: serialize_datanode_api_v2_ListKeyRotationsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListKeyRotationsResponse,
  },
  // Ethereum Key Rotations
//
// List all ethereum key rotation applied for a given party
listEthereumKeyRotations: {
    path: '/datanode.api.v2.TradingDataService/ListEthereumKeyRotations',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListEthereumKeyRotationsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListEthereumKeyRotationsResponse,
    requestSerialize: serialize_datanode_api_v2_ListEthereumKeyRotationsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListEthereumKeyRotationsRequest,
    responseSerialize: serialize_datanode_api_v2_ListEthereumKeyRotationsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListEthereumKeyRotationsResponse,
  },
  // Vega Time
//
// Get the current time of the network
getVegaTime: {
    path: '/datanode.api.v2.TradingDataService/GetVegaTime',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetVegaTimeRequest,
    responseType: data$node_api_v2_trading_data_pb.GetVegaTimeResponse,
    requestSerialize: serialize_datanode_api_v2_GetVegaTimeRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetVegaTimeRequest,
    responseSerialize: serialize_datanode_api_v2_GetVegaTimeResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetVegaTimeResponse,
  },
  // Protocol upgrade status
//
// Get status of protocol upgrades
getProtocolUpgradeStatus: {
    path: '/datanode.api.v2.TradingDataService/GetProtocolUpgradeStatus',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetProtocolUpgradeStatusRequest,
    responseType: data$node_api_v2_trading_data_pb.GetProtocolUpgradeStatusResponse,
    requestSerialize: serialize_datanode_api_v2_GetProtocolUpgradeStatusRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetProtocolUpgradeStatusRequest,
    responseSerialize: serialize_datanode_api_v2_GetProtocolUpgradeStatusResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetProtocolUpgradeStatusResponse,
  },
  // Protocol upgrade proposals
//
// List protocol upgrades proposals, optionally filtering on status or approver.
listProtocolUpgradeProposals: {
    path: '/datanode.api.v2.TradingDataService/ListProtocolUpgradeProposals',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListProtocolUpgradeProposalsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListProtocolUpgradeProposalsResponse,
    requestSerialize: serialize_datanode_api_v2_ListProtocolUpgradeProposalsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListProtocolUpgradeProposalsRequest,
    responseSerialize: serialize_datanode_api_v2_ListProtocolUpgradeProposalsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListProtocolUpgradeProposalsResponse,
  },
  // Snapshots
//
// List core snapshots taken
listCoreSnapshots: {
    path: '/datanode.api.v2.TradingDataService/ListCoreSnapshots',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListCoreSnapshotsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListCoreSnapshotsResponse,
    requestSerialize: serialize_datanode_api_v2_ListCoreSnapshotsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListCoreSnapshotsRequest,
    responseSerialize: serialize_datanode_api_v2_ListCoreSnapshotsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListCoreSnapshotsResponse,
  },
  // Network History
//
// Network history allows the data node to reach out to peer nodes to fetch the most recent history, as well as
// older history if desired, such that it can quickly get itself up to the latest block height of the network and start
// to consume events for the latest block from the Vega core.
// See https://github.com/vegaprotocol/vega/tree/develop/datanode/networkhistory/README.md for a full description of network history
//
// Network history most recent segment
//
// Get the network's most recently history segment
getMostRecentNetworkHistorySegment: {
    path: '/datanode.api.v2.TradingDataService/GetMostRecentNetworkHistorySegment',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetMostRecentNetworkHistorySegmentRequest,
    responseType: data$node_api_v2_trading_data_pb.GetMostRecentNetworkHistorySegmentResponse,
    requestSerialize: serialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentRequest,
    responseSerialize: serialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetMostRecentNetworkHistorySegmentResponse,
  },
  // Network history all segments
//
// List all history segments stored by this node
listAllNetworkHistorySegments: {
    path: '/datanode.api.v2.TradingDataService/ListAllNetworkHistorySegments',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.ListAllNetworkHistorySegmentsRequest,
    responseType: data$node_api_v2_trading_data_pb.ListAllNetworkHistorySegmentsResponse,
    requestSerialize: serialize_datanode_api_v2_ListAllNetworkHistorySegmentsRequest,
    requestDeserialize: deserialize_datanode_api_v2_ListAllNetworkHistorySegmentsRequest,
    responseSerialize: serialize_datanode_api_v2_ListAllNetworkHistorySegmentsResponse,
    responseDeserialize: deserialize_datanode_api_v2_ListAllNetworkHistorySegmentsResponse,
  },
  // Network history peer addresses
//
// List the addresses of all active network history peers
getActiveNetworkHistoryPeerAddresses: {
    path: '/datanode.api.v2.TradingDataService/GetActiveNetworkHistoryPeerAddresses',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.GetActiveNetworkHistoryPeerAddressesRequest,
    responseType: data$node_api_v2_trading_data_pb.GetActiveNetworkHistoryPeerAddressesResponse,
    requestSerialize: serialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesRequest,
    requestDeserialize: deserialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesRequest,
    responseSerialize: serialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesResponse,
    responseDeserialize: deserialize_datanode_api_v2_GetActiveNetworkHistoryPeerAddressesResponse,
  },
  // Ping
//
// Ping the data node
ping: {
    path: '/datanode.api.v2.TradingDataService/Ping',
    requestStream: false,
    responseStream: false,
    requestType: data$node_api_v2_trading_data_pb.PingRequest,
    responseType: data$node_api_v2_trading_data_pb.PingResponse,
    requestSerialize: serialize_datanode_api_v2_PingRequest,
    requestDeserialize: deserialize_datanode_api_v2_PingRequest,
    responseSerialize: serialize_datanode_api_v2_PingResponse,
    responseDeserialize: deserialize_datanode_api_v2_PingResponse,
  },
};

exports.TradingDataServiceClient = grpc.makeGenericClientConstructor(TradingDataServiceService);
