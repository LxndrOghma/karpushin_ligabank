import { ACCES_KEY, curreciesList, Rates } from '../const';
import { getNumericFormatedData } from '../utils';
import { loadExchangeRates } from './action';

const fetchExchangeRates = () => (dispatch, _getState, api) => (
  api
    .get(`${Rates.LIVE}${ACCES_KEY}&symbols=${curreciesList}`)
    .then(({data}) => {
      const ratesList = data.rates;
      dispatch(loadExchangeRates(ratesList));
    })
);

const fetchHistoryExchangeRates = (date) => (dispatch, _getState, api) => {
  const formatedDate = getNumericFormatedData(date);
  return (
    api
      .get(`${Rates.HISTORICAL}${formatedDate}.json${ACCES_KEY}&symbols=${curreciesList}`)
      .then(({data}) => {
        const ratesList = data.rates;
        dispatch(loadExchangeRates(ratesList));
      })
  );
};

export {
  fetchExchangeRates,
  fetchHistoryExchangeRates
};
