import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';

export const HeaderCartButton = (props) => {
    return (
        <button className={classes.button} {...props}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};
