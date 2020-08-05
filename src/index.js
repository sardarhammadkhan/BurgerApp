import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';

const app=(
  <BrowserRouter> 
  <App/>
  </BrowserRouter>
)

ReactDOM.render( app ,  document.getElementById('root'));


serviceWorker.unregister();
