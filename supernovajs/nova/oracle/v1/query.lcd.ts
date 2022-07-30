import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryStateRequest, QueryStateResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params returns the total set of minting parameters. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `nova/oracle/v1/params`;
    return await this.request(endpoint);
  }

  /* State */
  async state(params: QueryStateRequest): Promise<QueryStateResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.chainDenom !== "undefined") {
      options.params.chain_denom = params.chainDenom;
    }

    const endpoint = `nova/oracle/v1/state`;
    return await this.request(endpoint, options);
  }

}