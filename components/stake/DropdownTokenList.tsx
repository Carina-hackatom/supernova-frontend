import Image from "next/image";
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { tokenListProps } from "./StakeTypes";
import clsx from "clsx";
import { Coin } from "@cosmjs/stargate";

type DropdownProps = {
    tokenList: Array<Coin>,
    styles: String,
    onOptionClicked: (event: any, values: any) => void
}
export const DropdownTokenList = ({ tokenList, styles, onOptionClicked }: DropdownProps) => {
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        open: true,
        id: 'autocomplete',
        options: tokenList,
        onChange: onOptionClicked
    });
    return (
        <div className={clsx("top-[calc(100%-41px)] border-t-0 rounded-t-0 rounded-b w-full py-[20px] px-[40px] absolute", {
            "yellow-border bg-yellow-light border-solid border-yellow-default border-2 z-50": styles == "yellow",
            "purple-border bg-purple-light border-solid border-purple-default border-2 z-3": styles == "purple",
        })}>
            <div className="flex flex-row h-[38px] w-full py-0 px-[20px] rounded-lg bg-gray-medium"  {...getRootProps()}>
                <Image src={"/search.svg"} alt={"search"} width={20} height={21} />
                <input className="w-full ml-[5px] border-none font-medium text-white text-16 bg-gray-medium placeholder:text-white/50 placeholder:font-medium focus:outline-none" placeholder="Search Token" {...getInputProps()} />
            </div>
            {groupedOptions.length > 0 ? (
                <ul className={`${styles}-scroll-box`}  {...getListboxProps()}>
                    {(groupedOptions as typeof tokenList).map((option: Coin, index: number) => (
                        <li className={clsx("flex flex-row justify-between p-[12px] text-23 text-black font-semibold rounded",
                            { "hover:bg-yellow-default": styles == "yellow", "hover:bg-purple-default": styles == "purple" })} key={index} {...getOptionProps({ option, index })}>
                            <div className="flex flex-row gap-[7px]">
                                <Image src={"/atom.svg"} alt={"logo"} width={26} height={26} />
                                {option.denom}
                            </div>
                            {option.amount}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}



