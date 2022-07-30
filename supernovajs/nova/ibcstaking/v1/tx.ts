import { IcaConnectionInfo, IcaAccount } from "./genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgRegisterZone defines the payload for Msg/RegisterZone */
export interface MsgRegisterZone {
  zoneId: string;
  icaInfo: IcaConnectionInfo;
  icaAccount: IcaAccount;
  validatorAddress: string;
  baseDenom: string;
}
export interface MsgRegisterZoneResponse {}
export interface MsgChangeRegisteredZoneInfo {
  zoneId: string;
  icaInfo: IcaConnectionInfo;
  icaAccount: IcaAccount;
  validatorAddress: string;
  baseDenom: string;
}
export interface MsgChangeRegisteredZoneInfoResponse {}
export interface MsgDeleteRegisteredZone {
  zoneId: string;
  daomodifierAddress: string;
}
export interface MsgDeleteRegisteredZoneResponse {}
export interface MsgIcaDelegate {
  zoneId: string;
  hostAddress: string;
  daomodifierAddress: string;
  amount: Coin;
}
export interface MsgIcaDelegateResponse {}
export interface MsgIcaUndelegate {
  zoneId: string;
  hostAddress: string;
  daomodifierAddress: string;
  amount: Coin;
}
export interface MsgIcaUndelegateResponse {}
export interface MsgIcaAutoStaking {
  zoneId: string;
  hostAddress: string;
  daomodifierAddress: string;
  amount: Coin;
}
export interface MsgIcaAutoStakingResponse {}
export interface MsgIcaTransfer {
  zoneId: string;
  hostAddress: string;
  daomodifierAddress: string;
  receiverAddress: string;
  icaTransferPortId: string;
  icaTransferChannelId: string;
  amount: Coin;
}
export interface MsgIcaTransferResponse {}
export interface MsgRegisterHostAccount {
  zoneId: string;
  accountInfo: IcaAccount;
}
export interface MsgRegisterHostAccountResponse {}

function createBaseMsgRegisterZone(): MsgRegisterZone {
  return {
    zoneId: "",
    icaInfo: undefined,
    icaAccount: undefined,
    validatorAddress: "",
    baseDenom: ""
  };
}

export const MsgRegisterZone = {
  encode(message: MsgRegisterZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.icaInfo !== undefined) {
      IcaConnectionInfo.encode(message.icaInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.icaAccount !== undefined) {
      IcaAccount.encode(message.icaAccount, writer.uint32(26).fork()).ldelim();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }

    if (message.baseDenom !== "") {
      writer.uint32(42).string(message.baseDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.icaInfo = IcaConnectionInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.icaAccount = IcaAccount.decode(reader, reader.uint32());
          break;

        case 4:
          message.validatorAddress = reader.string();
          break;

        case 5:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterZone {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      icaInfo: isSet(object.icaInfo) ? IcaConnectionInfo.fromJSON(object.icaInfo) : undefined,
      icaAccount: isSet(object.icaAccount) ? IcaAccount.fromJSON(object.icaAccount) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },

  toJSON(message: MsgRegisterZone): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.icaInfo !== undefined && (obj.icaInfo = message.icaInfo ? IcaConnectionInfo.toJSON(message.icaInfo) : undefined);
    message.icaAccount !== undefined && (obj.icaAccount = message.icaAccount ? IcaAccount.toJSON(message.icaAccount) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterZone>): MsgRegisterZone {
    const message = createBaseMsgRegisterZone();
    message.zoneId = object.zoneId ?? "";
    message.icaInfo = object.icaInfo !== undefined && object.icaInfo !== null ? IcaConnectionInfo.fromPartial(object.icaInfo) : undefined;
    message.icaAccount = object.icaAccount !== undefined && object.icaAccount !== null ? IcaAccount.fromPartial(object.icaAccount) : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  }

};

function createBaseMsgRegisterZoneResponse(): MsgRegisterZoneResponse {
  return {};
}

export const MsgRegisterZoneResponse = {
  encode(_: MsgRegisterZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterZoneResponse();

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

  fromJSON(_: any): MsgRegisterZoneResponse {
    return {};
  },

  toJSON(_: MsgRegisterZoneResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterZoneResponse>): MsgRegisterZoneResponse {
    const message = createBaseMsgRegisterZoneResponse();
    return message;
  }

};

function createBaseMsgChangeRegisteredZoneInfo(): MsgChangeRegisteredZoneInfo {
  return {
    zoneId: "",
    icaInfo: undefined,
    icaAccount: undefined,
    validatorAddress: "",
    baseDenom: ""
  };
}

export const MsgChangeRegisteredZoneInfo = {
  encode(message: MsgChangeRegisteredZoneInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.icaInfo !== undefined) {
      IcaConnectionInfo.encode(message.icaInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.icaAccount !== undefined) {
      IcaAccount.encode(message.icaAccount, writer.uint32(26).fork()).ldelim();
    }

    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }

    if (message.baseDenom !== "") {
      writer.uint32(42).string(message.baseDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeRegisteredZoneInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeRegisteredZoneInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.icaInfo = IcaConnectionInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.icaAccount = IcaAccount.decode(reader, reader.uint32());
          break;

        case 4:
          message.validatorAddress = reader.string();
          break;

        case 5:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgChangeRegisteredZoneInfo {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      icaInfo: isSet(object.icaInfo) ? IcaConnectionInfo.fromJSON(object.icaInfo) : undefined,
      icaAccount: isSet(object.icaAccount) ? IcaAccount.fromJSON(object.icaAccount) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },

  toJSON(message: MsgChangeRegisteredZoneInfo): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.icaInfo !== undefined && (obj.icaInfo = message.icaInfo ? IcaConnectionInfo.toJSON(message.icaInfo) : undefined);
    message.icaAccount !== undefined && (obj.icaAccount = message.icaAccount ? IcaAccount.toJSON(message.icaAccount) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeRegisteredZoneInfo>): MsgChangeRegisteredZoneInfo {
    const message = createBaseMsgChangeRegisteredZoneInfo();
    message.zoneId = object.zoneId ?? "";
    message.icaInfo = object.icaInfo !== undefined && object.icaInfo !== null ? IcaConnectionInfo.fromPartial(object.icaInfo) : undefined;
    message.icaAccount = object.icaAccount !== undefined && object.icaAccount !== null ? IcaAccount.fromPartial(object.icaAccount) : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  }

};

function createBaseMsgChangeRegisteredZoneInfoResponse(): MsgChangeRegisteredZoneInfoResponse {
  return {};
}

export const MsgChangeRegisteredZoneInfoResponse = {
  encode(_: MsgChangeRegisteredZoneInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeRegisteredZoneInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeRegisteredZoneInfoResponse();

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

  fromJSON(_: any): MsgChangeRegisteredZoneInfoResponse {
    return {};
  },

  toJSON(_: MsgChangeRegisteredZoneInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgChangeRegisteredZoneInfoResponse>): MsgChangeRegisteredZoneInfoResponse {
    const message = createBaseMsgChangeRegisteredZoneInfoResponse();
    return message;
  }

};

function createBaseMsgDeleteRegisteredZone(): MsgDeleteRegisteredZone {
  return {
    zoneId: "",
    daomodifierAddress: ""
  };
}

export const MsgDeleteRegisteredZone = {
  encode(message: MsgDeleteRegisteredZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.daomodifierAddress !== "") {
      writer.uint32(18).string(message.daomodifierAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegisteredZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRegisteredZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.daomodifierAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteRegisteredZone {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : ""
    };
  },

  toJSON(message: MsgDeleteRegisteredZone): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRegisteredZone>): MsgDeleteRegisteredZone {
    const message = createBaseMsgDeleteRegisteredZone();
    message.zoneId = object.zoneId ?? "";
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    return message;
  }

};

function createBaseMsgDeleteRegisteredZoneResponse(): MsgDeleteRegisteredZoneResponse {
  return {};
}

export const MsgDeleteRegisteredZoneResponse = {
  encode(_: MsgDeleteRegisteredZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegisteredZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRegisteredZoneResponse();

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

  fromJSON(_: any): MsgDeleteRegisteredZoneResponse {
    return {};
  },

  toJSON(_: MsgDeleteRegisteredZoneResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteRegisteredZoneResponse>): MsgDeleteRegisteredZoneResponse {
    const message = createBaseMsgDeleteRegisteredZoneResponse();
    return message;
  }

};

function createBaseMsgIcaDelegate(): MsgIcaDelegate {
  return {
    zoneId: "",
    hostAddress: "",
    daomodifierAddress: "",
    amount: undefined
  };
}

export const MsgIcaDelegate = {
  encode(message: MsgIcaDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }

    if (message.daomodifierAddress !== "") {
      writer.uint32(26).string(message.daomodifierAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaDelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.hostAddress = reader.string();
          break;

        case 3:
          message.daomodifierAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIcaDelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgIcaDelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.hostAddress !== undefined && (obj.hostAddress = message.hostAddress);
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIcaDelegate>): MsgIcaDelegate {
    const message = createBaseMsgIcaDelegate();
    message.zoneId = object.zoneId ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgIcaDelegateResponse(): MsgIcaDelegateResponse {
  return {};
}

export const MsgIcaDelegateResponse = {
  encode(_: MsgIcaDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaDelegateResponse();

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

  fromJSON(_: any): MsgIcaDelegateResponse {
    return {};
  },

  toJSON(_: MsgIcaDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgIcaDelegateResponse>): MsgIcaDelegateResponse {
    const message = createBaseMsgIcaDelegateResponse();
    return message;
  }

};

function createBaseMsgIcaUndelegate(): MsgIcaUndelegate {
  return {
    zoneId: "",
    hostAddress: "",
    daomodifierAddress: "",
    amount: undefined
  };
}

export const MsgIcaUndelegate = {
  encode(message: MsgIcaUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }

    if (message.daomodifierAddress !== "") {
      writer.uint32(26).string(message.daomodifierAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaUndelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.hostAddress = reader.string();
          break;

        case 3:
          message.daomodifierAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIcaUndelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgIcaUndelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.hostAddress !== undefined && (obj.hostAddress = message.hostAddress);
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIcaUndelegate>): MsgIcaUndelegate {
    const message = createBaseMsgIcaUndelegate();
    message.zoneId = object.zoneId ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgIcaUndelegateResponse(): MsgIcaUndelegateResponse {
  return {};
}

export const MsgIcaUndelegateResponse = {
  encode(_: MsgIcaUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaUndelegateResponse();

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

  fromJSON(_: any): MsgIcaUndelegateResponse {
    return {};
  },

  toJSON(_: MsgIcaUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgIcaUndelegateResponse>): MsgIcaUndelegateResponse {
    const message = createBaseMsgIcaUndelegateResponse();
    return message;
  }

};

function createBaseMsgIcaAutoStaking(): MsgIcaAutoStaking {
  return {
    zoneId: "",
    hostAddress: "",
    daomodifierAddress: "",
    amount: undefined
  };
}

export const MsgIcaAutoStaking = {
  encode(message: MsgIcaAutoStaking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }

    if (message.daomodifierAddress !== "") {
      writer.uint32(26).string(message.daomodifierAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaAutoStaking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaAutoStaking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.hostAddress = reader.string();
          break;

        case 3:
          message.daomodifierAddress = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIcaAutoStaking {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgIcaAutoStaking): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.hostAddress !== undefined && (obj.hostAddress = message.hostAddress);
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIcaAutoStaking>): MsgIcaAutoStaking {
    const message = createBaseMsgIcaAutoStaking();
    message.zoneId = object.zoneId ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgIcaAutoStakingResponse(): MsgIcaAutoStakingResponse {
  return {};
}

export const MsgIcaAutoStakingResponse = {
  encode(_: MsgIcaAutoStakingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaAutoStakingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaAutoStakingResponse();

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

  fromJSON(_: any): MsgIcaAutoStakingResponse {
    return {};
  },

  toJSON(_: MsgIcaAutoStakingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgIcaAutoStakingResponse>): MsgIcaAutoStakingResponse {
    const message = createBaseMsgIcaAutoStakingResponse();
    return message;
  }

};

function createBaseMsgIcaTransfer(): MsgIcaTransfer {
  return {
    zoneId: "",
    hostAddress: "",
    daomodifierAddress: "",
    receiverAddress: "",
    icaTransferPortId: "",
    icaTransferChannelId: "",
    amount: undefined
  };
}

export const MsgIcaTransfer = {
  encode(message: MsgIcaTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }

    if (message.daomodifierAddress !== "") {
      writer.uint32(26).string(message.daomodifierAddress);
    }

    if (message.receiverAddress !== "") {
      writer.uint32(34).string(message.receiverAddress);
    }

    if (message.icaTransferPortId !== "") {
      writer.uint32(42).string(message.icaTransferPortId);
    }

    if (message.icaTransferChannelId !== "") {
      writer.uint32(50).string(message.icaTransferChannelId);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.hostAddress = reader.string();
          break;

        case 3:
          message.daomodifierAddress = reader.string();
          break;

        case 4:
          message.receiverAddress = reader.string();
          break;

        case 5:
          message.icaTransferPortId = reader.string();
          break;

        case 6:
          message.icaTransferChannelId = reader.string();
          break;

        case 7:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIcaTransfer {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : "",
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
      icaTransferPortId: isSet(object.icaTransferPortId) ? String(object.icaTransferPortId) : "",
      icaTransferChannelId: isSet(object.icaTransferChannelId) ? String(object.icaTransferChannelId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgIcaTransfer): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.hostAddress !== undefined && (obj.hostAddress = message.hostAddress);
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.icaTransferPortId !== undefined && (obj.icaTransferPortId = message.icaTransferPortId);
    message.icaTransferChannelId !== undefined && (obj.icaTransferChannelId = message.icaTransferChannelId);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIcaTransfer>): MsgIcaTransfer {
    const message = createBaseMsgIcaTransfer();
    message.zoneId = object.zoneId ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.icaTransferPortId = object.icaTransferPortId ?? "";
    message.icaTransferChannelId = object.icaTransferChannelId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgIcaTransferResponse(): MsgIcaTransferResponse {
  return {};
}

export const MsgIcaTransferResponse = {
  encode(_: MsgIcaTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIcaTransferResponse();

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

  fromJSON(_: any): MsgIcaTransferResponse {
    return {};
  },

  toJSON(_: MsgIcaTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgIcaTransferResponse>): MsgIcaTransferResponse {
    const message = createBaseMsgIcaTransferResponse();
    return message;
  }

};

function createBaseMsgRegisterHostAccount(): MsgRegisterHostAccount {
  return {
    zoneId: "",
    accountInfo: undefined
  };
}

export const MsgRegisterHostAccount = {
  encode(message: MsgRegisterHostAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.accountInfo !== undefined) {
      IcaAccount.encode(message.accountInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.accountInfo = IcaAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterHostAccount {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      accountInfo: isSet(object.accountInfo) ? IcaAccount.fromJSON(object.accountInfo) : undefined
    };
  },

  toJSON(message: MsgRegisterHostAccount): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.accountInfo !== undefined && (obj.accountInfo = message.accountInfo ? IcaAccount.toJSON(message.accountInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterHostAccount>): MsgRegisterHostAccount {
    const message = createBaseMsgRegisterHostAccount();
    message.zoneId = object.zoneId ?? "";
    message.accountInfo = object.accountInfo !== undefined && object.accountInfo !== null ? IcaAccount.fromPartial(object.accountInfo) : undefined;
    return message;
  }

};

function createBaseMsgRegisterHostAccountResponse(): MsgRegisterHostAccountResponse {
  return {};
}

export const MsgRegisterHostAccountResponse = {
  encode(_: MsgRegisterHostAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterHostAccountResponse();

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

  fromJSON(_: any): MsgRegisterHostAccountResponse {
    return {};
  },

  toJSON(_: MsgRegisterHostAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterHostAccountResponse>): MsgRegisterHostAccountResponse {
    const message = createBaseMsgRegisterHostAccountResponse();
    return message;
  }

};