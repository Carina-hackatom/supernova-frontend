import { useEffect, useState } from 'react';
import { useWallet } from "core/hooks/useWallet";
import { chainInfo } from "core/config/chainInfo";
export const ConnectWalletBtn = () => {
    let { enabled, connectWallet, novaAddress, novaClient } = useWallet();
    const [balance, setBalance] = useState("");
    const getBalance = async () => {
        if (enabled && novaClient && novaAddress) {
            let balances = await novaClient.getBalance(novaAddress, 'unova');
            let novaBalances = balances?.amount
            let balancePretty = Number(novaBalances ? novaBalances : 0) / 10 ** 6 + "NOVA";
            setBalance(balancePretty);
        }
    }

    useEffect(() => {
        if (enabled) {
            getBalance();
        }
    }, [novaClient])

    return (
        <>
            {
                (enabled && novaClient && novaAddress) ? (
                    <div className="flex flex-row items-center border-2 border-blue-default bg-white text-black rounded-sm px-4 py-2">
                        <span className="">{novaAddress?.slice(0, 8) + "..." + novaAddress?.slice(-5)}</span>
                        <p className="text-blue-light ml-3 px-3  rounded-sm">
                            {balance}
                        </p>
                    </div>
                )
                    : (
                        <button
                            onClick={() => connectWallet(chainInfo)}
                            className="bg-blue-default hover:bg-blue-light text-white font-bold rounded-sm px-4 py-2">
                            Connect Keplr
                        </button>
                    )
            }
        </>
    )
}

