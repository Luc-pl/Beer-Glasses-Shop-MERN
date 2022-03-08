/* eslint-disable linebreak-style */
export const initialState = {
  categories: [
    { id: 'ipa', name: 'IPA' },
    { id: 'stout', name: 'Stout' },
    { id: 'wheat', name: 'Wheat' },
    { id: 'belgian', name: 'Belgian' },
    { id: 'tasting', name: 'Tasting' },
  ],
  products: {
    currentProduct: {},
    data: [
      // {
      //   _id: '1',
      //   name: 'IPA glasses 1',
      //   category: 'ipa',
      //   image: '/images/ipa-1.jpg',
      //   description:
      //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      //   price: 12,
      // },
      // {
      //   _id: '2',
      //   name: 'IPA glasses 2',
      //   category: 'ipa',
      //   image: '/images/nonic-1.jpg',
      //   description:
      //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      //   price: 10,
      // },
      // {
      //   _id: '3',
      //   name: 'Stout glasses',
      //   category: 'stout',
      //   image: '/images/stout-1.jpg',
      //   description:
      //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      //   price: 14,
      // },
      // {
      //   _id: '4',
      //   name: 'TeKu glasses',
      //   category: 'tasting',
      //   image: '/images/teku-1.jpg',
      //   description:
      //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      //   price: 21,
      // },
      // {
      //   _id: '5',
      //   name: 'Belgian glasses',
      //   category: 'tasting',
      //   image: '/images/stout-1.jpg',
      //   description:
      //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      //   price: 18,
      // },
    ],
    cart: [],
    order: [],
    user: {
    },
    isLogged: true,
    products: {
      currentProduct: {},
      data: [],
      cart: [],
      loading: {
        active: false,
        error: false,
      },
    },
  },
};
