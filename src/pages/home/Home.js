import React, { Component }from "react";
import {
  Button,
  Section,
  BoxIcon,
  Icon,
  H2, Subtitle,
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
                <div className='hero-title'>
                  Brinda una mejor experiencia de atención a tus clientes
                </div>
                <div className='hero-subtitle'>
                  Ofrecemos un CRM gratuito para gestión de atención al cliente 
                  que mejora la experinecia en tu comercio o empresa.
                </div>
                <p>
                  Simplemente insertando el botón de NextPlay, tu empresa 
                  podrá acceder a un listado herramientas que mejoran la 
                  atención a tus clientes, van desde botón de llamada de 
                  desktop a móvil, Whatsapp, llamadas, menú de contactos, 
                  chat, video chat, pagos y reservas para atención 
                  online/presencial y más de lo que tu empresa necesita.
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
          <Row className='center'>
            <Col>
              <H2>Carácteristicas</H2>
            </Col>
          </Row>
          <Row className='center'>
            <Col>
              <Subtitle>
                Mejora el proceso de llamadas instantáneas a tu comercio o empresa, ofrece un 
                menú de empresa con derivación de contacto, ofrece múltiples vías y 
                herramientas de atención al cliente, ideal para sitios webs o landing pages.
              </Subtitle>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='6'>
              <i className='image-step-1'/>
            </Col>
            <Col sx='12' lg='6'>
              <div className='step-content'>
                <H2>1. Llamada directa website de escritorio</H2>
                <p>
                  Al momento en que tu potencial cliente visita tu 
                  sitio web de escritorio aparecera en la parte 
                  inferior un boton de “contactanos”, al hacer 
                  click aparecera una ventana con un codigo QR, 
                  al escanear desde el movil estara llamando o 
                  enviando un Whastapp al instante. 
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <div className='step-content'>
                <H2>2. Contacto simple desde movil</H2>
                <p>
                  En la versión movil aparecera el boton 
                  para llamada directa, enviar un Whastapp, 
                  y otro agregado que desees insertar. 
                  Tu visitante siempre tendra a mano el 
                  boton que estimulará al contacto.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <i className='image-step-2'/>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='6'>
              <i className='image-step-3'/>
            </Col>
            <Col sx='12' lg='6'>
              <div className='step-content'>
                <H2>3. Retorno de contacto fuera de horario</H2>
                <p>
                  Al momento en que tu visitante ingresa fuera del horario  
                  de oficina, apareceran opciones como el formulario 
                  para ingresar su movil y retorno de llamada. 
                  De esta manera estaras estimulando al visitante 
                  a mantener el contacto con tu comercio 24x7.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <div className='step-content'>
                <H2>4. Menu seleccion de area de contacto</H2>
                <p>
                  Cada vez que alguien llama a tu empresa, debe 
                  esperar a escuchar las opciones de menu por voz, 
                  desde NextPlay brindamos una mejor opcion a tus 
                  clientes, donde la comunicacion con el area de 
                  interes por es cliente es mas intuitiva y rapida.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <i className='image-step-4'/>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <Row>
            <Col>
              <H2>CRM Gestor de Atención al Cliente</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Subtitle>
                Queremos que puedas acceder a una experiencia 
                completa de tu atención al cliente de la manera 
                más sencilla y rápida. Simplemente incrusta el botón de NextPlay y 
                podrás acceder a una serie de herramientas online, 
                especiamente creadas para ofrecer la mejor atención 
                a tus clientes.
              </Subtitle>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='chat'
              >
                Atención por Chat              
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='video-chat'
              >
                Atención por Video Chat              
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='booking'
              >
                Pagos y Reservas Online                
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='statistics'
              >
                Sistema de estadísticas               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='rating'
              >
                Puntuación de atención               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='phone-book'
              >
                Captura de teléfonos                 
              </BoxIcon>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='balancer'
              >
                Balanceador de llamadas               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='referrer'
              >
                URLs de Procedencia               
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='follow'
              >
                Seguimientos de atención               
              </BoxIcon>
            </Col>
          </Row>
        </Section>
        <Section className='light center'>
          <Row>
            <Col>
              <H2>Algunos clientes</H2>
            </Col>
          </Row>
          <Row>
            <Col className='d-flext justify-content-center'>
              <Icon className='customer-neoassimilation'/>
            </Col>
            <Col className='d-flext justify-content-center'>
              <Icon className='customer-publicbloc'/>
            </Col>
            <Col className='d-flext justify-content-center'>
              <Icon className='customer-zety'/>
            </Col>
            <Col className='d-flext justify-content-center'>
              <Icon className='customer-beno'/>
            </Col>
            <Col className='d-flext justify-content-center'>
              <Icon className='customer-mabella'/>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>Se uno de los primeros en utilizar nuestra plataforma</Col>
          </Row>
          <Row>
            <Col>
              Formulario
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;