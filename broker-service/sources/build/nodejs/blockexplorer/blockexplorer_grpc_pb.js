// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var blockexplorer_blockexplorer_pb = require('../blockexplorer/blockexplorer_pb.js');
var vega_commands_v1_transaction_pb = require('../vega/commands/v1/transaction_pb.js');
var vega_commands_v1_signature_pb = require('../vega/commands/v1/signature_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_blockexplorer_api_v1_GetTransactionRequest(arg) {
  if (!(arg instanceof blockexplorer_blockexplorer_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type blockexplorer.api.v1.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blockexplorer_api_v1_GetTransactionRequest(buffer_arg) {
  return blockexplorer_blockexplorer_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockexplorer_api_v1_GetTransactionResponse(arg) {
  if (!(arg instanceof blockexplorer_blockexplorer_pb.GetTransactionResponse)) {
    throw new Error('Expected argument of type blockexplorer.api.v1.GetTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blockexplorer_api_v1_GetTransactionResponse(buffer_arg) {
  return blockexplorer_blockexplorer_pb.GetTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockexplorer_api_v1_InfoRequest(arg) {
  if (!(arg instanceof blockexplorer_blockexplorer_pb.InfoRequest)) {
    throw new Error('Expected argument of type blockexplorer.api.v1.InfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blockexplorer_api_v1_InfoRequest(buffer_arg) {
  return blockexplorer_blockexplorer_pb.InfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockexplorer_api_v1_InfoResponse(arg) {
  if (!(arg instanceof blockexplorer_blockexplorer_pb.InfoResponse)) {
    throw new Error('Expected argument of type blockexplorer.api.v1.InfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blockexplorer_api_v1_InfoResponse(buffer_arg) {
  return blockexplorer_blockexplorer_pb.InfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockexplorer_api_v1_ListTransactionsRequest(arg) {
  if (!(arg instanceof blockexplorer_blockexplorer_pb.ListTransactionsRequest)) {
    throw new Error('Expected argument of type blockexplorer.api.v1.ListTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blockexplorer_api_v1_ListTransactionsRequest(buffer_arg) {
  return blockexplorer_blockexplorer_pb.ListTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blockexplorer_api_v1_ListTransactionsResponse(arg) {
  if (!(arg instanceof blockexplorer_blockexplorer_pb.ListTransactionsResponse)) {
    throw new Error('Expected argument of type blockexplorer.api.v1.ListTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blockexplorer_api_v1_ListTransactionsResponse(buffer_arg) {
  return blockexplorer_blockexplorer_pb.ListTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlockExplorerServiceService = exports.BlockExplorerServiceService = {
  // Get transaction
//
// Get a transaction from the Vega blockchain
getTransaction: {
    path: '/blockexplorer.api.v1.BlockExplorerService/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: blockexplorer_blockexplorer_pb.GetTransactionRequest,
    responseType: blockexplorer_blockexplorer_pb.GetTransactionResponse,
    requestSerialize: serialize_blockexplorer_api_v1_GetTransactionRequest,
    requestDeserialize: deserialize_blockexplorer_api_v1_GetTransactionRequest,
    responseSerialize: serialize_blockexplorer_api_v1_GetTransactionResponse,
    responseDeserialize: deserialize_blockexplorer_api_v1_GetTransactionResponse,
  },
  // List transactions
//
// List transactions from the Vega blockchain
listTransactions: {
    path: '/blockexplorer.api.v1.BlockExplorerService/ListTransactions',
    requestStream: false,
    responseStream: false,
    requestType: blockexplorer_blockexplorer_pb.ListTransactionsRequest,
    responseType: blockexplorer_blockexplorer_pb.ListTransactionsResponse,
    requestSerialize: serialize_blockexplorer_api_v1_ListTransactionsRequest,
    requestDeserialize: deserialize_blockexplorer_api_v1_ListTransactionsRequest,
    responseSerialize: serialize_blockexplorer_api_v1_ListTransactionsResponse,
    responseDeserialize: deserialize_blockexplorer_api_v1_ListTransactionsResponse,
  },
  // Info
//
// Retrieves information about the block explorer.
// Response contains a semver formatted version of the data node and the commit hash, from which the block explorer was built,
info: {
    path: '/blockexplorer.api.v1.BlockExplorerService/Info',
    requestStream: false,
    responseStream: false,
    requestType: blockexplorer_blockexplorer_pb.InfoRequest,
    responseType: blockexplorer_blockexplorer_pb.InfoResponse,
    requestSerialize: serialize_blockexplorer_api_v1_InfoRequest,
    requestDeserialize: deserialize_blockexplorer_api_v1_InfoRequest,
    responseSerialize: serialize_blockexplorer_api_v1_InfoResponse,
    responseDeserialize: deserialize_blockexplorer_api_v1_InfoResponse,
  },
};

exports.BlockExplorerServiceClient = grpc.makeGenericClientConstructor(BlockExplorerServiceService);
