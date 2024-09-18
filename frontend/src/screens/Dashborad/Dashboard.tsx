import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Avatar, Box, Button, Card, IconButton, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ProfileEditForm } from '../../forms/ProfileEditForm'
import { useProfileEditForm } from '../../hooks/useProfileForm'

export function Dashboard() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { openProfileEditForm, handleOpenProfileEditForm, handleCloseProfileEditForm } = useProfileEditForm()

  return (
    <Box
      sx={{
        ...theme.customStyles.backgroundLayout,
        display: 'flex',
        flexDirection: { mobile: 'column', desktop: 'row' },
        backgroundImage: 'url(../../src/assets/Designer.jpeg)',
        height: { mobile: '100vh', desktop: '50vh' },
      }}
    >
      {/* Left Sidebar */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { mobile: '100%', desktop: '20%' },
          backgroundColor: 'purpleAlpha.5',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Button variant="contained" color="primary">
            Mi perfil
          </Button>
          <Button variant="text" color="inherit">
            Proyectos
          </Button>
          <Button variant="text" color="inherit">
            Configuración
          </Button>
        </Box>
        <Button variant="contained" sx={{ bgcolor: 'purpleAlpha.1' }}>
          CONECTA COLABORA CREA
        </Button>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { mobile: '100%', desktop: '70%' },
          p: 2,
          color: 'text.primary',
          bgcolor: 'purpleAlpha.1',
        }}
      >
        <Box>
          <Typography variant="h4" mb={2}>
            Mi perfil
          </Typography>

          {/* Profile and Data Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { mobile: 'column', tablet: 'row' },
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Profile Picture */}
            <Avatar alt="Juan Torres" src="/path-to-image" sx={{ width: 100, height: 100 }} />

            {/* Profile Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ color: 'mono.white' }}>Juan Torres</Typography>
              <Typography sx={{ color: 'mono.white' }}>Full Stack</Typography>
              <Typography sx={{ color: 'mono.white' }}>Juani89</Typography>
              <Typography sx={{ color: 'mono.white' }}>Colaborativo</Typography>
            </Box>

            {/* Profile Contact Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ color: 'mono.white' }}>juantorres@gmail.com</Typography>
              <Typography sx={{ color: 'mono.white' }}>Python, Angular</Typography>
              <Typography sx={{ color: 'mono.white' }}>Juan Torres</Typography>
              <Typography sx={{ color: 'mono.white' }}>Colaboraciones: 4</Typography>
            </Box>
          </Box>

          {/* Contactos Guardados */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 3,
            }}
          >
            <Typography variant="h6" sx={{ color: 'mono.white' }}>
              Contactos guardados
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
              <Avatar alt="Alfredo" src="/path-to-image" />
              <Avatar alt="Claudia" src="/path-to-image" />
              <Avatar alt="Cahaya" src="/path-to-image" />
              <Avatar alt="Mariana" src="/path-to-image" />
              <Avatar alt="Marceline" src="/path-to-image" />
              <Avatar alt="Teddy" src="/path-to-image" />
              <Avatar alt="Yael" src="/path-to-image" />
              <IconButton>
                <MoreHorizIcon sx={{ color: 'mono.white' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: { mobile: '100%', desktop: '20%' },
          p: 2,
        }}
      >
        {/* Profile Description Card */}
        <Card sx={{ p: 2, bgcolor: 'purpleAlpha.5' }}>
          <Typography variant="h6" sx={{ color: 'mono.white' }}>
            Juan Torres dice:
          </Typography>
          <Typography sx={{ color: 'mono.white' }}>
            Soy un apasionado Full Stack Dev y busco amigos nuevos para hacer proyectos divertidos juntos. ¡Conectemos!
          </Typography>
        </Card>

        {/* Edit Profile Options */}
        <Card sx={{ p: 2, mt: 2, bgcolor: 'purple.4' }}>
          <Typography variant="h6">¿Quieres modificar tu perfil?</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <Button startIcon={<EditIcon />} onClick={handleOpenProfileEditForm}>
              Editar
            </Button>
            <Button startIcon={<DeleteIcon />} color="error" onClick={() => navigate('/dashboard/delete')}>
              Eliminar
            </Button>
            <ProfileEditForm open={openProfileEditForm} close={handleCloseProfileEditForm} />
          </Box>
        </Card>

        {/* Match Button */}
        <Button variant="contained" sx={{ bgcolor: 'purple.3', mt: 2 }} onClick={() => navigate('/dashboard/match')}>
          Buscar Match
        </Button>
      </Box>
    </Box>
  )
}
