import React from 'react';

const totalPrice = (props) => <>Total Price: <span className="text-2xl font-bold">{props.totalPrice.toFixed(2)}€</span></>;

export default totalPrice;

