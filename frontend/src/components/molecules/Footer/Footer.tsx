import { Box, Button, Link, TextField, Typography } from '@mui/material'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'mono.white',
        borderRadius: 6,
        p: 3,
        gap: { mobile: 3, table: 5, desktop: 10 },
      }}
    >
      <Box
        sx={{
          bgcolor: 'mono.white',
          display: 'flex',
          flexDirection: { mobile: 'column', tablet: 'row' },
          justifyContent: 'space-between',
          gap: { mobile: 2, desktop: undefined },
        }}
      >
        <Box sx={{ maxWidth: 250, mb: { mobile: 4, tablet: 0 } }}>
          <Typography
            variant="h6"
            sx={{
              color: 'purple.1',
              fontSize: { xs: '18px', md: '24px' },
              fontWeight: 'bold',
              mb: 1,
            }}
          >
            DEVCONNECT
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Mantente informado e inscríbete en nuestro newsletter
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField placeholder="Enter your email" variant="outlined" size="small" sx={{ flexGrow: 1 }} />
            <Button variant="contained" sx={{ bgcolor: 'purple.3', '&:hover': { backgroundColor: 'purple.2', color: 'mono.white' } }}>
              →
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: { mobile: 'wrap', desktop: 'nowrap' },
            flexDirection: 'row',
            gap: { mobile: 2, tablet: 4 },
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: 'purple.1', fontWeight: 'bold' }}>
              Empresa
            </Typography>
            <Link href="/" underline="none" sx={{ color: 'inherit' }}>
              Inicio
            </Link>
            <br />
            <Link href="/contact" underline="none" sx={{ color: 'inherit' }}>
              Contacto
            </Link>
            <br />
            <Link href="/about" underline="none" sx={{ color: 'inherit' }}>
              Nosotros
            </Link>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: 'purple.1', fontWeight: 'bold' }}>
              Documentación
            </Typography>
            <Link href="#" underline="none" sx={{ color: 'inherit' }}>
              Centro de ayuda
            </Link>
            <br />
            <Link href="#" underline="none" sx={{ color: 'inherit' }}>
              FAQ
            </Link>
            <br />
            <Link href="#" underline="none" sx={{ color: 'inherit' }}>
              Políticas
            </Link>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: 'purple.1', fontWeight: 'bold' }}>
              Social
            </Typography>
            <Link href="https://www.facebook.com/" underline="none" sx={{ color: 'inherit' }} target="_blank">
              Facebook
            </Link>
            <br />
            <Link href="https://www.instagram.com/" underline="none" sx={{ color: 'inherit' }} target="_blank">
              Instagram
            </Link>
            <br />
            <Link href="https://www.youtube.com/" underline="none" sx={{ color: 'inherit' }} target="_blank">
              YouTube
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid',
          borderColor: 'mono.dark',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'purple.1' }}>
          Devconnect. Todos los derechos reservados. 2024
        </Typography>
        <Typography variant="body2" sx={{ color: 'purple.1' }}>
          Términos y condiciones
        </Typography>
      </Box>
    </Box>
  )
}
