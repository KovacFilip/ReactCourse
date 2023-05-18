import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggleVisible(state, action) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.message,
            };
        },
    },
});

export const { toggleVisible, setNotification } = uiSlice.actions;
export default uiSlice.reducer;
