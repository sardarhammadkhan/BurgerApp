import axios from 'axios'

 const instance = axios.create({
     baseURL:'https://burger-builder-22cf7.firebaseio.com/'
 })


export default instance
