/* eslint-disable linebreak-style */
export const api = { 
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':8000/api' : '/api'),
  products: 'products',
  orders: 'orders',
  auth: 'auth',
};