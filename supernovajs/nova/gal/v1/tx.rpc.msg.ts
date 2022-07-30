import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgDelegate, MsgDelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgPendingUndelegateRecord, MsgPendingUndelegateRecordResponse, MsgWithdraw, MsgWithdrawResponse, MsgClaimSnAsset, MsgClaimSnAssetResponse, MsgPendingWithdraw, MsgPendingWithdrawResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /*null*/

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /*null*/

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /*null*/

  pendingUndelegateRecord(request: MsgPendingUndelegateRecord): Promise<MsgPendingUndelegateRecordResponse>;
  /*null*/

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /*null*/

  claimSnAsset(request: MsgClaimSnAsset): Promise<MsgClaimSnAssetResponse>;
  /*null*/

  pendingWithdraw(request: MsgPendingWithdraw): Promise<MsgPendingWithdrawResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.delegate = this.delegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.pendingUndelegateRecord = this.pendingUndelegateRecord.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.claimSnAsset = this.claimSnAsset.bind(this);
    this.pendingWithdraw = this.pendingWithdraw.bind(this);
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

  pendingUndelegateRecord(request: MsgPendingUndelegateRecord): Promise<MsgPendingUndelegateRecordResponse> {
    const data = MsgPendingUndelegateRecord.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "PendingUndelegateRecord", data);
    return promise.then(data => MsgPendingUndelegateRecordResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  claimSnAsset(request: MsgClaimSnAsset): Promise<MsgClaimSnAssetResponse> {
    const data = MsgClaimSnAsset.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "ClaimSnAsset", data);
    return promise.then(data => MsgClaimSnAssetResponse.decode(new _m0.Reader(data)));
  }

  pendingWithdraw(request: MsgPendingWithdraw): Promise<MsgPendingWithdrawResponse> {
    const data = MsgPendingWithdraw.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Msg", "PendingWithdraw", data);
    return promise.then(data => MsgPendingWithdrawResponse.decode(new _m0.Reader(data)));
  }

}