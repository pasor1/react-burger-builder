import React from 'react';
import { INGREDIENTS_LIST } from '../../containers/BurgerBuilder/BurgerBuilder';
import TotalPrice from '../TotalPrice/TotalPrice';
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-extrabold mb-5">Your Burger</h3>
      <div className="m-auto inline-block text-right">
        <table>
          <tbody>
            {INGREDIENTS_LIST.map((item) => {
              const ingredientQuantity = props.ingredients.filter(x => x === item.ingredient).length;
              return ingredientQuantity > 0
                ? <tr key={item.ingredient}>
                  <td className="p-2 text-xl">{item.label}</td>
                  <td className="p-2 font-light text-sm">x{ingredientQuantity} {/*({item.price.toFixed(2)}€)*/}</td>
                  <td className="p-2 font-semibold text-lg">{(item.price * ingredientQuantity).toFixed(2)}€</td>
                </tr>
                : null
            })}
            <tr>
              <td colSpan="3" className="p-3 font-light text-xl">
                <hr className="mb-2" />
                <TotalPrice totalPrice={props.totalPrice} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Button btnStyle="danger" onClick={props.onClickCancel}>Close</Button>
        <Button btnStyle="success" onClick={props.onClickConfirm}>Checkout</Button>
      </div>
    </div>
  )
}

export default orderSummary