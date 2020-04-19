import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

/**
 * About page
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
