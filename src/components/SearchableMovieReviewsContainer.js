import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  fetchReviews = searchTerm => {
    fetch(URL + `&query=${searchTerm}`)
      .then(res => res.json())
      .then(({data}) => {this.setState({ reviews: data })});
  };

  componentDidMount() {
    this.fetchReviews(this.state.searchTerm);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchReviews(this.state.searchTerm);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="searchTerm"
            value={this.state.searchTerm}
            type="text"
          ></input>
          <button type="submit">submit</button>
        </form>

        <div>Reviews</div>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
