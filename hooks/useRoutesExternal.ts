import { useEffect, useState } from "react"
import {Route} from "../types/routes"
import {api} from "../api/api"

export const useRoutesExternal = ():[Route[]] => {
    const [route, setRoute] = useState<Route[]>([])

    useEffect(() => {
        api.getAllRoutesExternal().then((res) => {
            setRoute(res)
        })
    }, [])

    return [route]
}