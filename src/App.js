import React, { Component } from "react";
import Navbar from "./componnets/Navbar";
import Movies from "./componnets/Movies";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      API_KEY: "f93bce160c2eec4d9e52813434db366c",
      searchTerm: "*",
      isLoading: true
    };
  }

  componentDidMount() {
    this.handleMoviesRequest();
  }

  handleMoviesRequest = () => {
    this.setState({ isLoading: true });
    const requestURL = `https://api.themoviedb.org/3/search/multi?&query=${this.state.searchTerm}&api_key=${this.state.API_KEY}&language=en-US`;

    fetch(requestURL)
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.results, isLoading: false });
        console.log("Retrieved Movies", this.state.movies);
        console.log("Raw Data", data);
      });
  };

  handleSearchInput = e => {
    this.setState({ searchTerm: e.target.value }, () =>
      this.handleMoviesRequest()
    );
  };

  render() {
    return (
      <div id="wrapper">
        <Navbar onHandleInput={this.handleSearchInput} />
        <Movies />
      </div>
    );
  }
}

export default App;
