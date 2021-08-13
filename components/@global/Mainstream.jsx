import { Fragment } from "react/cjs/react.production.min";
import Proptypes from "prop-types"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Mainstream({ unhighlight, highlight }) {
    return (
        <Fragment>
            <div className="container mx-auto px-4 my-40 max-w-9xl">
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <h2 className="font-bold text-7xl text-black">
                        {unhighlight}
                    </h2>
                    <h1 className={classNames(
                        "font-bold text-7xl text-transparent bg-clip-text",
                        "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                    )}>
                        {highlight}
                    </h1>
                </div>
            </div>
        </Fragment>
    )
}

Mainstream.propTypes = {
    unhighlight: Proptypes.string.isRequired,
    highlight: Proptypes.string.isRequired
}