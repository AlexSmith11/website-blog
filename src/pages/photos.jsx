import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';

/**
 * Photo gallery page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <div className='container'>
        <div className='title'>
          <h1>Pictures I have taken</h1>
        </div>
      </div>
      <p>[Photo gallery here.]</p>
    </div>
  );
};

export default About;
