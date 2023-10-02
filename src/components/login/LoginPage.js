import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = (props) => {
  return (
    <div>
      <div>
        <h1>
          <NavLink to="/signin">SignIn</NavLink>
        </h1>
        <br />
        <br />
        <h1>
          <NavLink to="/signup">SignUp</NavLink>
        </h1>
        <br />
        <br />
        <h2> {props.name ? `Welcome - ${props.name}` : "Login please"} </h2>
      </div>
    </div>
  );
}

export default LoginPage;
