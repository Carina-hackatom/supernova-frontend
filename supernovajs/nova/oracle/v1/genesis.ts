import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface GenesisState {
  /** params defines all the parameters of module. */
  params: Params;

  /** states is an amount of coins on the host chain. */
  states: ChainInfo[];
}
export interface ChainInfo {
  /** coin refers to the sum of owned, staked and claimable quantity of the coin */
  coin: Coin;

  /** decimal of the native currency in host chain. */
  decimal: number;

  /** operator_address is an oracle operator's address */
  operatorAddress: string;

  /** last_block_height is the block height observed by the operator on the host chain. */
  lastBlockHeight: Long;

  /** app_hash of the block fetched by oracle from host chain */
  appHash: Uint8Array;

  /** chain_id of the host chain */
  chainId: string;

  /** block_proposer of the block fetched by oracle from the host chain */
  blockProposer: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    states: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.states) {
      ChainInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.states.push(ChainInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      states: Array.isArray(object?.states) ? object.states.map((e: any) => ChainInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.states) {
      obj.states = message.states.map(e => e ? ChainInfo.toJSON(e) : undefined);
    } else {
      obj.states = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.states = object.states?.map(e => ChainInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseChainInfo(): ChainInfo {
  return {
    coin: undefined,
    decimal: 0,
    operatorAddress: "",
    lastBlockHeight: Long.ZERO,
    appHash: new Uint8Array(),
    chainId: "",
    blockProposer: ""
  };
}

export const ChainInfo = {
  encode(message: ChainInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }

    if (message.decimal !== 0) {
      writer.uint32(16).uint32(message.decimal);
    }

    if (message.operatorAddress !== "") {
      writer.uint32(26).string(message.operatorAddress);
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

    if (message.blockProposer !== "") {
      writer.uint32(58).string(message.blockProposer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainInfo();

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
          message.operatorAddress = reader.string();
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

        case 7:
          message.blockProposer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ChainInfo {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      decimal: isSet(object.decimal) ? Number(object.decimal) : 0,
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      lastBlockHeight: isSet(object.lastBlockHeight) ? Long.fromString(object.lastBlockHeight) : Long.ZERO,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      blockProposer: isSet(object.blockProposer) ? String(object.blockProposer) : ""
    };
  },

  toJSON(message: ChainInfo): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.decimal !== undefined && (obj.decimal = Math.round(message.decimal));
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || Long.ZERO).toString());
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.blockProposer !== undefined && (obj.blockProposer = message.blockProposer);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainInfo>): ChainInfo {
    const message = createBaseChainInfo();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.decimal = object.decimal ?? 0;
    message.operatorAddress = object.operatorAddress ?? "";
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.appHash = object.appHash ?? new Uint8Array();
    message.chainId = object.chainId ?? "";
    message.blockProposer = object.blockProposer ?? "";
    return message;
  }

};