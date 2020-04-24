import React from 'react';
import '../styles/styles.css';
import '../styles/photos.css';
import '../styles/photo-grid.css';

const WorkExamples = () => {
  return (
    <div className='basic-grid'>
      <div
        className='card'
        style={{
          backgroundImage: "url('https://i.imgur.com/qeHAKGy.png')"
        }}>
        <a></a>
      </div>
      <div
        className='card'
        style={{
          backgroundImage: "url('https://i.imgur.com/6rtHWlz.png')"
        }}></div>
      <div
        className='card'
        style={{
          backgroundImage: "url('https://i.imgur.com/q9eXph0.png')"
        }}></div>
    </div>
  );
};

export default WorkExamples;
