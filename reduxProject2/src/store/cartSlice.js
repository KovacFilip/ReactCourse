import { createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./ui-slice";

const initialState = { items: [], changedCart: false };
const FIREBASE_PATH =
    "https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

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

            state.changedCart = true;
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

            state.changedCart = true;
        },

        addOne(state, action) {
            state.items.forEach((item, index) => {
                if (item.id === action.payload) {
                    item.amount += 1;
                }
            });

            state.changedCart = true;
        },

        setCartItems(state, action) {
            state.items = action.payload.items || [];
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
            const response = await fetch(FIREBASE_PATH, {
                method: "PUT",
                body: JSON.stringify(cart),
            });

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
export const fetchCartData = () => async (dispatch) => {
    const fetchData = async () => {
        const response = await fetch(FIREBASE_PATH);

        if (!response.ok) {
            throw new Error("Could not fetch the cart data!");
        }

        const data = await response.json();

        return data;
    };

    try {
        const cartData = await fetchData();
        console.log(cartData);
        dispatch(setCartItems(cartData));
        dispatch(
            setNotification({
                status: "success",
                title: "Success!",
                message: "Fetched cart data successfully!",
            })
        );
    } catch (error) {
        console.log("err: ", error);
        dispatch(
            setNotification({
                status: "error",
                title: "Error!",
                message: "Fetching cart data failed!",
            })
        );
    }
};

export const { addItem, addOne, removeOne, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
