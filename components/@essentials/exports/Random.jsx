import { Fragment, useState } from "react"

const quotes = [
    "ถ้าการเมืองดี เราจะมีรัฐสวัสดิการ มีความมั่นคง กินดีอยู่ดีในชีวิต และ อยู่สุขสบายชั่วลูกชั่วหลาน",
    "ความเท่าเทียมเป็นสิทธิ",
    "ทรานส์เป็นผู้หญิง",
    "หยุดทำร้ายประชาชน",
    "ทุกคนควรจะได้รับรัฐสวัสดิการพื้นฐาน",
    "ชาติ ศาสนา ประชาชน",
    "หยุดคุกคามประชาชน"
]

export default function Random() {
    return (
        <Fragment>
            <div className="mt-16 h-24 rounded-xl w-full max-w-6xl bg-gray-200">
                <div className="flex justify-center items-center h-full">
                    <span className="font-sarabun font-medium text-2xl">
                        {quotes[Math.floor(Math.random() * (quotes.length))]}
                    </span>
                </div>
            </div>
        </Fragment>
    )
}