// Expenses.js
import React, { useCallback, useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../store/expRedux';

const Expenses = () => {
  const userId = useSelector((state) => state.auth.UID);
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch=useDispatch()
  const updateExpenses = useCallback(async (expenseId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${userId}/${expenseId}.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

        const data = await response.json();
        
        const loadedExpenses = [];
        for (const key in data) {
           
            loadedExpenses.push({
              id: key,
              description: data[key].description,
              amount: data[key].amount,
              category: data[key].category
            });
         
        }
        setExpenses(loadedExpenses);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [userId]);

  const addHandler = async (expense, expenseId) => {
    try {
      const response = await fetch(
        `https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${userId}/${expenseId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(expense)
          ,
          headers: {
            'content-type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      
      toast.success('Expense added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      // Refresh the expenses after adding a new one
      updateExpenses();
    } catch (error) {
      toast.error('Error adding expense. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  const deleteHandler = async (id, expenseId) => {
    try {
      const response = await fetch(
        `https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${userId}/${expenseId}/${id}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedExpenses);
      dispatch(expenseActions.descriptions(''))
      dispatch(expenseActions.categorys(''))
      dispatch(expenseActions.amounts(0))
      toast.success('Expense deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      
      toast.error('Error deleting expense. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    updateExpenses();
  }, [updateExpenses]);

  let content = <p>Found no Expense.</p>;

  if (expenses.length > 0) {
    content = (
      <ExpensesList expenses={expenses} onDeleteExpense={deleteHandler} onUpdateExpense={setExpenses} />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <ExpenseForm onAddExpense={addHandler} />
      <section>{content}</section>
    </div>
  );
};

export default Expenses;
