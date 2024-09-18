import { useState } from 'react'

export const useProfileDeleteForm = () => {
  const [openProfileDeleteForm, setOpenProfileDeleteForm] = useState(false)
  const [confirmationOpenProfileDeleteForm, setConfirmationOpenProfileDeleteForm] = useState(false)

  const handleOpenProfileDeleteForm = () => {
    setOpenProfileDeleteForm(true)
  }
  const handleCloseProfileDeleteForm = () => setOpenProfileDeleteForm(false)
  return {
    openProfileDeleteForm,
    setOpenProfileDeleteForm,
    confirmationOpenProfileDeleteForm,
    setConfirmationOpenProfileDeleteForm,
    handleOpenProfileDeleteForm,
    handleCloseProfileDeleteForm,
  }
}
