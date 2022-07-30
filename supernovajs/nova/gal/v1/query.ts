import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}

/** QuerySharesRequest defines request form to query balance of snToken with address. */
export interface QueryCacheDepositAmountRequest {
  denom: string;
  address: string;
}

/** QuerySharesResponse defines response of QueryBalanceRequest. */
export interface QueryCachedDepositAmountResponse {
  address: string;
  amount: Coin;
}
export interface QueryAllSharesRequest {
  address: string;
}
export interface QueryDepositHistoryRequest {
  denom: string;
  address: string;
}
export interface QueryDepositHistoryResponse {
  address: string;
  amount: Coin[];
}
export interface QueryUndelegateHistoryRequest {
  denom: string;
  address: string;
}
export interface QueryUndelegateHistoryResponse {
  address: string;
  amount: Coin[];
}
export interface QueryWithdrawHistoryRequest {
  denom: string;
  address: string;
}
export interface QueryWithdrawHistoryResponse {
  address: string;
  amount: Coin[];
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

function createBaseQueryCacheDepositAmountRequest(): QueryCacheDepositAmountRequest {
  return {
    denom: "",
    address: ""
  };
}

export const QueryCacheDepositAmountRequest = {
  encode(message: QueryCacheDepositAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCacheDepositAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCacheDepositAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCacheDepositAmountRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryCacheDepositAmountRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCacheDepositAmountRequest>): QueryCacheDepositAmountRequest {
    const message = createBaseQueryCacheDepositAmountRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryCachedDepositAmountResponse(): QueryCachedDepositAmountResponse {
  return {
    address: "",
    amount: undefined
  };
}

export const QueryCachedDepositAmountResponse = {
  encode(message: QueryCachedDepositAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCachedDepositAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCachedDepositAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCachedDepositAmountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: QueryCachedDepositAmountResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCachedDepositAmountResponse>): QueryCachedDepositAmountResponse {
    const message = createBaseQueryCachedDepositAmountResponse();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseQueryAllSharesRequest(): QueryAllSharesRequest {
  return {
    address: ""
  };
}

export const QueryAllSharesRequest = {
  encode(message: QueryAllSharesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSharesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSharesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllSharesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAllSharesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllSharesRequest>): QueryAllSharesRequest {
    const message = createBaseQueryAllSharesRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryDepositHistoryRequest(): QueryDepositHistoryRequest {
  return {
    denom: "",
    address: ""
  };
}

export const QueryDepositHistoryRequest = {
  encode(message: QueryDepositHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositHistoryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositHistoryRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryDepositHistoryRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositHistoryRequest>): QueryDepositHistoryRequest {
    const message = createBaseQueryDepositHistoryRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryDepositHistoryResponse(): QueryDepositHistoryResponse {
  return {
    address: "",
    amount: []
  };
}

export const QueryDepositHistoryResponse = {
  encode(message: QueryDepositHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositHistoryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositHistoryResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryDepositHistoryResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositHistoryResponse>): QueryDepositHistoryResponse {
    const message = createBaseQueryDepositHistoryResponse();
    message.address = object.address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryUndelegateHistoryRequest(): QueryUndelegateHistoryRequest {
  return {
    denom: "",
    address: ""
  };
}

export const QueryUndelegateHistoryRequest = {
  encode(message: QueryUndelegateHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegateHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUndelegateHistoryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUndelegateHistoryRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryUndelegateHistoryRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryUndelegateHistoryRequest>): QueryUndelegateHistoryRequest {
    const message = createBaseQueryUndelegateHistoryRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUndelegateHistoryResponse(): QueryUndelegateHistoryResponse {
  return {
    address: "",
    amount: []
  };
}

export const QueryUndelegateHistoryResponse = {
  encode(message: QueryUndelegateHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegateHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUndelegateHistoryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUndelegateHistoryResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryUndelegateHistoryResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryUndelegateHistoryResponse>): QueryUndelegateHistoryResponse {
    const message = createBaseQueryUndelegateHistoryResponse();
    message.address = object.address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryWithdrawHistoryRequest(): QueryWithdrawHistoryRequest {
  return {
    denom: "",
    address: ""
  };
}

export const QueryWithdrawHistoryRequest = {
  encode(message: QueryWithdrawHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawHistoryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryWithdrawHistoryRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryWithdrawHistoryRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryWithdrawHistoryRequest>): QueryWithdrawHistoryRequest {
    const message = createBaseQueryWithdrawHistoryRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryWithdrawHistoryResponse(): QueryWithdrawHistoryResponse {
  return {
    address: "",
    amount: []
  };
}

export const QueryWithdrawHistoryResponse = {
  encode(message: QueryWithdrawHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawHistoryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryWithdrawHistoryResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryWithdrawHistoryResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryWithdrawHistoryResponse>): QueryWithdrawHistoryResponse {
    const message = createBaseQueryWithdrawHistoryResponse();
    message.address = object.address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};