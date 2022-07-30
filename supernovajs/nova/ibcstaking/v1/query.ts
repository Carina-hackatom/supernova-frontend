import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QueryInterchainAccountFromZoneRequest is the request type for the Query/InterchainAccountFromZone RPC */
export interface QueryInterchainAccountFromZoneRequest {
  portId: string;
  connectionId: string;
}

/** QueryInterchainAccountFromZoneResponse the response type for the Query/InterchainAccountFromZone RPC */
export interface QueryInterchainAccountFromZoneResponse {
  interchainAccountAddress: string;
}

function createBaseQueryInterchainAccountFromZoneRequest(): QueryInterchainAccountFromZoneRequest {
  return {
    portId: "",
    connectionId: ""
  };
}

export const QueryInterchainAccountFromZoneRequest = {
  encode(message: QueryInterchainAccountFromZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromZoneRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.connectionId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInterchainAccountFromZoneRequest {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },

  toJSON(message: QueryInterchainAccountFromZoneRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInterchainAccountFromZoneRequest>): QueryInterchainAccountFromZoneRequest {
    const message = createBaseQueryInterchainAccountFromZoneRequest();
    message.portId = object.portId ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }

};

function createBaseQueryInterchainAccountFromZoneResponse(): QueryInterchainAccountFromZoneResponse {
  return {
    interchainAccountAddress: ""
  };
}

export const QueryInterchainAccountFromZoneResponse = {
  encode(message: QueryInterchainAccountFromZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromZoneResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryInterchainAccountFromZoneResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },

  toJSON(message: QueryInterchainAccountFromZoneResponse): unknown {
    const obj: any = {};
    message.interchainAccountAddress !== undefined && (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryInterchainAccountFromZoneResponse>): QueryInterchainAccountFromZoneResponse {
    const message = createBaseQueryInterchainAccountFromZoneResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  }

};