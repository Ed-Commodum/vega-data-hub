// source: vega/data/v1/spec.proto
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

goog.exportSymbol('proto.vega.data.v1.Condition', null, global);
goog.exportSymbol('proto.vega.data.v1.Condition.Operator', null, global);
goog.exportSymbol('proto.vega.data.v1.Filter', null, global);
goog.exportSymbol('proto.vega.data.v1.PropertyKey', null, global);
goog.exportSymbol('proto.vega.data.v1.PropertyKey.Type', null, global);
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
proto.vega.data.v1.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.data.v1.Filter.repeatedFields_, null);
};
goog.inherits(proto.vega.data.v1.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.data.v1.Filter.displayName = 'proto.vega.data.v1.Filter';
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
proto.vega.data.v1.PropertyKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.data.v1.PropertyKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.data.v1.PropertyKey.displayName = 'proto.vega.data.v1.PropertyKey';
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
proto.vega.data.v1.Condition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.data.v1.Condition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.data.v1.Condition.displayName = 'proto.vega.data.v1.Condition';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.data.v1.Filter.repeatedFields_ = [2];



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
proto.vega.data.v1.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.data.v1.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.data.v1.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.data.v1.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = msg.getKey()) && proto.vega.data.v1.PropertyKey.toObject(includeInstance, f),
    conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.vega.data.v1.Condition.toObject, includeInstance)
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
 * @return {!proto.vega.data.v1.Filter}
 */
proto.vega.data.v1.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.data.v1.Filter;
  return proto.vega.data.v1.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.data.v1.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.data.v1.Filter}
 */
proto.vega.data.v1.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.data.v1.PropertyKey;
      reader.readMessage(value,proto.vega.data.v1.PropertyKey.deserializeBinaryFromReader);
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.vega.data.v1.Condition;
      reader.readMessage(value,proto.vega.data.v1.Condition.deserializeBinaryFromReader);
      msg.addConditions(value);
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
proto.vega.data.v1.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.data.v1.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.data.v1.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.data.v1.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.data.v1.PropertyKey.serializeBinaryToWriter
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.data.v1.Condition.serializeBinaryToWriter
    );
  }
};


/**
 * optional PropertyKey key = 1;
 * @return {?proto.vega.data.v1.PropertyKey}
 */
proto.vega.data.v1.Filter.prototype.getKey = function() {
  return /** @type{?proto.vega.data.v1.PropertyKey} */ (
    jspb.Message.getWrapperField(this, proto.vega.data.v1.PropertyKey, 1));
};


/**
 * @param {?proto.vega.data.v1.PropertyKey|undefined} value
 * @return {!proto.vega.data.v1.Filter} returns this
*/
proto.vega.data.v1.Filter.prototype.setKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.data.v1.Filter} returns this
 */
proto.vega.data.v1.Filter.prototype.clearKey = function() {
  return this.setKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.data.v1.Filter.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Condition conditions = 2;
 * @return {!Array<!proto.vega.data.v1.Condition>}
 */
proto.vega.data.v1.Filter.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.vega.data.v1.Condition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.data.v1.Condition, 2));
};


/**
 * @param {!Array<!proto.vega.data.v1.Condition>} value
 * @return {!proto.vega.data.v1.Filter} returns this
*/
proto.vega.data.v1.Filter.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.data.v1.Condition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.data.v1.Condition}
 */
proto.vega.data.v1.Filter.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.data.v1.Condition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.data.v1.Filter} returns this
 */
proto.vega.data.v1.Filter.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
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
proto.vega.data.v1.PropertyKey.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.data.v1.PropertyKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.data.v1.PropertyKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.data.v1.PropertyKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numberDecimalPlaces: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.vega.data.v1.PropertyKey}
 */
proto.vega.data.v1.PropertyKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.data.v1.PropertyKey;
  return proto.vega.data.v1.PropertyKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.data.v1.PropertyKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.data.v1.PropertyKey}
 */
proto.vega.data.v1.PropertyKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.data.v1.PropertyKey.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumberDecimalPlaces(value);
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
proto.vega.data.v1.PropertyKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.data.v1.PropertyKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.data.v1.PropertyKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.data.v1.PropertyKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.data.v1.PropertyKey.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_EMPTY: 1,
  TYPE_INTEGER: 2,
  TYPE_STRING: 3,
  TYPE_BOOLEAN: 4,
  TYPE_DECIMAL: 5,
  TYPE_TIMESTAMP: 6
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.vega.data.v1.PropertyKey.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.data.v1.PropertyKey} returns this
 */
proto.vega.data.v1.PropertyKey.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.vega.data.v1.PropertyKey.Type}
 */
proto.vega.data.v1.PropertyKey.prototype.getType = function() {
  return /** @type {!proto.vega.data.v1.PropertyKey.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.data.v1.PropertyKey.Type} value
 * @return {!proto.vega.data.v1.PropertyKey} returns this
 */
proto.vega.data.v1.PropertyKey.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 number_decimal_places = 3;
 * @return {number}
 */
proto.vega.data.v1.PropertyKey.prototype.getNumberDecimalPlaces = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.data.v1.PropertyKey} returns this
 */
proto.vega.data.v1.PropertyKey.prototype.setNumberDecimalPlaces = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.data.v1.PropertyKey} returns this
 */
proto.vega.data.v1.PropertyKey.prototype.clearNumberDecimalPlaces = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.data.v1.PropertyKey.prototype.hasNumberDecimalPlaces = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.vega.data.v1.Condition.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.data.v1.Condition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.data.v1.Condition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.data.v1.Condition.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.vega.data.v1.Condition}
 */
proto.vega.data.v1.Condition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.data.v1.Condition;
  return proto.vega.data.v1.Condition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.data.v1.Condition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.data.v1.Condition}
 */
proto.vega.data.v1.Condition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.data.v1.Condition.Operator} */ (reader.readEnum());
      msg.setOperator(value);
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
proto.vega.data.v1.Condition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.data.v1.Condition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.data.v1.Condition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.data.v1.Condition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.vega.data.v1.Condition.Operator = {
  OPERATOR_UNSPECIFIED: 0,
  OPERATOR_EQUALS: 1,
  OPERATOR_GREATER_THAN: 2,
  OPERATOR_GREATER_THAN_OR_EQUAL: 3,
  OPERATOR_LESS_THAN: 4,
  OPERATOR_LESS_THAN_OR_EQUAL: 5
};

/**
 * optional Operator operator = 1;
 * @return {!proto.vega.data.v1.Condition.Operator}
 */
proto.vega.data.v1.Condition.prototype.getOperator = function() {
  return /** @type {!proto.vega.data.v1.Condition.Operator} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.data.v1.Condition.Operator} value
 * @return {!proto.vega.data.v1.Condition} returns this
 */
proto.vega.data.v1.Condition.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.vega.data.v1.Condition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.data.v1.Condition} returns this
 */
proto.vega.data.v1.Condition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.vega.data.v1);
