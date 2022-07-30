import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QueryStateRequest, QueryStateResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params returns the total set of minting parameters.*/

  state(request: QueryStateRequest): Promise<QueryStateResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.state = this.state.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nova.oracle.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  state(request: QueryStateRequest): Promise<QueryStateResponse> {
    const data = QueryStateRequest.encode(request).finish();
    const promise = this.rpc.request("nova.oracle.v1.Query", "State", data);
    return promise.then(data => QueryStateResponse.decode(new _m0.Reader(data)));
  }

}