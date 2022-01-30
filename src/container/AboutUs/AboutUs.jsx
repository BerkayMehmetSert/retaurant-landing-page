import React from 'react';
import './aboutUs.css';
import { images } from '../../constants';
const AboutUs = () => {
  return (
    <div className='app__aboutus' id='about'>
      <div className='app__aboutus-overlay'>
        <img src={images.G} alt='aboutus-image' />
      </div>
      <div className='app__abutus-content'>
        <div className='app__aboutus-content_about'>
          <h1 className='app__aboutus-headtext'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='aboutus-img' />
          <p className='app_aboutus-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='app__aboutus-custom-btn'>
            Know More
          </button>
        </div>
        <div className='app__aboutus-content_knife'>
          <img src={images.knife} alt='about_knife' />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='app__aboutus-headtext'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='aboutus-img' />
          <p className='app_aboutus-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='app__aboutus-custom-btn'>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
