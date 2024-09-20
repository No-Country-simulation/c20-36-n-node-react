import { Box } from '@mui/material'
import HomeHero from '../../components/organisms/HomeHero/HomeHero'
import Intro from '../../components/organisms/Intro/Intro'
import TestimonialSection from '../../components/organisms/TestimonialSection/TestimonialSection'
import './Home.css'

const Home = () => {
  return (
    <Box>
      <Box className="hero" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <HomeHero />
      </Box>
      <Intro />
      <TestimonialSection />
    </Box>
  )
}

export default Home
