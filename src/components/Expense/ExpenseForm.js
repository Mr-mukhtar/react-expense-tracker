import React, { useRef } from 'react';

const ExpenseForm = (props) => {
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
    props.onAddExpense(expense);
    // Clear the text fields
    amountRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value = '';
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount:</label>
          <input
            type="number"
            id="amount"
            ref={amountRef}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <input
            type="text"
            id="description"
            ref={descriptionRef}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <select
            id="category"
            ref={categoryRef}
            className="form-select"
          >
            <option value=''>Select Category</option>
            <option value='Food'>Food</option>
            <option value='Petrol'>Petrol</option>
            <option value='Salary'>Salary</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button type='submit' className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
