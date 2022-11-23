import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import ExpensesFilter from './ExpensesFilter';

function ExpenseList({ expenses }) {
    const [year, setYear] = useState('2020');

    const list = expenses
        .filter((expense) => {
            return expense.date.getFullYear().toString() === year;
        })
        .map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            );
        });

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onChangeYear={setYear} />
            {list}
        </Card>
    );
}

export default ExpenseList;
