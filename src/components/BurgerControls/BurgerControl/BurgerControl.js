import React from 'react';

const BurgerControl = (props) => {
  return (
    <div>
      <span className="text-xl mr-6">{props.label}</span>
      {props.disabled
        ? <button disabled type="button" onClick={props.onClickMinus} className="py-1 px-3 m-1 bg-gray-300 text-white font-semibold rounded-lg shadow-md focus:outline-none cursor-default">-</button>
        : <button type="button" onClick={props.onClickMinus} className="py-1 px-3 m-1 bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-red-600 hover:scale-95 transform transition duration-50 ease-in-out">-</button>
      }
      <button type="button" onClick={props.onClickPlus} className="py-1 px-3 m-1 bg-green-800 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-green-700 hover:scale-95 transform transition duration-50 ease-in-out">+</button>
    </div>
  )
}

export default BurgerControl