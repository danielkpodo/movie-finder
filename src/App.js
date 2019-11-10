import React, { Component } from "react";
import Navbar from "./componnets/Navbar";
import MovieCard from "./componnets/MovieCard";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <MovieCard />
      </div>
    );
  }
}

export default App;
