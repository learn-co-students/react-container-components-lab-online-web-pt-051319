import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const NYT_API_KEY = 'QlqvGcVkGwmnpp9fFFeHaFXsBKIp0bIL';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (event) => {
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" id="searchTerm" onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
                <div><MovieReviews reviews={this.state.reviews} /></div>
            </div>
        )
	}
}