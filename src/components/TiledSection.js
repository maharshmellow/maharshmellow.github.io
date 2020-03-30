import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../styles/TiledSection.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class TiledSection extends Component {

  getTiles = () => {
    const tilesData = this.props.tilesData;
    var tiles = [];
    tilesData.forEach(tile => {
      tiles.push(
        <Col sm={4} className={"tile"} key={tile.title}>
          <button onClick={() => this.props.onTileClick(tile)} className="tile-button">{tile.title}</button>
        </Col>
      );
    });

    return tiles;
  }

  render() {
    return (
      <Container className="tiled-section" fluid={true}>
        <Fade left duration={1000} distance="50px" delay={1200}>
          <Row>
            <Col sm={4} className="section-title">  
              {this.props.title}
            </Col>
          </Row>
        </Fade>
        <Fade bottom duration={800} distance="50px" delay={1200}>
          <Row className={"tiles"}>
            {
              this.getTiles()
            }
          </Row>
        </Fade>
      </Container>
    );
  }
}

export default TiledSection;
