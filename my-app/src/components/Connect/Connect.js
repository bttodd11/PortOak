import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Connect.css';
import Github from './img/github.png';
import Instagram from './img/instagram.png';
import LinkedIn from './img/linkedin.png';

const Connect = () => {

  return (
    <div id="footer">
      <p className="footerText">This portfolio was built using ReactJS, React-Bootstrap and TypeIt.js</p>
        <div className="socialSection">
        <img src={Github} className="socialIcon" />
        <img src={Instagram} className="socialIcon" />
        <img src={LinkedIn} className="socialIcon" />
        </div>
    </div>
  )

}

export default Connect;
