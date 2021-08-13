import React from 'react';
import Logo from '../../header/logo/logo';
import './bank-information.scss';

function BankInformation() {
  return (
    <div className='page-footer__logo-wrapper bank-information'>
      <Logo />
      <p className='page-footer__description bank-information__text'>
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 &copy; Лига Банк, 2019
      </p>
    </div>

  );
}

export default BankInformation;
