import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../styles/Website.scss";
import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import TiledSection from "./TiledSection"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import workData from "../data/Work";
import projectData from "../data/Projects";
import FullScreenPage from "./FullScreenPage";

class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreenPageData: null,
      fullScreenPageType: null
    }
  }

  openFullScreenPage = (pageData, type) => {
    // this push state won't make any change to the URL but will allow us to detect back button click
    window.history.pushState({}, "", `/`);  
    
    this.setState({
      fullScreenPageData: pageData,
      fullScreenPageType: type
    });

    // when the back button is clocked, close the full screen page to get a traditional multi-page app feel
    window.onpopstate = (e) => {
      this.closeFullScreenPage();
    }
  }

  closeFullScreenPage = () => {
    this.setState({
      fullScreenPageData: null,
      fullScreenPageType: null
    })
  }

  render() {
    if (this.state.fullScreenPageData) {
      return (
        <Container className="website">
          <FullScreenPage data={this.state.fullScreenPageData} type={this.state.fullScreenPageType}/>
        </Container>
      );
    } else {
      return (
        <Container className="website">
          <Fade bottom cascade distance="40px">
            <Row>
              <Header/>
            </Row>
            <Row>
              <WelcomeMessage/>
            </Row>
          </Fade>
          <Fade bottom cascade distance="30px">
            <Row>
              <TiledSection title="work." tilesData={workData} onTileClick={(data) => this.openFullScreenPage(data, "work")}/>
            </Row>
          </Fade>
          <Fade bottom cascade distance="20px">
            <Row>
              <TiledSection title="projects." tilesData={projectData} onTileClick={(data) => this.openFullScreenPage(data, "project")}/>
            </Row>
          </Fade>
          
        </Container>
      );
    }

    
  }
}

export default Website;
