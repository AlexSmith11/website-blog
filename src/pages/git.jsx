import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';

/**
 * Git Repo page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <div className='title'>
        <h1>GitHub Repositories</h1>
      </div>
      <p>[Big Table here.]</p>
    </div>
  );
};

export default About;
