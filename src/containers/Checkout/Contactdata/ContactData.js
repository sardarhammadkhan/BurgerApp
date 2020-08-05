import React, { Component } from "react";
import styles from "./ContactData.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import Input from "../../../UI/Input/Input";
class ContactData extends Component {
  state = {
    orderDetails: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your zip-code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your country",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "your Mail",
        },
        value: "",
      },
      diliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  sendOrder = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData ={};
     for(let identifier in this.state.orderDetails){
        formData[identifier]=  this.state.orderDetails[identifier].value
     } 
    const orders = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderDetails:formData
    };
    axios
      .post("https://burger-builder-22cf7.firebaseio.com/orders.json", orders)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/Burger-app");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
   changing=(event,InputIdentifier)=>{
      const mainState= {...this.state.orderDetails}
         const inside= {...mainState[InputIdentifier] }
         inside.value = event.target.value
          mainState[InputIdentifier]=inside  
         this.setState({orderDetails:mainState})
   }
  render() {
    const formElements = [];
    for (let key in this.state.orderDetails) {
      formElements.push({
        id: key,
        rightSide: this.state.orderDetails[key],
      });
      console.log(formElements);
    }

    let form = (
      <form onSubmit={this.sendOrder}>
        {formElements.map((eachInput) => {
          return (
            <Input
              type={eachInput.rightSide.elementType}
              elementConfig={eachInput.rightSide.elementConfig}
              value={eachInput.rightSide.value}
              changed={(event)=>this.changing(event,eachInput.id)}
            />
          );
        })}
        <button
          style={{ marginTop: "5px", background: "green" }}
          type="submit"
        
          
        >
          Order
        </button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={styles.contact}>
        <p style={{ fontWeight: "bold" }}>Enter your contact data</p>
        {form}
      </div>
    );
  }
}
export default withRouter(ContactData);
