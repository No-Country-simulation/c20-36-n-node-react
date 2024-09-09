import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../app/(home)/Home';
import About from '../app/about/about';
import Contact from '../app/contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
