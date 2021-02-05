import React from 'react';
import styles from './Input.module.css';
import countries from './countries.json';

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [styles.inputElementContainer];
  let showErrorMessage = false;

  if (props.invalid && props.touched) {
    inputClasses.push(styles.invalid);
    showErrorMessage = true;
  }

  switch (props.inputtype) {
    case 'input':
      inputElement = <input className={styles.input} {...props} />
      break;
    case 'textarea':
      inputElement = <textarea className={styles.input} {...props}></textarea>
      break;
    case 'select':
      inputElement = (
        <select className={styles.input} {...props}>
          {props.options.map(option => <option key={option[0]} value={option[0]}>{option[1]}</option>)}
        </select>
      )
      break;
    case 'selectCountry':
      inputElement = (
        <select className={styles.input} {...props}>
          <option></option>
          {countries.map(country => <option key={country.value} value={country.label}>{country.label}</option>)}
        </select>
      )
      break;
    default:
      break;
  }
  return (
    <div className={inputClasses.join(' ')}>
      <label htmlFor={props.name}>{props.label}</label>
      {inputElement}
      <div className={styles.errorMessage}>{showErrorMessage ? props.errorMessage : null}</div>
    </div>
  )
}

export default Input