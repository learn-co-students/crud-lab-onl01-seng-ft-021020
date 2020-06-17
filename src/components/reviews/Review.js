import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, id, deleteReview } = this.props

    return (
      <div>
        <li>{review.text}</li>
        <button onClick={() => deleteReview(review.id)}> X </button>
        <button onClick={() => console.info(review.id)}> Edit </button>
      </div>
    );
  }

};

export default Review;
