import { CoursesI } from "../../../types/Courses"
import {motion} from "framer-motion"



const CoursesComponent = ({ title, institute, Icon: Icon, statusAct, date, description }: CoursesI) => {
    return (

        <motion.li 
        whileHover={{ scale: 1.05 }}  
        className='w-full flex flex-col space-y-4 shadow-lg rounded-xl p-2 shadow-verde-claro-negro lg:max-w-md lg:space-y-0 lg:justify-between'>
            <p className='text-xl font-bold uppercase text-center text-verde-claro-negro'>{title}</p>
            <p className='text-center uppercase bg-verde-negro'>{institute}</p>
            <p className=" text-justify">
                {description}
            </p>
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

export default CoursesComponent