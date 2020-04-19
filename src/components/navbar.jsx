import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

class TopNav extends Component {
  render() {
    return (
      <div className='navbarTop'>
        <Navbar variant='light' className='navbar-color-1'>
          <Nav className='mr-auto'>
            <div className='navbutton'>
              <Nav.Link as={Link} to='main'>
                Home
              </Nav.Link>
            </div>
            <div className='navbutton'>
              <Nav.Link as={Link} to='blog'>
                Blog
              </Nav.Link>
            </div>
            <div className='navbutton'>
              <Nav.Link as={Link} to='gitRepo'>
                Projects
              </Nav.Link>
            </div>
            <div className='navbutton'>
              <Nav.Link as={Link} to='photos'>
                Photo Gallery
              </Nav.Link>
            </div>
            <div className='navbutton'>
              <Nav.Link as={Link} to='cv'>
                CV
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
