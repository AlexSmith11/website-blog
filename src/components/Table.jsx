import React from 'react';
import '../styles/git.css';

/**
 * mailto links are annoying - overide the blue link text
 */
const styles = {
  color: '#64ffda',
  overflow: 'auto'
};

const cursorStyle = {
  cursor: 'pointer'
};

const Table = () => {
  return (
    <div className='text'>
      <div>
        <table className='table-hover' onMouseOver=''>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Language</th>
              <th scope='col'>Created&nbsp;At</th>
              <th scope='col'>Size</th>
            </tr>
          </thead>
          <tbody onMouseOver=''>
            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/website-blog',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/website-blog'>
                  Website
                </a>
              </td>
              <td>Current Website.</td>
              <td>JS, React</td>
              <td>19/04/2020</td>
              <td>3.13MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/Fallout4CharacterGen',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/Fallout4CharacterGen'>
                  Fallout 4 Character generator
                </a>
              </td>
              <td>
                RPG character generator. Parses CSVs into JSON to use elsewhere.
                Produces a list of stats to use in game.
              </td>
              <td>C#, .NET Core</td>
              <td>31/05/2021</td>
              <td>700KB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/game-of-life',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/game-of-life'>
                  Game of Life
                </a>
              </td>
              <td>An implementation of Conways&apos;s Game of Life.</td>
              <td>Typescript, React</td>
              <td>9/01/2021</td>
              <td>8.64KB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/CAM-translator',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/CAM-translator'>
                  CAM Translator
                </a>
              </td>
              <td>CAM / ASCII translator and transmitter for the Arduino.</td>
              <td>C++</td>
              <td>22/11/2016</td>
              <td>472KB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/FullCalendarScheduler',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/FullCalendarScheduler'>
                  Full Calendar Scheduler
                </a>
              </td>
              <td>
                Complex insertion sort of two lists of dates. lots of ES6 loops.
              </td>
              <td>JS, React</td>
              <td>27/11/2019</td>
              <td>1.05MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/MajorProjectMK2',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/MajorProjectMK2'>
                  Dissertation
                </a>
              </td>
              <td>
                Android app that takes all known exoplanets and displays them in
                a friendly manner, giving users lots of info on each.
              </td>
              <td>Android, Java</td>
              <td>03/02/2019</td>
              <td>52.7MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open('https://github.com/Pyxyll/Form-pc', '_blank')
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/Pyxyll/Form-pc'>
                  Form-PC
                </a>
              </td>
              <td>
                Full-Stack exercise that I wanted to do to get to know the JS
                ecosystem.
              </td>
              <td>NextJS, Node/Express, PostgreSQL</td>
              <td>13/03/2020</td>
              <td>12.55MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/monster-hunter-dictionary',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/monster-hunter-dictionary'>
                  Monster Hunter Dictionary
                </a>
              </td>
              <td>WIP Dictionary of all things Monster Hunter.</td>
              <td>JS, React</td>
              <td>21/02/2020</td>
              <td>7.5MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/product-cards',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/product-cards'>
                  Product Cards
                </a>
              </td>
              <td>Broad front-end / design exercise.</td>
              <td>JS, React</td>
              <td>15/02/2020</td>
              <td>6.6MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open(
                  'https://github.com/AlexSmith11/basic-android-app',
                  '_blank'
                )
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  href='https://github.com/AlexSmith11/basic-android-app'>
                  Android TODO
                </a>
              </td>
              <td>
                Android TODO app with DB. Uses the new Android Room database
                mvvc architecture.
              </td>
              <td>Android, Java</td>
              <td>10/10/2018</td>
              <td>37.2MB</td>
            </tr>

            <tr
              onMouseOver=''
              style={cursorStyle}
              onClick={() =>
                window.open('https://github.com/AlexSmith11/uni-db', '_blank')
              }>
              <td scope='row'>
                <a
                  className='fromLeft'
                  target='blank'
                  href='https://github.com/AlexSmith11/uni-db'>
                  Uni DB
                </a>
              </td>
              <td>
                Categorising Uni lectures and various attributes into a
                relational SQL schema.
              </td>
              <td>SQL</td>
              <td>07/10/2018</td>
              <td>2.45MB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
