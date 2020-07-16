import React, { Fragment } from 'react'
import Toolbar from '../Navigation/Toolbar/Toobar'
import styles from './Layouts.module.css'
 const  Layouts = (props)=> {
    return (
     <Fragment>
        <Toolbar/>
        <div className={styles.content}>
          <main>
            {props.children}
        </main>
        </div>
      </Fragment>
    );
}
export default Layouts