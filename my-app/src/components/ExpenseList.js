import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  const list = expenses.map((expense, i) => {
    return (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });

  return <div className="expenses">{list}</div>;
}

export default ExpenseList;
