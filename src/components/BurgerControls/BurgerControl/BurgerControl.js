import React from 'react';

const BurgerControl = (props) => {
  return (
    <div>
      {props.label}

      <button type="button" onClick={props.onClickPlus} className="py-1 px-3 m-2 bg-green-800 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-green-700 hover:scale-95 transform transition duration-50 ease-in-out">+</button>
    </div>
  )
}

export default BurgerControl