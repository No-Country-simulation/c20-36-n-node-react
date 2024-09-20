
import './Intro.css';

const Intro = () => {
  return (
    <>
      <section className="intro-container">
        <div className="intro-content">
          <div className="intro-header">
            <h1 className="intro-title">Amplia tu Red IT</h1>
            <p className="intro-description">
            Conecta con profesionales IT de todo el mundo en DevConnect. Descubre desarrolladores, diseñadores, y expertos en tecnología que comparten tus intereses, habilidades y aspiraciones. Ya sea que busques colaborar en un proyecto, encontrar mentores o expandir tu red de contactos, DevConnect te ofrece el espacio perfecto para crear conexiones significativas. ¡Regístrate y comienza a encontrar tus matches hoy mismo!
            </p>
          </div>
          <div className="intro-stats">
            <div className="intro-stat">
              <h3 className="stat-number">
                689<span className="stat-plus">+</span>
              </h3>
              <p className="stat-label">Conexiones Establecidas</p>
            </div>
            <div className="intro-stat">
              <h3 className="stat-number">
                350<span className="stat-plus">+</span>
              </h3>
              <p className="stat-label">Programadores Felices</p>
            </div>
            <div className="intro-stat">
              <h3 className="stat-number">
                55<span className="stat-plus">+</span>
              </h3>
              <p className="stat-label">Proyectos Colaborativos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
