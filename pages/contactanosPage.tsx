import { ContactI } from "./../types/contact"
import { useFormik } from "formik"
import * as Yup from "yup"
import FormComponent from "../src/components/form/form"
import InputComponent from "../src/components/form/input"
import { MdAttachEmail, MdDriveFileRenameOutline } from "react-icons/md"
import ButtomForm from "../src/components/form/buttom"
import WrapperBody from "../src/components/wrapperPage/wrapperPage"
import { TbPointFilled } from "react-icons/tb"
import TitleComponent from "../src/components/titlePage/titlePage"


const ContactPage = () => {

  const initialValues: ContactI = {
    name: "",
    lastName: "",
    email: "",
  }

  const validateSchema = Yup.object().shape({
    email: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 6 caracteres").max(30, "El campo debe tener maximo 30 caracteres").email().matches(/^[A-Za-z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/, "Verifique el campo correo este escrito correctamente"),
    lastName: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 4 caracteres").max(30, "El campo debe tener maximo 30 caracteres").matches(/^[aA-zZ\s]+$/, "El campo solo admite letras"),
    name: Yup.string().required("El campo es obligatorio").min(4, "El campo debe tener minimo 4 caracteres").max(30, "El campo debe tener maximo 30 caracteres").matches(/^[aA-zZ\s]+$/, "El campo solo admite letras"),
  })

  const formik = useFormik<ContactI>({
    initialValues,
    validationSchema: validateSchema,
    onSubmit: ((values) => {
      console.log(values)
    })
  })

  const { handleSubmit, handleChange, errors, values, touched, handleBlur } = formik

  return (
    <WrapperBody>
       <header className='w-full flex items-center justify-center space-x-2'>
        <TbPointFilled size={20} />
        <TitleComponent title="Contactame"/>
        <TbPointFilled size={20} />
      </header>
      <FormComponent handleSubmit={handleSubmit} >
        <InputComponent
          type="text"
          value={values.name}
          handleChange={handleChange}
          name="name"
          errors={errors.name || ""}
          touched={touched.name || false}
          placeholder="enter name"
          icon={MdDriveFileRenameOutline}
          handleBlur={handleBlur}
        />
        <InputComponent
          type="text"
          value={values.lastName}
          handleChange={handleChange}
          name="lastName"
          errors={errors.lastName || ""}
          touched={touched.lastName || false}
          placeholder="enter last name"
          icon={MdDriveFileRenameOutline}
          handleBlur={handleBlur}
        />
        <InputComponent
          type="text"
          value={values.email}
          handleChange={handleChange}
          name="email"
          errors={errors.email || ""}
          touched={touched.email || false}
          placeholder="test@test.com"
          icon={MdAttachEmail}
          handleBlur={handleBlur}
        />
        <ButtomForm name="Enviar" />

      </FormComponent>

    </WrapperBody>

  )
}

export default ContactPage