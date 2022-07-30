import { useRouter } from "next/router";
import clsx from "clsx";

export const StakeHeader = () => {
    const router = useRouter();
    const isStake = router.pathname === "/stake";
    const onTogglechange = () => {
        isStake ? router.push("/unstake") : router.push("/stake")
    }
    return (
        <div className="w-[400px] h-[50px] p-[5px] mb-[30px] rounded-lg flex flex-row justify-between items-center relative bg-gray-dark font-medium text-20 cursor-pointer" >
            <div className="flex flex-row items-center justify-center w-1/2 h-full text-white" onClick={onTogglechange}>Stake</div>
            <div className="flex flex-row items-center justify-center w-1/2 h-full text-white" onClick={onTogglechange}>Unstake</div>
            <button className={clsx("z-30 absolute top-5px w-[204px] h-[40px] rounded-lg bg-yellow-default text-black cursor-pointer", {
                "left-[5px]": isStake === true, "left-[190px]": isStake === false
            })} onClick={onTogglechange}>{isStake ? "Stake" : "Unstake"}</button>
        </div >
    )
}