/* eslint-disable linebreak-style */
export const initialState = {
  categories: [
    { id: 'ipa', name: 'IPA' },
    { id: 'stout', name: 'Stout' },
    { id: 'wheat', name: 'Wheat' },
    { id: 'belgian', name: 'Belgian' },
    { id: 'tasting', name: 'Tasting' },
  ],
  order: {
    lastOrder: '',
    status: '',
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
      success: false,
    },
  },
  user: {},
  isLogged: false,
  products: {
    currentProduct: {},
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};