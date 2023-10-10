import { useEffect, useState } from "react"
import {api} from "../api/api"
import { AboutI } from "../types/about"

export const useAbout = ():[AboutI[]] => {
    const [about, setAbout] = useState<AboutI[]>([])

    useEffect(() => {
        api.getAllAbout().then((res) => {
            setAbout(res)
        })
    }, [])

    return [about]
}