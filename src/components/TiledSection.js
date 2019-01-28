import React, { Component } from 'react';
import '../styles/TiledSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TiledSection extends Component {
  render() {
    return (
      <Container className="tiled-section" fluid={true}>
        <Row>
          <Col sm={12}>  
            {this.props.title}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TiledSection;
