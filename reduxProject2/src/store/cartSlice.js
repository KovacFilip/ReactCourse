import { createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./ui-slice";

const initialState = { items: [] };

const cartSlice = createSlice({
    name: "cart",
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

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            setNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed!");
            }
        };

        try {
            await sendRequest();
            dispatch(
                setNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                setNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};

export const { addItem, addOne, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
