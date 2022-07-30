export interface Coin {
  readonly coinDenom: string;
  readonly coinMinimalDenom: string;
  readonly coinDecimals: number;
}

export interface ChainInfo {
  readonly chainId: string;
  readonly chainName: string;
  readonly rpc: string;
  readonly rest: string;
  readonly bip44: {
    coinType: number;
  };
  readonly stakeCurrency: Coin;
  readonly currencies: Coin[];
  readonly feeCurrencies: Coin[];
  readonly bech32Config: {
    bech32PrefixAccAddr: string;
    bech32PrefixAccPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixValPub: string;
    bech32PrefixConsAddr: string;
    bech32PrefixConsPub: string;
  };
  readonly gasPriceStep: {
    low: number;
    average: number;
    high: number;
  };
}

//just for test
export const chainInfo = {
  chainId: "nova",
  chainName: "Novachain(nova)",
  rpc: "http://3.37.17.209:26657/",
  rest: "http://3.37.17.209:1317/",
  stakeCurrency: {
    coinDenom: "NOVA",
    coinMinimalDenom: "unova",
    coinDecimals: 6,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "nova",
    bech32PrefixAccPub: "novapub",
    bech32PrefixValAddr: "novavaloper",
    bech32PrefixValPub: "novavaloperpub",
    bech32PrefixConsAddr: "novavalcons",
    bech32PrefixConsPub: "novavalconspub",
  },
  currencies: [
    {
      coinDenom: "NOVA",
      coinMinimalDenom: "unova",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "NOVA",
      coinMinimalDenom: "unova",
      coinDecimals: 6,
    },
  ],
  gasPriceStep: {
    low: 0.0,
    average: 0.025,
    high: 0.04,
  },
};
