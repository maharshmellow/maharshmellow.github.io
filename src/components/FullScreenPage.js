import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import "../styles/FullScreenPage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import Modal from "react-bootstrap/Modal";

class FullScreenPage extends Component {

  // // when the page renders, scroll to the top. There is an issue where it maintains the old scroll position when opening this page
  // componentDidMount() {
  //   window.scrollTo(0, 0)
  // }

  renderWorkContents = () => {
    var contents = [];

    this.props.data.experiences.forEach(experience => {
      contents.push(
        <Fade bottom distance="20px" key={experience.date}>
          <div>
            <Row className="experience-heading">
              <Col xs={7}>
                <div className="title">{experience.title}</div>
              </Col>
              <Col xs={5}>
                <div className="date">{experience.date}</div>
              </Col>
            </Row>
            <Row>
              <Col xs={7}>
                <div className="location">{experience.location}</div>
              </Col>
              <Col xs={5}></Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="workDescription">
                  <ReactMarkdown source={experience.description}/>
                </div>
              </Col>
            </Row>
          </div>
        </Fade>
        )
    });

    return contents;
  }

  renderProjectContents = () => {
    var technologies;
    if (this.props.data.technologies) {
      technologies = 
        <div className="technologies subsection">
          <h1>Technologies</h1>
          <div className="technologyPillContainer">
            {
              this.props.data.technologies.map(technology => {
                return <div className="technologyPill" key={technology}>{technology}</div>
              })
            }
          </div>
        </div>
    }

    var view;
    if (this.props.data.demoLink || this.props.data.githubLink) {
      view = 
        <div className="view subsection">
          <h1>View</h1>
          <div className="viewButtonContainer">
            {
              this.props.data.demoLink ?
              <a href={this.props.data.demoLink}><button className="pillButton">Demo</button><br/></a> 
              : null
            }
            {
              this.props.data.githubLink ?
                <a href={this.props.data.githubLink}><button className="pillButton">Github</button></a>
              : null
            }
          </div>
        </div>
    }

    return (
      <div>
        {
          this.props.data.notice ? 
            <Fade bottom distance="20px">
              <HeadShake delay={500} count={3}>
                <Row>
                  <div className="notice">{this.props.data.notice}</div>
                </Row>
              </HeadShake>
            </Fade>
          : null
        }
        <Fade bottom distance="20px">
          <Row>
            <div className="subsection">
              <h1>Description</h1>
              <ReactMarkdown source={this.props.data.description} escapeHtml={false}/>
            </div>
          </Row>
          <Row>
            {technologies}
          </Row>
          <Row>
            {view}
          </Row>
        </Fade>
      </div>
    )
  }

  renderContent = () => {
    if (this.props.type === "work") {
      return(this.renderWorkContents());
    } else if (this.props.type === "project") {
      return(this.renderProjectContents());
    } else {
      return null;
    }     
  }

  render() {
    return (
      <Modal show={this.props.data !== null} className="details-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={12} md={12} className="page-contents">
                <Fade left distance="40px">
                  <Row>
                    <Col xs={10} className="page-title">{"title"}</Col>
                    <Col xs={2} className="close-button-wrapper" />
                  </Row>
                </Fade>
                {
                  this.renderContent()
                }
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FullScreenPage;
