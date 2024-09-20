import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMockData } from '../hooks/useMockData'
import { useProfileDeleteForm } from '../hooks/useProfileDeleteFrom'

interface ConditionalTextFieldProps {
  value: string | string[]
  label: string
  name: string
}

const ConditionalTextField: React.FC<ConditionalTextFieldProps> = ({ value, label, name }) => {
  if (!value) return null

  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      value={value}
      InputProps={{
        readOnly: true,
      }}
    />
  )
}

export const ProfileDeleteForm = ({ open = false, close = false }) => {
  const navigate = useNavigate()
  const { setOpenProfileDeleteForm, confirmationOpenProfileDeleteForm, setConfirmationOpenProfileDeleteForm } = useProfileDeleteForm()
  const { currentUser } = useMockData()

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      urlGitHub: '',
      linkedIn: '',
      languages: [''],
      tools: [''],
      projectType: '',
      collaborators: '',
    },
    onSubmit: values => {
      console.log('Form Delete Values:', values)
      setConfirmationOpenProfileDeleteForm(true)
      setOpenProfileDeleteForm(false)
    },
  })

  useEffect(() => {
    if (currentUser) {
      formik.setValues({
        name: currentUser.name || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        urlGitHub: currentUser.urlGitHub || '',
        linkedIn: currentUser.linkedIn || '',
        languages: currentUser.languages || '',
        tools: currentUser.tools || '',
        projectType: currentUser.projectType || '',
        collaborators: currentUser.collaborators || '',
      })
    }
  }, [currentUser])

  const handleConfirmationProfileDeleteForm = () => {
    setConfirmationOpenProfileDeleteForm(false)
    navigate('/')
  }

  return (
    <Box>
      <Modal open={open} onClose={close}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Perfil
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <ConditionalTextField label="Nombre" name="name" value={formik.values.name} />
            <ConditionalTextField label="Apellido" name="lastName" value={formik.values.lastName} />
            <ConditionalTextField label="Correo Electrónico" name="email" value={formik.values.email} />
            <ConditionalTextField label="Cuenta de GitHub" name="urlGitHub" value={formik.values.urlGitHub} />
            <ConditionalTextField label="LinkedIn (opcional)" name="linkedIn" value={formik.values.linkedIn} />
            <ConditionalTextField label="Lenguajes" name="languages" value={formik.values.languages} />
            <ConditionalTextField label="Herramientas" name="tools" value={formik.values.tools} />
            <ConditionalTextField label="Tipo de Proyecto" name="proyectType" value={formik.values.projectType} />
            <ConditionalTextField label="Número de Colaboradores" name="collaborators" value={formik.values.collaborators} />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Borrar Cuenta
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal open={confirmationOpenProfileDeleteForm} onClose={() => setConfirmationOpenProfileDeleteForm(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h2">
            Perfil Eliminado !!!
          </Typography>
          <Typography>Gracias por apoyarnos en este camino!!</Typography>
          <Typography>Te esperamos nuevamente para otras oportunidades de matchmaking.</Typography>
          <Button onClick={handleConfirmationProfileDeleteForm} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}
