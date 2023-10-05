import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const [Email, setEmail] = useState('');
  const navigate = useNavigate();

  const StoreEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordChangeHandler = async (event) => {
    event.preventDefault();
    navigate('/');
    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC3xsAFKErtyTNybpuyKLlB9KUsc837SZY',
        {
          method: 'POST',
          body: JSON.stringify({
            requestType: 'PASSWORD_RESET',
            email: Email,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (res.ok) {
        alert('Password reset link has been sent to your e-mail');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      alert('Something went wrong');
    }
  };

  return (
    <form
      className='w-95 max-w-25rem m-2rem-auto'
      onSubmit={PasswordChangeHandler}
    >
      <div className='mb-3'>
        <label
          htmlFor='new-password'
          className='font-weight-bold mb-0.5rem text-dark'
        >
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='new-password'
          value={Email}
          onChange={StoreEmailHandler}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Send Link
      </button>
    </form>
  );
};

export default NewPassword;
