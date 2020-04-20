import React from 'react';
/**
 * Import components
 */
import Navbar from './components/navbar.jsx';
import Main from './pages/home';
import GitRepo from './pages/git';
import Blog from './pages/blog';
import About from './pages/about';
import Photos from './pages/photos';

/**
 * Import router
 */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch // eslint-disable-line no-unused-vars
} from 'react-router-dom';

/**
 * Import any image, fonts, styling, etcs
 */
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from='/' to='home'></Redirect>
          <Route path='/home'>
            <Main />
          </Route>
          <Route path='/git'>
            <GitRepo />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/photos'>
            <Photos />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
