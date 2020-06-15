import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} add={this.props.addReview} />
        <Reviews reviews={this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id)} delete={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    addReview: r => dispatch({type: "ADD_REVIEW", review: r}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id: id})
  }
};

const mapState = state => {
  return {
    reviews: state.reviews
  }
};

export default connect(mapState, mapDispatch)(ReviewsContainer)
