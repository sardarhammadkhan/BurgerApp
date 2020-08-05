import React, { Component } from 'react'
import Order from '../components/Order/Order'
import axios from 'axios'
 class Orders extends Component {
state={
    orders:[]
}
     
    componentDidMount(){

    axios.get('https://burger-builder-22cf7.firebaseio.com/orders.json')
    .then(response=>{
     const fetchData =[];
     for(let key in response.data)
      fetchData.push({
      ...response.data[key],
    id:key
    })
     this.setState({orders:fetchData})
    })
  
}

    render() {
        return (
            <div>
               {this.state.orders.map(order=>(
                  <Order ingredients={order.ingredients} price={order.price}/>
               ))}
            </div>
        )
    }
}
export default Orders