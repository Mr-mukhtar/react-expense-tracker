import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LoginPage from './components/login/LoginPage'; // Corrected import
import SignInPage from './components/login/SIgnInPage'; // Corrected import
import SignUpPage from './components/login/SignUpPage';

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path='/signin' >
            <SignInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/'>
            <LoginPage />
          </Route>
        </Switch>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
