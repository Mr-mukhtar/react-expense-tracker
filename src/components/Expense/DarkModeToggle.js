import React  from 'react';
import { Form } from 'react-bootstrap';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isDarkMode);
  };

  return (
    <Form.Check
      type="switch"
      id="custom-switch"
      label="Toggle Dark Mode"
      checked={isDarkMode}
      onChange={handleToggle}
      style={{ color: isDarkMode ? 'white' : 'black' }}
    />
  );
};

export default DarkModeToggle;
