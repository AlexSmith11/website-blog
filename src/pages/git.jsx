import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Table from '../components/Table.jsx';
import WorkExamples from '../components/WorkExamples.jsx';
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
        <div className='git-link'>
          <h3>
            <a href='https://github.com/AlexSmith11' style={styles}>
              <u>My GitHub</u>
            </a>
          </h3>
        </div>
      </div>
      <Table />
      <WorkExamples />
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
