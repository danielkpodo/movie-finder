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
            <img src={logo} alt="MovieDB official logo" />
          </a>
          <ul>
            <li>
              <a href="#!" title="Search for movies">
                Movies
              </a>
            </li>
            <li>
              <a href="#!" title="search for tv shows">
                Seasons
              </a>
            </li>
            <li>
              <a href="#!" title="Search with any keyword">
                Everything
              </a>
            </li>
          </ul>
        </nav>
        <SearchBox
          searchTerm={props.onInput}
          count={props.count}
          search={props.search}
          loaderIndicator={props.loader}
        />
      </header>
    </div>
  );
}

export default Navbar;
