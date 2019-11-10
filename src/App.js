import React, { Component } from "react";
import Navbar from "./componnets/Navbar";

import "./App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div id="wrapper">
        <Navbar />
      </div>
    );
  }
}

export default App;
