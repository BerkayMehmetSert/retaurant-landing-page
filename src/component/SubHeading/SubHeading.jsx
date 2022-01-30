import React from 'react';
import './subHeading.css';
import { images } from '../../constants';
const SubHeading = ({ title }) => {
  return (
    <div className='subheading'>
      <p className='subheading-text'>{title}</p>
      <img src={images.spoon} alt='spoon_image' className='subheading-img' />
    </div>
  );
};

export default SubHeading;
