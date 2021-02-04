import React from 'react';
import styles from './Orders.module.css';
import Axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';


class Orders extends React.Component {

  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true })
    Axios.get('/orders.json')
      .then(response => {
        const orders = [];
        for (const key in response.data) {
          orders.push({ ...response.data[key], id: key })
        }
        this.setState({ orders: orders.reverse(), loading: false })
      })
      .catch(error => {
        this.setState({ loading: false })
        console.log(error)
      })
  }



  render() {
    const output = this.state.loading ? <Spinner /> : (
      <ul>
        {
          this.state.orders.length
            ? (this.state.orders.map((order, index) => (
              <Order key={order.id} order={order} />
            ))
            )
            : <h3 className="text-2xl text-red-600 text-center my-20">You don't have any orders yet</h3>
        }
      </ul>
    )
    return (
      <div className={styles.OrdersContainer}>
        <h2 className="text-4xl font-extrabold mb-5 text-center">Your Orders</h2>
        { output}
      </div>
    );
  }
}

export default Orders;