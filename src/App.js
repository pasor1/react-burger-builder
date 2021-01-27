import React from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={CheckOut} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
