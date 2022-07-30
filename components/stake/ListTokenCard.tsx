import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { tokenListProps } from "./StakeTypes";
import { DropdownTokenList } from "./DropdownTokenList";
import { Arrow } from "components/common/arrow";
import { Coin } from "@cosmjs/stargate";

export const ListTokenCard = ({ tokenList, styles }: { tokenList: Array<Coin>, styles: String }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownHandler = () => {
        setOpenDropdown(prev => !prev);
    }

    const onOptionClicked = (event: any, values: any) => {
        if (values !== null) {
            //setSelectedToken(values);
            // setOpenDropdown(false);
        }
    }

    // const [selectedToken, setSelectedToken] = useState(() => tokenList[0]);

    return (
        <div className="w-full relative">
            <div className={clsx("flex flex-row justify-between items-center p-[40px]", {
                "yellow-border bg-yellow-light rounded border-solid border-yellow-default border-2": styles == "yellow",
                "purple-border bg-purple-light rounded border-solid border-purple-default border-2": styles == "purple",
            })}>
                <div className="flex flex-row items-start w-fit">
                    <Image src={"/atom.svg"} alt={"logo"} width={40} height={40} />
                    <div className="flex flex-col items-start w-fit ml-[10px]">
                        <div className="flex flex-row justify-start w-fit">
                            <div className="mr-[13px] text-black text-34 font-semibold leading-[40px]">{tokenList[0]?.denom}</div>
                            {/* <div onClick={dropdownHandler}>
                                <Arrow rotateTop={openDropdown} />
                            </div> */}
                        </div>
                        <div className="mt-[5px] mr-[13px] text-gray-medium text-16 font-medium">Balance : {tokenList[0]?.amount} {tokenList[0]?.denom}</div>
                    </div>
                </div>
                <div className="font-semibold text-34 text-black">{styles == 'purple' ? tokenList[0]?.amount : '100000'}</div>
                {/* for test : default stake amount 100000 */}
            </div >
            {/* {
                openDropdown &&
                <DropdownTokenList tokenList={tokenList} styles={styles} onOptionClicked={onOptionClicked} />
            } */}
        </div>
    )
}
