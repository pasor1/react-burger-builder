import React from 'react';
import CheckoutSummary from '../../components/CheckOut/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
class Checkout extends React.Component {
  state = {
    ingredients: [],
    price: 0
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  componentDidMount() {
    const queryParam = new URLSearchParams(this.props.location.search);
    const ingredients = queryParam.get("ingredients").split(',');
    const price = queryParam.get("price");
    this.setState({ ingredients: ingredients, price: price });
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} onClickConfirm={this.checkoutContinueHandler} onClickCancel={() => this.props.history.goBack()} />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />
      </div>
    )
  }
};

export default Checkout;
