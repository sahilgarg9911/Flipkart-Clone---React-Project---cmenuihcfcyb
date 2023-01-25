import React from 'react'
import '../styles/App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import store from '../store/store';

import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import Login from '../components/Login/Login';
import Orders from '../components/Order.js/Orders';
import Profile from '../components/Profile/Profile';
import Checkout from '../components/Checkout/Checkout';
import Signupform from '../components/Signupform/Signupform';




const App = () => {


    return ( <
        div id = "main" >
        <
        Provider store = { store } >
        <
        div className = "App" >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = '/'
        element = {
            [ < Header / > , < Home / > , < Footer / > ]
        }
        /> <
        Route path = "/cart"
        element = {
            [ < Header / > , < Cart / > , < Footer / > ]
        }
        /> <
        Route path = '/Login'
        element = {
            [ < Login / > ]
        } > < /Route> <
        Route path = '/Signup'
        element = {
            [ < Header / > , < Signupform / > ]
        } > < /Route>      <
        Route path = '/Orders'
        element = {
            [ < Header / > , < Orders / > , < Footer / > ]
        }
        /> <
        Route path = '/Profile'
        element = {
            [ < Header / > , < Profile / > ]
        } > < /Route> <
        Route path = '/Checkout/:id'
        element = {
            [ < Header / > , < Checkout / > , < Footer / > ]
        }
        /> <
        Route path = '/Cart/Checkout/:id'
        element = {
            [ < Header / > , < Checkout / > , < Footer / > ]
        }
        /> < /
        Routes > <
        /BrowserRouter> < /
        div > <
        /Provider>

        <
        /div>
    )
}


export default App;