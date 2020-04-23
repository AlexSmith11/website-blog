import React from 'react';

const Table = () => {
  return (
    <div className='text'>
      <p>[Big Repo table here]</p>
      <p>
        <a href='https://github.com/AlexSmith11' style={styles}>
          <u>[Link to my GitHub page]</u>
        </a>
      </p>
      <table>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Favorite Color</th>
        </tr>
        <tr>
          <td>Jim</td>
          <td>00001</td>
          <td>Blue</td>
        </tr>
        <tr>
          <td>Sue</td>
          <td>00002</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>Barb</td>
          <td>00003</td>
          <td>Green</td>
        </tr>
      </table>
    </div>
  );
};

/**
 * mailto links are annoying - overide the blue link text
 */
const styles = {
  color: 'inherit'
};

export default Table;
