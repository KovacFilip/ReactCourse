import React, { useReducer } from 'react';
import { CartContext } from './cart-context';

const defaultCartState = () => {
    return {
        items: [],
        totalAmount: 0,
    };
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const newAmount = (state.totalAmount +=
            action.item.price * action.item.amount);
        return { items: updatedItems, totalAmount: newAmount };
    }
    if (action.type === 'REMOVE_ITEM') {
        console.log('removing an item');
        console.log(action.id);
        return state;
    }
    return defaultCartState;
};

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    };

    const removeItemFromCartHanlder = (id) => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHanlder,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
