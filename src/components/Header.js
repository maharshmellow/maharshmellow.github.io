import React, { Component } from 'react';
import '../styles/Header.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
  render() {
    return (
      <Container className="header" fluid={true}>
        <Navbar collapseOnSelect expand="sm">
          <Navbar.Brand href="#home" className="logo">maharsh.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link target="_blank" href="http://www.github.com/maharshmellow">Github</Nav.Link>
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/maharshpatel/">LinkedIn</Nav.Link>
              <Nav.Link href="mailto:contact@maharsh.com">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
