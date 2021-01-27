import React from 'react';
import CheckoutSummary from '../../components/CheckOut/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
  state = {
    ingredients: []
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  componentDidMount() {
    const queryParam = new URLSearchParams(this.props.location.search);
    const ingredients = queryParam.get("ingredients").split(',');
    this.setState({ ingredients: ingredients });
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} onClickConfirm={this.checkoutContinueHandler} onClickCancel={() => this.props.history.goBack()} />
      </div>
    )
  }
};

export default Checkout;
