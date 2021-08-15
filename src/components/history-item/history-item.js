import React from 'react';
import PropTypes from 'prop-types';
import './history-item.scss';

function HistoryItem({convertation}) {
  const {date, sellValue, sellCurrency, buyValue, buyCurrency} = convertation;
  return (
    <li className='history__list-item history-item'>
      <p className='history-item__date'>{date}</p>
      <p className='history-item__buy'>{`${sellValue} ${sellCurrency}`}</p>
      <p className='history-item__sell'>{`${buyValue} ${buyCurrency}`}</p>
    </li>
  );
}

HistoryItem.propTypes = {
  convertation: PropTypes.object.isRequired,
};

export default HistoryItem;
