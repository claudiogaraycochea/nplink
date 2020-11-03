import React, { Component }from "react";
import {
  Button,
  Section,
  H1,
  // Notification,
} from '../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
// import { request, ContentTypes } from '../../../libs/request';

class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email: '',
      password: '',
      validated: false,
      formSent: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* async sendForm() {
		const { 
      firstname,
      lastname,
    } = this.state;

		const data = {
      "firtname": firstname,
      "lastname": lastname,
    };
    const endpoint = '/subscriptor';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ subscriptionSent: true });
		} catch (err) {
			// console.error(err);
		}
  }*/

  handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
    console.log('event: ', event);
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
      this.props.history.push('/dashboard');
			//this.sendForm();
		}
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
  }

  render() {
    const { email, password, validated } = this.state;
    return (
      <Container fluid>
        <Section className='main-wrapper'>
          <Row>
            <Col xs={12} lg={7}>
              <div className='content'>
                <Row>
                  <Col>
                    <H1>Login</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder=''
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
                            placeholder=''
                            name='password'
                            value={password}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Button className='secondary' type='submit'>Accept</Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={5} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-hero-home'/>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Login;