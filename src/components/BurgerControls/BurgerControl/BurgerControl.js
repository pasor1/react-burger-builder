import React from 'react';
import Button from '../../UI/Button/Button'

const BurgerControl = (props) => {
  return (
    <tr>
      <td>{props.label}</td>
      <td className="font-light text-xs p-3">({props.price.toFixed(2) + '€'})</td>
      <td>{props.quantity > 0 ? ` x${props.quantity}` : null}</td>
      <td className="m-4">
        {props.disabled
          ? <Button disabled={true} btnStyle="disabled" style={{ padding: '1px 9px', margin: '4px' }}>-</Button>
          : <Button onClick={props.onClickMinus} style={{ padding: '1px 9px', margin: '4px' }}>-</Button>
        }
        <Button onClick={props.onClickPlus} style={{ padding: '1px 7px', margin: '4px' }}>+</Button>
      </td>
    </tr>
  )
}

export default BurgerControl