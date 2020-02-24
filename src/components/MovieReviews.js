import React from "react";

const MovieReviews = props => {
  return (
    <ul className="review-list">
      {props.reviews.map(review => (
        <li className="review">
          <a href={review.link.url}>{review.headline}</a>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;