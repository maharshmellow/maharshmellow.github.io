import React, { Component } from "react";
import "../styles/Navbar.scss";
import Container from "react-bootstrap/Container";
import { default as BSNavbar} from "react-bootstrap/Navbar";
import { default as BSNav} from "react-bootstrap/Nav";

class Navbar extends Component {
  render() {
    return (
      <Container className="navbar-wrapper" fluid={true}>
        <BSNavbar collapseOnSelect expand="sm">
          <BSNavbar.Brand className="logo">maharsh.</BSNavbar.Brand>
          <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BSNavbar.Collapse id="responsive-navbar-nav">
            <BSNav className="mr-auto"></BSNav>
            <BSNav>
              <BSNav.Link target="_blank" href="http://www.github.com/maharshmellow">Github</BSNav.Link>
              <BSNav.Link target="_blank" href="https://www.linkedin.com/in/maharshpatel/">LinkedIn</BSNav.Link>
              <BSNav.Link href="mailto:contact@maharsh.net">Contact</BSNav.Link>
            </BSNav>
          </BSNavbar.Collapse>
        </BSNavbar>
      </Container>
    );
  }
}

export default Navbar;
