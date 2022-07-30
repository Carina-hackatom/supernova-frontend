import { Coin, coin } from "@cosmjs/stargate";
import { ListTokenCard } from "components/stake/ListTokenCard";
import { useIBCBalances, useTokenBalances } from "core/hooks/useTokenBalances";
import { useWallet } from "core/hooks/useWallet";
import { MsgClaimSnAsset } from "novajs/api/nova/gal/v1/tx";
import { useEffect, useState } from "react";
import { nova } from '../../supernovajs'
export const StakeModule = () => {
    const mockTokens: Coin[] = [
        { denom: 'wAtom', amount: '0' }
    ];

    const IBCBalances = useIBCBalances();
    const [snBalance, setSnBalance] = useState<Coin[]>([{ amount: '0', denom: 'snAtom' }]);
    const { novaAddress, novaClient, enabled } = useWallet()
    const [tokenList, setTokenList] = useState(() => mockTokens);
    const [depositState, setDepositState] = useState('Stake');
    const [enableClaim, setEnableClaim] = useState(false);
    const [claimState, setClaimState] = useState('Claim');
    const getIBCBalances = async () => {
        let fetchedBalances = await IBCBalances;
        if (fetchedBalances) setTokenList(fetchedBalances)
    }

    const getBalance = async () => {
        if (enabled && novaClient && novaAddress) {
            let balances = await novaClient.getBalance(novaAddress, 'snuatom');
            let snBalances = balances?.amount
            setSnBalance([{ amount: snBalances, denom: 'snAtom' }]);
        }
    }
    useEffect(() => {
        if (novaAddress && novaClient && enabled) {
            getIBCBalances();
        }
    }, [novaClient, depositState])

    useEffect(() => {
        if (novaAddress && novaClient && enabled) {
            getBalance();
        }
    }, [novaClient, claimState])

    const TestDeposit = async () => {
        setDepositState('• • •');
        if (enabled && novaAddress && novaClient) {
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
            const {
                deposit
            } = nova.gal.v1.MessageComposer.withTypeUrl;

            const msgDeposit = deposit({
                depositor: novaAddress,
                amount: coin('100000', 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'),
                zoneId: 'gaia',
                transferPortId: 'transfer',
                transferChannelId: 'channel-0'
            })

            novaClient.signAndBroadcast(
                novaAddress, [
                msgDeposit
            ], fee
            ).then(result => {
                console.log(result);
                setDepositState('Success');
                setEnableClaim(true);
            }).catch(error => console.log(error))
        }
    }

    const TestClaim = () => {
        if (enabled && novaAddress && novaClient) {
            setClaimState('• • •');
            const {
                claimSnAsset
            } = nova.gal.v1.MessageComposer.withTypeUrl;

            const msgClaim = claimSnAsset({
                zoneId: "gaia",
                claimer: novaAddress,
                transferPortId: "transfer",
                transferChannelId: "channel-0"
            });

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
                novaAddress, [msgClaim], fee
            ).then(result => {
                console.log(result);
                setClaimState('Success Claim')
            }).catch(error => console.log(error))
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="border-solid border-yellow-default border-2 bg-white p-[40px] rounded flex flex-col w-full">
                <div className="flex flex-col space-y-[15px]">
                    <ListTokenCard tokenList={tokenList} styles={"yellow"} />
                    {/* <ListTokenCard tokenList={mocksnTokens} styles={"purple"} /> */}
                </div>
                <button onClick={TestDeposit}
                    className="w-full h-16 mt-5 py-2 px-4 rounded bg-blue-default text-white text-24 font-bold hover:bg-blue-light">{depositState}</button>
            </div>
            <div className="mt-6 border-solid border-yellow-default border-2 bg-white p-[40px] rounded flex flex-row w-full justify-between items-center">
                <span className="text-blue-default text-20 font-bold">{snBalance[0].amount} snAtom <span className="text-gray-dark">Claimed</span></span>
                <button onClick={TestClaim}
                    className="w-1/2 h-16 py-2 px-4 rounded bg-blue-default text-white text-24 font-bold hover:bg-blue-light">{claimState}</button>
            </div>

        </div>
    )
}



