import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({
      text: ''
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleChange} value={this.state.text} />
          <input type='submit' value='Add Restaurant' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput
