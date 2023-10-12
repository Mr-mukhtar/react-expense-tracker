import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignInPage from './components/login/SIgnInPage';
import SignUpPage from './components/login/SignUpPage';
import Home from './components/home/Home';
import Layout from './components/Layout/Layout';
import AboutUs from './components/Layout/About/About';
import ForgetPassword from './components/login/Forget password/ForgetPassword';
import Profile from './components/login/Profile/Profile';
import New from './components/login/New';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Layout>
      <main>
        <Routes>
          {isLoggedIn && <Route path='/' element={<Home />} exect />}
          {!isLoggedIn && <Route path='/' element={<SignInPage />} />}
          <Route path='/home' element={<Home />} exect />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/new' element={<New />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />

          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </main>
      <ToastContainer />
    </Layout>
  );
}

export default App;
