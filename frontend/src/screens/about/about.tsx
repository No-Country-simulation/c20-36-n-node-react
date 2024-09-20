import FaqsSection from '../../components/organisms/FaqsSection/FaqsSection'
import { benefits } from '../../constants/index'
import './about.css'
import AboutImg from '../../assets/about-img.png'

const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-image-wrapper">
          <img src={AboutImg} alt="about img" className="about-image" data-aos="fade-left" data-aos-delay="300" />
        </div>
        <div className="about-content">
          <div className="about-intro">
            <p className="about-welcome">Bienvenidos al Mundo de</p>
            <div className='about-title-content'>
              <h2 className="about-title">DEV</h2>
              <h2 className="about-title-second">CONNECT</h2>
            </div>
            <p className="about-description">
              DevConnect te permite construir una red sólida y global, facilitando encuentros con personas apasionadas por las mismas herramientas y
              lenguajes de programación que tú. Ya sea que estés buscando colaborar en un proyecto emocionante, encontrar mentores que te guíen en tu
              carrera profesional, o simplemente quieras expandir tu red de contactos, DevConnect te ofrece el espacio perfecto para crear conexiones
              significativas. Con una interfaz intuitiva y un sistema de coincidencias basado en tus intereses y experiencias, te asegurarás de que
              cada contacto que hagas aquí esté alineado con tus metas. Explora nuevas oportunidades, trabaja junto a profesionales talentosos y
              construye relaciones que te ayudarán a crecer tanto personal como profesionalmente.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">
                689<span className="stat-plus">+</span>
              </h3>
              <p className="stat-text">Conexiones Establecidas</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">
                350<span className="stat-plus">+</span>
              </h3>
              <p className="stat-text">Programadores Felices</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">
                55<span className="stat-plus">+</span>
              </h3>
              <p className="stat-text">Proyectos Colaborativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* benifits section */}
      <section className="benefits">
        <div className="benefits-grid first-row">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="benefit-box">
              <h5 className="benefit-title">{benefit.name}</h5>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="benefits-grid second-row">
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="benefit-box">
              <h5 className="benefit-title">{benefit.name}</h5>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* FAQs section */}
      <FaqsSection />
    </>
  )
}

export default About
