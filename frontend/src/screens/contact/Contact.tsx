import Contact1 from '../../assets/contact-img.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import './Contact.css'

export const Contact = () => {
  return (
    <>
      <section className="contact">
        <section className="contact-top">
          <div className="contact-content">
            <img src={Contact1} alt="contact-icon" width={250} height={155} className="contact-img" />
            <h1 className="contact-container-title">Ponte en contacto con nosotros</h1>
            <h3 className="contact-container-text">
              Cuéntanos brevemente cómo ayudarte y déjanos un teléfono y mail de contacto. Nosotros te llamamos a la brevedad.
            </h3>
          </div>
        </section>
        <section className="contact-info">
          <div className="contact-information">
            <div className="contact-information-box">
              <div className="contact-info-container contact-information-box-text">
                <p className="contact-info-container-text">Envía un mail a</p>
                <h6 className="contact-info-container-desc">soporte@devconnect.com</h6>
              </div>
              <div className="contact-info-container contact-information-box-text">
                <p className="contact-info-container-text">Puedes llamarnos al</p>
                <h6 className="contact-info-container-desc">+123456789</h6>
              </div>
              <div className="contact-info-container contact-information-box-text">
                <p className="contact-info-container-text">Encuentranos en</p>
                <h6 className="contact-info-container-desc">Lorem Street</h6>
              </div>
            </div>
            <div className="social-profiles">
              <a href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" className="footer-social-icon" />
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instragram" className="footer-social-icon" />
              </a>

              <a href="https://x.com/?lang=es" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Twitter" className="footer-social-icon" />
              </a>

              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <img src={youtube} alt="Youtube" className="footer-social-icon" />
              </a>
            </div>
          </div>
          <div className="form">
            <form action="" className="contact-container form">
              <div className="form-input">
                <input className="form-input-text" type="text" placeholder="First Name" />
                <input className="form-input-text" type="text" placeholder="Last Name" />
              </div>
              <div className="form-input">
                <input className="form-input-text" type="text" placeholder="Email" />
                <input className="form-input-text" type="text" placeholder="Phone" />
              </div>
              <textarea placeholder="Message" className="message"></textarea>
              <button type="submit" className="form-btn">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  )
}
