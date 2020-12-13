import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'

const BurgerControls = (props) => {
  return (
    <div className="max-w-md mx-auto mt-4 bg-gray-100 text-right">
      {INGREDIENTS_LIST.map((item) => {
        return <BurgerControl onClickPlus={props.onClickPlus} onClickMinus={props.onClickMinus} type={item.ingredient} key={item.ingredient} label={item.label} />
      })}
    </div>
  )
}

export default BurgerControls