import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import "../styles/DetailPage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import Modal from "react-bootstrap/Modal";

class ProjectDetailPage extends Component {

  renderNotice = () => {
    if (this.props.data.notice) {
      return (
        <Fade bottom distance="20px">
          <HeadShake delay={500} count={3}>
            <Row>
              <div className="notice">{this.props.data.notice}</div>
            </Row>
          </HeadShake>
        </Fade>
      );
    } 
  }

  renderTechnologies = () => {
    if (this.props.data.technologies) {
      return (
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
      );
    }
  }

  renderDemoLinks = () => {
    if (this.props.data.demoLink || this.props.data.githubLink) {
      return(
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
      );
    }
  }

  renderProjectContents = () => {
    return (
      <div>
        {this.renderNotice()}
        <Fade bottom distance="20px">
          <Row>
            <div className="subsection">
              <h1>Description</h1>
              <ReactMarkdown source={this.props.data.description} escapeHtml={false}/>
            </div>
          </Row>
          <Row>
            {this.renderTechnologies()}
          </Row>
          <Row>
            {this.renderDemoLinks()}
          </Row>
        </Fade>
      </div>
    )
  }

  render() {
    let title = "";
    if (this.props.data && this.props.data.title) {
      title = this.props.data.title;
    }

    return (
      <Modal show={this.props.show} className="details-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={12} md={12} className="page-contents">
                <Fade left distance="40px">
                  <Row>
                    <Col xs={10} className="page-title">{title}</Col>
                    <Col xs={2} className="close-button-wrapper" />
                  </Row>
                </Fade>
                {
                  this.props.show ?
                    this.renderProjectContents()
                  : null
                }
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProjectDetailPage;
