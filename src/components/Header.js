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
          <Col xs={12} sm={7}>  
            <Logo/>
          </Col>
          <Col xs={12} sm={5}>
            <Row className="nav-items">
              <Col xs={12}>
                <a className="nav-item" href="https://www.github.com/maharshmellow">Github</a>
                <a className="nav-item" href="https://www.github.com/maharshmellow">LinkedIn</a>
                <a className="nav-item" href="https://www.github.com/maharshmellow">LinkedIn</a>
              </Col>
            </Row>
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
      <Row className="nav-items">
        <Col sm={4}>
          <a className="nav-item" href="https://www.github.com/maharshmellow">a</a>
        </Col>
        <Col sm={4}>
          <a className="nav-item" href="https://www.github.com/maharshmellow">a</a>
        </Col>
        <Col sm={4}>
          <a className="nav-item" href="https://www.github.com/maharshmellow">a</a>
        </Col>
      </Row>
      
    )
  }
}

export default Header;
