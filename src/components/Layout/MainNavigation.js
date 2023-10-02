// MainHeader.js
import React from 'react';
import { NavLink} from 'react-router-dom';

import {Container, Nav, Navbar } from 'react-bootstrap';



const MainNavigation = (props) => {
 
  return (
    <header >
     <Navbar className='navbar-brand navbar-expand '  >
     <Container>
        <Nav>
            <h4 className='text-primary'>Expense Tacker</h4>
        </Nav>
          <Nav className="mx-auto">
       
            <NavLink to="welcome" className="nav-link mx-3">
              Home
            </NavLink>
       
            <NavLink to="/product" className="nav-link mx-3">
              Products
            </NavLink>
       
          
            <NavLink to="/about"className="nav-link mx-3">
              About Us
            </NavLink>
{/*     
            <NavLink to="/auth" className="nav-link mx-5">
              LOGIN
            </NavLink> */}
          </Nav>
      </Container>
      </Navbar>

    </header>
  );
};

export default MainNavigation;
