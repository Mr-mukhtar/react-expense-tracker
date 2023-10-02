import React, { useRef } from 'react';
import { Container, Row, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignUpPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
//   const [isLogin, setIsLogin] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
 // Check if passwords match
 const passwordsMatch = () => {
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;
  
    return !!(password && confirmPassword && password === confirmPassword);
  };


  const handleSignUp = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
 

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw', {
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
      }).then((response) => {
       
          if (response.ok) {
            return response.json().then((data) =>
            console.log(data));
          }
        }).catch((error) => {
            alert(error.message);
          });






    // Rest of the signup logic

    if (!isEmailValid(enteredEmail)) {
      console.log('Invalid email.');
      return;
    }
    if (enteredPassword !== enteredConfirmPassword) {
      console.log('Passwords do not match.');
      return;
    }

    // Reset the form
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    confirmPasswordInputRef.current.value = '';

    console.log('Signing up with:', enteredEmail, enteredPassword);
  };

  return (
    <div>
      <Container className='w-75 mt-5'>
        <div className="signup-content bg-light p-4 rounded">
          <h2 className='text-center'>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                ref={emailInputRef}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordInputRef}
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                ref={confirmPasswordInputRef}
                placeholder="Confirm your password"
                
              />
                {!passwordsMatch && (
    <div style={{ color: 'red' }}>Passwords do not match</div>
  )}
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </Container>
      <br />
      <Container className='w-75'>
        <div className="signup-content bg-light p-2 rounded" style={{ border: '1px solid lightcoral', textAlign: "center" }}>
       
       
              <p className="m-0"style={{fontSize:"20px", fontFamily:"bold"}}>Already Have Account?   {"    "} <span className='btn p-0'>
                <Link to="/signin">LOGIN</Link>
              </span></p>
           
      
        </div>
      </Container>
      <br />
      <br /><br /><br />
    </div>
  );
};

export default SignUpPage;
