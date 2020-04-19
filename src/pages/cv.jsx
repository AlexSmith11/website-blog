import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

/**
 * Blog page
 */
const About = () => {
  let match = useRouteMatch;

  return (
    <div>
      <h1>CV</h1>
      <p>CV goes here.</p>
    </div>
  );
};

export default About;
