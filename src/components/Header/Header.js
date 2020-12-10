import React from 'react';
import styles from './Header.module.css'

const header = () => (
  <header className={styles.Header}>
    <h1 className="text-3xl font-bold">Header</h1>
    <h2 className="text-lg">Navigation</h2>
  </header >
)

export default header;