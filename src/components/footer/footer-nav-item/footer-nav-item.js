import React from 'react';
import PropTypes from 'prop-types';

function FooterNavItem({footerMenuLink}) {
  return (
    <li className='footer-nav__list-item'>
      <a href='/'>
        {footerMenuLink}
      </a>
    </li>
  );
}

FooterNavItem.propTypes = {
  footerMenuLink: PropTypes.string.isRequired,
};

export default FooterNavItem;
