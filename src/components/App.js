import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../styles/App.scss";
import Navbar from "./Navbar";
import WelcomeMessage from "./WelcomeMessage";
import TiledSection from "./TiledSection"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import workData from "../data/Work";
import projectData from "../data/Projects";
import WorkDetailPage from "./WorkDetailPage";
import ProjectDetailPage from "./ProjectDetailPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailPageData: null,
      workDetailPageVisible: false,
      projectDetailPageVisible: false,
    }
  }

  openWorkDetailPage = (pageData) => {
    this.setState({
      detailPageData: pageData,
      workDetailPageVisible: true,
      projectDetailPageVisible: false,
    });
    
    window.history.pushState({}, "", `/`);  
    window.onpopstate = (e) => {
      this.closeDetailPage();
    }

  }

  openProjectDetailPage = (pageData) => {
    this.setState({
      detailPageData: pageData,
      workDetailPageVisible: false,
      projectDetailPageVisible: true,
    });
    
    window.history.pushState({}, "", `/`);  
    window.onpopstate = (e) => {
      this.closeDetailPage();
    }
  }

  closeDetailPage = () => {
    this.setState({
      detailPageData: null,
      workDetailPageVisible: false,
      projectDetailPageVisible: false
    })
  }

  render() {
    return (
      <Container className="website">
        <Fade top duration={1000} distance="50px" delay={2500}>
          <Row>
            <Navbar/>
          </Row>
        </Fade>
        <Row>
          <WelcomeMessage/>
        </Row>
        <Fade bottom duration={1000} distance="50px" delay={2500}>
          <>
            <Row>
              <TiledSection title="work." tilesData={workData} onTileClick={this.openWorkDetailPage}/>
            </Row>
            <Row>
              <TiledSection title="projects." tilesData={projectData} onTileClick={this.openProjectDetailPage}/>
            </Row>
          </>
        </Fade>
        <WorkDetailPage show={this.state.workDetailPageVisible} data={this.state.detailPageData} />
        <ProjectDetailPage show={this.state.projectDetailPageVisible} data={this.state.detailPageData} />
      </Container>
    );
  }
}

export default App;
