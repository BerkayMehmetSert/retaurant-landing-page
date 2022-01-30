import React from 'react';
import './chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../component';
const Chef = () => {
  return (
    <div className='app__chef'>
      <div className='app__chef_img'>
        <img src={images.chef} alt='chef-image' />
      </div>
      <div className='app__chef_info'>
        <SubHeading title="Chef's word" />
        <h1 className='app__chef_headtext'>What we believe in</h1>
        <div className='app__chef_content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote-image' />
            <p className='app__chef-content_quote_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className='app__chef-content_text'>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className="app__chef-sign_text">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
