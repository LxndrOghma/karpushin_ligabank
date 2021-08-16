import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_EXCHANGE_RATES: 'data/loadExchangeRates',
};

export const loadExchangeRates = createAction(ActionType.LOAD_EXCHANGE_RATES, (payload) => ({payload}));
