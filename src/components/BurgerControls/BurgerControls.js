import React from 'react'

const BurgerControls = (props) => {
  return (
    <div className="max-w-md mx-auto mt-4">
      <button type="button" onClick={props.onClick} className="py-2 px-4 bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none hover:bg-indigo-600 hover:scale-95 transform transition duration-50 ease-in-out">Add meal</button>
    </div>
  )
}

export default BurgerControls