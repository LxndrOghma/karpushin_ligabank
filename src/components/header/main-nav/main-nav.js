import React from 'react';
import SiteMenu from '../site-menu/site-menu';
import UserMenu from '../user-menu/user-menu';
import './main-nav.scss';

function MainNav() {
  return (
    <nav className='main-nav'>
      <div className='main-nav__wrapper'>
        <SiteMenu />
        <UserMenu />
      </div>
    </nav>

  );
}

export default MainNav;
