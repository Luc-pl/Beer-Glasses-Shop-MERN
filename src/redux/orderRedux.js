/* eslint-disable linebreak-style */
import Axios from 'axios';
import { api } from '../settings';
import { clearCart } from './cartRedux';

/* selectors */
export const getOrder = (state) => state.order;

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCTS = createActionName('ADD_PRODUCTS');
const ORDER_START = createActionName('ORDER_START');
const ORDER_SUCCESS = createActionName('ORDER_SUCCESS');
const ORDER_ERROR = createActionName('ORDER_ERROR');
const CLEAR_SUCCESS = createActionName('CLEAR_SUCCESS');

/* action creators */
export const addProducts = payload => ({ payload, type: ADD_PRODUCTS });
export const orderStarted = payload => ({ payload, type: ORDER_START });
export const orderSuccess = payload => ({ payload, type: ORDER_SUCCESS });
export const orderError = payload => ({ payload, type: ORDER_ERROR });
export const clearSuccess = payload => ({ payload, type: CLEAR_SUCCESS });

/* thunk creators */
export const postOrder = (order) => {
  return (dispatch, getState) => {
    dispatch(orderStarted());

    Axios
      .post(`${api.url}/${api.orders}`, order)
      .then(res => {
        dispatch(orderSuccess(res.data));
        dispatch(clearCart());
      })
      .catch(err => {
        dispatch(orderError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return {
        ...statePart,
        status: 'draft',
        products: action.payload,
      };
    }
    case ORDER_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          success: false,
        },
      };
    }
    case ORDER_SUCCESS: {
      return {
        lastOrder: action.payload._id,
        status: 'draft',
        contact: {
          name: '',
          email: '',
          privacy: null,
          terms: null,
        },
        products: [],
        loading: {
          active: false,
          error: false,
          succes: true,
        },
      };
    }
    case ORDER_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
          success: false,
        },
      };
    }
    case CLEAR_SUCCESS: {
      return {
        ...statePart,
        lastOrder: '',
        loading: {
          ...statePart.loading,
          success: false,
        },
      };
    }
    default:
      return statePart;
  }
}