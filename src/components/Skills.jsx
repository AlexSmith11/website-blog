import React from 'react';

const Skills = () => {
  return (
    <div className='text'>
      <h3>Skills</h3>
      <p>
        These are some technical skills I have picked up. This isn&apos;t
        necessarily comprehensive, but here are most of the main points:
      </p>
      <h4>Languages</h4>
      <div className='row'>
        <div className='col-5'>
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className='col-5'>
          <ul>
            <li>Python</li>
            <li>PHP</li>
            <li>Swift</li>
          </ul>
        </div>
      </div>
      <h4>Frameworks & Libraries</h4>
      <div className='row'>
        <div className='col-5'>
          <ul>
            <li>Laravel</li>
            <li>React</li>
            <li>Redux</li>
            <li>Xamarin</li>
          </ul>
        </div>
        <div className='col-5'>
          <ul>
            <li>Node/Express</li>
            <li>.NET</li>
            <li>NextJS</li>
            <li>Angular</li>
          </ul>
        </div>
      </div>
      <h4>Tools</h4>
      <div className='row'>
        <div className='col-5'>
          <ul>
            <li>Git/Lab</li>
            <li>AWS</li>
            <li>Wordpress</li>
            <li>Netlify</li>
            <li>Vim</li>
            <li>Gulp</li>
          </ul>
        </div>
        <div className='col-5'>
          <ul>
            <li>Docker</li>
            <li>Apache</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Socket.IO</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
