import React from "react";
import styles from ' ../../../src/components/Order/Order.module.css'
const Order=(props)=>  {
    const ingredients =[]
    for( let ingredientNAme in props.ingredients){
      ingredients.push(
        {
          name:ingredientNAme,
          amount:props.ingredients[ingredientNAme] 
        }
      )
    }
   const output = ingredients.map(ig=>{
   return <span style={{textTransform:'capitalize',display:'inline-block',margin:'0 8px',border:'1px solid #ccc',padding:'5px'}}
    key={ig.name}>{ig.name} ({ig.amount})</span>
   })
    return (
      <div className={styles.orders}>
    <p> Ingredients : {output}</p>
    <p>price =<strong>{props.price.toFixed(2)}</strong> </p>
      </div>
    );
  }

export default Order;
