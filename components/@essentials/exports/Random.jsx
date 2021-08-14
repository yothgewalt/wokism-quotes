import { Fragment, useState } from "react"
import { useEffect } from "react/cjs/react.production.min"

const quotes = [
    "ถ้าการเมืองดี เราจะมีรัฐสวัสดิการ มีความมั่นคง กินดีอยู่ดีในชีวิต และ อยู่สุขสบายชั่วลูกชั่วหลาน",
    "ไม่ได้อยากเห็นการพัฒนา อยากเห็นเม็ดเงิน โลกทุนนิยมขับเคลื่อนด้วยเงิน อ่า แบบนี้เหรอคะที่พี่ต้องการ?",
    "ความเท่าเทียมเป็นสิทธิ",
    "ทรานส์เป็นผู้หญิง",
    "หยุดทำร้ายประชาชน",
    "ทุกคนควรจะได้รับรัฐสวัสดิการพื้นฐาน",
    "ชาติ ศาสนา ประชาชน",
    "หยุดคุกคามประชาชน",
    "อยากอยู่ในโลกที่ไม่มีทุนนิยม",
    "รุ่นเก่า หัวโบราณมีความคิดทุนนิยม ใช่บ้านเราเป็นสลิ่ม ตาไม่ยอมสว่าง ไม่เข้าใจปัญหาฟังแต่อีสนธิอยู่ได้",
    "ทุนนิยมเฮ็งซวย",
    "ก็ใช่ดิ ทุนนิยมมันเฮงซวย",
    "สมแล้วที่แม่งเป็นสังคมทุนนิยม",
    "เกลียดคนรวยว่ะ แค่มีเงินมากกว่าก็มีทางเลือกมากกว่าแล้ว ทุนนิยมเฮงซวย",
    "ถ้าเราล้มทุนนิยมได้ เราคงได้เห็นคนทำตามความฝันตัวเองกันมากขึ้น",
    "ทุนนิยมมันเหี้ย",
    "ลัทธิทุนนิยมอีกละ",
    "ตัวอย่างของธุรกิจในประเทศเผด็จการทุนนิยม",
    "ทุนนิยมมันเหี้ยจริงๆ แต่กูเอายิ้มไปแลกไก่ทอดไม่ได้อ่ะ",
    "เกลียดระบบทุนนิยมในไทย งานหนักเงินเท่าหมอย ของก็แพง สุขภาพจิตก็แย่",
    "เกิดมาเพื่อเรียนให้หนัก และปรับตัวตามการหมุนของทุนนิยมให้ทัน",
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Random() {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * (quotes.length))])
    const randomQuotes = () => {
        setQuote([quotes[Math.floor(Math.random() * (quotes.length))]])
    }
    return (
        <Fragment>
            <div className="mt-14 h-20 rounded-xl w-full max-w-6xl lg:h-24 bg-gray-200">
                <div className="flex justify-center items-center h-full">
                    <span className="font-sarabun font-medium text-center text-sm lg:text-2xl">
                    &#8220;{quote}&#8221;
                    </span>
                </div>
            </div>
            <div className="mt-16 flex flex-row justify-between items-center">
                <button
                    className={classNames(
                        "px-4 py-2 rounded-xl font-medium text-white bg-purple-600 hover:bg-purple-500",
                        "transition duration-150 ease-in-out"
                    )}
                    onClick={randomQuotes}
                >Random Quotes
                </button>
            </div>
        </Fragment>
    )
}