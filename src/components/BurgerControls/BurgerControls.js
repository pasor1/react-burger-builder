import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'

const BurgerControls = (props) => {
  return (
    <div className="bg-gray-100 mx-auto p-6 px-10 w-auto mt-4 text-right shadow-md border border-gray-300 rounded-xl">
      {INGREDIENTS_LIST.map((item) => (
        <BurgerControl
          key={item.ingredient}
          label={item.label}
          disabled={!props.ingredients.includes(item.ingredient)}
          onClickPlus={() => props.onClickPlus(item.ingredient)}
          onClickMinus={() => props.onClickMinus(item.ingredient)} />
      ))}
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-xl font-light">Total Price: <span className="text-2xl font-bold">{props.totalPrice.toFixed(2)}€</span></p>
        {props.purchasable
          ? <button className=" p-3 mt-5 text-white bg-gradient-to-t from-yellow-800 to-red-900 hover:from-yellow-700 hover:to-red-800 rounded-md border border-red-900 shadow-xl outline-none focus:outline-none hover:scale-105 transform transition duration-50 ease-in-out"> ORDER NOW</button>
          : <button className=" p-3 mt-5 bg-gray-300 text-white font-semibold rounded-md shadow-md focus:outline-none cursor-default"> ORDER NOW</button>
        }
      </div>
    </div>
  )
}

export default BurgerControls