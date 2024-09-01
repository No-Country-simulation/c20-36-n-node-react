import { Box, ThemeProvider, Typography } from '@mui/material'
import { Footer } from '../../components/organisms/Footer'
import RegisterForm from '../../components/organisms/RegisterFrom'
import { getMainTheme } from '../../theme/getMainTheme'

export default function HomeScreen() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <main>
        <Box sx={{ width: '100%', maxWidth: 375 }}>
          <Typography variant="h1" gutterBottom sx={{ color: 'mono.white' }}>
            Hello World
          </Typography>
        </Box>
        <RegisterForm />
        <Box sx={{ bgcolor: 'mono.black.1', p: 1, mb: 1 }}>test color mono black 1</Box>
        <Box sx={{ bgcolor: 'mono.black.2', p: 1, mb: 1 }}>test color mono black 2</Box>
        <Box sx={{ bgcolor: 'mono.black.3', p: 1, mb: 1 }}>test color mono black 3</Box>
        <Box sx={{ bgcolor: 'purple.1', p: 1, mb: 1 }}>test color purple 1</Box>
        <Box sx={{ bgcolor: 'purple.2', p: 1, mb: 1 }}>test color purple 2</Box>
        <Box sx={{ bgcolor: 'purple.3', p: 1, mb: 1 }}>test color purple 3</Box>
        <Box sx={{ bgcolor: 'purple.4', p: 1, mb: 1 }}>test color purple 4</Box>
        <Box sx={{ bgcolor: 'purple.5', p: 1, mb: 1 }}>test color purple 5</Box>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
