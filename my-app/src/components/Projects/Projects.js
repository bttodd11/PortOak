import React from "react";
import { Container, Col, Row, Figure } from "react-bootstrap";
import Batface from "./img/batIcon.png";
import Chosen from "./img/chosenIcon.png";
import marvelIcon from "./img/marvelIcon.png";
import mlbIcon from "./img/mlbIcon.png";
import sfIcon from "./img/sfIcon.png"
import './Projects.css';


const Projects = () => {
  return (
    <div id="projectSection">
      <h2 class="projectTitle">
        Projects
      </h2>
      <Container fluid>
        <Row>
          <Col xs={12} s={12} md={12} lg={6}>
            <div className="sidePanel">
            <Figure>
            <h6 className="sidePanelHeader">Chiroptophobia</h6>
              <Figure.Image className="panelImg"
                src={Batface}
              />
              <Figure.Caption className="sidePanelText">
              This is a falling dot game I made in Glitch for a interview process with a company. This game was made with <span className="langGlow">JavaScript</span> and <span className="langGlow">CSS </span>.
              </Figure.Caption>
            </Figure>
            </div>
            <div className="sidePanel">
            <Figure>
            <h6 className="sidePanelHeader">EricTheChosen</h6>
              <Figure.Image className="panelImg"
                src={Chosen}
              />
              <Figure.Caption className="sidePanelText">
              This is a site that I made for hip-hop artist EricTheChosen. I was given free reign to build the site with just being given content to use. I used <span className="langGlow">JavaScript</span>, <span className="langGlow">Bootstrap</span> and <span className="langGlow">Sass</span> on this site.
              </Figure.Caption>
            </Figure>
            </div>
            <div className="sidePanel">
            <Figure>
            <h6 className="sidePanelHeader">Marvel Database</h6>
              <Figure.Image className="panelImg"
                src={marvelIcon}
              />
              <Figure.Caption className="sidePanelText">
              This is a database I am working on using the Marvel developer API. It will take an input and return the Marvel character that is selected. This project was built with <span className="langGlow">React </span> and <span className="langGlow">JavaScript </span>
              </Figure.Caption>
            </Figure>
            </div>
          </Col>
          <Col xs={12} s={12} md={12} lg={6}>
          <div className="sidePanel">
            <Figure>
            <h6 className="sidePanelHeader">Gary S Ballot</h6>
              <Figure.Image className="panelImg"
                src={mlbIcon}
              />
              <Figure.Caption className="sidePanelText">
              This is a ballot to get Gary Sheffield's name into the MLB hall of fame. With this project, I wanted to test using a database and also wanted to try out <span className="langGlow"> PHP </span> . I used <span className="langGlow">MySQL </span> and was able to push and get data from users that signed the ballot.
              </Figure.Caption>
            </Figure>
            </div>
            <div className="sidePanel">
            <Figure>
            <h6 className="sidePanelHeader">Skills Fund Mock</h6>
              <Figure.Image className="panelImg"
                src={sfIcon}
              />
              <Figure.Caption className="sidePanelText">
              This is a mockup site that I created for the company during an interview. The company wanted a strategically designed site to get customer to sign up for their mailing list. I utilized <span className="langGlow">Bootstrap </span> and <span className="langGlow">jQuery </span> for this site.
              </Figure.Caption>
            </Figure>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects;
