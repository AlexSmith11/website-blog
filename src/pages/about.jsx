import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/cv.css';

/**
 * Blog page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div className='container'>
      <div className='title'>
        <h1>About me</h1>
      </div>
      <div className='text'>
        <p>[CV text here]</p>
      </div>
    </div>
  );
};

export default About;
