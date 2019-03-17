import React, { Component } from 'react';
import '../styles/WelcomeMessage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class WelcomeMessage extends Component {
  render() {
    return (
      <Container className="welcome-message" fluid={true}>
        <Row>
          <Col sm={12}>
            <span role="img" aria-label="wave" className="wave">👋</span><br/>
            Hey there *waves* <br/><br/>

            I am Maharsh <br/>
            A Computing Science Student based in Edmonton, Canada <br/><br/>

            Check out my work below
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WelcomeMessage;