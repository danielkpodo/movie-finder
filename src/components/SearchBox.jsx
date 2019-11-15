import React from "react";

function SearchBox(props) {
  const { search, loaderIndicator } = props;
  return (
    <div className="search-box">
      <h2>Stunning Movies and Seasons</h2>
      <p>Access over 3 billion+ movies in the Database</p>
      <input
        type="text"
        placeholder="What are you looking for ? start typing... e.g war"
        autoFocus
        onChange={props.searchTerm}
      />
      <small>
        Trending movies: Angel has Fallen, Black &amp; Blue, Rambo Last Blood,
        Mission Impossible
      </small>
      <h3>
        Currently displaying <span className="count">{props.count}</span> result
        {props.count > 1 ? "s" : ""} for{" "}
        <span className="phrase">{search !== "" ? search : "Soldiers"}</span>
      </h3>
      <>{loaderIndicator}</>
    </div>
  );
}

export default SearchBox;
