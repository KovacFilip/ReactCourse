import React from 'react';
import classes from '../Login/Login.module.css';

const Input = ({ isValid, type, value, labelText, onBlur, onChange }) => {
    return (
        <div
            className={`${classes.control} ${
                !isValid && value !== '' ? classes.invalid : ''
            }`}
        >
            <label htmlFor={type}>{labelText}</label>
            <input
                type={type}
                id={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;
