import { createSlice } from '@reduxjs/toolkit';

const initialState = { showing: false, items: [] };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.item);
        },
        toggleVisible(state, action) {
            state.showing = !state.showing;
        },
    },
});

export const { addItem, toggleVisible } = cartSlice.actions;
export default cartSlice.reducer;
