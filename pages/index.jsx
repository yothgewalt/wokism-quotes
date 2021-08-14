import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'
import Header from '../components/@global/Header'
import Lander from '../components/@essentials/Lander'

export default function Index() {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <title>Wokism Quotes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="Wokism Discourse" />
                <meta property="og:url" content="" />
                <meta property="og:title" content="Wokism Quotes" />
                <meta property="og:description" content="Generate the discourse of wokism that are common in Thailand" />
            </Head>
            <div className="bg-white font-gt-walsheim font-normal text-base">
                <Header publisher="Wokism Quotes" definition="Donation" />
                <Lander unhighlight="Generate the discourse of wokism" highlight="that are common in Thailand" />
            </div>
        </Fragment>
    )
}
