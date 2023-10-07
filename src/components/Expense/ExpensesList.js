import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ExpensesList = (props) => {
  const [editedExpense, setEditedExpense] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);


  const handleDelete = (expenseId) => {
    props.onDeleteExpense(expenseId);
  };

  const handleEdit = (expense) => {
    setEditedExpense(expense);
    setShowEditModal(true);
  };

  const handleSave = () => {
    if (editedExpense) {
      // Update the edited expense in Firebase
      fetch(`https://expensetracker-20e7a-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${editedExpense.id}.json`, {
        method: 'PUT',
        body: JSON.stringify(editedExpense),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Expense updated:', data);
          setEditedExpense(null);
        })
        .catch((error) => console.error('Error updating expense:', error));
    }
  };

 const handleCancelEdit = () => {
    setEditedExpense(null);
    setShowEditModal(false);
  };

  const handleInputChange = (event, field) => {
    const newValue = event.target.value;
    setEditedExpense((prevExpense) => {
      return {
        ...prevExpense,
        [field]: newValue,
      };
    });
  };

  return (
    <div className="m-2">
      <h2 className="mt-4 mb-5">Expenses</h2>
      <ul className="list-group">
        {props.expenses.map((expense) => (
          <li
            key={expense.id}
            className="list-group-item mb-3 rounded bg-info d-flex justify-content-between align-items-center"
          >
            <div>
              {editedExpense && editedExpense.id === expense.id ? (
                <div>
                  {/* Your input fields for editing */}
                </div>
              ) : (
                <div>
                  <strong>Amount:</strong> ${expense.amount}
                  <br />
                  <strong>Description:</strong> {expense.description}
                  <br />
                  <strong>Category:</strong> {expense.category}
                </div>
              )}
            </div>
            <div>
              {editedExpense && editedExpense.id === expense.id ? (
                <div>
                  <button onClick={handleSave} className="btn btn-success">
                    Save
                  </button>
                  <button onClick={handleCancelEdit} className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={() => handleDelete(expense.id)} className="btn btn-danger">
                    Delete
                  </button>
                  <button onClick={() => handleEdit(expense)} className="btn btn-warning">
                    Edit
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <Modal show={showEditModal} onHide={handleCancelEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your input fields for editing */}
          <div>
            Amount: <input type="text" value={editedExpense ? editedExpense.amount : ''} onChange={(event) => handleInputChange(event, 'amount')} />
          </div>
          <div>
            Description: <input type="text" value={editedExpense ? editedExpense.description : ''} onChange={(event) => handleInputChange(event, 'description')} />
          </div>
          <div>
            Category: <input type="text" value={editedExpense ? editedExpense.category : ''} onChange={(event) => handleInputChange(event, 'category')} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpensesList;