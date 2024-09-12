import { Box, ThemeProvider, Typography } from '@mui/material'
import { Footer } from '../../components/organisms/Footer'
import { ProfileForm } from '../../forms/ProfileForm'
import { RegisterForm } from '../../forms/RegisterFrom'
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
        <ProfileForm />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
