import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'
import TotalPrice from '../TotalPrice/TotalPrice'

const BurgerControls = (props) => {
  return (
    <div className="bg-gray-100 mx-auto p-6 pb-1 px-10 w-auto mt-4 text-right shadow-md border border-gray-300 rounded-xl">
      {INGREDIENTS_LIST.map((item) => (
        <BurgerControl
          key={item.ingredient}
          label={item.label}
          price={item.price}
          disabled={!props.ingredients.includes(item.ingredient)}
          onClickPlus={() => props.onClickPlus(item.ingredient)}
          onClickMinus={() => props.onClickMinus(item.ingredient)} />
      ))}
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-xl font-light">
          <TotalPrice totalPrice={props.totalPrice} />
          <sup className="text-md ml-1 text-gray-500">*</sup>
        </p>
        {props.purchasable
          ? <button onClick={props.onClickOrderNow}
            className="p-3 my-5 text-white bg-gradient-to-t from-yellow-800 to-red-900 hover:from-yellow-700 hover:to-red-800 rounded-md border border-red-900 shadow-xl outline-none focus:outline-none hover:scale-105 transform transition duration-50 ease-in-out"> ORDER NOW</button>
          : <button className="p-3 my-5 bg-gray-300 text-white font-semibold rounded-md shadow-md focus:outline-none cursor-default"> ORDER NOW</button>
        }
        <p className="text-sm font-light ml-1 text-gray-500">* Total price includes bread</p>
      </div>
    </div>
  )
}

export default BurgerControls