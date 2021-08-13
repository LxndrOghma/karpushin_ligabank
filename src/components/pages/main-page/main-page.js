import React from 'react';
import PageFooter from '../../footer/page-footer/page-footer';
import PageHeader from '../../header/page-header/page-header';
import './main-page.scss';

function MainPage() {
  return (
    <div className='container'>
      <PageHeader />
      <main></main>
      <PageFooter />
    </div>
  );
}

export default MainPage;
