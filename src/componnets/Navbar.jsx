import React from "react";
import SearchBox from "./SearchBox";
import logo from "../images/logo.png";
import "./header.css";

function Navbar(props) {
  return (
    <div className="header-wrap">
      <header className="overlay">
        <nav className="navbar" id="myNav">
          <a href="#!" title="Movie Finder powered by MovieDB">
            <img src={logo} alt="MovieDB official logo" data-aos="flip-right" />
          </a>
          <ul>
            <li data-aos="fade-down">
              <a href="#!">Movies</a>
            </li>
            <li data-aos="fade-down">
              <a href="#!">Seasons</a>
            </li>
            <li data-aos="fade-down">
              <a href="#!">Everything</a>
            </li>
          </ul>
        </nav>
        <SearchBox onTyping={props.onHandleInput} />
      </header>
    </div>
  );
}

export default Navbar;
