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
        <h1>GitHub Repo's.</h1>
      </div>
      <div className='text'>
        <p>[Big Repo table here]</p>
        <p>
          <a href='https://github.com/AlexSmith11' style={styles}>
            <u>[Link to my GitHub page]</u>
          </a>
        </p>
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
