import React, { Component }from "react";
import {
  Container, Section, Row, Col,
  Box, BoxCircle,
  H1, H2, H3, Button,
  Icon,
} from '../../ui/UI';
import './Home.css';
import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {
  render() {
    // const { fullData } = this.props;
    return (
      <Container>
        <Section className='hero-wrapper'>
          <Row>
            <Col>
              <div className='content'>
                <H1>NEOASIMILACION</H1>
                <H2>Obten habilidades cognitivas en 3 simples pasos</H2>
                <H3>
                  Un metodo con el cual obtendras una serie 
                  de beneficios necesarios para soportar las presiones del 
                  mundo de hoy, que van desde mejorar tu relacion con terceros, 
                  adquirir habilidades laborales, reducir tu estres, hasta mejorar 
                  ventas de productos.
                </H3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-brain-check'/>
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
        <Row>
            <Col>
              <H2>¿Qué puedes hacer con Neoasimilacion?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              La Neoasimilacion es un metodo ayuda a tu cerebro aprender rapido y de manera 
              confortable, para luego aplicar automaticamente lo aprendido. No es mas que 
              es el mismo proceso natural en que tu cerebro funciona, pero de manera 
              consciente y mas racional. A medida que utilizas esta practica, reducira 
              considerablemente tu carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col>
              Aplicando Neoasimilacion pude trabajar en una startup de USA 
              sin saber inglés, en tan solo una semana logre 
              comunicarme con un equipo 100% anglo. De la misma manera,
              aprendi lenguajes de programacion para desarrollar apps y websites en 
              grandes companias, estas me contrataban conscientes que no cumplia con 
              los requerimientos previamente, a la semana estaba 100% operativo.
            </Col>
          </Row>
          <Row>
            <Col>
              La Neoasimilacion es un metodo que se enfoca a mejorar tu calidad de 
              vida, es totalmente gratis, sin más, comencemos...
            </Col>
          </Row>
        </Section>
        <Section className='image-down'>
          <Row>
            <Col>
              <H2>¿Como surge la Neoasimilacion?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Soy Claudio Garaycochea, durante casi dos decadas me dedique al 
              desarrollo de proyectos para startups y companias, colaborando en 
              todo tipo de tareas relacionadas a innovacion, experiencia de usuario, 
              desarrollo de apps y websites, hasta 
              marketing corporativo y nuevas tecnologias. 
              El cubrir todo tipo de necesidades me exigia muchas horas de 
              trabajo, momentos de estres y presion. Lo cual me llevo a estudiar 
              neurociencia para encontrar una solucion frente a tanta exigencia mental.          
            </Col>
          </Row>
          <Row>
            <Col>
              Gracias a gurus de la neurociencia pude conocer como funciona nuestro 
              cerebro, sin embargo, no encontraba como ponerlo en practica. 
              Lo cual me llevo a crear mi propio metodo para obtener 
              habilidades cognitivas, lo llamé Neoasimilacion, tan positivo fue el cambio en mi vida 
              que me animo a compartir este conocimiento para ayudar a los demas. 
              Con este metodo obtendras una serie de beneficios que 
              van desde mejorar tu relacion con terceros, 
                adquirir habilidades laborales rapidamente para conseguir un mejor empleo, mejorar 
                ventas de productos y reducir tu estres laboral.
              Como aplicar el metodo se trata de explicar totalmente gratis en este documento.
            </Col>
          </Row>
        </Section>
        <Section className='start'>
          <Row>
            <Col>
              <H2>Comenzar</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              A continuacion aprenderas como funciona tu cerebro en tres items ("¿Como pensamos/actuamos?", 
              "La teoria de los 3 cerebros" y "Tu asimilacion define tu vida"), luego aprenderas que es la 
              neoasimilacion y como ponerlo en marcha ("La Neoasimiliación", "Ejemplo de Neoasimilacion" y "Mi primer practica de Neoasimilacion").
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>¿Como pensamos/actuamos?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              El como "pensamos/actuamos", es relacionado a reducir carga 
              en nuestro cerebro. Según entiendo, la asimilación es la 
              columna vertebral de la neurociencia. Donde una vez que asimilas 
              algo es muy difícil cambiarlo porque requiere carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-how-think'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <Box>
                    <div className='title'>EJEMPLO 1</div>
                    <div className='content'>
                      Cuando vemos un Rottwailer, la mayoría de nosotros "cruzamos a la vereda del frente".
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>EJEMPLO 2</div>
                    <div className='content'>
                      Cuando vamos por una salsa de tomate en un supermercado, buscamos una lata de color rojo.
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>EJEMPLO 3</div>
                    <div className='content'>
                      Cuando conducimos nuestro automovil y hablamos o leemos.
                    </div>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Otro ejemplo de asimilación es "La rzaón por la que tu 
              cberreo pudee leer etse txeto". Casi todo el tiempo nuestro 
              cerebro actua de manera automatica con lo que haz asimilado previamente.
            </Col>
          </Row>
        </Section>
        <Section className='start'>
          <Row>
            <Col>
              <H2>La teoría de los 3 cerebros</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Hay muchas teorias que si bien no aseguramos que son 
              ciertas, nos ayudan a medir como actuamos en el dia a 
              dia, se indexa en tres funciones basicas que nos ayudan 
              a comprender nuestro comportamiento.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-brain-automatic'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <Box>
                    <div className='title'>NEOCORTEX</div>
                    <div className='content'>
                      <div>El cerebro que piensa</div>
                      <div>APROX 10% DE USO</div>
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>LIMBICO</div>
                    <div className='content'>
                      <div>El cerebro que siente</div>
                      <div>APROX 10% DE USO</div>
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>REPTILIANO</div>
                    <div className='content'>
                      <div>El cerebro que actua</div>
                      <div>APROX 80% DE USO</div>
                    </div>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Para entender como tu vives, citamos el siguiente ejemplo. 
              Años atras se realizo una campaña de McDonald's, hicieron 
              una encuesta a sus clientes y todos estaban de acuerdo que 
              seria bueno ofrecer comida saludable.
            </Col>
          </Row>
          <Row>
            <Col>
              Meses mas tarde y millones de dolares gastados en publicidad, 
              fue un total fracaso, la gente preferia seguir comiendo 
              hamburguesas. Esto se debe a que en el momento de la encuesta, 
              la gente respondia con el cerebro Neocórtex (o cerebro racional), pero a la hora de 
              elegir utiliza el cerebro Reptiliano (o cerebro automatico).
            </Col>
          </Row>
          <Row>
            <Col>
              Segun los libros de psicologia, dejamos nuestra vida en manos 
              del cerebro reptiliano. Es el mismo que domina el 80% de las 
              desiciones de tu vida. A su vez, tu cerebro Reptiliano se 
              divide aprox. 10% genetico y 90% por asimilación. 
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Tu asimilacion define tu vida</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                El funcionamiento de tu cerebro a lo largo de tu vida actúa 
                por "asimilación", es decir, aprende algo, asimila y aplica 
                 automáticamente para reaccionar de manera inmediata.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              No podemos razonar todo por cuestiones obvias. Estos 3 pasos 
              en que nuestro cerebro actua es positivo para resolver en lo 
              inmediato, pero generan un gran problema porque define el 
              camino de nuestras vidas, ya que cada accion depende de cosas 
              que asimilamos previamente, gran parte de ellas de manera 
              inconsciente. No te asustes, con Neoasimilacion aprenderas a 
              usar mejor tu cerebro de manera mas racional y consciente.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='learn large'/>
                        <div className='title'>PASO 1</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APRENDES</div>
                    <div className='content'>Aprendes algo de manera consciente e inconsciente</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='assimilate large'/>
                        <div className='title'>PASO 2</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>ASIMILAS</div>
                    <div className='content'>Lo que aprendes, lo asimilas de manera consciente e inconsciente</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='apply-automatically large'/>
                        <div className='title'>PASO 3</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APLICA AUTOMATICAMENTE</div>
                    <div className='content'>El cerebro que actua</div>
                  </BoxCircle>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Por ejemplo, cuando hablas de política, nuestro cerebro 
              asimilo algo que creía que esta bien, y la respuesta es 
              automática. Ahora bien, si seriamos seres realmente 
              racionales analizaríamos lo que estamos hablando, lo cual 
              llevaría tiempo en hacerlo y sacar conclusiones correctas 
              que demoran varios minutos u horas de análisis por algo 
              que no vale la pena. 
            </Col>
          </Row>
          <Row>
            <Col>
              ¿Se imaginan cuanto tardaríamos hablando si fuésemos seres 
              plenamente racionales? bueno sería imposible, por eso casi 
              siempre actuamos de manera automática gracias a la asimilación.
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>La Neoasimiliación</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Genial, ya sabes como funciona tu cerebro, ahora vamos a utilizarlo 
                correctamente. Se trata de un metodo en el que tu cerebro adquiere 
                habilidades mentales rapidamente, es el mismo proceso de los 3 pasos 
                en que aprende y asimila nuestro cerebro pero de manera consciente. 
                Este simple detalle marcara un cambio enorme en tu vida si lo sabes aplicaro.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              La Neoasimilacion ayuda a te permite aprender habilidades de 
              manera inmediata, podras entender mejor a un tercero, reducir el estres 
              frente a exigencias laborales, en general el metodo reducira tu carga 
              cerebral, haciendo que tu cerebro se sienta confortable mejorando tu 
              calidad de vida.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='learn large'/>
                        <div className='title'>PASO 1</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APRENDES</div>
                    <div className='content'>Aprendes algo de manera consciente y agradable</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='assimilate large'/>
                        <div className='title'>PASO 2</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>ASIMILAS</div>
                    <div className='content'>Lo que aprendes, lo asimilas de manera consciente</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='apply-automatically large'/>
                        <div className='title'>PASO 3</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APLICAS AUTOMATICAMENTE</div>
                    <div className='content'>Lo que asimilas</div>
                  </BoxCircle>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              El metodo de Neoasimilacion se explica en estos tres pasos, 
              1) Aprendemos de manera agradable y consciente. 2) Asimilas, 
              es decir guardas en tu cabeza lo que necesitas aprender y 
              por ultimo 3) Es automatico, si lo asimilaste correctamente
               tu cerebro replicara lo asimilado de manera automatica.
              Es decir, no tendras que pensar porque lo aplicaras de 
              manera automatica, reduciendo considerablemente tu carga cerebral.
              Esto hace que te sientas mas confortable y con menos estres.
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Ejemplo real de Neoasimilacion</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Anos atras me contrataron para trabajar en una startup 100% anglo sin saber ingles.
              Durante la primer meeting no entendía absolutamente nada, escuchaba 
              palabras como “Face”, entre otras que perdía el contexto por completo. 
              Imagine que hablaban de caras en proyectos, aprender 5000 palabras 
              en inglés de una semana a otra es imposible. Entonces ¿Cómo logré de 
              una semana a otra hablar en inglés? aplicando los 3 pasos del método 
              de asimilación.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-learn-desktop'/>
            </Col>
          </Row>
          <Row className='margin-top'>
            <Col>
              <BoxCircle
                topChildren={
                  <div className='top-circle-wrapper'>
                    <Icon className='learn large'/>
                    <div className='title'>PASO 1</div>
                  </div>
                }
              >
                <div className='title'>APRENDE DE MANERA CONFORTABLE</div>
                <div className='content'>
                  Apunte las 3 maneras de saludar del team, y busque las 20 palabras más 
                  utilizadas por el team, como se escribe y su pronunciación. Finalmente 
                  “Face” era “Phase”.
                </div>                
              </BoxCircle>
            </Col>
            <Col>
              <BoxCircle
                topChildren={
                  <div className='top-circle-wrapper'>
                    <Icon className='assimilate large'/>
                    <div className='title'>PASO 2</div>
                  </div>
                }
              >
                <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                <div className='content'>
                  Asimile las 23 palabras, por ejemplo budget, miraba una imagen de un 
                  presupuesto y escuchaba como sonaba. Aproximadamente unas 10 veces por 
                  cada palabra hasta que lo asimilaba como una palabra nativa.
                </div>
              </BoxCircle>
            </Col>
            <Col>
              <BoxCircle
                topChildren={
                  <div className='top-circle-wrapper'>
                    <Icon className='apply-automatically large'/>
                    <div className='title'>PASO 3</div>
                  </div>
                }
              >
                <div className='title'>APLICA AUTOMATICAMENTE</div>
                <div className='content'>
                  Listo, una vez que lo asimilas, tu cerebro reconoce esa palabra automáticamente. 
                  Una semana más tarde de la primer meeting, estaba hablando con ellos de manera 
                  relajada, utilizando mis recursos cognitivos para resolver las tareas.
                </div>                
              </BoxCircle>
            </Col>
          </Row>
          <Row>
            <Col>
              <BoxCircle backgroundImage={imageClaudio}>
                <h3>Mis habilidades laborales</h3>
                Soy Claudio Garaycochea, con mas de 17 años de experiencia, desarrolle 
                apps para Facebook y el sitio de GlobalLogic (compnaia IT con clientes 
                como Samsung, HP, Fox, entre otros), tambien trabaje en startups varias 
                de California, Washington DC y Suiza.
                Segun los requerimientos de cada proyecto me involucro desde idea, 
                brainstorming, user experience, visual design, desarrollo, hasta 
                tareas de marketing y venta corporativa. 
              </BoxCircle>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Asimilacion vs Neoasimilacion</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Tal y como se comento, el uso de nuestro cerebro esta basado en asimilacion. 
              Utilizar el cerebro con neoasimilacion optimiza la manera en que piensas ya 
              que guardas en tu cabeza informacion de manera consciente para aplicarla 
              automaticamente.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-assimilation-normal'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-neo-assimilation'/>
            </Col>
          </Row>
          <Row>
            <Col>
              Te sugerimos poner en practica la Neoasimilacion para tareas basicas.
              Busca aprender algo de manera agradable, asimilarlo para guardarlo en 
              tu cerebro y luego aplicarlo automaticamente. A medida que lo utilizas 
              correctamente podras aplicarlo a diario para cubrir todo tipo de necesidades, 
              y reducir tu carga cerebral.
            </Col>
          </Row>
        </Section>
        <Section className='clear'>
          <Row className='margin-top'>
            <Col>
              <Box className='text-normal'>
                <div className='title'>NEOASIMILACION EN PRODUCTOS Y SERVICIOS</div>
                <div className='content'>
                  Asi como lo vimos en el ejemplo de McDonald’s en la parte superior de este 
                  documento, tambien podemos analizar la atraccion de un producto o servicio. 
                  Conociendo la desicion automatica del 80% del cerebro de tu potencial cliente. 
                  Brindamos servicios de consultoria para mejorar la atraccion de tus productos 
                  o servicios, consultanos.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button> 
              </Box>
            </Col>
            <Col>
              <Box className='text-normal'>
                <div className='title'>UX BASADO EN NEOASIMILACION</div>
                <div className='content'>
                  Creamos la manera de reducir la carga cerebral de tus usuarios, nos enfocaremos 
                  a lograr una experiencia de usuario super intuitiva y confortable.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button>
              </Box>
            </Col>
            <Col>
              <Box className='text-normal'>
                <div className='title'>NEOASIMILACION EN TAREAS LABORALES</div>
                <div className='content'>
                  Quieres adquirir habilidades de manera inmediata, te asesoramos con nuestra tecnica que podra mejorar tu desempeno.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button>
              </Box>
            </Col>
            <Col>
              <Box className='text-normal'>
                <div className='title'>NEOASIMILACION EN EDUCACION</div>
                <div className='content'>
                  Si formas parte de un colegio, universidad, o cualquier 
                  institucion que desee mejorar la forma de aprendizaje, 
                  puedes contactarnos. 
                  Ofrecemos un servicio de asesorameitno totalmente 
                  gratis para instituciones educativas.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button>
              </Box>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;