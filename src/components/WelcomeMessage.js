import React from "react";
import "../styles/WelcomeMessage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";

function WelcomeMessage() {
  return (
    <Container className="welcome-message" fluid={true}>
      <Row>
        <Col sm={12}>
          <Fade left distance="20px">
            <div>
              Hey there <span role="img" aria-label="wave" id="wave">👋</span>
            </div>
            <br/>
          </Fade>
          <Fade left distance="20px" delay={700}>
            I am Maharsh.
          </Fade>
          <Fade left distance="20px" delay={1500}>
            A Computing Science student based in Edmonton, Canada <br/>
          </Fade>
          <Fade bottom distance="50px" delay={2500}>
            <div>
              <span id="check-out-message">Check out my work below</span>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeMessage;
