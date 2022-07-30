import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface MsgUpdateChainState {
  /** coin refers to the sum of owned, staked and claimable quantity of the coin */
  coin: Coin;

  /** decimal of the native currency in host chain. */
  decimal: number;

  /** address of the oracle */
  operator: string;

  /** block_height of the block fetched by oracle from host_chain */
  blockHeight: Long;

  /** app_hash of the block fetched by oracle from host chain */
  appHash: Uint8Array;

  /** chain_id of the host chain */
  chainId: string;
}
export interface MsgUpdateChainStateResponse {
  success: boolean;
}

function createBaseMsgUpdateChainState(): MsgUpdateChainState {
  return {
    coin: undefined,
    decimal: 0,
    operator: "",
    blockHeight: Long.ZERO,
    appHash: new Uint8Array(),
    chainId: ""
  };
}

export const MsgUpdateChainState = {
  encode(message: MsgUpdateChainState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }

    if (message.decimal !== 0) {
      writer.uint32(16).uint32(message.decimal);
    }

    if (message.operator !== "") {
      writer.uint32(26).string(message.operator);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(32).int64(message.blockHeight);
    }

    if (message.appHash.length !== 0) {
      writer.uint32(42).bytes(message.appHash);
    }

    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChainState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.decimal = reader.uint32();
          break;

        case 3:
          message.operator = reader.string();
          break;

        case 4:
          message.blockHeight = (reader.int64() as Long);
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

  fromJSON(object: any): MsgUpdateChainState {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
      operator: isSet(object.operator) ? String(object.operator) : "",
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.ZERO,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },

  toJSON(message: MsgUpdateChainState): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.operator !== undefined && (obj.operator = message.operator);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateChainState>): MsgUpdateChainState {
    const message = createBaseMsgUpdateChainState();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.decimal = object.decimal ?? 0;
    message.operator = object.operator ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.appHash = object.appHash ?? new Uint8Array();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseMsgUpdateChainStateResponse(): MsgUpdateChainStateResponse {
  return {
    success: false
  };
}

export const MsgUpdateChainStateResponse = {
  encode(message: MsgUpdateChainStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChainStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateChainStateResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false
    };
  },

  toJSON(message: MsgUpdateChainStateResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateChainStateResponse>): MsgUpdateChainStateResponse {
    const message = createBaseMsgUpdateChainStateResponse();
    message.success = object.success ?? false;
    return message;
  }

};