import React from 'react';
import { useSelector } from 'react-redux';
import { getConvertationsHistory } from '../../store/selectors';
import HistoryItem from '../history-item/history-item';
import './history-list.scss';

function HistoryList() {
  const convertations = useSelector(getConvertationsHistory);

  return (
    <ul className='history__list'>
      {convertations.map((convertation) => <HistoryItem key={convertation.id} convertation={convertation}/>)}
    </ul>
  );
}

export default HistoryList;
