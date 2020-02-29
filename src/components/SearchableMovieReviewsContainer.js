import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "E4pBKuN9Ziz63gLQUwimyN9jUODyD1Oo";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleSearch = event => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    });
  };

  submitEvent = event => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  };

  render() {
    console.log(this.state.reviews);
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitEvent}>
          <input
            type="text"
            onChange={event => this.handleSearch(event)}
          ></input>
        </form>
        <h3>The Searched Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
