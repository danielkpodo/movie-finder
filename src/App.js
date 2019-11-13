import React, { Component } from "react";
import Navbar from "./componnets/Navbar";
import Movies from "./componnets/Movies";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_key: "84990e0335c32812300e28deea4e6c60",
      keywords: "",
      isLoading: true,
      movies: []
    };
  }
  componentDidMount() {
    this.handleFetchRequest();
  }

  handleFetchRequest = () => {
    this.setState({ isLoading: true });
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${
      this.state.api_key
    }&query=${this.state.keywords === "" ? "war" : this.state.keywords}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          movies: data.results
        });
        console.log("Raw Data", this.state.movies);
      })
      .catch(err => console.log("Error Retrieveing results, try again", err));
  };

  handleSearchPhrase = e => {
    this.setState(
      {
        keywords: e.target.value
      },
      () => this.handleFetchRequest()
    );
  };
  render() {
    return (
      <div id="wrapper">
        <Navbar onInput={this.handleSearchPhrase} />
        <Movies movieList={this.state.movies} />
      </div>
    );
  }
}

export default App;
