import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignInPage from './components/login/SIgnInPage';
import SignUpPage from './components/login/SignUpPage';
import Home from './components/home/Home';
import Layout from './components/Layout/Layout';
import AboutUs from './components/Layout/About/About';
import Profile from './components/login/Profile/Profile';
import ForgetPassword from './components/login/Forget password/ForgetPassword';
import AuthContext from './components/Context/AuthContext';

function App() {

   const CartCtx = useContext(AuthContext);

  return (


    <Layout>
      <main>
        <Switch>
          {CartCtx.isLoggedIn && (
            <Route path='/home'>
            <Home />
          </Route>
          )}

          <Route path='/signin'>
            <SignInPage />
          </Route>

          <Route path='/signup'>
            <SignUpPage />
          </Route>
          

          <Route path='/profile'>
            <Profile />
          </Route>
          
          <Route path='/forgetpassword'>
            <ForgetPassword />
          </Route>
          <Route path='/'>
            <AboutUs />
          </Route>
         
        </Switch>
      </main>
      <ToastContainer />
    </Layout>
  );
}

export default App;
