import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../../UI/Logo/Logo'
import Navigation from '../../Nav/Navigationbar/Navigation'
import Hamburger from '../../../UI/Hamburger/Hambuger'

const Toolbar=(props)=> {
    

    return (
      <header className={styles.toolbar}>
        <Hamburger opening={props.handelingSideDrawer} />

        <Logo />
        <nav className={styles.Desktop}>
         
            <Navigation link="/" active={true} />
        
        </nav>
      </header>
    );
}

export default Toolbar
