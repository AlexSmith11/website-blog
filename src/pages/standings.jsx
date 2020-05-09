import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/cv.css';

/**
 * Blog page
 */
const About = () => {
  let match = useRouteMatch;

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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Amber</th>
                <td>N/A</td>
                <td>48.5</td>
                <td>41</td>
                <td>46</td>
                <td>41</td>
                <td>29</td>
                <td></td>
              </tr>
              <tr>
                <th>Elliot</th>
                <td>60</td>
                <td>79.5</td>
                <td>59</td>
                <td>52</td>
                <td>53</td>
                <td>31</td>
                <td></td>
              </tr>
              <tr>
                <th>Daisy</th>
                <td>41.5</td>
                <td>63</td>
                <td>49</td>
                <td>48</td>
                <td>45</td>
                <td>31</td>
                <td></td>
              </tr>
              <tr>
                <th>Matty</th>
                <td>33.5</td>
                <td>N/A</td>
                <td>21.5</td>
                <td>30</td>
                <td>22</td>
                <td>17</td>
                <td></td>
              </tr>
              <tr>
                <th>Brad</th>
                <td>34</td>
                <td>42</td>
                <td>18</td>
                <td>N/A</td>
                <td>21</td>
                <td>14</td>
                <td></td>
              </tr>
              <tr>
                <th>Courtney</th>
                <td>36</td>
                <td>38</td>
                <td>N/A</td>
                <td>25</td>
                <td>19</td>
                <td>21</td>
                <td></td>
              </tr>
              <tr>
                <th>Jess</th>
                <td>34.5</td>
                <td>40</td>
                <td>N/A</td>
                <td>19</td>
                <td>N/A</td>
                <td>20</td>
                <td></td>
              </tr>
              <tr>
                <th>Kai</th>
                <td>52</td>
                <td>75</td>
                <td>49</td>
                <td>47</td>
                <td>45</td>
                <td>N/A</td>
                <td></td>
              </tr>
              <tr>
                <th>Alex</th>
                <td>59</td>
                <td>77</td>
                <td>60</td>
                <td>50</td>
                <td>54</td>
                <td>46</td>
                <td></td>
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
