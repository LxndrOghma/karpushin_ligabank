import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_CHARS, TODAY } from '../../const';
import { createConvertation } from '../../store/action';
import { fetchExchangeRates, fetchHistoryExchangeRates } from '../../store/api-action';
import { getConvertationsHistory, getExchangeRates } from '../../store/selectors';
import { convertMoney, getMaxLengthString, getNumericFormatedData, setConverterValues, updateConvertationsHistory } from '../../utils';
import AmmountInput from '../ammount-input/ammount-input';
import Calendar from '../calendar/calendar';
import './converter.scss';


function Converter() {

  const [selectedDate, setSelectedDate] = useState(TODAY);

  const [sellValue, setSellValue] = useState('0');
  const [buyValue, setBuyValue] = useState('0');

  const [sellCurrency, setSellCurrency] = useState('RUB');
  const [buyCurrency, setBuyCurrency] = useState('USD');

  const exchangeRates = useSelector(getExchangeRates);
  const convertationsHistory = useSelector(getConvertationsHistory);

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

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const newConvertation = {
      id: nanoid(),
      date: getNumericFormatedData(selectedDate, true),
      sellValue: sellValue,
      buyValue: buyValue,
      sellCurrency: sellCurrency,
      buyCurrency: buyCurrency,
    };

    const updatedHistory = updateConvertationsHistory(newConvertation, convertationsHistory);

    dispatch(createConvertation(updatedHistory));
  };

  useEffect(() => {
    if (selectedDate === TODAY) {
      dispatch(fetchExchangeRates());
    } else {
      dispatch(fetchHistoryExchangeRates(selectedDate));
    }
  }, [selectedDate, dispatch]);

  useEffect(() => {
    setBuyValue(convertMoney(+sellValue, sellCurrency, buyCurrency, exchangeRates));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRates]);

  return (
    <section className='converter'>
      <div className='converter__wrapper'>
        <h2 className='converter__header'>Конвертер валют</h2>
        <form className='converter__form converter-form' onSubmit={onFormSubmit}>
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
