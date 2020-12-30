import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Layout.module.css';
import SideDrawler from '../../components/Navigation/SideDrawler/SideDrawler';

class Layout extends React.Component {
  state = {
    showSideDrawler: false
  }

  sideDrawlerCloseHandler = () => {
    this.setState({
      showSideDrawler: false
    })
  }

  sideDrawlerOpenHandler = () => {
    this.setState({
      showSideDrawler: true
    })
  }

  render() {
    return (
      <>
        <Header openSideDrawler={this.sideDrawlerOpenHandler} />
        <SideDrawler
          visible={this.state.showSideDrawler}
          hidden={this.sideDrawlerCloseHandler} />
        <main className={styles.MainContainer}>
          {this.props.children}
        </main>
        <Footer />
      </>
    )
  }
}

export default Layout;