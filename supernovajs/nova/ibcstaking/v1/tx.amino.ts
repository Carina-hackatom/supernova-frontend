import { IcaConnectionInfo, IcaAccount } from "./genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgRegisterZone, MsgIcaDelegate, MsgIcaUndelegate, MsgIcaTransfer, MsgIcaAutoStaking, MsgRegisterHostAccount, MsgDeleteRegisteredZone, MsgChangeRegisteredZoneInfo } from "./tx";
export interface AminoMsgRegisterZone extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgRegisterZone";
  value: {
    zone_id: string;
    ica_info: {
      connection_id: string;
      port_id: string;
    };
    ica_account: {
      daomodifier_address: string;
      host_address: string;
      balance: {
        denom: string;
        amount: string;
      };
    };
    validator_address: string;
    base_denom: string;
  };
}
export interface AminoMsgIcaDelegate extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgIcaDelegate";
  value: {
    zone_id: string;
    host_address: string;
    daomodifier_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgIcaUndelegate extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgIcaUndelegate";
  value: {
    zone_id: string;
    host_address: string;
    daomodifier_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgIcaTransfer extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgIcaTransfer";
  value: {
    zone_id: string;
    host_address: string;
    daomodifier_address: string;
    receiver_address: string;
    ica_transfer_port_id: string;
    ica_transfer_channel_id: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgIcaAutoStaking extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgIcaAutoStaking";
  value: {
    zone_id: string;
    host_address: string;
    daomodifier_address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgRegisterHostAccount extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgRegisterHostAccount";
  value: {
    zone_id: string;
    account_info: {
      daomodifier_address: string;
      host_address: string;
      balance: {
        denom: string;
        amount: string;
      };
    };
  };
}
export interface AminoMsgDeleteRegisteredZone extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone";
  value: {
    zone_id: string;
    daomodifier_address: string;
  };
}
export interface AminoMsgChangeRegisteredZoneInfo extends AminoMsg {
  type: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo";
  value: {
    zone_id: string;
    ica_info: {
      connection_id: string;
      port_id: string;
    };
    ica_account: {
      daomodifier_address: string;
      host_address: string;
      balance: {
        denom: string;
        amount: string;
      };
    };
    validator_address: string;
    base_denom: string;
  };
}
export const AminoConverter = {
  "/nova.ibcstaking.v1.MsgRegisterZone": {
    aminoType: "/nova.ibcstaking.v1.MsgRegisterZone",
    toAmino: ({
      zoneId,
      icaInfo,
      icaAccount,
      validatorAddress,
      baseDenom
    }: MsgRegisterZone): AminoMsgRegisterZone["value"] => {
      return {
        zone_id: zoneId,
        ica_info: {
          connection_id: icaInfo.connectionId,
          port_id: icaInfo.portId
        },
        ica_account: {
          daomodifier_address: icaAccount.daomodifierAddress,
          host_address: icaAccount.hostAddress,
          balance: {
            denom: icaAccount.balance.denom,
            amount: Long.fromNumber(icaAccount.balance.amount).toString()
          }
        },
        validator_address: validatorAddress,
        base_denom: baseDenom
      };
    },
    fromAmino: ({
      zone_id,
      ica_info,
      ica_account,
      validator_address,
      base_denom
    }: AminoMsgRegisterZone["value"]): MsgRegisterZone => {
      return {
        zoneId: zone_id,
        icaInfo: {
          connectionId: ica_info.connection_id,
          portId: ica_info.port_id
        },
        icaAccount: {
          daomodifierAddress: ica_account.daomodifier_address,
          hostAddress: ica_account.host_address,
          balance: {
            denom: ica_account.balance.denom,
            amount: ica_account.balance.amount
          }
        },
        validatorAddress: validator_address,
        baseDenom: base_denom
      };
    }
  },
  "/nova.ibcstaking.v1.MsgIcaDelegate": {
    aminoType: "/nova.ibcstaking.v1.MsgIcaDelegate",
    toAmino: ({
      zoneId,
      hostAddress,
      daomodifierAddress,
      amount
    }: MsgIcaDelegate): AminoMsgIcaDelegate["value"] => {
      return {
        zone_id: zoneId,
        host_address: hostAddress,
        daomodifier_address: daomodifierAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      zone_id,
      host_address,
      daomodifier_address,
      amount
    }: AminoMsgIcaDelegate["value"]): MsgIcaDelegate => {
      return {
        zoneId: zone_id,
        hostAddress: host_address,
        daomodifierAddress: daomodifier_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/nova.ibcstaking.v1.MsgIcaUndelegate": {
    aminoType: "/nova.ibcstaking.v1.MsgIcaUndelegate",
    toAmino: ({
      zoneId,
      hostAddress,
      daomodifierAddress,
      amount
    }: MsgIcaUndelegate): AminoMsgIcaUndelegate["value"] => {
      return {
        zone_id: zoneId,
        host_address: hostAddress,
        daomodifier_address: daomodifierAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      zone_id,
      host_address,
      daomodifier_address,
      amount
    }: AminoMsgIcaUndelegate["value"]): MsgIcaUndelegate => {
      return {
        zoneId: zone_id,
        hostAddress: host_address,
        daomodifierAddress: daomodifier_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/nova.ibcstaking.v1.MsgIcaTransfer": {
    aminoType: "/nova.ibcstaking.v1.MsgIcaTransfer",
    toAmino: ({
      zoneId,
      hostAddress,
      daomodifierAddress,
      receiverAddress,
      icaTransferPortId,
      icaTransferChannelId,
      amount
    }: MsgIcaTransfer): AminoMsgIcaTransfer["value"] => {
      return {
        zone_id: zoneId,
        host_address: hostAddress,
        daomodifier_address: daomodifierAddress,
        receiver_address: receiverAddress,
        ica_transfer_port_id: icaTransferPortId,
        ica_transfer_channel_id: icaTransferChannelId,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      zone_id,
      host_address,
      daomodifier_address,
      receiver_address,
      ica_transfer_port_id,
      ica_transfer_channel_id,
      amount
    }: AminoMsgIcaTransfer["value"]): MsgIcaTransfer => {
      return {
        zoneId: zone_id,
        hostAddress: host_address,
        daomodifierAddress: daomodifier_address,
        receiverAddress: receiver_address,
        icaTransferPortId: ica_transfer_port_id,
        icaTransferChannelId: ica_transfer_channel_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/nova.ibcstaking.v1.MsgIcaAutoStaking": {
    aminoType: "/nova.ibcstaking.v1.MsgIcaAutoStaking",
    toAmino: ({
      zoneId,
      hostAddress,
      daomodifierAddress,
      amount
    }: MsgIcaAutoStaking): AminoMsgIcaAutoStaking["value"] => {
      return {
        zone_id: zoneId,
        host_address: hostAddress,
        daomodifier_address: daomodifierAddress,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      zone_id,
      host_address,
      daomodifier_address,
      amount
    }: AminoMsgIcaAutoStaking["value"]): MsgIcaAutoStaking => {
      return {
        zoneId: zone_id,
        hostAddress: host_address,
        daomodifierAddress: daomodifier_address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/nova.ibcstaking.v1.MsgRegisterHostAccount": {
    aminoType: "/nova.ibcstaking.v1.MsgRegisterHostAccount",
    toAmino: ({
      zoneId,
      accountInfo
    }: MsgRegisterHostAccount): AminoMsgRegisterHostAccount["value"] => {
      return {
        zone_id: zoneId,
        account_info: {
          daomodifier_address: accountInfo.daomodifierAddress,
          host_address: accountInfo.hostAddress,
          balance: {
            denom: accountInfo.balance.denom,
            amount: Long.fromNumber(accountInfo.balance.amount).toString()
          }
        }
      };
    },
    fromAmino: ({
      zone_id,
      account_info
    }: AminoMsgRegisterHostAccount["value"]): MsgRegisterHostAccount => {
      return {
        zoneId: zone_id,
        accountInfo: {
          daomodifierAddress: account_info.daomodifier_address,
          hostAddress: account_info.host_address,
          balance: {
            denom: account_info.balance.denom,
            amount: account_info.balance.amount
          }
        }
      };
    }
  },
  "/nova.ibcstaking.v1.MsgDeleteRegisteredZone": {
    aminoType: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone",
    toAmino: ({
      zoneId,
      daomodifierAddress
    }: MsgDeleteRegisteredZone): AminoMsgDeleteRegisteredZone["value"] => {
      return {
        zone_id: zoneId,
        daomodifier_address: daomodifierAddress
      };
    },
    fromAmino: ({
      zone_id,
      daomodifier_address
    }: AminoMsgDeleteRegisteredZone["value"]): MsgDeleteRegisteredZone => {
      return {
        zoneId: zone_id,
        daomodifierAddress: daomodifier_address
      };
    }
  },
  "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo": {
    aminoType: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo",
    toAmino: ({
      zoneId,
      icaInfo,
      icaAccount,
      validatorAddress,
      baseDenom
    }: MsgChangeRegisteredZoneInfo): AminoMsgChangeRegisteredZoneInfo["value"] => {
      return {
        zone_id: zoneId,
        ica_info: {
          connection_id: icaInfo.connectionId,
          port_id: icaInfo.portId
        },
        ica_account: {
          daomodifier_address: icaAccount.daomodifierAddress,
          host_address: icaAccount.hostAddress,
          balance: {
            denom: icaAccount.balance.denom,
            amount: Long.fromNumber(icaAccount.balance.amount).toString()
          }
        },
        validator_address: validatorAddress,
        base_denom: baseDenom
      };
    },
    fromAmino: ({
      zone_id,
      ica_info,
      ica_account,
      validator_address,
      base_denom
    }: AminoMsgChangeRegisteredZoneInfo["value"]): MsgChangeRegisteredZoneInfo => {
      return {
        zoneId: zone_id,
        icaInfo: {
          connectionId: ica_info.connection_id,
          portId: ica_info.port_id
        },
        icaAccount: {
          daomodifierAddress: ica_account.daomodifier_address,
          hostAddress: ica_account.host_address,
          balance: {
            denom: ica_account.balance.denom,
            amount: ica_account.balance.amount
          }
        },
        validatorAddress: validator_address,
        baseDenom: base_denom
      };
    }
  }
};