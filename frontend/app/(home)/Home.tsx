import Intro from '../../src/components/Intro/Intro';
import TestimonialSection from '../../src/components/TestimonialSection/TestimonialSection';
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-title-wrapper">
            <h1 className="hero-title-left">Descubre</h1>
            <h1 className="hero-title-right">Devconnect</h1>
          </div>
          <div className="hero-text-wrapper">
            <p className="hero-text">
              Conecta con programadores, colabora en proyectos desafiantes y construye una comunidad sólida.
            </p>
            <button className="hero-button">Regístrate</button>
          </div>
        </div>
      </div>
      <Intro />
      <TestimonialSection />
    </section>
  );
};

export default Home;
