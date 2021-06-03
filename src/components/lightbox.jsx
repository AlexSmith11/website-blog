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
      <h1>hello</h1>
      <div href='#' className='lightbox'>
        <span
          onClick={event}
          style={{
            backgroundImage: `url('${tempUrl}')`
          }}>
          hiya
        </span>
      </div>
    </div>
  );
};

export default LightboxHandler;
