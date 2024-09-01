// src/components/organisms/RegisterForm.tsx
import { Box, Button, MenuItem, Modal, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  github: '',
  linkedIn: '',
  otherSocial: '',
  language: '',
  tools: '',
  projectType: '',
  collaborators: '',
}

const validationSchema = Yup.object({
  fullName: Yup.string().required('Nombre y apellido es requerido'),
  email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: Yup.string().min(6, 'Debe tener al menos 6 caracteres').max(18, 'Debe tener menos de 18 caracteres').required('Contraseña es requerida'),
  github: Yup.string().url('Debe ser una URL válida').required('Cuenta de GitHub es requerida'),
  linkedIn: Yup.string().url('Debe ser una URL válida'),
  otherSocial: Yup.string().url('Debe ser una URL válida'),
  language: Yup.string().required('Seleccione un lenguaje'),
  tools: Yup.string().required('Seleccione una herramienta'),
  projectType: Yup.string().required('Seleccione un tipo de proyecto'),
  collaborators: Yup.string().required('Seleccione el número de colaboradores'),
})

const languages = ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Otro']
const tools = ['React', 'Node.js', 'Docker', 'Kubernetes', 'Otro']
const projectTypes = ['Desarrollo Web', 'Desarrollo Móvil', 'Data Science', 'Otro']
const collaboratorOptions = ['1-3', '4-6', '7-10', 'Indefinido']

const RegisterForm = () => {
  const [open, setOpen] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = (values: any) => {
    console.log('Form Values:', values)
    // Lógica de verificación de correo existente y abrir el modal de confirmación
    setConfirmationOpen(true)
    setOpen(false)
  }

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
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {() => (
              <Form>
                <Field
                  as={TextField}
                  name="fullName"
                  label="Nombre y Apellido"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="fullName" />}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Correo Electrónico"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  name="password"
                  label="Contraseña"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  name="github"
                  label="Cuenta de GitHub"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="github" />}
                />
                <Field
                  as={TextField}
                  name="linkedIn"
                  label="LinkedIn (opcional)"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="linkedIn" />}
                />
                <Field
                  as={TextField}
                  name="otherSocial"
                  label="Otra Red Social"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="otherSocial" />}
                />
                <Field
                  as={TextField}
                  name="language"
                  label="Lenguaje"
                  select
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="language" />}
                >
                  {languages.map(lang => (
                    <MenuItem key={lang} value={lang}>
                      {lang}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  name="tools"
                  label="Herramientas"
                  select
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="tools" />}
                >
                  {tools.map(tool => (
                    <MenuItem key={tool} value={tool}>
                      {tool}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  name="projectType"
                  label="Tipo de Proyecto"
                  select
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="projectType" />}
                >
                  {projectTypes.map(project => (
                    <MenuItem key={project} value={project}>
                      {project}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  name="collaborators"
                  label="Número de Colaboradores"
                  select
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={<ErrorMessage name="collaborators" />}
                >
                  {collaboratorOptions.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Field>
                <Button type="submit" variant="contained" fullWidth>
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
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
          <Typography>Buscando coincidencias de networking.</Typography>
          <Typography>Verifica y configura tus notificaciones para estar al tanto de los resultados.</Typography>
          <Button onClick={() => setConfirmationOpen(false)} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default RegisterForm
