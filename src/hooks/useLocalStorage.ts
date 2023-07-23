import { useEffect, useState } from "react"
import { DataType } from "../types/types"

export const useLocalStorage = (initialValue: DataType[], key: string) => {
    const getValue = () => {
        const storage = localStorage.getItem(key)

        if(storage) {
            return JSON.parse(storage)
        }

        return initialValue
    }

    const [value, setValue] = useState<DataType[]>(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}