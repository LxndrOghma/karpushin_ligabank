import React from 'react';
import { footerMenuLinks } from '../../../const';
import FooterNavItem from '../footer-nav-item/footer-nav-item';
import './footer-nav.scss';

function FooterNav() {
  return (
    <div className='page-footer__nav footer-nav'>
      <ul className='footer-nav__list'>
        {footerMenuLinks.map((link) => <FooterNavItem key={`footer_${link}`} footerMenuLink={link} />)}
      </ul>
    </div>

  );
}

export default FooterNav;

