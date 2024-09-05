import { Box, ThemeProvider, Typography } from '@mui/material'
import { Footer } from '../../components/organisms/Footer'
import { getMainTheme } from '../../theme/getMainTheme'

export default function HomeScreen() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: 1 }}>
          <Typography variant="h1" gutterBottom sx={{ color: 'mono.white', textAlign: 'center' }}>
            Hello World
          </Typography>
        </Box>
        <Box sx={{ width: 1 }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
