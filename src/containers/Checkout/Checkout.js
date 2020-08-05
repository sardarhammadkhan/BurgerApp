import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import styles from './Checkout.module.css'
import {Route} from 'react-router-dom'
import ContactData from './Contactdata/ContactData'
class Checkout extends Component {
  
  state = {
    ingredients: null,
    totalPrice:0
  };
componentWillMount(){

  const query = new URLSearchParams(this.props.location.search);
  const URLIngredients ={}
  let price =0
  for(let param of  query.entries()){
    if(param[0] =='price'){
      price = +param[1]
    }else{
      URLIngredients[param[0]] = +param[1]
    }

   
  }
  this.setState({ingredients:URLIngredients,totalPrice:price})
}

 chekoutCanceled=()=>{
   this.props.history.goBack();
 }
chekoutContinue=()=>{
  this.props.history.replace('/checkout/contact-data')
 
  
}

   render() {
    return (
      <div className={styles.bg}>
        <h1 style={{marginBottom:'50px'}}>We hope it taste well</h1>
      <Burger ingredients={this.state.ingredients}/>
        <button onClick={this.chekoutCanceled}  className="btn btn-danger mr-5 p-2">Cancel</button>
        <button onClick={this.chekoutContinue} className="btn btn-primary p-2">Continue</button>
        <Route path={this.props.match.url + '/contact-data'} 
        render={() => (<ContactData ingredients={this.state.ingredients } price={this.state.totalPrice} />)} />
      </div>
    );
  }
}
export default Checkout
