import React, { useState} from 'react';



const AuthContext = React.createContext({
  idToken: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  UID: ''
});





export const AuthProvider = (props) => {
  const [isToken,setToken]=useState(null)
  const [userId,setUserId]=useState('')
  const isLoggedin= !!isToken;

  const loginHandler=(id,Uid)=>{
      setToken(id)
      setUserId(Uid)
      
  }



  const logoutHandler = () => {
    setToken(null);
 

    
  }

  
  
  const contextValue = {
    isToken: isToken,
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
