// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var vega_api_v1_core_pb = require('../../../vega/api/v1/core_pb.js');
var vega_vega_pb = require('../../../vega/vega_pb.js');
var vega_events_v1_events_pb = require('../../../vega/events/v1/events_pb.js');
var vega_commands_v1_transaction_pb = require('../../../vega/commands/v1/transaction_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_vega_api_v1_CheckRawTransactionRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.CheckRawTransactionRequest)) {
    throw new Error('Expected argument of type vega.api.v1.CheckRawTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_CheckRawTransactionRequest(buffer_arg) {
  return vega_api_v1_core_pb.CheckRawTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_CheckRawTransactionResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.CheckRawTransactionResponse)) {
    throw new Error('Expected argument of type vega.api.v1.CheckRawTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_CheckRawTransactionResponse(buffer_arg) {
  return vega_api_v1_core_pb.CheckRawTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_CheckTransactionRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.CheckTransactionRequest)) {
    throw new Error('Expected argument of type vega.api.v1.CheckTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_CheckTransactionRequest(buffer_arg) {
  return vega_api_v1_core_pb.CheckTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_CheckTransactionResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.CheckTransactionResponse)) {
    throw new Error('Expected argument of type vega.api.v1.CheckTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_CheckTransactionResponse(buffer_arg) {
  return vega_api_v1_core_pb.CheckTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_GetSpamStatisticsRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.GetSpamStatisticsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.GetSpamStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_GetSpamStatisticsRequest(buffer_arg) {
  return vega_api_v1_core_pb.GetSpamStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_GetSpamStatisticsResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.GetSpamStatisticsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.GetSpamStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_GetSpamStatisticsResponse(buffer_arg) {
  return vega_api_v1_core_pb.GetSpamStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_GetVegaTimeRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.GetVegaTimeRequest)) {
    throw new Error('Expected argument of type vega.api.v1.GetVegaTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_GetVegaTimeRequest(buffer_arg) {
  return vega_api_v1_core_pb.GetVegaTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_GetVegaTimeResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.GetVegaTimeResponse)) {
    throw new Error('Expected argument of type vega.api.v1.GetVegaTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_GetVegaTimeResponse(buffer_arg) {
  return vega_api_v1_core_pb.GetVegaTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_LastBlockHeightRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.LastBlockHeightRequest)) {
    throw new Error('Expected argument of type vega.api.v1.LastBlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_LastBlockHeightRequest(buffer_arg) {
  return vega_api_v1_core_pb.LastBlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_LastBlockHeightResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.LastBlockHeightResponse)) {
    throw new Error('Expected argument of type vega.api.v1.LastBlockHeightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_LastBlockHeightResponse(buffer_arg) {
  return vega_api_v1_core_pb.LastBlockHeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ObserveEventBusRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.ObserveEventBusRequest)) {
    throw new Error('Expected argument of type vega.api.v1.ObserveEventBusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ObserveEventBusRequest(buffer_arg) {
  return vega_api_v1_core_pb.ObserveEventBusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_ObserveEventBusResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.ObserveEventBusResponse)) {
    throw new Error('Expected argument of type vega.api.v1.ObserveEventBusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_ObserveEventBusResponse(buffer_arg) {
  return vega_api_v1_core_pb.ObserveEventBusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_PropagateChainEventRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.PropagateChainEventRequest)) {
    throw new Error('Expected argument of type vega.api.v1.PropagateChainEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_PropagateChainEventRequest(buffer_arg) {
  return vega_api_v1_core_pb.PropagateChainEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_PropagateChainEventResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.PropagateChainEventResponse)) {
    throw new Error('Expected argument of type vega.api.v1.PropagateChainEventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_PropagateChainEventResponse(buffer_arg) {
  return vega_api_v1_core_pb.PropagateChainEventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_StatisticsRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.StatisticsRequest)) {
    throw new Error('Expected argument of type vega.api.v1.StatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_StatisticsRequest(buffer_arg) {
  return vega_api_v1_core_pb.StatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_StatisticsResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.StatisticsResponse)) {
    throw new Error('Expected argument of type vega.api.v1.StatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_StatisticsResponse(buffer_arg) {
  return vega_api_v1_core_pb.StatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_SubmitRawTransactionRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.SubmitRawTransactionRequest)) {
    throw new Error('Expected argument of type vega.api.v1.SubmitRawTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_SubmitRawTransactionRequest(buffer_arg) {
  return vega_api_v1_core_pb.SubmitRawTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_SubmitRawTransactionResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.SubmitRawTransactionResponse)) {
    throw new Error('Expected argument of type vega.api.v1.SubmitRawTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_SubmitRawTransactionResponse(buffer_arg) {
  return vega_api_v1_core_pb.SubmitRawTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_SubmitTransactionRequest(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.SubmitTransactionRequest)) {
    throw new Error('Expected argument of type vega.api.v1.SubmitTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_SubmitTransactionRequest(buffer_arg) {
  return vega_api_v1_core_pb.SubmitTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vega_api_v1_SubmitTransactionResponse(arg) {
  if (!(arg instanceof vega_api_v1_core_pb.SubmitTransactionResponse)) {
    throw new Error('Expected argument of type vega.api.v1.SubmitTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vega_api_v1_SubmitTransactionResponse(buffer_arg) {
  return vega_api_v1_core_pb.SubmitTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoreServiceService = exports.CoreServiceService = {
  // Submit transaction
//
// Submit a signed transaction
submitTransaction: {
    path: '/vega.api.v1.CoreService/SubmitTransaction',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.SubmitTransactionRequest,
    responseType: vega_api_v1_core_pb.SubmitTransactionResponse,
    requestSerialize: serialize_vega_api_v1_SubmitTransactionRequest,
    requestDeserialize: deserialize_vega_api_v1_SubmitTransactionRequest,
    responseSerialize: serialize_vega_api_v1_SubmitTransactionResponse,
    responseDeserialize: deserialize_vega_api_v1_SubmitTransactionResponse,
  },
  // Chain event
//
// Propagate a chain event
propagateChainEvent: {
    path: '/vega.api.v1.CoreService/PropagateChainEvent',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.PropagateChainEventRequest,
    responseType: vega_api_v1_core_pb.PropagateChainEventResponse,
    requestSerialize: serialize_vega_api_v1_PropagateChainEventRequest,
    requestDeserialize: deserialize_vega_api_v1_PropagateChainEventRequest,
    responseSerialize: serialize_vega_api_v1_PropagateChainEventResponse,
    responseDeserialize: deserialize_vega_api_v1_PropagateChainEventResponse,
  },
  // Statistics
//
// Get statistics on Vega
statistics: {
    path: '/vega.api.v1.CoreService/Statistics',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.StatisticsRequest,
    responseType: vega_api_v1_core_pb.StatisticsResponse,
    requestSerialize: serialize_vega_api_v1_StatisticsRequest,
    requestDeserialize: deserialize_vega_api_v1_StatisticsRequest,
    responseSerialize: serialize_vega_api_v1_StatisticsResponse,
    responseDeserialize: deserialize_vega_api_v1_StatisticsResponse,
  },
  // Blockchain height
//
// Get the height of the last tendermint block
lastBlockHeight: {
    path: '/vega.api.v1.CoreService/LastBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.LastBlockHeightRequest,
    responseType: vega_api_v1_core_pb.LastBlockHeightResponse,
    requestSerialize: serialize_vega_api_v1_LastBlockHeightRequest,
    requestDeserialize: deserialize_vega_api_v1_LastBlockHeightRequest,
    responseSerialize: serialize_vega_api_v1_LastBlockHeightResponse,
    responseDeserialize: deserialize_vega_api_v1_LastBlockHeightResponse,
  },
  // Vega time
//
// Get current Vega time
getVegaTime: {
    path: '/vega.api.v1.CoreService/GetVegaTime',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.GetVegaTimeRequest,
    responseType: vega_api_v1_core_pb.GetVegaTimeResponse,
    requestSerialize: serialize_vega_api_v1_GetVegaTimeRequest,
    requestDeserialize: deserialize_vega_api_v1_GetVegaTimeRequest,
    responseSerialize: serialize_vega_api_v1_GetVegaTimeResponse,
    responseDeserialize: deserialize_vega_api_v1_GetVegaTimeResponse,
  },
  // Events subscription
//
// Subscribe to a stream of events from the core
observeEventBus: {
    path: '/vega.api.v1.CoreService/ObserveEventBus',
    requestStream: true,
    responseStream: true,
    requestType: vega_api_v1_core_pb.ObserveEventBusRequest,
    responseType: vega_api_v1_core_pb.ObserveEventBusResponse,
    requestSerialize: serialize_vega_api_v1_ObserveEventBusRequest,
    requestDeserialize: deserialize_vega_api_v1_ObserveEventBusRequest,
    responseSerialize: serialize_vega_api_v1_ObserveEventBusResponse,
    responseDeserialize: deserialize_vega_api_v1_ObserveEventBusResponse,
  },
  // Submit raw transaction
//
// Submit a version agnostic signed transaction
submitRawTransaction: {
    path: '/vega.api.v1.CoreService/SubmitRawTransaction',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.SubmitRawTransactionRequest,
    responseType: vega_api_v1_core_pb.SubmitRawTransactionResponse,
    requestSerialize: serialize_vega_api_v1_SubmitRawTransactionRequest,
    requestDeserialize: deserialize_vega_api_v1_SubmitRawTransactionRequest,
    responseSerialize: serialize_vega_api_v1_SubmitRawTransactionResponse,
    responseDeserialize: deserialize_vega_api_v1_SubmitRawTransactionResponse,
  },
  // Check transaction
//
// Check a signed transaction
checkTransaction: {
    path: '/vega.api.v1.CoreService/CheckTransaction',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.CheckTransactionRequest,
    responseType: vega_api_v1_core_pb.CheckTransactionResponse,
    requestSerialize: serialize_vega_api_v1_CheckTransactionRequest,
    requestDeserialize: deserialize_vega_api_v1_CheckTransactionRequest,
    responseSerialize: serialize_vega_api_v1_CheckTransactionResponse,
    responseDeserialize: deserialize_vega_api_v1_CheckTransactionResponse,
  },
  // Check raw transaction
//
// Check a raw signed transaction
checkRawTransaction: {
    path: '/vega.api.v1.CoreService/CheckRawTransaction',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.CheckRawTransactionRequest,
    responseType: vega_api_v1_core_pb.CheckRawTransactionResponse,
    requestSerialize: serialize_vega_api_v1_CheckRawTransactionRequest,
    requestDeserialize: deserialize_vega_api_v1_CheckRawTransactionRequest,
    responseSerialize: serialize_vega_api_v1_CheckRawTransactionResponse,
    responseDeserialize: deserialize_vega_api_v1_CheckRawTransactionResponse,
  },
  // Get Spam statistics
//
// Retrieve the spam statistics for a given party
getSpamStatistics: {
    path: '/vega.api.v1.CoreService/GetSpamStatistics',
    requestStream: false,
    responseStream: false,
    requestType: vega_api_v1_core_pb.GetSpamStatisticsRequest,
    responseType: vega_api_v1_core_pb.GetSpamStatisticsResponse,
    requestSerialize: serialize_vega_api_v1_GetSpamStatisticsRequest,
    requestDeserialize: deserialize_vega_api_v1_GetSpamStatisticsRequest,
    responseSerialize: serialize_vega_api_v1_GetSpamStatisticsResponse,
    responseDeserialize: deserialize_vega_api_v1_GetSpamStatisticsResponse,
  },
};

exports.CoreServiceClient = grpc.makeGenericClientConstructor(CoreServiceService);
