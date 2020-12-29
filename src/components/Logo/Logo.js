import React from 'react';
import styles from './Logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

const logo = () => (
  <div className={styles.logo}>
    <img src={burgerLogo} alt="Burger Builder Logo" />
  </div>
)

export default logo;