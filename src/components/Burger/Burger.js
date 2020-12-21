import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = (props) => {
  let counter = 100;
  const packedIngredients = props.ingredients.length ? (
    props.ingredients.map((ingredient, index) => {
      counter = counter - 1;
      return <BurgerIngredient key={index} type={ingredient} style={{ zIndex: counter }} />
    })
  ) : null; //change null if you want to show a message if the burger is empty

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" style={{ zIndex: '100' }} />
      {packedIngredients}
      <BurgerIngredient type="bread-bottom" style={{ zIndex: '1' }} />
    </div>
  )
}

export default Burger;