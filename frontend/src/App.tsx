import { ThemeProvider } from '@mui/material'
import { Home } from '../.vscode/build-general-ui/original-components/HomeDiego'
import './App.css'
import { getMainTheme } from './theme/getMainTheme'

function App() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <Home />
    </ThemeProvider>
  )
}

export default App
