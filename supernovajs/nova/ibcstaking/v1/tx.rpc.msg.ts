import { IcaConnectionInfo, IcaAccount } from "./genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterZone, MsgRegisterZoneResponse, MsgIcaDelegate, MsgIcaDelegateResponse, MsgIcaUndelegate, MsgIcaUndelegateResponse, MsgIcaTransfer, MsgIcaTransferResponse, MsgIcaAutoStaking, MsgIcaAutoStakingResponse, MsgRegisterHostAccount, MsgRegisterHostAccountResponse, MsgDeleteRegisteredZone, MsgDeleteRegisteredZoneResponse, MsgChangeRegisteredZoneInfo, MsgChangeRegisteredZoneInfoResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  registerZone(request: MsgRegisterZone): Promise<MsgRegisterZoneResponse>;
  /*RegisterZone defines a rpc handler for MsgRegisterZone*/

  icaDelegate(request: MsgIcaDelegate): Promise<MsgIcaDelegateResponse>;
  /*IcaDelegate defines a rpc handler for MsgIcaDelegate*/

  icaUndelegate(request: MsgIcaUndelegate): Promise<MsgIcaUndelegateResponse>;
  /*IcaUnDelegate defines a rpc handler for MsgIcaUnDelegate*/

  icaTransfer(request: MsgIcaTransfer): Promise<MsgIcaTransferResponse>;
  /*IcaTransfer defines a rpc handler for MsgIcaTransfer*/

  icaAutoStaking(request: MsgIcaAutoStaking): Promise<MsgIcaAutoStakingResponse>;
  /*IcaAutoStaking defines a rpc handler for MsgIcaAutoStaking*/

  icaRegisterHostAccount(request: MsgRegisterHostAccount): Promise<MsgRegisterHostAccountResponse>;
  /*IcaRegisterHostAccount defines a rpc handler for MsgRegisterHostAccount*/

  deleteRegisteredZone(request: MsgDeleteRegisteredZone): Promise<MsgDeleteRegisteredZoneResponse>;
  /*DeleteRegisteredZone defines a rpc handler for MsgDeleteRegisteredZone*/

  changeRegisteredZoneInfo(request: MsgChangeRegisteredZoneInfo): Promise<MsgChangeRegisteredZoneInfoResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerZone = this.registerZone.bind(this);
    this.icaDelegate = this.icaDelegate.bind(this);
    this.icaUndelegate = this.icaUndelegate.bind(this);
    this.icaTransfer = this.icaTransfer.bind(this);
    this.icaAutoStaking = this.icaAutoStaking.bind(this);
    this.icaRegisterHostAccount = this.icaRegisterHostAccount.bind(this);
    this.deleteRegisteredZone = this.deleteRegisteredZone.bind(this);
    this.changeRegisteredZoneInfo = this.changeRegisteredZoneInfo.bind(this);
  }

  registerZone(request: MsgRegisterZone): Promise<MsgRegisterZoneResponse> {
    const data = MsgRegisterZone.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "RegisterZone", data);
    return promise.then(data => MsgRegisterZoneResponse.decode(new _m0.Reader(data)));
  }

  icaDelegate(request: MsgIcaDelegate): Promise<MsgIcaDelegateResponse> {
    const data = MsgIcaDelegate.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "IcaDelegate", data);
    return promise.then(data => MsgIcaDelegateResponse.decode(new _m0.Reader(data)));
  }

  icaUndelegate(request: MsgIcaUndelegate): Promise<MsgIcaUndelegateResponse> {
    const data = MsgIcaUndelegate.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "IcaUndelegate", data);
    return promise.then(data => MsgIcaUndelegateResponse.decode(new _m0.Reader(data)));
  }

  icaTransfer(request: MsgIcaTransfer): Promise<MsgIcaTransferResponse> {
    const data = MsgIcaTransfer.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "IcaTransfer", data);
    return promise.then(data => MsgIcaTransferResponse.decode(new _m0.Reader(data)));
  }

  icaAutoStaking(request: MsgIcaAutoStaking): Promise<MsgIcaAutoStakingResponse> {
    const data = MsgIcaAutoStaking.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "IcaAutoStaking", data);
    return promise.then(data => MsgIcaAutoStakingResponse.decode(new _m0.Reader(data)));
  }

  icaRegisterHostAccount(request: MsgRegisterHostAccount): Promise<MsgRegisterHostAccountResponse> {
    const data = MsgRegisterHostAccount.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "IcaRegisterHostAccount", data);
    return promise.then(data => MsgRegisterHostAccountResponse.decode(new _m0.Reader(data)));
  }

  deleteRegisteredZone(request: MsgDeleteRegisteredZone): Promise<MsgDeleteRegisteredZoneResponse> {
    const data = MsgDeleteRegisteredZone.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "DeleteRegisteredZone", data);
    return promise.then(data => MsgDeleteRegisteredZoneResponse.decode(new _m0.Reader(data)));
  }

  changeRegisteredZoneInfo(request: MsgChangeRegisteredZoneInfo): Promise<MsgChangeRegisteredZoneInfoResponse> {
    const data = MsgChangeRegisteredZoneInfo.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Msg", "ChangeRegisteredZoneInfo", data);
    return promise.then(data => MsgChangeRegisteredZoneInfoResponse.decode(new _m0.Reader(data)));
  }

}