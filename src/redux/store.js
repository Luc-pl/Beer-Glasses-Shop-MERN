/* eslint-disable linebreak-style */
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './loginRedux';
import cartReducer from './cartRedux';
import orderReducer from './orderRedux';
import { initialState } from './initialState';
import productsReducer from './productsRedux';
import userReducer from './userRedux';

// define reducers
const reducers = {
  products: productsReducer,
  isLogged: loginReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
