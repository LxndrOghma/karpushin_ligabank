export const getAdaptedExchangeRates = (rates) => {
  const adaptedRate = {
    ...rates,
    RUB: rates.USDRUB,
    USD: rates.USDUSD,
    EUR: rates.USDEUR,
    GBP: rates.USDGBP,
    CNY: rates.USDCNY,
  };

  delete adaptedRate.USDRUB;
  delete adaptedRate.USDUSD;
  delete adaptedRate.USDEUR;
  delete adaptedRate.USDGBP;
  delete adaptedRate.USDCNY;

  return adaptedRate;
};
