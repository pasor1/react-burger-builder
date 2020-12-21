import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';
import imgBurgerBreadBottom from '../../../assets/images/burger-bread-bottom.svg';
import imgBurgerBreadTop from '../../../assets/images/burger-bread-top.svg';
import imgBurgerMeat from '../../../assets/images/burger-meat.svg';
import imgBurgerCheese from '../../../assets/images/burger-cheese.svg';
import imgBurgerSalad from '../../../assets/images/burger-salad.svg';
import imgBurgerTomato from '../../../assets/images/burger-tomato.svg';

const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={styles.BreadBottom} style={props.style}><img src={imgBurgerBreadBottom} alt="Burger Bread Bottom" /></div>;
      break;
    case ('bread-top'):
      ingredient = <div className={styles.BreadTop} style={props.style}><img src={imgBurgerBreadTop} alt="Burger Bread Top" /></div>;
      break;
    case ('meat'):
      ingredient = <div className={styles.Meat} style={props.style}><img src={imgBurgerMeat} alt="Meat" /></div>;
      break;
    case ('cheese'):
      ingredient = <div className={styles.Cheese} style={props.style}><img src={imgBurgerCheese} alt="Cheese" /></div>;
      break;
    case ('salad'):
      ingredient = <div className={styles.Salad} style={props.style}><img src={imgBurgerSalad} alt="Salad" /></div>;
      break;
    case ('tomato'):
      ingredient = <div className={styles.Tomato} style={props.style}><img src={imgBurgerTomato} alt="Tomato" /></div>;
      break;
    default:
      ingredient = null;
  }
  return (
    ingredient

  )
}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient;