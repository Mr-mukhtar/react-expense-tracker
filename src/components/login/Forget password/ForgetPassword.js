import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();

  const passwordChangeHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBV4vjzA4xVgaFjY9T_-bmLyYMCzZqziMY',
        {
          method: 'POST',
          body: JSON.stringify({
            requestType: 'PASSWORD_RESET',
            email: enteredEmail,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.ok) {
        alert('Password reset link has been sent to your email');
      navigate('/signin');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div
      className='signup-page d-flex justify-content-center align-items-center'
      style={{
        minHeight: '100vh',
        backgroundImage: "url('https://source.unsplash.com/1000x1000/?computer password, forget')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      
    >
      <form
        className='w-50 mx-auto max-width-25rem mt-5'
        onSubmit={passwordChangeHandler}
      >
        <div className='mb-3'>
          <label
            htmlFor='new-password'
            className='form-label font-weight-bold text-white'
          >
            Email
          </label>

          <input
            type='email'
            className='form-control'
            id='new-password'
            ref={emailInputRef}
            placeholder='Enter your email'
          />
        </div>
        <div className='mt-4'>
          <button type='submit' className='btn btn-primary'>
            Send Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
