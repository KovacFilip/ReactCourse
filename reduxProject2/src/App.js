import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch } from "react-redux";
import { setNotification } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            console.log("here I am");
            dispatch(
                setNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data",
                })
            );

            const response = await fetch(
                "https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed!");
            }

            dispatch(
                setNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        };

        if (!isInitial) {
            sendCartData().catch((err) => {
                dispatch(
                    setNotification({
                        status: "error",
                        title: "Error!",
                        message: "Sending cart data failed!",
                    })
                );
            });
        } else {
            isInitial = false;
        }
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    message={notification.message}
                    title={notification.title}
                />
            )}
            <Layout>
                {show && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
