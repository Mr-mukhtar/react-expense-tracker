import React, { Fragment, useState } from 'react';
import Footer from './Footer';
import MainNavigation from './MainNavigation';

import { useSelector } from 'react-redux';
import DarkModeToggle from '../Expense/DarkModeToggle'; // Import the DarkModeToggle component

const Layout = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = (isDark) => {
    setIsDarkMode(isDark);
  };

  const textColor = isDarkMode ? 'white' : 'black'; 
  return (
    <Fragment>
      <div
        style={{
          backgroundColor: isDarkMode ? '#000' : '#fff',
          color: textColor,
        }}
      >
        <MainNavigation />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          onToggle={handleToggleDarkMode}
        />
        <div>{props.children}</div>
      </div>
      {isLoggedIn && <Footer isDarkMode={isDarkMode} />}
    </Fragment>
  );
};

export default Layout;
