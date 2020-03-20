import React, { Component } from "react";
import "../styles/WelcomeMessage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WelcomeMessage extends Component {
  render() {
    return (
      <Container className="welcome-message" fluid={true}>
        <Row>
          <Col sm={12}>
            Hey there <span role="img" aria-label="wave" id="wave">👋</span><br/><br/>

            I am Maharsh. <br/>
            A Computing Science student based in Edmonton, Canada <br/><br/>

            <span id="check-out-message">Check out my work below</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WelcomeMessage;
