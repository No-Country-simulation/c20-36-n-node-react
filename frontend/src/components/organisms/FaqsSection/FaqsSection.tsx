import { faqs } from '../../../constants/index'
import Accordion from '../Accordion/Accordion'
import './FaqsSection.css'

const FaqsSection = () => {
  return (
    <section className="faqs">
      <h2 className="faqs-title">PREGUNTAS FRECUENTES SOBRE DEVCONNECT</h2>
      <p className="faqs-text">
        En DevConnect, entendemos que es posible que tengas algunas preguntas antes de comenzar a utilizar nuestra plataforma. Sabemos lo importante
        que es sentirse cómodo con una nueva herramienta, especialmente cuando se trata de conectarse con otros profesionales y explorar nuevas
        oportunidades. A continuación, te ofrecemos respuestas a algunas de las preguntas más frecuentes para que puedas sacar el máximo provecho de
        tu experiencia en DevConnect.
        <br />
        <br />
        <span>Te dejamos acá un resumen de las preguntas que recibimos siempre así te ayudamos a prepararte en lo que se viene</span>
      </p>
      <div className="faqs-container">
        <div className="box">
          <Accordion data={faqs} />
        </div>
        <div className="additional-info">
          <div>
            <h5 className="info-title">¿Todavía tienes alguna pregunta?</h5>
            <p className="info-text">
              Si todavía tienes alguna duda, puedes apretar el siguiente botón que te llevará directo a nuesta informacion de contacto para que te
              puedas comunicar con nuestro equipo de soporte para que te briden asesoramiento en cualquier momento.
            </p>
            <button className="btn-primary">Contacto</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqsSection
