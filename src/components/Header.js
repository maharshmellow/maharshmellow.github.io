import React, { Component } from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends Component {
  render() {
    return (
      <Container className="header" fluid={true}>
        <Row>
          <Col sm={6}>  
            <Logo/>
          </Col>
          <Col sm={6}>
            <NavItems/>
          </Col>
        </Row>
      </Container>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="logo">
          maharsh.
      </div>
    )
  }
}

class NavItems extends Component {
  render() {
    return (
      <div className="nav-items">
        <a className="nav-item" href="https://www.github.com/maharshmellow">Github</a>
        <a className="nav-item" href="https://www.github.com/maharshmellow">LinkedIn</a>
        <a className="nav-item" href="https://www.github.com/maharshmellow">Contact</a>
      </div>
    )
  }
}

export default Header;
