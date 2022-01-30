import React from 'react';
import './menuitem.css';
const Menuitem = ({ title, price, tags }) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
          <p className='app__menuitem_text'>{title}</p>
        </div>
        <div className='app__menuitem-dash' />
        <div className='app__menuitem-price'>
          <p className='app__menuitem-price_text'>{price}</p>
        </div>
      </div>
      <div className='app__menuitem-sub'>
        <p className='app__menuitem-sub_text'>{tags}</p>
      </div>
    </div>
  );
};

export default Menuitem;
