import React from 'react'
import HamburgerLogo from '../../assest/images/icon.png'
import styles from './Hamburger.module.css'
const Hambuger=(props)=> {
    return (
        <div onClick={props.opening}>
            <img className={styles} src={HamburgerLogo} onClick={props.openit}/>
        </div>
    )
}

export default Hambuger
