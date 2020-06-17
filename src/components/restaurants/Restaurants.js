import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map((rest) => (
          <Restaurant
            key={rest.id}
            deleteRestaurant={this.props.deleteRestaurant}
            addReview={this.props.addReview}
            reviews={this.props.reviews}
            deleteReview={this.props.deleteReview}
            restaurant={rest}
          />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
