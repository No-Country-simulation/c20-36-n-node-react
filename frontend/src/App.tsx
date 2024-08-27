import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddBox } from '@mui/icons-material'
import { Box, Button, ThemeProvider } from '@mui/material'
import { getMainTheme } from './theme/getMainTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={getMainTheme()}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MATCHMAKING</h1>
      <AddBox></AddBox>
      <Button>Test entry point</Button>
      <Box sx={{bgcolor: 'mono.black.1', p: 1, mb: 1}}>test color mono black 1</Box>
      <Box sx={{bgcolor: 'mono.black.2', p: 1, mb: 1}}>test color mono black 2</Box>
      <Box sx={{bgcolor: 'mono.black.3', p: 1, mb: 1}}>test color mono black 3</Box>
      <Box sx={{bgcolor: 'purple.1', p: 1, mb: 1}}>test color purple 1</Box>
      <Box sx={{bgcolor: 'purple.2', p: 1, mb: 1}}>test color purple 2</Box>
      <Box sx={{bgcolor: 'purple.3', p: 1, mb: 1}}>test color purple 3</Box>
      <Box sx={{bgcolor: 'purple.4', p: 1, mb: 1}}>test color purple 4</Box>
      <Box sx={{bgcolor: 'purple.5', p: 1, mb: 1}}>test color purple 5</Box>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  )
}

export default App
