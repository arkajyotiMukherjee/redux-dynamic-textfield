import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


const initialState = {
    products: [{product: 'Pixel XL'}],
    user: 'john'
}


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})
const store = createStore(allReducers, initialState, window.devToolsExtension && window.devToolsExtension());



ReactDOM.render(
    <Provider store = {store}>
    <App randomprop = "whatever"/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
