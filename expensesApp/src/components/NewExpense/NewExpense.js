import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        onAddExpense(expenseData);
        setShowForm(false);
    };

    const handleClickNewExpense = () => {
        setShowForm(true);
    };

    const hideForm = () => {
        setShowForm(false);
    };

    return (
        <div className="new-expense">
            {!showForm && (
                <button onClick={handleClickNewExpense}>Add new expense</button>
            )}
            {showForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={hideForm}
                />
            )}
        </div>
    );
};

export default NewExpense;
