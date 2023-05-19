import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cartSlice";

function App() {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);
    const changed = useSelector((state) => state.cart.changedCart);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch, changed]);

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
