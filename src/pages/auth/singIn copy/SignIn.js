import React, { Component }from "react";
import {
  Button,
  Section,
  H1,
  Notification,
} from '../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { request, ContentTypes } from '../../../libs/request';

class SignIn extends Component {
  constructor(props) {
		super(props);
		this.state = {
      firstname: '',
      lastname: '',
      validated: false,
      formSent: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  async sendSubscribe() {
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
  }

  handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
    const form = event.currentTarget;
    console.log('event: ', event);
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
			this.sendForm();
		}
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
  }

  render() {
    const { firstname, lastname, validated } = this.state;
    return (
      <Container fluid>
        <Section>
          <Row>
            <Col>
              <div className='content'>
                <Row>
                  <Col>
                    <H1>Sign In</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Notification className='success'>
                      sdfadsfda
                    </Notification>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Text testing
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Firstname</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='firstname'
                            value={firstname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Lastname</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='lastname'
                            value={lastname}
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
              </div>
            </Col>
            <Col xs={12} lg={5}>
              <i className='image-qr-deco'/>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default SignIn;