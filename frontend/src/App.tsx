import { ThemeProvider } from '@mui/material'
import './App.css'
import { Home } from './screens/Home'
import { getMainTheme } from './theme/getMainTheme'

function App() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
