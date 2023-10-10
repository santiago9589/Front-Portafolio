import { motion } from "framer-motion"

interface props {
  name: string
}

const ButtomForm = ({ name }: props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.10 }}
      whileTap={{ scale: 0.8 }}
      type="submit"
      className='rounded-lg md:rounded-2xl
      bg-verde-claro-negro
    p-2 md:p-4
    text-xl
      text-verde-azul
    uppercase
    w-full
   md:text-2xl
    '>
      {name}
    </motion.button>
  )
}

export default ButtomForm