import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H2, H3,
  Icon,
} from '../../ui/UI';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './WorkshopWebDeveloper.css';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
import PaypalCheckoutButton from '../../components/paypalCheckoutButton/PaypalCheckoutButton.js';

class Workshop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forgotPasswordSent: false,
      email: '',
      repeat_email: '',
      firstname: '',
      lastname: '',
      city: '',
      zip_code: '',
      state: '',
      country: '',
      course_type: 99,
      validated: false,
      subscriptionSent: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFacebookURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com/workshop';
    const text = encodeURIComponent(message);
    return `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fneoassimilation.com&t=${text}`;
  }

  getWhatsappURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com/workshop';
    const text = encodeURIComponent(message);
    return `whatsapp://send?text=${text}`;
  }

  getTwitterURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com/workshop';
    const text = encodeURIComponent(message);
    return `https://twitter.com/intent/tweet?text=${text}`;
  }

  getLinkedinURL = () => {
    const message = 'Te invito a conocer el workshop de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visita https://neoassimilation.com/workshop';
    const text = encodeURIComponent(message);
    return `https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fneoassimilation.com&title=${text}`;
  }

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
    console.log('event: ', event);
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
			this.sendSubscribe();
		}
  }

	async sendSubscribe() {
		const { 
      email,
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
    } = this.state;

		const data = {
      "email": email,
      "firtname": firstname,
      "lastname": lastname,
      "city": city,
      "zip_code": zip_code,
      "state": state,
      "country": country,
      "course_type": 99,
    };
    const endpoint = '/subscriptor';
    //const endpoint = '/user';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ subscriptionSent: true });
		} catch (err) {
			// console.error(err);
		}
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
	}

  render() {
    const {
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
      email,
      repeat_email,
      course_type,
      validated,
      subscriptionSent,
    } = this.state;
    return (
      <Container fluid className='course'>
        <Section className='hero-wrapper wwd'>
          <Row>
            <Col xs={12} lg={7} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <div className='title mb-0'>
                  CURSO INTENSIVO PARA
                </div>
                <div className='title text-highlight'>
                  APRENDER DESARROLLO WEB PROFESIONAL
                </div>
                <div className='description'>
                  En 1 mes a solo €99, aprende a crear sitios web a nivel profesional y marketing para lograr una salida laboral en el mundo digital.
                </div>
                <div className='workshop-time'>
                  Cupo limitado a 30 alumnos /
                  Modalidad: Vía streaming / 
                  Días: Lun, Mier, Vier a las 19 hs (España) /
                  Duración: 1 mes
                </div>
                <div className='button-wrapper'>
                  <a href='#apuntate'>
                    <Button className='primary large'>Apuntarme al curso ahora</Button>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={5} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-brain-check'/>
            </Col>
          </Row>
        </Section>
        <Section className='highlight'>
          <div className='bubble-wrapper'>
            <Row>
              <Col xs={12} lg={4}>
                <i className='image-fisher'/>
              </Col>
              <Col xs={12} lg={8} className='d-flex flex-column align-items-center justify-content-center text-lg-left-xs-center'>
                <div className='content'>"Regala un pescado a un hombre y le darás alimento para un día, 
                enseñale a pescar y lo alimentarás para el resto de su vida"</div>
              </Col>
            </Row>
          </div>
        </Section>
        <Section>
          <Row>
            <Col xs={12} lg={8} className='text-lg-left-xs-center'>
              <H2>Acerca del curso</H2>
              <p>
                Soy Claudio Garaycochea, con más de 17 años desarrollando productos 
                para startups y compañías de California, Washington DC y Suiza. 
                Desarrollé apps para la compañía Facebook, el sitio web GlobalLogic.com, 
                entre otras.
              </p>
              <p>
                Con el aval de mi experiencia profesional, creé este curso para que tu 
                puedas iniciarte rápidamente en el mundo laboral digital.
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <i className='image-how-born'/>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>¿QUÉ APRENDERÁS?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                El curso pretende formar con conocimientos básicos para que 
                puedas crear campañas de marketing y desarrollar websites para 
                comercios o empresas.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box>
                <div className='title'>OBJETIVO 1</div>
                <div className='content'>
                  <p>
                    Aprende a crear landing pages, campañas de marketing y 
                    digitalización de comercio.
                  </p>
                  <ul className='ul-wrapper'>
                    <li>Aprender rápidamente</li>
                    <li>Estructura tu día</li>
                    <li>Desarrollo de Landing page</li>
                    <li>Puesta en marcha</li>
                    <li>Marketing online</li>
                    <li>Digitalización de comercios</li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col>
              <Box>
                <div className='title'>OBJETIVO 2</div>
                <div className='content'>
                  <p>
                    Adquiere conocimientos básicos para 
                    desarrollar websites para comercios o empresas.              
                  </p>
                  <ul className='ul-wrapper'>
                    <li>Desarrollo de websites profesionales</li>
                    <li>Aprende herramientas de trabajo</li>
                    <li>Estructura de equipos de desarrollo</li>
                    <li>Lenguajes de programación</li>
                    <li>Desarrollo de Apps</li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col>
              <Box>
                <div className='title'>OBJETIVO 3</div>
                <div className='content'>
                  <p>
                    Poner en marcha tu emprendimiento online, como conseguir clientes, y más.
                  </p>
                  <ul className='ul-wrapper'>
                    <li>Lean startup</li>
                    <li>Crear plan de negocio</li>
                    <li>Busqueda de financiación</li>
                    <li>Formar equipo correcto</li>
                    <li>Conseguir clientes</li>
                    <li>Vende con neoasimilación</li>
                    <li>Tips</li>
                  </ul>
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section className='bg-wave'>
          <Row>
            <Col>
              <H2>¡APUNTATE AHORA!</H2>
              <H3>Cupo limitado a 30 alumnos</H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p> 
                El curso consiste en 3 días por semana vía streaming durante 1 mes, 
                cada clase dura 1 hora, donde te enseño lo básico de cada tema, 
                estará acompañado de material de soporte que te ayudará en la  
                práctica. Fecha de inicio 15 de noviembre.
              </p>
              <p>
                Con mi guía, tu dedicación y esfuerzo, puedes convertirlo en tu salida laboral. 
                Apuntate ahora... envíame un Whatsapp a +34 932 209092 o completa el siguiente 
                formulario y adquiere tu cupo ahora.
              </p>
            </Col>
          </Row>
          {(subscriptionSent===false) ? (
            <Row>
              <Col className='d-flex justify-content-center'>
                <div className='form-wrapper'>
                  <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Nombre'
                          name='firstname'
                          value={firstname}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Apellido'
                          name='lastname'
                          value={lastname}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Ciudad'
                          name='city'
                          value={city}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Código Postal</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Código Postal'
                          name='zip_code'
                          value={zip_code}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Estado/Provincia</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Estado/Provincia'
                          name='state'
                          value={state}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group controlId='state' as={Col}>
                        <Form.Label>País</Form.Label>
                        <Form.Control
                          as='select'
                          name='country'
                          value={country}
                          onChange={this.handleInputChange}
                        >
                          <option>Choose a country</option>
                          {countries.map((country) => {
                            return (
                              <option key={country.code} value={country.name}>
                                {country.name}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Email'
                          name='email'
                          value={email}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group> 
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Repite tu email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='Email'
                          name='repeat_email'
                          value={repeat_email}
                          required
                          onChange={this.handleInputChange}
                        />
                      </Form.Group> 
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Row}>
                        <Col>
                          <Form.Check
                            type="checkbox"
                            label="Aceptar Términos y condiciones"
                            value="true"
                            name="terms"
                            required
                            onChange={(event) => this.handleInputChange(event)}
                          />
                        </Col>
                      </Form.Group>
                    </Form.Row>
                    <div className='d-flex justify-content-end'>
                      <Button className='primary large' type='submit'>Subscribirme</Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          ) : (
            <div>
              <Row>
                <Col>
                  <h2>Realiza el pago</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PaypalCheckoutButton amount={course_type}/>
                </Col>
              </Row>
            </div>)
          }

        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              Comparte esta página a alguien que desees ayudar...
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='social-wrapper'>
                <Col xs={12} lg={3} className='d-flex flex-column align-items-center justify-content-center social-item'>
                  <a href={this.getWhatsappURL()} data-action="share/whatsapp/share">
                    <Button className='whatsapp'><Icon className='whatsapp small space'/> Compartir en Whatsapp</Button>
                  </a>
                </Col>
                <Col xs={12} lg={3} className='d-flex flex-column align-items-center justify-content-center social-item'>
                  <a href={this.getFacebookURL()}>
                    <Button className='facebook'><Icon className='facebook small space'/> Compartir en Facebook</Button>
                  </a>
                </Col>
                <Col xs={12} lg={3} className='d-flex flex-column align-items-center justify-content-center social-item'>
                  <a href={this.getTwitterURL()} data-size="large">
                    <Button className='twitter'><Icon className='twitter small space'/> Compartir en Twitter</Button>
                  </a>
                </Col>
                <Col xs={12} lg={3} className='d-flex flex-column align-items-center justify-content-center social-item'>
                  <a href={this.getLinkedinURL()} data-size="large">
                    <Button className='linkedin'><Icon className='linkedin small space'/> Compartir en Linkedin</Button>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        <div className='call-to-action-wrapper'>
          <div className='space'>
            ¡Consulta ahora!
          </div>
          <a href='https://wa.me/34932209092'>
            <Button className='primary'>Whatsapp +34 932 209092</Button>
          </a>
        </div>
      </Container>
    );
  }
};

export default Workshop;