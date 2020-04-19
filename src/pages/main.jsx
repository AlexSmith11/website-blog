import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';

/**
 * Main page
 */
const Main = () => {
  let match = useRouteMatch;

  return <h1>Home Page</h1>;
};

export default Main;
