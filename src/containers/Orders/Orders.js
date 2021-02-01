import React from 'react';
import styles from './Orders.module.css';
import Axios from '../../axios-orders';
import axios from 'axios';

class Orders extends React.Component {

  componentDidMount() {
    Axios.get('/orders.json')
      .then(response => {
        const orders = [];
        for (const prop in response.data) {
          orders.push(response.data[prop])
        }
        console.log(orders)
      })
      .catch(error => console.log(error))
  }



  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Orders;