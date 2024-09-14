import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function HomeHero() {
  return (
    <Box
      sx={{
        width: '95%',
        margin: '120px 0px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '400px',
        justifyContent: 'center',
        backgroundColor: 'purpleAlpha.2',
        border: '1px solid #241943',
        borderRadius: '24px',
        textAlign: 'center',
        padding: '0 24px',
        gap: '16px',
      }}
    >
      <Typography
        variant="h5"
        color="purple.3"
        sx={{
          backgroundColor: 'purple.4',
          borderRadius: '35px',
          width: '200px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        #networking
      </Typography>

      <Typography id="hero-heading" variant="h2" sx={{ color: 'mono.white' }} fontWeight={700} component="h1">
        Descubre DevConnect
      </Typography>

      <Typography sx={{ color: 'mono.white' }} variant="body1">
        Conecta con programadores, colabora en proyectos desafiantes y construye una comunidad sólida.
      </Typography>

      <Button
        variant="contained"
        component={NavLink}
        to="/register"
        color="inherit"
        sx={{ ml: 2, backgroundColor: 'mono.white', color: 'mono.black.2' }}
        endIcon={<ArrowForwardIosIcon />}
        aria-label="Registrate Gratis!"
      >
        <Typography>Registrate Gratis!</Typography>
      </Button>
    </Box>
  )
}
