import React from "react";
import SearchBox from "./SearchBox";
import Particles from "react-particles-js";
import logo from "../images/logo.png";
import "./header.css";

function Navbar() {
  return (
    <div className="header-wrap">
      <Particles />
      <header className="overlay">
        <nav className="navbar" id="myNav">
          <a href="#!" title="Movie Finder powered by MovieDB">
            <img src={logo} alt="MovieDB official logo" />
          </a>
          <ul>
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Seasons</a>
            </li>
            <li>
              <a href="#!">Everything</a>
            </li>
          </ul>
        </nav>
        <SearchBox />
      </header>
    </div>
  );
}

export default Navbar;
