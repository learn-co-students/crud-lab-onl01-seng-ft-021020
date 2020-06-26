import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render() {
    return(
      <ul>
        Restaurants Component
        {/* iterate Restaurants and call <Restaurant /> */}
        {this.props.restaurants.map(restaurant => <Restaurant 
        deleteRestaurant={this.props.deleteRestaurant}
        key={restaurant.id}
        restaurant={restaurant}/>
        )}
      </ul>
    );
  }
};

export default Restaurants;