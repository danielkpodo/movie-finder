import React from "react";

function SearchBox(props) {
  return (
    <div className="search-box">
      <h2>Stunning Movies and Seasons</h2>
      <p>Access over 3 billion+ movies in our database</p>
      <input
        type="text"
        placeholder="What are you looking for ? start typing..."
        autoFocus
        onChange={props.onTyping}
      />
      <small>
        Trending movies: Angel has Fallen, Black &amp; Blue, Rambo Last Blood,
        Wu Assasins
      </small>
    </div>
  );
}

export default SearchBox;
