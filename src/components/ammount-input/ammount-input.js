import React from 'react';
import PropTypes from 'prop-types/';
import { Currencies } from '../../const';
import './ammount-input.scss';

function AmmountInput({inputType, value, onInputChange, currencyValue, onSelectChange, isDisabled}) {
  return (
    <div className='converter-form__ammount-input ammount-input'>
      <div className='ammount-input__wrapper'>
        <label className='ammount-input__label' htmlFor={inputType}>{inputType === 'sell' ? 'У меня есть' : 'Хочу приобрести'}</label>
        <input
          id={inputType}
          className='ammount-input__input'
          value={value}
          type='number'
          onChange={onInputChange}
          placeholder='Введите сумму'
          disabled={isDisabled}
        />
      </div>
      <select
        className='ammount-input__select'
        name={`${inputType}_select`}
        value={currencyValue}
        onChange={onSelectChange}
        disabled={isDisabled}
      >
        {Currencies.map((curriency) => <option key={curriency} value={curriency}>{curriency}</option>)}
      </select>
    </div>
  );
}

AmmountInput.propTypes ={
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  currencyValue: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  isDisabled:PropTypes.bool.isRequired,
};

export default AmmountInput;
