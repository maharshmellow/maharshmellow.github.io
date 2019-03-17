import React, { Component } from 'react';
import '../styles/FullScreenPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from "react-markdown";

class FullScreenPage extends Component {

  renderWorkContents = () => {
    var contents = [];

    this.props.data.experiences.forEach(experience => {
      contents.push(
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
            <Col xs={7}>
              <div className="workContent">
                <ReactMarkdown source={experience.content}/>
              </div>
            </Col>
            <Col xs={5}></Col>
          </Row>
        </div>
        )
    });

    return contents;
  }

  renderProjectContents = () => {
    return (
      <div>
        <Row>
          <Col xs={7}>
            <div className="projectContent">
              <ReactMarkdown source={this.props.data.content}/>
            </div>
          </Col>
          <Col xs={5}></Col>
        </Row>
      </div>
    )
  }

  renderContent = () => {
    if (this.props.type === "work") {
      return(this.renderWorkContents());
    } else {
      return(this.renderProjectContents());
    }      
  }

  render() {
    return (
      <div className="page">
        <Container fluid={true}>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="page-contents">
              <Row>
                <Col xs={10} className="page-title">{this.props.data.title}</Col>
                <Col xs={2} className="close-button-wrapper">
                  <button className="close-button" onClick={() => this.props.onClose()}>
                    <i className="material-icons">close</i>
                  </button>
                  </Col>
              </Row>
              {
                this.renderContent()
              }
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
        
    );
  }
}

export default FullScreenPage;
