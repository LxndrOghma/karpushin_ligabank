import React from 'react';
import PageFooter from '../../footer/page-footer/page-footer';
import PageHeader from '../../header/page-header/page-header';

import './not-found-page.scss';

function NotFoundPage() {
  return (
    <div className='container'>
      <PageHeader />
      <main className='not-found'>
        <div className='not-found__wrapper'>
          <h2 className='not-found__header'>404. Страница не найдена</h2>
          <a className='not-found__button' href='/'>Вернуться на главную</a>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
