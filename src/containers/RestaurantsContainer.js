import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant} />
        <Restaurants delete={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addRestaurant: r => dispatch({type: "ADD_RESTAURANT", restaurant: r}),
    deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id: id})
  }
};

const mapState = state => {
  return {
    restaurants: state.restaurants
  }
};

export default connect(mapState, mapDispatch)(RestaurantsContainer)
