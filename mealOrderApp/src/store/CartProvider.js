import React, { useState } from 'react';
import { CartContext } from './cart-context';

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCartHandler = (item) => {
        console.log(item);
        setCartItems((prevState) => [...prevState, item]);
    };

    const removeItemFromCartHanlder = (id) => {};

    const cartContext = {
        items: cartItems,
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
