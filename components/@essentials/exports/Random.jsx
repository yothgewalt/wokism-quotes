import { Fragment, useState } from "react"
import { Strings } from "../data/strings"

const strings = [
    {
        message: "สวัสดิการจะทําให้ชีวิตของเราดีขึ้น หากทุกอย่างดี"
    },
    {
        message: "ประชาธิปไตยคือพระเจ้า"
    }
]

export default function Random() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            message: "สวัสดีไอ้สัส"
        }])
    }
    return (
        <Fragment>
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.message}</li>
                ))}
            </ul>
        </Fragment>
    )
}