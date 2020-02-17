import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

	state = ({
		reviews: []
	})
	componentDidMount = () => {
		fetch(URL)
		.then(r => r.json())
		.then(rj => this.setState({reviews: rj.results}))
	}
	render() {
		return (
			<div className="latest-movie-reviews" >
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}
