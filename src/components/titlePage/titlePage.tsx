

interface props{
    title:string
}

const TitleComponent = ({title}:props) => {
  return (
    <h2 className='text-2xl md:text-3xl font-bold uppercase'>{title}</h2>
  )
}

export default TitleComponent