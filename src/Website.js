import React, { Component } from 'react';
import './Website.css';
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
