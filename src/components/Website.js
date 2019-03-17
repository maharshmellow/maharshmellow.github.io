import React, { Component } from 'react';
import '../styles/Website.scss';
import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import TiledSection from "./TiledSection"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import workData from "../data/Work";
import FullScreenPage from './FullScreenPage';

class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreenPageData: null
    }
  }

  openFullScreenPage = (pageData) => {
    this.setState({
      fullScreenPageData: pageData
    })
  }

  closeFullScreenPage = () => {
    this.setState({
      fullScreenPageData: null
    })
  }

  render() {
    if (this.state.fullScreenPageData) {
      return (<FullScreenPage onClose={this.closeFullScreenPage} data={this.state.fullScreenPageData}/>);
    } else {
      return (
        <Container className="website">
          <Row>
            <Header/>
          </Row>
          <Row>
            <WelcomeMessage/>
          </Row>
          <Row>
            <TiledSection title="work." tilesData={workData} onTileClick={this.openFullScreenPage}/>
          </Row>
          <Row>
            <TiledSection title="projects." tilesData={workData} onTileClick={this.openFullScreenPage}/>
          </Row>
        </Container>
      );
    }

    
  }
}

export default Website;
