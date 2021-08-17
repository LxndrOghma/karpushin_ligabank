import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { TODAY } from '../../const';
import './calendar.scss';

function Calendar({selectedDate = TODAY, setSelectedDate, isDisabled}) {
  const DATE_FORMAT = 'd.MM.yyyy';
  const minDate = new Date(TODAY);
  minDate.setDate(minDate.getDate() - 7);

  return (
    <DatePicker
      wrapperClassName='converter-form__calendar calendar'
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat={DATE_FORMAT}
      calendarStartDay={1}
      minDate={minDate}
      maxDate={TODAY}
      disabled={isDisabled}
    />
  );
}

Calendar.propTypes ={
  selectedDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  setSelectedDate: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Calendar;
