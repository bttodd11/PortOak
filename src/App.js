import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PreLoader from "./components/PreLoader/PreLoader";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import Title from "./components/Title/Title";
import InfoSection from "./components/InfoSection/InfoSection";
import './App.css';
import $ from "jquery";


const App = () => {


  const scrollTo = e => {
    const clickedItem = e.currentTarget.dataset.pagesection;
    const section = document.getElementById(clickedItem);
    section.scrollIntoView();
  };

  // const removePreLoader = () => {
  //   $('.preLoader').hide();
  //   $('.hero').show();

  // }

  // $(document).ready(function(){
  //   $('.hero').hide();
  //   $(window).on('load', function(){
  //     setTimeout(removePreLoader, 3000)
  //   }
  //   )
  // })







  return (
    <body>
      <div className="hero">
        {/* <Nav scrollTo={e => scrollTo(e)} /> */}
        <Title />
      </div>
        <InfoSection />
        {/* <Skills />
        <Projects />
        <Connect /> */}
    </body>
  );
};

export default App;
