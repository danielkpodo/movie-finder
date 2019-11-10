import React from "react";
import MovieCard from "./MovieCard";
import SearchCounter from "./SearchCounter";

function Movies() {
  return (
    <>
      <SearchCounter />
      <div className="mv-collections">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default Movies;
