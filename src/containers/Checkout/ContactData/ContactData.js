import React from 'react';
import styles from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../config/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input/Input';
import { connect } from 'react-redux';

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        inputtype: 'input',
        type: 'text',
        label: 'Name',
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'Please enter your Name',
        validation: {
          required: true,
          minLength: 2,
        }
      },
      email: {
        inputtype: 'input',
        type: 'text',
        label: 'Email',
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'Please enter a valid Email address',
        validation: {
          required: true,
          minLength: 6,
          isEmail: true
        }
      },
      country: {
        inputtype: 'selectCountry',
        label: 'Country',
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'Please select your Country',
        validation: {
          required: true,
        }
      },
      city: {
        inputtype: 'input',
        type: 'text',
        label: 'City',
        value: '',
        valid: false,
        touched: false,
        errorMessage: 'Please enter your City',
        validation: {
          required: true,
          minLength: 1,
        }
      },
      deliveryMethod: {
        inputtype: 'select',
        label: 'Delivery',
        options: [['fastest', 'Fastest'], ['cheapest', 'Cheapest']],
        value: 'fastest',
        valid: true,
        touched: false,
      },
      note: {
        inputtype: 'textarea',
        label: 'Note',
        value: '',
        valid: true,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false
  }

  setTouchedAll = () => {
    const updatedOrderForm = { ...this.state.orderForm };
    for (let key in updatedOrderForm) {
      updatedOrderForm[key].touched = true;
    }
    this.setState({
      orderForm: updatedOrderForm
    })
  }

  checkFormValidity = () => {
    let isValid = true;
    for (let key in this.state.orderForm) {
      isValid = this.state.orderForm[key].valid && isValid;
    }
    this.setState({
      formIsValid: isValid
    })
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    this.setTouchedAll();
    if (!this.state.formIsValid) { return null }
    this.setState({ loading: true });
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingredientsRdx,
      price: this.props.totalPriceRdx,
      timestamp: Date.now(),
      order: formData
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/orders');
      })
      .catch(error => {
        this.setState({
          loading: false
        })
      })
  }

  checkInputValidity = (value, rules) => {
    let isValid = true;
    if (rules && rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules && rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules && rules.isEmail) {
      isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    }
    return isValid;
  }

  inputChangeHandler = (event) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedStateElement = { ...updatedOrderForm[event.target.name] }
    updatedStateElement.value = event.target.value;
    updatedStateElement.valid = this.checkInputValidity(updatedStateElement.value, updatedStateElement.validation);
    updatedStateElement.touched = true;
    updatedOrderForm[event.target.name] = updatedStateElement;
    this.setState({
      orderForm: updatedOrderForm
    }, this.checkFormValidity)
  }

  render() {

    let orderFormArray = [];
    for (let inputElement in this.state.orderForm) {
      orderFormArray.push(
        <Input key={inputElement}
          name={inputElement}
          onChange={this.inputChangeHandler}
          invalid={!this.state.orderForm[inputElement].valid}
          {...this.state.orderForm[inputElement]} />
      )
    }

    let form = (
      <form onSubmit={this.submitFormHandler}>
        {orderFormArray}
        <div className="text-center">
          <Button btnStyle={this.state.formIsValid ? 'success' : null}>ORDER NOW</Button>
        </div>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={styles.formContainer}>
        <h2 className="text-4xl font-extrabold mb-10 text-center">Your contact data</h2>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredientsRdx: state.ingredients,
    totalPriceRdx: state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData)
