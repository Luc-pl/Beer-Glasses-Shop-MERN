/* eslint-disable linebreak-style */
import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getLoginState = (state) => state.isLogged;

/* action name creator */
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_LOGIN_STATUS = createActionName('UPDATE_LOGIN_STATUS');

/* action creators */
export const updateLoginStatus = payload => ({ payload, type: UPDATE_LOGIN_STATUS });

/* thunk creators */
export const fetchLogin = () => {
  return (dispatch, getState) => {
    const state = getState();
    Axios
      .get(`${api.url}/${api.auth}`)
      .then(res => {
        // dispatch(fetchSuccess(res.data));
        console.log(' : fetchLogin -> res.data', res.data);
      })
      .catch(err => {
        // dispatch(fetchError(err.message || true));
        console.log(' : fetchLogin -> err.message', err.message);
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      switch (action.payload) {
        case 'login': return true;
        case 'logout': return false;
        default:
          return statePart;
      }
    default:
      return statePart;
  }
}