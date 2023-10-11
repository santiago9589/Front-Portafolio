import { TbPointFilled } from 'react-icons/tb'
import WrapperBody from '../src/components/wrapperPage/wrapperPage'
import { GiGraduateCap } from "react-icons/gi"
import { PiCertificateFill } from "react-icons/pi"
import { BsPenFill } from 'react-icons/bs'
import { useTecno } from "../hooks/useTecnology"
import EducationComponent from '../src/components/tecnologyPage/EducationComponent'
import ProyectComponent from '../src/components/tecnologyPage/ProyectComponent'
import CoursesComponent from '../src/components/tecnologyPage/CoursesComponent'
import TitleComponent from '../src/components/titlePage/titlePage'

const TecnologyPage = () => {

  const [techno] = useTecno()

  return (
    <WrapperBody>
      <header className='w-full flex items-center justify-center space-x-2'>
        <TbPointFilled size={20} />
        <TitleComponent title='Informacion tecnica'/>
        <TbPointFilled size={20} />
      </header>
      <>
        <section className='w-full flex justify-start space-x-3 items-center p-2 mt-2
        '>
          <h3 className='text-xl md:text-2xl font-semibold uppercase'>Educacion</h3>
          <GiGraduateCap size={34} />
        </section>
        <ul className='flex flex-col p-2 space-y-8 w-full md:space-y-12 
        lg:flex-row lg:gap-2 lg:space-y-0 lg:space-x-3 ' >
          {techno?.education?.map((educationU) => {
            return (
              <EducationComponent key={educationU.id} {...educationU} />
            )
          })}
        </ul>
      </>

      <>
        <section className='w-full flex justify-start space-x-3 items-center p-2 mt-2'>
          <h3 className='text-xl md:text-2xl font-semibold uppercase'>Cursos</h3>
          <PiCertificateFill size={34} />
        </section>
        <ul className='flex flex-col p-2 space-y-6 md:space-y-12
        lg:flex-row lg:flex-wrap lg:space-y-2 lg:gap-4 lg:justify-center '>
          {techno?.courses?.map((coursesU) => {
            return (
              <CoursesComponent key={coursesU.id} {...coursesU} />
            )
          })}


        </ul>
      </>

      <>
        <section className='w-full flex justify-start space-x-3 items-center p-2 mt-2'>
          <h3 className='text-xl md:text-2xl font-semibold uppercase'>Proyectos</h3>
          <BsPenFill size={34} />
        </section>
        <ul className='flex flex-col p-2 w-full space-y-6 md:space-y-12 
        lg:flex-row lg:flex-wrap lg:space-y-0 lg:gap-4 lg:justify-around'>
          {
            techno?.proyects?.map((proyectU) => {
              return (
                <ProyectComponent key={proyectU.id} {...proyectU} />
              )
            })
          }



        </ul>
      </>


    </WrapperBody>
  )
}

export default TecnologyPage