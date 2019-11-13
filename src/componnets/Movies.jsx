import React from "react";
import MovieCard from "./MovieCard";
import SearchCounter from "./SearchCounter";

function Movies(props) {
  return (
    <>
      <SearchCounter />
      <div className="mv-collections">
        {props.movieList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
