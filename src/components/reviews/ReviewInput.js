import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      restaurantId: this.props.restaurantId
    };
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({
      ...this.state,
      text: ''
    })
  }

  handleInput = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleInput} value={this.state.text} />
          <input type='submit' value='Add review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
