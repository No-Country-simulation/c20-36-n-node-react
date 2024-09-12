import { ThemeProvider } from '@mui/material'
import Home from '../(home)/Home'
import { getMainTheme } from '../../theme/getMainTheme'

export default function HomeScreen() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <main>
        <Home />
      </main>
    </ThemeProvider>
  )
}
