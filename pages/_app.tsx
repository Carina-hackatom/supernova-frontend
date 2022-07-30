import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next/types'
import {
    RecoilRoot,
} from 'recoil';

import { WalletProvider } from 'core/hooks/useWallet'
import { BaseLayout } from 'components/layout/baseLayout'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);
    return (
        <WalletProvider>
            <Head>
                <title>supernova</title>
            </Head>
            <RecoilRoot>
                <BaseLayout>
                    {getLayout(<Component {...pageProps} />)}
                </BaseLayout>
            </RecoilRoot>
        </WalletProvider>
    )
}

export default App