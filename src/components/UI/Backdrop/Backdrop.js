import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => (
  <div className={styles.Backdrop} onClick={props.onClickBackdrop}
    style={{
      display: props.visible ? 'block' : 'none'
    }}>
  </div>
)

export default backdrop;
