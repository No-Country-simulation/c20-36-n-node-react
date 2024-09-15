import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const pages = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
  },
  {
    id: 2,
    name: 'Contacto',
    path: '/contact',
  },
  {
    id: 3,
    name: 'Nosotros',
    path: '/about',
  },
]

export default function Navbar() {
  const location = useLocation()

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'purpleAlpha.5',
        border: '1px solid #241943',
        width: '100%',
        m: 0,
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight={600} letterSpacing={1} component="div" sx={{ flexGrow: 1, textTransform: 'uppercase' }}>
          Dev
          <Typography component="span" variant="h6" letterSpacing={1} sx={{ color: 'purple.4' }} fontWeight={600}>
            Connect
          </Typography>
        </Typography>

        <Box sx={{ display: { mobile: 'none', tablet: 'flex' } }} component="nav" aria-label="main navigation">
          {pages.map(page => (
            <MenuItem key={page.id} component={NavLink} to={page.path}>
              {page.name}
            </MenuItem>
          ))}
        </Box>

        <Box sx={{ display: { mobile: 'flex', tablet: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label={menuAnchor ? 'Cerrar menú' : 'Abrir menú'} onClick={handleMenuOpen}>
            {menuAnchor ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose} sx={{ display: { xs: 'block', md: 'none' } }}>
          {pages.map(page => (
            <MenuItem key={page.id} component={NavLink} to={page.path} onClick={handleMenuClose}>
              {page.name}
            </MenuItem>
          ))}
        </Menu>

        <Button
          variant="contained"
          component={NavLink}
          to={location.pathname === '/login' ? '/register' : '/login'}
          color="inherit"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ ml: 2, backgroundColor: 'mono.white', color: 'mono.black.2' }}
          aria-label={location.pathname === '/login' ? 'Registrase' : 'Inicia Sesión'}
        >
          <Typography>{location.pathname === '/login' ? 'Registrase' : 'Inicia Sesión'}</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
