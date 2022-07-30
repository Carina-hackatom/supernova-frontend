import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, SigningStargateClient } from "@cosmjs/stargate";
import { IBCTokenInfo } from "core/config/IBCTokenInfo";
import { useWallet } from "./useWallet";
import { coin } from "@cosmjs/stargate";
import { chainInfo } from "core/config/chainInfo";

async function fetchTokenBalance({
  client,
  address,
}: {
  client: SigningStargateClient;
  address: string;
}) {
  const fetchTokenBalances = await client.getAllBalances(address);
  console.log(fetchTokenBalances);
  let balances: Coin[] = [];
  fetchTokenBalances.map((balance) => {
    if (balance.denom.includes("ibc/")) {
      let convertedToken = convertIbcToNative(balance);
      convertedToken !== undefined && balances.push(convertedToken);
    } else {
      const decimals = chainInfo.currencies[0].coinDecimals;
      const denom = chainInfo.currencies[0].coinDenom;
      let amount = convertAmount(balance.amount, decimals);
      let nativeToken = { amount: String(amount), denom: denom }; //error
      balances.push(nativeToken);
    }
  });
  return balances;
}

async function fetchIBCTokenBalance({
  client,
  address,
}: {
  client: SigningStargateClient;
  address: string;
}) {
  const fetchTokenBalances = await client.getAllBalances(address);
  console.log(fetchTokenBalances);
  let balances: Coin[] = [];
  fetchTokenBalances.map((balance) => {
    if (balance.denom.includes("ibc/")) {
      let convertedToken = convertIbcToNative(balance);
      convertedToken !== undefined && balances.push(convertedToken);
    }
  });
  return balances;
}

const convertIbcToNative = (balance?: Coin) => {
  let IBCToken = IBCTokenInfo.find(
    (token) => token.coinIBCDenom === balance?.denom
  );
  if (IBCToken) {
    return coin(String(balance?.amount), IBCToken?.coinNativeDenom);
  }
  return undefined;
};

const convertAmount = (amount: string, decimals: number) => {
  return Number(amount) / 10 ** decimals;
};

export const useTokenBalances = async () => {
  let { enabled, novaAddress, novaClient } = useWallet();
  let balances;

  if (enabled && novaClient && novaAddress) {
    balances = await fetchTokenBalance({
      client: novaClient,
      address: novaAddress,
    });
  }
  return balances;
};

export const useIBCBalances = async () => {
  let { enabled, novaAddress, novaClient } = useWallet();
  let balances;

  if (enabled && novaClient && novaAddress) {
    balances = await fetchIBCTokenBalance({
      client: novaClient,
      address: novaAddress,
    });
  }
  return balances;
};
