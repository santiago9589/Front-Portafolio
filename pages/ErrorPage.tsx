import { AiOutlineWarning } from "react-icons/ai"

const ErrorPage = () => {
  return (
    <section className="w-full h-[300px] flex flex-col items-center justify-center space-y-2">
      <AiOutlineWarning size={50}/>
      <h2 className="text-xl">Pagina no encontrada</h2>
      </section>
  )
}

export default ErrorPage