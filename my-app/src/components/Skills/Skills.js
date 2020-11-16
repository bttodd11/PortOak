import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Skills.css';
import JavaScript from './img/JavaScript.png';
// import HTML from './img/batIcon.png';
import ReactIcon from './img/React.svg';
import Angular from './img/AngularJS.png';
import MySQL from './img/MySQL.png';
import jQuery from './img/jquery.png';
import Sass from './img/Sass.png';


const Skills = () => {
  return (
    <div id="skillsSection">
      <h2 class="skillsTitle">
        Skills
</h2>
      <Container>
        <Row>
          <Col xs={4}><Image src={JavaScript} className="icon" thumbnail />
            <p className="skillsLabel"> JavaScript</p>
          </Col>
          <Col xs={4}><Image src={ReactIcon} className="icon" thumbnail />
          <p className="skillsLabel">  React </p>
          </Col>
          <Col xs={4}><Image src={Angular} className="icon" thumbnail />
          <p className="skillsLabel"> AngularJS</p>
          </Col>
          <Col xs={4}><Image src={MySQL} className="icon" thumbnail />
          <p className="skillsLabel"> MySQL</p>
          </Col>
          <Col xs={4}><Image src={jQuery} className="icon" thumbnail />
          <p className="skillsLabel"> jQuery</p>
          </Col>
          <Col xs={4}><Image src={Sass} className="icon" thumbnail />
          <p className="skillsLabel"> Sass</p>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Skills;
