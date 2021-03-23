import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let review = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input
      </div>
    );
  }
};

export default ReviewInput;
