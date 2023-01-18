import React from 'react';
import { Input } from '../../UI/Input';
import classes from './MealItemForm.module.css';

export const MealItemForm = ({ id }) => {
    const submitHandler = (e, el) => {
        e.preventDefault();
        console.log('Adding to the list');
        console.log(e);
        console.log(el);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
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
        </form>
    );
};
