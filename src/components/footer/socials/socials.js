import React from 'react';
import './socials.scss';


function Socials() {
  return (
    <div className='page-footer__socials socials'>
      <ul className='socials__list'>
        <li className='socials__list-item socials__list-item--facebook'>
          <a className='socials__link socials__link--facebook' href='/'>
            <span className='visually-hidden'>Facebook</span>
          </a>
        </li>
        <li className='socials__list-item socials__list-item--instagram'>
          <a className='socials__link socials__link--instagram' href='/'>
            <span className='visually-hidden'>Instagram</span>
          </a>
        </li>
        <li className='socials__list-item socials__list-item--twitter'>
          <a className='socials__link socials__link--twitter' href='/'>
            <span className='visually-hidden'>Twitter</span>
          </a>
        </li>
        <li className='socials__list-item socials__list-item--youtube'>
          <a className='socials__link socials__link--youtube' href='/'>
            <span className='visually-hidden'>Youtube</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
