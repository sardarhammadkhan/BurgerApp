import React from 'react'
import styles from './Navigation.module.css'
import {NavLink} from 'react-router-dom'
import Toolbar from '../../Navigation/Toolbar/Toolbar'
import Order from '../../Order/Order'
const Navigation=(props)=> {
    return (
        <div >
            <ul className={styles.item} style={{listStyle:"none",paddingLeft:"4px",}}>
                <li style={{ marginBottom: "10px", color: "brown" }}>     
                <NavLink activeClassName={styles.active} to='/Burger-App' >Burger Builder</NavLink></li>
                <li style={{ marginBottom: "10px", color: "brown"}} >
                    <NavLink activeClassName={styles.active} to='/Order'>Orders</NavLink></li>
            </ul>
            
        </div>
        
    )
}

export default Navigation
 