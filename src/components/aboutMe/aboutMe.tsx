import {AboutI} from "../../../types/about"


const AboutMeComponent = ({name,description,photo,}:AboutI) => {
    return (
        <article className='flex items-center flex-col justify-center p-2 space-y-6 w-full' >
            <h3 className='text-2xl font-bold uppercase text-center text-verde-claro-negro'>{name}</h3>
            <img src={photo} className='shadow-lg shadow-verde-claro-negro rounded-full p-2 md:w-5/6 lg:w-1/2 lg:h-[500px]' alt="introduccion" />
            <p className='text-justify w-full md:text-lg'>{description}</p>
        </article>
    )
}

export default AboutMeComponent