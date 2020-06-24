import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import userReducer from './userReducer';
import {Provider} from 'react-redux'

let initialState = [
    {id:1,name:'Bhagat Singh',mobile:8756245901,email:' xyz123@gmail.com'},
    {id:2,name:'Chandra Sekhar Azaad',mobile:8756245902,email:' pqr234@gmail.com'},
    {id:3,name:'Santosh Babu',mobile:8756245903,email:' mno345@gmail.com'},
    {id:4,name:'Susant Singh Rajput',mobile:8756245904,email:' abc456@gmail.com'}
    ];

   
if( localStorage.getItem("users") === null){
    console.log('coming hre');
    localStorage.setItem('users',JSON.stringify(initialState));
}
else 
initialState = JSON.parse(localStorage.getItem('users'));

const store = createStore(userReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));


//serviceWorker.unregister();

