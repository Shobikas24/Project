// store.js
import { createStore } from 'redux';

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
