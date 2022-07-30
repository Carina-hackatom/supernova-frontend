import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, QueryCacheDepositAmountRequest, QueryCachedDepositAmountResponse, QueryDepositHistoryRequest, QueryDepositHistoryResponse, QueryUndelegateHistoryRequest, QueryUndelegateHistoryResponse, QueryWithdrawHistoryRequest, QueryWithdrawHistoryResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*null*/

  share(request: QueryCacheDepositAmountRequest): Promise<QueryCachedDepositAmountResponse>;
  /*null*/

  depositHistory(request: QueryDepositHistoryRequest): Promise<QueryDepositHistoryResponse>;
  /*null*/

  undelegateHistory(request: QueryUndelegateHistoryRequest): Promise<QueryUndelegateHistoryResponse>;
  /*null*/

  withdrawHistory(request: QueryWithdrawHistoryRequest): Promise<QueryWithdrawHistoryResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.share = this.share.bind(this);
    this.depositHistory = this.depositHistory.bind(this);
    this.undelegateHistory = this.undelegateHistory.bind(this);
    this.withdrawHistory = this.withdrawHistory.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  share(request: QueryCacheDepositAmountRequest): Promise<QueryCachedDepositAmountResponse> {
    const data = QueryCacheDepositAmountRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "Share", data);
    return promise.then(data => QueryCachedDepositAmountResponse.decode(new _m0.Reader(data)));
  }

  depositHistory(request: QueryDepositHistoryRequest): Promise<QueryDepositHistoryResponse> {
    const data = QueryDepositHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "DepositHistory", data);
    return promise.then(data => QueryDepositHistoryResponse.decode(new _m0.Reader(data)));
  }

  undelegateHistory(request: QueryUndelegateHistoryRequest): Promise<QueryUndelegateHistoryResponse> {
    const data = QueryUndelegateHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "UndelegateHistory", data);
    return promise.then(data => QueryUndelegateHistoryResponse.decode(new _m0.Reader(data)));
  }

  withdrawHistory(request: QueryWithdrawHistoryRequest): Promise<QueryWithdrawHistoryResponse> {
    const data = QueryWithdrawHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "WithdrawHistory", data);
    return promise.then(data => QueryWithdrawHistoryResponse.decode(new _m0.Reader(data)));
  }

}