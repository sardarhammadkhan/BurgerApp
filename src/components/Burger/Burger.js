import React from 'react'
import styles from '../Burger/Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
 const Burger=(props)=> {
   let transformedIngredints = [...Object.keys(props.ingredients)] .map(igkey=>{
     return [...Array(props.ingredients[igkey])].map((_,i)=>{
       return <BurgerIngredient key={igkey  + i}  type={igkey}/>  
     })
   })
    
    .reduce((arr,c)=>{
      return arr.concat(c)
     },[]);
   
    if(transformedIngredints.length===0){
       transformedIngredints = <p>Please add some ingridents</p>
   }

  
    return (
      <div className={styles.Burger}>
        <BurgerIngredient type="bread-top" />
          {transformedIngredints}
        <BurgerIngredient type="bread-bottom" />
     
      </div>
    );
}

export default Burger
