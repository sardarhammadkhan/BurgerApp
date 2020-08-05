import React from 'react'
import burgerLogo from '../../assest/images/burgerlogo.png'
import styles from './Logo.module.css'
const Logo=(props)=> {
    return (
        <div className={styles.logo} style={{height:props.height}}>
            <img src={burgerLogo} />
        </div>
    )
}

export default Logo
