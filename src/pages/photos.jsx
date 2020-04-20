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
          <h1>Some pictures I have taken</h1>
        </div>
      </div>
      <div className='basic-grid'>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/BhZP03u.jpg')" }}>
          1
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/cxAZNPp.jpg')" }}>
          2
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/hse7Vu6.jpg')" }}>
          3
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/casNU6V.jpg')" }}>
          4
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/ILx0kCc.jpg')" }}>
          5
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/HoNqh2h.jpg')" }}>
          6
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/fSh9PNX.jpg')" }}>
          7
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/sOBJAQA.jpg')" }}>
          8
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/9elBvTs.png')" }}>
          9
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/9mZUiNY.jpg')" }}>
          10
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/MM2DLvM.jpg')" }}>
          11
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/Wa1lYJf.jpg')" }}>
          12
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/XZ5mF1F.jpg')" }}>
          13
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/akoNHJQ.jpg')" }}>
          14
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/825MISP.jpg')" }}>
          15
        </div>
        <div
          className='card'
          style={{ backgroundImage: "url('https://i.imgur.com/hAUV8EA.jpg')" }}>
          16
        </div>
      </div>
    </div>
  );
};

export default About;
