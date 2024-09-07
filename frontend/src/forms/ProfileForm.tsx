// src/components/organisms/ProfileForm.tsx
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
import { useFormik } from 'formik'
import { COLLABORATOR_OPTIONS, LANGUAGES, PROYECT_TYPES, TOOLS } from '../constants/constants'
import { useProfileForm } from '../hooks/useProfileForm'

export const ProfileForm = () => {
  const {
    openProfileForm,
    setOpenProfileForm,
    confirmationOpenProfileForm,
    setConfirmationOpenProfileForm,
    handleOpenProfileForm,
    handleCloseProfileForm,
    validationProfileSchema,
  } = useProfileForm()

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
    validationSchema: validationProfileSchema,
    onSubmit: values => {
      console.log('Form Values:', values)
      setConfirmationOpenProfileForm(true)
      setOpenProfileForm(false)
    },
  })

  return (
    <>
      <Button onClick={handleOpenProfileForm} variant="contained">
        Editar Perfil
      </Button>
      <Modal open={openProfileForm} onClose={handleCloseProfileForm}>
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
            <TextField
              fullWidth
              margin="normal"
              label="Otra Red Social"
              name="otherSocial"
              value={formik.values.otherSocial}
              onChange={formik.handleChange}
              error={formik.touched.otherSocial && Boolean(formik.errors.otherSocial)}
              helperText={formik.touched.otherSocial && formik.errors.otherSocial}
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
                {LANGUAGES.map(language => (
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
                {TOOLS.map(tool => (
                  <MenuItem key={tool} value={tool}>
                    <Checkbox checked={formik.values.tools.indexOf(tool) > -1} />
                    <ListItemText primary={tool} />
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.tools && formik.errors.tools && <Typography color="error">{formik.errors.tools}</Typography>}
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Tipo de Proyecto"
              name="projectType"
              value={formik.values.projectType}
              onChange={formik.handleChange}
              select
              variant="outlined"
              error={formik.touched.projectType && Boolean(formik.errors.projectType)}
              helperText={formik.touched.projectType && formik.errors.projectType}
            >
              {PROYECT_TYPES.map(project => (
                <MenuItem key={project} value={project}>
                  {project}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              margin="normal"
              name="collaborators"
              label="Número de Colaboradores"
              value={formik.values.collaborators}
              onChange={formik.handleChange}
              select
              variant="outlined"
              error={formik.touched.collaborators && Boolean(formik.errors.collaborators)}
              helperText={formik.touched.collaborators && formik.errors.collaborators}
            >
              {COLLABORATOR_OPTIONS.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>
      <Modal open={confirmationOpenProfileForm} onClose={() => setConfirmationOpenProfileForm(false)}>
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
            Perfil Actualizado !!!
          </Typography>
          <Typography>Trabajamos en encontrar coincidencias!!</Typography>
          <Typography>Configura tus notificaciones para estar al tanto del matching en networking.</Typography>
          <Button onClick={() => setConfirmationOpenProfileForm(false)} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  )
}
