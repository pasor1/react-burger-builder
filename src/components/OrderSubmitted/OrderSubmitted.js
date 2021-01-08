import React from 'react';
import Button from '../UI/Button/Button'

const orderSummary = (props) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-extrabold mb-5">Thanks...</h3>
      <div className="m-auto inline-block text-center">
        Thanks for your order. Your awesome burger will be ready as soon as.
      </div>
      <div className="text-center mt-5">
        <Button btnStyle="danger" onClick={props.onClickClose}>Close</Button>
      </div>
    </div>
  )
}

export default orderSummary