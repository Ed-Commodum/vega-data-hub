// @generated by protoc-gen-es v1.2.0 with parameter "target=js"
// @generated from file blockexplorer/blockexplorer.proto (package blockexplorer.api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { InputData } from "../vega/commands/v1/transaction_pb.js";
import { Signature } from "../vega/commands/v1/signature_pb.js";

/**
 * node info
 *
 * @generated from message blockexplorer.api.v1.InfoRequest
 */
export const InfoRequest = proto3.makeMessageType(
  "blockexplorer.api.v1.InfoRequest",
  [],
);

/**
 * @generated from message blockexplorer.api.v1.InfoResponse
 */
export const InfoResponse = proto3.makeMessageType(
  "blockexplorer.api.v1.InfoResponse",
  () => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "commit_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message blockexplorer.api.v1.GetTransactionRequest
 */
export const GetTransactionRequest = proto3.makeMessageType(
  "blockexplorer.api.v1.GetTransactionRequest",
  () => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message blockexplorer.api.v1.GetTransactionResponse
 */
export const GetTransactionResponse = proto3.makeMessageType(
  "blockexplorer.api.v1.GetTransactionResponse",
  () => [
    { no: 1, name: "transaction", kind: "message", T: Transaction },
  ],
);

/**
 * @generated from message blockexplorer.api.v1.ListTransactionsRequest
 */
export const ListTransactionsRequest = proto3.makeMessageType(
  "blockexplorer.api.v1.ListTransactionsRequest",
  () => [
    { no: 1, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "before", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "after", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "filters", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message blockexplorer.api.v1.ListTransactionsResponse
 */
export const ListTransactionsResponse = proto3.makeMessageType(
  "blockexplorer.api.v1.ListTransactionsResponse",
  () => [
    { no: 3, name: "transactions", kind: "message", T: Transaction, repeated: true },
  ],
);

/**
 * @generated from message blockexplorer.api.v1.Transaction
 */
export const Transaction = proto3.makeMessageType(
  "blockexplorer.api.v1.Transaction",
  () => [
    { no: 1, name: "block", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "submitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "code", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "cursor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "command", kind: "message", T: InputData },
    { no: 9, name: "signature", kind: "message", T: Signature },
    { no: 10, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

