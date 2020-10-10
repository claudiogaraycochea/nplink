import React, { Component }from "react";
import {
  Button,
  Section,
  H2,
} from '../../ui/UI';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import './Login.css';
import { request, ContentTypes } from '../../libs/request';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: '',
      loginSent: false,
      validated: false,
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
    } = this.state;

		const data = {
      "email": email,
    };
    const endpoint = '/login';
    //const endpoint = '/user';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ loginSent: true });
		} catch (err) {
      // console.error(err);
      this.setState({ loginSent: true });
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
      email,
      password,
      validated,
      loginSent,
    } = this.state;
    return (
      <Container fluid className='course'>
        <Section className='vh-100'>
          <Row>
            <Col>
              <H2>Login</H2>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <div className='form-wrapper'>
                {(loginSent) ? (
                  <Alert variant='danger'>Usuario o contrasena incorrecto.</Alert>
                ) : null }
                <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
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
                  </Form.Row>
                  <div className='d-flex justify-content-end'>
                    <Button className='primary large' type='submit'>Iniciar sesión</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Login;