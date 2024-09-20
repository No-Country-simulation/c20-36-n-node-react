import { Box, Button, Link, TextField, ThemeProvider, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../../components/organisms/Navbar/Navbar'
import { getMainTheme } from '../../theme/getMainTheme'
import ErrorMessageLogin from './ErrorMessageLogin/ErrorMessageLogin'

type FormValues = {
  username: string
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
    navigate('/dashboard/profile')
  }

  return (
    <ThemeProvider theme={getMainTheme()}>
      <Navbar />
      <Box sx={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} component="main">
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '375px',
            width: '650px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: '700', color: 'mono.black.1' }}>
            Iniciar Sesión
          </Typography>

          {/*====Username field====*/}
          <TextField
            label="Nombre de Usuario"
            variant="outlined"
            type="text"
            fullWidth
            margin="dense"
            color={errors.username ? 'error' : 'info'}
            {...register('username', { required: true })}
          />
          {errors.username?.type === 'required' && <ErrorMessageLogin message="Por favor, ingresa tu nombre de usuario." />}

          {/*====Email field====*/}
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            type="text"
            fullWidth
            margin="dense"
            color={errors.email ? 'error' : 'info'}
            // eslint-disable-next-line no-useless-escape
            {...register('email', { required: true, pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ })}
          />
          {errors.email?.type === 'required' && <ErrorMessageLogin message="Por favor, proporciona tu correo electrónico." />}
          {errors.email?.type === 'pattern' && <ErrorMessageLogin message="Por favor, ingresa un correo electrónico válido." />}

          {/*====Password field====*/}
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            margin="dense"
            color={errors.password ? 'error' : 'info'}
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && <ErrorMessageLogin message="La contraseña es obligatoria. Ingrésala para continuar." />}

          <Link
            component={NavLink}
            to="/recover_password"
            variant="body2"
            sx={{
              alignSelf: 'flex-end',
              marginBottom: '16px',
              color: 'purple.2',
              textDecoration: 'none',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <Button
            variant="contained"
            sx={{ backgroundColor: 'purple.1', padding: '13px', ':hover': { backgroundColor: 'purple.2' } }}
            fullWidth
            type="submit"
          >
            <Typography>Iniciar Sesión</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
