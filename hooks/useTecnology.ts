import { useEffect, useState } from "react"
import { api } from "../api/api"
import { TechnologyI } from "../types/tecnology"

export const useTecno = (): [TechnologyI] => {
    const [techno, setTechno] = useState<TechnologyI>({ proyects: [], education: [],courses:[] })

    useEffect(() => {
        api.getTechnology().then((res) => {
            setTechno(res)
        })
    }, [])

    return [techno]
}