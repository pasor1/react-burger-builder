import React from 'react';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      country: '',
      city: '',
      street: '',
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Paso',
        email: 'pasor1@gmail.com',
        address: {
          city: 'Venegono Inferiore',
          street: 'Via Pianbosco',
          country: 'Italy'
        }
      }
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="country" placeholder="Your Country" />
        <input type="text" name="city" placeholder="Your City" />
        <input type="text" name="street" placeholder="Your Streen" />
        <Button btnStyle="success">ORDER NOW</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={styles.formContainer}>
        <h4>Enter your contact data</h4>
        { form}
      </div>
    )
  }
}

export default ContactData
