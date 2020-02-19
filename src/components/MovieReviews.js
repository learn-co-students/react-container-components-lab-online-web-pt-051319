import React from "react";
import Review from "./Review";

const MovieReviews = props => (
  <div className="review-list">
    {props.reviews.map((review, i) => (
      <Review
        key={i}
        headline={review.headline}
        summary={review.summary_short}
      />
    ))}
  </div>
);

export default MovieReviews;
