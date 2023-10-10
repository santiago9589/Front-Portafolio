import { useEffect, useState } from "react"
import {Route} from "./../types/routes"
import {api} from "../api/api"

export const useRoutes = ():[Route[]] => {
    const [route, setRoute] = useState<Route[]>([])

    useEffect(() => {
        api.getAllRoutes().then((res) => {
            setRoute(res)
        })
    }, [])

    return [route]
}