import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
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
        <div className='col-10'>
          <div className='title'>
            <h1>Hello, my name is Alex. I'm a software engineer.</h1>
            <h3>I also like to take photos.</h3>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-10'>
          <div className='text'>
            <p>
              I'm a newly graduated enthusiast, recently finishing a 6 month
              contract at Gloversure as a full-stack web developer.
            </p>
            <p>
              I've claimed many projects spanning multiple languages, including
              JavaScript, C#, PHP Java, as well as various others. I'm looking
              to learn as much as I possibly can about software engineering and
              computer science. From front-end dev to machine learning, I need
              to know it all!
            </p>
            <p>
              When I'm not doing computer stuff you'll find me on some hill
              hiking, biking, or just trying to get a good shot.
            </p>
            <p>
              Get in touch:&nbsp;
              <a href='mailto:alexsmith11nd@gmail.com' style={styles}>
                <u>alexsmith11nd@gmail.com</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * mailto links are annoying - overide the blue link text
 */
const styles = {
  color: 'inherit'
};

export default Main;
