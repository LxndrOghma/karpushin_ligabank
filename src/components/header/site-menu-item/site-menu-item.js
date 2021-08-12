import React from 'react';
import PropTypes from 'prop-types';
import { ACTIVE_MENU_LINK } from '../../../const';
import './site-menu-item.scss';

function SiteMenuItem({siteMenuLink }) {
  return (
    <li className={`site-list__item ${siteMenuLink === ACTIVE_MENU_LINK ? 'site-list__item--active' : ''}`}>
      <a href='/' >
        {siteMenuLink}
      </a>
    </li>
  );
}

SiteMenuItem.propTypes = {
  siteMenuLink: PropTypes.string.isRequired,
};

export default SiteMenuItem;
