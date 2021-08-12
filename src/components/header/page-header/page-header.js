import React from 'react';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import './page-header.scss';

function PageHeader() {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper'>
        <Logo />
        <MainNav />
      </div>
    </header>
  );
}

export default PageHeader;
