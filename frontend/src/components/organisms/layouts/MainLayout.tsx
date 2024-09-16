import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { getMainTheme } from '../../../theme/getMainTheme'
import { Footer } from '../../molecules/Footer/Footer'
import { Header } from '../../molecules/Header/Header'

const MainLayout: React.FC = () => {
  return (
    <ThemeProvider theme={getMainTheme}>
      <Box sx={{ p: 0, m: 0 }}>
        <Header />
        <Box sx={{ mt: 8 }}>
          <Outlet /> {/* Aquí se renderiza el componente de la página actual */}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default MainLayout
