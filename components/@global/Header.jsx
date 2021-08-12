import { Fragment } from "react";
import { AtSymbolIcon, EmojiHappyIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Proptypes from "prop-types"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Header({ publisher }) {
    return (
        <Fragment>
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="h-16 flex flex-row justify-between p-2 items-center max-h-full overflow-hidden">
                        <Link href="/">
                            <a className="inline-flex">
                                <h1 className={classNames(
                                    "h-full inline-flex items-center font-medium text-black hover:text-gray-600",
                                    "transition duration-150 ease-in-out"
                                )}>
                                    <AtSymbolIcon className="w-5" /> {publisher}
                                </h1>
                            </a>
                        </Link>
                        <button className={classNames(
                            "px-4 py-2 inline-flex rounded-xl bg-blue-500 hover:bg-blue-600 hover:text-white",
                            "transition duration-150 ease-in-out"
                        )}>
                            <Link href="/donation">
                                <a className="inline-flex items-center font-medium text-gray-50">
                                    <EmojiHappyIcon className="w-5" />&nbsp;Donation
                                </a>
                            </Link>
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

Header.propTypes = {
    publisher: Proptypes.string.isRequired
}