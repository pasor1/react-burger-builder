import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder'
import Button from '../UI/Button/Button'
import TotalPrice from '../TotalPrice/TotalPrice'


const BurgerControls = (props) => {
  return (
    <div className="bg-gray-100 mx-auto p-6 pb-1 px-10 w-auto mt-4 text-right shadow-md border border-gray-300 rounded-xl">
      <table><tbody>
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
      </tbody></table>
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-xl font-light">
          <TotalPrice totalPrice={props.totalPrice} />
          <sup className="text-md ml-1 text-gray-500">*</sup>
        </p>
        {props.purchasable
          ? <Button
            onClick={props.onClickOrderNow}
            btnStyle="success">
            Order Now
            </Button>
          : <Button
            btnStyle="disabled"
            disabled={true}>
            Order Now
            </Button>
        }
        <p className="text-sm font-light ml-1 text-gray-500">* Total price includes bread</p>
      </div>
    </div>
  )
}

export default BurgerControls