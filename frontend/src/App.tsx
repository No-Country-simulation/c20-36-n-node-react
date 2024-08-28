import { Box, Button, ThemeProvider, Typography } from '@mui/material'
import { getMainTheme } from './theme/getMainTheme'
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <Box sx={{ width: "100%", maxWidth: 375 }}>
        <Button>Test entry point</Button>
        <Box sx={{bgcolor: 'mono.black.1', p: 1, mb: 1}}>test color mono black 1</Box>
        <Box sx={{bgcolor: 'mono.black.2', p: 1, mb: 1}}>test color mono black 2</Box>
        <Box sx={{bgcolor: 'mono.black.3', p: 1, mb: 1}}>test color mono black 3</Box>
        <Box sx={{bgcolor: 'purple.1', p: 1, mb: 1}}>test color purple 1</Box>
        <Box sx={{bgcolor: 'purple.2', p: 1, mb: 1}}>test color purple 2</Box>
        <Box sx={{bgcolor: 'purple.3', p: 1, mb: 1}}>test color purple 3</Box>
        <Box sx={{bgcolor: 'purple.4', p: 1, mb: 1}}>test color purple 4</Box>
        <Box sx={{bgcolor: 'purple.5', p: 1, mb: 1}}>test color purple 5</Box>
        <Typography variant="h1" gutterBottom>
          Hello World
        </Typography>
      </Box>
      </ThemeProvider>
  )
}

export default App;
