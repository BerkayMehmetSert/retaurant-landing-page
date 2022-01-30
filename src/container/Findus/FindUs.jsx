import React from 'react';
import './findUs.css';
import { SubHeading } from '../../component';
import { images } from '../../constants';

const FindUs = () => {
  return (
    <div className='app__findus'>
      <div className='app__findus_info'>
        <SubHeading title='Contact' />
        <h1 className='app__findus_headtext'>Find Us</h1>
        <div className='app__findus_text-content'>
          <p className='app__findus_text'>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p className='app__findus_text-b'>Opening Hours</p>
          <p className='app__findus_text'>Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className='app__findus_text'>Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        <button type='button' className='app__findus_custom-button'>
          Visit Us
        </button>
      </div>
      <div className='app__findus_img'>
        <img src={images.findus} alt='findus_img' />
      </div>
    </div>
  );
};

export default FindUs;
