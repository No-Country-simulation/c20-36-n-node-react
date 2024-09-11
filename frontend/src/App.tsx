import { ThemeProvider } from '@mui/material'
import './App.css'
import { Home } from './screens/Home'
import { getMainTheme } from './theme/getMainTheme'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../app/(home)/Home';
// import About from '../app/about/about';
// import Contact from '../app/contact/Contact';

function App() {
  return (
    <ThemeProvider theme={getMainTheme()}>
      <Home />
    </ThemeProvider>
  )
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
  // );
}

export default App;

