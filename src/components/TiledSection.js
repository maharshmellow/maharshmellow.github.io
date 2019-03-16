import React, { Component } from 'react';
import '../styles/TiledSection.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FullScreenPage from './FullScreenPage';

class TiledSection extends Component {
  constructor(props) {
    super(props);

    // TODO: move this to the parent component so that all modals can be managed at the same place
    this.state = {
      openedTile: null,
    }
  }

  onButtonClick = (tile) => {
    this.setState({
      openedTile: tile
    });

    console.log(tile);
  };

  getTiles = () => {
    const tilesData = this.props.tilesData;
    var tiles = [];
    tilesData.forEach(tile => {
      tiles.push(
        <Col sm={4} className={"tile"}>
          <button onClick={() => this.onButtonClick(tile)} className="tile-button">{tile.title}</button>
        </Col>
      );
    });

    return tiles;
  }

  closeFullScreenPage = () => {
    this.setState({
      openedTile: null
    })
  }

  render() {
    if (this.state.openedTile) {
      return (<FullScreenPage onClose={() => this.closeFullScreenPage()} data={this.state.openedTile}/>);
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
