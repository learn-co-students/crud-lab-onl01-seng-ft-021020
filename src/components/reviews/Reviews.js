import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
    renderReviews = () => {
        return this.props.reviews.map(review => {
            if (review.restaurantId === this.props.restaurantId){
                return <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
            }
        })
    }
  
    render() {
        return (
        <ul>
            {this.renderReviews()}
        </ul>
        );
    }
};

export default Reviews;