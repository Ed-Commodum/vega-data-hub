// @generated by protoc-gen-es v1.2.0 with parameter "target=js"
// @generated from file vega/commands/v1/signature.proto (package vega.commands.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * A signature to authenticate a transaction and to be verified by the Vega
 * network.
 *
 * @generated from message vega.commands.v1.Signature
 */
export const Signature = proto3.makeMessageType(
  "vega.commands.v1.Signature",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "algo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);
