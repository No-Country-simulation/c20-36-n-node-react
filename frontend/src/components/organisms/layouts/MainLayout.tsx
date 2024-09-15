import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { getMainTheme } from '../../../theme/getMainTheme'
import { Footer } from '../../molecules/Footer/Footer'
import { Header } from '../../molecules/Header/Header'

const MainLayout: React.FC = () => {
  return (
    <ThemeProvider theme={getMainTheme}>
      <Box sx={{ bgcolor: 'mono.black.1', p: 0, m: 0 }}>
        <Header />
        <main>
          <Outlet /> {/* Aquí se renderiza el componente de la página actual */}
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default MainLayout
