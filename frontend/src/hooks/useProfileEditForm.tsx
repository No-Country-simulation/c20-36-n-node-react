import { useState } from 'react'
import * as Yup from 'yup'

export const useProfileEditForm = () => {
  const [openProfileEditForm, setOpenProfileEditForm] = useState(false)
  const [confirmationOpenProfileEditForm, setConfirmationOpenProfileEditForm] = useState(false)

  const handleOpenProfileEditForm = () => {
    setOpenProfileEditForm(true)
  }
  const handleCloseProfileEditForm = () => setOpenProfileEditForm(false)

  const validationProfileSchema = Yup.object({
    userID: Yup.string(),
    name: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: Yup.string()
      .min(6, 'Debe tener al menos 6 caracteres')
      .max(18, 'Debe tener menos de 18 caracteres')
      .required('Contraseña es requerida'),
    urlGitHub: Yup.string().url('Debe ser una URL válida'),
    linkedIn: Yup.string().url('Debe ser una URL válida'),
    languages: Yup.array().min(1, 'Seleccione al menos un lenguaje').required('Seleccione un lenguaje'),
    tools: Yup.array().min(1, 'Seleccione al menos una herramienta').required('Seleccione una herramienta'),
    projectType: Yup.string().required('Seleccione un tipo de proyecto'),
    collaborators: Yup.string().required('Seleccione el número de colaboradores'),
  })

  return {
    openProfileEditForm,
    setOpenProfileEditForm,
    confirmationOpenProfileEditForm,
    setConfirmationOpenProfileEditForm,
    handleOpenProfileEditForm,
    handleCloseProfileEditForm,
    validationProfileSchema,
  }
}
