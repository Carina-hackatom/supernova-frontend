import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, isObject } from "@osmonauts/helpers";
export interface Params_WhiteListedTokenDenomsEntry {
  key: string;
  value: string;
}

/** Params defines the parameters for the gal module. */
export interface Params {
  /** white-listed tokens in nova */
  whiteListedTokenDenoms: {
    [key: string]: string;
  };

  /** expected blocks per year */
  blocksPerYear: Long;
}

function createBaseParams_WhiteListedTokenDenomsEntry(): Params_WhiteListedTokenDenomsEntry {
  return {
    key: "",
    value: ""
  };
}

export const Params_WhiteListedTokenDenomsEntry = {
  encode(message: Params_WhiteListedTokenDenomsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params_WhiteListedTokenDenomsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams_WhiteListedTokenDenomsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params_WhiteListedTokenDenomsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Params_WhiteListedTokenDenomsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Params_WhiteListedTokenDenomsEntry>): Params_WhiteListedTokenDenomsEntry {
    const message = createBaseParams_WhiteListedTokenDenomsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    whiteListedTokenDenoms: {},
    blocksPerYear: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.whiteListedTokenDenoms).forEach(([key, value]) => {
      Params_WhiteListedTokenDenomsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });

    if (!message.blocksPerYear.isZero()) {
      writer.uint32(16).uint64(message.blocksPerYear);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          const entry1 = Params_WhiteListedTokenDenomsEntry.decode(reader, reader.uint32());

          if (entry1.value !== undefined) {
            message.whiteListedTokenDenoms[entry1.key] = entry1.value;
          }

          break;

        case 2:
          message.blocksPerYear = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      whiteListedTokenDenoms: isObject(object.whiteListedTokenDenoms) ? Object.entries(object.whiteListedTokenDenoms).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      blocksPerYear: isSet(object.blocksPerYear) ? Long.fromString(object.blocksPerYear) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    obj.whiteListedTokenDenoms = {};

    if (message.whiteListedTokenDenoms) {
      Object.entries(message.whiteListedTokenDenoms).forEach(([k, v]) => {
        obj.whiteListedTokenDenoms[k] = v;
      });
    }

    message.blocksPerYear !== undefined && (obj.blocksPerYear = (message.blocksPerYear || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.whiteListedTokenDenoms = Object.entries(object.whiteListedTokenDenoms ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  }

};