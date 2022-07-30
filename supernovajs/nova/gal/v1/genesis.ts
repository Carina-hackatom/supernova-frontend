import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";

/** GenesisState defines the gal module's genesis state. */
export interface GenesisState {
  params: Params;
  depositAccounts: DepositAccount[];
  withdrawInfo: WithdrawInfo[];
}

/** DepositAccount defines snToken's total share and deposit information. */
export interface DepositAccount {
  denom: string;
  depositInfos: DepositInfo[];
  totalShare: Long;
  lastBlockUpdate: Long;
}

/** DepositInfo defines user address, share and debt. */
export interface DepositInfo {
  address: string;
  share: Long;
  debt: Long;
}
export interface DepositRecord {
  zoneId: string;
  address: string;
  records: DepositRecordContent[];
}
export interface DepositRecordContent {
  amount: Coin;
  blockHeight: Long;
  state: Long;
}
export interface WithdrawInfo {
  address: string;
  denom: string;
  amount: Long;
  completionTime: Timestamp;
}
export interface UndelegateRecord {
  zoneId: string;
  delegator: string;
  amount: Coin;
  state: Long;
}
export interface WithdrawRecord {
  zoneId: string;
  withdrawer: string;
  recipient: string;
  amount: Coin;
  state: Long;
  completionTime: Timestamp;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    depositAccounts: [],
    withdrawInfo: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.depositAccounts) {
      DepositAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.withdrawInfo) {
      WithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.depositAccounts.push(DepositAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.withdrawInfo.push(WithdrawInfo.decode(reader, reader.uint32()));
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
      depositAccounts: Array.isArray(object?.depositAccounts) ? object.depositAccounts.map((e: any) => DepositAccount.fromJSON(e)) : [],
      withdrawInfo: Array.isArray(object?.withdrawInfo) ? object.withdrawInfo.map((e: any) => WithdrawInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.depositAccounts) {
      obj.depositAccounts = message.depositAccounts.map(e => e ? DepositAccount.toJSON(e) : undefined);
    } else {
      obj.depositAccounts = [];
    }

    if (message.withdrawInfo) {
      obj.withdrawInfo = message.withdrawInfo.map(e => e ? WithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.withdrawInfo = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.depositAccounts = object.depositAccounts?.map(e => DepositAccount.fromPartial(e)) || [];
    message.withdrawInfo = object.withdrawInfo?.map(e => WithdrawInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDepositAccount(): DepositAccount {
  return {
    denom: "",
    depositInfos: [],
    totalShare: Long.ZERO,
    lastBlockUpdate: Long.ZERO
  };
}

export const DepositAccount = {
  encode(message: DepositAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.depositInfos) {
      DepositInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.totalShare.isZero()) {
      writer.uint32(24).int64(message.totalShare);
    }

    if (!message.lastBlockUpdate.isZero()) {
      writer.uint32(32).int64(message.lastBlockUpdate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.depositInfos.push(DepositInfo.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalShare = (reader.int64() as Long);
          break;

        case 4:
          message.lastBlockUpdate = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositAccount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      depositInfos: Array.isArray(object?.depositInfos) ? object.depositInfos.map((e: any) => DepositInfo.fromJSON(e)) : [],
      totalShare: isSet(object.totalShare) ? Long.fromString(object.totalShare) : Long.ZERO,
      lastBlockUpdate: isSet(object.lastBlockUpdate) ? Long.fromString(object.lastBlockUpdate) : Long.ZERO
    };
  },

  toJSON(message: DepositAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);

    if (message.depositInfos) {
      obj.depositInfos = message.depositInfos.map(e => e ? DepositInfo.toJSON(e) : undefined);
    } else {
      obj.depositInfos = [];
    }

    message.totalShare !== undefined && (obj.totalShare = (message.totalShare || Long.ZERO).toString());
    message.lastBlockUpdate !== undefined && (obj.lastBlockUpdate = (message.lastBlockUpdate || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DepositAccount>): DepositAccount {
    const message = createBaseDepositAccount();
    message.denom = object.denom ?? "";
    message.depositInfos = object.depositInfos?.map(e => DepositInfo.fromPartial(e)) || [];
    message.totalShare = object.totalShare !== undefined && object.totalShare !== null ? Long.fromValue(object.totalShare) : Long.ZERO;
    message.lastBlockUpdate = object.lastBlockUpdate !== undefined && object.lastBlockUpdate !== null ? Long.fromValue(object.lastBlockUpdate) : Long.ZERO;
    return message;
  }

};

function createBaseDepositInfo(): DepositInfo {
  return {
    address: "",
    share: Long.ZERO,
    debt: Long.ZERO
  };
}

export const DepositInfo = {
  encode(message: DepositInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.share.isZero()) {
      writer.uint32(16).int64(message.share);
    }

    if (!message.debt.isZero()) {
      writer.uint32(24).int64(message.debt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.share = (reader.int64() as Long);
          break;

        case 3:
          message.debt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      share: isSet(object.share) ? Long.fromString(object.share) : Long.ZERO,
      debt: isSet(object.debt) ? Long.fromString(object.debt) : Long.ZERO
    };
  },

  toJSON(message: DepositInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.share !== undefined && (obj.share = (message.share || Long.ZERO).toString());
    message.debt !== undefined && (obj.debt = (message.debt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DepositInfo>): DepositInfo {
    const message = createBaseDepositInfo();
    message.address = object.address ?? "";
    message.share = object.share !== undefined && object.share !== null ? Long.fromValue(object.share) : Long.ZERO;
    message.debt = object.debt !== undefined && object.debt !== null ? Long.fromValue(object.debt) : Long.ZERO;
    return message;
  }

};

function createBaseDepositRecord(): DepositRecord {
  return {
    zoneId: "",
    address: "",
    records: []
  };
}

export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    for (const v of message.records) {
      DepositRecordContent.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.records.push(DepositRecordContent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DepositRecordContent.fromJSON(e)) : []
    };
  },

  toJSON(message: DepositRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);

    if (message.records) {
      obj.records = message.records.map(e => e ? DepositRecordContent.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    message.records = object.records?.map(e => DepositRecordContent.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDepositRecordContent(): DepositRecordContent {
  return {
    amount: undefined,
    blockHeight: Long.ZERO,
    state: Long.ZERO
  };
}

export const DepositRecordContent = {
  encode(message: DepositRecordContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }

    if (!message.state.isZero()) {
      writer.uint32(24).int64(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecordContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecordContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 3:
          message.state = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositRecordContent {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.ZERO,
      state: isSet(object.state) ? Long.fromString(object.state) : Long.ZERO
    };
  },

  toJSON(message: DepositRecordContent): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.state !== undefined && (obj.state = (message.state || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<DepositRecordContent>): DepositRecordContent {
    const message = createBaseDepositRecordContent();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.state = object.state !== undefined && object.state !== null ? Long.fromValue(object.state) : Long.ZERO;
    return message;
  }

};

function createBaseWithdrawInfo(): WithdrawInfo {
  return {
    address: "",
    denom: "",
    amount: Long.ZERO,
    completionTime: undefined
  };
}

export const WithdrawInfo = {
  encode(message: WithdrawInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(24).int64(message.amount);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = (reader.int64() as Long);
          break;

        case 4:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.ZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },

  toJSON(message: WithdrawInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawInfo>): WithdrawInfo {
    const message = createBaseWithdrawInfo();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }

};

function createBaseUndelegateRecord(): UndelegateRecord {
  return {
    zoneId: "",
    delegator: "",
    amount: undefined,
    state: Long.ZERO
  };
}

export const UndelegateRecord = {
  encode(message: UndelegateRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (!message.state.isZero()) {
      writer.uint32(32).int64(message.state);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.delegator = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.state = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndelegateRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      state: isSet(object.state) ? Long.fromString(object.state) : Long.ZERO
    };
  },

  toJSON(message: UndelegateRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.state !== undefined && (obj.state = (message.state || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<UndelegateRecord>): UndelegateRecord {
    const message = createBaseUndelegateRecord();
    message.zoneId = object.zoneId ?? "";
    message.delegator = object.delegator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.state = object.state !== undefined && object.state !== null ? Long.fromValue(object.state) : Long.ZERO;
    return message;
  }

};

function createBaseWithdrawRecord(): WithdrawRecord {
  return {
    zoneId: "",
    withdrawer: "",
    recipient: "",
    amount: undefined,
    state: Long.ZERO,
    completionTime: undefined
  };
}

export const WithdrawRecord = {
  encode(message: WithdrawRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.withdrawer !== "") {
      writer.uint32(18).string(message.withdrawer);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    if (!message.state.isZero()) {
      writer.uint32(40).int64(message.state);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.withdrawer = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.state = (reader.int64() as Long);
          break;

        case 6:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      state: isSet(object.state) ? Long.fromString(object.state) : Long.ZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },

  toJSON(message: WithdrawRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.state !== undefined && (obj.state = (message.state || Long.ZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawRecord>): WithdrawRecord {
    const message = createBaseWithdrawRecord();
    message.zoneId = object.zoneId ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.state = object.state !== undefined && object.state !== null ? Long.fromValue(object.state) : Long.ZERO;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    return message;
  }

};