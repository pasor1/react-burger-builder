import React from 'react';
import Navigation from '../Navigation';
import styles from './SideDrawler.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import closeHamburgerMenu from '../../../assets/images/closeHamburgerMenu.png';

const sideDrawler = (props) => {
  let attachedClasses = props.visible ? [styles.SideDrawler, styles.Open].join(' ') : [styles.SideDrawler, styles.Close].join(' ');
  return (
    <>
      <Backdrop visible={props.visible} onClickBackdrop={props.hidden} />
      <div className={attachedClasses}>
        <div className={styles.CloseIcon}>
          <img src={closeHamburgerMenu} alt="Close Menu" onClick={props.hidden} />
        </div>
        <Navigation onclick={props.hidden} />
      </div>
    </>
  )
};

export default sideDrawler;