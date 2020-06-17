import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: "",
  };

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state);
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            onChange={this.handleOnChange}
            value = {this.state.text}
          />
          <input type="submit" value="Add Restaurant" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
