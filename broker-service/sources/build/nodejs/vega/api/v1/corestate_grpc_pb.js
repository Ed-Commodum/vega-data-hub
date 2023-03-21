// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var vega_api_v1_corestate_pb = require('../../../vega/api/v1/corestate_pb.js');
var vega_assets_pb = require('../../../vega/assets_pb.js');
var vega_governance_pb = require('../../../vega/governance_pb.js');
var vega_markets_pb = require('../../../vega/markets_pb.js');
var vega_vega_pb = require('../../../vega/vega_pb.js');
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_vega_api_v1_ListAccountsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListAccountsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListAccountsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListAccountsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListAccountsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListAccountsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListAssetsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListAssetsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListAssetsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListAssetsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListAssetsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListAssetsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListDelegationsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListDelegationsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListDelegationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListDelegationsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListDelegationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListDelegationsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListDelegationsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListDelegationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListDelegationsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListDelegationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListMarketsDataRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListMarketsDataRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListMarketsDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListMarketsDataRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListMarketsDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListMarketsDataResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListMarketsDataResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListMarketsDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListMarketsDataResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListMarketsDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListMarketsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListMarketsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListMarketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListMarketsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListMarketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListMarketsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListMarketsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListMarketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListMarketsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListMarketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListNetworkLimitsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListNetworkLimitsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListNetworkLimitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListNetworkLimitsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListNetworkLimitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListNetworkLimitsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListNetworkLimitsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListNetworkLimitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListNetworkLimitsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListNetworkLimitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListNetworkParametersRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListNetworkParametersRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListNetworkParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListNetworkParametersRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListNetworkParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListNetworkParametersResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListNetworkParametersResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListNetworkParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListNetworkParametersResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListNetworkParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListPartiesRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListPartiesRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListPartiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListPartiesRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListPartiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListPartiesResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListPartiesResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListPartiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListPartiesResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListPartiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListPartiesStakeRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListPartiesStakeRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListPartiesStakeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListPartiesStakeRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListPartiesStakeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListPartiesStakeResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListPartiesStakeResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListPartiesStakeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListPartiesStakeResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListPartiesStakeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListProposalsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListProposalsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListProposalsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListProposalsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListProposalsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListProposalsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListValidatorsRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListValidatorsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListValidatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListValidatorsRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListValidatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListValidatorsResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListValidatorsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListValidatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListValidatorsResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListVotesRequest(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListVotesRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ListVotesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListVotesRequest(buffer_arg) {
  return vega_api_v1_corestate_pb.ListVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ListVotesResponse(arg) {
  if (!(arg instanceof vega_api_v1_corestate_pb.ListVotesResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ListVotesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ListVotesResponse(buffer_arg) {
  return vega_api_v1_corestate_pb.ListVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoreStateServiceService = exports.CoreStateServiceService = {
  // Accounts list
//
// Return a list of accounts
listAccounts: {
    path: '/vega.api.v1.CoreStateService/ListAccounts',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListAccountsRequest,
    responseType: vega_api_v1_corestate_pb.ListAccountsResponse,
    requestSerialize: serialize_vega_api_v1_ListAccountsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListAccountsRequest,
    responseSerialize: serialize_vega_api_v1_ListAccountsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListAccountsResponse,
  },
  // Assets list
//
// Return a list of assets
listAssets: {
    path: '/vega.api.v1.CoreStateService/ListAssets',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListAssetsRequest,
    responseType: vega_api_v1_corestate_pb.ListAssetsResponse,
    requestSerialize: serialize_vega_api_v1_ListAssetsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListAssetsRequest,
    responseSerialize: serialize_vega_api_v1_ListAssetsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListAssetsResponse,
  },
  // Network parameters list
//
// Return a list of network parameters
listNetworkParameters: {
    path: '/vega.api.v1.CoreStateService/ListNetworkParameters',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListNetworkParametersRequest,
    responseType: vega_api_v1_corestate_pb.ListNetworkParametersResponse,
    requestSerialize: serialize_vega_api_v1_ListNetworkParametersRequest,
    requestDeserialize: deserialize_vega_api_v1_ListNetworkParametersRequest,
    responseSerialize: serialize_vega_api_v1_ListNetworkParametersResponse,
    responseDeserialize: deserialize_vega_api_v1_ListNetworkParametersResponse,
  },
  // Network limits list
//
// Return a list of network limits
listNetworkLimits: {
    path: '/vega.api.v1.CoreStateService/ListNetworkLimits',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListNetworkLimitsRequest,
    responseType: vega_api_v1_corestate_pb.ListNetworkLimitsResponse,
    requestSerialize: serialize_vega_api_v1_ListNetworkLimitsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListNetworkLimitsRequest,
    responseSerialize: serialize_vega_api_v1_ListNetworkLimitsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListNetworkLimitsResponse,
  },
  // Parties list
//
// Return a list of parties
listParties: {
    path: '/vega.api.v1.CoreStateService/ListParties',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListPartiesRequest,
    responseType: vega_api_v1_corestate_pb.ListPartiesResponse,
    requestSerialize: serialize_vega_api_v1_ListPartiesRequest,
    requestDeserialize: deserialize_vega_api_v1_ListPartiesRequest,
    responseSerialize: serialize_vega_api_v1_ListPartiesResponse,
    responseDeserialize: deserialize_vega_api_v1_ListPartiesResponse,
  },
  // Validators list
//
// Return a list of validators
listValidators: {
    path: '/vega.api.v1.CoreStateService/ListValidators',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListValidatorsRequest,
    responseType: vega_api_v1_corestate_pb.ListValidatorsResponse,
    requestSerialize: serialize_vega_api_v1_ListValidatorsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListValidatorsRequest,
    responseSerialize: serialize_vega_api_v1_ListValidatorsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListValidatorsResponse,
  },
  // Markets list
//
// Return a list of markets
listMarkets: {
    path: '/vega.api.v1.CoreStateService/ListMarkets',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListMarketsRequest,
    responseType: vega_api_v1_corestate_pb.ListMarketsResponse,
    requestSerialize: serialize_vega_api_v1_ListMarketsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListMarketsRequest,
    responseSerialize: serialize_vega_api_v1_ListMarketsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListMarketsResponse,
  },
  // Proposals list
//
// Return a list of proposals
listProposals: {
    path: '/vega.api.v1.CoreStateService/ListProposals',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListProposalsRequest,
    responseType: vega_api_v1_corestate_pb.ListProposalsResponse,
    requestSerialize: serialize_vega_api_v1_ListProposalsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListProposalsRequest,
    responseSerialize: serialize_vega_api_v1_ListProposalsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListProposalsResponse,
  },
  // Markets data list
//
// Return a list of markets data
listMarketsData: {
    path: '/vega.api.v1.CoreStateService/ListMarketsData',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListMarketsDataRequest,
    responseType: vega_api_v1_corestate_pb.ListMarketsDataResponse,
    requestSerialize: serialize_vega_api_v1_ListMarketsDataRequest,
    requestDeserialize: deserialize_vega_api_v1_ListMarketsDataRequest,
    responseSerialize: serialize_vega_api_v1_ListMarketsDataResponse,
    responseDeserialize: deserialize_vega_api_v1_ListMarketsDataResponse,
  },
  // Votes list
//
// Return a list of votes
listVotes: {
    path: '/vega.api.v1.CoreStateService/ListVotes',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListVotesRequest,
    responseType: vega_api_v1_corestate_pb.ListVotesResponse,
    requestSerialize: serialize_vega_api_v1_ListVotesRequest,
    requestDeserialize: deserialize_vega_api_v1_ListVotesRequest,
    responseSerialize: serialize_vega_api_v1_ListVotesResponse,
    responseDeserialize: deserialize_vega_api_v1_ListVotesResponse,
  },
  // Parties stake list
//
// Return a list of parties stake
listPartiesStake: {
    path: '/vega.api.v1.CoreStateService/ListPartiesStake',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListPartiesStakeRequest,
    responseType: vega_api_v1_corestate_pb.ListPartiesStakeResponse,
    requestSerialize: serialize_vega_api_v1_ListPartiesStakeRequest,
    requestDeserialize: deserialize_vega_api_v1_ListPartiesStakeRequest,
    responseSerialize: serialize_vega_api_v1_ListPartiesStakeResponse,
    responseDeserialize: deserialize_vega_api_v1_ListPartiesStakeResponse,
  },
  // Delegations list
//
// Return a list of delegations
listDelegations: {
    path: '/vega.api.v1.CoreStateService/ListDelegations',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_corestate_pb.ListDelegationsRequest,
    responseType: vega_api_v1_corestate_pb.ListDelegationsResponse,
    requestSerialize: serialize_vega_api_v1_ListDelegationsRequest,
    requestDeserialize: deserialize_vega_api_v1_ListDelegationsRequest,
    responseSerialize: serialize_vega_api_v1_ListDelegationsResponse,
    responseDeserialize: deserialize_vega_api_v1_ListDelegationsResponse,
  },
};

exports.CoreStateServiceClient = grpc.makeGenericClientConstructor(CoreStateServiceService);
