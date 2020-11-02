import React from "react";
import { Container, Col, Row, Card, CardDeck, ListGroup} from "react-bootstrap";
import './Projects.css';
import SkillsFund from './img/sfIcon.png';
import Chrip from './img/batIcon.png';
import Chosen from './img/chosenIcon.png';

const Projects = () =>{
  return (
<div>
      <h2 class="projectTitle">
        Projects
      </h2>
<CardDeck>
      <Card style={{ width: '8rem'}} >
    <Card.Img variant="top" className="icons" src={SkillsFund} />
      <Card.Header className="listTitle">Skills Fund Mock Site</Card.Header>
      <ListGroup className="listCenter" variant="flush">
    <ListGroup.Item>Bootstrap</ListGroup.Item>
    <ListGroup.Item>UiKit</ListGroup.Item>
    <ListGroup.Item>jQuery</ListGroup.Item>
  </ListGroup>
  </Card>
  <Card style={{ width: '8rem'}} >
    <Card.Img variant="top" className="icons" src={Chosen} />
      <Card.Header className="listTitle">EricTheChosen</Card.Header>
      <ListGroup className="listCenter" variant="flush">
    <ListGroup.Item>Bootstrap</ListGroup.Item>
    <ListGroup.Item>Sass</ListGroup.Item>
    <ListGroup.Item>JavaScript</ListGroup.Item>
  </ListGroup>
  </Card>
  <Card style={{ width: '8rem'}} >
    <Card.Img variant="top" className="icons" src={Chrip} />
      <Card.Header className="listTitle">Skills Fund Mock Site</Card.Header>
      <ListGroup className="listCenter" variant="flush">
    <ListGroup.Item>Less</ListGroup.Item>
    <ListGroup.Item>JavaScript</ListGroup.Item>
  </ListGroup>
  </Card>
</CardDeck>
    </div>
  )
}

export default Projects;
