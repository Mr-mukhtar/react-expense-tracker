import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignInPage from './components/login/SIgnInPage';
import SignUpPage from './components/login/SignUpPage';
import Home from './components/home/Home';
import Layout from './components/Layout/Layout';
import AboutUs from './components/About/About';
import Profile from './components/login/Profile/Profile';

function App() {

  return (
    <Layout>
      <main>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/signin'>
            <SignInPage />
          </Route>

          <Route path='/signup'>
            <SignUpPage />
          </Route>
          

          <Route path='/profile'>
            <Profile />
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
