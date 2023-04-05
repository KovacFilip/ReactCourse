import React from 'react';
import classes from './Cart.module.css';

export const OrderFormInput = React.memo(
    ({ title, value, onChangeValue, setBlur, styles }) => {
        return (
            <label>
                {title}
                <input
                    className={classes[styles]}
                    type="text"
                    value={value}
                    onBlur={setBlur}
                    onChange={onChangeValue}
                />
            </label>
        );
    }
);
