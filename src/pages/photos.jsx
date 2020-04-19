import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

/**
 * Photo gallery page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <h1>Pictures I have taken</h1>
      <p>Photo gallery here.</p>
    </div>
  );
};

export default About;
