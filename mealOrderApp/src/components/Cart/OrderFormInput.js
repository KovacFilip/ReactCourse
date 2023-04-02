import React from 'react';
import useInput from '../../hooks/useInput';
import classes from './Cart.module.css';

export const OrderFormInput = (title) => {
    const obj = useInput();

    return (
        <label>
            {title}
            <input
                className={classes[obj.styles]}
                type="text"
                value={obj.value}
                onBlur={obj.blur}
                onChange={obj.onChangeValue}
            />
        </label>
    );
};
