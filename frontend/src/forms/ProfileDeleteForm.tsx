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
import { useNavigate } from 'react-router-dom'
import { COLLABORATOR_OPTIONS, LANGUAGES, PROYECT_TYPES, TOOLS } from '../constants/constants'
import { useProfileDeleteForm } from '../hooks/useProfileDeleteFrom'

export const ProfileDeleteForm = ({ open = false, close = false }) => {
  const navigate = useNavigate()
  const { setOpenProfileDeleteForm, confirmationOpenProfileDeleteForm, setConfirmationOpenProfileDeleteForm } = useProfileDeleteForm()

  const formik = useFormik({
    initialValues: {
      name: 'Normand',
      lastname: 'Persico',
      email: 'persico@gmail.com',
      github: 'https://github.com/persico',
      linkedIn: '',
      otherSocial: '',
      languages: ['React', 'Javascript', 'Typescript'],
      tools: ['NodeJs', 'MUI', 'AWS'],
      projectType: 'Web app',
      collaborators: '1-3',
    },
    onSubmit: values => {
      console.log('Form Delete Values:', values)
      setConfirmationOpenProfileDeleteForm(true)
      setOpenProfileDeleteForm(false)
    },
  })

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
            <TextField
              fullWidth
              margin="normal"
              label="Nombre"
              name="name"
              value={formik.values.name}
              //onChange={formik.handleChange}
              //error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              // helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Apellido"
              name="lastname"
              value={formik.values.lastname}
              //onChange={formik.handleChange}
              //error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              //helperText={formik.touched.fullName && formik.errors.fullName}
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
