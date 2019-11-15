import React from "react";

function NoResultFound(props) {
  return (
    <>
      <div className="no-result">
        <div className="result-icon">
          <i class="fa fa-info-circle fa-3x" aria-hidden="true"></i>
        </div>
        <div className="text">
          <h2>
            Sorry, we coudn't find any results matching "{props.noResult}"
          </h2>
        </div>
      </div>
      <div className="search-tips">
        <h3>Search Tips</h3>
        <ul>
          <li>Check your spelling and try again!</li>
          <li>Try a similar but different search term</li>
          <li>
            Keep your search term simple as our search engine works best with
            shorter descriptiion
          </li>
          <li>
            Try searching with current trending movies e.g Silicon Valley, Angel
            has fallen
          </li>
        </ul>
      </div>
    </>
  );
}

export default NoResultFound;
