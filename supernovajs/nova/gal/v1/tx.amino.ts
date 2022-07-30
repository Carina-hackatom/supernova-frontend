import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgDeposit, MsgDelegate, MsgUndelegate, MsgPendingUndelegateRecord, MsgWithdraw, MsgClaimSnAsset, MsgPendingWithdraw } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
  type: "/nova.gal.v1.MsgDeposit";
  value: {
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    };
    zone_id: string;
    transfer_port_id: string;
    transfer_channel_id: string;
  };
}
export interface AminoMsgDelegate extends AminoMsg {
  type: "/nova.gal.v1.MsgDelegate";
  value: {
    zone_id: string;
    controller_address: string;
    transfer_port_id: string;
    transfer_channel_id: string;
  };
}
export interface AminoMsgUndelegate extends AminoMsg {
  type: "/nova.gal.v1.MsgUndelegate";
  value: {
    zone_id: string;
    controller_address: string;
  };
}
export interface AminoMsgPendingUndelegateRecord extends AminoMsg {
  type: "/nova.gal.v1.MsgPendingUndelegateRecord";
  value: {
    zone_id: string;
    depositor: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgWithdraw extends AminoMsg {
  type: "/nova.gal.v1.MsgWithdraw";
  value: {
    zone_id: string;
    withdrawer: string;
    recipient: string;
    ica_transfer_port_id: string;
    ica_transfer_channel_id: string;
  };
}
export interface AminoMsgClaimSnAsset extends AminoMsg {
  type: "/nova.gal.v1.MsgClaimSnAsset";
  value: {
    zone_id: string;
    claimer: string;
    transfer_port_id: string;
    transfer_channel_id: string;
  };
}
export interface AminoMsgPendingWithdraw extends AminoMsg {
  type: "/nova.gal.v1.MsgPendingWithdraw";
  value: {
    zone_id: string;
    daomodifier_address: string;
    transfer_port_id: string;
    transfer_channel_id: string;
    chain_time: {
      seconds: string;
      nanos: number;
    };
  };
}
export const AminoConverter = {
  "/nova.gal.v1.MsgDeposit": {
    aminoType: "/nova.gal.v1.MsgDeposit",
    toAmino: ({
      depositor,
      amount,
      zoneId,
      transferPortId,
      transferChannelId
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        depositor,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        },
        zone_id: zoneId,
        transfer_port_id: transferPortId,
        transfer_channel_id: transferChannelId
      };
    },
    fromAmino: ({
      depositor,
      amount,
      zone_id,
      transfer_port_id,
      transfer_channel_id
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        depositor,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        zoneId: zone_id,
        transferPortId: transfer_port_id,
        transferChannelId: transfer_channel_id
      };
    }
  },
  "/nova.gal.v1.MsgDelegate": {
    aminoType: "/nova.gal.v1.MsgDelegate",
    toAmino: ({
      zoneId,
      controllerAddress,
      transferPortId,
      transferChannelId
    }: MsgDelegate): AminoMsgDelegate["value"] => {
      return {
        zone_id: zoneId,
        controller_address: controllerAddress,
        transfer_port_id: transferPortId,
        transfer_channel_id: transferChannelId
      };
    },
    fromAmino: ({
      zone_id,
      controller_address,
      transfer_port_id,
      transfer_channel_id
    }: AminoMsgDelegate["value"]): MsgDelegate => {
      return {
        zoneId: zone_id,
        controllerAddress: controller_address,
        transferPortId: transfer_port_id,
        transferChannelId: transfer_channel_id
      };
    }
  },
  "/nova.gal.v1.MsgUndelegate": {
    aminoType: "/nova.gal.v1.MsgUndelegate",
    toAmino: ({
      zoneId,
      controllerAddress
    }: MsgUndelegate): AminoMsgUndelegate["value"] => {
      return {
        zone_id: zoneId,
        controller_address: controllerAddress
      };
    },
    fromAmino: ({
      zone_id,
      controller_address
    }: AminoMsgUndelegate["value"]): MsgUndelegate => {
      return {
        zoneId: zone_id,
        controllerAddress: controller_address
      };
    }
  },
  "/nova.gal.v1.MsgPendingUndelegateRecord": {
    aminoType: "/nova.gal.v1.MsgPendingUndelegateRecord",
    toAmino: ({
      zoneId,
      depositor,
      amount
    }: MsgPendingUndelegateRecord): AminoMsgPendingUndelegateRecord["value"] => {
      return {
        zone_id: zoneId,
        depositor,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      zone_id,
      depositor,
      amount
    }: AminoMsgPendingUndelegateRecord["value"]): MsgPendingUndelegateRecord => {
      return {
        zoneId: zone_id,
        depositor,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/nova.gal.v1.MsgWithdraw": {
    aminoType: "/nova.gal.v1.MsgWithdraw",
    toAmino: ({
      zoneId,
      withdrawer,
      recipient,
      icaTransferPortId,
      icaTransferChannelId
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        zone_id: zoneId,
        withdrawer,
        recipient,
        ica_transfer_port_id: icaTransferPortId,
        ica_transfer_channel_id: icaTransferChannelId
      };
    },
    fromAmino: ({
      zone_id,
      withdrawer,
      recipient,
      ica_transfer_port_id,
      ica_transfer_channel_id
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        zoneId: zone_id,
        withdrawer,
        recipient,
        icaTransferPortId: ica_transfer_port_id,
        icaTransferChannelId: ica_transfer_channel_id
      };
    }
  },
  "/nova.gal.v1.MsgClaimSnAsset": {
    aminoType: "/nova.gal.v1.MsgClaimSnAsset",
    toAmino: ({
      zoneId,
      claimer,
      transferPortId,
      transferChannelId
    }: MsgClaimSnAsset): AminoMsgClaimSnAsset["value"] => {
      return {
        zone_id: zoneId,
        claimer,
        transfer_port_id: transferPortId,
        transfer_channel_id: transferChannelId
      };
    },
    fromAmino: ({
      zone_id,
      claimer,
      transfer_port_id,
      transfer_channel_id
    }: AminoMsgClaimSnAsset["value"]): MsgClaimSnAsset => {
      return {
        zoneId: zone_id,
        claimer,
        transferPortId: transfer_port_id,
        transferChannelId: transfer_channel_id
      };
    }
  },
  "/nova.gal.v1.MsgPendingWithdraw": {
    aminoType: "/nova.gal.v1.MsgPendingWithdraw",
    toAmino: ({
      zoneId,
      daomodifierAddress,
      transferPortId,
      transferChannelId,
      chainTime
    }: MsgPendingWithdraw): AminoMsgPendingWithdraw["value"] => {
      return {
        zone_id: zoneId,
        daomodifier_address: daomodifierAddress,
        transfer_port_id: transferPortId,
        transfer_channel_id: transferChannelId,
        chain_time: chainTime
      };
    },
    fromAmino: ({
      zone_id,
      daomodifier_address,
      transfer_port_id,
      transfer_channel_id,
      chain_time
    }: AminoMsgPendingWithdraw["value"]): MsgPendingWithdraw => {
      return {
        zoneId: zone_id,
        daomodifierAddress: daomodifier_address,
        transferPortId: transfer_port_id,
        transferChannelId: transfer_channel_id,
        chainTime: chain_time
      };
    }
  }
};