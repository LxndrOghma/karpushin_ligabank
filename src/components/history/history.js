import React from 'react';
import { useDispatch } from 'react-redux';
import { clearConvertations } from '../../store/action';
import HistoryList from '../history-list/history-list';
import './history.scss';

function History() {
  const dispatch = useDispatch();

  const onClearButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(clearConvertations());
  };

  return (
    <section className='history'>
      <div className='history__wrapper'>
        <div className='history__table'>
          <h2 className='hisory__header'>История конвертаций</h2>
          <HistoryList />
          <button className='button button--history' onClick={onClearButtonClick}>Очистить историю</button>
        </div>
      </div>
    </section>
  );
}

export default History;
