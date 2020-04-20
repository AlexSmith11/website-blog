import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import '../styles/navbar.css';

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
        <Navbar variant='light' className='navbar-color-1' expand='lg'>
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
                <Nav.Link as={Link} to='home'>
                  Home
                </Nav.Link>
              </div>
              <div className='navbutton'>
                <Nav.Link as={Link} to='git'>
                  Projects
                </Nav.Link>
              </div>
              <div className='navbutton'>
                <Nav.Link as={Link} to='blog'>
                  Blog
                </Nav.Link>
              </div>
              <div className='navbutton'>
                <Nav.Link as={Link} to='photos'>
                  Gallery
                </Nav.Link>
              </div>
              {/* <div className='navbutton'>
              <Nav.Link as={Link} to='about'>
                About
              </Nav.Link>
            </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />
      </div>
    );
  }
}

export default withRouter(TopNav);
