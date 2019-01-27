import React, { Component } from 'react';
import '../styles/WelcomeMessage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class WelcomeMessage extends Component {
  render() {
    return (
      <Container className="welcome-message" fluid={true}>
        <Row>
          <Col sm={12}>  
            Welcome Message
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WelcomeMessage;
