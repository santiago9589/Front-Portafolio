import {ProyectU} from "./../../../types/ProyectU"
import {motion} from "framer-motion"


const ProyectComponent = ({ title, photo, techno, links }: ProyectU) => {
    return (
        <motion.li 
        whileHover={{ scale: 1.01 }}
  
        
        className='w-full flex flex-col items-center justify-center space-y-3 shadow-lg rounded-xl p-2 shadow-verde-claro-negro
        lg:w-[440px] lg:h-[700px]'>
            <p className='text-2xl font-bold uppercase text-center text-verde-claro-negro'>{title}</p>
            <img className="w-full p-2 h-2/3" src={photo} alt="proyects" />
            <p className='text-center uppercase md:text-lg'>Tecnoligas aplicadas</p>
            <section className='h-16 w-full space-x-2 flex items-center justify-center'>
                {
                    techno?.map((technoUnit) => {
                        return (
                            <article className='w-8 h-8 md:h-12 md:w-12' key={technoUnit.id}>
                                <img className="h-full rounded-full  " src={technoUnit.logo} alt="items" />
                            </article>
                        )
                    })
                }
            </section>
            <p className='text-center uppercase md:text-lg'>Codigo Fuente</p>
            <section className='  h-16 w-full space-x-2 flex items-center justify-center'>
                {
                    links?.map((link) => {
                        return (
                            <a className='w-8 h-8 md:h-12 md:w-12' key={link.id} href={link.link} >
                                <img  className="h-full rounded-full " src={link.logo} alt="items" />
                            </a>
                        )
                    })
                }

            </section>
        </motion.li>

    )
}

export default ProyectComponent