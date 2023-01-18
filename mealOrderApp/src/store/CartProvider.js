import React from 'react';
import { CartContext } from './cart-context';

export const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {};

    const removeItemFromCartHanlder = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHanlder,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
