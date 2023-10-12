///Home.js

import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Expenses from '../Expense/Expenses';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authRedux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const idToken = useSelector((state) => state.auth.idToken);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const navigateToProfile = () => {
    navigate('/profile');
  };


  const verifyHandler = async () => {
    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBV4vjzA4xVgaFjY9T_-bmLyYMCzZqziMY',
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
        toast.success('Verification Mail Sent');
      } else {
        throw new Error('Something Went Wrong');
      }
    } catch (err) {
      toast.error('Error verifying email: ' + err.message);
    }
  };

  return (
    <Fragment>
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Welcome to the expense tracker!!
        </h1>

        {isLoggedIn && (
          <p style={{ textAlign: 'end' }}>
          Your profile is incomplete {'    '}
          <span className='btn p-0' onClick={navigateToProfile} style={{ color: 'blue',fontSize: '18px'  }}>
            Complete Now
          </span>
        </p>
        
        )}

        {isLoggedIn && (
          <p style={{ textAlign: 'end' }}>
            <Button onClick={verifyHandler} variant='primary'>
              Verify your E-mail
            </Button>
          </p>
        )}

        {/* <br />
        <p>This is the Expense Tracker</p> */}
        <Expenses />

        <Button variant='danger' onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </Fragment>
  );
};

export default Home;
