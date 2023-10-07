import React, {  useEffect, useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const updateExpenses = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedExpenses = [];
      for (const key in data) {
        loadedExpenses.push({
          id: key,
          ...data[key],
        });
      }


      setExpenses(loadedExpenses);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    updateExpenses();
  }, []);

  const addHandler = async (expense) => {
    const response = await fetch('https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'content-type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('API Response Data:', data);

    // Refresh the expenses after adding a new one
    updateExpenses();
  };

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(
        `https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${id}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedExpenses);
    } catch (error) {
      console.error('Error deleting expense:', error.message);
    }
  };
  const editHandler = (expense) => {
    setSelectedExpense(expense);
  };

  const clearSelectedExpense = () => {
    setSelectedExpense(null);
  };

  let content = <p>Found no Expense.</p>;

  if (expenses.length > 0) {
    content =  <ExpensesList expenses={expenses} onDeleteExpense={deleteHandler} onEditExpense={editHandler} />
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
