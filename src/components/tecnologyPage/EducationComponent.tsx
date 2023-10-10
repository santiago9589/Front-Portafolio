import { EducationI } from "../../../types/Education"
import {motion} from "framer-motion"



const EducationComponent = ({ title, institute, Icon: Icon, statusAct, date }: EducationI) => {
    return (
        <motion.li
            whileHover={{ scale: 1.05 }}
            className='w-full flex flex-col space-y-4 shadow-lg rounded-xl p-2 shadow-verde-claro-negro'>
            <p className='text-xl font-bold uppercase text-center text-verde-claro-negro'>{title}</p>
            <p className='text-center uppercase bg-verde-negro'>{institute}</p>
            <button className='   bg-verde-claro-negro rounded-2xl uppercase text-2xl'>
                {statusAct}
            </button>
            <section className='w-full flex justify-center items-center space-x-3'>
                <p className='text-xl'>{date}</p>
                <Icon size={34} />
            </section>
        </motion.li>
    )
}

export default EducationComponent