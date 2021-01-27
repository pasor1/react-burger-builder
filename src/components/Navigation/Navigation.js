import React from 'react';
import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => (
  <nav>
    <ul className={styles.navItems}>
      <NavigationItem href="/" active>Builder</NavigationItem>
      <NavigationItem href="/checkout">Checkout</NavigationItem>
    </ul>
  </nav>
)

export default navigation;