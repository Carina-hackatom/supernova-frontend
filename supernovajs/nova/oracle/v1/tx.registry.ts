import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateChainState } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nova.oracle.v1.MsgUpdateChainState", MsgUpdateChainState]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateChainState(value: MsgUpdateChainState) {
      return {
        typeUrl: "/nova.oracle.v1.MsgUpdateChainState",
        value: MsgUpdateChainState.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    updateChainState(value: MsgUpdateChainState) {
      return {
        typeUrl: "/nova.oracle.v1.MsgUpdateChainState",
        value
      };
    }

  },
  toJSON: {
    updateChainState(value: MsgUpdateChainState) {
      return {
        typeUrl: "/nova.oracle.v1.MsgUpdateChainState",
        value: MsgUpdateChainState.toJSON(value)
      };
    }

  },
  fromJSON: {
    updateChainState(value: any) {
      return {
        typeUrl: "/nova.oracle.v1.MsgUpdateChainState",
        value: MsgUpdateChainState.fromJSON(value)
      };
    }

  },
  fromPartial: {
    updateChainState(value: MsgUpdateChainState) {
      return {
        typeUrl: "/nova.oracle.v1.MsgUpdateChainState",
        value: MsgUpdateChainState.fromPartial(value)
      };
    }

  }
};