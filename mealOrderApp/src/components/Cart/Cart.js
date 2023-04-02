import React, { useContext, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import { Modal } from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { OrderFormInput } from './OrderFormInput';

export const Cart = ({ closeCart }) => {
    const cartCtx = useContext(CartContext);
    const [displayOrderForm, setDisplayOrderForm] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const handleOrderClick = () => {
        setDisplayOrderForm(true);
    };

    const submitForm = (event) => {
        event.PreventDefault();
    };

    const form = (
        <form onSubmit={submitForm} className={classes['container']}>
            <div className={classes['block']}>
                {OrderFormInput('Name:')}
                {OrderFormInput('LastName:')}
            </div>
            <div className={classes['block']}>
                {OrderFormInput('City:')}
                {OrderFormInput('Street:')}
                {OrderFormInput('House Number:')}
            </div>
        </form>
    );

    return (
        <Modal closeCart={closeCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeCart}>
                    Close
                </button>
                {hasItems && (
                    <button
                        className={classes.button}
                        onClick={handleOrderClick}
                    >
                        Order
                    </button>
                )}
            </div>
            {displayOrderForm && form}
        </Modal>
    );
};
