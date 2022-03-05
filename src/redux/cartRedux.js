/* eslint-disable linebreak-style */

/* selectors */
export const getCart = (state) => state.cart;


/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');


/* action creators */
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

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
    default:
      return statePart;
  }
}