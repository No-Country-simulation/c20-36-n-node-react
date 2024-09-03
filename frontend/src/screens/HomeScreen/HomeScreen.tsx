import { ThemeProvider } from '@mui/material'
import { getMainTheme } from '../../theme/getMainTheme'
import Navbar from '../../components/Navbar/Navbar'
import HomeHero from '../../components/HomeHero/HomeHero'

export default function HomeScreen() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <Navbar />
      <main>
        <HomeHero />
      </main>
    </ThemeProvider>
  )
}
