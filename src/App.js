import React, { Component } from "react";
import Navbar from "./componnets/Navbar";
import Movies from "./componnets/Movies";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <Movies />
      </div>
    );
  }
}

export default App;
