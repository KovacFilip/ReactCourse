import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const itemToAdd = action.payload.item;

            const itemInCart = state.items.find(
                (item) => item.id === itemToAdd.id
            );
            if (itemInCart) {
                itemInCart.amount += 1;
            } else {
                state.items.push(itemToAdd);
            }
        },

        removeOne(state, action) {
            state.items.forEach((item, index) => {
                if (item.id === action.payload) {
                    item.amount -= 1;
                    if (item.amount === 0) {
                        state.items.splice(index, 1);
                    }
                }
            });
        },

        addOne(state, action) {
            state.items.forEach((item, index) => {
                if (item.id === action.payload) {
                    item.amount += 1;
                }
            });
        },
    },
});

export const { addItem, addOne, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
