import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryStateRequest {
  chainDenom: string;
}
export interface QueryStateResponse {
  coin: Coin;
  operator: string;
  decimal: number;
  lastBlockHeight: Long;
  appHash: Uint8Array;
  chainId: string;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryStateRequest(): QueryStateRequest {
  return {
    chainDenom: ""
  };
}

export const QueryStateRequest = {
  encode(message: QueryStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainDenom !== "") {
      writer.uint32(10).string(message.chainDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStateRequest {
    return {
      chainDenom: isSet(object.chainDenom) ? String(object.chainDenom) : ""
    };
  },

  toJSON(message: QueryStateRequest): unknown {
    const obj: any = {};
    message.chainDenom !== undefined && (obj.chainDenom = message.chainDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStateRequest>): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    message.chainDenom = object.chainDenom ?? "";
    return message;
  }

};

function createBaseQueryStateResponse(): QueryStateResponse {
  return {
    coin: undefined,
    operator: "",
    decimal: 0,
    lastBlockHeight: Long.ZERO,
    appHash: new Uint8Array(),
    chainId: ""
  };
}

export const QueryStateResponse = {
  encode(message: QueryStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }

    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }

    if (message.decimal !== 0) {
      writer.uint32(24).uint32(message.decimal);
    }

    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(32).int64(message.lastBlockHeight);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(42).bytes(message.appHash);
    }

    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.operator = reader.string();
          break;

        case 3:
          message.decimal = reader.uint32();
          break;

        case 4:
          message.lastBlockHeight = (reader.int64() as Long);
          break;

        case 5:
          message.appHash = reader.bytes();
          break;

        case 6:
          message.chainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStateResponse {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      operator: isSet(object.operator) ? String(object.operator) : "",
      decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
      lastBlockHeight: isSet(object.lastBlockHeight) ? Long.fromString(object.lastBlockHeight) : Long.ZERO,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },

  toJSON(message: QueryStateResponse): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.operator !== undefined && (obj.operator = message.operator);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || Long.ZERO).toString());
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStateResponse>): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.operator = object.operator ?? "";
    message.decimal = object.decimal ?? 0;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.appHash = object.appHash ?? new Uint8Array();
    message.chainId = object.chainId ?? "";
    return message;
  }

};