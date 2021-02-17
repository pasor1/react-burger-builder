import * as actionTypes from './actions';
import { INGREDIENTS_LIST, START_PRICE } from '../config/constants';

const initialState = {
  ingredients: [],
  totalPrice: START_PRICE,
};

const updateTotalPrice = (ingredients) => {
  const total = ingredients.reduce((acc, curr) => {
    let subTotal = 0;
    INGREDIENTS_LIST.forEach((item) => {
      if (item.ingredient === curr) {
        subTotal = item.price + subTotal
      }
    })
    return acc + subTotal;
  }, 0);
  return START_PRICE + total
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      const ingredients = [action.ingredientName, ...state.ingredients];
      return {
        ...state,
        ingredients: ingredients,
        totalPrice: updateTotalPrice(ingredients)
      };
    };

    case actionTypes.REMOVE_INGREDIENT: {
      const ingredients = [...state.ingredients];
      const ingredientIndex = ingredients.indexOf(action.ingredientName);
      if (ingredientIndex > -1) {
        ingredients.splice(ingredientIndex, 1);
      };
      return {
        ...state,
        ingredients: ingredients,
        totalPrice: updateTotalPrice(ingredients)
      };
    };

    case actionTypes.RESET_INGREDIENTS:
      return {
        ...state,
        ...initialState
      }




    default:
      return state;
  }


};

export default reducer;