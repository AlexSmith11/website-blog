import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';

/**
 * Main page
 */
const Main = () => {
  let match = useRouteMatch;

  return (
    <div className='homeTitle'>
      <h1>Home Page</h1>
    </div>
  );
};

export default Main;
