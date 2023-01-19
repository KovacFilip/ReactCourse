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
        console.log(state);
        console.log('adding the item');
        const newAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const itemInCartIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        let updatedItems = state.items;

        if (itemInCartIndex === -1) {
            updatedItems = state.items.concat(action.item);
        } else {
            updatedItems[itemInCartIndex].amount += 1;
        }

        return { items: updatedItems, totalAmount: newAmount };
    }
    if (action.type === 'REMOVE_ITEM') {
        const itemInCartIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        let updatedItems = state.items;

        if (itemInCartIndex === -1) {
            return state;
        }

        let currentAmount = state.items[itemInCartIndex].amount;
        let newTotalPrice =
            state.totalAmount - state.items[itemInCartIndex].price;

        if (currentAmount > 1) {
            updatedItems[itemInCartIndex].amount -= 1;
        } else {
            updatedItems.splice(itemInCartIndex, 1);
        }

        if (newTotalPrice < 0) {
            newTotalPrice = 0;
        }

        return { items: updatedItems, totalAmount: newTotalPrice };
    }
    return defaultCartState;
};

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState()
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

    console.log(cartContext);

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};
