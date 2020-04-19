import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';

/**
 * Blog page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <div className='title'>
        <h1>CV</h1>
      </div>
      <p>[CV goes here.]</p>
    </div>
  );
};

export default About;
