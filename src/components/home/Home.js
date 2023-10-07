//home.js
import React, { Fragment, useContext } from 'react';

import { Button } from 'react-bootstrap';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import Expenses from '../Expense/Expenses';

const Home = () => {
  const ctx = useContext(AuthContext);

  const isToken = ctx.isToken;

  const logoutHandler = () => {
    ctx.logout();
  };

  const VerifyHandler = async () => {
    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBV4vjzA4xVgaFjY9T_-bmLyYMCzZqziMY',
        {
          method: 'POST',
          body: JSON.stringify({
            requestType: 'VERIFY_EMAIL',
            idToken:  isToken,
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
        <Button onClick={VerifyHandler} variant='primary'>
          Verify your E-mail
        </Button>
      </p>

      <br />
      <p>This is Expense Tracker</p>
      <Expenses/>
      <Button variant='light' onClick={logoutHandler}>
        Logout
      </Button>
    </Fragment>
  );
};

export default Home;
