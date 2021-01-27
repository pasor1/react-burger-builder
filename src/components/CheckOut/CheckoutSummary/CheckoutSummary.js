import React from 'react'
import styles from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = props => (
  <div className={styles.checkoutSummary}>
    <h1>Yummy !!!!</h1>
    <div className={styles.burgerContainer}>
      <Burger ingredients={props.ingredients} />
    </div>
    <div className="text-center">
      <Button btnStyle="danger" onClick={props.onClickCancel}>Cancel</Button>
      <Button btnStyle="success" onClick={props.onClickConfirm}>Confirm</Button>
    </div>
  </div>
)

export default checkoutSummary