import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'

const BurgerControls = (props) => {
  return (
    <div className="max-w-md mx-auto mt-4 bg-gray-100 text-right">
      {INGREDIENTS_LIST.map((item) => (
        <BurgerControl
          key={item.ingredient}
          label={item.label}
          disabled={!props.ingredients.includes(item.ingredient)}
          onClickPlus={() => props.onClickPlus(item.ingredient)}
          onClickMinus={() => props.onClickMinus(item.ingredient)} />
      ))}
      <hr />
      <p className="text-xl">TOTAL {props.total}</p>
    </div>
  )
}

export default BurgerControls