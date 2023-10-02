import React, {  useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SignInPage = () => {
  const history = useHistory();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) =>
           console.log(data));
           history.replace('/');
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    
  };

  return (
    <div>
      <Container className='w-75 mt-5'>
        <div className='signup-content bg-light p-4 rounded'>
          <h2 className='text-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <br />
            <input
              type='email'
              className='form-control'
              ref={emailInputRef}
              placeholder='Enter your email'
            />

            <br />
            <label>Password:</label>
            <br />
            <input
              type='password'
              className='form-control'
              ref={passwordInputRef}
              placeholder='Enter your password'
            />
            <div className='text-center'>
              <Link to=''>Forgot Password?</Link>
            </div>
            <br />
            <Button type='submit' variant='primary' className='w-100'>
              Login
            </Button>
            <br />
            <br />
          
          </form>
        </div>
      </Container>
      <br />
      <Container className='w-75'>
        <div
          className='signup-content bg-light p-2 rounded'
          style={{ border: '1px solid lightcoral', textAlign: 'center' }}
        >
          <p className='m-0' style={{ fontSize: '20px', fontFamily: 'bold' }}>
            Have Not Account? {'    '}
            <span className='btn p-0'>
              <Link to='/signup'>SIGNUP</Link>
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignInPage;
