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
          A C# .NET mobile app that is essentially Amazon for pub owners, that
          can even operate offline.
        </li>
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
          <a className='fromLeft' href='http://exoplanet.eu/'>
            exoplanet.eu
          </a>{' '}
          and displays them with various graphs and ways to interact with the
          data. Built with Java.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
