import React from 'react';
import './site-menu.scss';
import { siteMenuLinks } from '../../../const';
import SiteMenuItem from '../site-menu-item/site-menu-item';


function SiteMenu() {

  return (
    <ul className='main-nav__list site-list'>
      {siteMenuLinks.map((link) => <SiteMenuItem key={link} siteMenuLink={link} />)}
    </ul>

  );
}

export default SiteMenu;
