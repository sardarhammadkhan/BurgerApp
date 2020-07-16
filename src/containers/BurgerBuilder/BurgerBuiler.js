import Burger from "../../components/Burger/Burger";
import Modal from "../../UI/Modal/Modal";
import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../OrderSummary/OrderSummary";
import { object } from "prop-types";
const INGREDIENT_PRICES = {
  salad: 0.1,
  bacon: 0.2,
  cheese: 0.5,
  meat: 0.8,
};

class BurgerBuiler extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    purchaseable: false,
    totalPrice: 4,
    isPurchasing: false,
  };
  updatePurchaseStae = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  addingMore = (type) => {
    const oldCount = this.state.ingredients[type];

    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    const additionalPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + additionalPrice;

    updateIngredients[type] = updatedCount;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });

    this.updatePurchaseStae(updateIngredients);
  };
  Removing = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    const additionalPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - additionalPrice;

    updateIngredients[type] = updatedCount;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    this.updatePurchaseStae(updateIngredients);
  };

  purchasing = () => {
    this.setState({ isPurchasing: true });
  };
  ghayab = () => {
    this.setState({ isPurchasing: false });
  };

 jari =()=>{
   alert('you are continueing')
 }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />

        <Modal show={this.state.isPurchasing} disapear={this.ghayab}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            dis={this.ghayab}
            conti={this.jari}
          />
        </Modal>

        <BuildControls
          adding={this.addingMore}
          removing={this.Removing}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          purchased={this.purchasing}
        />
      </div>
    );
  }
}

export default BurgerBuiler;
