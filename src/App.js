import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import NoResultFound from "./components/NoSearchResult";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_key: "84990e0335c32812300e28deea4e6c60",
      keywords: "",
      isLoading: true,
      movies: [],
      totalResults: 0,
      currentPage: 1
    };
  }
  componentDidMount() {
    this.handleFetchRequest();
  }

  handleFetchRequest = () => {
    this.setState({ isLoading: true });
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${
      this.state.api_key
    }&query=${this.state.keywords === "" ? "soldiers" : this.state.keywords}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          movies: data.results,
          totalResults: data.total_results
        });
        console.log("Raw Data", this.state.movies);
        console.log("Total Search Result", this.state.totalResults);
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

  handleLoaderDisplay = () => {
    if (this.state.isLoading === true)
      return (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      );
    return null;
  };

  handleNextPage = pageNumber => {
    const pageURL = `https://api.themoviedb.org/3/search/multi?api_key=${
      this.state.api_key
    }&query=${
      this.state.keywords === "" ? "soldiers" : this.state.keywords
    }&language=en-&page=${pageNumber}`;

    fetch(pageURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentPage: pageNumber,
          movies: data.results
        });
      })
      .catch(err => console.log("Error fetching pages", err));
  };

  render() {
    const numberOfPages = Math.floor(this.state.totalResults / 20);
    console.log("number of Pages", numberOfPages);
    return (
      <div id="wrapper">
        <Navbar
          onInput={this.handleSearchPhrase}
          count={this.state.totalResults}
          search={this.state.keywords}
          loader={this.handleLoaderDisplay()}
        />
        {this.state.movies.length !== 0 ? (
          <>
            {" "}
            <Route
              exact
              path="/:any?"
              component={() => (
                <Movies
                  movieList={this.state.movies}
                  totalCount={this.state.totalResults}
                />
              )}
            />
            {this.state.totalResults > 20 ? (
              <Route
                exact
                path="/:any?"
                component={() => (
                  <Pagination
                    pages={numberOfPages}
                    nextPage={this.handleNextPage}
                    currentPage={this.state.currentPage}
                  />
                )}
              />
            ) : null}
          </>
        ) : (
          <NoResultFound noResult={this.state.keywords} />
        )}
      </div>
    );
  }
}

export default App;
