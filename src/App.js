import React, { Component } from "react";
import Navbar from "./componnets/Navbar";
import Movies from "./componnets/Movies";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      apiKey: "f93bce160c2eec4d9e52813434db366c",
      searchTerm: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.handleFetchRequest();
  }
  handleFetchRequest = () => {
    this.setState({ isLoading: true });
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${this.state.apiKey}&query=${this.state.searchTerm}&language=en-US`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results,
          isLoading: false
        });
        console.log("Movies Returned", this.state.movies);
      });
  };

  handleInputRequest = e => {
    this.setState({ searchTerm: e.target.value }, () =>
      this.handleFetchRequest()
    );
  };

  render() {
    return (
      <div id="wrapper">
        <Navbar onHandleInput={this.handleInputRequest} />
        <Movies />
      </div>
    );
  }
}

export default App;
