import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls=[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

const BuildControls =(props) =>{
    return (

        <div className={styles.BuildControls}>
            <p>Price:<strong>{props.price.toFixed(2)}</strong></p>
         {controls.map(ctr=>{
             return <BuildControl
              key={ctr.label} 
              label={ctr.label}
              added={()=>props.adding(ctr.type)}
              removed ={()=>props.removing(ctr.type)}
              />
         }) }
         <button className={styles.OrderButton}
              disabled={!props.purchaseable}
              onClick={props.purchased}
              >Order Now</button>
        </div>
    )
}

export default BuildControls
