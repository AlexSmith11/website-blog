import React from 'react';

const Table = () => {
  return (
    <div className='text'>
      <div style={styles}>
        <table className='table-hover'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Language</th>
              <th scope='col'>Created&nbsp;At</th>
              <th scope='col'>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/website-blog'
                  style={styles}>
                  Website
                </a>
              </td>
              <td>Current Website.</td>
              <td>JS, React</td>
              <td>19/04/2020</td>
              <td>3.13MB</td>
            </tr>

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/game-of-life'
                  style={styles}>
                  Game of Life
                </a>
              </td>
              <td>An implementation of Conways&apos;s Game of Life.</td>
              <td>Typescript, React</td>
              <td>9/01/2021</td>
              <td>8.64KB</td>
            </tr>

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/CAM-translator'
                  style={styles}>
                  CAM Translator
                </a>
              </td>
              <td>CAM / ASCII translator and transmitter for the Arduino.</td>
              <td>C++</td>
              <td>22/11/2016</td>
              <td>472KB</td>
            </tr>

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/FullCalendarScheduler'
                  style={styles}>
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

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/MajorProjectMK2'
                  style={styles}>
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

            <tr>
              <td scope='row'>
                <a href='https://github.com/Pyxyll/Form-pc' style={styles}>
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

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/monster-hunter-dictionary'
                  style={styles}>
                  Monster Hunter Dictionary
                </a>
              </td>
              <td>WIP Dictionary of all things Monster Hunter.</td>
              <td>JS, React</td>
              <td>21/02/2020</td>
              <td>7.5MB</td>
            </tr>

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/product-cards'
                  style={styles}>
                  Product Cards
                </a>
              </td>
              <td>Broad front-end / design exercise.</td>
              <td>JS, React</td>
              <td>15/02/2020</td>
              <td>6.6MB</td>
            </tr>

            <tr>
              <td scope='row'>
                <a
                  href='https://github.com/AlexSmith11/basic-android-app'
                  style={styles}>
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

            <tr>
              <td scope='row'>
                <a href='https://github.com/AlexSmith11/uni-db' style={styles}>
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

/**
 * mailto links are annoying - overide the blue link text
 */
const styles = {
  color: 'inherit',
  overflow: 'auto'
};

export default Table;
