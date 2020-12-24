import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'
import Button from '../UI/Button/Button'
import TotalPrice from '../TotalPrice/TotalPrice'


const BurgerControls = (props) => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-yellow-300 to-yellow-400 text-grey-900 mx-auto p-6 pb-1 px-10 w-auto mt-4 text-right shadow-md border border-yellow-400 rounded-xl">
      < table > <tbody>
        {INGREDIENTS_LIST.map((item) => (
          <BurgerControl
            key={item.ingredient}
            quantity={props.ingredients.filter(x => x === item.ingredient).length}
            label={item.label}
            price={item.price}
            disabled={!props.ingredients.includes(item.ingredient)}
            onClickPlus={() => props.onClickPlus(item.ingredient)}
            onClickMinus={() => props.onClickMinus(item.ingredient)} />
        ))}
      </tbody></table >
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-xl font-light">
          <TotalPrice totalPrice={props.totalPrice} />
        </p>
        {props.purchasable
          ? <>
            <Button
              onClick={props.onClickReset}
              btnStyle="danger">
              Reset
            </Button>
            <Button
              onClick={props.onClickOrderNow}
              btnStyle="success">
              Order Now
            </Button>
          </>
          : <>
            <Button
              btnStyle="disabled"
              disabled={true}>
              Reset
            </Button>
            <Button
              btnStyle="disabled"
              disabled={true}>
              Order Now
            </Button>
          </>
        }
      </div>
    </div >
  )
}

export default BurgerControls