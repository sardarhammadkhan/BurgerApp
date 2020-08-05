import React, { Fragment, Component } from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import styles from './Layouts.module.css'
import Sidedrawer from '../../components/Nav/Sidedrawer/Sidedrawer'
 class  Layouts extends Component {
   state={
     isdrawerOpen:true,
   }
     delete=()=>{
       
       return this.setState({isdrawerOpen:false})
     }
     opening=()=>{
     console.log("opening")
     }

   handelsidedrawer=()=>{
     return this.setState((prevState)=>{
        return{ isdrawerOpen: !prevState.isdrawerOpen }
     }
   
       )
    
   }

   render(){
     return (
       <Fragment>
    
         <Toolbar handelingSideDrawer={this.handelsidedrawer} />
      
         <Sidedrawer open={this.state.isdrawerOpen} closed={this.delete}  />
         <div className={styles.content}>
           <main>
             {this.props.children}
           </main>
         </div>
       </Fragment>
     );
   }
   
}
export default Layouts