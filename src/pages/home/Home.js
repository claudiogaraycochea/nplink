import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H2, H3,
  Icon,
} from '../../ui/UI';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/header/Header';
import Newsletter from '../../components/newsletter/Newsletter';
// import imageClaudio from '../../assets/images/image-claudio-g.png';

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
    // const { fullData } = this.props;
    return (
      <Container fluid>
        <Header/>
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={12} lg={7} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <div className='title'>NEOASIMILACIÓN, NEUROCIENCIA BASADA EN HABILIDADES LABORALES</div>
                <div className='subtitle-small'>
                  El mundo de hoy requiere que tu adquieras habilidades laborales de 
                  manera constante. La falta de tiempo para estudiar, dinero, estrés,  
                  son factores que se suman a la exigencia de tu día a día. 
                  Podemos ayudarte...
                </div>
                <p>
                  La Neoasimilación es un método basado en neurociencia con el cual 
                  obtendrás rápidamente nuevas habilidades laborales y podrás reducir 
                  tu carga cerebral. Una herramienta cognitiva creada para mejorar tu 
                  calidad de vida, independientemente de las exigencias.
                </p>
                <p>
                  En este documento podrás aprender gratis que es la Neoasimilación, 
                  además, te invitamos a participar de un workshop vía streaming, enfocado 
                  a darte las herramientas laborales para que puedas emprender o trabajar 
                  en el mundo digital.
                </p>
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
              <H2>¿Cómo nace la Neoasimlación?</H2>
              <p>
                Soy Claudio Garaycochea, durante casi dos décadas me dediqué al 
                desarrollo de proyectos en startups y compañías, 
                colaborando en todo tipo de tareas relacionadas a innovación, 
                experiencia de usuario, desarrollo de apps y websites, hasta 
                marketing corporativo y nuevas tecnologías. El cubrir todo tipo 
                de necesidades demandaba muchas horas de trabajo, momentos de 
                estrés y presión. Siempre requería aprender algo nuevo, pero 
                no podía pagar cursos por cada necesidad, tampoco disponía de 
                tiempo para ello, entraba en un pozo difícil de salir.
              </p>
              <p>
                A medida que pasaban los años, la exigencia laboral era mayor y 
                la carga cerebral aumentaba generando una sensación de malestar. 
                Esto me impulso a estudiar neurociencia para encontrar una solución 
                frente a tanta exigencia mental. El conocer como funciona nuestro 
                cerebro me permitió crear mi propio método para obtener habilidades 
                cognitivas y reducir mi estrés, lo llamé Neoasimilación. Con él, logré 
                aprender a hablar en inglés en tan sólo una semana, el mismo lapso 
                para aprender lenguajes de programación para trabajar en startups y 
                compañías de IT. Tal fue el cambio en mi vida que me animó a 
                compartir este conocimiento para ayudar a los demás.
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <i className='image-how-born'/>
            </Col>
          </Row>
        </Section>
        <Section className='image-left'>
          <Row>
            <Col>
              <H2>Aprende Neoasimilación gratis</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                En este momento de crisis es muy importante ayudarnos entre todos, 
                poder adquirir habilidades laborales rápidamente te 
                permitirá mayores oportunidades de empleo o realizar tu propio 
                emprendimiento sin que la falta de recursos te detenga
              </H3>
              <p>
                Queremos que aprendas a utilizar Neoasimilación sin coste alguno, 
                por ello hemos publicado en este documento la información necesaria para 
                que puedas comenzar a implementarlo. También sugerimos utilizar 
                como método de estudio en instituciones educativas, colegios, 
                universidades, cursos, etc. Si tienes dudas, consultanos a 
                nuestro correo. 
              </p>
              <p>
                Para sustentar la ayuda gratuita de Neoasimilación, ofrecemos workshops 
                por un valor asequible para que apliques el método aprendiendo 
                habilidades laborales en el sector digital. Podrás aprender a crear 
                campañas de marketing y digitalización de comercios, hasta programación 
                de websites para trabajar en startups o compañías. Generamos en tí 
                una habilidad de autoaprendizaje para que siempre puedas cubrir 
                cualquier necesidad en el sector tecnológico.
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              <H2>Comencemos...</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              A continuación aprenderás cómo funciona tu cerebro, como 
              actúa automáticamente, como acelerar el proceso de aprendizaje 
              y reducir la carga cerebral. Ten en cuenta que los cambios 
              quedan bajo tu absoluta responsabilidad, dependerá pura y 
              exclusivamente de tu correcta implementación.
            </Col>
          </Row>
        </Section>
        <Section className='image-right'>
          <Row>
            <Col>
              <H2>¿Cómo pensamos/actuamos?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              El como "pensamos/actuamos", es relacionado a reducir carga en nuestro cerebro. 
              Según entendemos, la asimilación es la columna vertebral de la neurociencia. 
              Donde una vez que asimilas algo es muy difícil cambiarlo porque requiere carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>EJEMPLO 1</div>
                <p>
                  Cuando cruzamos una calle con un niño, 
                  lo tomamos de la mano.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>EJEMPLO 2</div>
                <p>
                  Cuando vamos por una salsa de tomate en un supermercado, 
                  buscamos una lata de color rojo.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>EJEMPLO 3</div>
                <p>
                  Cuando conducimos nuestro automóvil y hablamos con alguien.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              Otro ejemplo de asimilación es "La rzaón por la que tu cberreo pudee leer etse txeto".
              Casi todo el tiempo tu cerebro actúa de manera automática con lo que haz asimilado previamente.
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>¿Qué tan automático somos?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Hay muchas teorías que si bien no aseguramos que son ciertas, nos ayudan a medir como 
              actuamos en el día a día, se indexa en tres funciones básicas que nos ayudan a 
              comprender nuestro comportamiento.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-3-brains'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>NEOCORTEX</div>
                <p>
                  El cerebro que piensa, lo utilzamos apróximadamente un 10%.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>LIMBICO</div>
                <p>
                  El cerebro que siente, lo utilizamos apróximadamente un 10%.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>REPTILIANO</div>
                <p>
                  El cerebro que actúa automáticamente, lo utilizamos apróximadamente un 80%.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Para entender cómo tú vives, citamos el siguiente ejemplo. Años atrás se 
                realizó una campaña de McDonald's, hicieron una encuesta a sus clientes 
                y todos estaban de acuerdo que sería bueno ofrecer comida saludable.
              </p>
              <p>
                Meses más tarde y millones de dólares invertidos en publicidad, fue un total 
                fracaso, la gente prefería seguir comiendo hamburguesas. Esto se debe a 
                que en el momento de la encuesta, la gente respondía con el cerebro 
                Neocórtex (o cerebro racional), pero a la hora de elegir utiliza el 
                cerebro Reptiliano (o cerebro automático).
              </p>
              <p>
                Es importante entender que dejamos nuestra vida en manos del cerebro 
                reptiliano. Es el mismo que domina el 80% de las desiciones de tu vida. 
                A su vez, tu cerebro Reptiliano se divide apróximadamente 10% genético 
                y 90% por asimilación.
              </p>
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Asimilación define tu vida</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                El funcionamiento de tu cerebro a lo largo de tu vida actúa por "asimilación", 
                es decir, aprende algo, asimila y aplica automáticamente para reaccionar de 
                manera inmediata
              </H3>
              <p>
                Esta claro que no podemos razonar todo por cuestiones obvias. Estos 3 pasos en 
                que nuestro cerebro actúa, es positivo para resolver en lo inmediato, pero, 
                generan un gran problema porque define el camino de nuestras vidas, ya que 
                cada acción depende de cosas que asimilamos previamente, gran parte de ellas 
                de manera inconsciente. Con Neoasimilación aprenderás a usar tu cerebro 
                de manera más racional y consciente.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <div className='title'>APRENDE</div>
                <p>
                  Tu cerebro se encuentra en constante aprendizaje de manera consciente o inconsciente.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-2'/>
                </div>
                <div className='title'>ASIMILA</div>
                <p>
                  Una vez que aprende, esta información se graba en tu cabeza de manera consciente e inconsciente.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-3'/>
                </div>
                <div className='title'>APLICA AUTOMATICAMENTE</div>
                <p>
                  Al asimilar tu cerebro aplicará automáticamente esa información.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Por ejemplo, cuando discutimos sobre política con otra persona, 
                si intentamos demostrarle con evidencias claras que esta equivocada, 
                esta persona no entenderá o te dirá que sí, pero luego seguirá 
                "pensando" lo mismo, aunque tenga un elefante frente a sus ojos  
                no lo verá. Esta otra persona también somos nosotros, las cosas 
                se escapan de nuestra comprensión, ya que todo depende de nuestra 
                asimilación previa. 
              </p>
              <p>
                La falta de correcta asimilación es la base del por qué peleamos, 
                nos enojamos y en ocaciones deriva en cosas peores. A este proceso 
                lo llamé "brain blocker", es el proceso en que la asimilación 
                previa no deja lugar a la comprensión. Se puede cambiar la 
                asimilación pero consta de técnicas de repetición.
              </p>
              <p>
                Por otro lado, ¿imaginas cuánto tardaríamos hablando si fuésemos seres 
                plenamente racionales? sería imposible, por eso casi siempre 
                actuamos de manera automática gracias a la asimilación.
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              Genial, ya sabemos que nuestro cerebro aprende de manera consciente e inconsciente, 
              asimila y la aplica automáticamente. La asimilación es la información que 
              vas a repetir automáticamente, define el 80% de nuestras decisiones, como pensamos 
              y que haremos. Por este motivo, tomamos la asimilación como el punto más importante 
              en nuestras capacidades, este proceso automático reducirá tu carga cerebral en 
              cualquier tarea independientemente de su complejidad, hablar, conducir, prevenir, 
              aprender, empleo, etc. Un proceso tan increíble que incluso podemos hacer 
              múltiples tareas a la vez.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Neoasimilación</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Ahora bien, que pasa si hacemos el mismo proceso de asimilación pero de manera 
                consciente. A este proceso lo hemos llamado Neoasimilación, los resultados son 
                muy interesantes, adquirimos habilidades laborales rápidamente, 
                reducimos el estrés, comprendemos mejor a terceros y más
              </H3>
              <p>   
                Utilizando correctamente la neoasimilación, independientemente de la complejidad 
                de la tarea, podrás guardar en tu cerebro solo la información necesaria para 
                actuar rápido, además, lo asimilado reducirá considerablemente tu carga cerebral. 
                Generando un estado de conford y mejorando tu calidad de vida.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-1'/>
                </div>
                <div className='title'>APRENDE DE MANERA AGRADABLE</div>
                <p>
                  Haz un resumen de lo que tienes que aprender con información 
                  contextual y estrictamente relevante.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-2'/>
                </div>
                <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                <p>
                  Una vez que creas tu material de aprendizaje, guardas esa 
                  información en tu cabeza con una técnica de 
                  asimilación apropiada.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-3'/>
                </div>
                <div className='title'>APLICA AUTOMATICAMENTE</div>
                <p>
                  Una vez asimilado, lo aplicarás automáticamente. 
                  Una respuesta inmediata y con baja carga cerebral. 
                </p>
              </Box>
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Ejemplo Real de Neoasimilación</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Años atrás fuí contratado para trabajar en una startup 100% anglo sin 
              saber inglés. Durante la primer meeting no entendía absolutamente nada, 
              escuchaba palabras como “Face” y entre otras que me hacían perder el 
              contexto por completo. Imaginaba que hablaban de caras en proyectos, 
              nada tenía sentido, la opcion de aprender 5.000 palabras en inglés de 
              una semana a otra, era imposible. Entonces ¿Cómo logré de una semana 
              a otra hablar en inglés? aunque no lo parezca, fue simple aplicando 
              Neoasimilación. A continuación te muestro un ejemplo...
            </Col>
          </Row>
          <Row>
            <Col>
              Aprender a hablar en inglés con mis compañeros de trabajo en una 
              semana... es muy importante respetar los 2 primeros pasos, 
              APRENDER DE MANERA AGRADABLE y ASIMILAR DE MANERA CONSCIENTE.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>1</div>
                    <div className='title'>APRENDE DE MANERA AGRADABLE</div>
                    <p>
                      Apunté las 3 maneras de saludar y busqué las 20 palabras más 
                      utilizadas por el team, como se escribe y su pronunciación. Finalmente 
                      “Face” era “Phase”.
                    </p>                   
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>2</div>
                    <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                    <p>
                      Asimilé las 23 palabras, por ejemplo "budget", miraba una imágen de un 
                      presupuesto y escuchaba como sonaba. Apróximadamente unas 20 veces 
                      por cada palabra hasta que lo asimilaba como una palabra nativa.                      
                    </p>
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>3</div>
                    <div className='title'>APLICA AUTOMATICAMENTE</div>
                    <p>
                      Listo! una vez asimiladas las palabras contextuales, tu cerebro 
                      reconoce cada una de ellas automáticamente. Una semana más 
                      tarde de la primer meeting, estaba hablando con ellos de manera 
                      relajada, utilizando mis recursos cognitivos enfocados a 
                      resolver las tareas laborales.                      
                    </p>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                La explicación es que varias palabras las tenía previamente 
                asimilada desde 
                el colegio, y otras asimilé de manera contextual gracias a la 
                neoasimilación. Mi comprensión abarcaba más del 70% del contexto.
              </p> 
              <p>
                Otro ejemplo, la neoasimilación me dió la capacidad de aprender 
                rápido para desarrollar apps y websites, para startups y 
                grandes compañías. 
                Éstas me contrataban conscientes que no sabía el 
                leguaje de programación para la cual era contratado, a la 
                semana siguiente estaba desarrollando a nivel profesional.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                En el momento que conviertes una tarea compleja en algo sencillo de aprender
                es el momento que sabes aplicar correctamente el paso 1 (Aprende de manera agradable).
                A partir de allí es el punto principal para que puedas asimilar lo resumido en el paso uno.
                Sabes que lo tienes asimilado una vez que repites esa tarea sin necesidad de mirar lo aprendido. 
                En este paso tu cerebro esta en el paso 3 donde aplicas automáticamente lo asimilado
              </H3>
              <Row>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>1</div>
                    <div className='title'>APRENDE DE MANERA AGRADABLE</div>

                    <div>1 - Define tiempo de aprendizaje, no debe superar una semana.</div>
                    <div>2 - Estructurate el día.</div>
                    <div>3 - Haz una visión general de contenido para ver 
                      lo que aprenderás y reducir tu ansiedad.
                    </div>
                    <div>4 - Busca al menos 10 fuentes de aprendizaje, encuentra la que 
                      tarda menos, y te enseñe los puntos claves.
                    </div>
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>2</div>
                    <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                      Ya tienes un resumen sobre como aprender de manera confortable, la asimilación es 
                      la manera en que se guarda lo que aprendes en tu cerebro.
                      Hay varias técnicas de asimilación consciente, la más común es la de repetir 
                      varias veces de manera práctica. Por ejemplo cuando aprendemos a dividir en la 
                      escuela, nos dan tareas para repetir, eso es una técnica de asimilación. 
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>3</div>
                    <div className='title'>APLICA AUTOMATICAMENTE</div>
                    Una vez que asimilas, tu cerebro reduce su carga cerebral porque toma la 
                    asimilación como algo que repite automáticamente. 
                    A medida que utilizas neoasimilación los resultados te 
                    soprenderán, hablar inglés, aprender lenguaje de programación 
                    en una semana es posible, todo dependerá si aplicas correctamente la Neoasimilación. 
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col>
                  Es importante aclarar que debes resumir correctamente lo que 
                  guardarás en tu cerebro, por ello te sugerimos que comiences 
                  con tareas básicas que no compromentan tu futuro laboral o 
                  estudio. A medida que comienzas a utilizar la neoasimilación 
                  mejorará considerablemente tu calidad de vida. Tal y como 
                  lo hizo conmigo, y quiero que te ayude de la misma manera a tí.
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        <div className='image-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Reducir estrés</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Además de aprender más y más rápido, otro de los objetivos
              de la neoasimilación, es reducir la carga cerebral. 
              A continuación graficamos según entendemos, cómo la correcta 
              información para realizar una tarea reduce la carga cerebral.
              La neoasimilación no reconoce una tarea como compleja, sino que 
              no es asimilado correctamente. 
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-assimilation'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-neoassimilation'/>
            </Col>
          </Row>
        </Section>
        <Section>
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
        {/*<Section className='deal-wrapper'>
          <Row>
            <Col>
              <H1>
                ADQUIERE RÁPIDAMENTE HABILIDADES PARA TRABAJAR EN EL MUNDO DIGITAL
              </H1>
              <H2>
                WORKSHOPS VIRTUALES BASADAS EN NEOASIMILACIÓN
              </H2>
              <p>
                Neoasimilación es un método basado en neurociencia que te permite agilizar el 
                proceso de aprender constantemente nuevas tecnologías y habilidades laborales. 
                Además, puede reducir el estrés y mejorar tu calidad de vida.
              </p>
              <div className='hero-course-bottom'> 
                <p>
                  Los talleres se brindarán vía streaming todos los viernes de 19hs a 20hs 
                  (España) a partir del 10 de noviembre.
                </p>
                <p>
                  Duración: 10 Meses / Costo: €29/Mes / Oferta: Workshop completo, un pago de €199.
                </p>
              </div>
              <div className='d-flex justify-content-center'>
                <Link to='/workshop'>
                  <Button className='primary large'>Más información</Button>
                </Link>                
              </div>
            </Col>
          </Row>
        </Section>*/}
        <div className='call-to-action-wrapper'>
          <div className='space'>
            Curso de neoasimilación para adquirir todo tipo de habilidades digitales, 
            marketing online, programación y más.
          </div>
          <Link to='/workshop'>
            <Button className='secondary'>Ver curso</Button>
          </Link>
        </div>
        <Newsletter/>
      </Container>
    );
  }
};

export default Home;