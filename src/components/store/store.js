// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authRedux';
import expRedux from './expRedux';


const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expRedux,
  },
});

export default store;
