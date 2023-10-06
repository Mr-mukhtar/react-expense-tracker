import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const ForgetPassword = () => {
  const history = useHistory();
  const emailInputRef = useRef();

  const passwordChangeHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw',
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
        history.replace('/signin');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <form
      className='w-95 mx-auto max-width-25rem mt-5'
      onSubmit={passwordChangeHandler}
    >
      <div className='mb-3'>
        <label htmlFor='new-password' className='form-label'>
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
  );
};

export default ForgetPassword;
