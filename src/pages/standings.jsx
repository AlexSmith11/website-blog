import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/cv.css';

// const printScores = scores => {
//   return scores.map(score => <td key={score}>{score}</td>);
// };

/**
 * Standings page
 */
const About = () => {
  let match = useRouteMatch;

  // Where there is a 0, the person was either not present or the quiz master
  const amberScores = [0, 48.5, 41, 46, 41, 29, 43, 50.5, 34];
  const elliotScores = [60, 79.5, 59, 52, 53, 31, 0, 57, 37];
  const daisyScores = [41.5, 63, 49, 48, 45, 31, 42, 0, 39];
  const mattyScores = [33.5, 0, 21.5, 30, 22, 17, 35, 25, 22];
  const bradScores = [34, 42, 18, 0, 21, 14, 41, 38, 24];
  const courtneyScores = [36, 38, 0, 25, 19, 21, 46, 24.5, 17];
  const jessScores = [34.5, 40, 0, 19, 0, 20, 40, 41, 25];
  const kaiScores = [52, 75, 49, 47, 45, 0, 38, 48, 34];
  const alexScores = [59, 77, 60, 50, 54, 46, 51, 57, 0];

  return (
    <div className='container'>
      <div className='title'>
        <h1>Grand standings for the Quarantine Quiz</h1>
      </div>
      <div className='text'>
        <div style={styles}>
          <table className='table-hover'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Week 1</th>
                <th scope='col'>Week 2</th>
                <th scope='col'>Week 3</th>
                <th scope='col'>Week 4</th>
                <th scope='col'>Week 5</th>
                <th scope='col'>Week 6</th>
                <th scope='col'>Week 7</th>
                <th scope='col'>Week 8</th>
                <th scope='col'>Week 9</th>
                <th scope='col'>Everyone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Amber</th>
                {amberScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Elliot</th>
                {elliotScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Daisy</th>
                {daisyScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Matty</th>
                {mattyScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Brad</th>
                {bradScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Courtney</th>
                {courtneyScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Jess</th>
                {jessScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Kai</th>
                {kaiScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
              <tr>
                <th>Alex</th>
                {alexScores.map(score => (
                  <td key={score}>{score}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  color: 'inherit',
  overflow: 'auto'
};

export default About;
