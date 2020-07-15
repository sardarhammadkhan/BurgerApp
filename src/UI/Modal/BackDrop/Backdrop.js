import React from 'react'
import styles from './BackDrop.module.css'
const  Backdrop=(props) =>{
    return (
        props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div>:null
       
    )
}

export default Backdrop
