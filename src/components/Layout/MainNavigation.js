// MainHeader.js
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';

const MainNavigation = (props) => {




  return (
    <header>
      
      <Navbar className='navbar-brand navbar-expand '>
        <Container>
          <Nav>
            <h4 className='text-primary'>Expense Tacker</h4>
          </Nav>
          <Nav className='mx-auto'>
           
            <NavLink to='/about' className='nav-link mx-3'>
              About Us
            </NavLink>
           
              <NavLink to='/signin' className='nav-link mx-3'>
                Login
              </NavLink>
         
              <NavLink to='/profile' className='nav-link mx-3'>
                Profile
              </NavLink>
   </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavigation;
