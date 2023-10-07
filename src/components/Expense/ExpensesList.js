// ExpensesList.js
import React from 'react';

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            Amount: {expense.amount}, Description: {expense.description},
            Category: {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
