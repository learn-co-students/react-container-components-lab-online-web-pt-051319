import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = "1fLpCd6ZyYTghScWo0rJYugtAzoQOvB5";
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }
    
    fetchReviews = (searchTerm = "") =>{
        fetch(URL + `&query=${searchTerm}`)
            .then(resp => resp.json())
            .then(({results}) => {this.setState({reviews: results})})

    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value}, () => {console.log(this.state)})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchReviews(this.state.searchTerm)    
    }

    componentDidMount() {
        this.fetchReviews(this.state.searchTerm)
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" id="searchTerm" onChange={this.handleInputChange}/>
                    <button type="submit">Search</button>
                </form>
                <div>Searchable reviews</div>
                <div><MovieReviews reviews={this.state.reviews} /></div>
            </div>

        )
    }
}