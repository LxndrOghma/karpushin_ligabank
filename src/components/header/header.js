import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className='page-header'>
      <a href='index.html' className='page-header__logo'>
        <img src='https://via.placeholder.com/150x25' width='150' height='25' alt='Лигабанк' />
      </a>
      <nav className='main-nav'>
        <div className='main-nav__wrapper'>
          <ul className='main-nav__list site-list'>
            <li className='site-list__item'>
              <a href='index.html'>
                Услуги
              </a>
            </li>
            <li className='site-list__item'>
              <a href='index.html'>
                Рассчитать кредит
              </a>
            </li>
            <li className='site-list__item site-list__item--active'>
              <a href='index.html'>
                Конвертер валют
              </a>
            </li>
            <li className='site-list__item'>
              <a href='index.html'>
                Контакты
              </a>
            </li>
            <li className='site-list__item'>
              <a href='index.html'>
                Задать вопрос
              </a>
            </li>
          </ul>
          <ul className='main-nav__list user-list'>
            <li className='user-list__item'>
              <a href='index.html'>
                Войти в интернет банк
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
