import { createContext, FunctionComponent, useContext } from "react";
import { SigningStargateClient, SigningStargateClientOptions } from "@cosmjs/stargate";
import { ReactNode } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { chainInfo, ChainInfo } from "../config/chainInfo";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgPendingUndelegateRecord, MsgClaimSnAsset } from "novajs/api/nova/gal/v1/tx"

import {
    defaultRegistryTypes as defaultStargateTypes,
} from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
type WalletContextProps = {
    connectWallet: (info: ChainInfo) => Promise<boolean>,
    newWalletClient: (info: ChainInfo) => Promise<SigningStargateClient>,
    newWasmClient: (info: ChainInfo) => Promise<SigningCosmWasmClient>,
    getChainId: (name: string) => string,
    isWalletInstalled: () => boolean,
    enabled: boolean,
    novaAddress: string | null | undefined,
    novaClient: SigningStargateClient | null | undefined,
    novaWasmClient: SigningCosmWasmClient | null | undefined,
    error: any | null,
};

type WalletStorageProps = {
    novaAddress: string | null | undefined,
    novaClient: SigningStargateClient | null | undefined,
    novaWasmClient: SigningCosmWasmClient | null | undefined,
}

const WalletContext = createContext<WalletContextProps | null>(null);

export const WalletProvider = ({ children }: {
    children: ReactNode
}) => {
    const [enabled, setEnabled] = useState(false);
    const [novaAddress, setNovaAddress] = useState<string | null | undefined>(null);
    const [novaClient, setNovaClient] = useState<SigningStargateClient | null | undefined>(null);
    const [wasmClient, setWasmClient] = useState<SigningCosmWasmClient | null | undefined>(null);
    const [error, setError] = useState<any | null>(null);

    const newWalletClient = async (info: ChainInfo) => {
        const myRegistry = new Registry([
            ...defaultStargateTypes,
            ["/nova.gal.v1.MsgDeposit", MsgDeposit],
            ["/nova.gal.v1.MsgPendingUndelegateRecord", MsgPendingUndelegateRecord],
            ["/nova.gal.v1.MsgClaimSnAsset", MsgClaimSnAsset],
            ["/nova.gal.v1.MsgWithdraw", MsgWithdraw]

        ]);
        const offlineSigner: OfflineSigner = window.keplr.getOfflineSigner(info.chainId);
        const client = SigningStargateClient.connectWithSigner(
            info.rpc,
            offlineSigner,
            { registry: myRegistry }
        );

        return client;
    }

    const newWasmClient = async (info: ChainInfo) => {
        const offlineSigner: OfflineSigner = window.keplr.getOfflineSigner(info.chainId);

        const client = SigningCosmWasmClient.connectWithSigner(
            info.rpc,
            offlineSigner
        );

        return client;
    }

    const connectWallet = async (info: ChainInfo) => {
        if (isWalletInstalled()) {
            await window.keplr.experimentalSuggestChain(info);
            await window.keplr.enable(info.chainId);

            setEnabled(true);

            return true;
        } else {
            return false;
        }
    }

    const getChainId = (name: string) => {
        console.error("undefined");
        return "";
    }

    const isWalletInstalled = () => {
        return window.keplr != null && window.keplr != undefined;
    }

    const fetchClients = useCallback(async () => {
        try {
            if (enabled && isWalletInstalled()) {
                const offlineSigner: OfflineSigner = window.keplr.getOfflineSigner(chainInfo.chainId);
                let client = await newWalletClient(chainInfo);
                let wasmClient = await newWasmClient(chainInfo);
                let accounts = await offlineSigner.getAccounts();

                setNovaAddress(accounts[0].address);
                setNovaClient(client);
                setWasmClient(wasmClient);
            }
        } catch (err) {
            console.error(`failed to fetch wallet client error ${err}`);
            setError(err);
        }
    }, [enabled])


    useEffect(() => {
        //if wallet state in localstorage, use it
        const localData = localStorage.getItem('walletEnabled')
        const walletEnabled: boolean = localData && JSON.parse(localData);
        if (walletEnabled) {
            setEnabled(walletEnabled)
        }
    }, [novaClient])


    useEffect(() => {
        localStorage.setItem('walletEnabled', JSON.stringify(enabled))
        if (enabled) {
            fetchClients().catch(console.error);
        }
    }, [enabled])

    return (
        <WalletContext.Provider value={{
            connectWallet: connectWallet,
            newWalletClient: newWalletClient,
            newWasmClient: newWasmClient,
            getChainId: getChainId,
            isWalletInstalled: isWalletInstalled,
            enabled: enabled,
            novaAddress: novaAddress,
            novaClient: novaClient,
            novaWasmClient: wasmClient,
            error: error,
        }}>
            {children}
        </WalletContext.Provider>
    )
}

export const useWallet = () => {
    let context = useContext(WalletContext);
    if (!context) {
        throw new Error("You forgot to use WalletProvider");
    }

    return context;
}