import React from 'react';
import './user-menu.scss';

function UserMenu() {
  return (
    <ul className='main-nav__list user-list'>
      <li className='user-list__item'>
        <a href='/'>
          Войти в Интернет-банк
        </a>
      </li>
    </ul>
  );
}

export default UserMenu;
