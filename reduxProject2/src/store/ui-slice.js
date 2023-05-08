import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggleVisible(state, action) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const { toggleVisible } = uiSlice.actions;
export default uiSlice.reducer;
