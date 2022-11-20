import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
    const list = expenses.map((expense, i) => {
        return (
            <ExpenseItem
                key={i}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            />
        );
    });

    return <Card className="expenses">{list}</Card>;
}

export default ExpenseList;
