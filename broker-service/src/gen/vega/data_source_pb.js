// @generated by protoc-gen-es v1.2.0 with parameter "target=js"
// @generated from file vega/data_source.proto (package vega, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Condition, Filter } from "./data/v1/spec_pb.js";
import { Signer } from "./data/v1/data_pb.js";

/**
 * DataSourceDefinition represents the top level object that deals with data sources.
 * DataSourceDefinition can be external or internal, with whatever number of data sources are defined
 * for each type in the child objects below.
 *
 * @generated from message vega.DataSourceDefinition
 */
export const DataSourceDefinition = proto3.makeMessageType(
  "vega.DataSourceDefinition",
  () => [
    { no: 1, name: "internal", kind: "message", T: DataSourceDefinitionInternal, oneof: "source_type" },
    { no: 2, name: "external", kind: "message", T: DataSourceDefinitionExternal, oneof: "source_type" },
  ],
);

/**
 * DataSourceSpecConfigurationTime is the internal data source used for emitting timestamps.
 *
 * @generated from message vega.DataSourceSpecConfigurationTime
 */
export const DataSourceSpecConfigurationTime = proto3.makeMessageType(
  "vega.DataSourceSpecConfigurationTime",
  () => [
    { no: 1, name: "conditions", kind: "message", T: Condition, repeated: true },
  ],
);

/**
 * DataSourceDefinitionInternal is the top level object used for all internal data sources.
 * It contains one of any of the defined `SourceType` variants.
 *
 * @generated from message vega.DataSourceDefinitionInternal
 */
export const DataSourceDefinitionInternal = proto3.makeMessageType(
  "vega.DataSourceDefinitionInternal",
  () => [
    { no: 1, name: "time", kind: "message", T: DataSourceSpecConfigurationTime, oneof: "source_type" },
  ],
);

/**
 * DataSourceDefinitionExternal is the top level object used for all external data sources.
 * It contains one of any of the defined `SourceType` variants.
 *
 * @generated from message vega.DataSourceDefinitionExternal
 */
export const DataSourceDefinitionExternal = proto3.makeMessageType(
  "vega.DataSourceDefinitionExternal",
  () => [
    { no: 1, name: "oracle", kind: "message", T: DataSourceSpecConfiguration, oneof: "source_type" },
  ],
);

/**
 * All types of external data sources use the same configuration set for meeting requirements
 * in order for the data to be useful for Vega - valid signatures and matching filters.
 *
 * @generated from message vega.DataSourceSpecConfiguration
 */
export const DataSourceSpecConfiguration = proto3.makeMessageType(
  "vega.DataSourceSpecConfiguration",
  () => [
    { no: 1, name: "signers", kind: "message", T: Signer, repeated: true },
    { no: 2, name: "filters", kind: "message", T: Filter, repeated: true },
  ],
);

/**
 * A data source spec describes the data source base that a product (or a risk model)
 * wants to get from the data source engine.
 * This message contains additional information used by the API.
 *
 * @generated from message vega.DataSourceSpec
 */
export const DataSourceSpec = proto3.makeMessageType(
  "vega.DataSourceSpec",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "updated_at", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "data", kind: "message", T: DataSourceDefinition },
    { no: 5, name: "status", kind: "enum", T: proto3.getEnumType(DataSourceSpec_Status) },
  ],
);

/**
 * Status describe the status of the data source spec
 *
 * @generated from enum vega.DataSourceSpec.Status
 */
export const DataSourceSpec_Status = proto3.makeEnum(
  "vega.DataSourceSpec.Status",
  [
    {no: 0, name: "STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "STATUS_ACTIVE", localName: "ACTIVE"},
    {no: 2, name: "STATUS_DEACTIVATED", localName: "DEACTIVATED"},
  ],
);

/**
 * @generated from message vega.ExternalDataSourceSpec
 */
export const ExternalDataSourceSpec = proto3.makeMessageType(
  "vega.ExternalDataSourceSpec",
  () => [
    { no: 1, name: "spec", kind: "message", T: DataSourceSpec },
  ],
);

