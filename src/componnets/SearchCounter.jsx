import React from "react";

const SearchCounter = props => {
  const { searchCount } = props;
  return (
    <div className="search-counter">
      <h2>Displaying Your Searches in Real Time</h2>
      <small>Your search yielded {searchCount} results</small>
    </div>
  );
};

export default SearchCounter;
