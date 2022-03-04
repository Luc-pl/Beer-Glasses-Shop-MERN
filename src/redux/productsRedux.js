import Axios from 'axios';
import { api } from '../settings.js';

/* selectors */
export const getAllProducts = ({products}) => products.data;
export const getCurrentProduct = ({ products }) => products.currentProduct;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_PRODUCT_SUCCESS = createActionName('FETCH_PRODUCT_SUCCESS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchProductSuccess = payload => ({ payload, type: FETCH_PRODUCT_SUCCESS });

/* thunk creators */
export const fetchProducts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const state = getState();
    if (state.products.data.length === 0 && state.products.loading.active) {
      Axios
        .get(`${api.url}/${api.products}`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};


export const fetchProductDetails = (_id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios
      .get(`${api.url}/${api.products}/${_id}`)
      .then(res => {
        dispatch(fetchProductSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        currentProduct: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
