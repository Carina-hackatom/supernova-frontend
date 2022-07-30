import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgUpdateChainState, MsgUpdateChainStateResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  updateChainState(request: MsgUpdateChainState): Promise<MsgUpdateChainStateResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateChainState = this.updateChainState.bind(this);
  }

  updateChainState(request: MsgUpdateChainState): Promise<MsgUpdateChainStateResponse> {
    const data = MsgUpdateChainState.encode(request).finish();
    const promise = this.rpc.request("nova.oracle.v1.Msg", "UpdateChainState", data);
    return promise.then(data => MsgUpdateChainStateResponse.decode(new _m0.Reader(data)));
  }

}