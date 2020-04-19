import React from 'react';
/**
 * Import components
 */
import Navbar from './components/navbar.jsx';
import Main from './pages/main';
import GitRepo from './pages/gitRepo';
import Blog from './pages/blog';
import CV from './pages/cv';
import Photos from './pages/photos';

/**
 * Import router
 */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
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
          <Redirect exact from='/' to='main'></Redirect>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/gitRepo'>
            <GitRepo />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/photos'>
            <Photos />
          </Route>
          <Route path='/cv'>
            <CV />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
