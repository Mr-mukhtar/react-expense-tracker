import React, { Fragment, useContext } from 'react';
import Footer from './Footer';
import MainNavigation from './MainNavigation';
import AuthContext from '../Context/AuthContext';
import Home from '../home/Home';

const Layout = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  
  return (
    <Fragment>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Fragment>
          <MainNavigation />
          <div>{props.children}</div>
      
        </Fragment>
      )}
          {isLoggedIn && <Footer />}
    </Fragment>
  );
};

export default Layout;
