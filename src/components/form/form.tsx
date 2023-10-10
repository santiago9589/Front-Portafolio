import React from 'react'

interface props {
    handleSubmit: () => void
    children: React.ReactNode
}

const FormComponent = ({ children, handleSubmit }: props) => {
    return (
        <form className=" md:w-5/6 md:mx-auto flex space-y-6 md:space-y-8 rounded-xl flex-col p-4 w-full  h-full justify-between lg:w-1/2" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormComponent