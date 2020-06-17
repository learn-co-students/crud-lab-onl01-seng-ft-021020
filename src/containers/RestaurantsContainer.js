import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    const {
      addRestaurant,
      restaurants,
      deleteRestaurant,
      addReview,
      reviews,
      deleteReview,
    } = this.props;
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants
          restaurants={restaurants}
          deleteRestaurant={deleteRestaurant}
          addReview={addReview}
          reviews={reviews}
          deleteReview={deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  addRestaurant: (text) => dispatch({ type: "ADD_RESTAURANT", text }),
  deleteRestaurant: (id) => dispatch({ type: "DELETE_RESTAURANT", id }),
  deleteReview: (id) => dispatch({ type: "DELETE_REVIEW", id }),
  addReview: ({ text, restaurantId }) =>
    dispatch({ type: "ADD_REVIEW", review: { text, restaurantId } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
