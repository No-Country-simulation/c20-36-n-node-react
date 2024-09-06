// src/components/organisms/RegisterForm.tsx
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  fullName: Yup.string().required('Nombre y apellido es requerido'),
  email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: Yup.string().min(6, 'Debe tener al menos 6 caracteres').max(18, 'Debe tener menos de 18 caracteres').required('Contraseña es requerida'),
  github: Yup.string().url('Debe ser una URL válida').required('Cuenta de GitHub es requerida'),
  linkedIn: Yup.string().url('Debe ser una URL válida'),
})

const RegisterForm = () => {
  const [open, setOpen] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      github: '',
      linkedIn: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('Form Values:', values)
      setConfirmationOpen(true)
      setOpen(false)
    },
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Registro
      </Button>
      <Modal open={open} onClose={handleClose}>
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
            <TextField
              fullWidth
              margin="normal"
              label="LinkedIn (opcional)"
              name="linkedIn"
              value={formik.values.linkedIn}
              onChange={formik.handleChange}
              error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
              helperText={formik.touched.linkedIn && formik.errors.linkedIn}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal open={confirmationOpen} onClose={() => setConfirmationOpen(false)}>
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
          <Button onClick={() => setConfirmationOpen(false)} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default RegisterForm
