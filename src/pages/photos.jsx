import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/photos.css';
import '../styles/photo-grid.css';
/**
 * Photo gallery page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <div className='container'>
        <div className='title'>
          <h1>Some photos I have taken</h1>
          <h3>
            More on{' '}
            <a href='https://www.instagram.com/alexneilsmith_/'>
              <img src={require('../img/index.png')} className='insta-icon' />
            </a>
          </h3>
        </div>
      </div>
      <div className='basic-grid'>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/ONKgYJQ.jpg')" }}>
          <a></a>
        </div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/NSDQkkE.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/hse7Vu6.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/casNU6V.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/ILx0kCc.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/HoNqh2h.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/fSh9PNX.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/sg5vol9.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/hAUV8EA.jpg    ')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/9mZUiNY.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/MM2DLvM.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/Wa1lYJf.jpg')"
          }}></div>
        <div
          className='card card-wide'
          style={{
            backgroundImage: "url('https://i.imgur.com/XZ5mF1F.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/akoNHJQ.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/825MISP.jpg')"
          }}></div>
        <div
          className='card'
          style={{
            backgroundImage: "url('https://i.imgur.com/sOBJAQA.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/APmo0hA.jpg')"
          }}></div>
        <div
          className='card card-tall'
          style={{
            backgroundImage: "url('https://i.imgur.com/NX9eTPg.jpg')"
          }}></div>
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
