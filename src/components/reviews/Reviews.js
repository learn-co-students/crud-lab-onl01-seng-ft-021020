import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const { restaurant, reviews, deleteReview } = this.props;
    return (
      <ul>
        {reviews.map((review) => {
          if (restaurant.id === review.restaurantId) {
            return (
              <Review
                key={review.id}
                review={review}
                deleteReview={deleteReview}
              />
            );
          }
        })}
      </ul>
    );
  }
}

export default Reviews;
