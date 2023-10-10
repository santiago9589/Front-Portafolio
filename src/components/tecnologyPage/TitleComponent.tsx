import { IconType } from "react-icons"

interface props{
    title:string
    Icon:IconType

}

const TitleComponent = ({title,Icon:Icon}:props) => {
  return (
    <section className='w-full flex justify-start space-x-3 items-center p-2 mt-2'>
          <h3 className='text-xl font-semibold uppercase'>{title}</h3>
          <Icon size={34} />
        </section>
  )
}

export default TitleComponent