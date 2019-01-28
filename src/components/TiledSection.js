import React, { Component } from 'react';
import '../styles/TiledSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TiledSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  onButtonClick = () => {
    this.setState({
      open: true
    })
  };

  getTiles = () => {
    const tilesData = this.props.tilesData;
    var tiles = [];
    tilesData.forEach(title => {
      tiles.push(
        <Col sm={4} className={"tile"}>
          <button onClick={() => this.onButtonClick()} class="tile-button">{title}</button>
        </Col>
      );
    });

    return tiles;
  }

  render() {
    if (this.state.open) {
      return (<div className="page">testing</div>);
    }
    else {
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
}

export default TiledSection;
