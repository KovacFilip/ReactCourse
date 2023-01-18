import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/CartIcon';
import { CartContext } from '../../store/cart-context';

export const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.items);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} {...props}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};
