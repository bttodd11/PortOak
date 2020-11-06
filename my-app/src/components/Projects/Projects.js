import React from "react";
import { Container, Col, Row, Card, CardDeck, ListGroup } from "react-bootstrap";
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
          <Col xs={12}>
            <div className="sidePanel">
              <img className="panelImg" src={Batface} />
              <h6 className="sidePanelHeader">Chiroptophobia </h6>
              <p className="sidePanelText">This is a falling dot game I made in Glitch for a interview process with a company. This game was made with JavaScript and CSS.</p>
            </div>
            <div className="sidePanel">
              <img className="panelImg" src={Chosen} />
              <h6 className="sidePanelHeader">EricTheChosen </h6>
              <p className="sidePanelText">
              This is a site that I made for hip-hop artist EricTheChosen. I was given free reign to build the site with just being given content to use. I used JavaScript, Bootstrap and Sass on this site.

              </p>
            </div>
            <div className="sidePanel">
              <img className="panelImg" src={marvelIcon} />
              <h6 className="sidePanelHeader">Marvel Database  </h6>
              <p className="sidePanelText">
              This is a database I am working on using the Marvel developer API. It will take an input and return the Marvel character that is selected.

              </p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="sidePanel">
              <img className="panelImg" src={mlbIcon} />
              <h6 className="sidePanelHeader">MLB Database </h6>
              <p className="sidePanelText">
              This is a ballot to get Gary Sheffield's name into the MLB hall of fame. With this project, I wanted to test using a database and also wanted to try out PHP. I used MySQL and was able to push and get data from users that signed the ballot.

              </p>
            </div>
            <div className="sidePanel">
              <img className="panelImg" src={sfIcon} />
              <h6 className="sidePanelHeader">Skills Fund </h6>
              <p className="sidePanelText">
              This is a mockup site that I created for the company during an interview. The company wanted a strategically designed site to get customer to sign up for their mailing list. I utilized bootstrap and jQuery for this site.

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects;
