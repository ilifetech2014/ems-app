import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import{productListReducer,productDetailsReducer, productSaveReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import{cartReducer} from './reducers/cartReducers';
import { userLoginReducer, userRegisterReducer} from './reducers/userReducers';


const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') ||null;
const initialState= {cart:{cartItems},userLogin :{userInfo}};

const reducer = combineReducers
({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer
    
  });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));



  export default store;