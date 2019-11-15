import React from "react";
import SearchBox from "./SearchBox";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Navbar(props) {
  return (
    <div className="header-wrap">
      <header className="overlay">
        <nav className="navbar" id="myNav">
          <Link to="/" title="Movie Finder powered by MovieDB">
            <img src={logo} alt="MovieDB official logo" />
          </Link>
          <ul>
            <li>
              <NavLink to="/movies" title="Search for movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/seasons" title="search for tv shows">
                Seasons
              </NavLink>
            </li>
            <li>
              <NavLink to="/tv" title="Search with any keyword">
                TV Shows
              </NavLink>
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
