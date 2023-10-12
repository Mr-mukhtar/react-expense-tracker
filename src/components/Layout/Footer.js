import React from 'react';

const Footer = ({ isDarkMode }) => {
  const footerBackgroundColor = isDarkMode ? '#333' : '#f5f5f5';
  const footerTextColor = isDarkMode ? 'white' : 'black';

  return (
    <footer style={{ backgroundColor: footerBackgroundColor, color: footerTextColor }}>
    <section className='px-4 py-3 bg-yellow-950 sm:px-12' id='Footer'>
        <div className='max-w-5xl mx-auto text-center backGroundcolor -black text-yellow-50'>
          © Expense Tracker | 2023 | All Right Reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
