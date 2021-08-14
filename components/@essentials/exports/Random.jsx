import { Fragment, useState } from "react"
import { LightningBoltIcon, ClipboardCopyIcon } from "@heroicons/react/solid"
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton } from "react-share"
import { Quotes } from "./data/Quotes"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Random() {
    const [quote, setQuote] = useState(Quotes[Math.floor(Math.random() * (Quotes.length))])
    const randomQuotes = () => {
        setQuote([Quotes[Math.floor(Math.random() * (Quotes.length))]])
    }
    return (
        <Fragment>
            <div className="mt-16 h-16 rounded-3xl w-full max-w-5xl lg:h-20 border-2 border-gray-200 bg-gray-100">
                <div className="flex justify-center items-center h-full">
                    <span className="font-sarabun font-medium text-center text-sm lg:text-xl text-gray-700">
                    &#8220;{quote}&#8221;
                    </span>
                </div>
            </div>
            <div className="mt-20 flex flex-row justify-between items-center">
                <button
                    className={classNames(
                        "m-2 px-4 py-3 rounded-xl font-medium text-white bg-purple-600 hover:bg-purple-500",
                        "focus:outline-none focus:ring-0 inline-flex items-center",
                        "transition duration-150 ease-in-out"
                    )}
                    onClick={randomQuotes}
                >
                    <LightningBoltIcon className="w-4" />&nbsp;Randomize
                </button>
            </div>
            <div className="mt-6 flex flex-row justify-between items-center">
                <FacebookShareButton 
                    className="m-2" 
                    url="https://wokism-quotes.vercel.app"
                    quote={quote} 
                    hashtag="#ThisIsMyWorkismDiscourse"
                >
                    <FacebookIcon size={48} round={true} />
                </FacebookShareButton>
                <TwitterShareButton 
                    className="m-2"
                    url="https://wokism-quotes.vercel.app"
                    title={quote}
                    via="Generate the discourse of wokism that are common in Thailand"
                >
                    <TwitterIcon size={48} round={true} />
                </TwitterShareButton>
                <TelegramShareButton
                    className="m-2"
                    url="https://wokism-quotes.vercel.app"
                    title={quote}
                >
                    <TelegramIcon size={48} round={true} />
                </TelegramShareButton>
            </div>
        </Fragment>
    )
}