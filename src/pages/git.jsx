import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Table from '../components/Table.jsx';
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
        <h1>Projects I have worked on.</h1>
        <p>
          <a href='https://github.com/AlexSmith11' style={styles}>
            <h3>
              My GitHub{' '}
              <img src={require('../img/gitlogo.png')} className='git-icon' />
            </h3>
          </a>
        </p>
      </div>
      <Table />
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
