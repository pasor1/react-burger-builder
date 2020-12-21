import React from 'react';
import styles from './Button.module.css';

const button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={[styles.Button, styles[props.btnStyle]].join(' ')}
      disabled={props.disabled}
      style={props.style}>
      {props.children}
    </button>
  )
}

export default button;