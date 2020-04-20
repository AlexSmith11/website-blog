import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import About from '../components/About';
import Skills from '../components/Skills';
import '../styles/styles.css';
import '../styles/home.css';

/**
 * Main page
 * We use Bootstraps grid system to make sure we get our text layout correct.
 */
const Main = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <div className='title'>
            <h1>Hello, my name is Alex. I'm a software engineer.</h1>
            <h3>I also like to take photos.</h3>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <About />
        </div>
        <div className='col-sm'>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Main;
