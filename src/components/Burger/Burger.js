import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = (props) => {

  const packedIngredients = props.ingredients.length ? (
    props.ingredients.map((ingredient, index) => {
      return <BurgerIngredient key={index} type={ingredient} />
    })
  ) : (
      <p>Please insert your ingredients</p>
    )

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {packedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger;