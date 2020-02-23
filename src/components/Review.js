import React from "react";

const Review = props => {
    return (
        <div className="review">
            <h2>{props.headline}</h2>
            <p>{props.summary}</p>
        </div>
    );
};

export default Review;