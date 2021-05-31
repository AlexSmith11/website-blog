import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
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
            <h1>Hello, my name is Alex.</h1>
          </div>
        </div>
      </div>

      <div className='row'>
      <div className='col-md-8'>
            <div className='text'>
                <p>I&apos;m a Bristol based software engineer who specialises in custom backend solutions.
                    Currently, I&apos;m an engineer at Redwing Interactive focussed on building accessible, human focussed products.</p>
            </div>
          </div>
      </div>

      <div className='row'>
        <div className='col-lg'>
          <About />
        </div>
        <div className='col-lg'>
          <Skills />
        </div>
        <div className='col-lg'>
          <Projects />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div className='bottom-padding'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
