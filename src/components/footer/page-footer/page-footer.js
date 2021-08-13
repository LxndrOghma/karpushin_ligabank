import React from 'react';
import BankInformation from '../bank-information/bank-information';
import Contacts from '../contacts/contacts';
import FooterNav from '../footer-nav/footer-nav';
import MobileContacts from '../mobile-contacts/mobile-contacts';
import Socials from '../socials/socials';
import './page-footer.scss';

function PageFooter() {
  return (
    <footer className='page-footer'>
      <div className='page-footer__wrapper'>
        <BankInformation />
        <FooterNav />
        <MobileContacts />
        <Contacts />
        <Socials />
      </div>
    </footer>
  );
}

export default PageFooter;
