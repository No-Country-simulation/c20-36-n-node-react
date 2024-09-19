import { useState } from 'react'
import * as Yup from 'yup'

export const useRegisterForm = () => {
  const [openRegisterForm, setOpenRegisterForm] = useState(false)
  const [confirmationOpenRegisterForm, setConfirmationOpenRegisterForm] = useState(false)

  const handleOpenRegisterForm = () => setOpenRegisterForm(true)
  const handleCloseRegisterForm = () => setOpenRegisterForm(false)

  const validationRegisterSchema = Yup.object({
    userID: Yup.string(),
    name: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: Yup.string()
      .min(6, 'Debe tener al menos 6 caracteres')
      .max(18, 'Debe tener menos de 18 caracteres')
      .required('Contraseña es requerida'),
    urlGitHub: Yup.string().url('Debe ser una URL válida'),
  })

  return {
    openRegisterForm,
    setOpenRegisterForm,
    confirmationOpenRegisterForm,
    setConfirmationOpenRegisterForm,
    handleOpenRegisterForm,
    handleCloseRegisterForm,
    validationRegisterSchema,
  }
}
