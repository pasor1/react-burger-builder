import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/BurgerControls/BurgerControls';

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
    total: 2
  }

  addIngredientHandler = (ingredient) => {
    const ingredients = [...this.state.ingredients];
    ingredients.unshift(ingredient);
    this.setState({
      ingredients: ingredients,
    })
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
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls onClickPlus={this.addIngredientHandler} onClickMinus={this.removeIngredientHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
