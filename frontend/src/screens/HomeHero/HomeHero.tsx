import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section aria-labelledby="hero-heading">
      <Box
        sx={{
          width: '95%',
          margin: '60px auto 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '400px',
          justifyContent: 'center',
          backgroundColor: '#0D051F',
          border: '1px solid #241943',
          borderRadius: '13px',
          textAlign: 'center',
          padding: '0 20px',
          gap: '10px',
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
    </section>
  )
}
