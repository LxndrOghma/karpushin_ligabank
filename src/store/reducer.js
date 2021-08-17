import { createReducer } from '@reduxjs/toolkit';
import { clearConvertations, createConvertation, loadExchangeRates } from './action';

const initialState = {
  convertations: [],
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
    })
    .addCase(createConvertation, (state, action) => {
      state.convertations = action.payload;
    })
    .addCase(clearConvertations, (state, action) => {
      state.convertations = [];
    });
});

export { reducer };
