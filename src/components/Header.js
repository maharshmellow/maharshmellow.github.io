import React, { Component } from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
  render() {
    return (
      <Container className="header" fluid={true}>
        <Navbar collapseOnSelect expand="sm">
          <Navbar.Brand href="#home">maharsh.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#features">Github</Nav.Link>
              <Nav.Link href="#pricing">LinkedIn</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
