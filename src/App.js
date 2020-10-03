import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Products from './containers/Products/Products'
import ShoppingCart from './containers/Shopping-cart/Shopping-cart'
import Confirm from './containers/Confirm/Confirm'



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/confirm' component={Confirm}/>
        <Route path='/cart' component={ShoppingCart}/>
        <Route path='/' component={Products}/>
      </Switch>
    </Layout>
  );
}

export default App;
