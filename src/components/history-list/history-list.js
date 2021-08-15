import React from 'react';
import HistoryItem from '../history-item/history-item';
import './history-list.scss';

const convertations = [
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 2,
    date: '6.11.2020',
    sellValue: 13.1234,
    sellCurrency: 'USD',
    buyValue: 1000,
    buyCurrency: 'RUB',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '25.11.2020',
    sellValue: 1000,
    sellCurrency: 'RUB',
    buyValue: 13.1234,
    buyCurrency: 'USD',
  },
];

function HistoryList() {
  return (
    <ul className='history__list'>
      {convertations.map((convertation) => <HistoryItem key={convertation.id} convertation={convertation}/>)}
    </ul>
  );
}

export default HistoryList;
