import React from 'react';
import Button from '../../UI/Button/Button'

const BurgerControl = (props) => {
  return (
    <tr>
      <td className="text-xl font-bold leading-3">
        {props.label}
        <br /><span className="text-sm font-light">({props.price.toFixed(2) + '€'})</span>
      </td>
      <td className="text-xl font-light pl-1 w-9">{props.quantity > 0 ? ` x${props.quantity}` : null}</td>
      <td className="text-xl font-bold pl-2">
        {props.disabled
          ? <Button disabled={true} btnStyle="disabled" style={{ padding: '5px 16px', margin: '6px 0 6px 10px' }}>-</Button>
          : <Button onClick={props.onClickMinus} style={{ padding: '5px 16px', margin: '6px 0 6px 10px' }}>-</Button>
        }
        <Button onClick={props.onClickPlus} style={{ padding: '5px 14px', margin: '6px 0 6px 10px' }}>+</Button>
      </td>
    </tr>
  )
}

export default BurgerControl