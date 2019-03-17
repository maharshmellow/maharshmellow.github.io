import React, { Component } from 'react';
import '../styles/Website.scss';
import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import TiledSection from "./TiledSection"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import workData from "../data/Work";
import projectData from "../data/Projects";
import FullScreenPage from './FullScreenPage';

class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreenPageData: null,
      fullScreenPageType: null
    }
  }

  openFullScreenPage = (pageData, type) => {
    this.setState({
      fullScreenPageData: pageData,
      fullScreenPageType: type
    })
  }

  closeFullScreenPage = () => {
    this.setState({
      fullScreenPageData: null,
      fullScreenPageType: null
    })
  }

  render() {
    if (this.state.fullScreenPageData) {
      return (<FullScreenPage onClose={this.closeFullScreenPage} data={this.state.fullScreenPageData} type={this.state.fullScreenPageType}/>);
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
            <TiledSection title="work." tilesData={workData} onTileClick={(data) => this.openFullScreenPage(data, "work")}/>
          </Row>
          <Row>
            <TiledSection title="projects." tilesData={projectData} onTileClick={(data) => this.openFullScreenPage(data, "project")}/>
          </Row>
        </Container>
      );
    }

    
  }
}

export default Website;
