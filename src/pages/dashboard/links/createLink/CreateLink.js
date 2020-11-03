import React, { Component }from "react";
import {
  Button,
  Section,
  H1,
} from '../../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import Toggle from 'react-toggle';
import './CreateLink.css';
import { request, ContentTypes } from '../../../../libs/request';
import ButtonNextPlay from '../../../../components/buttonNextPlay/ButtonNextPlay';

class CreateLink extends Component {
  constructor(props) {
		super(props);
		this.state = {
      title: 'Contáctanos',
      description: 'Llamanos de lunes a viernes de 10hs a 20hs.',
      firstname: '',
      lastname: '',
      validated: false,
      formSent: false,
      deviceSelected: 'desktop',
		};
		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBtnToggleChange = this.handleBtnToggleChange.bind(this);
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

	handleBtnToggleChange() {
    const { deviceSelected } = this.state;
    const device = (deviceSelected === 'mobile') ? 'desktop' : 'mobile';
    console.log('handleBtnToggleChange: device: ', device);
		this.setState({ deviceSelected: device });
  }

  render() {
    const {
      title,
      description,
      firstname,
      validated,
      deviceSelected,
    } = this.state;
    return (
      <Container fluid>
        <Section className='main-wrapper'>
          <Row>
            <Col xs={12} lg={7}>
              <div className='content'>
                <Row>
                  <Col>
                    <H1>Create Link</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Link Name</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='firstname'
                            value={firstname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='title'
                            value={title}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='description'
                            value={description}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Whatsapp</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='firstname'
                            value={firstname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Telephone</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            name='firstname'
                            value={firstname}
                            required
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Label>How look in?</Form.Label>
                        <Form.Group as={Col} className='d-flex align-items-center'>
                          <div className='device-selector-wrapper'>
                            <div className='item'>
                              Desktop
                            </div>
                            <div className='item'>
                              <Toggle
                                defaultChecked={(deviceSelected==='mobile') ? true : false}
                                icons={false}
                                onChange={this.handleBtnToggleChange}
                              />
                            </div>
                            <div className='item'>
                              Mobile
                            </div>
                          </div>
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
            <Col xs={12} lg={5} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='mobile-preview'>
                <div className='mobile-preview-content'>
                  <Row>
                    <Col>
                      <div className='title'>{title}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {description}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        className='primary large'
                      >Whatsapp</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button 
                        className='secondary large'
                      >
                        Call Now
                      </Button>
                    </Col>
                  </Row>                  
                </div>
              </div>
            </Col>
          </Row>
        </Section>
        <ButtonNextPlay device={deviceSelected} />
      </Container>
    );
  }
};

export default CreateLink;