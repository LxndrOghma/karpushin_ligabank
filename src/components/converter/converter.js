import React, { useState } from 'react';
import { TODAY } from '../../const';
import AmmountInput from '../ammount-input/ammount-input';
import Calendar from '../calendar/calendar';
import './converter.scss';


function Converter() {
  const [selectedDate, setSelectedDate] = useState(TODAY);

  return (
    <section className='converter'>
      <div className='converter__wrapper'>
        <h2 className='converter__header'>Конвертер валют</h2>
        <form className='converter__form converter-form'>
          <AmmountInput inputType='have' />
          <AmmountInput inputType='need' />
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
