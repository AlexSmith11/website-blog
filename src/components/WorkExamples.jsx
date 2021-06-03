import React, { useState } from 'react';
import '../styles/styles.css';
import '../styles/photos.css';
import '../styles/photo-grid.css';
import LightboxHandler from '../components/lightbox';

const WorkExamples = () => {
  const [check, setCheck] = useState(false);
  const [imgUrl, changeUrl] = useState([]);

  const handleImageClick = url => {
    checker();
    changeUrl(url);
  };

  const checker = () => {
    // need to check if another image is already open first (?)
    setCheck(prevCheck => !prevCheck);
  };

  return (
    <div>
      <div className='lightboxThing'>
        {check && <LightboxHandler onClick={() => checker} imgUrl={imgUrl} />}
      </div>

      <div className='basic-grid'>
        <div
          onClick={() => handleImageClick('https://i.imgur.com/qeHAKGy.png')}
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/qeHAKGy.png')"
          }}>
          <a></a>
        </div>
        <div
          onClick={() => handleImageClick('https://i.imgur.com/6rtHWlz.png')}
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/6rtHWlz.png')"
          }}></div>
        <div
          onClick={() => handleImageClick('https://i.imgur.com/q9eXph0.png')}
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/q9eXph0.png')"
          }}></div>
      </div>
    </div>
  );
};

export default WorkExamples;
