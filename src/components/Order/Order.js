import React from 'react';
import styles from './Order.module.css';

const Order = (props) => (
  <li className={`${styles.OrderItem} text-xl`}>
    <b>{`${new Date(props.order.timestamp).toLocaleDateString("it-IT")} - ${new Date(props.order.timestamp).toLocaleTimeString("it-IT")}`}</b>
    <p class="capitalize">Ingredients: {props.order.ingredients.join(', ')}
      <br /> Price: {parseFloat(props.order.price).toFixed(2)}€
      <br /><span className="text-sm">Ref: {props.order.id}</span>
    </p>
  </li>
)

export default Order;
