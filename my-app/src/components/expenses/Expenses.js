import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses({ expenses }) {
    const [year, setYear] = useState('2020');

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onChangeYear={setYear} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
