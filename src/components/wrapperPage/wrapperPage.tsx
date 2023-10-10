import {motion } from "framer-motion"
import { variants } from "../../../utils/variantsComponent"

interface props {
    children: React.ReactNode
}

const WrapperBody = ({ children }: props) => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="flex flex-col items-center w-full  ">
            {
                children
            }
        </motion.section>
    )
}

export default WrapperBody