import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/BurgerControls/BurgerControls';

class BurgerBuilder extends React.Component {
  state = {
    ingredients: []
  }

  addMealHandler = () => {
    const ingredients = [...this.state.ingredients];
    ingredients.unshift('meat');
    this.setState({
      ingredients: ingredients
    })
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls onClick={this.addMealHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;