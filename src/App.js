import React, { Component } from "react";
import Layouts from './components/Layouts/Layouts'
 import BurgerBuilder from './containers/BurgerBuilder/BurgerBuiler'

import BurgerIngredient from './components/Burger/BurgerIngredient/BurgerIngredient'
class App extends Component {
  render() {
    return (
      <div >
      
        <Layouts>

          <BurgerBuilder />

        </Layouts>
      </div>
    );
  }
}
export default App;
