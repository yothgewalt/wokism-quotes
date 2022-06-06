import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from "@nextui-org/react";
import { NextPage } from 'next'
import { Fragment } from 'react';
import Head from 'next/head';

const WoskimQuotes: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <Fragment>
      <NextUIProvider>
        <Head>
          <base href="/" />
          <meta charSet="utf-8" />
          <title>Wokism Quotes</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </NextUIProvider>
    </Fragment>
  );
}

export default WoskimQuotes;