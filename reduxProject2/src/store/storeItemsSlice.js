import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const storeItemsSlice = createSlice({
    name: "store",
    initialState: initialState,
    reducers: {},
});
