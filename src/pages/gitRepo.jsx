import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';

/**
 * Git Repo page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <h1>GitHub Repo Page</h1>
      <p>Big Table here.</p>
    </div>
  );
};

export default About;
