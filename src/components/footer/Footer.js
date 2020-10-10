import React from "react";
import { Icon } from '../../ui/UI';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Header = () => {
  return (
    <footer>
      {/*<div className='footer-nav'>
        <div className='item'>© Neoassimilation 2020 </div>
        <div className='item'><a href='/terms'>Terminos y Condiciones</a></div>
        <div className='item'><a  href='/policy'>Política de privacidad</a></div>
      </div>
      <div className='footer-nav'>
        <div className='item'>Consultas</div>
        <div className='item'>
          <Icon className='email space'/> info@neoassimilation.com
        </div>       
        <div className='item'>
          <a href='https://wa.me/34932209092?text=Consulta Neoasimilación'>
            <Icon className='whatsapp space'/> +34 932 20 9092
          </a>
        </div>
  </div>*/}
      <Row className='none-bottom'>
        <Col xs={12} lg={6}>
          <div className='footer-nav'>
            <div className='item'>Consultas</div>
            <div className='item d-flex align-items-center'>
              <Icon className='email space'/> info@neoassimilation.com
            </div>       
            <div className='item'>
              <a href='https://wa.me/34932209092?text=Consulta Neoasimilación'>
                <Icon className='whatsapp space'/> +34 932 20 9092
              </a>
            </div>
          </div>
        </Col>
        <Col className='d-flex align-items-center mobile-right-left' xs={12} lg={6}>
          <div className='footer-nav'>
            <div className='item'>© Neoassimilation 2020 </div>
            <div className='item'><a href='/terms'>Términos y Condiciones</a></div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Header;