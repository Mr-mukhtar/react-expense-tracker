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

  const loginHandler=(id,Uid)=>{
      setToken(id)
      setUserId(Uid)
      console.log('idToken:', id);
  }



  const logoutHandler = () => {
    setToken(null);
 

    
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
