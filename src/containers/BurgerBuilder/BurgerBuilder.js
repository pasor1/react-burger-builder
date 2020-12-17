import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/BurgerControls/BurgerControls';
import styles from './BurgerBuilder.module.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const START_PRICE = 2.5;

export const INGREDIENTS_LIST = [
  {
    ingredient: 'meat',
    label: 'Meat',
    price: 2
  },
  {
    ingredient: 'cheese',
    label: 'Cheese',
    price: 1
  },
  {
    ingredient: 'bacon',
    label: 'Bacon',
    price: 0.7
  },
  {
    ingredient: 'salad',
    label: 'Salad',
    price: 0.5
  }
]

class BurgerBuilder extends React.Component {
  state = {
    ingredients: [],
    totalPrice: START_PRICE,
    purchasable: false
  }

  updatePurchaseState = (ingredients) => {
    const isPurchasable = ingredients.length > 0;
    this.setState({
      purchasable: isPurchasable
    });
  }

  updateTotalPrice = (ingredients) => {
    const total = ingredients.reduce((acc, curr) => {
      let subTotal = 0;
      INGREDIENTS_LIST.forEach((item) => {
        if (item.ingredient === curr) {
          subTotal = item.price + subTotal
        }
      })
      return acc + subTotal;
    }, 0)
    this.setState({
      totalPrice: START_PRICE + total
    });
    this.updatePurchaseState(ingredients);
  }

  addIngredientHandler = (ingredient) => {
    const ingredients = [...this.state.ingredients];
    ingredients.unshift(ingredient);
    this.setState({
      ingredients: ingredients
    });
    this.updateTotalPrice(ingredients);
  }

  removeIngredientHandler = (ingredient) => {
    const ingredients = [...this.state.ingredients];
    const ingredientIndex = ingredients.indexOf(ingredient);
    if (ingredientIndex > -1) {
      ingredients.splice(ingredientIndex, 1);
      this.setState({
        ingredients: ingredients
      })
    }
    this.updateTotalPrice(ingredients);
  }

  render() {
    return (
      <div className={styles.container}>
        <Modal><OrderSummary /></Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          onClickPlus={this.addIngredientHandler}
          onClickMinus={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchasable={this.state.purchasable} />
      </div>
    )
  }
}

export default BurgerBuilder;
