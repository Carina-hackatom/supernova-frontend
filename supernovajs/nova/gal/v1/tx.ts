import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, fromJsonTimestamp, fromTimestamp } from "@osmonauts/helpers";

/** MsgDeposit defines user who deposit and amount of coins. */
export interface MsgDeposit {
  depositor: string;
  amount: Coin;
  zoneId: string;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgDepositResponse {
  receiver: string;
  depositedAmount: Coin;
}
export interface MsgDelegate {
  zoneId: string;
  controllerAddress: string;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgDelegateResponse {}
export interface MsgUndelegate {
  zoneId: string;
  controllerAddress: string;
}
export interface MsgUndelegateResponse {
  zoneId: string;
  undelegatedAmount: Coin;
}

/** MsgUnStaking defines user who want to un-stake his/her asset. */
export interface MsgPendingUndelegateRecord {
  zoneId: string;
  depositor: string;
  amount: Coin;
}
export interface MsgPendingUndelegateRecordResponse {
  zoneId: string;
  user: string;
  amount: Coin;
}

/** MsgWithdraw defines user who withdraw and amount of coins. */
export interface MsgWithdraw {
  zoneId: string;
  withdrawer: string;
  recipient: string;
  icaTransferPortId: string;
  icaTransferChannelId: string;
}
export interface MsgWithdrawResponse {
  withdrawer: string;
  withdrawAmount: Coin;
}

/** MsgClaim defines claim msg used when user want to claim their st token. */
export interface MsgClaimSnAsset {
  zoneId: string;
  claimer: string;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgClaimSnAssetResponse {
  claimer: string;
  minted: Coin;
}
export interface MsgPendingWithdraw {
  zoneId: string;
  daomodifierAddress: string;
  transferPortId: string;
  transferChannelId: string;
  chainTime: Timestamp;
}
export interface MsgPendingWithdrawResponse {}

function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    amount: undefined,
    zoneId: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (message.zoneId !== "") {
      writer.uint32(26).string(message.zoneId);
    }

    if (message.transferPortId !== "") {
      writer.uint32(34).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(42).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.zoneId = reader.string();
          break;

        case 4:
          message.transferPortId = reader.string();
          break;

        case 5:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.zoneId = object.zoneId ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {
    receiver: "",
    depositedAmount: undefined
  };
}

export const MsgDepositResponse = {
  encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }

    if (message.depositedAmount !== undefined) {
      Coin.encode(message.depositedAmount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;

        case 2:
          message.depositedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDepositResponse {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      depositedAmount: isSet(object.depositedAmount) ? Coin.fromJSON(object.depositedAmount) : undefined
    };
  },

  toJSON(message: MsgDepositResponse): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.depositedAmount !== undefined && (obj.depositedAmount = message.depositedAmount ? Coin.toJSON(message.depositedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.receiver = object.receiver ?? "";
    message.depositedAmount = object.depositedAmount !== undefined && object.depositedAmount !== null ? Coin.fromPartial(object.depositedAmount) : undefined;
    return message;
  }

};

function createBaseMsgDelegate(): MsgDelegate {
  return {
    zoneId: "",
    controllerAddress: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(18).string(message.controllerAddress);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.controllerAddress = reader.string();
          break;

        case 3:
          message.transferPortId = reader.string();
          break;

        case 4:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.zoneId = object.zoneId ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();

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

  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  }

};

function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    zoneId: "",
    controllerAddress: ""
  };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(18).string(message.controllerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.controllerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : ""
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.zoneId = object.zoneId ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  }

};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    zoneId: "",
    undelegatedAmount: undefined
  };
}

export const MsgUndelegateResponse = {
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.undelegatedAmount !== undefined) {
      Coin.encode(message.undelegatedAmount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.undelegatedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegateResponse {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      undelegatedAmount: isSet(object.undelegatedAmount) ? Coin.fromJSON(object.undelegatedAmount) : undefined
    };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.undelegatedAmount !== undefined && (obj.undelegatedAmount = message.undelegatedAmount ? Coin.toJSON(message.undelegatedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.zoneId = object.zoneId ?? "";
    message.undelegatedAmount = object.undelegatedAmount !== undefined && object.undelegatedAmount !== null ? Coin.fromPartial(object.undelegatedAmount) : undefined;
    return message;
  }

};

function createBaseMsgPendingUndelegateRecord(): MsgPendingUndelegateRecord {
  return {
    zoneId: "",
    depositor: "",
    amount: undefined
  };
}

export const MsgPendingUndelegateRecord = {
  encode(message: MsgPendingUndelegateRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingUndelegateRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingUndelegateRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPendingUndelegateRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgPendingUndelegateRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPendingUndelegateRecord>): MsgPendingUndelegateRecord {
    const message = createBaseMsgPendingUndelegateRecord();
    message.zoneId = object.zoneId ?? "";
    message.depositor = object.depositor ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgPendingUndelegateRecordResponse(): MsgPendingUndelegateRecordResponse {
  return {
    zoneId: "",
    user: "",
    amount: undefined
  };
}

export const MsgPendingUndelegateRecordResponse = {
  encode(message: MsgPendingUndelegateRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingUndelegateRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingUndelegateRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.user = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPendingUndelegateRecordResponse {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      user: isSet(object.user) ? String(object.user) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgPendingUndelegateRecordResponse): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.user !== undefined && (obj.user = message.user);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPendingUndelegateRecordResponse>): MsgPendingUndelegateRecordResponse {
    const message = createBaseMsgPendingUndelegateRecordResponse();
    message.zoneId = object.zoneId ?? "";
    message.user = object.user ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    zoneId: "",
    withdrawer: "",
    recipient: "",
    icaTransferPortId: "",
    icaTransferChannelId: ""
  };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.withdrawer !== "") {
      writer.uint32(18).string(message.withdrawer);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.icaTransferPortId !== "") {
      writer.uint32(34).string(message.icaTransferPortId);
    }

    if (message.icaTransferChannelId !== "") {
      writer.uint32(42).string(message.icaTransferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();

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
          message.icaTransferPortId = reader.string();
          break;

        case 5:
          message.icaTransferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdraw {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      icaTransferPortId: isSet(object.icaTransferPortId) ? String(object.icaTransferPortId) : "",
      icaTransferChannelId: isSet(object.icaTransferChannelId) ? String(object.icaTransferChannelId) : ""
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.icaTransferPortId !== undefined && (obj.icaTransferPortId = message.icaTransferPortId);
    message.icaTransferChannelId !== undefined && (obj.icaTransferChannelId = message.icaTransferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.zoneId = object.zoneId ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.recipient = object.recipient ?? "";
    message.icaTransferPortId = object.icaTransferPortId ?? "";
    message.icaTransferChannelId = object.icaTransferChannelId ?? "";
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    withdrawer: "",
    withdrawAmount: undefined
  };
}

export const MsgWithdrawResponse = {
  encode(message: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawer !== "") {
      writer.uint32(10).string(message.withdrawer);
    }

    if (message.withdrawAmount !== undefined) {
      Coin.encode(message.withdrawAmount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string();
          break;

        case 2:
          message.withdrawAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawResponse {
    return {
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      withdrawAmount: isSet(object.withdrawAmount) ? Coin.fromJSON(object.withdrawAmount) : undefined
    };
  },

  toJSON(message: MsgWithdrawResponse): unknown {
    const obj: any = {};
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = message.withdrawAmount ? Coin.toJSON(message.withdrawAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.withdrawer = object.withdrawer ?? "";
    message.withdrawAmount = object.withdrawAmount !== undefined && object.withdrawAmount !== null ? Coin.fromPartial(object.withdrawAmount) : undefined;
    return message;
  }

};

function createBaseMsgClaimSnAsset(): MsgClaimSnAsset {
  return {
    zoneId: "",
    claimer: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgClaimSnAsset = {
  encode(message: MsgClaimSnAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.claimer !== "") {
      writer.uint32(18).string(message.claimer);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSnAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSnAsset();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.claimer = reader.string();
          break;

        case 3:
          message.transferPortId = reader.string();
          break;

        case 4:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimSnAsset {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgClaimSnAsset): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimSnAsset>): MsgClaimSnAsset {
    const message = createBaseMsgClaimSnAsset();
    message.zoneId = object.zoneId ?? "";
    message.claimer = object.claimer ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgClaimSnAssetResponse(): MsgClaimSnAssetResponse {
  return {
    claimer: "",
    minted: undefined
  };
}

export const MsgClaimSnAssetResponse = {
  encode(message: MsgClaimSnAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }

    if (message.minted !== undefined) {
      Coin.encode(message.minted, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSnAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSnAssetResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;

        case 2:
          message.minted = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimSnAssetResponse {
    return {
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      minted: isSet(object.minted) ? Coin.fromJSON(object.minted) : undefined
    };
  },

  toJSON(message: MsgClaimSnAssetResponse): unknown {
    const obj: any = {};
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.minted !== undefined && (obj.minted = message.minted ? Coin.toJSON(message.minted) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimSnAssetResponse>): MsgClaimSnAssetResponse {
    const message = createBaseMsgClaimSnAssetResponse();
    message.claimer = object.claimer ?? "";
    message.minted = object.minted !== undefined && object.minted !== null ? Coin.fromPartial(object.minted) : undefined;
    return message;
  }

};

function createBaseMsgPendingWithdraw(): MsgPendingWithdraw {
  return {
    zoneId: "",
    daomodifierAddress: "",
    transferPortId: "",
    transferChannelId: "",
    chainTime: undefined
  };
}

export const MsgPendingWithdraw = {
  encode(message: MsgPendingWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.daomodifierAddress !== "") {
      writer.uint32(18).string(message.daomodifierAddress);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    if (message.chainTime !== undefined) {
      Timestamp.encode(message.chainTime, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.daomodifierAddress = reader.string();
          break;

        case 3:
          message.transferPortId = reader.string();
          break;

        case 4:
          message.transferChannelId = reader.string();
          break;

        case 5:
          message.chainTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPendingWithdraw {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      chainTime: isSet(object.chainTime) ? fromJsonTimestamp(object.chainTime) : undefined
    };
  },

  toJSON(message: MsgPendingWithdraw): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    message.chainTime !== undefined && (obj.chainTime = fromTimestamp(message.chainTime).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPendingWithdraw>): MsgPendingWithdraw {
    const message = createBaseMsgPendingWithdraw();
    message.zoneId = object.zoneId ?? "";
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.chainTime = object.chainTime !== undefined && object.chainTime !== null ? Timestamp.fromPartial(object.chainTime) : undefined;
    return message;
  }

};

function createBaseMsgPendingWithdrawResponse(): MsgPendingWithdrawResponse {
  return {};
}

export const MsgPendingWithdrawResponse = {
  encode(_: MsgPendingWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingWithdrawResponse();

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

  fromJSON(_: any): MsgPendingWithdrawResponse {
    return {};
  },

  toJSON(_: MsgPendingWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPendingWithdrawResponse>): MsgPendingWithdrawResponse {
    const message = createBaseMsgPendingWithdrawResponse();
    return message;
  }

};