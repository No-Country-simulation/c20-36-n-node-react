import { ThemeProvider } from '@mui/material'
import './App.css'
import MainLayout from './components/organisms/layouts/MainLayout'
import { getMainTheme } from './theme/getMainTheme'

function App() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
