/* eslint-disable linebreak-style */
import Axios from 'axios';
import { api } from '../settings';
import { initialState } from './initialState';

/* selectors */
export const getUser = (state) => state.user;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_USER = createActionName('FETCH_USER');

/* action creators */
export const fetchUserRedux = payload => ({ payload, type: FETCH_USER });

// /* thunk creators */
export const fetchUser = id => {
  return (dispatch, getState) => {
    // dispatch(fetchStarted());
    // const state = getState();
    Axios
      .get(`${api.url}/${api.users}/${id}`)
      .then(res => {
        dispatch(fetchUserRedux({
          id: res.data.email,
          products: res.data.products,
        }));
      })
      .catch(err => {
        console.log(' : fetchUser -> err.message', err.message);
      });
  };
};
/* reducer */
export default function reducer(statePart = initialState.user, action = {}) {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload;
    }
    default:
      return statePart;
  }
}