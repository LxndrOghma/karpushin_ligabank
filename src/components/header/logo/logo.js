import React from 'react';
import logo from '../../../assets/img/ligabank_logo.svg';
import './logo.scss';

function Logo() {
  return (
    <a href='/' className='page-header__logo'>
      <img src={logo} className='page-header__logo-img' width='149' height='27' alt='Лигабанк' />
    </a>
  );
}

export default Logo;

