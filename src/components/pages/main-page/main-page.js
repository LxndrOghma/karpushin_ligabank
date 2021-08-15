import React from 'react';
import Converter from '../../converter/converter';
import CreditOffer from '../../credit-offer/credit-offer';
import PageFooter from '../../footer/page-footer/page-footer';
import PageHeader from '../../header/page-header/page-header';
import History from '../../history/history';
import './main-page.scss';

function MainPage() {
  return (
    <div className='container'>
      <PageHeader />
      <main>
        <h1 className='visually-hidden'>ЛИГА Банк</h1>
        <CreditOffer />
        <Converter />
        <History />
      </main>
      <PageFooter />
    </div>
  );
}

export default MainPage;
