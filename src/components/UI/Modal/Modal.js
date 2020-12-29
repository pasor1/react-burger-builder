import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const modal = (props) => {
  return (
    <div>
      <Backdrop visible={props.visible} onClickBackdrop={props.onClickBackdrop} />
      <div className={styles.Modal}
        style={{
          transform: props.visible ? 'translateY(0)' : 'translateY(-100px)',
          opacity: props.visible ? '1' : '0',
          display: props.visible ? 'block' : 'none'
        }}>
        {props.children}
      </div>
    </div>
  )
}

export default modal;