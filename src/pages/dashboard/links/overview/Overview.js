import React, { Component }from "react";
import {
  Button,
  Section,
  H1,
  Notification,
} from '../../../../ui/UI';
import { 
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Overview.css';
import { request, ContentTypes } from '../../../../libs/request';

class Overview extends Component {
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
        <Section className='main-wrapper'>
          <Row>
            <Col xs={12} lg={7}>
              <div className='content'>
                <Row>
                  <Col>
                    <H1>My Links</H1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link to='/dashboard/create-link'>Create Link</Link>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className='table'>
                      <Row className='table-item'>
                        <Col>
                          Support constant
                        </Col>
                        <Col>
                          1240 Clicks
                        </Col>
                      </Row>
                      <Row className='table-item'>
                        <Col>
                          Follow Previus Link
                        </Col>
                        <Col>
                          1240 Clicks
                        </Col>
                      </Row>
                    </div>
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

export default Overview;