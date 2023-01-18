import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import { Modal } from '../UI/Modal';
import classes from './Cart.module.css';

export const Cart = ({ closeCart }) => {
    const cartCtx = useContext(CartContext);

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    {item.name}, amount: {item.amount}
                </li>
            ))}
        </ul>
    );

    return (
        <Modal closeCart={closeCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeCart}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
