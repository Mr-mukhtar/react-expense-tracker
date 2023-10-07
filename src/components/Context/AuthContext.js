import React, { useState} from 'react';



const AuthContext = React.createContext({
  idToken: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  UID: ''
});





export const AuthProvider = (props) => {
  const [token,setToken]=useState(null)
  const [userId,setUserId]=useState('')
  const isLoggedin= !!token

  const loginHandler = (idToken, Uid) => {
    setToken(idToken);
    setUserId(Uid);
    localStorage.setItem('idToken', idToken);
  }
  

  const logoutHandler = () => {
    setToken(null);
    setUserId('');
    localStorage.removeItem('idToken');
    
  }

  
  
  const contextValue = {
    token: token,
    isLoggedIn: isLoggedin,
    login: loginHandler,
    logout: logoutHandler,
    UID: userId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
