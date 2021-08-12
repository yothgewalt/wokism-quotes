import Head from 'next/head'
import { Fragment } from 'react/cjs/react.production.min'
import Header from '../components/@global/Header'

export default function Home() {
    return (
        <Fragment>
            <div className="bg-white font-gt-walsheim font-normal text-base">
                <Header publisher="Wokism Quotes" />
            </div>
        </Fragment>
    )
}
