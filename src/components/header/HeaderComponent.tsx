import logo from "../../assets/logo3.png"
import { useRoutesExternal } from "../../../hooks/useRoutesExternal"
import { useSetLocation } from "../../../hooks/useSetLocation"
import {motion} from "framer-motion"
const HeaderComponent = () => {

  const { navigate } = useSetLocation()

  const [route] = useRoutesExternal()

  return (

    <nav className="flex items-center justify-between h-24 p-2 ">
      <motion.img 
       whileHover={{ scale: 1.10 }}
       whileTap={{ scale: 0.8 }}
      src={logo} className="w-16 h-16 rounded-full hover:cursor-pointer"
        onClick={() => navigate(`/`)} alt="logo" />
      <section className="flex items-center justify-between space-x-5 ">
        {
          route?.map((route) => {
            return (
              <motion.a
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.8 }}
                key={route.name} href={route.route}
                target="_blank"
                >
                <route.icon className="w-6 h-6 md:h-8 md:w-8 hover:cursor-pointer" />
              </motion.a>
            )
          })
        }
      </section>
    </nav>

  )
}

export default HeaderComponent

