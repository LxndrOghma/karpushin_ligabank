import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_EXCHANGE_RATES: 'data/loadExchangeRates',
  CREATE_CONVERTATION: 'history/createConvertation',
  CLEAR_CONVERTATIONS: 'history/clearConvertations',
};

export const loadExchangeRates = createAction(ActionType.LOAD_EXCHANGE_RATES, (payload) => ({payload}));
export const createConvertation = createAction(ActionType.CREATE_CONVERTATION, (payload) => ({payload}));
export const clearConvertations = createAction(ActionType.CLEAR_CONVERTATIONS, () => ({}));
