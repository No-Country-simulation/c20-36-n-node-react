// src/components/organisms/RegisterForm.tsx
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  github: '',
  linkedIn: '',
  otherSocial: '',
  language: [],
  tools: [],
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
  languages: Yup.array().min(1, 'Seleccione al menos un lenguaje').required('Seleccione un lenguaje'),
  tools: Yup.array().min(1, 'Seleccione al menos una herramienta').required('Seleccione una herramienta'),
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

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      github: '',
      linkedIn: '',
      otherSocial: '',
      languages: [],
      tools: [],
      projectType: '',
      collaborators: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('Form Values:', values)
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log('Form values:', values)
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
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
                <FormControl fullWidth margin="normal">
                  <InputLabel id="languages-label">Lenguajes</InputLabel>
                  <Select
                    labelId="languages-label"
                    id="languages"
                    multiple
                    value={formik.values.languages}
                    onChange={event => formik.setFieldValue('languages', event.target.value)}
                    input={<OutlinedInput label="Lenguajes" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {languages.map(language => (
                      <MenuItem key={language} value={language}>
                        <Checkbox checked={formik.values.languages.indexOf(language) > -1} />
                        <ListItemText primary={language} />
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.languages && formik.errors.languages && <Typography color="error">{formik.errors.languages}</Typography>}
                </FormControl>

                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel id="tools-label">Herramientas</InputLabel>
                  <Select
                    labelId="tools-label"
                    id="tools"
                    multiple
                    value={formik.values.tools}
                    onChange={event => formik.setFieldValue('tools', event.target.value)}
                    input={<OutlinedInput label="Herramientas" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {tools.map(tool => (
                      <MenuItem key={tool} value={tool}>
                        <Checkbox checked={formik.values.tools.indexOf(tool) > -1} />
                        <ListItemText primary={tool} />
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.tools && errors.tools && <Typography color="error">{errors.tools}</Typography>}
                </FormControl>

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
                <Button type="submit" variant="contained" fullWidth onClick={formik.handleSubmit}>
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
