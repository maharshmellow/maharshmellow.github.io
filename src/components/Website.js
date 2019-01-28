import React, { Component } from 'react';
import '../styles/Website.css';
import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import TiledSection from "./TiledSection"
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
        <Row>
          <TiledSection title="Work"/>
        </Row>
      </Container>
    );
  }
}

export default Website;
