import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const New = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, item]);
    setItem('');
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default New;
