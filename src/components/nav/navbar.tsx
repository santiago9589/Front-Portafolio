import {useRoutes} from "./../../../hooks/useRoutes"
import NavLink from "./navLink"

const NavbarButtoms = () => {

    const [route] = useRoutes()

    return (
        <nav className="  bg-verde-negro rounded-xl  flex space-x-1 items-center justify-around  w-full h-20 md:h-24">
            {
                route?.map((route) => {
                    return (
                        <NavLink key={route.name}
                            route={route.route}
                            name={route.name}
                            icon={route.icon}
                        />
                    )
                })
            }
            
        </nav>
    )
}

export default NavbarButtoms