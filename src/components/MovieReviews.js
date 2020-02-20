import React from "react"

const MovieReviews = props => {
    let listReviews = () => {
        if (props.reviews) { return (props.reviews.map((review, i) => {
            return (
                <div className="review" key={i}>
                    <h2><a href={review.link.url} title={review.display_title} >{review.critics_pick} - {review.headline}</a></h2>
                    <p><em>{review.mpaa_rating}</em> &ndash; {review.summary_short}</p>
                    <p>{review.byline}, {review.publication_date}</p>
                </div>
            )
        }))}
    }

    return (
        <div className="review-list">
            {listReviews()}
        </div>
    );
}

export default MovieReviews
