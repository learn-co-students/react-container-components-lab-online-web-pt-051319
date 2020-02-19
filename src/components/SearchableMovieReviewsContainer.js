import React, { Component } from "react";
import "isomorphic-fetch";

import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "76oEHM5V8DZUt3TuAUayyrSGClffD4rV";
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(data => this.setState({ reviews: data.results }));
  };

  handleOnChange = e => {
    //update state with new input value
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleOnChange}
          />
          <button type="submit"></button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
