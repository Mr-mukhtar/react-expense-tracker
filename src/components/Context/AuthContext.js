// // AuthProvider.js
// import React, { useState, useEffect } from 'react';

// const AuthContext = React.createContext({
//   token: '',
//   isLoggedIn: false,
//   login: (uid) => {},
//   logout: () => {},
  
// });

// export const AuthProvider = (props) => {
//   const initialState= localStorage.getItem('token')
//   const [token,setToken]=useState(initialState)
//   const [userId,setUserId]=useState('')
//   const isLoggedin= !!token

//   const loginHandler = (id,email)=>{
//     setToken(id)
//     setUserId(email)
//     localStorage.setItem('token',id)
    
// }
//   const logoutHandler = () => {
//     setToken(null)
//     localStorage.removeItem('token')
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: isLoggedIn,
   
//     login: loginHandler,
//     logout: logoutHandler,
//   };
  

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
