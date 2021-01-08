import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.visible !== this.props.visible || nextProps.children !== this.props.children;
  }
  render() {
    return (
      <div>
        <Backdrop visible={this.props.visible} onClickBackdrop={this.props.onClickBackdrop} />
        <div className={styles.Modal}
          style={{
            transform: this.props.visible ? 'translateY(0)' : 'translateY(-100px)',
            opacity: this.props.visible ? '1' : '0',
            display: this.props.visible ? 'block' : 'none'
          }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;