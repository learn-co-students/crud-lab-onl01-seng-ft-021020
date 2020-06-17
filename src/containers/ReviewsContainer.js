import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";

class ReviewsContainer extends Component {
  render() {
    const { restaurant, addReview, reviews, deleteReview } = this.props;
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id} />
        <Reviews
          restaurant={restaurant}
          reviews={reviews}
          deleteReview={deleteReview}
        />
      </div>
    );
  }
}

export default ReviewsContainer;
