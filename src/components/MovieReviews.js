// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    return (
      <ul className="review-list">
        {props.reviews.map(movie => (
          <li className="review">
              <a href={movie.link.url}>{movie.headline}</a>
              <p>{movie.summary_short}</p>
              <img src={movie.multimedia ? movie.multimedia.src : null} alt={movie.display_title + " image"} />
          </li>
        ))}
      </ul>
    );
  }
  
  export default MovieReviews;
