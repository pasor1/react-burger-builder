import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'

const BurgerControls = (props) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-md mx-auto p-4 mt-4 text-right shadow-md border border-gray-300 rounded-2xl">
        {INGREDIENTS_LIST.map((item) => (
          <BurgerControl
            key={item.ingredient}
            label={item.label}
            disabled={!props.ingredients.includes(item.ingredient)}
            onClickPlus={() => props.onClickPlus(item.ingredient)}
            onClickMinus={() => props.onClickMinus(item.ingredient)} />
        ))}
        <hr className="my-4" />
        <p className="text-md font-light">Total Price <span className="text-xl font-bold">{props.totalPrice.toFixed(2)}€</span></p>
        <button className=" p-3 mt-5 text-white bg-gradient-to-t from-yellow-800 to-red-900 hover:from-yellow-700 hover:to-red-800 rounded-md border border-red-900 shadow-xl outline-none focus:outline-none hover:scale-105 transform transition duration-50 ease-in-out"> ORDER NOW</button>
      </div>
    </div>
  )
}

export default BurgerControls