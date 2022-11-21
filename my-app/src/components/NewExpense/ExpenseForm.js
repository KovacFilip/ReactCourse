import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleChangeHandler = (ev) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: ev.target.value,
            };
        });
    };

    const amountChangeHandler = (ev) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: ev.target.value,
            };
        });
    };

    const dateChangeHandler = (ev) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                date: ev.target.value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date),
        };

        onSaveExpenseData(expenseData);

        setUserInput({
            title: '',
            amount: '',
            date: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={userInput.date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
