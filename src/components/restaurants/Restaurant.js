import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  render() {
    const {
      restaurant,
      deleteRestaurant,
      addReview,
      reviews,
      deleteReview,
    } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer
            reviews={reviews}
            addReview={addReview}
            restaurant={restaurant}
            deleteReview={deleteReview}
          />
        </li>
      </div>
    );
  }
}

export default Restaurant;
