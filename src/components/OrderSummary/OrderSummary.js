import React from 'react';
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder';
import TotalPrice from '../TotalPrice/TotalPrice';

const orderSummary = (props) => {
  return (
    <>
      <h3 className="text-2xl">Your order</h3>
      <ul>
        {INGREDIENTS_LIST.map((item) => {
          const ingredientQuantity = props.ingredients.filter(x => x === item.ingredient).length;
          return ingredientQuantity > 0
            ? <li key={item.ingredient}>{item.label} ({item.price.toFixed(2)}€) x{ingredientQuantity} : {(item.price * ingredientQuantity).toFixed(2)}€</li>
            : null
        })}
      </ul>
      <TotalPrice totalPrice={props.totalPrice} />
    </>
  )
}

export default orderSummary