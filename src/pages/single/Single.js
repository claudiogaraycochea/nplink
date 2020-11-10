import React, { Component } from "react";
import {
  Button,
  Section,
  BoxIcon,
  H2, H3, Subtitle,
} from '../../ui/UI';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
import './Single.css';

class Single extends Component {
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
                  Brinda una mejor atención a tus clientes
                </div>
                <div className='hero-subtitle'>
                  Ofrece una mejor experiencia en la atención a tus clientes 
                  facil y rápido. Simplemente incrusta el botón de NextPlay 
                  en tu website o landing page y podrás acceder a una serie 
                  de herramientas creadas para mejorar la experiencia de 
                  atención a tus clientes.
                </div>
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
              <H2>¿Qué es y cómo funciona?</H2>
            </Col>
          </Row>
          <Row className='center'>
            <Col>
              <Subtitle>
                NextPlay fue creado para mejorar el acceso a la 
                comunicación de tus clientes con tu comercio o empresa.
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
                  El botón NextPlay en desktop permite una rápida sincronización a llamadas desde el móvil.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <div className='step-content'>
                <H2>2. Contacto simple desde móvil</H2>
                <p>
                  En tu móvil el botón NextPlay se convierte en un menú de contacto inmediato.
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
                  Al momento en que el visitante consulta fuera de horario, captura su contacto telefónico.
                </p>
              </div>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <Row>
            <Col>
              <H2>¿Cómo implementarlo?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Subtitle>
                A través de un sencillo panel de control podrás 
                administrar la comunicación con tus clientes. 
                Encontrarás estas y otras herramientas que se 
                suman constantemente para mejorar la experiencia 
                del usuario, comienza a utilizarlo en 3 simples pasos.
              </Subtitle>
            </Col>
          </Row>
          <Row>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='add-user'
              >
                <H3>1. Registrate</H3>     
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='config'
              >
                <H3>2. Configura</H3>
              </BoxIcon>
            </Col>
            <Col sx='12' lg='4'>
              <BoxIcon
                icon='embedded'
              >
                <H3>3. Publicalo</H3>
              </BoxIcon>
            </Col>
          </Row>
        </Section>
        <Section className='center'>
          <Row>
            <Col>
              <H2>Precios</H2>
            </Col>
          </Row>
          <Row>
            <Col className='box-price-wrapper'>
              <div className='box-price'>
                <div className='content'>
                  <H3>FREE PLAN</H3>
                  <p>
                    Obten NextPlay gratis para tu sitio 
                    web o landing page, usuarios activos 
                    ilimitados, consultas ilimitadas. 
                    No require tarjeta de crédito.
                  </p>
                </div>
                <div className='d-flex justify-content-center'>
                  <a href='#signin'>
                    <Button className='secondary'>Obtenlo Gratis</Button>
                  </a>
                </div>
              </div>
              <div className='box-price'>
                <div className='content'>
                  <H3>DEVELOPMENT</H3>
                  <p>
                    Desarrollamos herramientas a 
                    medida para brindar la mejor 
                    atención a tus clientes, video chat, 
                    menú de compañía, reservas y pagos, 
                    entre otros.
                  </p>                  
                </div>
                <div className='text-highlight'>Contáctanos</div>
              </div>
            </Col>
          </Row>
        </Section>
        <a id="signin" href='#no'> </a>
        <Section className='dark center'>
          <Row>
            <Col>
              <H2>Obtenlo Gratis</H2>
              <p>
                Solo para los primeros 1.000 usuarios registrados
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
                        type='text'
                        placeholder='Ciudad'
                        name='city'
                        value={city}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Repite Password</Form.Label>
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

export default Single;