import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'
import Header from '../components/@global/Header'
import Lander from '../components/@essentials/Lander'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export default function Index() {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <title>Wokism Quotes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="Wokism Discourse" />
                <meta property="og:url" content="https://wokism-quotes.vercel.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Wokism Quotes" />
                <meta property="og:description" content="Generate the discourse of wokism that is common in Thailand" />
                <meta 
                    property="og:image"
                    content={
                        "https://i.imgur.com/oTC4gqC.png"
                    }
                />
            </Head>
            <div className="bg-white h-screen font-gt-walsheim font-normal text-base">
                <Header publisher="Wokism Quotes" definition="Coming soon" />
                <Lander unhighlight="Generate the discourse of wokism" highlight="that is common in Thailand" />
            </div>
        </Fragment>
    )
}
