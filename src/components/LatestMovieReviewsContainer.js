import React from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(({data}) => this.setState({ reviews: data }));
  }


  render(){
    return (
      <div className="latest-movie-reviews">
        <div>Latest Reviews</div>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    )
  }
}


export default LatestMovieReviewsContainer;
