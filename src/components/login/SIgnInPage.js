import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
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
             className="form-control"
             value={email}
              onChange={handleEmailChange} />


            <br />
            <label>Password:</label>
            <br />
            <input
              type='password'
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </Container>
      <br />
      <Container className='w-75'>
        <div className="signup-content bg-light p-2 rounded" style={{ border: '1px solid lightcoral', textAlign: "center" }}>
       
       
              <p className="m-0" style={{fontSize:"20px", fontFamily:"bold"}}> Have Not Account? {"    "} <span className='btn p-0'>
                <Link to="/signup">SIGNUP</Link>
              </span></p>
              </div>
  
              </Container>
    </div>
  );
};

export default SignInPage;
