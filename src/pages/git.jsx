import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import Table from '../components/Table.jsx';
import WorkExamples from '../components/WorkExamples.jsx';

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
            <a className='fromLeft' href='https://github.com/AlexSmith11'>
              My GitHub
            </a>
          </h3>
        </div>
      </div>
      <Table />
      <WorkExamples />
    </div>
  );
};

export default About;
