import { useEffect, useState } from "react"
import {api} from "../api/api"
import { TechnologyStack } from "../types/tecnologyStack"


const stackInit: TechnologyStack = {
    stack: {
        id: 0,
        title: "Tecnologias conocidas",
        techno: [
            
        ]
    }
}

export const useStack = ():[TechnologyStack] => {
    const [stack, setStack] = useState<TechnologyStack>(stackInit)

    useEffect(() => {
        api.getStack().then((res) => {
            setStack(res)
        })
    }, [])

    return [stack]
}