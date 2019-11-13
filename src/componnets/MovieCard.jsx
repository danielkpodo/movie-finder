import React from "react";

function MovieCard(props) {
  const { poster_path, original_title, release_date, media_type } = props.movie;
  return (
    <div className="mv-card">
      <div className="mv-columns">
        <div className="mv-img">
          {poster_path === null ? (
            <img src={"https://dummyimage.com/300&text=No_cover_art"} alt="" />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt=""
            />
          )}
        </div>
        <div className="mv-info">
          {original_title !== null ? (
            <h3>{original_title}</h3>
          ) : (
            <h3>No title</h3>
          )}
          <small className="release_date">
            <strong>Release Date: </strong>
            <em>
              {release_date === null ? (
                "No date found"
              ) : (
                <strong className="date">{release_date}</strong>
              )}
            </em>
          </small>
          <div className="summary">
            <small>Media Type</small>
            <span>{media_type}</span>
          </div>
          <div className="mv-footer">
            <div className="read-more">
              <a href="#!">
                <i className="fa fa-eye" aria-hidden="true"></i> View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
