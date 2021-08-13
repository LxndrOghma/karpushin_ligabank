import React from 'react';
import './contacts.scss';

function Contacts() {
  return (
    <div className='page-footer__contacts contacts'>
      <a className='page-footer__phone contacts__phone' href='tel:88001112233'>8 800 111 22 33</a>
      <p className='page-footer__description contacts__description'>Бесплатный для всех городов России</p>
    </div>
  );
}

export default Contacts;
