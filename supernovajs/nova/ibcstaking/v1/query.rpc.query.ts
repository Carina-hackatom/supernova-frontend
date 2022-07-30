import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryInterchainAccountFromZoneRequest, QueryInterchainAccountFromZoneResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  interchainAccountFromZone(request: QueryInterchainAccountFromZoneRequest): Promise<QueryInterchainAccountFromZoneResponse>;
  /*QueryInterchainAccountFromZone returns the interchain account for given owner address on a given connection pair*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.interchainAccountFromZone = this.interchainAccountFromZone.bind(this);
  }

  interchainAccountFromZone(request: QueryInterchainAccountFromZoneRequest): Promise<QueryInterchainAccountFromZoneResponse> {
    const data = QueryInterchainAccountFromZoneRequest.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Query", "InterchainAccountFromZone", data);
    return promise.then(data => QueryInterchainAccountFromZoneResponse.decode(new _m0.Reader(data)));
  }

}