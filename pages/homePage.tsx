import picture from "../src/assets/perfil.jpeg"
import { useStack } from "../hooks/useStack"
import { BiDownload } from "react-icons/bi"
import { motion } from "framer-motion"
import { variants } from "./../utils/variantsComponent"


const HomePage = () => {

  const [stack] = useStack()

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"

      className="flex flex-col items-center justify-around w-full  space-y-6 md:h-full md:space-y-8 md:pt-6  
    lg:pt-1 lg:justify-between lg:space-y-0 lg:space-x-1  lg:p-2
    ">
      <>
        <h1 className="text-xl Capitazile md:text-2xl lg:w-full lg:text-center lg:pb-2">¡Bienvenidos a mi sitio!...<motion.span
          className="underline text-verde-claro-negro font-bold uppercase">soy Santiago Parra</motion.span></h1>
        <article className="w-2/3 lg:w-1/2 lg:h-[600px]">
          <img src={picture} className="h-full rounded-full shadow-xl border-2 p-1 shadow-verde-claro
        lg:w-full
        " alt="img-picture" />
        </article>
      </>
      <section className="flex flex-col space-y-2 w-full">
        <h3 className="text-center uppercase text-2xl mt-2 lg:mt-8">{stack.stack.title}</h3>
        <section className="flex flex-col w-full space-y-1 p-2 h-80 flex-wrap">
          {stack.stack.techno.map((element) => {
            return (
              <article key={element.id} className="flex space-x-2 ">
                <img className="h-8 w-8 rounded-full" src={element.logo} />
                <h3 className="uppercase text-xl">{element.name}</h3>
              </article>
            )
          })}
        </section>
        <a href={import.meta.env.VITE_GET_RESOURCES} target="_blank">
          <section
            className="flex flex-col w-full items-center justify-center">
            <h3 className="uppercase text-2xl text-left">descargar cv</h3>
            <BiDownload
              size={54} />
          </section>
        </a>

      </section>
    </motion.section>
  )
}

export default HomePage

