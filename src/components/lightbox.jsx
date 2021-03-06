import React from 'react';
import '../styles/lightbox.css';

/* Handle the lightbox toggle */
const LightboxHandler = (onClick, imgUrl) => {
  var tempUrl = onClick['imgUrl'];

  const event = () => {
    var temp = onClick['onClick']();
    temp();
    return null;
  };

  return (
    <div>
      <div href='#' className='lightbox'>
        <span
          onClick={event}
          style={{
            backgroundImage: `url('${tempUrl}')`
          }}></span>
      </div>
    </div>
  );
};

export default LightboxHandler;
