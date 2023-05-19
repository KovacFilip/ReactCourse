import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartSlice";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart));
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
