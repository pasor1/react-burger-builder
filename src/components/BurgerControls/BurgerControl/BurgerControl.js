import React from 'react';

const BurgerControl = (props) => {
  return (
    <div className="mb-5 whitespace-nowrap">
      <span className="text-xl mr-1">{props.label}</span> <span className="font-light text-sm mr-6">({props.price.toFixed(2) + '€'})</span>
      {props.disabled
        ? <button disabled type="button" onClick={props.onClickMinus} className="py-1 px-3 bg-gray-300 text-white font-semibold rounded-md shadow-md focus:outline-none cursor-default">-</button>
        : <button type="button" onClick={props.onClickMinus} className="py-1 px-3 bg-red-600 text-white font-semibold rounded-md shadow-md focus:outline-none hover:bg-red-500 hover:scale-95 transform transition duration-50 ease-in-out">-</button>
      }
      <button type="button" onClick={props.onClickPlus} className="py-1 px-3 ml-2 bg-green-600 text-white font-semibold rounded-md shadow-md focus:outline-none hover:bg-green-500 hover:scale-95 transform transition duration-50 ease-in-out">+</button>
    </div>
  )
}

export default BurgerControl