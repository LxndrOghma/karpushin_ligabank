import React from 'react';
import './credit-offer.scss';

function CreditOffer() {
  return (
    <section className='credit-add'>
      <div className='credit-add__wrapper'>
        <h2 className='credit-add__header'>Лига Банк</h2>
        <h3 className='credit-add__slogan'>Кредиты на любой cлучай</h3>
        <a className='credit-add__link' href='/'>Рассчитать кредит</a>
      </div>
    </section>
  );
}

export default CreditOffer;
