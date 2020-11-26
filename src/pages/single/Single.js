import React, { Component } from "react";
import {
  Button,
  Section,
  BoxIcon,
  H1, H2, H3, Subtitle,
  Icon,
} from '../../ui/UI';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
import './Single.css';
import VisibilitySensor from "react-visibility-sensor";

class Single extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forgotPasswordSent: false,
      email: '',
      repeat_email: '',
      password: '',
      repeat_password: '',
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
      password,
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
    } = this.state;

		const data = {
      "email": email,
      "password": password,
      "firstname": firstname,
      "lastname": lastname,
      "city": city,
      "zip_code": zip_code,
      "state": state,
      "country": country
    };
    const endpoint = '/user';
    // https://im6s39wy0a.execute-api.sa-east-1.amazonaws.com/prod
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
      password,
      repeat_password,
      validated,
      subscriptionSent,
    } = this.state;
    return (
      <Container fluid>
        <Section className='hero-wrapper'>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Row>
                <Col>
                  <div className={`hero-title ${isVisible ? "slideUp enter" : "slideUp"}`}>
                    Mejora la atención a tus clientes
                  </div>
                  <div className={`hero-subtitle ${isVisible ? "slideUp enter s2" : "slideUp"}`}>
                    Ofrecer una mejor experiencia en la atención a tus clientes, es fácil y rápido. 
                    Simplemente incrusta el botón de NextPlay en tu website o landing page y 
                    podrás acceder a una serie de herramientas creadas para mejorar la 
                    experiencia de atención a tus clientes.
                  </div>
                  <div>
                    <a href='#signin' className={isVisible ? "slideUp enter s3" : "slideUp"}>
                      <Button className='secondary large'>
                        ¡Incluir en mi website gratis!
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            )}
          </VisibilitySensor>
        </Section>
        <Section className='blue-light'>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className='center-middle'>
              <div className='content'>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div>
                      <div className={isVisible ? "slideUp enter" : "slideUp"}>
                        <H2>Elige la herramienta de comunicación más adecuada para cada necesidad</H2>
                      </div>
                      <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                        Inserta el código por única vez en tu website o landing page, desde tu 
                        panel de control elige las herramientas que consideres más apropiadas para una 
                        mejor atención a tus clientes. Habilita en tu botón NextPlay contactos 
                        por Whatsapp, llamada, chat, video chat, menú y submenus de contactos, 
                        reservas pagas, compartir pantalla para soporte y mucho más.
                      </div>
                    </div>
                  )}
                </VisibilitySensor>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
              <div className='row'>
                <i className='image-hero-home'/>                
              </div>
            </Col>
          </Row>
        </Section>
        <Section>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div>
                <div className={isVisible ? "slideUp enter" : "slideUp"}>
                  <Row className='center'>
                    <Col>
                      <H1>Así Funciona</H1>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row className='center'>
                    <Col>
                      <Subtitle>
                        Desde NextPlay buscamos mejorar la experiencia de atención a tus clientes, te mostramos algunos ejemplos...
                      </Subtitle>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
                <Row>
                  <Col sx='12' lg='6'>
                    <i className='image-step-1'/>
                  </Col>
                  <Col sx='12' lg='6'>
                    <div className={`step-content ${isVisible ? "slideUp enter" : "slideUp"}`}>
                      <H2>1. Llamada directa website de escritorio</H2>
                      <p>
                        El botón NextPlay en desktop permite una rápida sincronización a llamadas desde el móvil.
                      </p>
                    </div>
                  </Col>
                </Row>
            )}
          </VisibilitySensor>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className={`step-content ${isVisible ? "slideUp enter" : "slideUp"}`}>
                    <H2>2. Contacto simple desde móvil</H2>
                    <p>
                      En tu móvil el botón NextPlay se convierte en un menú de contacto inmediato.
                    </p>
                  </div>
                )}
              </VisibilitySensor>
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
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className={`step-content ${isVisible ? "slideUp enter" : "slideUp"}`}>
                    <H2>3. Retorno de contacto fuera de horario</H2>
                    <p>
                      Al momento en que el visitante consulta fuera de horario, capturas su contacto telefónico.
                    </p>
                  </div>
                )}
              </VisibilitySensor>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div>
                <div className={isVisible ? "slideUp enter" : "slideUp"}>
                  <Row>
                    <Col>
                      <H2>Gestor de Atención al Cliente</H2>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
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
                </div>
              </div>
            )}
          </VisibilitySensor>
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
                Compartir pantalla
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
        <Section className='center'>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div>
                <div className={isVisible ? "slideUp enter" : "slideUp"}>
                  <Row>
                    <Col>
                      <H1>Fácil de Implementar</H1>
                    </Col>
                  </Row>
                </div>
                <div className={isVisible ? "slideUp enter s2" : "slideUp"}>
                  <Row>
                    <Col>
                      <Subtitle>
                        Incluye el botón NextPlay en tu sitio web en pocos minutos, 
                        solo sigue estos simples pasos...
                      </Subtitle>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </VisibilitySensor>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='add-user'
              >
                <H3>1. Registrate</H3>
                Crea tu cuenta totalmente gratis.
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='config'
              >
                <H3>2. Configura</H3>
                Ingresa tus contactos de atención al cliente, teléfono, Whatsapp, otros.
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='embedded'
              >
                <H3>3. Publícalo</H3>
                Genera el código e incrustalo en tu website o landing page. Listo!
              </BoxIcon>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <Row>
            <Col>
              <H1>Precios</H1>
            </Col>
          </Row>
          <Row>
            <Col className='box-price-wrapper'>
              <div className='box-price'>
                <div className='header'>
                  <H3>FREE PLAN</H3>
                  <H2>$0,00</H2>
                  <div>MES</div>
                </div>
                <div className='content'>
                  <p>
                    Acceso a 100 consultas por día a funciones básicas 
                    como botones de llamadas telefónicas, Whatsapp, 
                    emails, otros.
                  </p>
                </div>
                <div className='bottom'>
                  <a href='#signin'>
                    <Button className='large'>Obtenlo Gratis</Button>
                  </a>
                </div>
              </div>
              <div className='box-price blue'>
                <div className='header'>
                  <H3>SILVER PLAN</H3>
                  <H2>$2,99</H2>
                  <div>MES</div>
                </div>
                <div className='content'>
                  <p>
                    Acceso a 1.000 consultas por día a funciones básicas 
                    como botones de llamadas telefonicas, Whatsapp, emails, 
                    menú de empresa, chat limitado, estadísticas, otros.
                  </p>
                </div>
                <div className='bottom'>
                  <a href='#signin'>
                    <Button className='large'>Obtenlo Ahora</Button>
                  </a>
                </div>
              </div>
              <div className='box-price dark'>
                <div className='header'>
                  <H3>Desarrollo a Medida para tu Empresa</H3>
                </div>
                <div className='content'>
                  <p>
                    Un proceso integral donde analizamos las necesidades 
                    de sus clientes, en base a ello desarrollamos un sistema 
                    a medida que brinde la mejor experiencia a sus clientes.
                  </p>
                </div>
                <div className='bottom'>
                  <a href='mailto:claudio@nextplay.link'>
                    <Button className='large'>Contactar Experto</Button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <Row>
            <Col>
              <H2>Algunos clientes</H2>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Icon className='customer-neoassimilation'/>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Icon className='customer-publicbloc'/>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Icon className='customer-zety'/>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Icon className='customer-beno'/>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Icon className='customer-mabella'/>
            </Col>
          </Row>
        </Section>
        <a id="signin" href='#no'> </a>
        <Section className='dark center'>
          {/*<Row>
            <Col>
              <H1>Obtenlo Gratis</H1>
              <p>
                Solo para los primeros 1.000 usuarios registrados
              </p>
            </Col>
          </Row>*/}
          <Row>
            <Col>
              <H1>Obtenlo Gratis</H1>
              <p>
                Se uno de los primeros en utilizar la plataforma, apuntate y te enviaremos el acceso a la brevedad.
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
                    <Form.Group as={Col}>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Repite Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        name='repeat_password'
                        value={repeat_password}
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
                    <Button className='primary large' type='submit'>Registrarme</Button>
                  </div>
                </Form>
              ) : (
                <div>
                  <Alert variant='success'>Tu cuenta se ha creado correctamente. En menos de 48hs estaremos enviando el acceso a tu panel de control. Muchas gracias!</Alert>
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

export default Single;
