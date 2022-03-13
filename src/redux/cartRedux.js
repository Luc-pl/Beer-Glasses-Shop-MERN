/* eslint-disable linebreak-style */
import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getCart = (state) => state.cart;


/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_CART = createActionName('UPDATE_CART');
const UPDATE_CART_ITEM_QUANTITY = createActionName('UPDATE_CART_ITEM_QUANTITY');
const UPDATE_CART_ITEM_INFO = createActionName('UPDATE_CART_ITEM_INFO');


/* action creators */
export const addToCartCreator = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCartCreator = payload => ({ payload, type: REMOVE_FROM_CART });
export const clearCartCreator = payload => ({ payload, type: CLEAR_CART });
export const updateCart = payload => ({ payload, type: UPDATE_CART });
export const updateCartItemQuantityCreator = payload => ({ payload, type: UPDATE_CART_ITEM_QUANTITY });
export const updateCartItemInfoCreator = payload => ({ payload, type: UPDATE_CART_ITEM_INFO });


/* thunk creators */
export const addToCart = (cartItem) => {
  return (dispatch, getState) => {
    dispatch(addToCartCreator(cartItem));
    const { cart, isLogged, user } = getState();

    if (isLogged) {
      Axios
        .put(`${api.url}/${api.users}/${user.id}`, cart)
        .then(res => {
          console.log(' : addToCart -> res.data', res.data);
        })
        .catch(err => {
          console.log(' : addToCart -> err.message', err.message);
        });
    }
  };
};

export const removeFromCart = (cartId) => {
  return (dispatch, getState) => {
    dispatch(removeFromCartCreator(cartId));
    const { cart, isLogged, user } = getState();

    if (isLogged) {
      Axios
        .put(`${api.url}/${api.users}/${user.id}`, cart)
        .then(res => {
          console.log(' : addToCart -> res.data', res.data);
        })
        .catch(err => {
          console.log(' : addToCart -> err.message', err.message);
        });
    }
  };
};
export const clearCart = () => {
  return (dispatch, getState) => {
    dispatch(clearCartCreator());
    const { cart, isLogged, user } = getState();

    if (isLogged) {
      Axios
        .put(`${api.url}/${api.users}/${user.id}`, cart)
        .then(res => {
          console.log(' : addToCart -> res.data', res.data);
        })
        .catch(err => {
          console.log(' : addToCart -> err.message', err.message);
        });
    }
  };
};

export const updateCartItemQuantity = (obj) => {
  return (dispatch, getState) => {
    dispatch(updateCartItemQuantityCreator(obj));
    const { cart, isLogged, user } = getState();

    if (isLogged) {
      Axios
        .put(`${api.url}/${api.users}/${user.id}`, cart)
        .then(res => {
          console.log(' : addToCart -> res.data', res.data);
        })
        .catch(err => {
          console.log(' : addToCart -> err.message', err.message);
        });
    }
  };
};

export const updateCartItemInfo = (obj) => {
  return (dispatch, getState) => {
    dispatch(updateCartItemInfoCreator(obj));
    const { cart, isLogged, user } = getState();
    localStorage.setItem('cart', JSON.stringify(cart));

    if (isLogged) {
      Axios
        .put(`${api.url}/${api.users}/${user.id}`, cart)
        .then(res => {
          console.log(' : addToCart -> res.data', res.data);
        })
        .catch(err => {
          console.log(' : addToCart -> err.message', err.message);
        });
    }
  };
};


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_CART: {
      return action.payload;
    }
    case ADD_TO_CART: {
      const isItemInCart = statePart.some(cartItem => cartItem.productId === action.payload.productId);

      return isItemInCart
        ? statePart.map(cartItem => cartItem.productId === action.payload.productId
          ?
          {
            ...action.payload,
            quantity: Number(action.payload.quantity) + Number(cartItem.quantity),
          }
          :
          cartItem)
        :
        [
          ...statePart,
          action.payload,
        ];
    }
    case REMOVE_FROM_CART: {
      return statePart.filter(({ productId }) => productId !== action.payload);
    }
    case CLEAR_CART: {
      return [];
    }
    case UPDATE_CART_ITEM_QUANTITY: {
      return statePart.map(cartItem => {
        if (cartItem.productId === action.payload.id && action.payload.quantity > 0) {
          return {
            ...cartItem,
            quantity: action.payload.quantity,
          };
        }
        return cartItem;
      });
    }
    case UPDATE_CART_ITEM_INFO: {
      return statePart.map(cartItem => {
        if (cartItem.productId === action.payload.id) {
          return {
            ...cartItem,
            additionalInfo: action.payload.additionalInfo,
          };
        }
        return cartItem;
      });
    }
    default:
      return statePart;
  }
}