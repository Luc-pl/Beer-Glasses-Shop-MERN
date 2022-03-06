/* eslint-disable linebreak-style */

/* selectors */
export const getOrder = (state) => state.order;

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCTS = createActionName('ADD_PRODUCTS');

/* action creators */
export const addProducts = payload => ({ payload, type: ADD_PRODUCTS });


/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return {
        ...statePart,
        products: action.payload,
      };
    }
    default:
      return statePart;
  }
}