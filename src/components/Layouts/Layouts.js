import React, { Fragment } from 'react'

import styles from './Layouts.module.css'
 const  Layouts = (props)=> {
    return (
     <Fragment>
   
        <div className={styles.content}>
          <main>
            {props.children}
        </main>
        </div>
      </Fragment>
    );
}
export default Layouts