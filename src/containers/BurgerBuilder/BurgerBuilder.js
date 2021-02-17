import React from 'react';
import { connect } from 'react-redux'

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/BurgerControls/BurgerControls';
import styles from './BurgerBuilder.module.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../config/axios-orders';
import withErrorHandler from '../../components/hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends React.Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false
  }

  togglePurchasingHandler = () => {
    const newPurchasingStatus = !this.state.purchasing;
    this.setState({
      purchasing: newPurchasingStatus
    })
  }

  render() {
    let orderSummary = <OrderSummary
      onClickCancel={this.togglePurchasingHandler}
      onClickConfirm={() => this.props.history.push('/checkout')}
      ingredients={this.props.ingredientsRdx}
      totalPrice={this.props.totalPriceRdx} />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <div className={styles.container}>
        <BurgerControls
          onClickPlus={this.props.onIngredientAdd}
          onClickMinus={this.props.onIngredientRemove}
          onClickReset={this.props.onIngredientsReset}
          totalPrice={this.props.totalPriceRdx}
          ingredients={this.props.ingredientsRdx}
          onClickOrderNow={this.togglePurchasingHandler}
          purchasable={this.props.ingredientsRdx.length > 0} />
        <Burger ingredients={this.props.ingredientsRdx} />
        <Modal visible={this.state.purchasing} onClickBackdrop={this.togglePurchasingHandler}>
          {orderSummary}
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredientsRdx: state.ingredients,
    totalPriceRdx: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdd: (ingredientName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName }),
    onIngredientRemove: (ingredientName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName }),
    onIngredientsReset: () => dispatch({ type: actionTypes.RESET_INGREDIENTS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
