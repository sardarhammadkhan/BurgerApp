import Burger from "../../components/Burger/Burger";
import Modal from "../../UI/Modal/Modal";
import React, { Component, Fragment } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../OrderSummary/OrderSummary";
import { object } from "prop-types";
import axios from '../../axios-order'
import Spinner from '../../UI/Spinner/Spinner'


const INGREDIENT_PRICES = {
  salad: 0.1,
  bacon: 0.2,
  cheese: 0.5,
  meat: 0.8,
};

class BurgerBuiler extends Component {

  state = {
    ingredients: null,
    purchaseable: false,
    totalPrice: 4,
    isPurchasing: false,
    loading:false
  };


  componentDidMount(){
    
    axios.get('https://burger-builder-22cf7.firebaseio.com/ingredients.json')
    .then(response=>{
      this.setState({ingredients:response.data})
    })
  }

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

 
  const queryParams=[]
  for(let i in this.state.ingredients ){
    queryParams.push(encodeURIComponent(i) + '='+ encodeURIComponent(this.state.ingredients[i]))
  }
  queryParams.push('price=' +this.state.totalPrice)
  const queryString =queryParams.join('&')
  this.props.history.push({
    pathname:'/checkout/',
    search:'?' + queryString
  })
   
 }
  render() {
    

    let orderSummary =  null
    

  let burger =<Spinner/>
  if(this.state.ingredients){
    burger=(
    <Fragment>
    <Burger ingredients={this.state.ingredients} />
      <BuildControls
        adding={this.addingMore}
        removing={this.Removing}
        price={this.state.totalPrice}
        purchaseable={this.state.purchaseable}
        purchased={this.purchasing}
      />
    </Fragment>
    )
     orderSummary= < OrderSummary
    ingredients = { this.state.ingredients }
    price = { this.state.totalPrice }
    dis = { this.ghayab }
    conti = { this.jari }
      />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
  }

    return (
      <div>
     
        <Modal show={this.state.isPurchasing} disapear={this.ghayab}>
      {orderSummary}
        </Modal>
       {burger}
      </div>
    );
  }
}

export default  BurgerBuiler;
