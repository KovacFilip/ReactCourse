import { createSlice } from '@reduxjs/toolkit';

const initialState = { showing: false, items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const items = state.items;
            const itemToAdd = action.payload.item;
            let alreadyInList = false;

            items.forEach((item) => {
                if (item.title === itemToAdd.title) {
                    item.amount += 1;
                    alreadyInList = true;
                }
            });

            if (!alreadyInList) {
                state.items.push(action.payload.item);
            }
        },
        toggleVisible(state, action) {
            state.showing = !state.showing;
        },

        removeOne(state, action) {
            state.items.forEach((item, index) => {
                if (item.title === action.payload) {
                    item.amount -= 1;
                    if (item.amount === 0) {
                        state.items.splice(index, 1);
                    }
                }
            });
        },

        addOne(state, action) {
            state.items.forEach((item, index) => {
                if (item.title === action.payload) {
                    item.amount += 1;
                }
            });
        },
    },
});

export const { addItem, toggleVisible, addOne, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
