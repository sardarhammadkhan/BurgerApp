import React, { Fragment } from 'react';
import styles from './Modal.module.css'

import BackDrop from './BackDrop/Backdrop'
const Modal = (props) => {
    return (
        <Fragment>
           <BackDrop show={props.show} clicked={props.disapear} />
        <div 
        className={styles.Modal}
        style={{
         transform:props.show?'translateY(0)':'translateY(-100vh)'

        }}
        >
            {props.children}
        </div>
        </Fragment>
    )
}

export default Modal
