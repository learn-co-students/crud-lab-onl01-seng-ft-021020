import React, { Component } from "react";
// import Reviews from "./Reviews";

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId,
    });
    this.setState({
      ...this.state,
      text: "",
    });
  };

  handleOnChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
