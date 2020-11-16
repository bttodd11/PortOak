import React from "react";
import "./Nav.css";

const Nav = props => {
  const { scrollTo } = props;

  return (
    <div classBar="navBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand text-white" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-item nav-link text-light"
              onClick={e => scrollTo(e)}
              data-pageSection="skillsSection"
            >
              Skills
            </a>
            <a
              className="nav-item nav-link text-light"
              onClick={e => scrollTo(e)}
              data-pageSection="projectSection"
            >
              Projects
            </a>
            {/* <a
              class="nav-item nav-link text-light"
              onClick={e => scrollTo(e)}
              data-pageSection="footer"
            >
              Connect
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;