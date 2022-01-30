import React from 'react';

const AwardCard = ({ title, imgUrl, subtitle }) => {
  return (
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt='awards' />
      <div className='app__laurels_awards-card_content'>
        <p
          className='app__laurels_awards-card_content_text'
          style={{ color: '#DCCA87' }}
        >
          {title}
        </p>
        <p className='app__laurels_awards-card_content_text_b'>{subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
