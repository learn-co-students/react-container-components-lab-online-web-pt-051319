// Code MovieReviews Here

import React from "react";

const MovieReviews = props => {
  const mapReviews = () => {
    return props.reviews.map(movie => {
      return (
        <div className="review" key={movie.display_title}>

          <h1>{movie.display_title}</h1>
          <h2>{movie.summary_short}</h2>
          <h2>{movie.headline}</h2>
        </div>
      );
    });
  };

  return (
      <div className="review-list">
        {mapReviews()}
      </div>
  );
}

export default MovieReviews
