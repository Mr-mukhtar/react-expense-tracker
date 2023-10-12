import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { expenseActions } from '../store/expRedux';

const ExpenseForm = (props) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const userId = useSelector((state) => state.auth.UID);
  const dispatch = useDispatch();
  const [isPremium, setIsPremium] = useState(false);

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    dispatch(expenseActions.amounts(e.target.value));
    setIsPremium(parseInt(e.target.value, 10) > 10000);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    dispatch(expenseActions.descriptions(e.target.value));
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    dispatch(expenseActions.categorys(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isPremium) {
      toast.error('Access Denied: Premium Feature is currently unavailable',{
        autoClose: 3000,
      });
      return;
    }
    if (!amount || !description || !category) {
      toast.error('Please fill in all fields.', {
        autoClose: 3000,
      });
      return;
    }

    const expense = {
      amount,
      description,
      category,
      userId,
    };
    props.onAddExpense(expense);

    // Clear the text fields
    setAmount('');
    setDescription('');
    setCategory('');

   
  };

  return (
    <div className='container mt-4 p-4 rounded' style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className='mb-4'>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Money Spent (in Rs)
          </label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={handleChangeAmount}
            className='form-control'
          />
          {isPremium && <span style={{ color: 'red' }}>Amount is more than 100000</span>}
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description:
          </label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={handleChangeDescription}
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category:
          </label>
          <select
            id='category'
            value={category}
            onChange={handleChangeCategory}
            className='form-select'
          >
            <option value=''>Select Category</option>
            <option value='Food'>Food</option>
            <option value='Petrol'>Petrol</option>
            <option value='Salary'>Salary</option>
            <option value='Entertainment'>Entertainment</option>
          </select>
        </div>
        <br /> <br />
        {isPremium ? (
          <div className='d-flex justify-content-end'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => {
                handleSubmit(); 
           
              }}
            >
              Unlock Premium
            </button>
          </div>
        ) : (
          <button type='submit' className='btn btn-primary'>
            Add Expense
          </button>
        )}
      </form>
    </div>
  );
};

export default ExpenseForm;
