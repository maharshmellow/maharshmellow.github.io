import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../styles/DetailPage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import Modal from "react-bootstrap/Modal";

class WorkDetailPage extends Component {

  renderWorkDetails = () => {
    var workPositions = [];

    this.props.data.experiences.forEach(experience => {
      workPositions.push(
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

    return workPositions;
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
                    this.renderWorkDetails()
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

export default WorkDetailPage;
