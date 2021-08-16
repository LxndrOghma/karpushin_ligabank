import { createReducer } from '@reduxjs/toolkit';
import { loadExchangeRates } from './action';

const initialState = {
  history: [],
  exchangeRates: {
    RUB: 1,
    USD: 1,
    EUR: 1,
    GBP: 1,
    CNY: 1,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadExchangeRates, (state, action) => {
      state.exchangeRates = action.payload;
    });
});

export { reducer };
