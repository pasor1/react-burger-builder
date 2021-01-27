import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import hamburgerMenu from '../../assets/images/hamburgerMenu.png';

const header = (props) => (
  <header className={styles.Header}>
    <div className={styles.HeaderContainer}>
      <div onClick={props.openSideDrawler} className={styles.MobileOnly}>
        <img src={hamburgerMenu} alt="Open Menu" className={styles.HamburgerMenu} />
      </div>
      <Logo />
      <div className={styles.DesktopOnly}>
        <Navigation />
      </div>
    </div>
  </header>
)

export default header;