import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryCacheDepositAmountRequest, QueryCachedDepositAmountResponse, QueryDepositHistoryRequest, QueryDepositHistoryResponse, QueryUndelegateHistoryRequest, QueryUndelegateHistoryResponse, QueryWithdrawHistoryRequest, QueryWithdrawHistoryResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `nova/gal/v1/params`;
    return await this.request(endpoint);
  }

  /* Share */
  async share(params: QueryCacheDepositAmountRequest): Promise<QueryCachedDepositAmountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    const endpoint = `nova/gal/v1/shares/${params.address}/by_denom`;
    return await this.request(endpoint, options);
  }

  /* DepositHistory */
  async depositHistory(params: QueryDepositHistoryRequest): Promise<QueryDepositHistoryResponse> {
    const endpoint = `nova/gal/v1/deposit/${params.address}by_denom/${params.denom}`;
    return await this.request(endpoint);
  }

  /* UndelegateHistory */
  async undelegateHistory(params: QueryUndelegateHistoryRequest): Promise<QueryUndelegateHistoryResponse> {
    const endpoint = `nova/get/v1/undelegate/${params.address}by_denom/${params.denom}`;
    return await this.request(endpoint);
  }

  /* WithdrawHistory */
  async withdrawHistory(params: QueryWithdrawHistoryRequest): Promise<QueryWithdrawHistoryResponse> {
    const endpoint = `nova/get/v1/withdraw/${params.address}by_denom/${params.denom}`;
    return await this.request(endpoint);
  }

}