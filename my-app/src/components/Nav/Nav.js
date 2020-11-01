import React from "react";
import "./Nav.css";

const Nav = props => {
  const { scrollTo } = props;

  return (
    <div classBar="navBar">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <a class="navbar-brand text-white" href="#">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a
              class="nav-item nav-link text-light"
              onClick={e => scrollTo(e)}
              data-pageSection=""
            >
              About
            </a>
            <a
              class="nav-item nav-link text-light"
              onClick={e => scrollTo(e)}
              data-pageSection=""
            >
              Projects
            </a>
            <a
              class="nav-item nav-link text-light"
              onClick={e => scrollTo(e)}
              data-pageSection=""
            >
              Connect
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;