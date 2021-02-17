import React from 'react';
import CheckoutSummary from '../../components/CheckOut/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends React.Component {

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredientsRdx}
          onClickConfirm={this.checkoutContinueHandler}
          onClickCancel={() => this.props.history.goBack()} />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredientsRdx: state.ingredients
  }
}

export default connect(mapStateToProps)(Checkout);
