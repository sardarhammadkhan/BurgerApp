import React, { Component } from "react";
import Layouts from './containers/Layouts/Layouts'
 import BurgerBulder from './containers/BurgerBuilder/BurgerBulder'
import {Route,Switch } from 'react-router-dom'
import BurgerIngredient from './components/Burger/BurgerIngredient/BurgerIngredient'
import Checkout from './containers/Checkout/Checkout'
import BurgerBuiler from "./containers/BurgerBuilder/BurgerBulder";
import Orders from './containers/Orders'
class App extends Component {


  render() {
    return (
      <div>
        <Layouts>
       
       <Switch>
           <Route path="/checkout"  component={Checkout} />
            <Route path="/Order" component={Orders} />
          <Route path="/Burger-App" exact component={BurgerBuiler} />
          </Switch>
        </Layouts>
      </div>
    );
  }
}
export default App;
