import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import '../styles/navbar.css';

/**
 * Physical render of the navbar and its buttons
 */
class TopNav extends Component {
  propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return (
      <div className='navbarTop'>
        <Navbar expand='lg'>
          <div>
            <h1 className='pageName'>
              {location.pathname.substring(1).charAt(0).toUpperCase() +
                location.pathname.substring(1).slice(1)}
            </h1>
          </div>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <div className='navbutton'>
                <Nav.Link style={stylesText} as={Link} to='home'>
                  Home
                </Nav.Link>
              </div>
              <div className='navbutton'>
                <Nav.Link style={stylesText} as={Link} to='git'>
                  Projects
                </Nav.Link>
              </div>
              <div className='navbutton'>
                <Nav.Link style={stylesText} as={Link} to='photos'>
                  Gallery
                </Nav.Link>
              </div>
              <div className='navbutton'>
                <a
                  href='https://drive.google.com/file/d/1ZhgktGoH7PLSkOcaIAKzeKLHOZAlB84R/view?usp=sharing'
                  style={stylesResumeLink}>
                  <Nav.Link style={stylesResumeText} as='span'>
                    Résumé
                  </Nav.Link>
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <hr /> */}
      </div>
    );
  }
}

const stylesResumeLink = {
  color: 'inherit',
  textDecoration: 'none'
};

const stylesResumeText = {
  color: '#64ffda'
};

const stylesText = {
  color: '#8892b0'
};

export default withRouter(TopNav);
