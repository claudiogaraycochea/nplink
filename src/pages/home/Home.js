import React, { Component }from "react";
import {
  Button,
  Section,
  BoxIcon,
  Icon,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  getFacebookURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com';
    const text = encodeURIComponent(message);
    return `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fneoassimilation.com&t=${text}`;
  }

  getWhatsappURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com';
    const text = encodeURIComponent(message);
    return `whatsapp://send?text=${text}`;
  }

  getTwitterURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com';
    const text = encodeURIComponent(message);
    return `https://twitter.com/intent/tweet?text=${text}`;
  }

  getLinkedinURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com';
    const text = encodeURIComponent(message);
    return `https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fneoassimilation.com&title=${text}`;
  }

  render() {
    return (
      <Container fluid>
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <div className='title'>
                  Incluye un enlace de llamadas instantaneas desde tu website desktop a tu movil
                </div>
                <div className='subtitle'>
                  Cada vez que un visitante ingresa a tu sitio en un ordenador, debe 
                  ingresar el contacto en su movil para luego enviar el mensaje, o 
                  ingresar todo el numero para llamar, con Nextplay esto es mucho 
                  mas facil para tus clientes.
                </div>
                <p>
                  Escanea el codigo QR desde su movil y al instante podra escribir el 
                  mensaje de Whatsapp o directamente podra llamarte. Un paso mas 
                  sencillo y estimulante para que tus visitantes contacten contigo.
                </p>
                <p>
                  Pruebalo ahora, abre este sitio web desde tu desktop y haz click 
                  en el boton “Contactanos desde tu movil”.
                </p>
                <p>
                  <Link to='/sign-in'>
                    <Button
                      className='secondary large'
                    >
                      ¡Incluir en mi website gratis!
                    </Button>
                  </Link>
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-hero-home'/>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <i className='image-step-1'/>
            </Col>
            <Col>
              <h2>Fdsfsafasfa</h2>
              <p>
                rewerwerewrewre e ewrwewerewr werwewerwe rwer werewrewrewrwerew 
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>Fdsfsafasfa</h2>
              <p>
                rewerwerewrewre e ewrwewerewr werwewerwe rwer werewrewrewrwerew 
              </p>              
            </Col>
            <Col>
              <i className='image-step-2'/>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <i className='image-step-3'/>
            </Col>
            <Col>
              <h2>Fdsfsafasfa</h2>
              <p>
                rewerwerewrewre e ewrwewerewr werwewerwe rwer werewrewrewrwerew 
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>Mas herramientas</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              Al momento en que tu potencial cliente visita tu sitio web de 
              escritorio aparecera en la parte inferior un boton de “contactanos”, 
              al hacer click aparecera una ventana con un codigo QR, al escanear 
              desde el movil estara llamando al instante.
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon=''
              >
                Sistema de estadisticas               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon=''
              >
                Puntuacion de atencion               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon=''
              >
                Captura de telefonos                 
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon=''
              >
                Balanceador de llamadas               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon=''
              >
                URLs de Procedencia               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon=''
              >
                Seguimientos de atencion               
              </BoxIcon>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;