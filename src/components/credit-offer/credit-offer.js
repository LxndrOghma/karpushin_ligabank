import React from 'react';
import './credit-offer.scss';

function CreditOffer() {
  return (
    <section className='credit-offer'>
      <div className='credit-offer__wrapper'>
        <h2 className='credit-offer__header'>Лига Банк</h2>
        <h3 className='credit-offer__slogan'>Кредиты на любой cлучай</h3>
        <a className='credit-offer__link' href='/'>Рассчитать кредит</a>
      </div>
    </section>
  );
}

export default CreditOffer;
