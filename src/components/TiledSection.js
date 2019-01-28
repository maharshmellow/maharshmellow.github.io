import React, { Component } from 'react';
import '../styles/TiledSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TiledSection extends Component {

  getTiles = () => {
    const tilesData = this.props.tilesData;
    var tiles = [];
    tilesData.forEach(title => {
      tiles.push(
        <Col sm={4} className={"tile"}>
          <button class="tile-button">{title}</button>
        </Col>
      );
    });

    return tiles;
  }

  render() {
    
    return (
      <Container className="tiled-section" fluid={true}>
        <Row>
          <Col sm={4} className="section-title">  
            {this.props.title}
          </Col>
        </Row>
        <Row className={"tiles"}>
          {
            this.getTiles()
          }
        </Row>
      </Container>
    );
  }
}

export default TiledSection;
