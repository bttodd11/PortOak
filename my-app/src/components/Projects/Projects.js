import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import './Projects.css';

const Projects = () =>{
  return (
    <div>
      <h2 class="projectTitle">
        Projects
      </h2>
      <Container fluid>
        <Row>
          <Col>
            <h6>Skills Fund Mock Up</h6>
            <ul>
              <li>jQuery</li>
              <li>UiKit</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
          <Col>
            <h6>MLB Ballot</h6>
            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
          <Col>
            <h6>EricTheChosen</h6>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Sass</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
              <h6>Marvel Database</h6>
              <li>JSON ( API Data )</li>
              <li>React</li>
              <li>JavaScript</li>
          </Col>
          <Col>
              <h6>Chiroptophobis</h6>
              <li>JavaScript</li>
              <li>CSS</li>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects;
