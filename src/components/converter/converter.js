import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_CHARS, TODAY } from '../../const';
import { fetchExchangeRates, fetchHistoryExchangeRates } from '../../store/api-action';
import { getExchangeRates } from '../../store/selectors';
import { convertMoney, getMaxLengthString, setConverterValues } from '../../utils';
import AmmountInput from '../ammount-input/ammount-input';
import Calendar from '../calendar/calendar';
import './converter.scss';


function Converter() {

  const [selectedDate, setSelectedDate] = useState(TODAY);

  const [sellValue, setSellValue] = useState('');
  const [buyValue, setBuyValue] = useState('');

  const [sellCurrency, setSellCurrency] = useState('RUB');
  const [buyCurrency, setBuyCurrency] = useState('USD');

  const exchangeRates = useSelector(getExchangeRates);

  const dispatch = useDispatch();

  const onSellValueChange = (evt) => {
    const value = evt.target.value;

    if (value < 0) {
      setSellValue(0);
      setBuyValue(0);
      return;
    }

    const formatedValue = getMaxLengthString(value, MAX_CHARS);
    setConverterValues(+formatedValue, setSellValue, setBuyValue, sellCurrency, buyCurrency, exchangeRates);
  };

  const onBuyValueChange = (evt) => {
    const value = evt.target.value;

    if (value < 0) {
      setBuyValue(0);
      setSellValue(0);
      return;
    }

    const formatedValue = getMaxLengthString(value, MAX_CHARS);
    setConverterValues(+formatedValue, setBuyValue, setSellValue, buyCurrency, sellCurrency, exchangeRates);
  };

  const onSellCurrencyChange = (evt) => {
    const value = evt.target.value;
    setSellCurrency(value);
    const convertedBuyValue = convertMoney(+sellValue, value ,buyCurrency, exchangeRates);
    setBuyValue(convertedBuyValue);
  };

  const onBuyCurrencyChange = (evt) => {
    const value = evt.target.value;
    setBuyCurrency(value);
    const convertedBuyValue = convertMoney(+sellValue, sellCurrency ,value, exchangeRates);
    setBuyValue(convertedBuyValue);
  };

  useEffect(() => {
    if (selectedDate === TODAY) {
      dispatch(fetchExchangeRates())
        .then(() => {
          setBuyValue(convertMoney(+sellValue, sellCurrency, buyCurrency, exchangeRates));
        });
    } else {
      dispatch(fetchHistoryExchangeRates(selectedDate))
        .then(() => {
          setBuyValue(convertMoney(+sellValue, sellCurrency, buyCurrency, exchangeRates));
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ dispatch, selectedDate]);

  return (
    <section className='converter'>
      <div className='converter__wrapper'>
        <h2 className='converter__header'>Конвертер валют</h2>
        <form className='converter__form converter-form'>
          <AmmountInput inputType='sell' value={sellValue} onInputChange={onSellValueChange} currencyValue={sellCurrency} onSelectChange={onSellCurrencyChange} />
          <AmmountInput inputType='buy' value={buyValue} onInputChange={onBuyValueChange} currencyValue={buyCurrency} onSelectChange={onBuyCurrencyChange} />
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <button className='button' type='submit'>
            Сохранить результат
          </button>
        </form>
      </div>
    </section>
  );
}

export default Converter;
