import React, { Component } from 'react';
import '../styles/FullScreenPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from "react-markdown";

var data = {
  title: "Google",
  type: "job",
  experiences: [
    {
      title: "Software Engineering Intern",
      date: "May 2019 - Aug 2019",
      location: "Los Angeles, CA",
      team: "Google Drive",
      content: "First Bullet Second Bullet"
    },
    {
      title: "Software Engineering Intern",
      date: "Mar 2018 - Jun 2018",
      location: "Mountain View, CA",
      team: "Google Home",
      content: "# First Bullet \n ## Second *Bullet* ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)"
    }
  ]
}

class FullScreenPage extends Component {

  renderContents = () => {
    var contents = [];

    data.experiences.forEach(experience => {
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
              <div className="content">
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

  render() {
    return (
      <div className="page">
        <Container fluid={true}>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="page-contents">
              <Row>
                <Col xs={10} className="page-title">{data.title}</Col>
                <Col xs={2} className="close-button-wrapper">
                  <button class="close-button" onClick={() => this.props.onClose()}>
                    <i class="material-icons">close</i>
                  </button>
                  </Col>
              </Row>
              {
                this.renderContents()
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
