import React from 'react';
import PropTypes from 'prop-types/';
import { Currencies } from '../../const';
import './ammount-input.scss';

function AmmountInput({inputType}) {
  return (
    <div className='converter-form__ammount-input ammount-input'>
      <div className='ammount-input__wrapper'>
        <label className='ammount-input__label' htmlFor={inputType}>{inputType === 'have' ? 'У меня есть' : 'Хочу приобрести'}</label>
        <input id={inputType} className='ammount-input__input' type='number' placeholder='Введите значение'/>
      </div>
      <select className='ammount-input__select' name={`${inputType}_select`}>
        {Currencies.map((curriency) => <option key={curriency} value={curriency}>{curriency}</option>)}
      </select>
    </div>
  );
}

AmmountInput.propTypes ={
  inputType: PropTypes.string.isRequired,
};

export default AmmountInput;
