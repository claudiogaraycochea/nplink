import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H2, H3,
  Icon,
} from '../../ui/UI';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Workshop.css';
import { Link } from 'react-router-dom';
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
      course_type: 0,
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
      course_type
    } = this.state;

		const data = {
      "email": email,
      "firtname": firstname,
      "lastname": lastname,
      "city": city,
      "zip_code": zip_code,
      "state": state,
      "country": country,
      "course_type": course_type,
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
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={12} lg={7} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <div className='title'>
                  ADQUIERE RÁPIDAMENTE HABILIDADES PARA TRABAJAR EN EL MUNDO DIGITAL
                </div>
                <div className='subtitle'>
                  WORKSHOP VIRTUAL BASADO EN NEOASIMILACIÓN
                </div>
                <p>
                  Neoasimilación es un método basado en neurociencia que te permite  
                  agilizar el proceso de aprender constantemente nuevas tecnologías y 
                  habilidades laborales. Además, puede reducir el estrés 
                  y mejorar tu calidad de vida.
                </p>
                <div className='hero-course-bottom'> 
                  <p> 
                    Los talleres se brindarán vía streaming todos los viernes de 19hs a 20hs 
                    (España) a partir del 10 de noviembre.
                  </p>
                  <p>
                    Duración: 10 Meses / Costo: €29/Mes / Oferta: Taller completo, un pago de €199.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={5} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-brain-check'/>
            </Col>
          </Row>
        </Section>
        <Section className='bg-left'>
          <Row>
            <Col>
              <H2>NEOASIMILACIÓN & DEVELOPMENT</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Soy Claudio Garaycochea, con casi dos décadas de experiencia, desarrolle 
                apps para Facebook y el sitio web de GlobalLogic (compañía IT con clientes 
                como Samsung, HP, Fox, entre otros), también trabajé en startups  
                de California, Washington DC y Suiza.
                Según los requerimientos de cada proyecto me involucro desde las ideas de productos, 
                brainstorming, user experience, visual design, desarrollo, hasta 
                tareas de marketing y venta corporativa.
              </H3>
              <p>
                En este taller comparto, como creé y funciona la neoasimilación 
                de manera práctica, este método me permitió aprender a hablar en 
                inglés en sólo una semana con un equipo 100% anglo, también desarrolle 
                apps para Facebook sin saber el lenguaje de programación, una vez que me 
                contrataron a la semana estaba operativo.
                El mismo proceso lo empleé para desarrollar el sitio web de GlobalLogic.  
                <span className='text-highlight'> El workshop propone que tu pongas en 
                práctica la neoasimilación para que puedas aprender rápidamente y 
                constantemente las habilidades laborales relacionadas al mundo digital.
                </span>
              </p>
              <p>
                Si quieres saber que es neoasimilación haz 
                click en el siguiente enlace.
              </p>
              <div className='d-flex justify-content-center'>
                <Link to='/'>
                  ¿Qué es Neoasimilación?
                </Link>
              </div>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              En este momento de crisis es muy importante ayudarnos entre todos, 
              poder adquirir habilidades laborales rápidamente te 
              permitirá mayores oportunidades de empleo o realizar tu propio 
              emprendimiento sin que la falta de recursos te detenga.
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
                El workshop esta dividido en 3 objetivos, cada uno de ellos se dividen en periodos y 
                te permitirá su salida laboral, es de manera secuencial donde cada objetivo te 
                brindará las herramientas para el siguiente próposito
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
                    digitalización de comercio, <span className='text-highlight'>queremos que logres una salida 
                    laboral al segundo mes de este taller.</span>
                  </p>
                  <ul className='ul-wrapper'>
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
                    Programación de websites y apps a nivel profesional. Aprenderás 
                    los <span className='text-highlight'>conocimientos basicos para desarrollar  
                    websites para comercios o empresas.</span>                
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
                    Desarrollarás tu emprendimiento con dos objetivos, 
                    este servirá como <span className='text-highlight'>referencia 
                    laboral para trabajar en una empresa y/o generar ingresos 
                    con proyecto propio.</span>
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
        
        <Section>
          <Row>
            <Col>
              <H2>NEOASIMILACIÓN</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Aprende habilidades laborales rápidamente con este método
              </H3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DESGLOSANDO TU CEREBRO</div>
                <div className='content'>
                  ¿Cómo funciona?, ¿cómo aprendes?, ¿cómo tomas tus desiciones?, ¿mejorar las desiciones que tomas?, ¿cómo piensan tus clientes?, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>NEOASIMILACIÓN</div>
                <div className='content'>
                  ¿Qué es?, ¿cómo adquirimos habilidades rápidamente?, vida antes y después de neoasimilación, ejemplos reales de aprendizaje inmediato, ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>VENTAS</div>
                <div className='content'>
                  Incrementa las posivilidades de venta, previsualiza la aceptación de productos de tus clientes, ejemplos prácticos, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>BRAIN BLOCKER</div>
                <div className='content'>
                  ¿Qué es?, ¿Cómo funciona?, ¿Cómo evitarlo?, ejemplos prácticos, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>REDUCIR ESTRÉS</div>
                <div className='content'>
                  ¿Qué es?, Reducción de carga cerebral, ejemplos prácticos, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>HABILIDADES</div>
                <div className='content'>
                  Aprender a contextualizar, resumir, una tareas con doble 
                  interés, estructura tu día, ejemplos prácticos, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>OBJETIVO 1</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Aprende a crear landing pages, campañas de marketing y 
                digitalización de comercio, queremos que logres una salida 
                laboral al segundo mes de este taller
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-marketing'/>
            </Col>
          </Row>
          <Row>
            <Col>
              Aprenderemos que son y para que se utilizan las landing pages, brainstorming, UX, Visual 
              Design, Desarrollo en React, y puesta en marcha en servidores de Amazon Web Services. 
              Una vez que tienes tu landing page funcional, podrás crear campañas de marketing 
              en Google Adwords, Facebook Ads, entre otros. Con ello ya dispondrás de la habilidad 
              para hacer publicidad online. Te enseñaremos como aprender a mejorar tus servicios 
              de manera autodidacta.
            </Col>
          </Row>
          <Row>
            <Col>
              El taller esta creado para que puedas lograr tu salida laboral a partir del segundo mes. 
              A su vez, te forma con conocimientos básicos profesionales para que puedas adquirir 
              los conocimientos laborales del objetivo 2.
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>OBJETIVO 2</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Desarrollo de websites y apps a nivel profesional. Aprenderás 
                los conocimientos básicos para que puedas lograr una salida 
                laboral como desarrollador de websites para comercios o trabajar 
                en empresas
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-web-developer'/>
            </Col>
          </Row>
          <Row>
            <Col>
              Aprenderás a desarrollar websites profesionales conociendo como se 
              trabaja en startups y compañías, cuales son sus herramientas de trabajo, estructura y 
              equipos de desarrollo, lenguajes de programación y desarrollo de apps.
            </Col>
          </Row>
          <Row>
            <Col>
              El taller esta creado para que puedas lograr tu salida laboral a partir del 
              noveno mes. Brindandote las herramientas para emprender o trabajar en una 
              empresa.
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>OBJETIVO 3</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Desarrollarás tu emprendimiento con dos objetivos, 
                te servirá como referencia laboral para trabajar en una 
                empresa y/o generar ingresos con proyecto propio
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-entrepreneur'/>
            </Col>
          </Row>
          <Row>
            <Col>
              Aprenderás a realizar tus emprendimientos con mayores probabilidades 
              de éxito aplicando Lean startup, plan de negocio, financiación, formar equipos, 
              conseguir clientes, vender con neoasimilación y todo lo que necesites para 
              lanzar tu propio proyecto.
            </Col>
          </Row>
          <Row>
            <Col>
              El taller esta creado para que puedas lograr tus propios ingresos 
              al decimo mes. Este proyecto cumple con dos objetivos, el contar 
              con una referencia laboral para conseguir empleo como desarrollador, 
              e intentar monetizar tu propio emprendimiento.
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section className='bg-wave'>
          <Row>
            <Col>
              <H2>SUBSCRIBETE AL TALLER</H2>
              <H3>
                Brindamos charlas en vivo vía streaming
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p> 
                Los talleres se brindaran vía streaming todos los viernes de 19hs a 20hs (España) a partir del 10 de noviembre.
              </p>
              <p>
                Duración: 10 Meses / Costo: €29/Mes / Oferta: Taller completo, un pago de €199 (€19/Mes).
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
                    <fieldset>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                          Cursos:
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="Pago mensual €29/Mes"
                            value="29"
                            name="course_type"
                            id="formHorizontalRadios1"
                            onChange={(event) => this.handleInputChange(event)}
                          />
                          <Form.Check
                            type="radio"
                            label="Un pago de €199 (€19Mes)"
                            value="199"
                            name="course_type"
                            id="formHorizontalRadios2"
                            onChange={(event) => this.handleInputChange(event)}
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
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
      </Container>
    );
  }
};

export default Workshop;