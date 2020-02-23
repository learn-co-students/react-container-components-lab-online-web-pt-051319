import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(URL + "&query=" + this.state.searchTerm)
      .then(res => res.json())
      .then(json => {
        this.setState({ reviews: json.results });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h3>Search Results</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="query" onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
