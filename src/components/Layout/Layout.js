import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const layout = (props) => (
  <>
    <Header />
    <main className={styles.MainContainer}>
      {props.children}
    </main>
    <Footer />
  </>
)

export default layout;