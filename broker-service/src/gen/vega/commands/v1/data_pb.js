// @generated by protoc-gen-es v1.2.0 with parameter "target=js"
// @generated from file vega/commands/v1/data.proto (package vega.commands.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Command to submit new Oracle data from third party providers
 *
 * @generated from message vega.commands.v1.OracleDataSubmission
 */
export const OracleDataSubmission = proto3.makeMessageType(
  "vega.commands.v1.OracleDataSubmission",
  () => [
    { no: 1, name: "source", kind: "enum", T: proto3.getEnumType(OracleDataSubmission_OracleSource) },
    { no: 2, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * The supported oracle sources
 *
 * @generated from enum vega.commands.v1.OracleDataSubmission.OracleSource
 */
export const OracleDataSubmission_OracleSource = proto3.makeEnum(
  "vega.commands.v1.OracleDataSubmission.OracleSource",
  [
    {no: 0, name: "ORACLE_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ORACLE_SOURCE_OPEN_ORACLE", localName: "OPEN_ORACLE"},
    {no: 2, name: "ORACLE_SOURCE_JSON", localName: "JSON"},
  ],
);

