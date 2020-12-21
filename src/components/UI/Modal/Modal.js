import React from 'react';
import styles from './Modal.module.css'

const modal = (props) => {
  return (
    <div>
      <div className={styles.ModalBackdrop} onClick={props.onClickBackdrop}
        style={{
          display: props.visible ? 'block' : 'none'
        }}></div>
      <div className={styles.Modal}
        style={{
          transform: props.visible ? 'translateY(0)' : 'translateY(-100px)',
          opacity: props.visible ? '1' : '0',
          display: props.visible ? 'block' : 'none'
        }}>
        {props.children}
      </div>
    </div >
  )

}

export default modal;