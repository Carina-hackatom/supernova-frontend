import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgUpdateChainState } from "./tx";
export interface AminoMsgUpdateChainState extends AminoMsg {
  type: "/nova.oracle.v1.MsgUpdateChainState";
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    decimal: number;
    operator: string;
    block_height: string;
    app_hash: Uint8Array;
    chain_id: string;
  };
}
export const AminoConverter = {
  "/nova.oracle.v1.MsgUpdateChainState": {
    aminoType: "/nova.oracle.v1.MsgUpdateChainState",
    toAmino: ({
      coin,
      decimal,
      operator,
      blockHeight,
      appHash,
      chainId
    }: MsgUpdateChainState): AminoMsgUpdateChainState["value"] => {
      return {
        coin: {
          denom: coin.denom,
          amount: Long.fromNumber(coin.amount).toString()
        },
        decimal,
        operator,
        block_height: blockHeight.toString(),
        app_hash: appHash,
        chain_id: chainId
      };
    },
    fromAmino: ({
      coin,
      decimal,
      operator,
      block_height,
      app_hash,
      chain_id
    }: AminoMsgUpdateChainState["value"]): MsgUpdateChainState => {
      return {
        coin: {
          denom: coin.denom,
          amount: coin.amount
        },
        decimal,
        operator,
        blockHeight: Long.fromString(block_height),
        appHash: app_hash,
        chainId: chain_id
      };
    }
  }
};