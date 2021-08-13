import { Fragment } from "react";
import { AtSymbolIcon, EmojiHappyIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Proptypes from "prop-types"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Header({ publisher, definition }) {
    return (
        <Fragment>
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="h-16 flex flex-row justify-between p-2 items-center max-h-full overflow-hidden">
                        <a href="https://github.com/einemutigeschlacht/wokism-quotes" className="inline-flex">
                            <h1 className={classNames(
                                "h-full inline-flex items-center font-medium text-lg text-black hover:text-gray-600",
                                "transition duration-150 ease-in-out"
                            )}>
                                <AtSymbolIcon className="w-5" /> {publisher}
                            </h1>
                        </a>
                        <button className={classNames(
                            "px-4 py-2 inline-flex rounded-xl bg-pink-500 hover:bg-pink-600",
                            "transition duration-150 ease-in-out"
                        )}>
                            <Link href="/donation">
                                <a className="inline-flex items-center font-medium text-white">
                                    <EmojiHappyIcon className="w-5" />&nbsp;{definition}
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
    publisher: Proptypes.string.isRequired,
    definition: Proptypes.string.isRequired
}