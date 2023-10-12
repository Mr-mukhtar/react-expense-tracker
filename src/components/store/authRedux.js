import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: localStorage.getItem('token') ? true : false,
    idToken: localStorage.getItem('idToken') || '',
    UID: localStorage.getItem('UID') || '',
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      login(state, action) {
        localStorage.setItem('token', 'true'); // Store as string 'true'
        localStorage.setItem('idToken', action.payload.idToken);
        localStorage.setItem('UID', action.payload.UID);
  
        state.isLoggedIn = true;
        state.idToken = action.payload.idToken;
        state.UID = action.payload.UID;
      },
      logout(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('idToken');
        localStorage.removeItem('UID');
  
        state.isLoggedIn = false;
        state.idToken = '';
        state.UID = '';
      },
    },
  });
  

export const authActions = authSlice.actions;
export default authSlice.reducer;
