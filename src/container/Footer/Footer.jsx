import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './footer.css';
import { FooterOverlay, Newsletter } from '../../component';
import { images } from '../../constants';
const Footer = () => {
  return (
    <div className='app__footer' id='login'>
      <FooterOverlay />
      <Newsletter />
      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='contact-headtext'>Contact Us</h1>
          <p className='contact-text'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='contact-text'>+1 212-344-1230</p>
          <p className='contact-text'>+1 212-555-1230</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='footer-logo' />
          <p className='links-text'>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others.”
          </p>
          <img
            src={images.spoon}
            className='spoon__img'
            style={{ marginTop: 15 }}
          />
          <div className='app__footer-links_icon'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='work-headtext'>Working Hours</h1>
          <p className='work-text'>Monday-Friday:</p>
          <p className='work-text'>08:00 Am -12:00 Am</p>
          <p className='work-text'>Saturday-Sunday:</p>
          <p className='work-text'>07:00am -11:00 Pm</p>
        </div>
      </div>
      <div className='app__footer_copyright'>
        <p className='copyright-text'>2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
