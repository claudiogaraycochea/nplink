import React, { Component }from "react";
import {
  Button,
  Section,
  BoxIcon,
  Icon,
  H2, Subtitle,
} from '../../ui/UI';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
import './Home.css';

class Home extends Component {
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

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
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
      validated,
      subscriptionSent,
    } = this.state;
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
                  Ofrecemos un CRM gratuito que permite gestionar la atención al 
                  cliente en tu comercio o empresa.
                </div>
                <p>
                  Con tan solo insertar el botón de NextPlay en tu 
                  sitio web podrás acceder a un listado herramientas que mejoran la 
                  atención a tus clientes, que va desde botón de llamada de 
                  desktop a móvil, Whatsapp, llamadas, menú de contactos, 
                  chat, video chat, pagos y reservas para atención 
                  online/presencial y más de lo que tu empresa necesita.
                  Desde tu panel de control puedes configurar el botón de 
                  NextPlay en uno o múltiples canales de atención al cliente.
                </p>
                <p>
                  <a href='#signin'>
                    <Button
                      className='secondary large'
                    >
                      ¡Incluir en mi website gratis!
                    </Button>
                  </a>
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
              <H2>Características</H2>
            </Col>
          </Row>
          <Row className='center'>
            <Col>
              <Subtitle>
                Ofrecer una experiencia completa en la atención a tus clientes, 
                es sencillo y rápido. 
                Simplemente incrusta el botón de NextPlay en tu website o 
                landing page y podrás acceder a una serie de herramientas 
                creadas para brindar la mejor atención a tus clientes.
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
                  En el sitio web de escritorio al pie aparecerá un 
                  botón de NextPlay. Al hacer clic se podrá sincronizar 
                  con el móvil a través de un código QR. En su 
                  smartphone aparecerá instantáneamente las opciones de 
                  Llamar, Whatsapp, Chat, menú de contactos, etc.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <div className='step-content'>
                <H2>2. Contacto simple desde móvil</H2>
                <p>
                  En este dispositivo el logo de NextPlay se convierte 
                  en un botón de llamada instantánea, al hacer clic 
                  aparecerá las opciones para enviar un Whatsapp, 
                  Llamar, Chat, menú de contactos, etc.
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
                <H2>4. Menú selección de área de contacto</H2>
                <p>
                  Cuando llamamos a grandes empresas debemos escuchar y 
                  esperar las opciones de menú por voz. Desde NextPlay 
                  brindamos una mejor opción a sus clientes, donde la 
                  comunicación con el área de interés se muestra al 
                  instante, más intuitiva, rápido y con otras opciones 
                  de contacto.
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
                A través de un sencillo panel de control podrás 
                administrar la comunicación con tus clientes. 
                Encontrarás estas y otras herramientas que se 
                suman constantemente para mejorar la experiencia 
                del usuario.
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
        <a id="signin" href='#no'> </a>
        <Section className='dark center'>
          <Row>
            <Col>
              <H2>Pruebalo gratis</H2>
              <p>
                Se uno de los primeros en utilizar nuestra plataforma
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <div className='form-wrapper'>
              {(subscriptionSent===false) ? (
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
                        <div className='check-terms'>
                        <Form.Check
                          type="checkbox"
                          label="Aceptar Términos y condiciones"
                          value="true"
                          name="terms"
                          required
                          onChange={(event) => this.handleInputChange(event)}
                        />
                        </div>
                      </Col>
                    </Form.Group>
                  </Form.Row>
                  <div className='d-flex justify-content-end'>
                    <Button className='primary large' type='submit'>Subscribirme</Button>
                  </div>
                </Form>
              ) : (
                <div>
                  <Alert variant='success'>¡Gracias por subscribirte! te contactaremos a la brevedad.</Alert>
                </div>
              )}
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;