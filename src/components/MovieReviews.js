import React from 'react';

const MovieReviews = (props) => {
	const reviewMap = () => {
		return props.reviews.map(movie => {
			return (
				<div className="review" key={movie.display_title}>
					<img src={movie.multimedia ? movie.multimedia.src : null} alt={movie.display_title + " image"} />
					<h1>{movie.display_title}</h1>
					<h2>{movie.byline}</h2>
					<h2>{movie.mpaa_rating}</h2>
					<h2>{movie.summary_short}</h2>
				</div>
			)
		})
	}
	return props.length === 0 ? null : (
		<div className="review-list">
			{reviewMap()}
		</div>
	)
}

export default MovieReviews
