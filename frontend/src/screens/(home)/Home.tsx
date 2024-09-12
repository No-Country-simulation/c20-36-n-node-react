import { Box } from '@mui/material'
import { Footer } from '../../components/organisms/Footer'
import HomeHero from '../../components/organisms/HomeHero/HomeHero'
import Intro from '../../components/organisms/Intro/Intro'
import Navbar from '../../components/organisms/Navbar/Navbar'
import TestimonialSection from '../../components/organisms/TestimonialSection/TestimonialSection'
import './Home.css'

const Home = () => {
  return (
    <Box className="home">
      <Box className="hero" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          <Navbar />
        </Box>
        <HomeHero />
      </Box>
      <Intro />
      <TestimonialSection />
      <Footer />
    </Box>
  )
}

export default Home
