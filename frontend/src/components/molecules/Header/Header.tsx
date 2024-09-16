import { Box } from '@mui/material'
import Navbar from '../../organisms/Navbar/Navbar'

export const Header = () => {
  return (
    <Box sx={{ display: 'flex', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
      <Navbar />
    </Box>
  )
}
