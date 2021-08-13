import React from 'react';
import './mobile-contacts.scss';

function MobileContacts() {
  return (
    <div className='page-footer__mobile-contacts mobile-contacts'>
      <a className='page-footer__phone mobile-contacts__phone' href='tel:*0904'>*0904</a>
      <p className='page-footer__description mobile-contacts__description'>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
    </div>
  );
}

export default MobileContacts;
