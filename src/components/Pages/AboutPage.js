import React from 'react'
import SignUpPage from '../login/SignUpPage'

const AboutPage = () => {
  return (
    <div
  
    >
        <SignUpPage/>
        hh
        <SignUpPage/>
    
    </div>
  )
}

export default AboutPage
// import React, { useRef } from 'react';
// import { Container, Row, NavLink } from 'react-bootstrap';

// const SignUpPage = () => {
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();
//   const confirmPasswordInputRef = useRef();

//   const isEmailValid = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
  
//  // Check if passwords match
//  const passwordsMatch = !!(passwordInputRef.current.value && confirmPasswordInputRef.current.value && passwordInputRef.current.value === confirmPasswordInputRef.current.value);


//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const enteredEmail = emailInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;
//     const enteredConfirmPassword = confirmPasswordInputRef.current.value;
 

//     fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA91ErKO8Nrqrc-QuZKSABBU-WXT2EpVbw', {
//         method: 'POST',
//         body: JSON.stringify({
//           email: enteredEmail,
//           password: enteredPassword,
//           returnSecureToken: true,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((response) => {
       
//           if (response.ok) {
//             return response.json();
//           }
//         }).catch((error) => {
//             alert(error.message);
//           });






//     // Rest of the signup logic

//     if (!isEmailValid(enteredEmail)) {
//       console.log('Invalid email.');
//       return;
//     }
//     if (enteredPassword !== enteredConfirmPassword) {
//       console.log('Passwords do not match.');
//       return;
//     }

//     // Reset the form
//     emailInputRef.current.value = '';
//     passwordInputRef.current.value = '';
//     confirmPasswordInputRef.current.value = '';

//     console.log('Signing up with:', enteredEmail, enteredPassword);
//   };

//   return (
//     <div>
//       <Container className='w-75 mt-5'>
//         <div className="signup-content bg-light p-4 rounded">
//           <h2 className='text-center'>Sign Up</h2>
//           <form onSubmit={handleSignUp}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 ref={emailInputRef}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 ref={passwordInputRef}
//                 placeholder="Enter your password"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">
//                 Confirm Password:
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 ref={confirmPasswordInputRef}
//                 placeholder="Confirm your password"
                
//               />
//                 {!passwordsMatch && (
//     <div style={{ color: 'red' }}>Passwords do not match</div>
//   )}
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </Container>
//       <br />
//       <Container className='w-75'>
//         <div className="signup-content bg-light p-4 rounded" style={{ border: '1px solid lightcoral', textAlign: "center" }}>
//           <Row>
//             {/* <Col className="justify-content-start"> */}
//               <p className="m-0">Have Not Account? {"  "} <span className='btn p-0'>
//                 <NavLink to="signin">Login</NavLink>
//               </span></p>
//             {/* </Col>
//             <Col className="d-flex justify-content-start"> */}
             
//             {/* </Col> */}
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SignUpPage;
