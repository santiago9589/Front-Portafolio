import WrapperBody from '../src/components/wrapperPage/wrapperPage'
import { TbPointFilled } from "react-icons/tb"
import {useAbout} from "./../hooks/useAbout"
import AboutMeComponent from '../src/components/aboutMe/aboutMe'
import TitleComponent from '../src/components/titlePage/titlePage'


const AboutMePage = () => {

  const [about] = useAbout()

  return (
    <WrapperBody>
      <header className='w-full flex items-center justify-center space-x-2 mb-4'>
        <TbPointFilled size={20} />
        <TitleComponent title='Acerca de mi'/>
        <TbPointFilled size={20} />
      </header>
     {
      about.map((about)=>{
        return(
          <AboutMeComponent key={about.id} {...about}/>
        )
      })
     }
     
    </WrapperBody>
  )
}

export default AboutMePage