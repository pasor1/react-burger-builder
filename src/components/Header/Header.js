import React from 'react';
import styles from './Header.module.css'
import burgerLogo from '../../assets/images/logo.png'

const header = () => (
  <header className={styles.Header}>
    <div className={styles.logo}>
      <img src={burgerLogo} alt="Burger Builder Logo" />
    </div>
    <nav>
      <ul className={styles.navItems}>
        <li><a href="/">Link 1</a></li>
        <li><a href="/">Link 2</a></li>
        <li><a href="/">Link 3</a></li>
        <li><a href="/">Link 4</a></li>
      </ul>
    </nav>
  </header >
)

export default header;