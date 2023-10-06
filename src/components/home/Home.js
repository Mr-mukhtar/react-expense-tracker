
//home.js
import React, { Fragment, useContext } from 'react';

import { Button } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';

import { Link } from 'react-router-dom';

const Home = () => {
  
  const ctx = useContext(AuthContext);

  
  const idToken = ctx.idToken;


  const logoutHandler = () => {
    ctx.logout();
    localStorage.removeItem('idToken');

  
  };

  const VerifyHandler = async () => {
    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
        {
          method: 'POST',
          body: JSON.stringify({
            requestType: 'VERIFY_EMAIL',
            idToken: idToken,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (res.ok) {
        alert('Verification Mail Sent');
      } else {
        throw new Error('Something Went Wrong');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>Welcome to expense tracker!!</h1>
  
        <p style={{ textAlign: 'end' }}>
          Your profile is incomplete{' '}
          <span className='btn p-0'>
                <Link to='/profile'>Complete Now</Link>
              </span>

        </p>
      
      
        <p style={{ textAlign: 'end' }}>
          <Button onClick={VerifyHandler} variant='Primary'>
            {' '}
            Verify your E-mail
          </Button>
        </p>
    
      <br />
      <p>This is Expense Tracker</p>
      <Button variant='light' onClick={logoutHandler}>
        Logout
      </Button>
    </Fragment>
  );
};

export default Home;
