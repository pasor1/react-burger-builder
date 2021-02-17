import React from 'react';
import styles from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
  <li className={styles.navItem}>
    <NavLink to={props.href} exact={props.exact} activeClassName={styles.active} onClick={props.onclick}>
      {props.children}
    </NavLink>
  </li>
)

export default NavigationItem;