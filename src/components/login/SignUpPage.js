import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const acceptTermsRef = useRef();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const acceptedTerms = acceptTermsRef.current.checked;
    // Check if the "Accept Terms & Conditions" checkbox is checked
    if (!acceptedTerms) {
      toast.error('Please accept the Terms & Conditions');
      return;
    }

    // Check if passwords match
    if (enteredPassword !== enteredConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Rest of the signup logic
    if (!isEmailValid(enteredEmail)) {
      console.log('Invalid email.');
      return;
    }
    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
            firstName: enteredFirstName,
            lastName: enteredLastName,
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

    // Reset the form
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    confirmPasswordInputRef.current.value = '';
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    acceptTermsRef.current.checked = false;
  };

  return (
    <div
      className='signup-page d-flex justify-content-center align-items-center'
      style={{
        minHeight: '90vh',
        backgroundImage:
          "url('https://source.unsplash.com/800x800/?computer , forget keypad')",
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
              <div className='row mb-3'>
                <div className='col'>
                  <label htmlFor='firstName' className='form-label'>
                    First Name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    ref={firstNameInputRef}
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='col'>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    ref={lastNameInputRef}
                    placeholder='Enter your last name'
                  />
                </div>
              </div>

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
              <div className='row mb-3'>
                <div className='col'>
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
                <div className='col'>
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
              </div>
              <div className='form-group form-check'>
                <input
                  type='checkbox'
                  name='acceptTerms'
                  id='acceptTerms'
                  ref={acceptTermsRef}
                  className='form-check-input'
                />
                <label htmlFor='acceptTerms' className='form-check-label'>
                  Accept Terms & Conditions
                </label>
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
