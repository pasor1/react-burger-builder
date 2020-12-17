import React from 'react';
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder';

const orderSummary = (props) => {
  return (
    <>
      <h3 className="text-2xl">Your order</h3>
      <ul>
        {INGREDIENTS_LIST.map((item) => (
          <li>{item.label}</li>
        ))}
      </ul>
    </>
  )
}

export default orderSummary