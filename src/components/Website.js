import React, { Component } from 'react';
import '../styles/Website.css';
import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Website extends Component {
  render() {
    return (
      <Container className="website">
        <Row>
          <Header/>
        </Row>
        <Row>
          <WelcomeMessage/>
        </Row>
      </Container>
    );
  }
}

export default Website;
