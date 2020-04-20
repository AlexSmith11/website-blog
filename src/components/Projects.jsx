import React from 'react';

const Projects = () => {
  return (
    <div className='text'>
      <h3>Projects</h3>
      <p>
        Here are some projects I have worked on. More can be found on my GitHub.
      </p>
      <ul>
        <li>
          A real-time, AWS hosted vehicle tracking telelmatics application
          running on EmberJS and PHP Laravel.
        </li>
        <li>
          A React, Express & Mongo based risk management system that tracks and
          ensures employees safety around the globe.
        </li>
        <li>
          A retail website that features a PC builder, made with NextJS, Express
          and PostgreSQL.
        </li>
        <li>
          Android app that takes all exoplanets that have been categorised by{' '}
          <a href='http://exoplanet.eu/' style={styles}>
            <u>exoplanet.eu</u>
          </a>{' '}
          and displays them with various graphs and ways to interact with the
          data. Built with Java.
        </li>
      </ul>
    </div>
  );
};

/**
 * href links are annoying - overide the blue link text
 */
const styles = {
  color: 'inherit'
};

export default Projects;
