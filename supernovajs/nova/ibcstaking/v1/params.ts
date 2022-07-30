import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
export interface Params {
  /** zone register address. */
  daoModifiers: string[];
  commission: CommissionInfo[];
}
export interface CommissionInfo {
  treasuryAddress: string;
  commissionRate: string;
}

function createBaseParams(): Params {
  return {
    daoModifiers: [],
    commission: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.daoModifiers) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.commission) {
      CommissionInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.daoModifiers.push(reader.string());
          break;

        case 2:
          message.commission.push(CommissionInfo.decode(reader, reader.uint32()));
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
      daoModifiers: Array.isArray(object?.daoModifiers) ? object.daoModifiers.map((e: any) => String(e)) : [],
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => CommissionInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.daoModifiers) {
      obj.daoModifiers = message.daoModifiers.map(e => e);
    } else {
      obj.daoModifiers = [];
    }

    if (message.commission) {
      obj.commission = message.commission.map(e => e ? CommissionInfo.toJSON(e) : undefined);
    } else {
      obj.commission = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.daoModifiers = object.daoModifiers?.map(e => e) || [];
    message.commission = object.commission?.map(e => CommissionInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCommissionInfo(): CommissionInfo {
  return {
    treasuryAddress: "",
    commissionRate: ""
  };
}

export const CommissionInfo = {
  encode(message: CommissionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.treasuryAddress !== "") {
      writer.uint32(10).string(message.treasuryAddress);
    }

    if (message.commissionRate !== "") {
      writer.uint32(18).string(message.commissionRate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommissionInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.treasuryAddress = reader.string();
          break;

        case 2:
          message.commissionRate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommissionInfo {
    return {
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : "",
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : ""
    };
  },

  toJSON(message: CommissionInfo): unknown {
    const obj: any = {};
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
    return obj;
  },

  fromPartial(object: DeepPartial<CommissionInfo>): CommissionInfo {
    const message = createBaseCommissionInfo();
    message.treasuryAddress = object.treasuryAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    return message;
  }

};