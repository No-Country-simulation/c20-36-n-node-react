// src/components/organisms/RegisterForm.tsx
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useRegisterForm } from '../hooks/useRegisterForm'

export const RegisterForm = () => {
  const navigate = useNavigate()
  const { setOpenRegisterForm, confirmationOpenRegisterForm, setConfirmationOpenRegisterForm, validationRegisterSchema } = useRegisterForm()

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      github: '',
    },
    validationSchema: validationRegisterSchema,
    onSubmit: values => {
      console.log('Form Values:', values)
      setConfirmationOpenRegisterForm(true)
      setOpenRegisterForm(false)
    },
  })
  const handleConfirmationRegisterForm = () => {
    setConfirmationOpenRegisterForm(false)
    navigate('/dashboard/profile')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', py: { mobile: 3, tablet: 5 }, justifyContent: 'center' }}>
      <Box
        sx={{
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
          Formulario de Registro
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre y Apellido"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Correo Electrónico"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Cuenta de GitHub"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            error={formik.touched.github && Boolean(formik.errors.github)}
            helperText={formik.touched.github && formik.errors.github}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Enviar
          </Button>
        </form>
      </Box>
      <Modal open={confirmationOpenRegisterForm} onClose={() => setConfirmationOpenRegisterForm(false)}>
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
            ¡Felicitaciones!
          </Typography>
          <Typography>Hemos registrado tu solicitud!!</Typography>
          <Typography>Verifica tu email y edita tu perfil en busca de coincidencias para networking.</Typography>
          <Button onClick={handleConfirmationRegisterForm} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}
