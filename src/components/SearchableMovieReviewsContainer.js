import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
            +'&limit=3&query=';


export default class SearchableMovieReviewsContainer extends Component {
	state = ({
		reviews: [],
		searchTerm: ""
	})
	handleOnChange = (event) => {
		this.setState({ searchTerm: event.target.value })
	}
	handleSubmit = (event) => {
		event.preventDefault()
		fetch(URL + this.state.searchTerm)
		.then(r => r.json())
		.then(rj => this.setState({reviews: rj.results}))
	}
	render() {
		return (
			<div className="searchable-movie-reviews">
			<form onSubmit={event => this.handleSubmit(event)}>
				<label htmlFor="searchTerm">Search: </label>
				<input type="text" name="searchTerm" id="searchTerm" value={this.state.searchTerm} onChange={this.handleOnChange} />
				<button type="submit">Search</button>
			</form>
				<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
}