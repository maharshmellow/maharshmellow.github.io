import React, { Component } from 'react';
import '../styles/FullScreenPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from "react-markdown";
class FullScreenPage extends Component {

  // when the page renders, scroll to the top. There is an issue where it maintains the old scroll position when opening this page
  componentDidMount() {
    window.scrollTo(0, 0)
  }

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
            <Col xs={12}>
              <div className="workDescription">
                <ReactMarkdown source={experience.description}/>
              </div>
            </Col>
          </Row>
        </div>
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
                return <div className="technologyPill">{technology}</div>
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
                <a href={this.props.data.githubLink}><button className="pillButton">View on Github</button></a>
              : null
            }
          </div>
        </div>
    }

    return (
      <div>
        {
          this.props.data.notice ? 
            <Row>
              <div className="notice">{this.props.data.notice}</div>
            </Row>
          : null
        }
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
            <Col sm={1} md={2}></Col>
            <Col sm={10} md={8} className="page-contents">
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
            <Col sm={1} md={2}></Col>
          </Row>
        </Container>
      </div>
        
    );
  }
}

export default FullScreenPage;
