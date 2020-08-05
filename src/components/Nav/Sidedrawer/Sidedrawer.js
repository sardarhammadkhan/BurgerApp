import React, { Fragment } from "react";
import Logo from "../../../UI/Logo/Logo";
import styles from "./sidedrawer.module.css";
import Navigation from "../../Nav/Navigationbar/Navigation";
import BackDrop from "../../../UI/Modal/BackDrop/Backdrop";
const Sidedrawer = (props) => {
  return (
    <Fragment>
      <BackDrop show={props.open} clicked={props.closed} />
      {(props.open) ?
       <div className={styles.sidedrawer} show={true}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <nav>
            <Navigation />
          </nav>
      </div>:null
      } 
    </Fragment>
  
  );
};

export default Sidedrawer;
