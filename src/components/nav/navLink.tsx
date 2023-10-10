import { Route } from '../../../types/routes'
import {useLocation} from "wouter"
import {motion} from "framer-motion"

const NavLink = ({icon:Icon,name,route}:Route) => {

    const [location,navigate] = useLocation()

    return (
        <motion.article 
        
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}    
        onClick={()=>navigate(`${route}`)} className={ ` hover:cursor-pointer bg-verde-negro  md:flex md:flex-col md:space-y-1 md:items-center ${location === route ? " shadow-lg border-b-2 shadow-verde-claro-negro p-2" : ""}`}>
            <Icon className='w-10 h-10 md:w-12 md:h-12'/>
            <p className='hidden md:block uppercase'>{name}</p>
        </motion.article>
    )
}

export default NavLink