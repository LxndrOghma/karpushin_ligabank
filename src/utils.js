const getMaxLengthString = (string, maxLength) => string.length > maxLength ? string.substr(0, maxLength) : string;

const convertMoney = (value, sellCurrency, buyCurrency, exchangeRate) => (value / exchangeRate[sellCurrency] * exchangeRate[buyCurrency]).toFixed(3);

const setConverterValues = (value, convertibleValueSetter, resultValueSetter, convertableCurrency, resultCurrency, exchangeRates) => {
  convertibleValueSetter(value.toString());
  const convertedValue = convertMoney(value, convertableCurrency, resultCurrency, exchangeRates);
  resultValueSetter(convertedValue.toString());
};

const getNumericFormatedData = (utcDate) => {
  const date = new Date(utcDate);

  let dd = date.getDate();
  if (dd < 10) {dd = `0${dd}`;}

  let mm = date.getMonth() + 1;
  if (mm < 10) {mm = `0${mm}`;}

  const yy = date.getFullYear();

  return `${yy}-${mm}-${dd}`;
};

export {
  getMaxLengthString,
  convertMoney,
  setConverterValues,
  getNumericFormatedData
};
