import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/git.css';

/**
 * Git Repo page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div className='container'>
      <div className='title'>
        <h1>GitHub Repositories</h1>
      </div>
      <div className='text'>
        <p>[Big Repo table here]</p>
      </div>
    </div>
  );
};

export default About;
