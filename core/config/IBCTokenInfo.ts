export interface IBCCoin {
  readonly coinIBCDenom: string;
  readonly coinNativeDenom: string;
  readonly coinMinimalDenom: string;
  readonly coinNativeDenomForShow: string;
  readonly coinDecimals: number;
}

export const IBCTokenInfo: IBCCoin[] = [
  //ibc denom은 테스트용입니다, 바뀔예정
  {
    coinIBCDenom:
      "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    coinDecimals: 18,
    coinMinimalDenom: "uatom",
    coinNativeDenom: "wAtom",
    coinNativeDenomForShow: "ATOM",
  },
];
