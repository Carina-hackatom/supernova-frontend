import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface GenesisState {
  /** params defines all the parameters of module. */
  params: Params;
}
export interface RegisteredZone {
  zoneId: string;
  icaConnectionInfo: IcaConnectionInfo;
  icaAccount: IcaAccount;
  validatorAddress: string;
  baseDenom: string;
  snDenom: string;
}
export interface IcaAccount {
  daomodifierAddress: string;
  hostAddress: string;
  balance: Coin;
}

/** zone name, connection id, portID(owner address) */
export interface IcaConnectionInfo {
  connectionId: string;
  portId: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseRegisteredZone(): RegisteredZone {
  return {
    zoneId: "",
    icaConnectionInfo: undefined,
    icaAccount: undefined,
    validatorAddress: "",
    baseDenom: "",
    snDenom: ""
  };
}

export const RegisteredZone = {
  encode(message: RegisteredZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.icaConnectionInfo !== undefined) {
      IcaConnectionInfo.encode(message.icaConnectionInfo, writer.uint32(18).fork()).ldelim();
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

    if (message.snDenom !== "") {
      writer.uint32(50).string(message.snDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredZone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.icaConnectionInfo = IcaConnectionInfo.decode(reader, reader.uint32());
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

        case 6:
          message.snDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisteredZone {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      icaConnectionInfo: isSet(object.icaConnectionInfo) ? IcaConnectionInfo.fromJSON(object.icaConnectionInfo) : undefined,
      icaAccount: isSet(object.icaAccount) ? IcaAccount.fromJSON(object.icaAccount) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      snDenom: isSet(object.snDenom) ? String(object.snDenom) : ""
    };
  },

  toJSON(message: RegisteredZone): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.icaConnectionInfo !== undefined && (obj.icaConnectionInfo = message.icaConnectionInfo ? IcaConnectionInfo.toJSON(message.icaConnectionInfo) : undefined);
    message.icaAccount !== undefined && (obj.icaAccount = message.icaAccount ? IcaAccount.toJSON(message.icaAccount) : undefined);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.snDenom !== undefined && (obj.snDenom = message.snDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisteredZone>): RegisteredZone {
    const message = createBaseRegisteredZone();
    message.zoneId = object.zoneId ?? "";
    message.icaConnectionInfo = object.icaConnectionInfo !== undefined && object.icaConnectionInfo !== null ? IcaConnectionInfo.fromPartial(object.icaConnectionInfo) : undefined;
    message.icaAccount = object.icaAccount !== undefined && object.icaAccount !== null ? IcaAccount.fromPartial(object.icaAccount) : undefined;
    message.validatorAddress = object.validatorAddress ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.snDenom = object.snDenom ?? "";
    return message;
  }

};

function createBaseIcaAccount(): IcaAccount {
  return {
    daomodifierAddress: "",
    hostAddress: "",
    balance: undefined
  };
}

export const IcaAccount = {
  encode(message: IcaAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.daomodifierAddress !== "") {
      writer.uint32(10).string(message.daomodifierAddress);
    }

    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }

    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IcaAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcaAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.daomodifierAddress = reader.string();
          break;

        case 2:
          message.hostAddress = reader.string();
          break;

        case 3:
          message.balance = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IcaAccount {
    return {
      daomodifierAddress: isSet(object.daomodifierAddress) ? String(object.daomodifierAddress) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },

  toJSON(message: IcaAccount): unknown {
    const obj: any = {};
    message.daomodifierAddress !== undefined && (obj.daomodifierAddress = message.daomodifierAddress);
    message.hostAddress !== undefined && (obj.hostAddress = message.hostAddress);
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<IcaAccount>): IcaAccount {
    const message = createBaseIcaAccount();
    message.daomodifierAddress = object.daomodifierAddress ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }

};

function createBaseIcaConnectionInfo(): IcaConnectionInfo {
  return {
    connectionId: "",
    portId: ""
  };
}

export const IcaConnectionInfo = {
  encode(message: IcaConnectionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IcaConnectionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcaConnectionInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.portId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IcaConnectionInfo {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : ""
    };
  },

  toJSON(message: IcaConnectionInfo): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },

  fromPartial(object: DeepPartial<IcaConnectionInfo>): IcaConnectionInfo {
    const message = createBaseIcaConnectionInfo();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    return message;
  }

};