import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import { Container, Form, Button } from 'react-bootstrap';

const ExpenseForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      amount,
      description,
      category,
    };
    setExpenses([...expenses, newExpense]);
    setAmount('');
    setDescription('');
    setCategory('');
  };

  return (
    <Container className='mb-5'>
      <Form onSubmit={handleSubmit } className='p-5'>
        <Form.Group>
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Category:</Form.Label>
          <Form.Control
            as='select'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''>Select Category</option>
            <option value='Food'>Food</option>
            <option value='Petrol'>Petrol</option>
            <option value='Salary'>Salary</option>
            <option value='emi'>EMI</option>
            <option value='rent'>Rent</option>
           
          </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Add Expense
        </Button>
      </Form>

      <ExpensesList expenses={expenses} />
    </Container>
  );
};

export default ExpenseForm;
