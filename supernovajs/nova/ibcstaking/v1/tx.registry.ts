import { IcaConnectionInfo, IcaAccount } from "./genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterZone, MsgIcaDelegate, MsgIcaUndelegate, MsgIcaTransfer, MsgIcaAutoStaking, MsgRegisterHostAccount, MsgDeleteRegisteredZone, MsgChangeRegisteredZoneInfo } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nova.ibcstaking.v1.MsgRegisterZone", MsgRegisterZone], ["/nova.ibcstaking.v1.MsgIcaDelegate", MsgIcaDelegate], ["/nova.ibcstaking.v1.MsgIcaUndelegate", MsgIcaUndelegate], ["/nova.ibcstaking.v1.MsgIcaTransfer", MsgIcaTransfer], ["/nova.ibcstaking.v1.MsgIcaAutoStaking", MsgIcaAutoStaking], ["/nova.ibcstaking.v1.MsgRegisterHostAccount", MsgRegisterHostAccount], ["/nova.ibcstaking.v1.MsgDeleteRegisteredZone", MsgDeleteRegisteredZone], ["/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo", MsgChangeRegisteredZoneInfo]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerZone(value: MsgRegisterZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterZone",
        value: MsgRegisterZone.encode(value).finish()
      };
    },

    icaDelegate(value: MsgIcaDelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaDelegate",
        value: MsgIcaDelegate.encode(value).finish()
      };
    },

    icaUndelegate(value: MsgIcaUndelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaUndelegate",
        value: MsgIcaUndelegate.encode(value).finish()
      };
    },

    icaTransfer(value: MsgIcaTransfer) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaTransfer",
        value: MsgIcaTransfer.encode(value).finish()
      };
    },

    icaAutoStaking(value: MsgIcaAutoStaking) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaAutoStaking",
        value: MsgIcaAutoStaking.encode(value).finish()
      };
    },

    icaRegisterHostAccount(value: MsgRegisterHostAccount) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterHostAccount",
        value: MsgRegisterHostAccount.encode(value).finish()
      };
    },

    deleteRegisteredZone(value: MsgDeleteRegisteredZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone",
        value: MsgDeleteRegisteredZone.encode(value).finish()
      };
    },

    changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo",
        value: MsgChangeRegisteredZoneInfo.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    registerZone(value: MsgRegisterZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterZone",
        value
      };
    },

    icaDelegate(value: MsgIcaDelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaDelegate",
        value
      };
    },

    icaUndelegate(value: MsgIcaUndelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaUndelegate",
        value
      };
    },

    icaTransfer(value: MsgIcaTransfer) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaTransfer",
        value
      };
    },

    icaAutoStaking(value: MsgIcaAutoStaking) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaAutoStaking",
        value
      };
    },

    icaRegisterHostAccount(value: MsgRegisterHostAccount) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterHostAccount",
        value
      };
    },

    deleteRegisteredZone(value: MsgDeleteRegisteredZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone",
        value
      };
    },

    changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo",
        value
      };
    }

  },
  toJSON: {
    registerZone(value: MsgRegisterZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterZone",
        value: MsgRegisterZone.toJSON(value)
      };
    },

    icaDelegate(value: MsgIcaDelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaDelegate",
        value: MsgIcaDelegate.toJSON(value)
      };
    },

    icaUndelegate(value: MsgIcaUndelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaUndelegate",
        value: MsgIcaUndelegate.toJSON(value)
      };
    },

    icaTransfer(value: MsgIcaTransfer) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaTransfer",
        value: MsgIcaTransfer.toJSON(value)
      };
    },

    icaAutoStaking(value: MsgIcaAutoStaking) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaAutoStaking",
        value: MsgIcaAutoStaking.toJSON(value)
      };
    },

    icaRegisterHostAccount(value: MsgRegisterHostAccount) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterHostAccount",
        value: MsgRegisterHostAccount.toJSON(value)
      };
    },

    deleteRegisteredZone(value: MsgDeleteRegisteredZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone",
        value: MsgDeleteRegisteredZone.toJSON(value)
      };
    },

    changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo",
        value: MsgChangeRegisteredZoneInfo.toJSON(value)
      };
    }

  },
  fromJSON: {
    registerZone(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterZone",
        value: MsgRegisterZone.fromJSON(value)
      };
    },

    icaDelegate(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaDelegate",
        value: MsgIcaDelegate.fromJSON(value)
      };
    },

    icaUndelegate(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaUndelegate",
        value: MsgIcaUndelegate.fromJSON(value)
      };
    },

    icaTransfer(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaTransfer",
        value: MsgIcaTransfer.fromJSON(value)
      };
    },

    icaAutoStaking(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaAutoStaking",
        value: MsgIcaAutoStaking.fromJSON(value)
      };
    },

    icaRegisterHostAccount(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterHostAccount",
        value: MsgRegisterHostAccount.fromJSON(value)
      };
    },

    deleteRegisteredZone(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone",
        value: MsgDeleteRegisteredZone.fromJSON(value)
      };
    },

    changeRegisteredZoneInfo(value: any) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo",
        value: MsgChangeRegisteredZoneInfo.fromJSON(value)
      };
    }

  },
  fromPartial: {
    registerZone(value: MsgRegisterZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterZone",
        value: MsgRegisterZone.fromPartial(value)
      };
    },

    icaDelegate(value: MsgIcaDelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaDelegate",
        value: MsgIcaDelegate.fromPartial(value)
      };
    },

    icaUndelegate(value: MsgIcaUndelegate) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaUndelegate",
        value: MsgIcaUndelegate.fromPartial(value)
      };
    },

    icaTransfer(value: MsgIcaTransfer) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaTransfer",
        value: MsgIcaTransfer.fromPartial(value)
      };
    },

    icaAutoStaking(value: MsgIcaAutoStaking) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgIcaAutoStaking",
        value: MsgIcaAutoStaking.fromPartial(value)
      };
    },

    icaRegisterHostAccount(value: MsgRegisterHostAccount) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgRegisterHostAccount",
        value: MsgRegisterHostAccount.fromPartial(value)
      };
    },

    deleteRegisteredZone(value: MsgDeleteRegisteredZone) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone",
        value: MsgDeleteRegisteredZone.fromPartial(value)
      };
    },

    changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo) {
      return {
        typeUrl: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo",
        value: MsgChangeRegisteredZoneInfo.fromPartial(value)
      };
    }

  }
};