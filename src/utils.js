import { HISTORY_LENGTH } from './const';

const getMaxLengthString = (string, maxLength) => string.length > maxLength ? string.substr(0, maxLength) : string;

const convertMoney = (value, sellCurrency, buyCurrency, exchangeRate) => {
  const convertedValue = (value / exchangeRate[sellCurrency] * exchangeRate[buyCurrency]);
  const formatedValue = Math.floor(+convertedValue * 10000) / 10000;
  return formatedValue.toString();
};

const setConverterValues = (value, convertibleValueSetter, resultValueSetter, convertableCurrency, resultCurrency, exchangeRates) => {
  convertibleValueSetter(value.toString());
  const convertedValue = convertMoney(value, convertableCurrency, resultCurrency, exchangeRates);
  resultValueSetter(convertedValue.toString());
};

const getNumericFormatedData = (utcDate, dayFirst = false) => {
  const date = new Date(utcDate);

  let dd = date.getDate();
  if (dd < 10) {dd = `0${dd}`;}

  let mm = date.getMonth() + 1;
  if (mm < 10) {mm = `0${mm}`;}

  const yy = date.getFullYear();

  if (dayFirst === true) {
    return `${dd}.${mm}.${yy}`;
  }

  return `${yy}-${mm}-${dd}`;
};


const updateConvertationsHistory = (newConvertation, convertationsHistory) => {

  const cutedHistery = convertationsHistory.length > HISTORY_LENGTH ? convertationsHistory.slice(0, convertationsHistory.length - 1) : convertationsHistory;
  const updatedHistory = [newConvertation, ...cutedHistery];

  return updatedHistory;
};


export {
  getMaxLengthString,
  convertMoney,
  setConverterValues,
  getNumericFormatedData,
  updateConvertationsHistory
};
