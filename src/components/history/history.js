import React from 'react';
import HistoryList from '../history-list/history-list';
import './history.scss';

function History() {
  return (
    <section className='history'>
      <div className='history__wrapper'>
        <div className='history__table'>
          <h2 className='hisory__header'>История конвертаций</h2>
          <HistoryList />
          <button className='button button--history'>Очистить историю</button>
        </div>
      </div>
    </section>
  );
}

export default History;
