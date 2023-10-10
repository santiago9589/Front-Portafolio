import { useLocation } from "wouter"

export const useSetLocation = () =>{
    const [location, navigate] = useLocation()

    return {navigate,location}
}