import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async(e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
    // Check if passwords match
    if (enteredPassword !== enteredConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    } else {
      try {
        const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(`${data.email}, Your account has been created!`);
      } else {
        const data = await response.json();
        toast.error('Sign up failed: ' + data.error.message);
      }
    } catch (error) {
     
      toast.error('Sign up failed. Please try again later.');
    }
  }

    // Rest of the signup logic

    if (!isEmailValid(enteredEmail)) {
      console.log('Invalid email.');
      return;
    }

    // Reset the form
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    confirmPasswordInputRef.current.value = '';
  };

  return (
    <div
      className='signup-page d-flex justify-content-center align-items-center'
      style={{
        minHeight: '100vh',
        backgroundImage:
          "url('https://source.unsplash.com/weekly?nature/400x600')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container className='p-5'>
        <Container className='w-50  p-3 '>
          <div className='signup-content bg-light p-4 rounded'>
            <h2 className='text-center'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email:
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  ref={emailInputRef}
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password:
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  ref={passwordInputRef}
                  placeholder='Enter your password'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='confirmPassword' className='form-label'>
                  Confirm Password:
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='confirmPassword'
                  ref={confirmPasswordInputRef}
                  placeholder='Confirm your password'
                />
              </div>

              <br />
              <button type='submit' className='btn btn-primary w-100'>
                Sign Up
              </button>
            </form>
          </div>
        </Container>

        <Container className='w-50'>
          <div
            className='signup-content bg-light p-2 rounded'
            style={{ border: '1px solid lightcoral', textAlign: 'center' }}
          >
            <p className='m-0' style={{ fontSize: '20px', fontFamily: 'bold' }}>
              Already Have Account? {'    '}{' '}
              <span className='btn p-0'>
                <Link to='/signin'>LOGIN</Link>
              </span>
            </p>
          </div>
        </Container>
      </Container>
      <br />
      <br />
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
