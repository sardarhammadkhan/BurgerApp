
import React, { Fragment } from 'react'



const OrderSummary = (props) => {
  const ingredientlist = Object.keys(props.ingredients)
  .map(igkey => {
    return <li><span style={{ textTransform: "capitalize" }}>{igkey}</span>: {props.ingredients[igkey]}</li>
    
  })
  return (

    <Fragment >
      <h1>Price summary</h1>
      <ul>
        {ingredientlist}
      </ul>
      <p> Total Price:<strong>{props.price.toFixed(2)}</strong></p>
      <p>Cntinue to checkout? </p>
      <button className="btn btn-danger mr-3 " onClick={props.dis}>CANCEL</button>
      <button className="btn btn-primary" onClick={props.conti}>CONNTINUE</button>
    </Fragment>
  )
}

export default OrderSummary


























