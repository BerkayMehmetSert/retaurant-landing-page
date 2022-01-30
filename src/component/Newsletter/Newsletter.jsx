import React from 'react';
import './newsletter.css';
import { SubHeading } from '../../component';
const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter_head'>
        <SubHeading title='Newsletter' />
        <h1 className='app__newsletter_head-headtext'>
          Subscribe To Our Newsletter
        </h1>
        <p className='app__newsletter_head-text'>
          And Never Miss Latest Updates!
        </p>
      </div>
      <div className='app__newsletter_input'>
        <input type='email' placeholder='Enter your email address' />
        <button type='button' className='app__newsletter_input-button'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
