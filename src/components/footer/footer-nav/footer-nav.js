import React from 'react';
import './footer-nav.scss';

function FooterNav() {
  return (
    <div className='page-footer__nav footer-nav'>
      <ul className='footer-nav__list'>
        <li className='footer-nav__list-item'>
          <a href='/'>
                Услуги
          </a>
        </li>
        <li className='footer-nav__list-item'>
          <a href='/'>
                Рассчитать кредит
          </a>
        </li>
        <li className='footer-nav__list-item'>
          <a href='/'>
                Контакты
          </a>
        </li>
        <li className='footer-nav__list-item'>
          <a href='/'>
                Задать вопрос
          </a>
        </li>
      </ul>
    </div>

  );
}

export default FooterNav;

