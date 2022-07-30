import { Coin, coin } from "@cosmjs/stargate";
import { ListTokenCard } from "components/stake/ListTokenCard";
import { useTokenBalances } from "core/hooks/useTokenBalances";
import { useWallet } from "core/hooks/useWallet";
import { MsgPendingUndelegateRecord } from "novajs/api/nova/gal/v1/tx";
import { useEffect, useState } from "react";
import { nova } from '../../supernovajs'

export const UnstakeModule = () => {
    const [balance, setBalance] = useState<Coin[]>([{ amount: '0', denom: 'snAtom' }]);
    const [unstakeState, setUnstakeState] = useState('Start Unstake');
    const [withdrawState, setWithdrawState] = useState('Withdraw');
    const { novaAddress, novaClient, enabled } = useWallet()
    useEffect(() => {
        const getBalance = async () => {
            if (enabled && novaClient && novaAddress) {
                let balances = await novaClient.getBalance(novaAddress, 'snuatom');
                let snBalances = balances?.amount
                setBalance([{ amount: snBalances, denom: 'snAtom' }]);
            }
        }
        getBalance();
    }, [novaClient, unstakeState])

    const TestUnstake = async () => {
        if (enabled && novaAddress && novaClient && balance) {
            setUnstakeState('• • •')
            const {
                pendingUndelegateRecord
            } = nova.gal.v1.MessageComposer.withTypeUrl;
            const undelegateMsg = pendingUndelegateRecord(
                {
                    depositor: novaAddress,
                    amount: coin(balance[0].amount, 'snuatom'),
                    zoneId: 'gaia',
                }
            )

            const fee = {
                amount: [
                    {
                        amount: String(
                            0
                        ),
                        denom: 'unova',
                    },
                ],
                gas: String(300000),
            };
            novaClient.signAndBroadcast(
                novaAddress, [undelegateMsg], fee
            ).then(result => {
                console.log(result)
                setUnstakeState('Success')
            }).catch(error => console.log(error))
        }

    }

    const TestWithdraw = async () => {
        if (enabled && novaAddress && novaClient && balance) {
            setWithdrawState('• • •')
            const {
                withdraw
            } = nova.gal.v1.MessageComposer.withTypeUrl;
            const withdrawMsg = withdraw(
                {
                    zoneId: "gaia",
                    withdrawer: novaAddress,
                    recipient: novaAddress,
                    icaTransferPortId: "transfer",
                    icaTransferChannelId: "channel-0"
                }
            )

            const fee = {
                amount: [
                    {
                        amount: String(
                            0
                        ),
                        denom: 'unova',
                    },
                ],
                gas: String(300000),
            };
            novaClient.signAndBroadcast(
                novaAddress, [withdrawMsg], fee
            ).then(result => {
                console.log(result)
                setWithdrawState('Success')
            }).catch(error => console.log(error))
        }

    }

    return (
        <>
            <div className="border-solid border-yellow-default border-2 bg-white p-[40px] rounded flex flex-col w-full">
                <div className="flex flex-col space-y-[15px]">
                    <ListTokenCard tokenList={balance} styles={"purple"} />
                </div>
                <button className="w-full h-16 mt-5 py-2 px-4 rounded bg-blue-default text-white text-24 font-bold hover:bg-blue-light" onClick={TestUnstake}>{unstakeState}</button>
                <span className=" mt-9 text-15 text-gray-text font-medium">*Unbonding period will takes depending on its own</span>
                <span className="text-15 text-gray-text font-medium">ex) ATOM will take more than 21 days</span>
            </div>
            <div className="mt-6 border-solid border-yellow-default border-2 bg-white p-[40px] rounded flex flex-row w-full justify-between items-center">
                <span className="text-blue-default text-20 font-bold">wAtom<br /><span className="text-gray-dark">Withdraw available</span></span>
                <button onClick={TestWithdraw}
                    className="w-1/2 h-16 py-2 px-4 rounded bg-blue-default text-white text-24 font-bold hover:bg-blue-light">{withdrawState}</button>
            </div>
        </>
    )
}

