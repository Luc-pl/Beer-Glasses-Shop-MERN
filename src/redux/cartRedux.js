/* eslint-disable linebreak-style */

/* selectors */
export const getCart = (state) => state.cart;


/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_CART_ITEM_QUANTITY = createActionName('UPDATE_CART_ITEM_QUANTITY');
const UPDATE_CART_ITEM_INFO = createActionName('UPDATE_CART_ITEM_INFO');


/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const clearCart = payload => ({ payload, type: CLEAR_CART });
export const updateCartItemQuantity = payload => ({ payload, type: UPDATE_CART_ITEM_QUANTITY });
export const updateCartItemInfo = payload => ({ payload, type: UPDATE_CART_ITEM_INFO });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      return [
        ...statePart,
        action.payload,
      ];
    }
    case REMOVE_FROM_CART: {
      return [
        ...statePart,
        action.payload,
      ];
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