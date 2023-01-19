import React, { useRef, useState } from 'react';
import { Input } from '../../UI/Input';
import classes from './MealItemForm.module.css';

export const MealItemForm = ({ id, onAddHandler }) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return -1;
        }
        setAmountIsValid(true);
        onAddHandler(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: 'amount_' + id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};
