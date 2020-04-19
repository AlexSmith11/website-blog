import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='main'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='blog'>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to='gitRepo'>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to='photos'>
              Photos
            </Nav.Link>
            <Nav.Link as={Link} to='cv'>
              CV
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
