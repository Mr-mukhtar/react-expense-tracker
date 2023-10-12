// MainHeader.js
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MainNavigation = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <header>
      <Navbar className='navbar-brand navbar-expand '>
        <Container>
         {!isLoggedIn && <Nav>
            <h4 className='text-primary'>Expense Tracker</h4>
          </Nav>}
          <Nav className='mx-auto'>
           {!isLoggedIn && <NavLink to='/about' className='nav-link mx-3'>
              About Us
            </NavLink>
       }
            {isLoggedIn && (
              <NavLink to='/home' className='nav-link mx-3'>
                {/* home */}
              </NavLink>
            )}
           {!isLoggedIn && <NavLink to='/signin' className='nav-link mx-3'>
              Login
            </NavLink>}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavigation;