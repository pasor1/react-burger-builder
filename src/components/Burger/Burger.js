import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = (props) => {

  const packedIngredients = props.ingredients.length ? (
    props.ingredients.map((ingredient, index) => {
      return <BurgerIngredient key={index} type={ingredient} />
    })
  ) : null; //change null if you want to show a message if the burger is empty

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {packedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;