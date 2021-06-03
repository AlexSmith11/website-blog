import React, { Component, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/photos.css';
import '../styles/photo-grid.css';
import LightboxHandler from '../components/lightbox';
/**
 * Photo gallery page
 */
const About = () => {
  const [check, setCheck] = useState(false);
  const [imgUrl, changeUrl] = useState([]);

  const handleImageClick = url => {
    checker();
    changeUrl(url);
  };

  const checker = () => {
    console.log('also here');
    // need to check if another image is already open first (?)
    setCheck(prevCheck => !prevCheck);
  };

  let match = useRouteMatch;

  return (
    <div>
      <div className='container'>
        <div className='title'>
          <h1>Some photos I have taken.</h1>
          {/* <h3>
            More on{' '}
            <a href='https://www.instagram.com/alexneilsmith_/'>
              <img src={require('../img/index.png')} className='insta-icon' />
            </a>
          </h3> */}
        </div>

        <div className='lightboxThing'>
          {check && <LightboxHandler onClick={() => checker} imgUrl={imgUrl} />}
        </div>

        <div className='basic-grid'>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/ONKgYJQ.jpg')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/ONKgYJQ.jpg')"
            }}>
            <a></a>
          </div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/NSDQkkE.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/NSDQkkE.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/S8SkIKp.png')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/S8SkIKp.png')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/sg5vol9.jpg')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/sg5vol9.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/ILx0kCc.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/ILx0kCc.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/ChNTBeE.png')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/ChNTBeE.png')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/fSh9PNX.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/fSh9PNX.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/BwvYvvO.png')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/BwvYvvO.png')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/hAUV8EA.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/hAUV8EA.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/rZGClrX.png')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/rZGClrX.png')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/9mZUiNY.jpg')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/9mZUiNY.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/pNYtTX0.png')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/pNYtTX0.png')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/XZ5mF1F.jpg')}
            className='card card-wide'
            style={{
              backgroundImage: "url('https://i.imgur.com/XZ5mF1F.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/akoNHJQ.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/akoNHJQ.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/825MISP.jpg')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/825MISP.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/sOBJAQA.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/sOBJAQA.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/APmo0hA.jpg')}
            className='card card-tall'
            style={{
              backgroundImage: "url('https://i.imgur.com/APmo0hA.jpg')"
            }}></div>
          <div
            onClick={() => handleImageClick('https://i.imgur.com/NX9eTPg.jpg')}
            className='card'
            style={{
              backgroundImage: "url('https://i.imgur.com/NX9eTPg.jpg')"
            }}></div>
        </div>
      </div>
    </div>
  );
};

/**
 * href links are annoying - overide the blue link text
 */
const styles = {
  color: 'inherit'
};

export default About;
