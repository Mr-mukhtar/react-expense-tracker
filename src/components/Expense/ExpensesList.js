import React from 'react';

const ExpensesList = (props) => {
  if (!props.expenses) {
    return null;
  }

  const handleDelete = (expenseId) => {
    // Pass the movie ID to the delete handler function from props
    props.onDeleteMovie(expenseId);
  };

  return (
    <div className='m-2'>
      <h2 className="mt-4 mb-5">Expenses</h2>
      <ul className="list-group">
        {props.expenses.map((expense) => (
          <li key={expense.id} className="list-group-item mb-3 rounded bg-info d-flex justify-content-between align-items-center">
            <div>
              <strong>Amount:</strong> ${expense.amount}
              <br />
              <strong>Description:</strong> {expense.description}
              <br />
              <strong>Category:</strong> {expense.category}
            </div>
            <button onClick={() => handleDelete(expense.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
