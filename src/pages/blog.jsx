import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/blog.css';

/**
 * Blog page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div className='container'>
      <div className='title'>
        <h1>These are my thoughts</h1>
      </div>
      <div className='text'>
        <p>[Lots of text here]</p>
      </div>
    </div>
  );
};

export default About;
