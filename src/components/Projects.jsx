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
          Tech-for-good apps such as for supporting refugee wellbeing, tree
          restoration and preservation, red cross first aid, and more.
        </li>
        <li>
          A C# .NET mobile app that is essentially Amazon for pub owners, that
          can even operate offline.
        </li>
        <li>A well known weather app used throughout the UK by millions.</li>
        <li>
          A real-time, AWS hosted vehicle tracking telelmatics application
          running on EmberJS and PHP Laravel.
        </li>
        <li>
          A retail website that features a PC builder, made with NextJS, Express
          and PostgreSQL.
        </li>
        <li>
          Android app that takes all exoplanets categorised by{' '}
          <a className='fromLeft' href='http://exoplanet.eu/' target='blank'>
            exoplanet.eu
          </a>{' '}
          and displays them with various ways to interact with the data. Built
          with Java.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
