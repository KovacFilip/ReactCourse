import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount }) => {
    const [expenseTitle, setExpenseTitle] = useState(title);

    const clickHandler = () => {
        setExpenseTitle('updated title');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
