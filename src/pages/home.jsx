import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';

/**
 * Main page
 */
const Main = () => {
  let match = useRouteMatch;

  return (
    <div>
      <div className='title'>
        <h1>Welcome!</h1>
      </div>
    </div>
  );
};

export default Main;
