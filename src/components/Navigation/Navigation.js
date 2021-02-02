import React from 'react';
import styles from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props) => (
  <nav>
    <ul className={styles.navItems}>
      <NavigationItem href="/" exact active>Builder</NavigationItem>
      <NavigationItem href="/orders">Orders</NavigationItem>
    </ul>
  </nav>
)

export default navigation;