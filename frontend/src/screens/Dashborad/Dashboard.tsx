import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Avatar, Box, Button, Card, IconButton, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ProfileDeleteForm } from '../../forms/ProfileDeleteForm'
import { ProfileEditForm } from '../../forms/ProfileEditForm'
import { useMockData } from '../../hooks/useMockData'
import { useProfileDeleteForm } from '../../hooks/useProfileDeleteFrom'
import { useProfileEditForm } from '../../hooks/useProfileEditForm'

export function Dashboard() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { openProfileEditForm, setOpenProfileEditForm, handleCloseProfileEditForm } = useProfileEditForm()
  const { openProfileDeleteForm, handleOpenProfileDeleteForm, handleCloseProfileDeleteForm } = useProfileDeleteForm()

  const { currentUser } = useMockData()

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
          <Typography variant="h4" mb={2} sx={{ color: 'mono.white', fontWeight: 700 }}>
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
            <Avatar
              alt="Juan Torres"
              src="https://media.biobiochile.cl/wp-content/uploads/2019/02/captura-realizada-el-2019-02-25-17-21-56.png"
              sx={{ width: 100, height: 100 }}
            />

            {/* Profile Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'start' }}>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
                {currentUser?.name || currentUser?.lastName ? `${currentUser?.name} ${currentUser?.lastName}` : ''}
              </Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>{currentUser?.urlGitHub}</Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>{currentUser?.languages}</Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>{currentUser?.tools}</Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>{currentUser?.email}</Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
                {currentUser?.languages ? `Lenguajes: ${currentUser?.languages}` : ''}
              </Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
                {currentUser?.projectType ? `Tipo proyecto: ${currentUser?.projectType}` : ''}
              </Typography>
              <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
                {currentUser?.collaborators ? `Cantidad de colaboradores: ${currentUser?.collaborators}` : ''}
              </Typography>
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
              maxWidth: '700px',
            }}
          >
            <Typography variant="h6" sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
              Contactos guardados
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
              <Avatar alt="Alfredo" src="https://meragor.com/files/styles//220_220/lico-parnya-25-let.png" />
              <Avatar alt="Claudia" src="https://media.biobiochile.cl/wp-content/uploads/2019/02/captura-realizada-el-2019-02-25-15-37-51.png" />
              <Avatar alt="Cahaya" src="https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?resize=500%2C500&ssl=1" />
              <Avatar alt="Mariana" src="https://this-person-does-not-exist.com/img/avatar-gen5e4e9990e8fe9ac3732f87008bcbe9a6.jpg" />
              <Avatar alt="Marceline" src="https://this-person-does-not-exist.com/static/images/fake-3.jpg" />
              <Avatar
                alt="Teddy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDhO4Jo80GAfEn5kNpN6aTvNo_-EhpzU17RA6XoLougtPAunb7BLUZD-ZmPS0CzZGP_Q&usqp=CAU"
              />
              <Avatar alt="Yael" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCPpqZBnryOKLR87KoQ_kKD1dcf4up3cC-Q&s" />
              <IconButton>
                <MoreHorizIcon sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }} />
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
          <Typography variant="h6" sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
            {`${currentUser?.name} ${currentUser?.lastName} dice:`}
          </Typography>
          <Typography sx={{ color: 'mono.white', fontSize: { mobile: 18, tablet: 24 } }}>
            Soy una apasionada Full Stack Dev y busco amigos nuevos para hacer proyectos juntos. ¡Conectemos!
          </Typography>
        </Card>

        {/* Edit Profile Options */}
        <Card sx={{ p: 2, mt: 2, bgcolor: 'purple.4' }}>
          <Typography variant="h6">¿Quieres modificar tu perfil?</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <Button
              startIcon={<EditIcon />}
              onClick={() => setOpenProfileEditForm(true)}
              sx={{ fontSize: 24, bgcolor: 'purpleAlpha.5', color: 'mono.black.1' }}
            >
              Editar
            </Button>
            <Button startIcon={<DeleteIcon />} color="error" sx={{ fontSize: 24, bgcolor: 'purpleAlpha.5' }} onClick={handleOpenProfileDeleteForm}>
              Eliminar
            </Button>
            <ProfileEditForm open={openProfileEditForm} close={handleCloseProfileEditForm} />
            <ProfileDeleteForm open={openProfileDeleteForm} close={handleCloseProfileDeleteForm} />
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
