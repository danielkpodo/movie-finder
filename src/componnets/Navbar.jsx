import React from "react";
import SearchBox from "./SearchBox";
import Particles from "react-particles-js";
import "./header.css";

function Navbar() {
  return (
    <div className="header-wrap">
      <Particles />
      <header className="overlay">
        <nav className="navbar">
          <h1>Movie Finder</h1>
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
