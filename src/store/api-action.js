import { getAdaptedExchangeRates } from '../adapter/adapter';
import { ACCES_KEY, curreciesList, Rates } from '../const';
import { getNumericFormatedData } from '../utils';
import { loadExchangeRates } from './action';

const fetchExchangeRates = () => (dispatch, _getState, api) => (
  api
    .get(`${Rates.LIVE}${ACCES_KEY}&currencies=${curreciesList}&format=1`)
    .then(({data}) => {
      const ratesList = getAdaptedExchangeRates(data.quotes);
      dispatch(loadExchangeRates(ratesList));
    })
);

const fetchHistoryExchangeRates = (date) => (dispatch, _getState, api) => {
  const formatedDate = getNumericFormatedData(date);
  return (
    api
      .get(`${Rates.HISTORICAL}${ACCES_KEY}&date=${formatedDate}&currencies=${curreciesList}&format=1`)
      .then(({data}) => {
        const ratesList = getAdaptedExchangeRates(data.quotes);
        dispatch(loadExchangeRates(ratesList));
      })
  );
};

export {
  fetchExchangeRates,
  fetchHistoryExchangeRates
};
